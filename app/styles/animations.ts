import { Animation } from '@nativescript/core';

export const fadeIn = (view: any) => {
  return new Animation([{
    target: view,
    opacity: 0,
    duration: 200
  }]);
};

export const scaleIn = (view: any) => {
  return new Animation([{
    target: view,
    scale: { x: 0.5, y: 0.5 },
    duration: 200,
    curve: 'easeOut'
  }]);
};

export const buttonTapAnimation = (view: any) => {
  return new Animation([{
    target: view,
    scale: { x: 0.95, y: 0.95 },
    duration: 100,
    curve: 'easeOut'
  }]);
};