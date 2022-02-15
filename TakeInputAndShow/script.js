let input_btn = document.getElementById('input_btn');
let show_name = document.getElementById('show_name');

input_btn.addEventListener('click',showName);

function showName(){
    let name = prompt('Enter Name : ');
    show_name.textContent = name;
}