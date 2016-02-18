function fetchProblems() {
	'use strict';
	var innerProblemList = document.getElementById("problems"), str = '', i;
	for (i = 0; i < problemArray.length; i = i + 1) {
		str = str +
			'<a> <li class="list-group-item" onClick="loadProblemTemplate(\'' + problemArray[i].code + '\',\'' + problemArray[i].name + '\')"><span class="badge">' + problemArray[i].level + '/10</span>' + problemArray[i].name + '</li></a>';
	}
	innerProblemList.innerHTML = str;
}

function loadProblemTemplate(problemCode, problemName) {
	var win = window.open('problems/problemPageTemplate.html#' + problemCode);
}

function loadProblemData() {
	var problemCode = document.URL.split('#').pop(), obj;
	console.log(problemCode);
	for(var i=0; i < problemArray.length; i++)
	{
		if(problemArray[i].code == problemCode) obj=problemArray[i];
	}

	document.getElementById("problemName").innerHTML=obj.name;
	document.getElementById("problemDescription").innerHTML=obj.description;
    
    if(obj.inputDesc)
	document.getElementById("problemInputDesc").innerHTML=obj.inputDesc;
    else
        document.getElementById("problemInputDescPanel").remove();
    
    if(obj.outputDesc)
	document.getElementById("problemOutputDesc").innerHTML=obj.outputDesc;
    else
        document.getElementById("problemOutputDescPanel").remove();
	
	document.getElementById("problemSampleInput").innerHTML=obj.input;
	document.getElementById("problemSampleOutput").innerHTML=obj.output;
}
