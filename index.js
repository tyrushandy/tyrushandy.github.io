function getResume() {
  const el = document.createElement('a');
  el.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent("Tyrus Handy Resume"));
  el.setAttribute('download', "tyrus-handy-resume.pdf");
  el.style.display = 'none';
  document.body.appendChild(el);
  el.click();
  document.body.removeChild(el);
}