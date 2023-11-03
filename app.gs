function loadMainForm() {
  const htmlServ = HtmlService.createTemplateFromFile("main");
  const html = htmlServ.evaluate();
  html.setWidth(1050).setHeight(600);
  const ui = SpreadsheetApp.getUi();

  ui.showModalDialog(html, 'Funcionários');
}

function createMenu_(){
  const ui = SpreadsheetApp.getUi();
  const menu = ui.createMenu('Innovex');
  menu.addItem('Funcionários', 'loadMainForm');
  menu.addToUi();

}

function onOpen(){
  createMenu_();
}