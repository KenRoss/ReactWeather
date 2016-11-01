var React = require('react');
var {Link} = require('react-router');

var About = (props) => {
	return (
		<div>
			<h1 className="text-center">About</h1>
			<p>Welcome to the about page. This is an example app built while following a Udemy course.</p>
			<ol>
				<li>
					<Link to="https://github.com/KenRoss/ReactWeather">GitHub page</Link>
				</li>
			</ol>
		</div>
	)
};

module.exports = About;