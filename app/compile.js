var path = require("path");

module.exports = {

	createAndRun: function(problemCode, fs, request, PythonShell) {
		extension = '';
		
		if(request.body.language == "Python") {
			extension = ".py";
		}
		else if(request.body.language == "C") {
			extension = ".c";
		}
		else if(request.body.language == "C++") {
			extension = ".cpp";
		}

		filePath = __dirname + "/submissions/" + problemCode + extension;
		fs.writeFile(filePath, request.body.code, function(error) {
			if(error) {
				console.log("Error in writing to file");
				throw error;
			}
			else {
				console.log("Written on file");
			}
		})

		var options = {
			args: [path.join(__dirname + "/submissions/" + problemCode + extension), '1']
		};

		PythonShell.run(path.join(__dirname + '/compile.py'), options, function(error, results) {
			if(error) {
				throw error;
			}
			else console.log(results);
		});
	}
}