var yo = require('yo-yo');
var $ = require('jquery');

var el = yo`
		<nav class="header">
      <div class="nav-wrapper">
        <div class="container">
          <div class="row center-align">
            <div class="col s12 m12">
              <a href="/" class="brand-logo tv">TV Shows</a>
            </div>
          </div>
        </div>
      </div>
    </nav>`;

$('#header-container').empty().append(el)


