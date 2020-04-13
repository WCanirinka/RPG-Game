/* eslint-disable no-undef */
import 'phaser';

import config from '../Config/config';
import Button from '../Objects/Button';
import getCurrentScore from '../localStorage';
import score from './Battle';


export default class GameOver extends Phaser.Scene {
  constructor() {
    super('GameOver');
  }

  create() {
    this.menuButton = new Button(this, 400, 400, 'blueButton1', 'blueButton2', 'Main Menu');
    this.add.image(400, 270, 'axe');
    this.madeByText = this.add.text(
      0,
      0,
      'Forest Clash',
      { fontSize: '26px', fill: '#B09B1C' },
    );
    this.scoreT = this.add.text(
      0,
      0,
      `Score : ${score}`,
      { fontSize: '26px', fill: '#fff' },
    );
    this.highScoreT = this.add.text(
      0,
      0,
      `High Score ${getCurrentScore()}`,
      { fontSize: '26px', fill: '#fff' },
    );

    this.zone = this.add.zone(
      config.width / 2,
      config.height / 2,
      config.width,
      config.height,
    );

    [
      this.madeByText,
      this.scoreT,
      this.highScoreT,
    ].forEach((el) => {
      Phaser.Display.Align.In.Center(el, this.zone);
    });

    this.madeByText.setY(5);
    this.scoreT.setY(80);
    this.highScoreT.setY(160);
  }
}
