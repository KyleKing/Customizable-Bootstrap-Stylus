Package.describe({
  name: "kyleking:bootstrap-less-data",
  summary: "bootstrap data",
  version: "3.3.4_1",
  git: "https://github.com/Nemo64/meteor-bootstrap-data.git"
});

Package.onUse(function(api) {
  api.versionsFrom('METEOR@0.9.2.2');
  api.addFiles('bootstrap-data.js', 'server');
  api.export(['BootstrapData']);
  api.add_files([
    'bootstrap/less/alerts.less',
    'bootstrap/less/badges.less',
    'bootstrap/less/bootstrap.less',
    'bootstrap/less/breadcrumbs.less',
    'bootstrap/less/button-groups.less',
    'bootstrap/less/buttons.less',
    'bootstrap/less/carousel.less',
    'bootstrap/less/close.less',
    'bootstrap/less/code.less',
    'bootstrap/less/component-animations.less',
    'bootstrap/less/dropdowns.less',
    'bootstrap/less/forms.less',
    'bootstrap/less/glyphicons.less',
    'bootstrap/less/grid.less',
    'bootstrap/less/input-groups.less',
    'bootstrap/less/jumbotron.less',
    'bootstrap/less/labels.less',
    'bootstrap/less/list-group.less',
    'bootstrap/less/media.less',
    'bootstrap/less/mixins/alerts.less',
    'bootstrap/less/mixins/background-variant.less',
    'bootstrap/less/mixins/border-radius.less',
    'bootstrap/less/mixins/buttons.less',
    'bootstrap/less/mixins/center-block.less',
    'bootstrap/less/mixins/clearfix.less',
    'bootstrap/less/mixins/forms.less',
    'bootstrap/less/mixins/gradients.less',
    'bootstrap/less/mixins/grid-framework.less',
    'bootstrap/less/mixins/grid.less',
    'bootstrap/less/mixins/hide-text.less',
    'bootstrap/less/mixins/image.less',
    'bootstrap/less/mixins/labels.less',
    'bootstrap/less/mixins/list-group.less',
    'bootstrap/less/mixins/nav-divider.less',
    'bootstrap/less/mixins/nav-vertical-align.less',
    'bootstrap/less/mixins/opacity.less',
    'bootstrap/less/mixins/pagination.less',
    'bootstrap/less/mixins/panels.less',
    'bootstrap/less/mixins/progress-bar.less',
    'bootstrap/less/mixins/reset-filter.less',
    'bootstrap/less/mixins/resize.less',
    'bootstrap/less/mixins/responsive-visibility.less',
    'bootstrap/less/mixins/size.less',
    'bootstrap/less/mixins/tab-focus.less',
    'bootstrap/less/mixins/table-row.less',
    'bootstrap/less/mixins/text-emphasis.less',
    'bootstrap/less/mixins/text-overflow.less',
    'bootstrap/less/mixins/vendor-prefixes.less',
    'bootstrap/less/mixins.less',
    'bootstrap/less/modals.less',
    'bootstrap/less/navbar.less',
    'bootstrap/less/navs.less',
    'bootstrap/less/normalize.less',
    'bootstrap/less/pager.less',
    'bootstrap/less/pagination.less',
    'bootstrap/less/panels.less',
    'bootstrap/less/popovers.less',
    'bootstrap/less/print.less',
    'bootstrap/less/progress-bars.less',
    'bootstrap/less/responsive-embed.less',
    'bootstrap/less/responsive-utilities.less',
    'bootstrap/less/scaffolding.less',
    'bootstrap/less/tables.less',
    'bootstrap/less/theme.less',
    'bootstrap/less/thumbnails.less',
    'bootstrap/less/tooltip.less',
    'bootstrap/less/type.less',
    'bootstrap/less/utilities.less',
    'bootstrap/less/variables.less',
    'bootstrap/less/wells.less',
    'bootstrap/js/affix.js',
    'bootstrap/js/alert.js',
    'bootstrap/js/button.js',
    'bootstrap/js/carousel.js',
    'bootstrap/js/collapse.js',
    'bootstrap/js/dropdown.js',
    'bootstrap/js/modal.js',
    'bootstrap/js/popover.js',
    'bootstrap/js/scrollspy.js',
    'bootstrap/js/tab.js',
    'bootstrap/js/tooltip.js',
    'bootstrap/js/transition.js',
  ], 'server', {isAsset:true});
  api.add_files([
    'bootstrap/fonts/glyphicons-halflings-regular.eot',
    'bootstrap/fonts/glyphicons-halflings-regular.svg',
    'bootstrap/fonts/glyphicons-halflings-regular.ttf',
    'bootstrap/fonts/glyphicons-halflings-regular.woff',
    'bootstrap/fonts/glyphicons-halflings-regular.woff2',
  ], 'client');
});
