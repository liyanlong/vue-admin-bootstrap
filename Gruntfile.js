
module.exports = function(grunt) {

  grunt.initConfig({
    pkg : grunt.file.readJSON('package.json'),
    less: {

        // 子任务
        compileCore : {
            options: {

              strictMath: true,
              // 输出 sourceMap
              sourceMap: true,

              outputSourceFiles: true,

              // 输出 sourceMap地址
              sourceMapURL: '<%= pkg.name %>.css.map',
              sourceMapFilename: 'dist/css/<%= pkg.name %>.css.map'
            },
            src: 'less/admin-bootstrap.less',
            dest: 'dist/css/<%= pkg.name %>.css'
        }
    },
  });

  grunt.loadNpmTasks('grunt-contrib-less');

  // 编译 less 为 css
  grunt.registerTask('less-compile', ['less:compileCore']);


  // 默认任务
  grunt.registerTask('default',['less-compile']);
};
