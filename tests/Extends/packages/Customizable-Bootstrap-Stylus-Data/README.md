Customizable-Bootstrap-Stylus-Data
==================================
> This is the not the package you are looking for. Go to Customizable-Bootstrap-Stylus

This package does nothing more than providing server side access to bootstrap stylus files.
It also adds the static font for the front-end.

This package is most likely useless for you on it's own. Use [this bootstrap package](https://github.com/kyleking/Customizable-Bootstrap-Stylus) instead.

The reason this package exists is to provide a workaround for the limitation, that meteor does not allow static assets to be accessed in a build plugin. It is however allowed to 'use' other packages in a plugin and this other package can than provide static assets (which is what this package does).
