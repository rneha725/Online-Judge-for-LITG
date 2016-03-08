$(document).ready(loadProblemDesc);

problemCode = document.URL.split("/").pop();
	problemCode = problemCode.split(".")[0];
	console.log(problemCode);

function loadProblemDesc() {
	// extract the code of the problem from URL
	

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
					{this.props.text}
				</div>
			);
		}
	});

	var ProblemDesc = React.createClass({
		render: function(){
			return (
				<div className="panel-group">
					<div className="panel panel-default">
						<Heading text="Description"/>
						<Content text="lorem" />
					</div>

					<div className="panel panel-default">
						<Heading text="Input"/>
						<Content text="lorem" />
					</div>

					<div className="panel panel-default">
						<Heading text="Output"/>
						<Content text="lorem" />
					</div>

					<div className="panel panel-default">
						<Heading text="Sample Input"/>
						<Content text="lorem" />
					</div>

					<div className="panel panel-default">
						<Heading text="Sample Onput"/>
						<Content text="lorem" />
					</div>
				</div>
			);
		}
	});

	ReactDOM.render(<ProblemDesc />, document.getElementById("problemDesc"));
}


$(function (){
	$.getJSON("../../server/problemList.json", function (data) {
		problemCode = eval(problemCode);
		// var jsonObj = JSON.parse(data);
		console.log(data.problemCode.code);
	});
});