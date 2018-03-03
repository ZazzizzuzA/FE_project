import Pixi from "../pixi/pixi.min";

let type = "WebGL"
if (!PIXI.utils.isWebGLSupported()) {
    type = "canvas"
}
PIXI.utils.sayHello(type)

let Application = PIXI.Application,
    loader = PIXI.loader,
    resources = PIXI.loader.resources,
    Sprite = PIXI.Sprite,
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
let dungeon, explorer, treasure, id, door;

function setup() {
    let TextureCache = PIXI.utils.TextureCache
    let texture = TextureCache["../../assets/img/game_sprite.png"],
        sprite = new Sprite(texture);
    let dungeonTexture = TextureCache["dungeon.png"];
    dungeon = new Sprite(dungeonTexture);
    app.stage.addChild(dungeon);

    explorer = new Sprite(
        resources["../../assets/img/game_sprite.json"].textures["explorer.png"]
    );
    explorer.x = 68;
    explorer.y = app.stage.height / 2 - explorer.height / 2;
    app.stage.addChild(explorer);

    id = PIXI.loader.resources["../../assets/img/game_sprite.json"].textures;

    treasure = new Sprite(id["treasure.png"]);
    treasure.x = app.stage.width - treasure.width - 48;
    treasure.y = app.stage.height / 2 - treasure.height / 2;
    app.stage.addChild(treasure);

    door = new Sprite(id["door.png"]);
    door.x = 32;
    app.stage.addChild(door);

    let numberOfBlobs = 6,
        spacing = 48,
        xOffset = 150;

    for (let i = 0; i < numberOfBlobs; i++) {

        let blob = new Sprite(id["blob.png"]);
        let x = spacing * i + xOffset;
        let y = randomInt(0, app.stage.height - blob.height);

        blob.x = x;
        blob.y = y;
        app.stage.addChild(blob);
    }


    // app.stage.addChild(texture);
    // let rectangle = new Rectangle(192, 128, 64, 64);
    // texture.frame = rectangle;
    // let rocket = new Sprite(texture);
    // rocket.x = 32;
    // rocket.y = 32;
    // app.stage.addChild(rocket);
    app.renderer.autoResize = true;
    app.renderer.resize(512, 512);
    // renderer.render(stage);    ????????????????????????????????????
}

function randomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}