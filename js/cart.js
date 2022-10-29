let label = document.getElementById("label");
let shoppingCart = document.getElementById("shoppingCart");

//Accesing to our LOCAL STORAGE
//if we have local data is gonna retrieve: JSON.parse(localstorage.getItem("data")
//if not is gonna retrive an empty array
let basket = JSON.parse(localStorage.getItem("data")) || [];

//CALCULATION FUNCTION
//it is gonna get all the numbers to show the sum in the basket
let calculation = () => {
	//checking
	// console.log("calculation is running");

	let cartIcon = document.getElementById("cartAmount");
	//map: array function to go throught just the numbers of the item in each card
	//reduce: x, y are working to sum all the elements (all the items) in the array
	// console.log(basket.map((x) => x.item).reduce((x, y) => x + y, 0));

	cartIcon.innerHTML = basket.map((x) => x.item).reduce((x, y) => x + y, 0);
};

// every time the page is load the calculation will be done and the amount of items appear in pur basket
// Here I run the function
calculation();

// let generateCartItems = () => {};
