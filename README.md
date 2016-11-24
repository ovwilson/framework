# framework

# VSCODE Settings
```
// Place your settings in this file to overwrite the default settings
{

    // Editor
    
    "editor.formatOnSave": true,
    
    // Window

    // Adjust the zoom level of the window. The original size is 0 and each increment above (e.g. 1) or below (e.g. -1) represents zooming 20% larger or smaller. You can also enter decimals to adjust the zoom level with a finer granularity.
    "window.zoomLevel": 1,

    // Files

    // Configure glob patterns for excluding files and folders.
    "files.exclude" : {
        "**/.git": true,
        "**/.svn": true,
        "**/.hg": true,
        "**/.DS_Store": true
    },

        // Controls auto save of dirty files. Accepted values:  "off", "afterDelay", "onFocusChange" (editor loses focus), "onWindowChange" (window loses focus). If set to "afterDelay", you can configure the delay in "files.autoSaveDelay".
    "files.autoSave": "afterDelay",

    // Controls the delay in ms after which a dirty file is saved automatically. Only applies when "files.autoSave" is set to "afterDelay"
    "files.autoSaveDelay": 1000,

    // Extensions

    // Automatically update extensions
    "extensions.autoUpdate": true,

    // JSHint configuration
    
    // A path to file containing the configuration options for jshint. If the file exists it overrides jshint.options and any .jshintrc file
    "jshint.config": ".jshintrc",
    
    // TypeScript

    // Specifies the folder path containing the tsserver and lib*.d.ts files to use.
    "typescript.tsdk": ".\\node_modules\\typescript\\lib",

    // TSLint

    // An additional rules directory
    "tslint.rulesDirectory": "typings",
    
    "git.confirmSync": false
}

```


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