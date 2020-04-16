/* eslint-disable import/no-unresolved */
import Phaser from 'phaser';

export default class BootScene extends Phaser.Scene {
  constructor() {
    super('Boot');
  }

  preload() {
    this.load.image('master', 'assets/mater.png');
    this.load.audio('bgMusic', ['assets/sounds/StartTheme.mp3']);
  }

  create() {
    this.scene.start('Preloader');
  }
}
