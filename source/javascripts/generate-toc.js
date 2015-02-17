$(document).ready(function() {
	if($('#comments').length) {
		var div = $("div.entry-content");
		var tocBlock = $("<div id='tocBlock'><span class='tocHeading'>目录</span></div>");
		var ul = $("<ul id='toc'></ul>");
		
		div.prepend(tocBlock);
		tocBlock.append(ul);
		
		div.find(":header").each(function(i){
			if($(this).prop("tagName") == 'H2') {
				var h2 = $("<li><a href='#h2" + i + "'>"+ $(this).text() +"</a></li>");
				ul.append(h2);
				$(this).attr('id', 'h2' + i);
			}
			if($(this).prop("tagName") == 'H3') {
				var li_last = $("#toc").children().last();
				
				if(!li_last.has('ul').length) {
					$("#toc").children().last().append("<ul></ul>");
				}
				
				li_last.children('ul').first().append("<li><a href='#h3" + i + "'>"+ $(this).text() +"</a></li>");
				$(this).attr('id', 'h3' + i);
			}
		});
	}
});