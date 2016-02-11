Localize WordPress themes and plugins with Grunt
================================================
Use Grunt to scan your WordPress theme or plugin to generate language files and keep them up to date

[![GitHub license](https://img.shields.io/badge/license-CC0%201.0-orange.svg?style=flat-square)](http://creativecommons.org/publicdomain/zero/1.0/)

## Getting started

Before proceeding, make sure you are familiar with the [internationalization process (i18n)](https://developer.wordpress.org/themes/functionality/internationalization/) of making your WordPress themes ready for translation.

### Installation

#### Install Gettext

Gettext is required by one of the Grunt tasks to process your language files.

##### Mac OS X

You can install Gettext via [homebrew](http://brew.sh/):

```sh
$ brew install gettext && brew link --force gettext
```

For more information, visit [http://www.gnu.org/software/gettext/](http://www.gnu.org/software/gettext/)

#### Clone the repository

To create a local copy of the project, go to a preferred location and type:

```sh
$ git clone git@github.com:Phoenix2k/wp-theme-localization.git
```

This will copy all the required files from GitHub to your local machine into a folder called `wp-theme-localization`. If you wish to use a different name, simply add it at the end of the command above.

### Configuring Grunt

This demo requires Grunt `>=0.4.5`

If you haven't used [Grunt](http://gruntjs.com/) before, be sure to check out the [Getting Started](http://gruntjs.com/getting-started) guide.

[load-grunt-config](http://firstandthird.github.io/load-grunt-config/) is used to break up tasks into individual `.js` files. You can find them in the `grunt-tasks` folder.

#### Tasks

This demo consists of three tasks:

* [grunt-pot](https://www.npmjs.com/package/grunt-pot) – Scans files and creates a .pot file using xgettext
* [grunt-po2mo](https://www.npmjs.com/package/grunt-po2mo) – Compiles .po files into binary .mo files with msgfmt
* [grunt-contrib-watch](https://www.npmjs.com/package/grunt-contrib-watch) – Watches your theme files and runs one of the tasks above

These Grunt tasks serve as an example on how to scan your WordPress theme files for Gettext strings and update your language files on-the-fly.

Ideally, you will integrate these tasks in your own build process and add the configuration information to your `Gruntifle.js`.

To install all the required node modules, go to the project folder and type:

```sh
$ npm install
```

#### Configuration

Open `Gruntfile.js` and configure the paths to your theme folder:

```js
data: {
	config: {
		theme: {
			php_files   : 'path-to-your-theme',
			lang_files  : 'path-to-your-theme/languages',
			text_domain : 'theme-name'
		}
	}
},
```

The `text_domain` is the string you've used in your themes, i.e.:

```php
<?php _ex( 'Posted on %s', 'Post date', 'theme-name' ); ?>
```

## Workflow

To start Grunt, open a new terminal window and type the following in the project folder:
```sh
$ grunt
```

This will go through all the basic tasks and start the watch service:
* Whenever Grunt detects a change in your theme's PHP files, it will update the language files contained in your languages folder.
* If it detects changes in your language files, it will recompile them to [Machine Objects](https://developer.wordpress.org/themes/functionality/localization/#mo-machine-object-files) so WordPress can read them.
* If you delete a string, it will also be removed from your language files. Strings that have already been localized will be commented out and moved to the bottom of the document to serve as translation memory. If you decide to use the string you just deleted after all, the backup will be restored.

After the `theme-name.pot` file has been generated, you can start creating copies and rename them as `{lang}.po` or `{lang}_{COUNTRY}.po`. Avoid using `.pot` as the extension.

When creating copies:
* Check what [locale](http://i18n.svn.wordpress.org/) you should use as the name of your new language file. Some might only contain the language attribute, others language and country.
* Configure the [header information](https://make.wordpress.org/polyglots/handbook/tools/gettext/#the-po-file-header) of your `.po` files and double check them with an external editor (i.e. [Poedit](https://poedit.net/))

To terminate the watch service, press `CTRL + C` or close your terminal window.
