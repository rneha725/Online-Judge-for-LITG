function fetchProblems()
{
	var innerProblemList=document.getElementById("problems");
	var str='';
	for(i in problemArray)
	{
		str=str+
		"<li class=\"list-group-item\">\
    <span class=\"badge\">"+problemArray[i].level+"/10</span>\
    <a href=\"problems/"+problemArray[i].code+".html\" class=\"link\">"+problemArray[i].name+"</a></li>"
	}
	innerProblemList.innerHTML=str;
}
