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
                    outputStyle: 'compressed',
                    environment: 'production',
                    relativeAssets: true,
                    watch: true
                }
            }
        }
    });

    grunt.loadNpmTasks('grunt-contrib-compass');
    grunt.registerTask('start', [
        'compass'
    ]);
};