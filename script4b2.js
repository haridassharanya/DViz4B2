/**
 * @author Sharanya Haridas
 */

//COMMENTS FOR HTML File
//there appears to be bug preventing comments on the html file: 
//http://aptanastudio.tenderapp.com/discussions/questions/912-how-to-comment-html
//to comment on the html file, the first script accesses jquery library while
//the second script refers to the local javascript file

//the function below fetches data using get function
//it is placed above pageloaded function and $get 
//this is so as to have a ready recipie/function before we try to run it
//I would expect "Latte" to show up in as it's the zero-eth attribute from the json array

function addJSONToPage(jsonData){


	console.log(jsonData.myBeverages[0].name);
 var mydataDiv= $("<div>");
 mydataDiv.html(jsonData);
 $("#contentContainer").append("mydataDiv");
}

function pageLoaded(){

/* NOTE: I wanted to use jquery for div, but the second line with the 	$myjQDiv.html("This is my jquery div.");
 wasn't working. Wnile attemting an alternative code with plain text js as written below, too,
  the childdiv appears as not defined:
var myjsDiv= document.createElement("div");
myjsDiv.innerHTML="this is my js div";
var targetdiv=document.getElementById("content container");
targetDiv.appendChild(myjsDiv); */


	// below is my jquery div - it performs the same function as plain js code, but more concisely
	//upon removing the "$" sign from the secondline, 
	//the statement "this is my jquery div" shows up in the browser.
	//however, removing the $ sign leads to a $get function error.
	
	var myjQDiv = $("<div>");
	$myjQDiv.html("This is my jquery div.");
	$("#contentContainer").append(myjQDiv);
	
	//the first parameter refers to the file we want
	//the second is the function to pass the data to
	//the third is the data format
	//overall the "get" function is used to get the file, in this case the json file
	
	$get("json4b2.json", addJSONtoPage, "json");
	
	console.log("My document is loaded");
	
	
}

//the document ready function lets us see whether everything has loaded.

$(document).ready(pageLoaded);

console.log("script4b2 js file is loaded");

//our seperate json file is drawn from the jsarray from assignment3
//my array was about beverages with distinct names and falling into 2 kinds of flavors
//like a regular (js) object, the json file begins and ends with curly brackets {}
//the myBeverages property is wrapped in quotes "" and followed by a colon :
