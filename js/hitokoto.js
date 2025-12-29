window.onload = function() {
    var hitokoto = document.getElementById("hitokoto_text");
    var info = document.getElementById("info");
    var xhr = new XMLHttpRequest();
    xhr.open('get', 'https://v1.hitokoto.cn/?encode=json&charset=utf-8&c=a&c=c&c=f', true);
    xhr.onreadystatechange = function() {
        if (xhr.readyState === 4 && xhr.status === 200) {
            var data = JSON.parse(xhr.responseText);
            hitokoto.innerText = data.hitokoto;
            if (data.from_who) {
                info.innerText = data.from_who + ' · ' + data.from;
            } else {
                info.innerText = '「' + data.from + '」';
            }
        } else {
            hitokoto.innerText = '获取失败';
        }
    };
    xhr.send();
};