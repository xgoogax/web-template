$(document).ready(function(){
    var achievLeft = $("div.left"); 
    var achievRight = $("div.right");
    var height = $("#achievements").css("height");
    console.log(achievRight);
    console.log(achievLeft);
    
    
    if ($(window).width() < 768){
    achievLeft.on("click", function(){
        if ($(".academic").hasClass("hidden")){
            $(".academic").slideDown(500);
            $(".academic").toggleClass("hidden");
            $("#achievements").animate({height: "+=200px"}, 500);
        }
        else {
            $(".academic").slideUp(500);
            $(".academic").toggleClass("hidden");
            $("#achievements").animate({height: "-=200px"}, 500);

        }
    })
    
    achievRight.on("click", function(){
        if ($(".prof").hasClass("hidden")){
            $(".prof").slideDown(500);
            $(".prof").toggleClass("hidden");
            $("#achievements").animate({height: "+=200px"}, 500);
        }
        else {
            $(".prof").slideUp(500);
            $(".prof").toggleClass("hidden");
            $("#achievements").animate({height: "-=200px"}, 500);
        }
    })
    }
    
    
//    creating slider for clicking the achievement section
    else if ($(window).width() >= 768){
    achievLeft.on("click", function(){
        if ($(".academic").hasClass("hidden")){
            $(".academic").slideDown(500);
            $(".academic").toggleClass("hidden");
            $("#achievements").animate({height: "+=150px"}, 500);
        }
        else {
            $(".academic").slideUp(500);
            $(".academic").toggleClass("hidden");
            $("#achievements").animate({height: "-=150px"}, 500);

        }
    })
    
    achievRight.on("click", function(){
        if ($(".prof").hasClass("hidden")){
            $(".prof").slideDown(500);
            $(".prof").toggleClass("hidden");
            $("#achievements").animate({height: "+=150px"}, 500);
        }
        else {
            $(".prof").slideUp(500);
            $(".prof").toggleClass("hidden");
            $("#achievements").animate({height: "-=150px"}, 500);
        }
    })
    }
    
//    creating infinite slider
    var prevButton = $(".prev");
    var nextButton = $(".next");
    var listElem = $(".slider li");
    var ul = $(".slider ul");
    var index = 1;
    var divWidth = 600;
    var adding = "px";
    
    //cloning
    var cloneFirst = listElem.eq(0).clone();
    var cloneLast = listElem.eq(listElem.length -1).clone();

    
    cloneFirst.appendTo(ul);
    cloneLast.prependTo(ul);
    //length
    var length = listElem.length;
    
    if ($(window).width() < 768){
        divWidth = 90;
        adding = "vw";
    }
        
    ul.css({
            "width": ((length+2) * divWidth) + adding,
            "position": "relative",
            "left": -divWidth+adding 
    });
    
     nextButton.on("click", function() {
         index++;
        if (index <= length){
         ul.animate({left: "-=" + divWidth + adding}, 500, function(){
             if (index === length){
                 index = 0;
                 ul.css("left", 0+ adding);
             }
         })
         console.log(index);
        }
           else {
               index = 1;
               ul.animate({left: -(length+1)*divWidth + adding}, 500, function(){
                   ul.css("left", -divWidth + adding);
               });
           }
     });
     
     prevButton.on("click", function() {
         index--;
         if (index >= 0){
         ul.animate({left: "+=" + divWidth + adding}, 500, function(){
             if (index <= 0){
                 index = length;
                 ul.css("left", -(length)*divWidth + adding);
             }
         })
         console.log(index);
         }
         else {
             index = length -1;
             ul.animate({left: divWidth + adding}, 500, function(){
                 ul.css("left", -(length-1)*divWidth + adding);
             }) 
         }
  
     });
    
});