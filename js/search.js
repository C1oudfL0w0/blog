// A local search script with the help of [hexo-generator-search](https://github.com/PaicHyperionDev/hexo-generator-search)
// Copyright (C) 2015
// Joseph Pan <http://github.com/wzpan>
// Shuhao Mao <http://github.com/maoshuhao>
// Rewritten without jQuery dependency

var searchFunc = function (path, search_id, content_id) {
    'use strict';
    fetch(path)
        .then(function (res) { return res.text(); })
        .then(function (text) {
            var parser = new DOMParser();
            var xmlDoc = parser.parseFromString(text, 'application/xml');
            var entries = xmlDoc.querySelectorAll('entry');
            var datas = [];
            entries.forEach(function (entry) {
                datas.push({
                    title: entry.querySelector('title') ? entry.querySelector('title').textContent : '',
                    content: entry.querySelector('content') ? entry.querySelector('content').textContent : '',
                    url: entry.querySelector('url') ? entry.querySelector('url').textContent : ''
                });
            });

            var input = document.getElementById(search_id);
            if (!input) return;
            var resultContent = document.getElementById(content_id);

            input.addEventListener('input', function () {
                var str = '<ul class="search-result-list">';
                var keywords = this.value.trim().toLowerCase().split(/[\s\-]+/);
                resultContent.innerHTML = '';
                if (this.value.trim().length <= 0) {
                    return;
                }
                // perform local searching
                datas.forEach(function (data) {
                    var isMatch = true;
                    var first_occur = -1;
                    if (!data.title || data.title.trim() === '') {
                        data.title = 'Untitled';
                    }
                    var data_title = data.title.trim().toLowerCase();
                    var data_content = data.content.trim().replace(/<[^>]+>/g, '').toLowerCase();
                    var data_url = data.url;

                    if (data_content !== '') {
                        keywords.forEach(function (keyword, i) {
                            var index_title = data_title.indexOf(keyword);
                            var index_content = data_content.indexOf(keyword);

                            if (index_title < 0 && index_content < 0) {
                                isMatch = false;
                            } else {
                                if (index_content < 0) {
                                    index_content = 0;
                                }
                                if (i === 0) {
                                    first_occur = index_content;
                                }
                            }
                        });
                    } else {
                        isMatch = false;
                    }
                    // show search results
                    if (isMatch) {
                        str += "<li><a href='" + data_url + "' class='search-result-title'>" + data.title.trim() + "</a>";
                        var content = data.content.trim().replace(/<[^>]+>/g, '');
                        if (first_occur >= 0) {
                            var start = first_occur - 20;
                            var end = first_occur + 80;
                            if (start < 0) start = 0;
                            if (start === 0) end = 100;
                            if (end > content.length) end = content.length;

                            var match_content = content.substring(start, end);
                            keywords.forEach(function (keyword) {
                                var regS = new RegExp(keyword, 'gi');
                                match_content = match_content.replace(regS, '<em class="search-keyword">' + keyword + '</em>');
                            });
                            str += '<p class="search-result">' + match_content + '...</p>';
                        }
                        str += '</li>';
                    }
                });
                str += '</ul>';
                resultContent.innerHTML = str;
            });
        });
};