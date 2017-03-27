var yo = require('yo-yo');

module.exports = function layout(box) {
	return yo`
	<div class="container">
		<div class="row">
			${box}
		</div>
	</div>`;
}



