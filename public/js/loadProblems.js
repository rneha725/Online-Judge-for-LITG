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

/*for problemPageTemplate.html*/
function onPressSubmit() {
	window.location.href = "../submit.html#"+problemCode;
}
