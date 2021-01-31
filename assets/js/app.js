function subtract(num1,num2){
   
    return num1 - num2;
} 
function divide(num1,num2){
   
    return num1 / num2;
}
function add_facilitator(){
    var num1 = document.getElementById("num1").value;
    var num2 = document.getElementById("num2").value;
    num1 = parseInt(num1)
    num2 = parseInt(num2)
    let a = divide(num1,num2)
    document.getElementById("result").innerHTML = "<h3>result :<h3>"+ a;
}
function sub_facilitator(){
    var num1 = document.getElementById("num1").value;
    var num2 = document.getElementById("num2").value;
    num1 = parseInt(num1)
    num2 = parseInt(num2)
    let a = subtract(num1,num2)
    document.getElementById("result").innerHTML = "<h3>result :<h3>"+ a;
}
function div_facilitator(){
    var num1 = document.getElementById("num1").value;
    var num2 = document.getElementById("num2").value;
    num1 = parseInt(num1)
    num2 = parseInt(num2)
    let a = divide(num1,num2)
    document.getElementById("result").innerHTML = "<h3>result :<h3>"+ a;
}
function multi_facilitator(){
   
}

const add_creator = document.querySelector('#add_creator'); 
const subtract_creator = document.querySelector('#subtract_creator');
const divide_creator = document.querySelector('#divide_creator'); 
const multiply_creator = document.querySelector('#multiply_creator');  



add_creator.addEventListener('click', create_addinput_box);
subtract_creator.addEventListener('click',create_subtractinput_box);
divide_creator.addEventListener('click', create_divideinput_box);
multiply_creator.addEventListener('click', create_multiplyinput_box);

function create_addinput_box() {
    // Then add the content (a new input box) of the element.
    // Finally put it where it is supposed to appear.
    document.getElementById("newElementId").innerHTML = "<h2>Enter numbers with space and click add when finished</h2><br><input type='number' id='newInputBox'> <input type='button' id='add_btn'value='add'onclick='add_facilitator()'; class='btn btn--m'/> <div id='result'></div>";

}
function create_subtractinput_box() {
    document.getElementById("newElementId").innerHTML = "<h2>Enter the two numbers to be subtracted and click subtract</h2><br><input type='number' id='num1'> - <input type='number' id='num2'> <input type='button' id='subtract'value='subtract' onclick='sub_facilitator();' class='btn btn--m'/> <div id='result'></div>";

}
function create_divideinput_box() {
    document.getElementById("newElementId").innerHTML = "<h2>Enter the two numbers and click divide</h2><br><input type='number' id='num1'>/<input type='number' id='num2'> <input type='button' id='div_btn'value='divide'onclick='div_facilitator();' class='btn btn--m'/><div id='result'></div>";

}
function create_multiplyinput_box() {
    document.getElementById("newElementId").innerHTML = "<h2>Enter numbers with space and click multiply when finished</h2><br><input type='number' id='newinputbox'> <input type='button' id='mul_btn'value='multiply'onclick='multi_facilitator()'; class='btn btn--m'/><div id='result'></div>";

}

