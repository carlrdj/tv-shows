var yo = require('yo-yo');
var $ = require('jquery');
var page = require('page');
var el = yo`
		<div class="container">
      <div class="row">        
        <div class="col s12 m8 push-m2 search-box">
          <form> 
          <div class="input-field">
            <i class="material-icons prefix">search</i>
            <input id="icon_prefix" type="text" autofocus="autofocus" class="validate"></input>
          </div>
          </form>
        </div>
      </div>
    </div>`;

$('#search-container').empty().append(el)

$('#search-container').find('form').on('submit', function (ev) {
	ev.preventDefault();
	var busqueda = $(this).find('input[type="text"]').val();
	page(`/search?q=${busqueda}`);
})
