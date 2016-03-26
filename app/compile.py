##This script would run when a user will submit a program
##Two argumets would be given
#1. fullFileName.fileExtension
#2. timeout
## fullFileName has fileName with directory path.
## fileName has only file file name
## workingDirectory is the path of /app
## outputFile is the name of the output file for both system defined outfile and user generated file

import os;
import sys;
import filecmp;

file = sys.argv[1];
fullFileName = file.split(".")[0];
fileExtension = file.split(".")[1];
file = fullFileName + "." + fileExtension;

workingDirectory = file; # dir: /app having /submissions/ and /outputs/
workingDirectory,  fileName = os.path.split(workingDirectory)[0], os.path.split(workingDirectory)[1]; # array of two having path and fullFileName
fileName = fileName.split(".")[0];
workingDirectory = os.path.split(workingDirectory)[0]; # array of three, path is divided into two

outputFile = fileName + ".output";

codes = {200: "SUCCESS", 404: "File not found", 400: "Error", 408: "Timeout"}

if compile() == 200:
	print "Compile: SUCCESS";
	if execute(sys.argv[2]) == 200:
		print "Execute: SUCCESS";
		# compare the output file with the corrent output file
		print "Comapring two files.";
		expectedOutputFile = os.path.join(workingDirectory, "outputs", outputFile);
		userOutputFile = os.path.join(workingDirectory, "submissions", outputFile);
		
		if filecmp.cmp(expectedOutputFile, userOutputFile):
			print "Correct";
		else :
			print "Wrong";
	else :
		exit();
else :
	exit();

##########################============= Functions =============##########################
def compile():
	result = -1;

	if os.path.isfile(file):
		if fileExtension == "c":
			result = os.system("gcc -o " + fullFileName + " " + file);
		elif fileExtension == "cpp":
			result = os.system("g++ -o " + fullFileName + " " + file);
		elif fileExtension == "py":
			outputFile = fullFileName + ".output";
			result = os.system("python" + " " + file + " > " + outputFile);

		if(result > 0):
			return 400;

		elif(result == 0):
			return 200;

	else:
		return 404;

def execute(timeout):
	if fileExtension == "py":
		print "Python file: No execution needed.";
		return 200;

	#Input test file
	testCases = open(fullFileName + ".test", "r").read();

	print "testCases: " + testCases;
	outputFile = fullFileName + ".output";
	if os.path.isfile(fullFileName):
		result = os.system("timeout " + timeout + " ./" + fullFileName + " " + testCases + " > " + outputFile);
		if result == 0:
			return 200;
		else:
			return 400;

	else:
		return 404;
