$( document ).ready(function() {
    // 스크롤시 header 고정
    var header = $("header").offset().top;
    $(window).scroll(function() {
          var window = $(this).scrollTop();
            if(header < window) {
          $("header").addClass("is_fixed");
        } else {
          $("header").removeClass("is_fixed");
        }
    })

    $('.lang').on('click', function (e) {
        $(this).toggleClass('is_active');
    });
    // lang focusout
    $(".lang_box > li:last > a").focusout(function(){
        $(".lang").toggleClass('is_active');
    });

    // gnb_pc
    $(".gnb_pc > ul > li > a").on('click', function(e){
        $(this).parent().toggleClass("is_active");
        $(this).parent().find(".gnb_list").slideToggle();
        e.stopPropagation()
    });
    // gnb_pc focusout
    $(".gnb_list li:last-child").focusout(function(){
        $(".gnb_pc > ul > li").removeClass('is_active');
        $(".gnb_pc > ul > li > .gnb_list").hide();
    });

    // mobile gnb
    $('.btn_gnb_mb').on('click', function (e) {
        $('.gnb_mb').show("slide", { direction: "left" }, 300);
        $(".wrap").addClass('_fixed');
        $(".mask").show();
    });
    $('.gnb_mb_close').on('click', function (e) {
        $('.gnb_mb').hide("slide", { direction: "left" }, 300);
        $(".wrap").removeClass('_fixed');
        $(".mask").hide();
    });

    // footer mb
    $(".footer_item > a").on('click', function(){
        $(this).parent().toggleClass("is_active");
    });

    $(".tabs").tabs();
    
    // =============================================================================


    // select
    var selectTarget = $('.select_box select');
    selectTarget.change(function() {
        var select_name = $(this).children('option:selected').text();
        $(this).siblings('label').text(select_name);
    });

    // datepicker
    $(".datepicker").datepicker({
        dateFormat: "yy-mm-dd"
    });

    $("#fileupload").change(function(){
        fileList = $("#fileupload")[0].files;
        fileListTag = '';
        for(i = 0; i < fileList.length; i++){
            fileListTag += "<li><span>"+fileList[i].name+"</span><button>닫기</button></li>";
        }
        $('.filelist').html(fileListTag);
    });

});
function getAll(selector) {
	return Array.prototype.slice.call(document.querySelectorAll(selector), 0);
}
