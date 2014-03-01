/**
 * @author Sharanya Haridas
 */
function addJSONToPage(jsonData){

	console.log(json4b2.json);
 var mydataDiv= $("div");
 mydataDiv.html(jsonData);
 $("#contentcreator").append("mydataDiv");
}

function pageLoaded(){

	// jquery div
	var myjQDiv = $ ("<div>");
	$myjQDiv.html("This is my jquery div");
	$("#contentcontainer").append(myjQDiv);
	
	//first parameter comment
	//second
	//third
	
	console.log("My document is loaded");
	
	$.get("json4b2.json", addJSONToPage, "json");

	
}


$(document).ready(pageLoaded);



console.log("script4b2 js file is loaded");
