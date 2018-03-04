import Pixi from "../pixi/pixi.min";
import keyboard from "./keyboard";

export default function() {
    let type = "WebGL"
    if (!PIXI.utils.isWebGLSupported()) {
        type = "canvas"
    }
    PIXI.utils.sayHello(type)

    let Application = PIXI.Application,
        Container = PIXI.Container,
        loader = PIXI.loader,
        resources = PIXI.loader.resources,
        Sprite = PIXI.Sprite,
        state,
        blobs = [],
        gameScene = new Container(),
        gameOverScene = new Container(),
        healthBar = new PIXI.DisplayObjectContainer(),
        Rectangle = PIXI.Rectangle;



    let app = new Application({
        width: 256,
        height: 256,
    });
    let block = document.getElementsByClassName("block__main")[0];
    block.appendChild(app.view);
    let rectangle = new Rectangle(192, 128, 64, 64);
    loader
        .add("../../assets/img/game_sprite.json")
        .load(setup);
    let dungeon, explorer, treasure, id, door, blob;

    function setup() {
        let TextureCache = PIXI.utils.TextureCache
        let texture = TextureCache["../../assets/img/game_sprite.png"],
            sprite = new Sprite(texture);
        let dungeonTexture = TextureCache["dungeon.png"];


        app.stage.addChild(gameScene);

        app.stage.addChild(gameOverScene);
        gameOverScene.visible = false;

        dungeon = new Sprite(dungeonTexture);
        gameScene.addChild(dungeon);

        explorer = new Sprite(
            resources["../../assets/img/game_sprite.json"].textures["explorer.png"]
        );
        explorer.x = 68;
        explorer.y = gameScene.height / 2 - explorer.height / 2;
        explorer.vx = 0;
        explorer.vy = 0;

        gameScene.addChild(explorer);

        let left = keyboard(37),
            up = keyboard(38),
            right = keyboard(39),
            down = keyboard(40);

        left.press = () => {
            explorer.vx = -5;
            explorer.vy = 0;
        };
        left.release = () => {

            if (!right.isDown && explorer.vy === 0) {
                explorer.vx = 0;
            }
        };
        up.press = () => {
            explorer.vy = -5;
            explorer.vx = 0;
        };
        up.release = () => {
            if (!down.isDown && explorer.vx === 0) {
                explorer.vy = 0;
            }
        };
        right.press = () => {
            explorer.vx = 5;
            explorer.vy = 0;
        };
        right.release = () => {
            if (!left.isDown && explorer.vy === 0) {
                explorer.vx = 0;
            }
        };
        down.press = () => {
            explorer.vy = 5;
            explorer.vx = 0;
        };
        down.release = () => {
            if (!up.isDown && explorer.vx === 0) {
                explorer.vy = 0;
            }
        };

        id = PIXI.loader.resources["../../assets/img/game_sprite.json"].textures;

        treasure = new Sprite(id["treasure.png"]);
        treasure.x = gameScene.width - treasure.width - 48;
        treasure.y = gameScene.height / 2 - treasure.height / 2;
        gameScene.addChild(treasure);

        door = new Sprite(id["door.png"]);
        door.x = 32;
        gameScene.addChild(door);

        let numberOfBlobs = 6,
            spacing = 48,
            xOffset = 150,

            speed = 2,
            direction = 1;

        for (let i = 0; i < numberOfBlobs; i++) {

            let blob = new Sprite(id["blob.png"]);
            let x = spacing * i + xOffset;
            let y = randomInt(0, gameScene.height - blob.height);

            blob.x = x;
            blob.y = y;
            blob.vy = speed * direction;

            direction *= -1;

            blobs.push(blob);

            gameScene.addChild(blob);
        }

        healthBar.position.set(gameScene.width - 170, 4)
        gameScene.addChild(healthBar);

        let innerBar = new PIXI.Graphics();
        innerBar.beginFill(0x000000);
        innerBar.drawRect(0, 0, 128, 8);
        innerBar.endFill();
        healthBar.addChild(innerBar);

        let outerBar = new PIXI.Graphics();
        outerBar.beginFill(0xFF3300);
        outerBar.drawRect(0, 0, 128, 8);
        outerBar.endFill();
        healthBar.addChild(outerBar);

        healthBar.outer = outerBar;
        app.renderer.autoResize = true;
        app.renderer.resize(512, 512);

        state = play;
        app.ticker.add(delta => gameLoop(delta));
    }

    function randomInt(min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }

    function gameLoop(delta) {
        state(delta);

    }

    function end() {
        gameScene.visible = false;
        gameOverScene.visible = true;
    }

    function play(delta) {
        explorer.x += explorer.vx;
        explorer.y += explorer.vy;
        let explorerHit = false;
        contain(explorer, { x: 28, y: 10, width: 488, height: 480 });

        blobs.forEach(function(blob) {

            blob.y += blob.vy;

            let blobHitsWall = contain(blob, { x: 28, y: 10, width: 488, height: 480 });

            if (blobHitsWall === "top" || blobHitsWall === "bottom") {
                blob.vy *= -1;
            }

            if (hitTestRectangle(explorer, blob)) {
                explorerHit = true;
            }
        });
        if (explorerHit) {

            explorer.alpha = 0.5;
            healthBar.outer.width -= 1;
            if (healthBar.outer.width < 0) {
                state = end;
            }

        } else {
            explorer.alpha = 1;
        }
        if (hitTestRectangle(explorer, treasure)) {
            treasure.x = explorer.x + 8;
            treasure.y = explorer.y + 8;
        }
    }
}

function hitTestRectangle(item1, item2) {

    let hit, combinedHalfWidths, combinedHalfHeights, vx, vy;

    hit = false;

    item1.centerX = item1.x + item1.width / 2;
    item1.centerY = item1.y + item1.height / 2;
    item2.centerX = item2.x + item2.width / 2;
    item2.centerY = item2.y + item2.height / 2;

    item1.halfWidth = item1.width / 2;
    item1.halfHeight = item1.height / 2;
    item2.halfWidth = item2.width / 2;
    item2.halfHeight = item2.height / 2;

    vx = item1.centerX - item2.centerX;
    vy = item1.centerY - item2.centerY;

    combinedHalfWidths = item1.halfWidth + item2.halfWidth;
    combinedHalfHeights = item1.halfHeight + item2.halfHeight;

    if (Math.abs(vx) < combinedHalfWidths) {

        if (Math.abs(vy) < combinedHalfHeights) {
            hit = true;
        } else {
            hit = false;
        }
    } else {

        hit = false;
    }
    return hit;
};

function contain(sprite, container) {

    let collision = undefined;

    if (sprite.x < container.x) {
        sprite.x = container.x;
        collision = "left";
    }

    if (sprite.y < container.y) {
        sprite.y = container.y;
        collision = "top";
    }

    if (sprite.x + sprite.width > container.width) {
        sprite.x = container.width - sprite.width;
        collision = "right";
    }

    if (sprite.y + sprite.height > container.height) {
        sprite.y = container.height - sprite.height;
        collision = "bottom";
    }

    return collision;
}