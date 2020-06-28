import Phaser from "phaser";
// home page

export default class TitleScene extends Phaser.Scene {
  constructor() {
    super({ key: "TitleScene" });
  }

  preload() {
    this.load.image("sea", "./assets/images/narwal3.jpg");
  }

  create() {
    let background = this.add.sprite(400, 300, "sea");
    background.setScale(0.8);

    this.add.text(180, 100, "Narwal-gotchi", {
      font: "65px Pacifico",
      fill: "#F0FFF0",
    });

    this.add.text(275, 530, "~First interactive Narwal~", {
      font: "20px Pacifico",
      fill: "#F0FFF0",
    });

    this.time.addEvent({
      delay: 5000,
      callback: () => {
        this.scene.start("GameScene");
      },
      callbackScope: this,
    });
  }

  update() {}
}
