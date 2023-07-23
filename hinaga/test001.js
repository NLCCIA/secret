var XLSX;
var workbook = XLSX.readFile('haiku.xlsx')

var sheet_name_list = workbook.SheetNames
var Sheet1          = workbook.Sheets[sheet_name_list[0]]  // シート1をデータを取得します
var Sheet1_json     = XLSX.utils.sheet_to_json( Sheet1 )   // シート1のデータをJSONパースします

var r1        = Sheet1['B2'].v
console.log( `紅　先鋒：\n${Sheet1B2}` )
var r2        = Sheet1['C2'].v
console.log( `紅　中堅：\n${Sheet1C2}` )
var r3        = Sheet1['D2'].v
console.log( `紅　大将：\n${Sheet1D2}` )

var w1        = Sheet1['B3'].v
console.log( `白　先鋒：\n${Sheet1B3}` )
var w2       = Sheet1['C3'].v
console.log( `白　中堅：\n${Sheet1C3}` )
var w3        = Sheet1['D3'].v
console.log( `白　大将：\n${Sheet1D3}` )
