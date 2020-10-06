$("ul").on("click", "li",  function(){
	$(this).toggleClass("completed");
});

$("ul").on("click","span",function(e){
	$(this).parent().fadeOut(500,function(){
		$(this).remove();	
	});
	e.stopPropagation();
}); 

$("input[type = 'text']").keypress(function(event){
	if(event.which === 13){
		var text = $(this).val();
		$(this).val("");
		$("ul").append("<li><span><i class='far fa-trash-alt'></i></span> " +text+ "</li>");
	}  
});

$('.fa-plus').click(function(){
	$("input").fadeToggle();
});