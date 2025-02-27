let highestZ = 1 ;

class paper{

    holdingpaper = false;
    
    prevMouseX = 0;
    prevMouseY = 0;

    mouseX = 0;
    mouseY = 0;

    velocityX = 0;
    velocityY = 0;

    currentPaperX = 0;
    currentPaperY = 0;
    init(paper) {

    paper.addEventListener('mousedown', (e) =>{
        this.holdingPaper = true;

        paper.style.zIndex = highestZ;
        highestZ+= 1;

        if ( e.button === 0) {
            this.prevMouseX = this.mouseX;
            this.PrevMouseY = this.mouseY;

            console.log (this.prevMouseX);
            console.log (this.prevMouseY);
        }
    })
    document.addEventListener('mousemove' , (e) => {
        this.mouseX = e.clientX;
        this.mouseY = e.clientY;

        this.velocityX = this.mouseX - this.prevMouseX ;
        this.velocityY = this.mouseY - this.prevMouseY;
        if (this.holdingPaper){
            this.currentPaperX += this.velocityX;
            this.currentPaperY += this.velocityY;

            this.prevMouseX = this.mouseX ;
            this.prevMouseY = this.mouseY ;

            paper.style.transform = `translate(${tis.currentPaperX})px translateY(${this.currentPaperY})px`;
        }
    })

    window.addEventListener('mouseup', (e) => {
        console.log('mouse button is released');
        this.holdingpaper = false;
   
    })

    }
}

const papers=Array.From(document.querySelectorAll('.paper'));

papers.foreach(paper => {
    const p = new paper();
    p.init(paper);
})