function getDataForSearch() {
  const ss = SpreadsheetApp.getActiveSpreadsheet();
  const ws = ss.getSheetByName('funcionarios');
  return ws.getRange(2, 1, ws.getLastRow()-1, 4).getValues()
}

function deleteById(id){
  const ss = SpreadsheetApp.getActiveSpreadsheet();
  const ws = ss.getSheetByName('funcionarios');
  const cutIds = ws.getRange(2, 1, ws.getLastRow()-1, 1).getValues().map(r => r[0].toString().toLowerCase());
  const posIndex = cutIds.indexOf(id.toString().toLowerCase());
  const rowNumber = posIndex === -1 ? 0 : posIndex + 2;
  ws.deleteRow(rowNumber);
}

function getFuncById(id){
  const ss = SpreadsheetApp.getActiveSpreadsheet();
  const ws = ss.getSheetByName('funcionarios');
  const cutIds = ws.getRange(2, 1, ws.getLastRow()-1, 1).getValues().map(r => r[0].toString().toLowerCase());
  const posIndex = cutIds.indexOf(id.toString().toLowerCase());
  const rowNumber = posIndex === -1 ? 0 : posIndex + 2;
  const funcInfo = ws.getRange(rowNumber, 1, 1, 4).getValues()[0];
  return {funID: funcInfo[0], nome: funcInfo[1], cpf: funcInfo[2], cargo: funcInfo[3]}
}

function editFuncById(id,funcInfo){
  const ss = SpreadsheetApp.getActiveSpreadsheet();
  const ws = ss.getSheetByName('funcionarios');
  const cutIds = ws.getRange(2, 1, ws.getLastRow()-1, 1).getValues().map(r => r[0].toString().toLowerCase());
  const posIndex = cutIds.indexOf(id.toString().toLowerCase());
  const rowNumber = posIndex === -1 ? 0 : posIndex + 2;
  ws.getRange(rowNumber, 2, 1, 3).setValues([[funcInfo.nome, funcInfo.cpf, funcInfo.cargo]]);
  return true;
}

function addFunc(funcInfo){
  const ss = SpreadsheetApp.getActiveSpreadsheet();
  const ws = ss.getSheetByName('funcionarios');
  const uniqueIDs = ws.getRange(2, 1, ws.getLastRow()-1, 1).getValues();
  var maxNum = 0;
  uniqueIDs.forEach(r => {
    maxNum = r[0] > maxNum ? r[0] : maxNum
  });
  var newID = maxNum + 1;
  ws.appendRow([newID, funcInfo.nome, funcInfo.cpf, funcInfo.cargo]);
}