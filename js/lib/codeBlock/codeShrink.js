// 代码块收缩（原生 JS）

document.addEventListener('DOMContentLoaded', function () {
    document.querySelectorAll('.code-area').forEach(function (area) {
        var icon = document.createElement('i');
        icon.className = 'fa fa-chevron-down code-expand';
        icon.title = '折叠代码';
        icon.setAttribute('aria-hidden', 'true');
        area.insertBefore(icon, area.firstChild);
    });

    document.addEventListener('click', function (e) {
        if (!e.target.classList.contains('code-expand')) return;
        var parent = e.target.parentElement;
        var code = parent.querySelector('pre code');
        if (!code) return;

        if (parent.classList.contains('code-closed')) {
            code.style.display = '';
            parent.classList.remove('code-closed');
        } else {
            code.style.display = 'none';
            parent.classList.add('code-closed');
        }
    });
});
  