(function() {
    var hasAce = !!window.ace,
        map,
        iteration,
        running,
        showDiv = document.querySelector('#output'),
        editor = hasAce ? ace.edit("editor") : document.querySelector('#editor');

    hasAce && editor.getSession().setMode("ace/mode/javascript");

    function initMap() {
        var i, j, size = 150;
        map = [];
        iteration = 0;
        //for (i = 0; i < size; i++) {
        //    map[i] = [];
        //    for (j = 0; j < size; j++) {
        //        map[i][j] = Math.random() > 0.75;
        //    }
        //}

        map = [
            [false, false, false, false, false ,false, false, false, false, false ,false, false, false, false, false ,false, false, false, false, false ,false, false, false, false, false],
            [false, false, true,  false, false ,false, false, true,  false, false ,false, false, false, false, false ,false, false, false, false, false ,false, false, false, false, false],
            [false, false, false, true,  false ,false, false, false, true,  false ,false, false, false, false, false ,false, false, false, false, false ,false, false, false, false, false],
            [false, true,  true,  true,  false ,false, true,  true,  true, false ,false, false, false, false, false ,false, false, false, false, false ,false, false, false, false, false],
            [false, false, false, false, false ,false, false, false, false, false ,false, false, false, false, false ,false, false, false, false, false ,false, false, false, false, false]
        ];

        for (var z = 0; z < 20; z++) {
            map.push([false, false, false, false, false ,false, false, false, false, false ,false, false, false, false, false ,false, false, false, false, false ,false, false, false, false, false]);
        }

        show();
    }

    function show() {
        showDiv.innerHTML = 'Iteration ' + iteration + '\n<br><br><div>' + map.reduce(function(memo, row) {
            return memo + '<div class="row">' + row.map(function(val) {
                return '<div class="block' + (val ? ' alive' : ' ') + '"></div>';
            }).join('') + '</div>\n';
        }, '') + '</div>';
    }

    function step() {
        map = Life.step(map, iteration++);
        show();
    }

    function run() {
        running = true;
        step();
        setTimeout(function() {
            running && run();
        }, 200);
    }

    function stop() {
        running = false;
    }

    window.step = step;
    window.show = show;
    window.run = run;
    window.stop = stop;

    document.querySelector('#run').addEventListener('click', function(e) {
        e.preventDefault();
        initMap();
        eval(hasAce ? editor.getValue() : editor.textContent);
        run();
    });

    document.querySelector('#stop').addEventListener('click', function(e) {
        e.preventDefault();
        stop();
    });

    initMap();
})();
