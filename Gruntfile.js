	module.exports=function (grunt) {
	grunt.initConfig({
		pkg:grunt.file.readJSON('package.json'),
		less:{
			dist:{
				files:{
					"build/css/main.css":"source/less/main.less"
				}
			}
		},
		watch:{
			less:{
				files:'source/**/*.less',
				tasks:'less'
			}
		}
	});
	grunt.loadNpmTasks('grunt-contrib-less');
	grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.registerTask('default',['less'])
}