<style>
.copy-code-button {
  display: grid;
  grid-auto-flow: column;
  align-items: center;
  grid-column-gap: 4px;
  border: none;
  cursor: pointer;
  font-size: 1rem;
  padding: 4px 8px;
}

.copy-code-button::before {
    content: "复制";
  }

 .copy-code-button::after {
    content: "📋";
    display: block;
  }

  .copied::before {
      content: "已复制!";
    }
 .copied::after {
      content: "✔️";
    }

</style>
<script setup>
if (typeof window !== 'undefined'){
    document.querySelectorAll('pre > code').forEach((codeBlock, index) => {
        var button = document.createElement('button');
            button.className = 'copy-code-button';
            button.type = 'button';
            var pre = codeBlock.parentNode;
            // var container = pre.parentNode;
                pre.parentNode.insertBefore(button, pre);

            button.addEventListener('click', () => {
                window.navigator.clipboard.writeText(codeBlock.innerText);
                button.classList.add('copied');

                setTimeout(() => {
                button.classList.remove('copied');
                }, 2000);
            });
    });
}
</script> 
