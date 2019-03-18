
//alert("ndfdf");

jQuery(document).ready(function(){
    jQuery("#lol").hover(function(){
        jQuery("#wow").toggle()

    });
});
// Scroll down start
$(document).ready(function(){
    $('.low-to-high').click(function(){
        $('html, body') .animate({
            scrollTop:0
        },2050);
    });
});

//sticky menu
jQuery(document).ready(function(){
    jQuery(window).scroll(function(){
        $("#scrolling").addClass("navbar-fixed-top");
        $("#scrolling").css({"background-color":"black"});
    });
});
//invoice
function get()
{
    var menu=document.getElementById('slt');
    var salvalue=menu.options[menu.selectedIndex].value;

    item=salvalue.split(',');
    document.getElementById("price").value=item[0];
    document.getElementById("tax").value=item[1];
    document.getElementById("discount").value=item[2];

}
function calculation()
{
    var uni=document.getElementById("unit").value;
    var pri=document.getElementById("price").value;
    var ta=document.getElementById("tax").value;
    var dis=document.getElementById("discount").value;
    var tot=(pri*uni);
    var tax=tot*ta/100;
    var disc=tot*dis/100;
    var total=tot+tax-disc;
    document.getElementById("total").value=total;

}
i=0;
var gtotal=0;
function add()
{
    var menu=document.getElementById('slt');
    var salvalue=menu.options[menu.selectedIndex].text;

    var row=document.getElementById("table").insertRow(++i);
    var col0=row.insertCell(0);
    col0.innerHTML=document.getElementById("date").value;
    var col1=row.insertCell(1);
    col1.innerHTML=document.getElementById("cname").value;
    var col2=row.insertCell(2);
    col2.innerHTML=salvalue;
    var col3=row.insertCell(3);
    col3.innerHTML=document.getElementById("unit").value;
    var col4=row.insertCell(4);
    col4.innerHTML=document.getElementById("price").value;
    var col5=row.insertCell(5);
    col5.innerHTML=document.getElementById("tax").value;
    var col6=row.insertCell(6);
    col6.innerHTML=document.getElementById("discount").value;
    var col7=row.insertCell(7);
    col7.innerHTML=document.getElementById("total").value;

    gtotal+=parseFloat(document.getElementById("total").value);
    document.getElementById("gt").value=gtotal;
}

var dt=new Date();
var dtstr=(dt.getMonth()<=9?'0':'')+(dt.getMonth()+1)+"-"+(dt.getDate()<=9?'0':'')+(dt.getDate())+"-"+(dt.getYear()+1900);
//var dtstr=(dt.getMonth()<=9?'0':'')+(dt.getMonth()+1)+"-"+dt.getDate()+"-"+(dt.getYear()+1900);
document.getElementById('date').value=dtstr;


//image
var image1Elemnt = document.getElementById('image1');
image1Elemnt.onclick = function () {
    var imgUrl = image1Elemnt.getAttribute('src');
    var mainImage = document.getElementById('mainImage');
    mainImage.setAttribute('src', imgUrl);
};
var img2Elemnt = document.getElementById('image2');
img2Elemnt.onclick = function () {
    var imgUrl = img2Elemnt.getAttribute('src');
    var mainImage = document.getElementById('mainImage');
    mainImage.setAttribute('src',imgUrl);
};

var image3Elemnt = document.getElementById('image3');
image3Elemnt.onclick =function () {
    var imgUrl = image3Elemnt.getAttribute('src');
    var mainImage = document.getElementById('mainImage');
    mainImage.setAttribute('src',imgUrl);
};

var image4Elemnt =document.getElementById('image4');
image4Elemnt.onclick = function () {
    var imgUrl = image4Elemnt.getAttribute('src');
    var mainImage = document.getElementById('mainImage');
    mainImage.setAttribute('src',imgUrl);
};




