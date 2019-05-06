function modal(){
  var pko = document.getElementById('send');
  pko.style.display = 'block';
}
function close_modal(){
  var modal = document.getElementById('send');
  modal.style.display = 'none';
}

$(document).ready(function(){
	$('.way').waypoint({
	  handler: function() {
	  $(this.element).addClass("way--active")
	  },
	  offset: '90%'
	});
});