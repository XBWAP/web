function Gettext(){

fetch('https://api.qqsuu.cn/api/dm-wanan?apiKey=6c010368655280b2d8c8c156f28f6b53')
  .then(response => response.content())
  .then(data => {
    const paragraph = document.getElementById('Getcontent');
    paragraph.innerText = data;
  });
}