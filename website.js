function iframe() {
    let link= prompt("Please Enter a Link");
    let p = document.getElementById("iframe");
    p.innerHTML = "<iframe src=" + link + " width=100% height=100% allowfullscreen> <p>Your browser does not support iframes.</p> </iframe>";
     var butt = document.getElementById(button);
    butt.parentNode.removeChild(button);
}