$(function () {
    var $copyIcon = $('<i class="fa fa-copy code_copy" title="复制代码" aria-hidden="true"></i>');
    $('.code-area').prepend($copyIcon);
    new ClipboardJS('.code_copy', {
        target: function (trigger) {
            return trigger.nextElementSibling;
        }
    });

});
