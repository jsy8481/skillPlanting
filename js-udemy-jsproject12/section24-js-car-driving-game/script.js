class StartScreen {
    constructor() {
        this.dom = document.querySelector(".startScreen");
        this.dom.addEventListener("click", () => this.start());
    }
    start() {
        document.querySelector(".gameArea").innerHTML = "";
        this.gameArea = new GameArea({startScreen: this});
        this.hideStartScreen();
        this.gameArea.startGame();
    }
    hideStartScreen() {
        this.dom.classList.add("hide");
    }
    showStartScreen() {
        this.dom.classList.remove("hide");
    }
}

class KeyPressMemo {
    constructor() {
        this.memo = {
            ArrowUp: false,
            ArrowDown: false,
            ArrowRight: false,
            ArrowLeft: false,
        }
        document.addEventListener("keydown", (e) => this.pressOn(e));
        document.addEventListener("keyup", (e) => this.pressOff(e));
    }
    pressOn(e) {
        e.preventDefault();
        this.memo[e.key] = true;
    }
    pressOff(e) {
        e.preventDefault();
        this.memo[e.key] = false;
    }
    get ArrowUp() {
        return this.memo.ArrowUp;
    }
    get ArrowDown() {
        return this.memo.ArrowDown;
    }
    get ArrowRight() {
        return this.memo.ArrowRight;
    }
    get ArrowLeft() {
        return this.memo.ArrowLeft;
    }
}
const keyPressMemo = new KeyPressMemo();

class GameArea {
    constructor({startScreen}) {
        this.dom = document.querySelector(".gameArea");
        this.player = null;
        this.isStarted = false;
        this.dotLines = [];
        this.enemies = [];
        this.lineSpeed = 3;
        this.scoreBoard = new ScoreBoard();
        this.startScreen = startScreen;
    }
    setPlayer() {
        this.player = new Player({
            roadWidth: this.dom.getBoundingClientRect().width,
            roadHeight: this.dom.getBoundingClientRect().height,
            parentDom: this.dom,
        });
    }
    startGame() {
        this.dom.classList.remove("hide");
        this.makeLines();
        this.setPlayer();
        this.isStarted = true;
        this.makeEnemy();
        window.requestAnimationFrame(() => this.animateGame())
    }
    makeEnemy() {
        for (let x=0; x < 10; x++) {
            this.enemies.push(new Enemy({roadHeight: this.dom.getBoundingClientRect().height, parentDom: this.dom}));
        }
    }
    makeLines() {
        for(let i=0; i < 6; i++) {
            this.makeDotLine({leftIndex: 1, topIndex: i})
            this.makeDotLine({leftIndex: 3, topIndex: i})
        }
        this.makeSolidLine({leftIndex: 2})
    }
    makeDotLine({leftIndex = 1, topIndex}) {
        const line = document.createElement("div");
        line.classList.add("line");
        line.style.marginLeft = `${95 * leftIndex}px`;
        // line.y = 140 * topIndex;
        line.style.top = `${140 * topIndex}px`
        this.dom.appendChild(line);
        this.dotLines.push(line);
    }
    makeSolidLine({leftIndex = 1}) {
        const line = document.createElement("div");
        line.classList.add("solidLine");
        line.style.marginLeft = `${95 * leftIndex}px`;
        this.dom.appendChild(line);
    }
    moveLines() {
        this.dotLines.forEach((line) => {
            let lineTop = Number(line.style.top.slice(0, -2));

            if (lineTop > 700) {
                lineTop -= 850;
            }
            lineTop += this.lineSpeed;
            line.style.top = `${lineTop}px`;
        });
    }
    animateGame() {
        if (!this.isStarted) {
            return;
        }
        this.moveLines();
        this.moveEnemies();
        this.player.move();
        this.scoreBoard.addScore();
        if(this.checkCollide()) {
            this.endGame();
        }

        window.requestAnimationFrame(() => this.animateGame());
    }
    moveEnemies() {
        this.enemies.forEach((enemy) => {
            enemy.move();
        })
    }
    endGame() {
        this.isStarted = false;
        this.scoreBoard.endGame();
        this.startScreen.showStartScreen();
    }
    checkCollide() {
        return this.enemies.some((enemy) => {
            return this.player.checkCollide(enemy);
        })
    }
}

class Car {
    constructor({x, y, speed, className, parentDom}) {
        this.x = x;
        this.y = y;
        this.speed = speed;

        this.dom = document.createElement("div");
        this.dom.classList.add(className);
        parentDom.appendChild(this.dom);

        this.updateDom();

        this.height = this.dom.getBoundingClientRect().height;
        this.width = this.dom.getBoundingClientRect().width;
    }
    move() {
        // 사용하는 쪽에서 구현
    }
    moveUpY() {
        this.y -= this.speed;
        this.updateDom();
    }
    moveDownY() {
        this.y += this.speed;
        this.updateDom();
    }
    moveUpX() {
        this.x += this.speed;
        this.updateDom();
    }
    moveDownX() {
        this.x -= this.speed;
        this.updateDom();
    }
    updateDom() {
        this.dom.style.left = `${this.x}px`;
        this.dom.style.top = `${this.y}px`;
    }
    checkCollide(target) {
        const playerRect = this.dom.getBoundingClientRect();
        const targetRect = target.dom.getBoundingClientRect();

        return !(playerRect.bottom < targetRect.top ||
            targetRect.bottom < playerRect.top ||
            playerRect.right < targetRect.left ||
            targetRect.right < playerRect.left
        )
    }
}

class ScoreBoard {
    constructor() {
        this.score = 0;
        this.scoreDom = document.querySelector(".score");
    }
    addScore() {
        this.score++;
        this.scoreDom.innerHTML = `Score: ${this.score}`;
    }
    endGame() {
        this.scoreDom.innerHTML = `Game Over<br>Score was ${this.score}`;
    }
}


class Player extends Car{
    constructor({roadWidth, roadHeight, parentDom}) {
        super({x: 200, y: 300, speed: 5, className: "car", parentDom})
        this.keyPressMemo = keyPressMemo;

        this.roadWidth = roadWidth;
        this.roadHeight = roadHeight;
    }
    move() {
        if (this.keyPressMemo.ArrowDown && (this.y + this.height < this.roadHeight)) {
            this.moveDownY()
        }
        if (this.keyPressMemo.ArrowUp && this.y > 0) {
            this.moveUpY()
        }
        if (this.keyPressMemo.ArrowLeft && this.x > 0) {
            this.moveDownX()
        }
        if (this.keyPressMemo.ArrowRight && (this.x + this.width) < this.roadWidth) {
            this.moveUpX()
        }
    }
}
class Enemy extends Car{
    constructor({roadHeight, parentDom}) {
        super({
            y: Math.floor(Math.random() * 5000) * (-1),
            x: Math.random() * 350,
            speed: 3 + Math.random() * 2,
            className: "enemy",
            parentDom,
        });

        this.roadHeight = roadHeight;
    }
    move() {
        if (this.y > this.roadHeight) {
            this.y -= (this.roadHeight + 5000);
        }
        this.moveDownY();
    }
}

window.onload = () => {
    new StartScreen();
}
