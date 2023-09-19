$(function () {


    var pizzas = [];

    $.getJSON('pizzameny.json', function (data) {
        $.each(data.pizzameny, function (i, f) {
            var tblRow = "<tr>" + "<td>" + f.name + "</td>" +
                "<td>" + f.ingredients + "</td>" + "<td>" + f.price + "</td>" + "<tr>"
            $(tblRow).appendTo("#pizzadata body");
        });

    });

});