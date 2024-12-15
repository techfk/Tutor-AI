import { Button } from '@nativescript/core';
import { buttonTapAnimation } from '../../styles/animations';

export class AnimatedButton extends Button {
  constructor() {
    super();
    this.on('tap', () => this.animate());
  }

  private animate() {
    buttonTapAnimation(this).play();
  }
}