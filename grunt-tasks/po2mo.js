/**
 * Compile .po files into binary .mo files with msgfmt
 * @link https://github.com/MicheleBertoli/grunt-po2mo
 */

	module.exports = {
		files: {
			src: '<%= config.theme.lang_files %>/**/*.po',
			expand: true
		}
	};
