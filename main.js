var canvas = new fabric.Canvas('myCanvas')
 blockY=1;
 blockX=1;

blockImageWidth = 350;
blockImageHeight = 430;

var blockImageObject= "";

function newImage(get_image)
{
	fabric.Image.fromURL(get_image, function(Img){
	block_image_object = Img;

	block_image_object.scaleToWidth(blockImageWidth);
	block_image_object.scaleToHeight(blockImageHeight);
	block_image_object.set({
		top:blockY,
		left:blockX
	});
	canvas.add(block_image_object);
	});
}

window.addEventListener("keydown", myKeyDown);

function myKeyDown(e)
{
keyPressed = e.keyCode;
console.log(keyPressed);

	if(keyPressed == '82')
	{
		newImage('rr1.png');
		blockX = 25;
		console.log("r");
	}
	if(keyPressed == '86')
	{
		blockX = 200;
		newImage('gr.png');
	}
	
	if(keyPressed == '65')
	{
		blockX = 350;
		newImage('yr.png');
	}
	if(keyPressed == '69')
	{
		blockX = 600;
		newImage('pr.png');
	}
	if(keyPressed == '73')
	{
		blockX = 650;
	    newImage('br.png');
	}
	
}

