function getResume() {
  const el = document.createElement('a');
  el.setAttribute('href', 'tyrus-handy-resume.pdf');
  el.setAttribute('download', "tyrus-handy-resume.pdf");
  el.style.display = 'none';
  document.body.appendChild(el);
  el.click();
  document.body.removeChild(el);
}
