import { proxy } from 'valtio';

const state = proxy({
  intro: true,
  color: '#C2AF89',
  isLogoTexture: true,
  isFullTexture: false,
  logoDecal: './babe.png',
  fullDecal: './babe.png',
});

export default state;