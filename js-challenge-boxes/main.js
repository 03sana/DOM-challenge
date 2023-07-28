// Select all elements on the page
const bodyElements = document.querySelectorAll("*");
// Apply common CSS styles to each element
//forEach: forEach is an array method in JavaScript that allows you to iterate over each element in an array and execute a specified function for each element
//function(item) { ... }: This is an anonymous function that gets executed for each element in the bodyElements array. The parameter item represents each individual element in the array during each iteration.
bodyElements.forEach(function(item) {
  item.style.cssText = "font-family: Arial, sans-serif; margin: 0; padding: 0";
});

// Header
const header = document.createElement("header");
header.classList.add("header");

// Logo
const logo = document.createElement("h1");
logo.append(document.createTextNode("Elzero"));
logo.style.cssText = "color: #126c51; margin: 0";

// Ul Create a function for the navbar
function createNavLink(txt) {
	let li = document.createElement("li");
	let a = document.createElement("a");
	a.href = "#";
	a.style.cssText =
		"color: rgb(103 103 103); font-weight: 600; display: block; margin: 0 10px; font-size: 1.1rem; text-decoration: none";
	a.append(document.createTextNode(txt));
	li.append(a);
	ul.append(li);
}

const ul = document.createElement("ul");
createNavLink("Home");
createNavLink("About");
createNavLink("Services");
createNavLink("Contact");

ul.style.cssText = "display: flex; list-style: none; margin: 0";

//add the logo and links to header section

header.append(logo, ul);

header.style.cssText =
	"display: flex; padding: 10px 15px; align-items: center; justify-content: space-between;";



    
// Main
let main = document.createElement("main");
main.className = "products-container";
main.style.cssText =
	"background-color: #eee; display: flex; flex-wrap: wrap; gap: 15px; justify-content: space-between; padding: 15px; min-height: calc(100vh - (56.86px + 59.64px)); box-sizing: border-box;";

for (let i = 0; i < 15; i++) {
	let product = document.createElement("div");
	product.className = "product";

	let span = document.createElement("span");
	span.append(document.createTextNode(`${i + 1}`));
	span.style.cssText = "display: block; font-size: 1.6rem";

	product.append(span, "Product");

	product.style.cssText =
		"text-align: center; flex-basis: calc((100% / 3) - 30px); background-color: white; padding: 23px 10px; font-size: 1.1rem";
	main.append(product);
}

// Footer
let footer = document.createElement("footer");
footer.classList.add("footer");
footer.append(document.createTextNode("Copyright 2021"));

footer.style.cssText =
	"text-align: center; font-size: 1.5rem; color: white; background-color: #126c51; padding: 16px";

document.body.prepend(header, main, footer);
