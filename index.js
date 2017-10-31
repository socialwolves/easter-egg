(function(C){if(window.addEventListener){var A=[],B="38,38,40,40,37,39,37,39,66,65";window.addEventListener("keydown",function(e){A.push(e.keyCode);if(A.toString().indexOf(B)>=0){C();A=[]}},true)}})
(function() {
  console.log('konami code!!!');
  document.body.innerHTML += `
  <audio autoplay="true" loop="true">
    <source src="https://raw.githubusercontent.com/jonzee/nyan-cat/gh-pages/audio/nyan-cat.ogg" type="audio/ogg" />
    <source src="https://raw.githubusercontent.com/jonzee/nyan-cat/gh-pages/audio/nyan-cat.mp3" type="audio/mpeg" />
  </audio>
  `;
})
