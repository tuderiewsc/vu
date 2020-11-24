jQuery(document).ready(function ($) {


    setTimeout(function() {
        $('.page-footer').css('opacity', '1');
    }, 2000);


    // Materialize init //
    $(".dropdown-trigger").dropdown({
        hover : true,
        coverTrigger: false,
        inDuration: 50,
        outDuration: 100,
    });
    $('.sidenav').sidenav({
        edge: 'right'
    });
    $('.collapsible').collapsible();
    $('textarea.materialize-textarea').characterCounter();
    $('.modal').modal();
    $('.tooltipped').tooltip();
    $('.fixed-action-btn').floatingActionButton({
        direction: 'left',
        hoverEnabled: true
    });
    $('.datepicker').datepicker({
        autoClose: false,
        format: 'mm dd, yyyy',
        isRTL: true,
        showMonthAfterYear: true,
        showClearBtn: true,
        i18n: {
            months:[
            'January',
            'February',
            'March',
            'آوریل',
            'May',
            'June',
            'July',
            'August',
            'September',
            'October',
            'November',
            'December'
            ],
            weekdaysAbbrev:['ی','د','س','چ','پ','ج','ش'],
        },

    });
    // Materialize init //





    $('button[type=submit]').click(function(event) {
        $(this).html('<i class="fa fa-circle-o-notch fa-spin"></i>');
    });

    $('li.dropdown').click(function(event) {
        $(this).removeClass('arrow_box');
    });
    $('li.dropdown').hover(function() {
        $(this).addClass('arrow_box');
    }, function() {
        $(this).removeClass('arrow_box');
    });

    $('.collapsible li').click(function(event) {
        var liClass = $(this).attr('class');
        alert('test');

        console.log(liClass);
        if (liClass == undefined || liClass == '') {
            $('.collapsible li i').html('add');
            $(this).find('i').html('remove');
        }else{
            $(this).find('i').html('add');
        }
    });


    $('#sidenav_tr').click(function(event) {
        event.preventDefault();
        var sbRight = $('.sidebar').css('right');
        if (sbRight == '0px') {
            $('.sidebar').animate({'right': '-500px'}, 250);
            $('.pageCover').css('display', 'none');
            $('body').css('overflow', 'auto');
        }else{
            $('.sidebar').animate({'right': 0}, 400);
            $('.pageCover').css('display', 'block');
            $('body').css({
                'overflow': 'hidden',
                'height': 'auto'
            });
        }
    });

    $('.pageCover').click(function(event) {
        var sbRight = $('.sidebar').css('right');
        if (sbRight == '0px') {
            $('.sidebar').animate({'right': '-500px'}, 250);
            $('.pageCover').css('display', 'none');
            $('body').css('overflow', 'auto');
        }else{
            $('.sidebar').animate({'right': 0}, 400);
            $('.pageCover').css('display', 'block');
            $('body').css('overflow', 'hidden');
        }
    });

    $('.item_delete').click(function(event) {
        $(this).text('در حال حذف...').attr('disabled', 'disabled');
    });
    $('.cancel_delete').click(function(event) {
        $('.item_delete').text('حذف').removeAttr('disabled');
    });


    $('.edit_part').click(function(event) {
        $('#add_order').css('display', 'none');
        $('#edit_order').css('display', 'block');
        setTimeout(function() {
         $('html,body').animate({
          scrollTop: $("#add_order").offset().top  - 100
      }, 1000);
     }, 1000);
    });
    $('.cancel_edit_part').click(function(event) {
        var msg = $('#cancel_edit_msg').val();
        if (confirm(msg)) {
            $('#add_order').css('display', 'block');
            $('#edit_order').css('display', 'none');
        }
    });

    $('.order_modal_trigger').click(function(event) {
        $('.modal-loading').css('display', 'block');
        setTimeout(function() {
          $('.modal-loading').css('display', 'none');
      }, 2000);
    });

    $('.login_account').click(function(event) {
        $('.login_content_cover').css('display', 'block');
        $('.progress').css('display', 'block');
        setTimeout(function() {
          $('.login_content_cover').css('display', 'none');
          $('.progress').css('display', 'none');

      }, 5000);
    });

    $('.scroll_top_btn').on('click', function () {
        $('html,body').animate({
            scrollTop: 0
        }, 0);
    });



});


