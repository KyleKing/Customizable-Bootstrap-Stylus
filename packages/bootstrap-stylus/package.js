Package.describe({
  name: 'kyleking:bootstrap-stylus',
  summary: "Highly configurable bootstrap integration.",
});
  // version: "3.3.4_2",
  // git: "https://github.com/Nemo64/meteor-bootstrap"

  var DataPackage = 'kyleking:bootstrap-stylus-data';


Package._transitional_registerBuildPlugin({
  name: 'bootstrap-configurator',
  use: [
    'underscore@1.0.2',
    DataPackage
  ],
  sources: [
    'module-definitions.js',
    'distributed-configuration.js',
    'bootstrap-configurator.js'
  ],
  npmDependencies: {}
});

Package.on_use(function (api) {
  api.versionsFrom("METEOR@0.9.2.2");
  api.use([
    'jquery',
    DataPackage
  ], 'client');
});
