
module.exports = function(grunt) {
  var configBridge = grunt.file.readJSON('./grunt/configBridge.json', { encoding: 'utf8' });
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
    autoprefixer: {
      options: {
        browsers: configBridge.config.autoprefixerBrowsers
      },
      // 添加浏览器前缀
      core: {
        options: {
          map: true
        },
        src: 'dist/css/<%= pkg.name %>.css'
      }
    },


    copy : {
        css : {
            expand: true,
            cwd: 'dist/css/',
            src : '**',
            dest: 'static/css/',
            filter: 'isFile'
        }
    },

    // Task configuration.
    clean: {
        dist: 'dist'
    },

    watch: {
        less: {
          files: 'less/**/*.less',
          tasks:['less:compileCore'],
          options: {livereload:false}
        },
      css: {
          files: ['dist/**/*.css'],
          options: {livereload:true}
      }
    }
  });

  grunt.loadNpmTasks('grunt-contrib-less');
  grunt.loadNpmTasks('grunt-autoprefixer');
  grunt.loadNpmTasks('grunt-contrib-copy');
  grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.loadNpmTasks('grunt-contrib-watch');

  // 编译成css
  grunt.registerTask('less-compile', ['less:compileCore']);


  grunt.registerTask('dist-css',['less-compile', 'autoprefixer:core','copy:css']);

  grunt.registerTask('clean',['clean:dist']);

  // clean  dist
  grunt.registerTask('default',['clean','dist-css']);
};