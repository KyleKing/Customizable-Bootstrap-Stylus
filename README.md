Customizable Bootstrap Stylus for Meteor
========================================
> A meteor package to customize the bootstrap-stylus package!

General Info
============
This package uses a git submodule of the current bootstrap-stylus port. By choosing true or false on the options below, you can easily customize what bootstrap components you want in your application. Choose as little or as many as you like. The entire import will be placed into an easily accessible file so you can see which styles are affected and easily import the mixins, variables, and extend components in a native-feeling stylus folder.

For testing, the Bootstrap TLDR html template is used. To run the test, download this repository and change directory to the test folder. Run ```meteor``` and point your browser to [localhost:3000](http://localhost:3000/). If anything looks amiss, please let me know through the [Github issues page][issue]. As a comparison, the LESS packages that this package is based on are included, as they helped tremendously in building this stylus port.

Installation
------------

1. Execute `meteor add kyleking:Customizable-Bootstrap-Stylus`
2. Create an empty `custom.bootstrap.json` file somewhere in your project. (for example: `/client/style/lib/custom.bootstrap.json`, then the rest of your style sheets can be placed in `/client/style/index.styl`, etc.)
3. Start `meteor`
4. Based on preference, change the true/false values to only the components you would like, (see [custom.bootstrap.json](#custombootstrapjson))
4. (optional) Edit the global bootstrap variables inside `custom.bootstrap.import.styl` (this file is only generated once and won't be overwritten)
5. (optional) Leverage the mixins [(see info below)](#mixins)


Example `custom.bootstrap.json`
------------------------------
This file is to configure which bootstrap parts you want in your project. Set those you like to `true`

If the file is empty, it will be filled for with the following content:
```
distributedConfiguration = [
  '{',
    '"modules" : {',
      '"variables": true,',
      '"mixins": true,',
      '',
      '"normalize": true,',
      
      '....etc!',
      
      
      '"popovers": true,',
      '"carousel": true,',
      '',
      '"responsive-utilities": true',
    '}',
  '}'
].join('\n');
```

Customizing
====
> The real benefit of injecting bootstrap like this is the access to Bootstrap's powerful mixins and other variables

### Mixins
You can import bootstrap mixins in your stylus file using `@import "custom.bootstrap.import.styl"`
Then insert any stylus code. Such as:

```stylus
`@import "lib/custom.bootstrap.import.styl"`





Misc
====

Contribution
-------

Contributions are always welcome! Help me bug test and fix this package by submitting an [issue][issue].

License
-------

This package is licensed with the MIT license and the [Bootstrap license](https://github.com/twbs/bootstrap/blob/v3.2.0/LICENSE) respectively.

Origin
------

This package is a port of the [meteor-bootstrap](https://github.com/Nemo64/meteor-bootstrap) package from LESS to stylus.

About Me
--------

Thanks for scrolling this far, if you want to get in touch:

 * [My website](http://kyleking.github.io) (kyleking.github.io)
 * [Twitter](http://twitter.com/Kyle4Miles) (@Kyle4Miles)

<!-- Links stored as variables -->

[issue]: https://github.com/KyleKing/Customizable-Bootstrap-Stylus/issues




