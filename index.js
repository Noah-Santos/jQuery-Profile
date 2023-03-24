$(function(){
    // variable to hold count variable
    let searchCount = 1;
    // one method
    $("#search").click(function(){
        // if count variable is 1, open search and increase variable by 1
        if(searchCount == 1){
            searchCount++;
            // second and third method
            $("#searchInput").animate({height:"1.5rem"}, 500).slideDown(500).animate({width:"8rem"}, 500);
        // if count variable is 2, close search and decrease variable by 2
        }else if(searchCount == 2){
            searchCount--;
            // fourth method
            $("#searchInput").animate({height:"0rem"}, 500).animate({width:"0rem"}, 500).slideUp(500);
        }
    });
})