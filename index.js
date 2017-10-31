(function(C){if(window.addEventListener){var A=[],B="38,38,40,40,37,39,37,39,66,65";window.addEventListener("keydown",function(e){A.push(e.keyCode);if(A.toString().indexOf(B)>=0){C();A=[]}},true)}})
(function() {
  console.log('konami code!!!');
  document.body.innerHTML = `
<head>
  <meta charset="UTF-8">
  <link rel="stylesheet" href="https://github.com/cristurm/nyan-cat/blob/gh-pages/css/nyan.css"/>
</head>
<body>
  <div class="sparks-combo">
    <div class="spark"></div>
    <div class="spark"></div>
    <div class="spark"></div>
    <div class="spark"></div>
  </div>

  <div id="wave-a" class="hot rainbow"></div>
  <div id="wave-a" class="cold rainbow"></div>

  <div id="wave-b" class="hot rainbow"></div>
  <div id="wave-b" class="cold rainbow"></div>

  <div id="nyan-cat" class="frame1">
    <div id="tail"></div>

    <div id="paws"></div>

    <div id="pop-tarts-body">
      <div id="pop-tarts-body-cream"></div>
    </div>

    <div id="head">
      <div id="face"></div>
    </div>
  </div>

  <audio autoplay="true" loop="true">
    <source src="https://raw.githubusercontent.com/jonzee/nyan-cat/gh-pages/audio/nyan-cat.ogg" type="audio/ogg" />
    <source src="https://raw.githubusercontent.com/jonzee/nyan-cat/gh-pages/audio/nyan-cat.mp3" type="audio/mpeg" />
  </audio>

  <!-- Libs -->
  <script src="//code.jquery.com/jquery-1.10.1.min.js"></script>
  <script src="//code.jquery.com/jquery-migrate-1.2.1.min.js"></script>
  <!-- Nyan Stuff -->
  <script src="https://raw.githubusercontent.com/jonzee/nyan-cat/gh-pages/js/nyan.js"></script>


  `;
})
