console.log("Script loaded");

function print(text1, text2, text3, text4, text5)
{
	document.getElementById('codeSpace_id').innerText = '' + print.caller;

	var element = document.getElementById("workingSpace_id");

	// const functionName = print.caller.toString().split('(')[0];
	// var functionDiv = document.createElement("div");
	// functionDiv.innerHTML = `<em>> ${functionName} ()\n\n</em>`
	// element.appendChild(functionDiv);	


	var newDiv = document.createElement("div");
	
	var combinedText = `${text1 ? text1 + ' ' : ''} ${text2 ? text2 + ' ' : ''} ${text3 ? text3 + ' ' : ''} ${text4 ? text4 + ' ' : ''} ${text5 ? text5 + ' ' : ''}`;

	// if (text2 != undefined) combinedText = text1 + " " + text2;
	
	newDiv.innerHTML = combinedText;
	newDiv.setAttribute("class", "workingText");
	element.appendChild(newDiv);	
}

function getRandom(range)
{
	// return a number between 1 and range (inclusive)
	return Math.floor( Math.random() * range) + 1;
}

function clearAll(){
	const element = document.getElementById("workingSpace_id");
	element.textContent = " ";	
	const codingSpaceDivElement = document.getElementById('codeSpace_id');
	codingSpaceDivElement.innerText = ' ';

	let errorSpace = document.getElementById("errorSpace_id");
	errorSpace.innerText = "";
	errorSpace.style['border'] = '4px rgb(144, 211, 255) dotted'
}

// Page ready event
window.addEventListener('load', function () {
	document.getElementById('pageTitle_id').innerText = document.title;
})

// console.defaultError = console.error.bind(console);
// console.errors = [];
// console.error = function(){
//     // default &  console.error()
//     console.defaultError.apply(console, arguments);
//     // new & array data
//     console.errors.push(Array.from(arguments));
// 	console.log(console.errors.length)
// 	console.log(Array.from(arguments))
// 	// document.getElementById("workingSpace_id").innerText = console.errors.toString();
// }

// console.stdlog = console.log.bind(console);
// console.logs = [];
// console.log = function(){
//     console.logs.push(Array.from(arguments));
// 	console.log(Array.from(arguments))
//     // console.stdlog.apply(console, arguments);
// }

// window.onerror = function (message, file, line, col, error) {
//     // alert("Error occured: " + errorMsg);//or any message
// 	// document.getElementById("errorSpace_id").innerText = message + file + line + col + error;
// 	console.log(error.stack)
//     return false;
// }
window.addEventListener("error", function (e) {
	let errorSpace = document.getElementById("errorSpace_id");
	errorSpace.innerText = "Your code has an error! Open the console with ctrl+f12 to view the error.";
	errorSpace.style['border'] = '6px rgb(255, 0, 0) solid'
	return false;
 })