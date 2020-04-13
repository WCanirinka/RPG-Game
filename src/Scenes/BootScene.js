/* eslint-disable no-undef */
import 'phaser';

export default class BootScene extends Phaser.Scene {
  constructor() {
    super('Boot');
  }

  preload() {
    this.load.image('master', '/assets/mater.png');
    this.load.image('bgMusic', '/assets/sounds/StartTheme.ogg');
  }

  create() {
    this.scene.start('Preloader');
  }
}
