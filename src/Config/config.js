/* eslint-disable import/no-cycle */
/* eslint-disable no-undef */
import 'phaser';

export default {
  type: Phaser.AUTO,
  parent: 'phaser-parent',
  width: 800,
  height: 600,
  pixelArt: true,
  physics: {
    default: 'arcade',
    arcade: {
      gravity: { y: 0 },
      debug: false,
    },
  },
};
