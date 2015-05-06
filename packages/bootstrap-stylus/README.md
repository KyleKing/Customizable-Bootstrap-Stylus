# Customizable Bootstrap Stylus for Meteor
==========================================
> This package lets you cherrypick only the Bootstrap components you need

General Info
------------
This package places all relevant source code into your meteor project so you have full control over any styles imported. Simply import the bootstrap mixins and variables as you would with a manual install, but without any of the headaches (those were all mine retrofitting this for you :) ).

Installation
------------

1. Execute `meteor add kyleking:bootstrap stylus`
2. Create an empty `custom.bootstrap.json` file somewhere in your project. (`/client/style/lib/custom.bootstrap.json` for example)
3. Start 'meteor' and change the true false values in the json file you just created to mimic what you would like in your porject(see [custom.bootstrap.json](#custombootstrapjson))
4. (optional) Now you have full control over `custom.bootstrap.import.less` (this is only generated once and won't be overwritten) which will have appeared next to your json file

`custom.bootstrap.json`
---------------------
This file is to configure which bootstrap parts you need in your project. Set those you like to `true`!
If the file is empty, it will be filled for with the following content:

```JSON
distributedConfiguration = [
  '{',
    '"modules" : {',
      '"variables": true,',
      '"mixins": true,',
      '',
      '"normalize": true,',
      '"print": true,',
      '"glyphicons": true,',
      '',
      '"scaffolding": true,',
      '"utilities": true,',
      '"type": true,',
      '"code": true,',
      '"grid": true,',
      '"tables": true,',
      '"forms": true,',
      '"buttons": true,',
      '',
      '"component-animations": true,',
      '"dropdowns": true,',
      '"button-groups": true,',
      '"input-groups": true,',
      '"navs": true,',
      '"navbar": true,',
      '"breadcrumbs": true,',
      '"pagination": true,',
      '"pager": true,',
      '"labels": true,',
      '"badges": true,',
      '"jumbotron": true,',
      '"thumbnails": true,',
      '"alerts": true,',
      '"progress-bars": true,',
      '"media": true,',
      '"list-group": true,',
      '"panels": true,',
      '"responsive-embed": true,',
      '"wells": true,',
      '"close": true,',
      '',
      '"modals": true,',
      '"tooltip": true,',
      '"popovers": true,',
      '"carousel": true,',
      '',
      '"responsive-utilities": true',
    '}',
  '}'
].join('\n');
```


Contribution
-------

Contributions are always welcome! Help me bug test and fix this package, so I can release it on Atmosphere

License
-------

This package is licensed with the MIT license.
Also, look at the [Bootstrap license](https://github.com/twbs/bootstrap/blob/v3.2.0/LICENSE).

Origin
------

This package is very closely based on the [meteor-bootstrap](https://github.com/Nemo64/meteor-bootstrap) package. I created a new repository to test porting the same method to a stylus bootstrap package. Both of @Nemo64's packages are included for comparison.