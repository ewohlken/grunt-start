module.exports = function(grunt){

	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),

		/* PATH DATA */
		path: {
			dev:"dev/",
			prod:"prod/",
			css:"css/",
			scss:"scss/",
			js:"js/",
			html:"html/",
			host: ""
		},

		/* GRUNT TASKS */
		compass: {
			dev: {
				options: {
					cssDir: '<%= path.dev + path.css %>',
					sassDir: '<%= path.dev + path.scss %>',
					outputStyle: 'nested',
					require: 'sass-globbing',
					sourcemap: true
				} 
			},
			prod: {
				options: {
					cssDir: '<%= path.prod + path.css %>',
					sassDir: '<%= path.dev + path.scss %>',
					outputStyle: 'compressed',
					require: 'sass-globbing',
					sourcemap: true
				}
			}
		},
		watch: {
			css: {
				options: {
					livereload: true
				},
				files: ['<%= path.dev + path.scss %>**/*.scss'],
				tasks:['css']
			},
			html: {
				options: {
					livereload: true
				},
				files: ['<%= path.dev + path.html %>**/*.html'],
				tasks:['html']
			},
			js: {
				options: {
					livereload: true
				},
				files: ['<%= path.dev + path.js %>**/*.js'],
				tasks:['js']
			}
		},
		'sftp-remote': { // or 'ftp-remote'
			prod: {
				css: {
					auth: {
						host: '<%= path.host %>',
						port: 21,
						authKey: 'key1'
					},
					src: '<%= path.prod + path.css %>',
					dest: '<%= path.prod + path.css %>'
				},
				js: {
					auth: {
						host: '<%= path.host %>',
						port: 21,
						authKey: 'key1'
					},
					src: '<%= path.prod + path.js %>',
					dest: '<%= path.prod + path.js %>'
				},
				html: {
					auth: {
						host: '<%= path.host %>',
						port: 21,
						authKey: 'key1'
					},
					src: '<%= path.prod %>*.html',
					dest: '<%= path.prod %>'
				}
			}
		},
		'http-server': {
			dev: {
				root: '<%=path.dev%>',
				port: 8282,
				host: "0.0.0.0",
				ext: "html",
				runInBackground: true
			}
		},
		includes: {
			dev: {
				options: {
					filenameSuffix: '.html',
					includePath: '<%= path.dev + path.html %>partials/'
				},
				files: [{
					expand: true,
					cwd: '<%=path.dev + path.html %>',
					src: '*.html',
					dest: '<%=path.dev %>'
				}]
			},
			prod: {
				options: {
					filenameSuffix: '.html'
				},
				files: [{
					expand: true,
					cwd: '<%=path.dev + path.html %>',
					src: '**/*.html',
					dest: '<%=path.prod %>'
				}]
			}
		},
		template: {
			dev: {
				'options': {
					data: "<%=path %>"
				},
				'files': [{
					expand: true,
					cwd: '<%=path.dev %>',
					src: '*.html',
					dest: '<%=path.dev%>'
				}]
			},
			prod: {
				'options': {
					data: "<%=path %>"
				},
				'files': [{
					expand: true,
					cwd: '<%=path.prod %>',
					src: '*.html',
					dest: '<%=path.prod%>'
				}]
			}
		},
		uglify: {
			prod: {
				src: '<%=path.prod + path.js%>app.js',
				dest: '<%=path.prod + path.js%>app.min.js'
			}
		},
		jshint: {
			dev: ['GruntFile.js', '<%=path.dev + path.js%>app.js']
		},
	});

	require('matchdep').filterDev('grunt-*').forEach(grunt.loadNpmTasks);

	grunt.registerTask('css', ['compass:dev']);
	grunt.registerTask('html', ['includes:dev', 'template:dev']);
	grunt.registerTask('js', ['jshint:dev']);
	grunt.registerTask('build', ['includes:prod', 'template:prod', 'uglify:prod', 'compass:prod']);
	grunt.registerTask('deploy', 'sftp-remote:prod');

	grunt.registerTask('dev', ['html', 'js', 'css', 'http-server:dev', 'watch']);
	grunt.registerTask('prod', ['build', 'deploy']);

	grunt.registerTask('default', 'watch');
};