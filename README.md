Customizable Bootstrap Stylus for Meteor
========================================
> The easiest way to integrate Bootstrap Stylus 3.3.4 into a Meteor project

[![Meteor Icon](http://icon.meteor.com/package/kyleking:customizable-bootstrap-stylus)][atmosphere]

Installation
------------

1. Execute `meteor add kyleking:Customizable-Bootstrap-Stylus`
2. Create an empty `custom.bootstrap.json` file somewhere in your project. (for example: `/client/style/lib/custom.bootstrap.json`)
3. Start `meteor`
4. The `custom.bootstrap.json` file will be populated with all true values and three additional files will be written in the same folder. Based on preference, change the true/false values to only the components you would like, (see [custom.bootstrap.json](#custombootstrapjson))
4. (optional) Edit the global bootstrap variables inside `custom.bootstrap.import.styl` (this file is only generated once and won't be overwritten)
5. (optional) Leverage the mixins (see info below)

Mixins
------------------------------
You can import bootstrap mixins in your stylus file using `@import "custom.bootstrap.import.styl"`
Then insert any stylus code. Such as:

```styl
// Import the user-edited variable file (this includes the mixins already)
// Note: you may need to change the route from lib/ depending on where you put your custom.botstrap.json file
@import "lib/custom.bootstrap.import.styl"

// Put your Stylus code here!
.wrapper
  make-row()

.content-main
  make-lg-column(8)

.content-secondary
  make-lg-column(3)
  make-lg-column-offset(1)

// etc. Go crazy!
```


Example `custom.bootstrap.json`
------------------------------
This file is to configure which bootstrap parts you want in your project. Set those you like to `true`

If the file is empty, it will be filled for with the following content:
```JSON
{
	"modules" : {
		"variables": true,
		"mixins": true,

		"normalize": true,
		"print": true,
		"glyphicons": true,

		"scaffolding": true,
		"utilities": true,
		"type": true,
		"code": true,
		"grid": true,
		"tables": true,
		"forms": true,
		"buttons": true,

		"component-animations": true,
		"dropdowns": true,
		"button-groups": true,
		"input-groups": true,
		"navs": true,
		"navbar": true,
		"breadcrumbs": true,
		"pagination": true,
		"pager": true,
		"labels": true,
		"badges": true,
		"jumbotron": true,
		"thumbnails": true,
		"alerts": true,
		"progress-bars": true,
		"media": true,
		"list-group": true,
		"panels": true,
		"responsive-embed": true,
		"wells": true,
		"close": true,

		"modals": true,
		"tooltip": true,
		"popovers": true,
		"carousel": true,

		"responsive-utilities": true
	}
}

```


General Info
============
This package uses a git submodule of the current bootstrap-stylus port. By choosing true or false on the options above, you can easily customize what bootstrap components you want in your application. Choose as little or as many as you like. The entire import will be placed into an easily accessible file so you can see which styles are affected and easily import the mixins, variables, and extend components in a native-feeling stylus folder.

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

 * [My website](http://kyleking.me) (kyleking.me)
 * [Twitter](http://twitter.com/Kyle4Miles) (@Kyle4Miles)

<!-- Links stored as variables -->

[issue]: https://github.com/KyleKing/Customizable-Bootstrap-Stylus/issues
[atmosphere]: https://atmospherejs.com/kyleking/customizable-bootstrap-stylus