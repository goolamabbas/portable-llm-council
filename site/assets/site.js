document.querySelectorAll('[data-copy]').forEach(button => {
  let reset;
  button.addEventListener('click', async () => {
    const source = document.getElementById(button.dataset.copy);
    const status = button.nextElementSibling;
    clearTimeout(reset);
    try {
      await navigator.clipboard.writeText(source.textContent);
      status.textContent = 'Copied.';
      reset = setTimeout(() => { status.textContent = ''; }, 2000);
    } catch {
      const range = document.createRange();
      range.selectNodeContents(source);
      const selection = window.getSelection();
      selection.removeAllRanges();
      selection.addRange(range);
      status.textContent = 'Text selected. Use your keyboard to copy.';
    }
  });
});
function revealFragment() {
  const target = document.getElementById(decodeURIComponent(location.hash.slice(1)));
  if (!target) return;
  for (let node = target; node; node = node.parentElement) {
    if (node.tagName === 'DETAILS') node.open = true;
  }
}
window.addEventListener('hashchange', revealFragment);
revealFragment();
