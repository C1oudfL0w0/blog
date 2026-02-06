// 浏览器标题
var OriginTitle = document.title;
var titleTime;
document.addEventListener('visibilitychange', function () {
    if (document.hidden) {
        document.title = OriginTitle + 'Σ(ﾟдﾟ;)';
        clearTimeout(titleTime);
    }
    else {
        document.title = OriginTitle + '(・ω< )★';
        titleTime = setTimeout(function () {
            document.title = OriginTitle;
        }, 2000);
    }
});
