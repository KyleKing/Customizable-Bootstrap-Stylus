Package.describe({
  name: "kyleking:bootstrap-stylus-data",
  summary: "bootstrap data",
});
  // version: "3.3.4_1",
  // git: "https://github.com/Nemo64/meteor-bootstrap-data.git"

Package.onUse(function(api) {
  api.versionsFrom('METEOR@0.9.2.2');
  api.addFiles('bootstrap-data.js', 'server');
  api.export(['BootstrapData']);
  api.add_files([
    'bootstrap/bootstrap-stylus/bootstrap/alerts.styl',
    'bootstrap/bootstrap-stylus/bootstrap/badges.styl',
    'bootstrap/bootstrap-stylus/bootstrap/index.styl',
    'bootstrap/bootstrap-stylus/bootstrap/breadcrumbs.styl',
    'bootstrap/bootstrap-stylus/bootstrap/button-groups.styl',
    'bootstrap/bootstrap-stylus/bootstrap/buttons.styl',
    'bootstrap/bootstrap-stylus/bootstrap/carousel.styl',
    'bootstrap/bootstrap-stylus/bootstrap/close.styl',
    'bootstrap/bootstrap-stylus/bootstrap/code.styl',
    'bootstrap/bootstrap-stylus/bootstrap/component-animations.styl',
    'bootstrap/bootstrap-stylus/bootstrap/dropdowns.styl',
    'bootstrap/bootstrap-stylus/bootstrap/forms.styl',
    'bootstrap/bootstrap-stylus/bootstrap/glyphicons.styl',
    'bootstrap/bootstrap-stylus/bootstrap/grid.styl',
    'bootstrap/bootstrap-stylus/bootstrap/input-groups.styl',
    'bootstrap/bootstrap-stylus/bootstrap/jumbotron.styl',
    'bootstrap/bootstrap-stylus/bootstrap/labels.styl',
    'bootstrap/bootstrap-stylus/bootstrap/list-group.styl',
    'bootstrap/bootstrap-stylus/bootstrap/media.styl',
    'bootstrap/bootstrap-stylus/bootstrap/mixins/alerts.styl',
    'bootstrap/bootstrap-stylus/bootstrap/mixins/background-variant.styl',
    'bootstrap/bootstrap-stylus/bootstrap/mixins/border-radius.styl',
    'bootstrap/bootstrap-stylus/bootstrap/mixins/buttons.styl',
    'bootstrap/bootstrap-stylus/bootstrap/mixins/center-block.styl',
    'bootstrap/bootstrap-stylus/bootstrap/mixins/clearfix.styl',
    'bootstrap/bootstrap-stylus/bootstrap/mixins/forms.styl',
    'bootstrap/bootstrap-stylus/bootstrap/mixins/gradients.styl',
    'bootstrap/bootstrap-stylus/bootstrap/mixins/grid-framework.styl',
    'bootstrap/bootstrap-stylus/bootstrap/mixins/grid.styl',
    'bootstrap/bootstrap-stylus/bootstrap/mixins/hide-text.styl',
    'bootstrap/bootstrap-stylus/bootstrap/mixins/image.styl',
    'bootstrap/bootstrap-stylus/bootstrap/mixins/labels.styl',
    'bootstrap/bootstrap-stylus/bootstrap/mixins/list-group.styl',
    'bootstrap/bootstrap-stylus/bootstrap/mixins/nav-divider.styl',
    'bootstrap/bootstrap-stylus/bootstrap/mixins/nav-vertical-align.styl',
    'bootstrap/bootstrap-stylus/bootstrap/mixins/opacity.styl',
    'bootstrap/bootstrap-stylus/bootstrap/mixins/pagination.styl',
    'bootstrap/bootstrap-stylus/bootstrap/mixins/panels.styl',
    'bootstrap/bootstrap-stylus/bootstrap/mixins/progress-bar.styl',
    'bootstrap/bootstrap-stylus/bootstrap/mixins/reset-filter.styl',
    'bootstrap/bootstrap-stylus/bootstrap/mixins/resize.styl',
    'bootstrap/bootstrap-stylus/bootstrap/mixins/responsive-visibility.styl',
    'bootstrap/bootstrap-stylus/bootstrap/mixins/size.styl',
    'bootstrap/bootstrap-stylus/bootstrap/mixins/tab-focus.styl',
    'bootstrap/bootstrap-stylus/bootstrap/mixins/table-row.styl',
    'bootstrap/bootstrap-stylus/bootstrap/mixins/text-emphasis.styl',
    'bootstrap/bootstrap-stylus/bootstrap/mixins/text-overflow.styl',
    'bootstrap/bootstrap-stylus/bootstrap/mixins/vendor-prefixes.styl',
    'bootstrap/bootstrap-stylus/bootstrap/mixins.styl',
    'bootstrap/bootstrap-stylus/bootstrap/modals.styl',
    'bootstrap/bootstrap-stylus/bootstrap/navbar.styl',
    'bootstrap/bootstrap-stylus/bootstrap/navs.styl',
    'bootstrap/bootstrap-stylus/bootstrap/normalize.styl',
    'bootstrap/bootstrap-stylus/bootstrap/pager.styl',
    'bootstrap/bootstrap-stylus/bootstrap/pagination.styl',
    'bootstrap/bootstrap-stylus/bootstrap/panels.styl',
    'bootstrap/bootstrap-stylus/bootstrap/popovers.styl',
    'bootstrap/bootstrap-stylus/bootstrap/print.styl',
    'bootstrap/bootstrap-stylus/bootstrap/progress-bars.styl',
    'bootstrap/bootstrap-stylus/bootstrap/responsive-embed.styl',
    'bootstrap/bootstrap-stylus/bootstrap/responsive-utilities.styl',
    'bootstrap/bootstrap-stylus/bootstrap/scaffolding.styl',
    'bootstrap/bootstrap-stylus/bootstrap/tables.styl',
    'bootstrap/bootstrap-stylus/bootstrap/theme.styl',
    'bootstrap/bootstrap-stylus/bootstrap/thumbnails.styl',
    'bootstrap/bootstrap-stylus/bootstrap/tooltip.styl',
    'bootstrap/bootstrap-stylus/bootstrap/type.styl',
    'bootstrap/bootstrap-stylus/bootstrap/utilities.styl',
    'bootstrap/bootstrap-stylus/bootstrap/variables.styl',
    'bootstrap/bootstrap-stylus/bootstrap/wells.styl',
    'bootstrap/bootstrap-stylus/js/affix.js',
    'bootstrap/bootstrap-stylus/js/alert.js',
    'bootstrap/bootstrap-stylus/js/button.js',
    'bootstrap/bootstrap-stylus/js/carousel.js',
    'bootstrap/bootstrap-stylus/js/collapse.js',
    'bootstrap/bootstrap-stylus/js/dropdown.js',
    'bootstrap/bootstrap-stylus/js/modal.js',
    'bootstrap/bootstrap-stylus/js/popover.js',
    'bootstrap/bootstrap-stylus/js/scrollspy.js',
    'bootstrap/bootstrap-stylus/js/tab.js',
    'bootstrap/bootstrap-stylus/js/tooltip.js',
    'bootstrap/bootstrap-stylus/js/transition.js',
  ], 'server', {isAsset:true});
  api.add_files([
    'bootstrap/bootstrap-stylus/fonts/glyphicons-halflings-regular.eot',
    'bootstrap/bootstrap-stylus/fonts/glyphicons-halflings-regular.svg',
    'bootstrap/bootstrap-stylus/fonts/glyphicons-halflings-regular.ttf',
    'bootstrap/bootstrap-stylus/fonts/glyphicons-halflings-regular.woff',
    'bootstrap/bootstrap-stylus/fonts/glyphicons-halflings-regular.woff2',
  ], 'client');
});