$(document).ready(loadProblemDesc);

var Heading = React.createClass({
	render: function(){
		return (
			<div className="panel-heading">
				{this.props.text}
			</div>
		)
	}
});

var Text = React.createClass({
	render: function(){
		return (
			<div class="panel-body">
				{this.props.type}
			</div>
		);
	}
});

function loadProblemDesc() {
	// extract the code of the problem from URL
	problemCode = document.URL.split("/").pop();
	problemCode = problemCode.split(".")[0];
	console.log(problemCode);

	var ProblemDesc = React.createClass({
		render: function(){
			return (
				<div className="panel panel-default">
					<Heading text="Description" />
					<Text type={problemCode.description} />
				</div>
			);
		}
	});

	ReactDOM.render(<ProblemDesc />, document.getElementById("problemDesc"));
}