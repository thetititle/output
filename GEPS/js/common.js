$(document).ready(function () {
    // 모달 열기 버튼 클릭 이벤트
    $(".open-modal").click(function () {
        var modalId = $(this).data("modal-id");
        $("#" + modalId).css("display", "flex");
    });
    // 모달 닫기 버튼 및 모달 바깥 영역 클릭 이벤트
    $(".btn-close, .modal-wrap").click(function () {
        $(".modal-wrap").css("display", "none");
    });
    // 모달 내부 클릭 시 닫기 방지
    $(".modal-content").click(function (e) {
        e.stopPropagation();
    });

    //dropdown
    $(".dropdown-button").click(function () {
        var target = $(this).data("target");
        $("#" + target).toggle();
        $(this).toggleClass("active");
    });

    //공통상단
    var $headerMenu = $(".header-menu");
    var $headerSubWrap = $(".header-sub-wrap");
    var isSubWrapOpen = false;

    $headerMenu.click(function () {
        if (isSubWrapOpen) {
            $headerSubWrap.slideUp();
            isSubWrapOpen = false;
        } else {
            $headerSubWrap.slideDown();
            isSubWrapOpen = true;
        }
    });

    $headerSubWrap.mouseleave(function () {
        if (isSubWrapOpen) {
            $headerSubWrap.slideUp();
            isSubWrapOpen = false;
        }
    });

    // 테이블 체크박스 전체선택
    $("#chkall").click(function () {
        $(".chk").prop("checked", $(this).prop("checked"));
    });

    // tr행의 체크박스 선택 시 css 추가
    $(".chk").click(function () {
        var isChecked = $(this).prop("checked");
        $(this).closest("tr").toggleClass("selected", isChecked);
    });
});