var gulp = require('gulp');
var imagemin = require('gulp-imagemin');
var pngquant = require('imagemin-pngquant');
var jpegoptim = require('imagemin-jpegoptim');

var imageFolders = [
    'assets/img/'
];

// may need to run - sudo apt-get install libpng-dev
gulp.task('optimize-images', function() {

    for (var i = 0; i < imageFolders.length; i++)
    {
        folder = imageFolders[i];

        gulp.src(folder + '/**/*.{png,jpg,jpeg}')
            .pipe(imagemin({
                progressive: true,
                use: [
                    pngquant({quality: '65-80', speed: 3}),
                    jpegoptim({ progressive: true })
                ],
                optimizationLevel: 4
            }))
            .pipe(gulp.dest(folder));
    }

});
