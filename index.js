function getResume(file) {
  const el = document.createElement('a');
  el.setAttribute('href', encodeURIComponent(file));
  el.setAttribute('download', file);
  el.style.display = 'none';
  document.body.appendChild(el);
  el.click();
  document.body.removeChild(el);
}
