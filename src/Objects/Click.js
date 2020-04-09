/* eslint-disable no-restricted-globals */
/* eslint-disable no-undef */
import 'phaser';

export default class Click extends Phaser.GameObjects.Container {
  constructor(scene, x, y, key1, key2, text, targetScene) {
    super(scene);
    this.scene = scene;
    this.x = x;
    this.y = y;
    this.button = this.scene.add.sprite(0, 0, key1).setInteractive();
    this.text = this.scene.add.sprite(0, 0, text, { fontsize: '32px', fill: '#fff' });
    Phaser.Display.Align.In.Center(this.text, this.button);

    this.add(this.button);
    this.add(this.text);

    this.button.on('pointerdown', () => {
      if (targetScene) {
        this.scene.scene.start(targetScene);
      } else {
        location.reload(true);
      }
    });
  }
}
