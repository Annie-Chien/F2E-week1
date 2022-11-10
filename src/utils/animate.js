export const animations = {
  moveDown: {
    initial: { y: -80, opacity: 0 },
    animate: { y: 0, opacity: 1 },
  },
  moveUp: {
    initial: { y: 80, opacity: 0 },
    animate: { y: 0, opacity: 1 },
  },
  popUp: {
    initial: { scale: 0, opacity: 0 },
    animate: {
      scale: 1.1,
      opacity: 1,
      transition: { duration: '1', type: 'spring', stiffness: 200 },
    },
  },
  handUp: {
    initial: { scale: 0.5, opacity: 0, y: '100%', rotate: 45 },
    animate: {
      scale: 1,
      opacity: 1,
      y: 0,
      transition: { duration: '2' },
    },
  },
  handDown: {
    initial: { scale: 0.5, opacity: 0, y: '-100%', rotate: 135 },
    animate: {
      scale: 1,
      opacity: 1,
      y: 0,
      transition: { duration: '2' },
    },
  },
  handLeft: {
    initial: { scale: 0.5, opacity: 0, x: '120%', y: 0, rotate: 85 },
    animate: {
      scale: 1,
      opacity: 1,
      x: 0,
      y: 0,
      rotate: 0,
      transition: { duration: '1.5' },
    },
  },
  handRight: {
    initial: { scale: 0.5, opacity: 0, x: '-120%', y: 0, rotate: -85 },
    animate: {
      scale: 1,
      opacity: 1,
      rotate: 0,
      x: 0,
      Y: 0,
      transition: { duration: '1.5' },
    },
  },
  scaleUp: {
    initial: { scale: 0, opacity: 0 },
    animate: {
      scale: 1,
      opacity: 1,
      transition: { duration: '1.5' },
    },
  },
};
