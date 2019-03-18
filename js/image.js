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
