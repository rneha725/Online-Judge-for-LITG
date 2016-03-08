function navigationBar() {
	var nav = document.getElementById("navigationBar");
	var str = '<nav class="navbar navbar-default">\
			  <div class="container-fluid">\
				<div class="navbar-header">\
				  <a class="navbar-brand" href="#">Online Judge</a>\
				</div>\
				<ul class="nav navbar-nav">\
				  <li class="active"><a href="/index.html">Home</a></li>\
				<li><p class="navbar-text navbar-right">Login/Signup</p></li>\
				</ul>\
			  </div>\
			</nav>';
	nav.innerHTML += str;
}
