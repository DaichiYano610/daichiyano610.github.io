var count = 0;
function button1Click(){
    document.getElementById("counter").textContent = ++count;
}

let button1 = document.getElementById("button1");
button1.onclick = button1Click;

function resetbuttonClick(){
    count = 0;
    document.getElementById("counter").textContent = 0;
}

let resetbutton = document.getElementById("resetbutton");
resetbutton.onclick = resetbuttonClick;
