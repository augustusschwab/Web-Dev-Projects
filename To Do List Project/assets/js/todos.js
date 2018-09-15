//Check off to-do list item when it is clicked
$("ul").on("click", "li", function(){
	$(this).toggleClass("completed");
});

//Click on X to delete todo
$("ul").on("click", "span", function(event){
	$(this).parent().fadeOut(600, function(){
		$(this).remove();
	});
	event.stopPropagation();
});

$("input[type='text']").keypress(function(event){
	if(event.which === 13){
		//grab new to-do text from input
		var todoText = $(this).val();
		$(this).val("");
		//create a new li and add to ul
		$("ul").append("<li><span><i class='fas fa-trash-alt'></i></span> "+todoText+"</li>");
	}
});

$("#toggle").click(function(){
	$("input[type='text']").fadeToggle();
})