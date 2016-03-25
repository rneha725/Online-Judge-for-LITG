function navigationBar() {
	var nav = document.getElementById("navigationBar");
	var str = '<nav class="navbar navbar-default">\
			  <div class="container-fluid">\
				<div class="navbar-header">\
				  <a class="navbar-brand" href="#">Online Judge</a>\
				</div>\
				<ul class="nav navbar-nav">\
				  <li class="active"><a href=/index.html>Home</a></li>\
				<li><p class="navbar-text navbar-right">Login/Signup</p></li>\
				</ul>\
			  </div>\
			</nav>';
	nav.innerHTML += str;
}

var Home = React.createClass({
	render: function() {
		return(
			<li className = "active"> 
				<a href="/index.html">Home</a>
			</li>
		);
	}
});

var Login = React.createClass({
	render: function() {
		return (
			<li>
				<p className="navbar-text navbar-right">
					Login/Signup
				</p>
			</li>
		);
	}
})

var NavigationBar = React.createClass({
	render: function() {
		return (
			<nav className = "navbar navbar-default">
				<div className = "container-fluid">
					<ul className = "nav navbar-nav">
						<Home />
						<Login />
					</ul>
				</div>
			</nav>
		);
	}
});

ReactDOM.render(<NavigationBar />, document.getElementById("navigationBar"));
