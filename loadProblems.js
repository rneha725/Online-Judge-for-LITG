function fetchProblems()
{
	var problemArray=[
	{
		code:"problem1",
		name:"Hello World",
		level:2
	},
	{
		code:"problem2",
		name:"Life, Universe and Everything",
		level:3
	},
	{
		code:"problem3",
		name:'Factorial',
		level:4
	}
	];
	var innerProblemList=document.getElementById("problems");
	var str='';
	for(i in problemArray)
	{
		str=str+
		"<li class=\"list-group-item\">\
    <span class=\"badge\">"+problemArray[i].level+"/10</span>\
    <a href=\"#\" class=\"link\">"+problemArray[i].name+"</a></li>"
	}
	innerProblemList.innerHTML=str;
}
