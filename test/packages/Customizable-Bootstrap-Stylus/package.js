Package.describe({
  name: 'kyleking:Customizable-Bootstrap-Stylus',
  summary: "Highly configurable bootstrap-stylus integration.",
  version: "3.3.4_2",
  git: "https://github.com/KyleKing/Customizable-Bootstrap-Stylus"
});

var DataPackage = 'kyleking:Customizable-Bootstrap-Stylus-Data';


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
