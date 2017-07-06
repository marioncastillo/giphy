$(document).ready(function(){
	var dibujarGifs = function(data){
		var gif = "";
		var url = "";
		data.forEach(function(element){
			gif = element.images.downsized_large.url;
			url = element.bitly_gif_url;
			$("#elementos").append(armarTemplate(gif,url));
		});
	}

})