"use strict";
function getSupplierCode(partCode) {
  const positionOfColon = partCode.indexOf(";");
  return partCode.substring(0, positionOfColon);
}

function getProductNumber(partCode) {
  const positionOfColon = partCode.indexOf(";");
  const positionOfHyphen = partCode.indexOf("-");
  return partCode.substring(positionOfColon + 1, positionOfHyphen);
}

function getSize(partCode) {
  const positionOfHyphen = partCode.indexOf("-");
  return partCode.substring(positionOfHyphen + 1);
}

function parsePartCode(partCode) {
  let supplierCode = getSupplierCode(partCode);
  let productNumber = getProductNumber(partCode);
  let size = getSize(partCode);
  let partCodeObject = {
    supplierCode: supplierCode,
    productNumber: productNumber,
    size: size,
  };
  return parsePartCode;
}

const partCode1 = "ACMN:123-L";
const partCode2 = "DI:12345-m";
const partCode3 = "ACE:1234-s";

let returnObject = parsePartCode(partCode1);
console.log(returnObject);
