window.onload = function() {
  var lyrics = document.querySelector(".lyrics-large");
  var popup = document.querySelector(".lyrics-box");


  var fontSize = 30; 
  while (lyrics.scrollHeight > lyrics.offsetHeight) {
      fontSize -= 1;
      lyrics.style.fontSize = fontSize + "px";
  }


  var maxWidth = Math.max(lyrics.offsetWidth, lyrics.scrollWidth);
  popup.style.width = maxWidth + "px";
}

var currentIndex = 0; 

function closeAlert() {
  var lyrics = document.querySelector(".lyrics-large");
  var songLines = [
      "Oh, I hope I don't lose you",
      "Mm",
      "Please stay",
      "I want you, I need you, oh God",
      "Don't take",
      "These beautiful things that I've got",
      "Please stay",
      "I want you, I need you, oh God",
      "Don't take",
      "These beautiful things that I've got",
      "Oh-oh-oh-oh",
      "Ooh",
      "Please don't take",
      "I found my mind, I'm feelin' sane",
      "It's been a while, but I'm finding my faith",
      "If everything's good and it's great",
      "Why do I sit and wait 'til it's gone?"
  ];

  currentIndex = (currentIndex + 1) % songLines.length; 
  lyrics.textContent = songLines[currentIndex]; 
}
