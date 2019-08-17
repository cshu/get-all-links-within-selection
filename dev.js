var current_selection=window.getSelection();
var links_href='';
for(var link of document.getElementsByTagName('A')){
	if(current_selection.containsNode(link))
		links_href+=link.href+'\n';
}
var rewin=open('');
rewin.document.write('<!doctype html><html><head><title>X</title><body><textarea style="width:99%;height:95vh"></textarea>');
rewin.document.body.lastChild.value=links_href;
rewin.document.close();

