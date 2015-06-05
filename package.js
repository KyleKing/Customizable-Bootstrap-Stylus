Package.describe({
  name: 'kyleking:customizable-bootstrap-stylus',
  summary: "Highly configurable bootstrap-stylus integration.",
  version: "3.3.4_1",
  git: "https://github.com/KyleKing/customizable-bootstrap-stylus"
});

var DataPackage = 'kyleking:customizable-bootstrap-stylus-data@4.0.4';


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
  api.use(['jquery', DataPackage], 'client');
});
