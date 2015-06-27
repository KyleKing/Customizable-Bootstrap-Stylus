/*******************************************************************/
/*   Logic file to determine which packages to include based on custom.bootstrap.json          */
/******************************************************************/

// Included packages:
var fs   = Npm.require('fs'); // Node filesystem: https://nodejs.org/api/fs.html
var path = Npm.require('path'); // Path Path Package: https://nodejs.org/api/path.html

// Create file and header section of new stylus files
var createStylusFile = function (path, content) {
  fs.writeFileSync(path, content.join('\n'), { encoding: 'utf8' });
};

var getAsset = function (filename) {
  return BootstrapData(filename);
};

// Actually content for each file
var getStylusContent = function (filename) {
  var content = getAsset(filename);
  return '\n\n// @import "' + filename + '"\n' + content.replace(/@import\s*["']([^"]+)["'];?/g, function (statement, importFile) {
    return getStylusContent(path.join(path.dirname(filename), importFile + '.styl'));
    // note: '.styl is to complete filename as Stylus doesn't in import text
  });
};

// Main function
var handler = function (compileStep, isLiterate) {
  var jsonPath = compileStep._fullInputPath;

  // read the configuration of the project
  var userConfiguration = compileStep.read().toString('utf8');

  // if empty (and only then) write distributed configuration
  if (userConfiguration === '') {
    userConfiguration = distributedConfiguration;
    fs.writeFileSync(jsonPath, userConfiguration);
  }

  // parse configuration
  try {
    userConfiguration = JSON.parse(userConfiguration);
  } catch (e) {
    compileStep.error({
      message: e.message,
      sourcePath: compileStep.inputPath
    });
    return;
  }

  // configuration
  var moduleConfiguration = userConfiguration.modules || {};

  // these variables contain the files that need to be included
  var js = {}; // set of required js files
  var stylus = {}; // set of required stylus files

  // read module configuration to find out which js/stylus files are needed
  var allModulesOk = _.every(moduleConfiguration, function (enabled, module) {

    var moduleDefinition = moduleDefinitions[module];
    if (moduleDefinition === null) {
      compileStep.error({
        message: "The module '" + module + "' does not exist.",
        sourcePath: compileStep.inputPath
      });
      return false; // break
    }

    if (! enabled) {
      return true; // continue
    }

    _.each(moduleDefinition.stylus || [], function (file) {
      stylus[file] = file;
    });
    _.each(moduleDefinition.js || [], function (file) {
      js[file] = file;
    });

    return true;
  });

  if (! allModulesOk) {
    return;
  }

  // add javascripts
  for (var jsPath in js) {
    var file = getAsset(jsPath);
    compileStep.addJavaScript({
      path: jsPath,
      data: file,
      sourcePath: jsPath,
      bare: true // they are already wrapped (tiny optimisation)
    });
  }

  // Outputs complete file paths for new files in user meteor application
  var mixinsStylusFile = jsonPath.replace(/json$/i, 'mixins.import.styl');
  var importStylusFile = jsonPath.replace(/json$/i, 'import.styl');
  var outputStylusFile = jsonPath.replace(/json$/i, 'styl');

  // Create file with header descriptor section
  // Create mixins file
  createStylusFile(mixinsStylusFile, [
    "// THIS FILE IS GENERATED, DO NOT MODIFY IT!",
    "// These are the mixins bootstrap provides",
    "// They are included here so you can use them in your stylus files too,",
    "// However: you should @import \"" + path.basename(importStylusFile) + "\" instead of this",
    getStylusContent('bootstrap/bootstrap/mixins.styl'),
    getStylusContent('bootstrap/bootstrap/utilities.styl')
  ]);

  // create the file that can be modified (variables)
  if (! fs.existsSync(importStylusFile)) {
    createStylusFile(importStylusFile, [
      "// This File is for you to modify!",
      "// It won't be overwritten as long as it exists.",
      "// You may include this file into your stylus files to benefit from",
      "// mixins and variables that bootstrap provides.",
      '',
      '@import "' + path.basename(mixinsStylusFile) + '"',
      getStylusContent('bootstrap/bootstrap/variables.styl')
    ]);
  }

  // create the file that finally includes bootstrap (components)
  var bootstrapContent = [
    "// THIS FILE IS GENERATED, DO NOT MODIFY IT!",
    "// It includes the bootstrap modules configured in " + compileStep.inputPath + ".",
    "// You may need to use 'meteor add stylus' if the styles are not loaded.",
    '',
    "// If it throws errors your bootstrap.import.styl is probably invalid.",
    "// To fix that remove that file and then recover your changes.",
    '',
    '@import "' + path.basename(importStylusFile) + '"',
    '$icon-font-path = "/packages/kyleking_customizable-bootstrap-stylus-data/bootstrap/fonts/"'
  ];

  // Find each component and push to file
  _.each(stylus, function (stylusPath) {
    if (stylusPath !== 'bootstrap/bootstrap/mixins.styl' && stylusPath !== 'bootstrap/bootstrap/utilities.styl' && stylusPath !== 'bootstrap/bootstrap/variables.styl') {
      bootstrapContent.push(getStylusContent('' + stylusPath));
      // console.log(stylusPath);
    }
  });
  createStylusFile(outputStylusFile, bootstrapContent);
};

// Runs large function handler upon findins the bootstrap.json file
Plugin.registerSourceHandler('bootstrap.json', {archMatching: 'web'}, handler);
