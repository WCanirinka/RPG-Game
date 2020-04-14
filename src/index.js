/* eslint-disable no-undef */
/* eslint-disable import/no-unresolved */

import 'phaser';
import config from './Config/config';
import BootScene from './Scenes/BootScene';
import PreloaderScene from './Scenes/PreloaderScene';
import Model from './Objects/Model';
import TitleScene from './Scenes/TitleScene';
import GameOver from './Scenes/GameOver';
import OptionsScene from './Scenes/OptionsScene';
import CreditsScene from './Scenes/CreditsScene';
import WorldScene from './Scenes/WorldScene';
import { BattleScene, UIScene } from './Scenes/Battle';
import liveUpdate from './dom';
// import { submitScore, getScoreBoard, createGame } from './backEndConnect';

require('babel-core/register');
require('babel-polyfill');

class Game extends Phaser.Game {
  constructor() {
    super(config);
    const model = new Model();
    this.globals = { model, bgMusic: null };
    this.scene.add('Boot', BootScene);
    this.scene.add('Preloader', PreloaderScene);
    this.scene.add('Title', TitleScene);
    this.scene.add('GameOver', GameOver);
    this.scene.add('Options', OptionsScene);
    this.scene.add('Credits', CreditsScene);
    this.scene.add('WorldScene', WorldScene);
    this.scene.add('BattleScene', BattleScene);
    this.scene.add('UIScene', UIScene);
    this.scene.start('Boot');
  }
}


window.game = new Game();
liveUpdate();
