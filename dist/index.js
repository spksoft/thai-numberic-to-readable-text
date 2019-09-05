"use strict";
exports.__esModule = true;
var convertNumberToReadableThaiText = function (inputNumber) {
    var arrayOfEachNumber = String(inputNumber).split("");
    var arrayOfEachNumberWithMarker = arrayOfEachNumber
        .reverse()
        .map(function (o, i) {
        switch (i) {
            case 0:
                return { value: o, marker: "หน่วย" };
            case 1:
                return { value: o, marker: "สิบ" };
            case 2:
                return { value: o, marker: "ร้อย" };
            case 3:
                return { value: o, marker: "พัน" };
            case 4:
                return { value: o, marker: "หมื่น" };
            case 5:
                return { value: o, marker: "แสน" };
            case 6:
                return { value: o, marker: "ล้าน" };
            case 7:
                return { value: o, marker: "สิบล้าน" };
            case 8:
                return { value: o, marker: "ร้อยล้าน" };
            case 9:
                return { value: o, marker: "พันล้าน" };
            case 10:
                return { value: o, marker: "หมื่นล้าน" };
            case 11:
                return { value: o, marker: "แสนล้าน" };
            case 12:
                return { value: o, marker: "ล้านล้าน" };
            default:
                throw new Error("This libery still have maximum is 12 charecter of number");
        }
    })
        .reverse();
    var dictionary = {
        "1": "หนึ่ง",
        "2": "สอง",
        "3": "สาม",
        "4": "สี่",
        "5": "ห้า",
        "6": "หก",
        "7": "เจ็ด",
        "8": "แปด",
        "9": "เก้า",
        "0": ""
    };
    var result = "";
    arrayOfEachNumberWithMarker.forEach(function (o) {
        console.log(o.value, o.marker);
        if (o.marker === "หน่วย")
            result += dictionary[o.value];
        else if (o.marker === "สิบ" && o.value === "2")
            result += "ยี่สิบ";
        else if (o.marker === "หน่วย" && o.value === "1")
            result += "เอ็ด";
        else {
            result += dictionary[o.value] + o.marker;
        }
    });
    return result;
};
console.log(convertNumberToReadableThaiText(123));
exports["default"] = convertNumberToReadableThaiText;
