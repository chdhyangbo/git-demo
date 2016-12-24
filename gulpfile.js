/*gulp 的主文件,用于注册任务*/

/*第一个gulp案例
一定要先npm init 
在局部gulp 任务*/

/*此处的代码都是由node 写成*/
/*载入gulp版块*/
var gulp = require('gulp');
/*注册一个任务*/

gulp.task('copy', function() {
	// 当gulp 运行到say的时候,自动运行下面的代码
	console.log('Hello world');
	// 进行压缩和优化
	gulp.src('index.js')
		.pipe(gulp.dest('dist/'));
});
//实时监测 watch
gulp.task('disk', function() {
	gulp.watch('index.js', ['copy']);
});

var browserSync = require('browser-sync').create();

// Static server
gulp.task('serve', function() {
    browserSync.init({
        server: {
            baseDir: "./"
        }
    });
});