function loadPage() {
	var container = document.getElementById("problem"), str =
		'<div class="container">\
		<div class="panel-group">\
		<h1 class="h1">' + problem.name +
		'</h1>\
		<hr>\
		<div class="panel panel-default">\
		<div class="panel-heading"><h4 class="h4">Description</h4></div>\
		<div class="panel-body">' + problem.description +
		'</div>\
		</div>\
		<br>';

	if (problem.inputDesc) {
		str += '<div class="panel panel-default">\
		<div class="panel-heading"><h4 class="h4">Input</h4></div>\
		<div class="panel-body">' + problem.inputDesc + '</div>\
		</div>\
		<br>';
	}
		
	if (problem.outputDesc) {
		str += '<div class="panel panel-default">\
		<div class="panel-heading"><h4 class="h4">Description</h4></div>\
		<div class="panel-body">' + problem.outputDesc + '</div>\
		</div>\
		<br>';
	}
	
		str += '<div class="panel panel-default">\
		<div class="panel-heading"><h4 class="h4">Output</h4></div>\
			<div class="panel-body">\
			' + problem.input + '\
				</div>\
		</div>\
		<br>\
		<div class="panel panel-default">\
		<div class="panel-heading"><h4 class="h4">Sample Output</h4></div>\
			<div class="panel-body">\
			' + problem.output + '\
				</div>\
		</div>\
	</div>\
	<br>\
	<a href="../submit.html"><button type="button" class="btn btn-success btn-md">Submit</button></a>\
</div>';
	container.innerHTML += str;
}