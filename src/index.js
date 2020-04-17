/* eslint-disable import/no-unresolved */
import Phaser from 'phaser';
import config from './config/config';
import BootScene from './scenes/bootScene';
import PreloaderScene from './scenes/preloaderScene';
import Model from './helpers/model';
import TitleScene from './scenes/titleScene';
import GameOver from './scenes/gameOver';
import OptionsScene from './scenes/optionsScene';
import CreditsScene from './scenes/creditsScene';
import WorldScene from './scenes/worldScene';
import { BattleScene, UIScene } from './scenes/battle';
import liveUpdate from './dom';

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
