function generateTOC(insertBefore, heading) {
  var container = jQuery("<div id='tocBlock'></div>");
  var div = jQuery("<ul id='toc'></ul>");
  var content = $(insertBefore).first();

  if (heading != undefined && heading != null) {
    container.append('<span class="tocHeading">' + heading + '</span>');
  }
  
  if (startLv === undefined) { startLv = 1; }

  div.tableOfContents(content);
  container.append(div);
  container.insertBefore(insertBefore);
}