/* eslint-disable no-undef */
import 'phaser';

export default class BootScene extends Phaser.Scene {
  constructor() {
    super('Boot');
  }

  preload() {
    this.load.image('master', '/assets/master.png');
  }

  create() {
    this.scene.start('Preloader');
  }
}
