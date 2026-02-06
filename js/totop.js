// 返回顶部（原生 JS，无 jQuery 依赖）
(function () {
    var upperLimit = 1000;
    var scrollSpeed = 500;
    var scrollElem = document.getElementById('totop');
    if (!scrollElem) return;

    scrollElem.style.opacity = '0';
    scrollElem.style.transition = 'opacity 0.3s';

    window.addEventListener('scroll', function () {
        var scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
        scrollElem.style.opacity = scrollTop > upperLimit ? '1' : '0';
        scrollElem.style.pointerEvents = scrollTop > upperLimit ? 'auto' : 'none';
    });

    scrollElem.addEventListener('click', function (e) {
        e.preventDefault();
        var start = window.pageYOffset;
        var startTime = performance.now();

        function step(currentTime) {
            var elapsed = currentTime - startTime;
            var progress = Math.min(elapsed / scrollSpeed, 1);
            // easeInOutCubic
            var ease = progress < 0.5
                ? 4 * progress * progress * progress
                : 1 - Math.pow(-2 * progress + 2, 3) / 2;
            window.scrollTo(0, start * (1 - ease));
            if (progress < 1) requestAnimationFrame(step);
        }

        requestAnimationFrame(step);
    });
})();