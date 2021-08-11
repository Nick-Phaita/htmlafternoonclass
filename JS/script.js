//js code
//writing to elements
//innerHTML - to write content
function showDate(){
    //DOM
    document.getElementById('date').innerHTML = Date();
    document.body.style.background = "yellow";
    // document.write("Hello from document.write")
}
//styling
document.getElementById('date').style.color = "red";
document.getElementById('date').style.fontSize = "25px";
//body styling
//outerHTML - to create elements
function createE(){
    document.getElementById('date').outerHTML = "<a href='https://google.com'>Google</a>";
    //changing value of an attribute
    document.getElementById('myimage').src = "../Images/simba.jpg";
    let x = document.querySelectorAll("p.para");
    document.getElementById('demo').innerHTML = "The first paragraph with the class para is " + x[0].innerHTML
}