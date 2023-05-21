const animations = {
  initialLeft: {
    opacity: 0,
    x: -50
  },
  initialFade: {
    opacity: 0,
    scale: 0.5
  },
  initialRight: {
    opacity: 0,
    x: 50
  },
  initialBottom: {
    opacity: 0,
    y: 50
  },
  animateX: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 1,
      delay: 0.2
    }
  },
  animateY: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 1,
      delay: 0.2
    }
  },
  animateFade: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.7,
      delay: 0.2
    }
  }
};

export default animations;