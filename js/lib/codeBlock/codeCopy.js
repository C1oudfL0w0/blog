// 代码块复制（原生 JS）

document.addEventListener('DOMContentLoaded', function () {
    document.querySelectorAll('.code-area').forEach(function (area) {
        var icon = document.createElement('i');
        icon.className = 'fa fa-copy code_copy';
        icon.title = '复制代码';
        icon.setAttribute('aria-hidden', 'true');
        area.insertBefore(icon, area.firstChild);
    });
    new ClipboardJS('.code_copy', {
        target: function (trigger) {
            return trigger.nextElementSibling;
        }
    });
});
