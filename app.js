// STUB Ice Cream Flavors Array 
const iceCream = [{
    name: 'Chocolate',
    price: 4,
    quantity: 0
}, {
    name: 'Vanilla',
    price: 1,
    quantity: 0
}, {
    name: 'Strawberry',
    price: 2,
    quantity: 0
},
{
    name: 'Waffle Cone',
    price: 2,
    quantity: 0
}, {
    name: 'Waffle Bowl',
    price: 4,
    quantity: 0
},
{
    name: 'Dipped Cone',
    price: 5,
    quantity: 0
},
{
    name: 'Sprinkles',
    price: 1,
    quantity: 0
}, {
    name: 'Chocolate Chips',
    price: 2,
    quantity: 0
},
{
    name: 'Gummy Worms',
    price: 2,
    quantity: 0
}]

function buyIceCream (iceCreamName) {
    let foundIceCream = iceCream.find(parlor => parlor.name == iceCreamName)
    foundIceCream.quantity++
    drawCart();
}

function drawCart() {
    let template = ''
    iceCream.forEach(parlor => {
        console.log(parlor)
        if (parlor.quantity > 0) {
            template += `
            <div class="card-body row">
				<p class="col">${parlor.name}</p>
				<p class="col">${parlor.quantity}</p>
                <p class="col">${parlor.price}</p>
				<p class="col">${parlor.quantity * parlor.price}</p>
            </div>
            `
                    }
        document.getElementById('cart').innerHTML = template;
        drawTotal();
    })
}

function drawTotal() {
    let total = 0;
    iceCream.forEach(parlor => {
        total += parlor.price * parlor.quantity
    })
    document.getElementById('total').innerText = total.toFixed(2)
}

function pay() {
    iceCream.forEach(parlor => {
        parlor.quantity = 0
    })
    drawCart()
}


