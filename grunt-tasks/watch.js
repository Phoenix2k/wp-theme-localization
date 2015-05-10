/**
 * Runs tasks whenever watched files change
 * @link https://github.com/gruntjs/grunt-contrib-watch
 */

	module.exports = {

		// Scans PHP files for changes and updates `.po(t)` files
		php_files: {
			files: [
				'<%= config.theme.php_files %>/**/*.php',
			],
			tasks: [ 'pot' ]
		},

		// Converts `.po` files to `.mo`
		pot_files: {
			files: [
				'<%= config.theme.lang_files %>/**/*.pot',
				'<%= config.theme.lang_files %>/**/*.po'
			],
			tasks: [ 'po2mo' ]
		}

	};
