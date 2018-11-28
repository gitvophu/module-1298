$(document).ready(function () {
    getAndSetHeightSelecBoxToButton();
    loadDataSelect1();

    $('.selected-item').click(function (event) {
        resetSelectBoxes();
        $(this).parent().parent().css('background', '#1ea69a')
        $(this).next('.select-options').toggle(0)
        $(this).css('color', '#fff')
        $(this).prev('.label').css('color', '#fff')

        event.stopPropagation();
    });
    $('.option-item').click(function () {
        $('.select-options').toggle(0);


    });
    $(document).click(function () {
        $('.select-options').hide();
        $('.select-box').css('background', 'unset')
        $('.selected-item').css('color', '#000')
        $('.label').css('color', '#000')
    });

});

function resetSelectBoxes() {
    $('.select-options').hide();
    $('.select-box').css('background', 'unset')
    $('.selected-item').css('color', '#000')
    $('.label').css('color', '#000')
}

function getAndSetHeightSelecBoxToButton() {
    var height = $('.select-box').first().css('height');
    $('.advance-btn').css({'height': height, 'line-height': height});
    $('.search-btn').css({'height': height, 'line-height': height});
}

function loadDataSelect1() {
    var data = [];
    var options = $('#select-1').children().each(function (index) {
        var value = $(this).attr('value');
        var text = $(this).text();
        data.push(
            {
                'value': value,
                'text': text
            });
    });

    $('#select-custom-1').find('.select-options').empty();
    data.map((item, index) => {

        $('#select-custom-1').find('.select-options').append(`<div class="option-item">${item.text}<span>${item.value}</span></div>`);
    });
}