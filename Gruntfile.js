
module.exports = function(grunt) {

  grunt.initConfig({
    pkg : grunt.file.readJSON('package.json'),
    less: {
        compileCore : {
            options: {
              strictMath: true,
              sourceMap: true,
              outputSourceFiles: true,
              sourceMapURL: '<%= pkg.name %>.css.map',
              sourceMapFilename: 'dist/css/<%= pkg.name %>.css.map'
            },
            src: 'less/admin-bootstrap.less',
            dest: 'dist/css/<%= pkg.name %>.css'
        }
    },
    watch: {
        less: {
            files: ['less/**/*.less'],
            tasks:['less:compileCore'],
            options: {livereload:false}
        },
        css: {
            files: ['dist/**/*.css'],
            options: {livereload:true}
        }
    },
  });

  grunt.loadNpmTasks('grunt-contrib-less');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.registerTask('less-compile', ['less:compileCore']);


  grunt.registerTask('default',['watch']);
};
