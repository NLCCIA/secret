//let XLSX     = require('xlsx')
let workbook = XLSX.readFile('haiku.xlsx')

let sheet_name_list = workbook.SheetNames
let Sheet1          = workbook.Sheets[sheet_name_list[0]]  // シート1をデータを取得します
let Sheet1_json     = XLSX.utils.sheet_to_json( Sheet1 )   // シート1のデータをJSONパースします

// (例)シート1のセルA1の値をコンソールに出力します
var r1        = Sheet1['B2'].v
console.log( `紅　先鋒：\n${Sheet1B2}` )
let r2        = Sheet1['C2'].v
console.log( `紅　中堅：\n${Sheet1C2}` )
let r3        = Sheet1['D2'].v
console.log( `紅　大将：\n${Sheet1D2}` )

let w1        = Sheet1['B3'].v
console.log( `白　先鋒：\n${Sheet1B3}` )
let w2       = Sheet1['C3'].v
console.log( `白　中堅：\n${Sheet1C3}` )
let w3        = Sheet1['D3'].v
console.log( `白　大将：\n${Sheet1D3}` )
