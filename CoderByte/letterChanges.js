function letterChanges(str) {
    var result = "";

    var strArr = str.split('');

    strArr.map(function (item, index) {


        var charValue = item.charCodeAt(0);
        if (charValue >= 97 && charValue <= 122) {
            var new_charValue = charValue + 1;
           
            if (new_charValue > 122) {
                new_charValue = 122 - new_charValue + 96;
            }

            if (new_charValue === 97 || new_charValue === 101 || new_charValue === 105 || new_charValue === 111 || new_charValue === 117) {
                var letter = String.fromCharCode(new_charValue);
                letter = letter.toUpperCase();
                result = result + letter;
            } else {
                var letter = String.fromCharCode(new_charValue);
                result = result + letter;
            }
        } else {
            var letter = item;
            result = result + letter;
        }

    })

    console.log(result);
}

//var arr = "hello*3";
var arr = "fun times!";
letterChanges(arr)
