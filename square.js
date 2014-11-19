var example1  = [4, 3, 1, 7, 5, 6, 3, 7, 1];
var example2  = [3, 6, 4, 3, 5, 5, 4, 1, 8];
var example3  = [3, 6, 4, 3, 5, 6, 4, 1, 8];

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
}
