$(document).ready(loadProblemContents);

function problemData(problem, callback){
	$.getJSON("../../server/problemList.json", function (data) {
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
	// problemCode = problemCode.split(".")[0];

	var problem;
	problemData(problem, function(problem){
	console.log(problem);
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

		var ProblemDesc = React.createClass({
			render: function(){
				return (
					<div className="panel-group">
						<div className="h1">{problem.name}</div>
						<hr />

						<div className="panel panel-default">
							<Heading text="Description"/>
							<Content text={problem.description} />
						</div>

						<div className="panel panel-default">
							<Heading text="Input"/>
							<Content text={problem.inputDesc} />
						</div>

						<div className="panel panel-default">
							<Heading text="Output"/>
							<Content text={problem.outputDesc} />
						</div>

						<div className="panel panel-default">
							<Heading text="Sample Input"/>
							<Content text={problem.input} />
						</div>

						<div className="panel panel-default">
							<Heading text="Sample Onput"/>
							<Content text={problem.output} />
						</div>
					</div>
				);
			}
		});

		ReactDOM.render(<ProblemDesc />, document.getElementById("problemDesc"));
	})
}