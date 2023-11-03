function loadPartialHtml_(partial) {
  const htmlServ = HtmlService.createTemplateFromFile(partial);
  return htmlServ.evaluate().getContent();
}

function loadSearchView(){
  return loadPartialHtml_('search');
}

function loadAddView(){
  return loadPartialHtml_('add');
}

function loadEditView(){
  return loadPartialHtml_('edit');
}