let app = document.getElementById('typewriter');
 
let typewriter = new Typewriter(app, {
  loop: true,
  delay: 75,
 cursor: "<span style='color: #4a4e69;'>|</span>",
});
 
typewriter
  .pauseFor(2500)
  .typeString('<span style="color: #4a4e69;"> Hoy también vuelvo a fingir abrir los ojos.</span>')
  .pauseFor(200)
  .deleteChars(10)
  .start();
