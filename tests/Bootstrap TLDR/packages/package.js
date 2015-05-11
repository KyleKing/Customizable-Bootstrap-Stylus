Package.describe({
  name: "kyleking:customizable-bootstrap-stylus-data",
  summary: "Raw bootstrap-stylus package",
  version: "4.0.4",
  git: "https://github.com/kyleking/customizable-bootstrap-stylus-data.git"
});

Package.onUse(function(api) {
  api.versionsFrom('METEOR@0.9.2.2');
  api.addFiles('bootstrap-data.js', 'server');
  api.export(['BootstrapData']);
