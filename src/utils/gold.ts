import type { CSSProperties } from 'react';

/** Deep antique-gold used for strokes, dots and ornaments. */
export const GOLD = '#8f6420';

/** Gradient gold text for names and headings. */
export const GOLD_TEXT: CSSProperties = {
  backgroundImage: 'linear-gradient(135deg, #6e4a14 0%, #9c7128 40%, #c09341 52%, #8a5f1d 100%)',
  WebkitBackgroundClip: 'text',
  backgroundClip: 'text',
  color: 'transparent',
};
