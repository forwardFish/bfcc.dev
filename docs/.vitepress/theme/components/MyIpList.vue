<style>
.copy-code-button {
    color: #272822;
    background-color: #FFF;
    border-color: #2c3e50;
    border: 2px solid;
    border-radius: 6px 6px 0 0;

    /* right-align */
    position: relative;
    bottom: -15px;
    display: block;
    margin-left: auto;
    margin-right: 2px;

    margin-bottom: -2px;
    padding: 3px 8px;
    font-size: 0.8em;
}

.copy-code-button:hover {
    cursor: pointer;
    background-color: #F2F2F2;
}

.copy-code-button:focus {
    /* Avoid an ugly focus outline on click in Chrome,
       but darken the button for accessibility.
       See https://stackoverflow.com/a/25298082/1481479 */
    background-color: #E6E6E6;
    outline: 0;
}

.copy-code-button:active {
    background-color: #D9D9D9;
}

.highlight pre {
    /* Avoid pushing up the copy buttons. */
    margin: 0;
}

</style>
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
if (typeof window !== 'undefined'){
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
}

// if(document){
//     document.querySelectorAll('pre > code').forEach(function (codeBlock) {
//         var button = document.createElement('button');
//         button.className = 'copy-code-button';
//         button.type = 'button';
//         button.innerText = '复制';
//         button.addEventListener('click', function () {
//             clipboard.writeText(codeBlock.innerText).then(function () {
//                 /* Chrome doesn't seem to blur automatically,
//                     leaving the button in a focused state. */
//                 button.blur();
//                 button.innerText = '已复制';
//                 setTimeout(function () {
//                     button.innerText = '复制';
//                 }, 2000);
//             }, function (error) {
//                 button.innerText = 'Error';
//             });
//         });
//         var pre = codeBlock.parentNode;
//         var container = pre.parentNode;
//             container.parentNode.insertBefore(button, container);
//         // if (pre.parentNode.classList.contains('highlight')) {
//         //     var highlight = pre.parentNode;
//         //     highlight.parentNode.insertBefore(button, highlight);
//         // } else {
//         //     pre.parentNode.insertBefore(button, pre);
//         // }
//     });
// }
 
</script> 
