<style>
[class~=language-json]:before {
    left: 1em;
    right: auto;
}
.copy-code-button {
  display: grid;
  grid-auto-flow: column;
  align-items: center;
  grid-column-gap: 4px;
  border: none;
  border-radius: 4px;
  margin: 4px 4px 0 auto;
  cursor: pointer;
  padding: 4px 8px;
}

.copy-code-button::after {
    content: "复制";
  }

 .copy-code-button::before {
    content: "📋";
  }

  .copied::after {
      content: "已复制!";
    }
 .copied::before {
      content: "✔️";
    }

</style>
<script setup>
if (typeof window !== 'undefined'){
    const copyToClipboard = str =>{
        const el = document.createElement('textarea');
        el.value = str;
        el.setAttribute('readonly','');
        el.style.position = 'absolute';
        el.style.left = '-9999px';
        document.body.appendChild(el);
        el.select();
        document.execCommand('copy');
        document.body.removeChild(el);
    }

    document.querySelectorAll('pre > code').forEach((codeBlock, index) => {
        var button = document.createElement('button');
            button.className = 'copy-code-button';
            button.type = 'button';
            var pre = codeBlock.parentNode;
            // var container = pre.parentNode;
                pre.parentNode.insertBefore(button, pre);

            button.addEventListener('click', () => {
                // window.navigator.clipboard.writeText(codeBlock.innerText);
                copyToClipboard(codeBlock.innerText);
                button.classList.add('copied');

                setTimeout(() => {
                button.classList.remove('copied');
                }, 2000);
            });
    });

    
}
</script> 
