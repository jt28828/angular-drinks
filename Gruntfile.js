module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    uglify: {
      dev: {
        options: {},
        files: [{
          src: 'src/js/*.js',
          dest: 'build/js/script.min.js'
        }]
      }
    },
    cssmin: {
      dev: {
        options: {},
        files: [{
          src: 'src/css/*.css',
          dest: 'build/css/style.min.css'
        }]
      }
    }
  });

  // Load the plugin that provides the "uglify" task.
  grunt.loadNpmTasks('grunt-contrib-uglify');

  // Load the cssmin plugin
  grunt.loadNpmTasks('grunt-contrib-cssmin');

  // Default tasks.
  grunt.registerTask('default', ['uglify', 'cssmin']);

};
