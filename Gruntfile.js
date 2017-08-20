module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    uglify: {
      build: {
        options: {},
        files: [{
          src: 'src/js/*.js',
          dest: 'build/js/script.min.js'
        }]
      }
    },
    cssmin: {
      build: {
        options: {},
        files: [{
          src: 'src/css/*.css',
          dest: 'build/css/style.min.css'
        }]
      }
    },
    copy: {
      dev: {
        files: [
          // includes files within path and its sub-directories
          {expand: true, cwd: 'node_modules', src: ['angular/**'], dest: 'app/libs'},
          {expand: true, cwd: 'node_modules', src: ['angular-animate/**'], dest: 'app/libs'},
          {expand: true, cwd: 'node_modules', src: ['angular-aria/**'], dest: 'app/libs'},
          {expand: true, cwd: 'node_modules', src: ['angular-cookies/**'], dest: 'app/libs'},
          {expand: true, cwd: 'node_modules', src: ['angular-material/**/*'], dest: 'app/libs'},
          {expand: true, cwd: 'node_modules', src: ['angular-route/**'], dest: 'app/libs'},
          {expand: true, cwd: 'node_modules', src: ['bootstrap/**'], dest: 'app/libs'},
          {expand: true, cwd: 'node_modules', src: ['jquery/dist/**'], dest: 'app/libs'}
    ],
  },
},
  });

  // Load the plugin that provides the "uglify" task.
  grunt.loadNpmTasks('grunt-contrib-uglify');

  // Load the cssmin plugin
  grunt.loadNpmTasks('grunt-contrib-cssmin');

  //Load copy plugin
  grunt.loadNpmTasks('grunt-contrib-copy');

  // Default tasks.
  grunt.registerTask('default', ['uglify', 'cssmin']);

  //Development tasks
  grunt.registerTask('setup', ['copy:dev']);

};
