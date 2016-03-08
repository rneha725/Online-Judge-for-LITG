var codeMirror;
function changeSyntax() {
	if(document.getElementById("c").selected || document.getElementById("c++").selected) {
		codeMirror.setOption("mode", "cmake");
		
	}
	else if(document.getElementById("python").selected) {
		codeMirror.setOption("mode", "python");
	}
};

window.onload =	function() {
	codeMirror = CodeMirror.fromTextArea(document.getElementById("codeBox"), {
	lineNumbers: true,
	matchBrackets: true
	});
}
