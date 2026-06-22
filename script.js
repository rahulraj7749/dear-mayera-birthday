const text='Some people make the world brighter just by being in it... Today, we celebrate one of them — Dear Mayera. 💖';
let i=0;
function type(){
 if(i<text.length){
  document.getElementById('typing').innerHTML+=text.charAt(i);
  i++;
  setTimeout(type,40);
 }
}
type();

function showLetter(){
 document.getElementById('letter').classList.remove('hidden');
 alert('🎆 Happy Birthday Dear Mayera! 🎉');
}
