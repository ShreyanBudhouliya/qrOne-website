
const html = document.documentElement;
const canvas = document.querySelector('.qrOne-scrolling');
const context = canvas.getContext('2d');

const currentFrame = index => (
    `${index.toString()}.jpg`
);

const frameCount = 50;

const preloadImages = () => {
    for (let i = 1; i < frameCount; i++) {
      const img = new Image();
      img.src = currentFrame(i);
    }
  };

canvas.height = 760;
canvas.width = 760;
const img = new Image();
img.src = currentFrame(1);
img.onload = function(){
    context.drawImage(img, 0, 0);
}
const updateImage = index => {
    img.src = currentFrame(index);
    context.drawImage(img, 0, 0);
}
window.addEventListener('scroll', () =>{
    const scrollTop = document.body.scrollTop;
    const maxScrollTop = html.scrollHeight - window.innerHeight;
    const scrollFraction = scrollTop/maxScrollTop;
    console.log(scrollFraction) 

    const frameIndex =  Math.min(frameCount-1, Math.floor(scrollFraction*frameCount))

    requestAnimationFrame(() => updateImage(frameIndex+1))
   // if(scrollFraction == 1){
   //     updateImage(2001);
    //}

})

preloadImages();