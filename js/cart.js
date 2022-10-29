let label = document.getElementById("label");
// let backHome = document.getElementById("backHome");
// backHome.innerHTML = `
//  <a href="../index.html">
// <div class="back-to-shop">
//   <a href="#">&leftarrow;</a>
//   <span class="text-light p-lg-2">Back to shop</span>
// </div>
// </a>
// `;
let shoppingCart = document.getElementById("shoppingCart");

//Accesing to our LOCAL STORAGE
//if we have local data is gonna retrieve: JSON.parse(localstorage.getItem("data")
//if not is gonna retrive an empty array
let basket = JSON.parse(localStorage.getItem("data")) || [];

//CALCULATION FUNCTION
//it is gonna get all the numbers to show the sum in the basket
let calculation = () => {
	let cartIcon = document.getElementById("cartAmount");
	//map: array function to go throught just the numbers of the item in each card
	//reduce: x, y are working to sum all the elements (all the items) in the array
	// console.log(basket.map((x) => x.item).reduce((x, y) => x + y, 0));

	cartIcon.innerHTML = basket.map((x) => x.item).reduce((x, y) => x + y, 0);
};
// every time the page is load the calculation will be done and the amount of items appear in our basket

// Here I run the function
calculation();

// Generating SHOPPING CARDS
let generateCartItems = () => {
	if (basket.length !== 0) {
		return (shoppingCart.innerHTML = basket
			.map((x) => {
				return `
                <div class="cart-item">Hello</div>
            `;
			})
			.join("")); //rendering the items from the shopping one buy one  with map method
	} else {
		//Running the if statement
		shoppingCart.innerHTML = `
        
        `;
		//Running the else statement
		label.innerHTML = `
            <h2>Cart Empty</h2>
            <a href="../index.html">
            <button id="HomeBtn" class="home-btn">Back to Home</button>
            </a>
        `;
	}
};

//Invoking the function
generateCartItems();
