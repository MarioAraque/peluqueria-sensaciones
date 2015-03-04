module.exports = (grunt) ->
  grunt.initConfig
    jade:
      compile:
        options:
          data:
            debug: false
        files:
          "index.html": ["assets/jade/index.jade"]

    sass:
      dist:
        files: ["assets/css/main.css": "assets/sass/main.scss"]
        options:
          style: "compressed"

    coffee:
      compile:
        files:
          "assets/javascript/main.js": "assets/coffee/main.coffee"

    uglify:
      minify:
        files: "assets/javascript/script.js": [
          "assets/javascript/lib/jquery.js",
          "assets/javascript/lib/jquery.smint.js",
          "assets/javascript/lib/lightbox.js",
          "assets/javascript/lib/slider.js",
          "assets/javascript/main.js"
        ]

    watch:
      jade:
        files: ["assets/jade/**/*.jade"]
        tasks: ["jade"]
      sass:
        files: ["assets/sass/**/*.scss"]
        tasks: ["sass"]
      coffee:
        files: ["assets/coffee/**/*.coffee"]
        tasks: ["coffee"]
      uglify:
        files: ["assets/**/*.js"]
        tasks: ["uglify"]

  grunt.loadNpmTasks "grunt-contrib-jade"
  grunt.loadNpmTasks "grunt-contrib-sass"
  grunt.loadNpmTasks "grunt-contrib-uglify"
  grunt.loadNpmTasks "grunt-contrib-coffee"
  grunt.loadNpmTasks "grunt-contrib-watch"

  grunt.registerTask "default", ["watch"]
