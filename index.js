$(function(){
    // $("#searchInput").slideDown(0);
    $("#search").click(function(){
        $("#searchInput").slideDown(500).animate({width:"7rem"}, 500).animate({height:"1.5rem"}, 500);
        // $("#searchInput").slideUp(500);
    });
})