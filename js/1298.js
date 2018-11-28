$(document).ready(function () {
    getAndSetHeightSelecBoxToButton();
    loadDataSelect1();
    loadDataSelect2();
    loadDataSelect3();

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
        var string = $(this).text();
        var text = string.substr(0, string.length - 1);
        var value = string.substr(string.length - 1, 1);
        $(this).parent().prev('.selected-item').text(text);
        var current_select_custom_id = $(this).parent().parent().attr('id');
        console.log('current id: ' + current_select_custom_id);
        switch (current_select_custom_id) {
            case 'select-custom-1':
                $(`#select-1 option[value=${value}]`).prop('selected', true);
            case 'select-custom-2':
                $(`#select-2 option[value=${value}]`).prop('selected', true);
            case 'select-custom-3':
                $(`#select-3 option[value=${value}]`).prop('selected',true);
        }
    });
    $(document).click(function () {
        $('.select-options').hide();
        $('.select-box').css('background', 'unset')
        $('.selected-item').css('color', '#000')
        $('.label').css('color', '#000')
    });
    $('.search-btn').click(function () {
        $('#search-form').submit();
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
        $('#select-custom-1').find('.select-options')
            .append(`<div class="option-item">${item.text}<span>${item.value}</span></div>`);
    })
    ;
}
function loadDataSelect2() {
    var data = [];
    var options = $('#select-2').children().each(function (index) {
        var value = $(this).attr('value');
        var text = $(this).text();
        data.push(
            {
                'value': value,
                'text': text
            });
    });

    $('#select-custom-2').find('.select-options').empty();
    data.map((item, index) => {
        $('#select-custom-2').find('.select-options')
            .append(`<div class="option-item">${item.text}<span>${item.value}</span></div>`);
    })
    ;
}
function loadDataSelect3() {
    var data = [];
    var options = $('#select-3').children().each(function (index) {
        var value = $(this).attr('value');
        var text = $(this).text();
        data.push(
            {
                'value': value,
                'text': text
            });
    });

    $('#select-custom-3').find('.select-options').empty();
    data.map((item, index) => {
        $('#select-custom-3').find('.select-options')
            .append(`<div class="option-item">${item.text}<span>${item.value}</span></div>`);
    })
    ;
}