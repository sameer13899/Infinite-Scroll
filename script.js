window.addEventListener('scroll', () => {
  if (
    window.scrollY + window.innerHeight >=
    document.documentElement.scrollHeight / 1
  ) {
    loadNewContent();
  }
});

function loadNewContent() {
  fetchImage().then(imgUrl => {
    const html = `<div
    style="
      background: url('${imgUrl}');
      height: 90vh;
      width: 90vw;
      margin: 10px;
      background-repeat: no-repeat; 
      background-position: center;
    "
  ></div>`;
    const body = document.querySelector('body');
    body.innerHTML += html;
  });
}

async function fetchImage() {
  const { url } = await fetch('https://source.unsplash.com/random/800x600');
  return url;
}
