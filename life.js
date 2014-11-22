function lifeCicle(mapOriginal){
    var i = 0,
        j = 0,
        map = [];

    mapOriginal.forEach(function(subArray) {
        map.push(subArray.concat());
    });

    mapOriginal.forEach(function(val, ind){
        val.forEach(function(valI, indI, arr){
            var cur = valI;
            var tmpArr = [];
            var live = 0,
                dead = 0;

            if (ind == 0) {   // first row
                if (indI != 0 && indI != arr.length - 1) {
                    tmpArr.push(mapOriginal[mapOriginal.length - 1][indI - 1]);
                    tmpArr.push(mapOriginal[mapOriginal.length - 1][indI]);
                    tmpArr.push(mapOriginal[mapOriginal.length - 1][indI + 1]);

                    tmpArr.push(mapOriginal[ind][indI - 1]);
                    tmpArr.push(mapOriginal[ind][indI + 1]);

                    tmpArr.push(mapOriginal[ind + 1][indI - 1]);
                    tmpArr.push(mapOriginal[ind + 1][indI]);
                    tmpArr.push(mapOriginal[ind + 1][indI + 1]);
                } else {
                    indI == 0 ? tmpArr.push(mapOriginal[mapOriginal.length - 1][arr.length - 1]) : tmpArr.push(mapOriginal[mapOriginal.length - 1][arr.length - 2]);
                    indI == 0 ? tmpArr.push(mapOriginal[mapOriginal.length - 1][0]) : tmpArr.push(mapOriginal[mapOriginal.length - 1][arr.length - 1]);
                    indI == 0 ? tmpArr.push(mapOriginal[mapOriginal.length - 1][1]) : tmpArr.push(mapOriginal[mapOriginal.length - 1][0]);

                    indI == 0 ? tmpArr.push(mapOriginal[ind][arr.length - 1]) : tmpArr.push(mapOriginal[ind][arr.length - 2]);
                    indI == 0 ? tmpArr.push(mapOriginal[ind][1]) : tmpArr.push(mapOriginal[ind][0]);

                    indI == 0 ? tmpArr.push(mapOriginal[ind + 1][arr.length - 1]) : tmpArr.push(mapOriginal[ind + 1][arr.length - 2]);
                    indI == 0 ? tmpArr.push(mapOriginal[ind + 1][0]) : tmpArr.push(mapOriginal[ind + 1][arr.length - 1]);
                    indI == 0 ? tmpArr.push(mapOriginal[ind + 1][1]) : tmpArr.push(mapOriginal[ind + 1][0]);
                }
            } else if (ind == mapOriginal.length - 1) {  // last row
                if (indI != 0 && indI != arr.length - 1) {
                    tmpArr.push(mapOriginal[ind - 1][indI - 1]);
                    tmpArr.push(mapOriginal[ind - 1][indI]);
                    tmpArr.push(mapOriginal[ind - 1][indI + 1]);

                    tmpArr.push(mapOriginal[ind][indI - 1]);
                    tmpArr.push(mapOriginal[ind][indI + 1]);

                    tmpArr.push(mapOriginal[0][indI - 1]);
                    tmpArr.push(mapOriginal[0][indI]);
                    tmpArr.push(mapOriginal[0][indI + 1]);
                } else {
                    indI == 0 ? tmpArr.push(mapOriginal[ind - 1][arr.length - 1]) : tmpArr.push(mapOriginal[ind - 1][arr.length - 2]);
                    indI == 0 ? tmpArr.push(mapOriginal[ind - 1][0]) : tmpArr.push(mapOriginal[ind - 1][arr.length - 1]);
                    indI == 0 ? tmpArr.push(mapOriginal[ind - 1][1]) : tmpArr.push(mapOriginal[ind - 1][0]);

                    indI == 0 ? tmpArr.push(mapOriginal[ind][arr.length - 1]) : tmpArr.push(mapOriginal[ind][arr.length - 2]);
                    indI == 0 ? tmpArr.push(mapOriginal[ind][1]) : tmpArr.push(mapOriginal[ind][0]);

                    indI == 0 ? tmpArr.push(mapOriginal[0][arr.length - 1]) : tmpArr.push(mapOriginal[0][arr.length - 2]);
                    indI == 0 ? tmpArr.push(mapOriginal[0][0]) : tmpArr.push(mapOriginal[0][arr.length - 1]);
                    indI == 0 ? tmpArr.push(mapOriginal[0][1]) : tmpArr.push(mapOriginal[0][0]);
                }
            } else {  // other rows
                if (indI != 0 && indI != arr.length - 1) {
                    tmpArr.push(mapOriginal[ind - 1][indI - 1]);
                    tmpArr.push(mapOriginal[ind - 1][indI]);
                    tmpArr.push(mapOriginal[ind - 1][indI + 1]);

                    tmpArr.push(mapOriginal[ind][indI - 1]);
                    tmpArr.push(mapOriginal[ind][indI + 1]);

                    tmpArr.push(mapOriginal[ind + 1][indI - 1]);
                    tmpArr.push(mapOriginal[ind + 1][indI]);
                    tmpArr.push(mapOriginal[ind + 1][indI + 1]);
                } else {
                    indI == 0 ? tmpArr.push(mapOriginal[ind - 1][arr.length - 1]) : tmpArr.push(mapOriginal[ind - 1][arr.length - 2]);
                    indI == 0 ? tmpArr.push(mapOriginal[ind - 1][0]) : tmpArr.push(mapOriginal[ind - 1][arr.length - 1]);
                    indI == 0 ? tmpArr.push(mapOriginal[ind - 1][1]) : tmpArr.push(mapOriginal[ind - 1][0]);

                    indI == 0 ? tmpArr.push(mapOriginal[ind][arr.length - 1]) : tmpArr.push(mapOriginal[ind][arr.length - 2]);
                    indI == 0 ? tmpArr.push(mapOriginal[ind][1]) : tmpArr.push(mapOriginal[ind][0]);

                    indI == 0 ? tmpArr.push(mapOriginal[ind + 1][arr.length - 1]) : tmpArr.push(mapOriginal[ind + 1][arr.length - 2]);
                    indI == 0 ? tmpArr.push(mapOriginal[ind + 1][0]) : tmpArr.push(mapOriginal[ind + 1][arr.length - 1]);
                    indI == 0 ? tmpArr.push(mapOriginal[ind + 1][1]) : tmpArr.push(mapOriginal[ind + 1][0]);
                }
            }

            tmpArr.forEach(function(el){
                el ? live++ : dead++;
            });

            if (live == 2 || live == 3) {
                map[ind][indI] = cur;
            }
            if (live < 2 || live > 3) {
                map[ind][indI] = false;
            }
            if (cur == false && live == 3) {
                map[ind][indI] = true;
            }
        });
    });

    return map;
}
