function problemData(problem, callback) {
	$.getJSON("/public/problemList.json", function (data) {
		callback(data);
	});
};

// Load this function onload
function fetchProblems() {
	var innerProblemList = document.getElementById("problems"), str = '', i;
	var problemArray;
	problemData(problemArray, function(problemArray){
		for (i = 0; i < problemArray.length; i = i + 1) {
			str = str +
				'<a> <li class="list-group-item" onClick="loadProblemTemplate(\'' + problemArray[i].code + '\',\'' + problemArray[i].name + '\')"><span class="badge">' + problemArray[i].level + '/10</span>' + problemArray[i].name + '</li></a>';
		}
		innerProblemList.innerHTML = str;
	});	
}

function loadProblemTemplate(problemCode, problemName) {
	var win = window.location.href= './html/problems/problemPageTemplate.html#' + problemCode;
}

var problemCode = document.URL.split('#').pop();

function loadProblemData() {
	var obj;
	console.log(problemCode);
	for (var i=0; i < problemArray.length; i++)	{
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


/*for problemPageTemplate.html*/
function onPressSubmit() {
	window.location.href = "../submit.html#"+problemCode;
}


/*for using problemPageTemple, comment this*/
function onSubmit() {
	var problemCode = document.URL.split('/').pop();
	problemCode = problemCode.split('.')[0];
	console.log(problemCode);
	window.location.href="../submit.html#"+problemCode;
}

