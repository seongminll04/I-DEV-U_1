import React, { useEffect } from 'react';
import Phaser from 'phaser';

let character;
let cursors;

function preload() {
  this.load.image('map', 'assets/map0714.png');
  this.load.image('character', 'assets/12.png');
  console.log("ok")
}

function create() {
  for (let i = 0; i < 20; i++) {
    for (let j = 0; j < 20; j++) {
        this.add.image(750 * i + 375, 750 * j + 300, 'map');
    }
  }

  character = this.physics.add.sprite(50, 50, 'character');
  character.setCollideWorldBounds(true); // 이 코드를 추가합니다

  cursors = this.input.keyboard.createCursorKeys();
}

function update() {
  if (cursors.left.isDown) {
    character.setVelocityX(-160);
  } else if (cursors.right.isDown) {
    character.setVelocityX(160);
  } else {
    character.setVelocityX(0);
  }

  if (cursors.up.isDown) {
    character.setVelocityY(-160);
  } else if (cursors.down.isDown) {
    character.setVelocityY(160);
  } else {
    character.setVelocityY(0);
  }
}

export const Game = () => {
  useEffect(() => {
    const config = {
      type: Phaser.AUTO,
      width: 800,
      height: 600,
      physics: {
        default: 'arcade',
      },
      scene: {
        preload: preload,
        create: create,
        update: update,
      },
    };

    new Phaser.Game(config);
  }, []);

  return <div id="phaser-game" />;
};
