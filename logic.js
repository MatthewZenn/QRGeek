document.getElementById('generate').addEventListener('click', () => {
  document.getElementById("qrcode-container").innerHTML ='';
  var text = document.getElementById('textfield').value;
  new QRCode(document.getElementById("qrcode-container"), {
    text: text,
    width: 500,
    height: 500,
    colorDark: 'rgb(200, 200, 200)',
    colorLight: 'rgb(20, 20, 20)'
  });
});
