/**
 * Runs tasks whenever watched files change
 * @link https://github.com/gruntjs/grunt-contrib-watch
 */

	module.exports = {

		// Scans PHP files for changes and updates .PO(T) files
		php_files: {
			files: [
				'<%= config.theme.php_files %>/**/*.php',
			],
			tasks: [ 'pot' ]
		},

		// Converts .PO files to .MO
		pot_files: {
			files: [
				'<%= config.theme.lang_files %>/**/*.pot',
				'<%= config.theme.lang_files %>/**/*.po'
			],
			tasks: [ 'po2mo' ]
		}

	};
