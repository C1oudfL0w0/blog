// 一言 API
document.addEventListener('DOMContentLoaded', function () {
    var hitokoto = document.getElementById('hitokoto_text');
    var info = document.getElementById('info');
    if (!hitokoto) return;

    fetch('https://v1.hitokoto.cn/?encode=json&charset=utf-8&c=a&c=c&c=f')
        .then(function (res) { return res.json(); })
        .then(function (data) {
            hitokoto.innerText = data.hitokoto;
            if (data.from_who) {
                info.innerText = data.from_who + ' · ' + data.from;
            } else {
                info.innerText = '「' + data.from + '」';
            }
        })
        .catch(function () {
            hitokoto.innerText = '获取失败';
        });
});