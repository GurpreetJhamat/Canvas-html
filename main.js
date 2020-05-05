;(function() {

let canvas, ctx 

const init = () =>{
    canvas = document.getElementById('gameCanvas');
    ctx = canvas.getContext('2d');

    ctx.beginPath();
    ctx.strokeRect(50, 35, 50, 50);

    ctx.beginPath()
    ctx.fillRect(125, 35, 50, 50)

    ctx.beginPath()
    // ctx.strokeRect(200, 35, 50, 50)
    ctx.beginPath()
    ctx.strokeStyle = 'red'
    ctx.fillStyle = 'blue'
    ctx.lineWidth = 5
    ctx.rect(200, 35, 50, 50)
    ctx.fill()
    ctx.stroke()

    ctx.beginPath()
    ctx.rect(275, 35, 50, 50)
    ctx.fill()
    ctx.stroke()


class Rectangle{
    constructor(
        x = 0, 
        y = 0, 
        width = 0, 
        height = 0, 
        fillColor = '', 
        strokeColor = '', 
        strokeWidth = 2
    ){

        this.x = Number(x);
        this.y = Number(y);
        this.width = Number(width);
        this.height = Number(height);
        this.fillColor = fillColor;
        this.strokeColor = strokeColor;
        this.strokeWidth = strokeWidth;
    }

    get area() {
        return this.width * this.height;
    }

    get left() {
        return this.x;
    }

    get right() {
        return this.x + this.width;
    }

    get top() {
        return this.y;
    }

    get bottom() {
        return this.y + this.height;
    }

    draw(){
        const {
            x, y , width, height,
            fillColor, strokeColor, strokeWidth
        } = this

        ctx.save()

        ctx.fillStyle = fillColor;
        ctx.lineWidth = strokeWidth;

        ctx.beginPath()
        ctx.strokeStyle = strokeColor
        ctx.rect(x, y, width, height);

        ctx.fill()
        ctx.stroke()

        ctx.restore()
    }
}

const mySquare = new Rectangle(400, 85, 50, 50, 'gold', '#000')

console.log(mySquare);
console.log(mySquare.left);
console.log(mySquare.right);
console.log(mySquare.top);
console.log(mySquare.bottom);
mySquare.draw();

const childrenSquares = [
    // top side square - align x with mySquare's left side
    // align bottom with top of mySquare
    new Rectangle(mySquare.left, mySquare.top - 50, 50, 50, 'red', '#000'),
  
    // right side square - align x with right side of mySquare
    // align top with mySquare top
    new Rectangle(mySquare.right, mySquare.top, 50, 50, 'green', '#000'),
  
    // bottom square
    new Rectangle(mySquare.left, mySquare.bottom, 50, 50, 'blue', '#000'),
  
    // left square
    new Rectangle(mySquare.left - 50, mySquare.top, 50, 50, 'magenta', '#000')
  ]
  
  // draw all of the child squares by looping over them
  childrenSquares.forEach((square) => {
      square.draw()
    //   console.log(square)
  })


  //LINES
    ctx.save()
    ctx.strokeStyle = 'blue'
    ctx.fillStyle = 'blue'
    ctx.lineWidth = 4

    // stroked trapezoid
    ctx.beginPath()
    ctx.moveTo(50, 200) // sets our starting point
    ctx.lineTo(100, 200) // create a line from start point to X: 100, Y: 200
    ctx.lineTo(90, 180) // create the right side
    ctx.lineTo(60, 180) // top side
    ctx.closePath() // left side and closes the path
    ctx.stroke() // draws it to screen via a stroke

    ctx.beginPath()
    ctx.moveTo(150, 200) // starting point
    ctx.lineTo(200, 200) // bottom side
    ctx.lineTo(190, 180) // right side
    ctx.lineTo(160, 180) // top side
    // no need to closePath, fill automatically closes the path
    ctx.fill()

    // restore saved styles (for other examples)
    ctx.restore()


    // TEXT

    // usual setup
    ctx.save()
    ctx.strokeStyle = 'red'
    ctx.fillStyle = 'black'

    // text specific styles
    ctx.font = 'bold 16px Monospace'
    ctx.textAlign = 'left'
    ctx.textBaseline = 'alphabetic'

    // draw stroked text to screen
    ctx.strokeText('Stroked Text', 50, 250)

    // calculate the width of this text using current font/styles
    const textWidth = ctx.measureText('Stroked Text').width

    // X = previous X position + width + 25px margin
    ctx.fillText('Filled Text', 50 + textWidth + 25, 250)

    ctx.restore()
  
}


document.addEventListener('DOMContentLoaded', init)


})()