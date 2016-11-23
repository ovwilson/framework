# framework

# Grunt Configuration

```
module.exports = function (grunt) {

    // Project configuration.

    grunt.initConfig({

        pkg: grunt.file.readJSON('package.json'),

        clean: {
            framework: ["framework/src/", "framework/public", "framework/config", "framework/dist"]
        },

        exec: {
            'test': {
                cmd: 'echo Great. Grunt is working!!'
            },
            'make_dirs': {
                cmd: function (path) {
                    return 'cd ' + path + ' && mkdir src && mkdir public && mkdir config && mkdir dist && cd src && mkdir app';
                }
            },
            'echo_files': {
                cmd: function (path) {
                    var output = [
                        'cd ' + path,
                        'echo.>webpack.config.js',
                        'echo.>.jshintrc',
                        'echo.>jsconfig.json',
                        'echo.>tslint.json',
                        'echo.>tsconfig.json',
                        'cd src',
                        'echo.>index.html',
                        'echo.>main.ts',
                        'echo.>polyfills.ts',
                        'echo.>rxjs-extensions.ts',
                        'echo.>vendor.ts',                        
                        'cd.. && cd public',
                        'echo.>styles.css',
                        'cd.. && cd config',
                        'echo.>helpers.js',
                        'echo.>webpack.common.js',
                        'echo.>webpack.dev.js',
                        'echo.>webpack.prod.js',
                        'cd.. && cd src && cd app',
                        'echo.>app.component.ts',
                        'echo.>app.module.ts',
                        'echo.>app.routes.ts',
                        'echo.>app.component.css',
                        'echo.>app.component.html',
                        'echo.>app-preload-strategy.ts'
                    ].join(' && ');
                    return output;
                }
            }
        },
        copy: {
            framework: {
                files: [
                    { expand: true, cwd: 'localapps-framework/src/app/dashboard/', src: '**', dest: 'framework/src/app/dashboard/' }
                ]
            }
        }
    });

    // Load the plugin that provides the "uglify" task.
    grunt.loadNpmTasks('grunt-exec');
    grunt.loadNpmTasks('grunt-contrib-clean');
    grunt.loadNpmTasks('grunt-contrib-copy');

    // Default task(s).
    grunt.registerTask('default', ['exec:test']);
    grunt.registerTask('framework', ['clean:framework', 'exec:make_dirs:framework', 'exec:echo_files:framework']);


};


```