module.exports = function(grunt) {
    // Project configuration.
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
  
        sass: {
            options: {},
            dist: {
                options: {
                    outputStyle: 'compressed',
                    precision: 5
                },
                files: {
                    'assets/css/app.css': 'assets/scss/app.scss'
                }
            }
        },
        watch: {
            options: {
                livereload: true
            },
            sass: {
                files: ['assets/scss/*.scss', 'assets/scss/*/*.scss'],
                tasks: ['sass'],
                options: {
                    livereload: true,
                }
            },
        },
    });

    // Load tasks
    grunt.loadNpmTasks('grunt-sass');
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-watch');
    // grunt.loadNpmTasks('grunt-csssplit'); // FOR IE 9
    // Default task(s).
    grunt.registerTask('default', [ 'sass', 'watch']); // FOR IE 9
    // grunt.registerTask('default', ['concat', 'uglify', 'sass', 'watch']);
};