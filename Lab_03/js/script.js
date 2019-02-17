var arr = [1, 4, 12, 6, 8, 3, 11];
arr.sort(function (a, b) { return (a <= b) ? -1 : 1; });
console.log(arr);
var newArr = arr.filter(function (a) { return (a > 8) ? true : false; });
console.log(newArr);
var text = "вгде12аж 1аыа";
var eng = ["a", "b", "v", "g", "d", "e", "e", "zh", "z", "i"];
var rus = ["а", "б", "в", "г", "д", "е", "ё", "ж", "з", "и"];
function translit(text) {
    var newText = "";
    for (var i = 0; i < text.length; i++) {
        var check = false;
        for (var j = 0; j < rus.length; j++) {
            if (text[i] === rus[j]) {
                newText += eng[j];
            }
            else if ((text[i].search(/[^а-яА-Я]/) != -1) && !check) {
                newText += text[i];
                check = true;
            }
        }
    }
    return newText;
}
console.log(translit(text));
//# sourceMappingURL=script.js.map