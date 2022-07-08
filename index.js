function showDialog(text) {
    const dialog = document.createElement("div");
    dialog.style.position = "fixed";
    dialog.style.top = "10px";
    dialog.style.left = "10px";
    dialog.style.width = "200px";
    dialog.style.background = "rgba(0,0,0,0.8)";
    dialog.style.color = "white";
    dialog.style.fontSize = "14px";
    dialog.style.textAlign = "center";
    dialog.style.padding = "10px";
    dialog.style.borderRadius = "10px";
    dialog.style.boxShadow = "0px 0px 10px black";
    dialog.style.zIndex = "30";
    dialog.innerHTML = text;
    document.body.appendChild(dialog);
    setTimeout(() => {
        document.body.removeChild(dialog);
    }, 8000);
}
function ClearCookie(){
    document.cookie = '';
}
function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}
async function SignUp(){
    var email = 'mortezanabavi'+Math.floor(Math.random() * 900)+'@gmail.com';
    var tagdata = document.getElementsByTagName("textarea")[0]
    tagdata.value = 'Hi'
    showDialog('SignUp Done.');
}
SignUp();
