var canvas = new fabric.Canvas('myCanvas');
 var x= document.getElementById("myAudio");

function new_image()
{
    fabric.Image.formURL(BirthdayImage.jpg,function(Img){
      block_Image_object=Img;

      block_Image_object.scaleToheight(510);
      block_Image_object.scaleToWidth(700);
      block_Image_object.set({
        top:0,
        left:0
      })
     
    })
}

function playSound(){

    x.play();
}

