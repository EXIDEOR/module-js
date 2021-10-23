//sustituye el appendchild(add)
//genera un nodo en javascript y se crea hasta que lo agregas al dom
//permite hacer un elemento del html y en javascript tu le puedes agregar un elemento anidado 
const frag = document.createDocumentFragment();

const add = document.createElement('button');
const counter = document.createElement('p');
const less = document.createElement('button');
let number = 0;

add.textContent = 'gimme more'
add.dataset.action = 'add';
counter.textContent = number;
less.textContent = 'take it off'
less.dataset.action = 'less';

frag.appendChild(add);
frag.appendChild(counter);
frag.appendChild(less);

document.body.appendChild(frag);
const buttons = document.querySelectorAll('button');
buttons.forEach(button => button.addEventListener('click', actionBtn))

function actionBtn(){
    let action = this.dataset.action;
    if(action == 'add'){
        number ++;
        counter.textContent = number;
    }else{
        number --;
        counter.textContent = number;
    }
}


