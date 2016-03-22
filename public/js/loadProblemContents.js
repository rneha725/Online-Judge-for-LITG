// extract the code of the problem from URL
problemCode = document.URL.split("#").pop();

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

var ProblemDesc = React.createClass({
	getInitialState: function() {
		return {data:[]}
	},

	getProblemData: function(problemCode) {
		$.getJSON("/public/problemList.json", function(values){
			$.each(values, function(index, value){
				if(value.code == problemCode) {
					this.setState({
						data: value
					});
				}
			}.bind(this))
		}.bind(this))
	},

	componentWillMount: function() {
		this.getProblemData(problemCode);
	},

	render: function(){
		return (
			<div>
				<div className = "h2">
					{this.state.data.name}
				</div>
				<hr />
				<div className = "panel-group">
					<div className = "panel panel-default">
						<Heading text = "Description" />
						<Content text = {this.state.data.description} />
					</div>
					<div className = "panel panel-default">
						<Heading text = "Input" />
						<Content text = {this.state.data.inputDesc} />		
					</div>
					<div className = "panel panel-default">
						<Heading text = "Output" />
						<Content text = {this.state.data.outputDesc} />
					</div>
					<div className = "panel panel-default">
						<Heading text = "Sample Input" />
						<Content text = {this.state.data.input} />
					</div>
					<div className = "panel panel-default">
						<Heading text = "Sample Output" />
						<Content text = {this.state.data.output} />
					</div>
				</div>
			</div>
		);
	}
});

ReactDOM.render(<ProblemDesc />, document.getElementById("problemDesc"));