var codeMirror;

function loadCodeBox() {
	codeMirror = CodeMirror.fromTextArea(document.getElementById("codeBox"), {
	lineNumbers: true,
	matchBrackets: true
	});
}
//React function 
$(document).ready(loadReactStructure);
function loadReactStructure() {
	var CodeBox = React.createClass({
		render: function() {
			return (
				<div className = "form-group">
					<textarea className = "form-control col-lg-10" id = "codeBox" rows= "20">
					</textarea>
				</div>
			);
		}
	});

	var DropDownLanguages = React.createClass({
		changeSyntax: function() {
			if(document.getElementById("c").selected || document.getElementById("c++").selected) {
				codeMirror.setOption("mode", "cmake");
			}
			else if(document.getElementById("python").selected) {
				codeMirror.setOption("mode", "python");
			}
		},

		render: function() {
			return(
				<div className = "form-group col-sm-2">
					<br /><br /><br />
					<select className = "form-control" onChange={this.changeSyntax}>
						<option selected="true" disabled>Select Language:</option>
						{this.props.languages.map(function(language){
							return (
								<option id = {language.id}>{language.name}</option>
							);
						})}
					</select>
				</div>
			);
		}
	});

	var CodeBoxLanguages = React.createClass({
		render: function() {
			return(
				<div >
					<CodeBox />
					<DropDownLanguages languages = {this.props.languages} />
				</div>
			);
		}
	});

	var languagesAvailable = [
		{id: "c",      name: "C"},
		{id: "c++",    name: "C++"},
		{id: "python", name: "Python"}
	]

	ReactDOM.render(<CodeBoxLanguages languages = {languagesAvailable}/>, document.getElementById("codeAndSelect"));

	loadCodeBox();
}

