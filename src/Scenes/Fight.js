/* eslint-disable no-undef */
import 'phaser';

const FightScene = new Phaser.Class({
  Extends: Phaser.Scene,
  initialize: function FightScene() {
    Phaser.Scene.call(this, { key: 'FightScene' });
  },

  create() {
    this.add.image(400, 300, 'fight');
    this.startBattle();

    this.sys.events.on('wake', this.startBattle, this);
  },

  startBattle() {
    const warrior = new PlayerCharacter(
      this,
      500,
      150,
      'Menelik',
      null,
      '',
      150,
      80,
    );

    this.add.existing(warrior);
  },
});
