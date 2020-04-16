/* eslint-disable import/no-unresolved */
import Phaser from 'phaser';

import config from '../Config/config';
import Button from '../Objects/Button';

export default class CreditsScene extends Phaser.Scene {
  constructor() {
    super('Credits');
  }

  create() {
    this.menuButton = new Button(this, 400, 500, 'blueButton1', 'blueButton2', 'Menu', 'Title');
    this.creditsText = this.add.text(0, 0, 'Credits', {
      fontSize: '32px',
      fill: '#fff',
    });
    this.madeByText = this.add.text(
      0,
      0,
      'African Jungle Created by: Wilfried Canirinka',
      { fontSize: '26px', fill: '#B09B1C' },
    );
    this.explain1 = this.add.text(
      0,
      0,
      'This a game is built as a demonstration ',
      { fontSize: '24px', fill: '#fff' },
    );
    this.explain2 = this.add.text(
      0,
      0,
      'of mastery in a Capstone project using JavaScript ',
      { fontSize: '24px', fill: '#fff' },
    );
    this.explain3 = this.add.text(
      0,
      0,
      'for the JavaScript section in Microverse program.',
      { fontSize: '24px', fill: '#fff' },
    );
    this.inspiration = this.add.text(0, 0, 'Inspired by: GameDev Academy', {
      fontSize: '20px',
      fill: '#fff',
    });
    this.assets = this.add.text(0, 0, 'Assets by: OpenGameArt', {
      fontSize: '18px',
      fill: '#fff',
    });
    this.zone = this.add.zone(
      config.width / 2,
      config.height / 2,
      config.width,
      config.height,
    );

    [
      this.creditsText,
      this.madeByText,
      this.inspiration,
      this.assets,
      this.explain1,
      this.explain2,
      this.explain3,
    ].forEach((el) => {
      Phaser.Display.Align.In.Center(el, this.zone);
    });

    this.madeByText.setY(5);
    this.explain1.setY(50);
    this.explain2.setY(80);
    this.explain3.setY(110);
    this.creditsText.setY(150);
    this.inspiration.setY(200);
  }
}
