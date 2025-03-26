// // ----------------LOGIN----------------------------

function loguear() {

	let user=document.getElementById("usuario").value;
	let pass=document.getElementById("clave").value;

  switch(user) {
    case "Saray":
      if(pass=="1313") {
        window.location="amazon.html";
      } else {
        alert("Datos incorrectos");
      }
      break;
    case "Victor":
      if(pass=="1515") {
        window.location="amazon.html";
      } else {
        alert("Datos incorrectos");
      }
      break;
    case "Sandro":
      if(pass=="1717") {
        window.location="amazon.html";
      } else {
        alert("Datos incorrectos");
      }
      break;
      case "Ale":
      if(pass=="1919") {
        window.location="amazon.html";
      } else {
        alert("Datos incorrectos");
      }
      break;
    default:
      alert("Datos incorrectos");
  }
}