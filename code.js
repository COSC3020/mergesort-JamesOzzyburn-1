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
                    //The code below just swaps the elements at k and temp
                    //and for the comments I just got confused as i had the slides up on my second monitor for reference and wrote that this was the merge step when its obviusly not. So thats my bad
                    //var temp2 = array[temp];
                    //array = array.slice(0, temp).concat(array.slice(temp + 1, array.length)); //I was having problems getting it to merge back up so this code is insipred by cadenmcfate
                    //array.splice(k, 0, temp2);
                    //temp++;

                    //Here is a different version that is more clear
                    var temp2 = array[temp]; //Make a copy of temp
                    array.splice(temp, 1); //Take temp out of the array
                    array.splice(k, 0, temp2); //Puts temp where k was and effectivly shifts k and everything else right 
                    temp++; //increment temp
                }
            }
        }
    }
    return array;
}