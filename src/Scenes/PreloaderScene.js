/* eslint-disable no-undef */
/* eslint-disable radix */

import 'phaser';

export default class PreloaderScene extends Phaser.Scene {
  constructor() {
    super('Preloader');
  }

  init() {
    this.readyCount = 0;
  }

  preload() {
    this.add.image(400, 200, 'logo');
    const progressBar = this.add.graphics();
    const progressBox = this.add.graphics();
    progressBox.fillStyle(0x22222, 0.8);
    progressBox.fillRect(240, 270, 320, 50);

    const { width } = this.cameras.main;
    const { height } = this.cameras.main;
    const loadingTxt = this.make.text({
      x: width / 2,
      y: height / 2 - 50,
      text: 'Loading....',
      style: {
        font: '20px monospace',
        fill: '#ffffff',
      },
    });

    assetTxt.setOrigin(0.5, 0.5);

    this.load.on('progress', () => {
      percentTxt.setText(`${parseInt(value * 100)}%`);
      progressBar.clear();
      progressBar.fillStyle(0xffffff, 1);
      progressBar.fillRect(250, 280, 300 * value, 30);
    });

    this.load.on('fileProgress', (file) => {
      assetTxt.setText(`Loading asset: ${file.key}`);
    });

    this.load.on('complete', () => {
      progressBar.destroy();
      progressBox.destroy();
      loadingTxt.destroy();
      percentTxt.destroy();
      assetTxt.destroy();
      this.ready();
    });

    this.timeEvent = this.time.delayedCall(5000, this.ready, [], this);

    this.load.image('button1', '/assets/decor/bt1.png');
    this.load.image('button2', '/assets/decor/bt2.png');
    this.load.image('mute', '/assets/decor/mute.png');
    this.load.image('unmute', '/assets/decor/unmute.png');
    this.load.audio('startMusic', '/assets/sounds/StartTheme.ogg');
    this.load.audio('select', '/assets/sounds/select.wav');
    this.load.audio('attack', '/assets/sounds/explosion.wav');
    this.load.audio('win', '/assets/sounds/powerup.wav');

    this.load.image('tree1', '/assets/map/tree1.png');
    this.load.image('tree0', '/assets/map/tree0.png');

    this.load.image('court', '/assets/map/court.png');

    this.load.spritesheet('player', '/assets/map/assets_dummies.png', {
      frameWidth: 16,
      frameHeight: 16,
    });

    this.load.spritesheet('player0', '/assets/board/Fighter.png', {
      frameWidth: 105,
      frameHeight: 100,
    });

    this.load.image('animeHero1', '');
    this.load.image('animeHero2', '');
    this.load.image('enemy1', '');
    this.load.image('enemy2', '');
    this.load.image('enemy3', '');
    this.load.image('gust', '');
    this.load.image('master', '');
  }

  ready() {
    this.scene.start('Title');
    this.readyCount += 1;
    if (this.readyCount === 2) {
      this.scene.start('Title');
    }
  }
}
