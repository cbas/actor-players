var actors = []

var sun = new Image()
sun.src = 'images/sun.svg'

var player = new Image()
player.src = 'images/player.svg'

class Actor {
  constructor (x, y, image = sun) {
    this.x = x
    this.y = y
    this.image = image
  }
  render () {
    context.drawImage(this.image, this.x, this.y)
  }
}

// function Actor () {
//   this.x = x
//   this.y = y
//   this.image = 'images/sun.svg'
// }
//
// Actor.prototype.render = function () {
//   context.drawImage(this.image, this.x, this.y)
// }

class Player extends Actor {
  constructor (x, y, image = player) {
    super(x, y, image)
  }
  render () {
    context.drawImage(this.image, this.x, this.y)
    context.drawImage(this.image, this.x + 10, this.y + 10)
  }
}

function setup () {
  for (var i = 0; i < 1000; i++) {
    var x = Math.random() * 100
    var y = Math.random() * 100
    var actor = new Actor(x, y)
    actors.push(actor)
  }
  var player = new Player(0, 0)
  actors.push(player)
}

function render () {
  context.clearRect(0, 0, canvas.width, canvas.height)
  actors.forEach(actor => {
    actor.render()
  })
}

setup()
setInterval(render, 16.6667)
