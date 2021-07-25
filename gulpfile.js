const gulp = require("gulp");
const themeKit = require("@shopify/themekit");
const sass = require("gulp-sass")(require("node-sass"));
const cleanCss = require("gulp-clean-css");

//SASS compililng
gulp.task("sass", function () {
  return gulp
    .src("src/styles/app.scss")
    .pipe(sass())
    .pipe(cleanCss({ compatibility: "ie11" }))
    .pipe(gulp.dest("assets"));
});

//Watching
gulp.task("watch", function () {
  gulp.watch("src/styles/**/*.scss", gulp.series("sass"));
  themeKit.command("watch", {
    env: "development",
  });
});
