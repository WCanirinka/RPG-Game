/* eslint-disable import/no-unresolved */
import Phaser from 'phaser';
import WorldScene from '../scenes/worldScene';
import { BattleScene, UIScene } from '../scenes/battle';
import CreditsScene from '../scenes/creditsScene';

function engine() {
  const config = {
    type: Phaser.AUTO,
    parent: 'phaser-example',
    dom: {
      createContainer: true,
    },
    width: 800,
    height: 600,
    pixelArt: true,
    physics: {
      default: 'arcade',
      arcade: {
        gravity: { y: 0 },
        debug: true,
      },
    },
    scene: [
      WorldScene,
      BattleScene,
      CreditsScene,
      UIScene,
    ],
  };
  const game = new Phaser.Game(config);
  return game;
}

export default engine;
