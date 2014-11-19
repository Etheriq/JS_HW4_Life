var example1  = [4, 3, 1, 7, 5, 6, 3, 7, 1];
var example2  = [3, 6, 4, 3, 5, 5, 4, 1, 8];
var example3  = [3, 6, 4, 3, 5, 6, 4, 1, 8];
var example4  = [2, 5, 1, 2, 3, 4, 7, 7, 6, 3, 5];

function square(randomArr)
{
    var startCupInd = null,
        finishCupInd = null,
        cupsArr = [],
        squaresArr = [];

    randomArr.forEach(function(el, ind, arr){
        var summ = 0,
            z = 0;
        if (ind + 1 < arr.length) {
            if (el > arr[ind + 1] && startCupInd == null) {
                startCupInd = ind;
            }
            if (((el < arr[ind + 1]) && (arr[ind + 1] >= arr[startCupInd] )) && startCupInd != null)
            {
                finishCupInd = ind + 1;
                cupsArr.push([startCupInd, finishCupInd]);
                    z = arr[startCupInd] >= arr[finishCupInd] ? arr[finishCupInd] : arr[startCupInd];
                    for (var i = startCupInd + 1; i < finishCupInd; i++) {
                        summ += z - arr[i];
                    }
                squaresArr.push(summ);
                console.log('square # ' + squaresArr.length + ' = ' + summ + ' cup start from ' + startCupInd + ' index to ' + finishCupInd + ' index of inputted array');
                startCupInd = null;
                finishCupInd = null;
            }
        }
    });

    startCupInd = null; finishCupInd = null;
    // [2,5,1,2,3,4,7,7,6,3,5]
    var lastIndInCup = cupsArr[cupsArr.length - 1][1];
    var z = 0,
        summ = 0;
    for (var i = randomArr.length - 1; i > lastIndInCup; i--) {
        if (i - 1 > 0) {
            if (randomArr[i] > randomArr[i - 1] && finishCupInd == null) {
                finishCupInd = i;
            }
            if (((randomArr[i] < randomArr[i - 1]) && (randomArr[i - 1] >= randomArr[finishCupInd] )) && finishCupInd != null) {
                startCupInd = i - 1;
                cupsArr.push([startCupInd, finishCupInd]);
                    z = randomArr[startCupInd] >= randomArr[finishCupInd] ? randomArr[finishCupInd] : randomArr[startCupInd];
                    for (var j = startCupInd + 1; j < finishCupInd; j++) {
                        summ += z - randomArr[j];
                    }
                squaresArr.push(summ);
                console.log('square # ' + squaresArr.length + ' = ' + summ + ' cup start from ' + startCupInd + ' index to ' + finishCupInd + ' index of inputted array');
                startCupInd = null;
                finishCupInd = null;
            }
        }
    }
}
