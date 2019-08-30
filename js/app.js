// Enemies our player must avoid
class Enemy {
    constructor(x, y, s) {
        this.sprite = 'images/enemy-bug.png';
        this.x = x
        this.y = y
        this.speed = s
        this.endPoint = 505
    }
    render() {
        ctx.drawImage(Resources.get(this.sprite), this.x, this.y)
    }
    update(dt) {
        if (this.x < this.endPoint) {
            this.x += this.speed * dt
        } else {
            this.x = -202
        }
    }

}

class Player {
    constructor() {
        this.sprite = "images/char-boy.png"
        this.x = 202
        this.y = 392
        this.xMin = 0
        this.xMax = 404
        this.yMin = -23
        this.yMax = 392
    }
    render() {
        ctx.drawImage(Resources.get(this.sprite), this.x, this.y)
    }
    update() {
        for (let enemy of allEnemies) {
            if (this.y == enemy.y && (enemy.x + 50 > this.x && enemy.x < this.x + 50)) {
                alert("You lost! Loooser!!!")
            }
        }
    }
    handleInput(key) {
        switch (key) {
            case "left":
                if (this.x != this.xMin) {
                    this.x -= 101
                }
                break
            case "right":
                if (this.x != this.xMax) {
                    this.x += 101
                }
                break
            case "up":
                if (this.y != this.yMin) {
                    this.y -= 83
                }
                break
            case "down":
                if (this.y != this.yMax) {
                    this.y += 83
                }
                break
        }
    }
}

// Now instantiate your objects.
// Place all enemy objects in an array called allEnemies
// Place the player object in a variable called player

const player = new Player()
const enemy1 = new Enemy(-202, 60, 80)
const enemy2 = new Enemy(-202, 143, 150)
const enemy3 = new Enemy(-202, 226, 200)
const allEnemies = [enemy1, enemy2, enemy3]

// This listens for key presses and sends the keys to your
// Player.handleInput() method. You don't need to modify this.
document.addEventListener('keydown', function (event) {
    let allowedKeys = {
        37: 'left',
        38: 'up',
        39: 'right',
        40: 'down'
    };
    player.handleInput(allowedKeys[event.keyCode])
});
