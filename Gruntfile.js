module.exports = function (grunt) {

    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        compass: {
            dist: {
                options: {
                    sassDir: 'scss',
                    cssDir: 'Content/styles',
                    outputStyle: 'compressed',
                    environment: 'production',
                    imagesDir: 'Content/styles/images',
                    relativeAssets: true
                }
            },
            dev: {
                options: {
                    cssDir: 'Content/styles/test',
                    imagesDir: 'scss/images',
                    outputStyle: 'expanded',
                    environment: 'development',
                    watch: true,
                    trace: true
                }
            }
        }, watch: {
            css: {
                files: '**/*.scss',
                tasks: ['compass'],
                options: {
                    livereload: true
                }
            }
        }
    });

    grunt.loadNpmTasks('grunt-contrib-compass');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.registerTask('start', [
        'compass'
    ]);
};