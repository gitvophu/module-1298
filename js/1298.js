$(document).ready(function () {
    $('.selected-item').click((event) => {
        $('#select-box-1').css('background', '#1ea69a')
        $('.select-options').toggle('slow')
        $('.selected-item').css('color','#fff')
        $('.label').css('color','#fff')
        event.stopPropagation();
    });
    $('.option-item').click(function () {
        $('.select-options').toggle(0);

    });
    $(document).click(function () {
        $('.select-options').hide();
        $('#select-box-1').css('background', 'unset')
        $('.selected-item').css('color','#000')
        $('.label').css('color','#000')
    });
});
       