/**
 * grunt dist builds a minified/vulcanized version of the app in the dist/ folder in preparation for cf push-ing
 */
module.exports = function(grunt) {
    grunt.registerTask('dist', ['clean:build', 'jshint', 'test', 'vulcanize',  'copy:temp', 'requirejs', 'cachebreaker:dev', 'cachebreaker:routedev', 'copy:dist',  'filerev', 'useminPrepare', 'usemin']);
};
