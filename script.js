$(function () {

    let cartButton = $(".button");
    cartButton.on('click', getData);

    function getData(event) {
        let request = $.ajax({
            method: 'GET',
            url: 'shoes.json',
            dataType: 'json'
        });
        request.done(function (data) {
            let cart = $("#cart");
            //for some reason the data comes as undefined. but it was working before.
            for(let shoes of data) {
            let newP = $('<p>');
            newP.text("Name: "+data.name+"\nprice: "+data.price);
            cart.append(newP);
            }
        });

        request.fail(function (error) {
            alert("ERROR")
        });

    }


    //form used to filter
    $('#filter-form').on('submit', function (event) {
        event.preventDefault();
        let filter = $("#filter").val();
        if (filter === 'jordan') {
            $(".adidas").css('display', 'none');
            $('.adidas').css('display', 'none');
            
        } else if (filter === 'adidas') {
            $('.jordan').css('display', 'none');
            $('.jordan').css('display', 'none');
        }
    });

});