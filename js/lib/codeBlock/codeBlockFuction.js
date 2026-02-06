// 代码块功能依赖（原生 JS）

document.addEventListener('DOMContentLoaded', function () {
    document.querySelectorAll('pre').forEach(function (pre) {
        var wrapper = document.createElement('div');
        wrapper.className = 'code-area';
        wrapper.style.position = 'relative';
        pre.parentNode.insertBefore(wrapper, pre);
        wrapper.appendChild(pre);
    });
});
