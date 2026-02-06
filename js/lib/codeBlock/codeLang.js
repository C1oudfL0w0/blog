// 代码块语言识别（原生 JS）

document.addEventListener('DOMContentLoaded', function () {
    document.querySelectorAll('pre').forEach(function (pre) {
        var langDiv = document.createElement('div');
        langDiv.className = 'code_lang';
        langDiv.title = '代码语言';
        pre.parentNode.insertBefore(langDiv, pre.nextSibling);

        var code_language = pre.className;
        if (!code_language) return;

        var lang_name = code_language.replace('line-numbers', '').trim().replace('language-', '').trim();
        lang_name = lang_name.slice(0, 1).toUpperCase() + lang_name.slice(1);
        langDiv.textContent = lang_name;
    });
});
  