/* eslint-disable import/no-unresolved */
import Phaser from 'phaser';

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
