$(function(){
    // variable to hold count variable
    let searchCount = 1;
    // one method
    // when click on search icon
    $("#search").click(function(){
        // if count variable is 1, open search and increase variable by 1
        if(searchCount == 1){
            searchCount++;
            // second and third method
            $("#searchInput").animate({height:"1.5rem"}, 500).slideDown(200).animate({width:"8rem"}, 500);
        // if count variable is 2, close search and decrease variable by 2
        }else if(searchCount == 2){
            searchCount--;
            // fourth method
            $("#searchInput").animate({height:"0rem"}, 500).animate({width:"0rem"}, 500).slideUp(200);
        }
    });

    // fifth method
    // when you enter a nav section, it will change background color
    $(".navNavigation").mouseenter(function(){
        // sixth method
        // var to hold id of current hovered element
        var temp = $(this).attr("id");
        // seventh method
        // changes the background color to slightly darker
        $("#" + temp).css("background-color","rgb(50, 50, 62)");
        // eigth method
        $("#" + temp).mouseout(function(){
            let arr = $("#" + temp).attr("class");
            let classes = arr.split(" ");
            // changes background color to normal unless it is active class
            if($(classes)[1] == "active"){
                $(this).css("background-color","rgb(50, 50, 62)");
            }else{
                $(this).css("background-color","rgb(62, 62, 82)");
            }
        });
    });

    // ninth method
    // when you click a nav section, it will change background color and change content displayed
    $("span.navNavigation").on("click",function(){
        // tenth and eleventh method  
        // gets rid of active class on all span tags and resets color to normal except on the one clicked
        $("span").removeClass("active");
        $("span").not(this).css("background-color","rgb(62, 62, 82)");
        // twelfth method
        // adds active class to currently clicked section
        $(this).addClass("active");
    });

    // when click over logout button
    $("#logOut").click(function(){
        // thirteenth, fourteenth, and fifteenth method
        // fades it out on click and waits 2 seconds before fade in
        $(this).fadeOut(300).delay(2000).fadeIn(300);
    });
    
});