function lifeCicle(mapOriginal){
    var i = 0,
        j = 0,
        map = [];

    mapOriginal.forEach(function(subArray) {
        map.push(subArray.concat());
    });

    var mapLen = map.length;

    mapOriginal.forEach(function(val, ind){
        val.forEach(function(valI, indI, arr){
            var cur = valI;
            var tmpArr = [];
            var live = 0,
                dead = 0;

            if (indI == 0) {
                tmpArr.push(mapOriginal[ind - 1][indI - 1]);
            }
            tmpArr.push(mapOriginal[ind - 1][indI]);
            if ( indI + 1 <= arr.length) {
                tmpArr.push(mapOriginal[ind - 1][indI + 1]);
            }

            indI - 1 >= 0 ? tmpArr.push(mapOriginal[ind][indI - 1]) : '';
            indI + 1 <= arr.length + 1 ? tmpArr.push(mapOriginal[ind][indI + 1]): '';

            if (ind + 1 < mapLen) {
                if (indI - 1 >= 0) {
                    tmpArr.push(mapOriginal[ind + 1][indI - 1]);
                }
                tmpArr.push(mapOriginal[ind + 1][indI]);
                if ( indI + 1 <= arr.length) {
                    tmpArr.push(mapOriginal[ind + 1][indI + 1]);
                }
            }



            //if (ind > 0){
            //    if (indI - 1 >= 0) {
            //        tmpArr.push(mapOriginal[ind - 1][indI - 1]);
            //    }
            //    tmpArr.push(mapOriginal[ind - 1][indI]);
            //    if ( indI + 1 <= arr.length) {
            //        tmpArr.push(mapOriginal[ind - 1][indI + 1]);
            //    }
            //}
            //
            //indI - 1 >= 0 ? tmpArr.push(mapOriginal[ind][indI - 1]) : '';
            //indI + 1 <= arr.length + 1 ? tmpArr.push(mapOriginal[ind][indI + 1]): '';
            //
            //if (ind + 1 < mapLen) {
            //    if (indI - 1 >= 0) {
            //        tmpArr.push(mapOriginal[ind + 1][indI - 1]);
            //    }
            //    tmpArr.push(mapOriginal[ind + 1][indI]);
            //    if ( indI + 1 <= arr.length) {
            //        tmpArr.push(mapOriginal[ind + 1][indI + 1]);
            //    }
            //}
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
