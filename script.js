var pizzaStyle = ['Roman', 'Napolitan', 'New York', 'Chicago', 'Detroit'];
var pizzaSauce = ['Marinara', 'Pesto', 'Alfredo', 'Garlic', 'BBQ', 'Free choice'];
var pizzaCheese = ['Mozzarella', 'Cheddar', 'Parmesan', 'Provolone', 'Gorgonzola', 'Pecorino'];
var pizzaTopping = ['Pepperoni', 'Mushrooms', 'Onions', 'Sausage', 'Bacon', 'Bell peppers', 'Zucchini', 'Burata', 'Truffles', 'Jalapeño'];
var finalPizza = [];
var qbutton = document.querySelector('#qbutton');
var info = document.querySelector('.text');


const pizzaStyleButton = document.querySelector('#style');

let list = document.getElementById("list");

function roll(arr) {
    const randomIndex = Math.floor(Math.random() * arr.length);
    const randomElement = arr[randomIndex];
    if (finalPizza.includes(randomElement)) {
        roll(arr);
    } else {
        finalPizza.push(randomElement);
        console.log(finalPizza);
        if (finalPizza.length === arr.length) {
            alert("You've tried all the options!");
        }
    }
}

function process(arr, itm) {
    finallist.innerHTML = "";
    arr.forEach((item) => {
        let li = document.createElement("li");
        li.innerText = item;
        itm.appendChild(li);
    });
}




qbutton.addEventListener('click', () => {
    info.classList.toggle('hidden');
    console.log('clicked');
});

function reset() {
    finalPizza = [];
    finallist.innerHTML = "";
}
