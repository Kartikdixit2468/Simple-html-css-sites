var img = document.getElementById('img');

var slides=['feminism1.jpg','feminism2.jpg','feminism3.jpg','feminism4.jpg','feminism5.jpg','feminism6.jpg'];

var Start=0;

function slider(){
    if(Start<slides.length){
        Start=Start+1;
    }
    else{
        Start=1;
    }
    console.log(img);
    img.innerHTML = `<img src="/static/images/`+slides[Start-1]+`" alt="Femprish.org" id="home-sec-image"`+">";
   
}
setInterval(slider,6000);
