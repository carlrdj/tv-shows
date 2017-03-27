var yo = require('yo-yo');
var $ = require('jquery');

module.exports = function (pic) {
  //console.log(pic);
  var el = '';
  function render(show) {
      el = yo`
				<div class="col s6 m3"> 
          <div class="card">
            <div class="card-image waves-effect waves-block waves-light">
              <img class="activator" src="${show.image ? show.image.medium : ''}">
            </div>
            <div class="card-content">
              <span class="card-title activator grey-text text-darken-4">${show.name}</span>
              <p>
                <button class="like"><i class="material-icons">thumbs_up_down</i></button>
                <!--<a class="dislike" href="#"><i class="material-icons">thumb_up</i></a>--> 
              </p>
            </div>
            <div class="card-reveal">
              <span class="card-title grey-text text-darken-4">${show.name}<i class="material-icons right">close</i></span>
              ${$.parseHTML(show.summary)}
            </div>
          </div>
        </div>`; 
    return el;
  }
  return render(pic);
}



function showName() {
  return false;
}
console.log('.row')


$('#main-container .row .card button.like').click(function (ev) {
  $(this).closest('.card').toggleClass('liked')
  
  alert('s');
})

