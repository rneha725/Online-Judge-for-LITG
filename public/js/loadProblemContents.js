$(document).ready(loadProblemContents);

function problemData(problem, callback){
	$.getJSON("/public/problemList.json", function (data) {
		$.each(data, function(index, value) {
			if(value.code == problemCode){
				problem = value;
				callback(problem);
			}
		});	
	});
};

function loadProblemContents() {
	// extract the code of the problem from URL
	problemCode = document.URL.split("#").pop();

	var problem;
	problemData(problem, function(problem){
	
	//problem contains the data of the specified problem

	var Heading = React.createClass({
		render: function(){
			return (
				<div className="panel-heading">
					<div className="h4">
						{this.props.text}
					</div>
				</div>
			);
		}
	});

	var Content = React.createClass({
		render: function(){
			return (
				<div className="panel-body">
					<div>
						{this.props.text}
					</div>
				</div>
			);
		}
	});

	var contentObj = [
		{ heading: "Description",   text: problem.description},
		{ heading: "Input",         text: problem.inputDesc},
		{ heading: "Output",        text: problem.outputDesc},
		{ heading: "Sample Input",  text: problem.input},
		{ heading: "Sample Output", text: problem.output}
	];

	var ContentNode = React.createClass({
		render: function() {
			return (
				<div>
					{this.props.contents.map(function(data){
						return(
						 	<div className = "panel panel-default">
								<Heading text = {data.heading} />
								<Content text = {data.text} />
							</div>
						);
					})}
				</div>
			);
		}
	});


	var ProblemDesc = React.createClass({
		render: function(){
			return (
				<div className="panel-group">
					<div className="h1">{problem.name}
					</div>
					<hr />

					<ContentNode contents = {this.props.data} />
				</div>
			);
		}
	});

	ReactDOM.render(<ProblemDesc data = {contentObj} />, document.getElementById("problemDesc"));
	})
}