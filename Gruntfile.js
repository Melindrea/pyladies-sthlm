// Generated on 2013-10-01 using generator-webapp 0.3.1
'use strict';
var LIVERELOAD_PORT = 35729;
var lrSnippet = require('connect-livereload')({port: LIVERELOAD_PORT});
var mountFolder = function (connect, dir) {
    return connect.static(require('path').resolve(dir));
};

// # Globbing
// for performance reasons we're only matching one level down:
// 'test/spec/{,*/}*.js'
// use this if you want to recursively match all subfolders:
// 'test/spec/**/*.js'

module.exports = function (grunt) {
    // show elapsed time at the end
    require('time-grunt')(grunt);
    // load all grunt tasks
    require('load-grunt-tasks')(grunt);

    // configurable paths
    var yeomanConfig = {
        app: 'www',
        dist: '_site'
    };

    grunt.initConfig({
        yeoman: yeomanConfig,
        shell: {                                // Task
            myntDist: {                      // Target
                command: 'mynt gen -f www _site'
            },
            mynt: {                      // Target
                command: 'mynt gen -f www .tmp'
            }
        },
        watch: {
            compass: {
                files: ['<%= yeoman.app %>/_assets/css/_sass/{,*/}*.{scss,sass}'],
                tasks: ['compass:server', 'autoprefixer']
            },
            mynt: {
                files: ['<%= yeoman.app %>/**/*.html'],
                tasks: ['mynt', 'compass']
            },
            livereload: {
                options: {
                    livereload: LIVERELOAD_PORT
                },
                files: [
                    '<%= yeoman.app %>{,*/}*.html',
                    '.tmp/assets/css/{,*/}*.css',
                    '<%= yeoman.app %>/_assets/js/{,*/}*.js',
                    '.tmp/assets/js/{,*/}*.js',
                    '<%= yeoman.app %>/_assets/images/{,*/}*.{png,jpg,jpeg,gif,webp,svg}'
                ]
            }
        },
        connect: {
            options: {
                port: 9000,
                // change this to '0.0.0.0' to access the server from outside
                hostname: 'localhost'
            },
            livereload: {
                options: {
                    middleware: function (connect) {
                        return [
                            lrSnippet,
                            mountFolder(connect, '.tmp'),
                            mountFolder(connect, yeomanConfig.app)
                        ];
                    }
                }
            },
            test: {
                options: {
                    middleware: function (connect) {
                        return [
                            mountFolder(connect, '.tmp'),
                            mountFolder(connect, 'test'),
                            mountFolder(connect, yeomanConfig.app)
                        ];
                    }
                }
            },
            dist: {
                options: {
                    middleware: function (connect) {
                        return [
                            mountFolder(connect, yeomanConfig.dist)
                        ];
                    }
                }
            }
        },
        open: {
            server: {
                path: 'http://localhost:<%= connect.options.port %>'
            }
        },
        clean: {
            server: '.tmp'
        },
        jshint: {
            options: {
                jshintrc: '.jshintrc'
            },
            all: [
                'Gruntfile.js',
                '<%= yeoman.app %>/scripts/{,*/}*.js',
                '!<%= yeoman.app %>/scripts/vendor/*',
                'test/spec/{,*/}*.js'
            ]
        },
        mocha: {
            all: {
                options: {
                    run: true,
                    urls: ['http://localhost:<%= connect.options.port %>/index.html']
                }
            }
        },
        compass: {
            options: {
                sassDir: '<%= yeoman.app %>/_assets/css/_sass',
                cssDir: '.tmp/assets/css',
                generatedImagesDir: '.tmp/assets/images/generated',
                imagesDir: '<%= yeoman.app %>/_assets/images',
                javascriptsDir: '<%= yeoman.app %>/_assets/js',
                fontsDir: '<%= yeoman.app %>/_assets/fonts',
                importPath: '<%= yeoman.app %>/_assets/_bower_components',
                httpImagesPath: '/assets/images',
                httpGeneratedImagesPath: '/assets/images/generated',
                httpFontsPath: '/assets/fonts',
                relativeAssets: false
            },
            dist: {
                options: {
                    generatedImagesDir: '<%= yeoman.dist %>/assets/images/generated'
                }
            },
            server: {
                options: {
                    debugInfo: true
                }
            }
        },
        autoprefixer: {
            options: {
                browsers: ['last 1 version']
            },
            dist: {
                files: [{
                    expand: true,
                    cwd: '.tmp/assets/css/',
                    src: '{,*/}*.css',
                    dest: '.tmp/assets/css/'
                }]
            }
        },
        // not used since Uglify task does concat,
        // but still available if needed
        /*concat: {
            dist: {}
        },*/
        // not enabled since usemin task does concat and uglify
        // check index.html to edit your build targets
        // enable this task if you prefer defining your build targets here
        uglify: {
            options: {
                mangle: false
            },
            dist: {
                files: {
                    '<%= yeoman.dist %>/assets/js/head.min.js': [
                        '<%= yeoman.app %>/_assets/_bower_components/jquery/jquery.js',
                        '<%= yeoman.app %>/_assets/_bower_components/modernizr/modernizr.custom.js'
                    ]
                }
            }
        },
        rev: {
            dist: {
                files: {
                    src: [
                        '<%= yeoman.dist %>/assets/js/{,*/}*.js',
                        '<%= yeoman.dist %>/assets/css/{,*/}*.css',
                        '<%= yeoman.dist %>/assets/images/{,*/}*.{png,jpg,jpeg,gif,webp}',
                        '<%= yeoman.dist %>/assets/fonts/{,*/}*.*'
                    ]
                }
            }
        },
        useminPrepare: {
            options: {
                dest: '<%= yeoman.dist %>'
            },
            html: '<%= yeoman.app %>/index.html'
        },
        usemin: {
            options: {
                dirs: ['<%= yeoman.dist %>']
            },
            html: ['<%= yeoman.dist %>/{,*/}*.html'],
            css: ['<%= yeoman.dist %>/assets/css/{,*/}*.css']
        },
        imagemin: {
            dist: {
                files: [{
                    expand: true,
                    cwd: '<%= yeoman.app %>/images',
                    src: '{,*/}*.{png,jpg,jpeg}',
                    dest: '<%= yeoman.dist %>/images'
                }]
            }
        },
        svgmin: {
            dist: {
                files: [{
                    expand: true,
                    cwd: '<%= yeoman.app %>/images',
                    src: '{,*/}*.svg',
                    dest: '<%= yeoman.dist %>/images'
                }]
            }
        },
        cssmin: {
            // This task is pre-configured if you do not wish to use Usemin
            // blocks for your CSS. By default, the Usemin block from your
            // `index.html` will take care of minification, e.g.
            //
            //     <!-- build:css({.tmp,app}) styles/main.css -->
            //
            dist: {
                files: {
                    '<%= yeoman.dist %>/assets/css/main.css': [
                        '.tmp/assets/css/{,*/}*.css'
                    ]
                }
            }
        },
        // Put files not handled in other tasks here
        copy: {
            dist: {
                files: [{
                    expand: true,
                    dot: true,
                    cwd: '<%= yeoman.app %>',
                    dest: '<%= yeoman.dist %>',
                    src: [
                        '*.{ico,png,txt}',
                        '.htaccess',
                        'images/{,*/}*.{webp,gif}',
                        'styles/fonts/{,*/}*.*'
                    ]
                }]
            }
        },
        modernizr: {
            devFile: '<%= yeoman.app %>/_assets/_bower_components/modernizr/modernizr.js',
            outputFile: '<%= yeoman.app %>/_assets/_bower_components/modernizr/modernizr.custom.js',
            files: [
                '<%= yeoman.dist %>/assets/js/{,*/}*.js',
                '<%= yeoman.dist %>/assets/css/{,*/}*.css',
                '!<%= yeoman.dist %>/assets/js/vendor/*'
            ],
            uglify: true
        },
        concurrent: {
            server: [
                'compass'
            ],
            test: [
            ],
            dist: [
                'compass',
                'imagemin',
                'svgmin'
            ]
        }
    });

    grunt.registerTask('server', function (target) {
        if (target === 'dist') {
            return grunt.task.run(['build', 'open', 'connect:dist:keepalive']);
        }

        grunt.task.run([
            'mynt',
            'concurrent:server',
            'autoprefixer',
            'connect:livereload',
            'open',
            'watch'
        ]);
    });

    grunt.registerTask('test', [
        'clean:server',
        'concurrent:test',
        'autoprefixer',
        'connect:test',
        'mocha'
    ]);

    grunt.registerTask('build', [
        'mynt:dist',
        'useminPrepare',
        'concurrent:dist',
        'autoprefixer',
        'modernizr',
        'cssmin',
        'uglify',
        'copy:dist',
        'rev',
        'usemin'
    ]);

    grunt.registerTask('mynt', function (target) {
        if (target === 'dist') {
            return grunt.task.run(['shell:myntDist']);
        }

        grunt.task.run(['shell:mynt']);

    });

    grunt.registerTask('default', [
        'jshint',
        'test',
        'build'
    ]);
};
