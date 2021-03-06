// Copy and pasted from bootstrap-stylus/bootstrap/index.styl
// remove @import and add the necessary quotation marks and commas
// Change spacing to make the file more legible as a JSON with two tabs for the internal content inside single quotes
// As the index.styl file is pretty static, a shell script probably isn't necessary

distributedConfiguration = [
'{',
'	"modules" : {',
'		"variables": true,',
'		"mixins": true,',
'',
'		"normalize": true,',
'		"print": true,',
'		"glyphicons": true,',
'',
'		"scaffolding": true,',
'		"utilities": true,',
'		"type": true,',
'		"code": true,',
'		"grid": true,',
'		"tables": true,',
'		"forms": true,',
'		"buttons": true,',
'',
'		"component-animations": true,',
'		"dropdowns": true,',
'		"button-groups": true,',
'		"input-groups": true,',
'		"navs": true,',
'		"navbar": true,',
'		"breadcrumbs": true,',
'		"pagination": true,',
'		"pager": true,',
'		"labels": true,',
'		"badges": true,',
'		"jumbotron": true,',
'		"thumbnails": true,',
'		"alerts": true,',
'		"progress-bars": true,',
'		"media": true,',
'		"list-group": true,',
'		"panels": true,',
'		"responsive-embed": true,',
'		"wells": true,',
'		"close": true,',
'',
'		"modals": true,',
'		"tooltip": true,',
'		"popovers": true,',
'		"carousel": true,',
'',
'		"responsive-utilities": true',
'	}',
'}'
].join('\n');
