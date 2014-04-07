/**
 * @author Sharanya Haridas
 */

//the function below fetches data using get function
//it is placed above pageloaded function and $get 
//this is so as to have a ready recipie/function before we try to run it
//I would expect "Latte" to show up in as it's the zero-eth attribute from the json array

function addJSONTomPage(mjsonData){


 console.log("mjsonData.myBeverages[0].name");
 var mdataDiv= $("<div>");
 mdataDiv.html(mjsonData);
 $("#Container").append("mdataDiv");
}

function mpageLoaded(){

	// below is my jquery div - it performs the same function as plain js code, but more concisely
	//upon removing the "$" sign from the secondline, 
	//the statement "this is my jquery div" shows up in the browser.
	//however, removing the $ sign leads to a $get function error.
	
	var mjQDiv = $("<div>");
	console.log("mjQDiv here");
	$(mjQDiv).html("This is my jquery div.");
	$("#Container").append(mjQDiv);
	
	//the first parameter refers to the file we want
	//the second is the function to pass the data to
	//the third is the data format
	//overall the "get" function is used to get the file, in this case the json file
	
	$.get("json4b2.json", addJSONTomPage, "json");
	console.log("My document is loaded");
	
	
}

//the document ready function lets us see whether everything has loaded.

$(document).ready(mpageLoaded);

console.log("script4b2 js file is loaded");

//our seperate json file is drawn from the jsarray from assignment3
//my array was about beverages with distinct names and falling into 2 kinds of flavors
//like a regular (js) object, the json file begins and ends with curly brackets {}
//the myBeverages property is wrapped in quotes "" and followed by a colon :
