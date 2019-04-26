var fetchIcons = function (type) {
    switch (type) {
        case 'MP':
            return 'fa-chess-rook'
            break;

        case 'EP':

            return 'fa-dollar-sign'
            break;

        case 'CP':
            return 'fa-music'
            break;

        case 'DP':
            return 'fa-scroll'
            break;

        case 'SP':
            return 'fa-flask'
            break;
    }
}

var renderCol = function (val) {
    return '<div class="col">' + val + '</div>'
}

var powerValue = function (label, value) {
    return '<div class="card nation-power col-2"><div class="row padd">' + renderCol('<i class="fas ' + fetchIcons(label) + '"></i>') + '' + renderCol('<b>' + label + '</b>') + '</div><div class="powerValue">' + renderCol(value) + '</div></div>'
}

var renderNationList = function (nations, $) {
    for (var n in nations) {
        var powerArr = '<div class="row">' + powerValue("MP", 20) + powerValue("EP", 20) + powerValue("CP", 20) + powerValue("DP", 20) + powerValue("SP", 20) + '</div>'
        $("#nationList").append('<li class="list-group-item">' + nations[n] + '<br>' + powerArr + '</li>');
    }
}


$(document).ready(function () {


    var nations = ["India", "Japan", "Egypt", "Germany", "France", "Spain"];
    //    var nations = ["India"];

    renderNationList(nations, $)

    renderChart(nations,"myChart");
    renderChart(nations,"myChart_2");
    renderChart(nations,"myChart_3");
    renderChart(nations,"myChart_4");



});
