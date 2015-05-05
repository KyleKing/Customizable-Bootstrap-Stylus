Forked package inside its own Meteor project. Currently figuring out how to make a package for customized stylus file imports, which May be way harder than it sounds!

HTML test from Bootstrap TLDR:
```html
<!doctype html>
<!--[if lt IE 7]>      <html class="no-js lt-ie9 lt-ie8 lt-ie7"> <![endif]-->
<!--[if IE 7]>         <html class="no-js lt-ie9 lt-ie8"> <![endif]-->
<!--[if IE 8]>         <html class="no-js lt-ie9"> <![endif]-->
<!--[if gt IE 8]><!--> <html class="no-js"> <!--<![endif]-->
  <head>
    <meta charset="utf-8">
    <title>Bootstrap TLDR</title>
    <meta name="description" content="All Bootstrap's components in one page. Briefly presented with their own CSS selectors.">
    <meta name="viewport" content="width=device-width">
    <!-- build:css(.) styles/vendor.css -->
    <!-- bower:css -->
    <link rel="stylesheet" href="bower_components/bootstrap/dist/css/bootstrap.css" />
    <!-- endbower -->
    <!-- endbuild -->
    <!-- build:css(.tmp) styles/main.css -->
    <link rel="stylesheet" href="styles/main.css">
    <!-- endbuild -->
    <!-- build:js scripts/vendor/modernizr.js -->
    <script src="bower_components/modernizr/modernizr.js"></script>
    <!-- endbuild -->
  </head>
</html>
```