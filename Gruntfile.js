module.exports = function (grunt) {

    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        compass: {
            dist: {
                options: {
                    sassDir: 'scss',
                    raw: 'sprite_load_path = "scss/images"',
                    cssDir: 'Content/styles',
                    imagesDir: 'Content/styles/images',
                    relativeAssets: true,
                    outputStyle: 'compressed',
                    environment: 'production',
                    noLineComments: true
                }
            },
            dev: {
                options: {
                    outputStyle: 'expanded',
                    environment: 'development',
                    noLineComments: false
                }
            }
        },
        bump: {
            options: {
                files: ['package.json', 'README.md'],
                commit: false,
                commitFiles: ['-a'],
                createTag: false,
                tagName: 'v%VERSION%',
                tagMessage: 'Release v%VERSION%',
                push: false
            }
        },
        watch: {
            css: {
                files: '**/*.scss',
                tasks: ['compass:dev']
            }
        }
    });

    grunt.loadNpmTasks('grunt-contrib-compass');
    grunt.loadNpmTasks('grunt-bump');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.registerTask('start', [
        'bump:patch',
        'watch'
    ]);
    grunt.registerTask('Release Minor Version', [
        'bump:minor'
    ]);
    grunt.registerTask('Release Major Version', [
        'bump:major'
    ]);
};