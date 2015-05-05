module.exports = function ( grunt ) {

	'use strict';

/**
 * Tasks and configuration
 */

	require('load-grunt-config')(grunt, {

		configPath: require('path').join( process.cwd(), 'grunt-tasks' ),

		data: {
			config: {
				theme: {
					php_files   : 'path-to-your-theme',
					lang_files  : 'path-to-your-theme/languages',
					text_domain : 'theme-name'
				}
			}
		},

		loadGruntTasks: {
			pattern: 'grunt-*',
			config: require('./package.json'),
			scope: 'devDependencies'
		}

	});

};