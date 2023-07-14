var all_btn = document.getElementById('All_button');
var cottage_clothes_btn = document.getElementById('Cottage_Clothes_button');
var cottage_jewerly_btn = document.getElementById('Cottage_Jewerly_button');
var vintage_clothes_btn = document.getElementById('Vintage_Clothes_button');
var vintage_jewerly_btn = document.getElementById('Vintage_Jewerly_button');


var cottage_clothes_div = document.getElementsByClassName('Cottage_Clothes_divs');
var cottage_jewerly_div = document.getElementsByClassName('Cottage_Jewerly_divs');
var vintage_clothes_div = document.getElementsByClassName('Vintage_Clothes_divs');
var vintage_jewerly_div = document.getElementsByClassName('Vintage_Jewerly_divs');
console.log(vintage_jewerly_div)


function visible(divs){
    for (var i = 0; i < divs.length; i++) {
        divs[i].style.display = "block";
      }
    }
function invisible(divs){
    for (var i = 0; i < divs.length; i++) {
        divs[i].style.display = "none";
      }
    }

all_btn.addEventListener('click', function(){
    visible(cottage_clothes_div);
    visible(cottage_jewerly_div);
    visible(vintage_clothes_div);
    visible(vintage_jewerly_div);
 
});
cottage_clothes_btn.addEventListener('click', function(){
    visible(cottage_clothes_div);
    invisible(cottage_jewerly_div);
    invisible(vintage_clothes_div);
    invisible(vintage_jewerly_div);
});
cottage_jewerly_btn.addEventListener('click', function(){
    invisible(cottage_clothes_div);
    visible(cottage_jewerly_div);
    invisible(vintage_clothes_div);
    invisible(vintage_jewerly_div);
});
vintage_clothes_btn.addEventListener('click', function(){
    invisible(cottage_clothes_div);
    invisible(cottage_jewerly_div);
    visible(vintage_clothes_div);
    invisible(vintage_jewerly_div);
});
vintage_jewerly_btn.addEventListener('click', function(){
    invisible(cottage_clothes_div);
    invisible(cottage_jewerly_div);
    invisible(vintage_clothes_div);
    visible(vintage_jewerly_div);
});


