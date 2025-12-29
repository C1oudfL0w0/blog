// 浏览器标题
var OriginTitle = document.title;
var titleTime;
document.addEventListener('visibilitychange', function () {
    if (document.hidden) {
        document.title = 'Σ(ﾟдﾟ;)';
        clearTimeout(titleTime);
    }
    else {
        document.title = '(・ω< )★' + OriginTitle;
        titleTime = setTimeout(function () {
            document.title = OriginTitle;
        }, 2000);
    }
});
