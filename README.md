WordPress Theme Localization with Grunt
=======================================

Use Grunt to scan your WordPress theme files and keep your language files up to date

## Getting started

Before proceeding, make sure you are familiar with the [internationalization process (i18n)](https://developer.wordpress.org/themes/functionality/internationalization/) of making your WordPress themes ready for translation.

### Install Gettext

Gettext is required by one of the Grunt tasks to process your language files.

#### Mac OS X

You can install Gettext via [homebrew](http://brew.sh/):

```sh
$ brew install gettext && brew link --force gettext
```

For more information, visit [http://www.gnu.org/software/gettext/](http://www.gnu.org/software/gettext/)

### Clone the repository

To create a local copy of the project, go to a preferred location and type:

```sh
$ git clone git@github.com:Phoenix2k/wp-theme-localization.git
```

This will copy all the required files from GitHub to your local machine into a folder called `wp-theme-localization`. If you wish to use a different name, simply add it at the end of the command above.

### Grunt

This demo requires Grunt `>=0.4.5`

If you haven't used [Grunt](http://gruntjs.com/) before, be sure to check out the [Getting Started](http://gruntjs.com/getting-started) guide.

This demonstration uses [load-grunt-config](http://firstandthird.github.io/load-grunt-config/) to break up tasks into individual `.js` files which are stored in the `grunt-tasks` folder.

#### Tasks

This demo consists of three tasks:

* [grunt-pot](https://www.npmjs.com/package/grunt-pot) – Scans files and creates a .pot file using xgettext
* [grunt-po2mo](https://www.npmjs.com/package/grunt-po2mo) – Compiles .po files into binary .mo files with msgfmt
* [grunt-contrib-watch](https://www.npmjs.com/package/grunt-contrib-watch) – Watches your theme files and runs one of the tasks above

These Grunt tasks serve as an example on how to scan your WordPress theme files for Gettext strings and update your language files accordingly. Ideally, you will integrate these tasks in your own build process and add the necessary configuration information to your `Gruntifle.js`.

To install all the required plugins, go to the project folder and type:

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

This will go through all the basic tasks and start the watch service.

Whenever Grunt detects a change in your theme's PHP files, it will update the language files contained in your languages folder. Similarly, if it detects changes in your language files, it will recompile them to [Machine Objects](https://developer.wordpress.org/themes/functionality/localization/#mo-machine-object-files) so WordPress can read them.

Note: If you delete a string, it will also be removed from your language files. However, if you already had a chance to localize it, it will be commented out and added at the bottom of your `.po` file and restored in case you change your mind later. Feel free to delete them if you really don't need them anymore.

To terminate the watch service, press `CTRL + C` or close your terminal window.
