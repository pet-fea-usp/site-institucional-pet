import React from 'react';
import { IcoCam } from '../icons.jsx';

export const PhotoPh = ({ aspect = 1.5, label = 'Adicionar foto aqui', dark = false }) => (
  <div className={dark ? 'ph ph-dark' : 'ph'} style={{ aspectRatio: aspect }}>
    <IcoCam s={32} c={dark ? '#9CCBD5' : 'rgba(255,255,255,.35)'} />
    <span className={dark ? 'ph-lbl ph-lbl-dark' : 'ph-lbl'}>{label}</span>
  </div>
);
