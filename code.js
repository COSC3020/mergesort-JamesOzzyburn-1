function mergesort(array) {
    var maxNum = array.length - 1;

    for (var i = 1; i <= maxNum; i *= 2) {
        for (var j = 0; j < maxNum; j += i * 2) {

            var lowNum = j;
            var highNum = Math.min(j + (2 * i) - 1, maxNum);
            var temp = Math.min(j + i - 1, maxNum) + 1;

            for (var k = lowNum; k < highNum; k++) {
                if (k == temp) {
                    temp++;
                }
                if (temp > highNum) {
                    break;
                }
                if (array[k] > array[temp]) {
                    var temp2 = array[temp];

                    array = array.slice(0, temp).concat(array.slice(temp + 1, array.length)); //I was having problems getting it to merge back up so this code is insipred by cadenmcfate
                    array.splice(k, 0, temp2); //same comment as above

                    temp++;
                }
            }
        }
    }
    return array;
}