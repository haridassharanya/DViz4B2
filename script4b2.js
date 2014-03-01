/**
 * @author Sharanya Haridas
 */
function addJSONToPage(jsonData){

	console.log(jsonData);
 var mydataDiv= $("div");
 mydataDiv.html(jsonData);
 $("#contentcreator").append("mydataDiv");
}

function pageLoaded(){

	// jquery div
	var myjQDiv = $("<div>");
	$myjQDiv.html("This is my jquery div.");
	$("#contentContainer").append(myjQDiv);
	
	//first parameter comment
	//second
	//third
	
	$get("json4b2.json", addJSONtoPage, "json");
	
	console.log("My document is loaded");
	
	
}


$(document).ready(pageLoaded);



console.log("script4b2 js file is loaded");
