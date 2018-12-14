$(document).ready(function () {
    getAndSetHeightSelecBoxToButton();
    loadDataSelect1();
    loadDataSelect2();
    loadDataSelect3();

    //events


    $('.advance-btn').click(function () {
        $('.advance-box').slideToggle();
    });

    //event chon thanh pho

    $('#select-custom-1').on('click','.option-item',function () {

    });

    $('.selected-item').click(function (event) {
        resetSelectBoxes();
        $('.selected-item').css({'background':'unset'});
        $(this).parent().parent().css('background', '#1ea69a');
        $(this).css({'background':'#1ea69a'})
        $(this).next('.select-options').toggle(0)
        $(this).css('color', '#fff')
        $(this).prev('.label').css('color', '#fff')
        event.stopPropagation();
    });
     $('.select-options').on('click','div.option-item',function () {
        var string = $(this).text();
        var text = $(this).text();
        var value = $(this).attr('data-content');
        $(this).parent().prev('.selected-item').text(text);
        var current_select_custom_id = $(this).parent().parent().attr('id');
        console.log("text: " + text + ":: value:"  + value);
        switch (current_select_custom_id) {
            case 'select-custom-1':
                $(`#select-1 option[value=${value}]`).prop('selected', true);
                $.ajax({
                   url:"/ajax/province",
                   data:{
                       province_id:value,
                       _token: $('#_token').val()
                   } ,
                    type:'post',
                    success:function (rs) {
                       var data = [];
                        for (let i=0;i<rs.length; i++){
                            let d_name = rs[i].d_name;
                            let d_id = rs[i].d_id;
                            data.push({
                                value:d_id,
                                text:d_name
                            });
                        }
                        reloadDataSelect2(data);
                    },
                    error:function (msg) {
                        console.log(msg);
                    }
                });
                break;
            case 'select-custom-2':
                $(`#select-2 option[value=${value}]`).prop('selected', true);
                $.ajax({
                    url:"/ajax/district",
                    data:{
                        district_id:value,
                        _token: $('#_token').val()
                    } ,
                    type:'post',
                    success:function (rs) {
                        var data = [];
                        for (let i=0;i<rs.length; i++){
                            let w_name = rs[i].w_name;
                            let w_id = rs[i].w_id;
                            data.push({
                                value:w_id,
                                text:w_name
                            });
                        }
                        reloadDataSelect3(data);
                    },
                    error:function (msg) {
                        console.log(msg);
                    }
                });
                break;
            case 'select-custom-3':
                $(`#select-3 option[value=${value}]`).prop('selected',true);
                break;
        }

    });
    
    $(document).click(function () {
        $('.select-options').hide();
        $('.select-box').css('background', 'unset')
        $('.selected-item').css('color', '#000')
        $('.selected-item').css('background', '#fff')
        $('.label').css('color', '#000')
    });
    $('.search-btn').click(function () {
        $('#search-form').submit();
    });
    $('.search-option').click(function (event) {
        event.stopPropagation();
    });
    $('.search-option').keydown(function () {
        setTimeout(function (selector) {
            // console.log(selector.val());
            var keyword = selector.val();
            loadDataSelect1_OnSearch(keyword);
        },100,$(this));

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

    // $('#select-custom-1').find('.select-options').empty();
    $('#select-custom-1').find('.select-options').find('.option-item').each(function () {

        $(this).remove();
    });
    data.map((item, index) => {
        $('#select-custom-1').find('.select-options')
            .append(`<div class="option-item" data-content="${item.value}">${item.text}</div>`);
    });

}
function loadDataSelect1_OnSearch(keyword) {
    var data = [];
    var options = $('#select-1').children().each(function (index) {
        var value = $(this).attr('value');
        var text = $(this).text();
        if(text.toLowerCase().includes(keyword.toLowerCase()))
        data.push(
            {
                'value': value,
                'text': text
            });
    });

    // $('#select-custom-1').find('.select-options').empty();
    $('#select-custom-1').find('.select-options').find('.option-item').each(function () {

        $(this).remove();
    });
    data.map((item, index) => {
        $('#select-custom-1').find('.select-options')
            .append(`<div class="option-item" data-content="${item.value}">${item.text}</div>`);
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
            .append(`<div class="option-item" data-content="${item.value}">${item.text}</div>`);
    });
}
function reloadDataSelect2(data){
    $('#select-custom-2').find('.select-options').empty();
    data.map((item, index) => {
        $('#select-custom-2').find('.select-options')
            .append(`<div class="option-item" data-content="${item.value}">${item.text}</div>`);
    });
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
            .append(`<div class="option-item" data-content="${item.value}">${item.text}</div>`);
    })
    ;
}
function reloadDataSelect3(data){
    $('#select-custom-3').find('.select-options').empty();
    data.map((item, index) => {
        $('#select-custom-3').find('.select-options')
            .append(`<div class="option-item" data-content="${item.value}">${item.text}</div>`);
    });
}