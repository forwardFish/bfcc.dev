---
sidebar: false
---
# BFChain稳定节点IP列表

以下为BFChain网络最新的高可靠稳定的节点IP列表。您可直接复制并导入到管理器中，以便您管理的节点快速连接上网络并完成同步。
```json
{
    "ips": [
        { "ip": "35.200.53.217" },
        { "ip": "34.84.53.222" },
        { "ip": "34.84.133.254" },
        { "ip": "35.243.107.119" },
        { "ip": "34.84.133.220" },
        { "ip": "34.92.224.36" },
        { "ip": "34.96.143.105" },
        { "ip": "35.241.83.54" },
        { "ip": "35.220.155.238" },
        { "ip": "34.92.11.186" }
    ],

    "soucre": "www.bfcc.com"
}

```
<ip-list />

<script setup>
function addCopyButtons(clipboard) {
    document.querySelectorAll('pre > code').forEach(function (codeBlock) {
        var button = document.createElement('button');
        button.className = 'copy-code-button';
        button.type = 'button';
        button.innerText = '复制';

        button.addEventListener('click', function () {
            clipboard.writeText(codeBlock.innerText).then(function () {
                /* Chrome doesn't seem to blur automatically,
                   leaving the button in a focused state. */
                button.blur();

                button.innerText = '已复制';

                setTimeout(function () {
                    button.innerText = '复制';
                }, 2000);
            }, function (error) {
                button.innerText = 'Error';
            });
        });

        var pre = codeBlock.parentNode;
        var container = pre.parentNode;
            container.parentNode.insertBefore(button, container);
        // if (pre.parentNode.classList.contains('highlight')) {
        //     var highlight = pre.parentNode;
        //     highlight.parentNode.insertBefore(button, highlight);
        // } else {
        //     pre.parentNode.insertBefore(button, pre);
        // }
    });
}
if (navigator && navigator.clipboard) {
    addCopyButtons(navigator.clipboard);
} else {
    var script = document.createElement('script');
    script.src = 'https://cdnjs.cloudflare.com/ajax/libs/clipboard-polyfill/2.7.0/clipboard-polyfill.promise.js';
    script.integrity = 'sha256-waClS2re9NUbXRsryKoof+F9qc1gjjIhc2eT7ZbIv94=';
    script.crossOrigin = 'anonymous';
    script.onload = function() {
        addCopyButtons(clipboard);
    };

    document.body.appendChild(script);
}
</script>