export default {
  embla: {
    position: 'relative',
    padding: '20px',
    maxWidth: '100%',
    marginLeft: 'auto',
    marginRight: 'auto',
  },
  emblaViewport: {
    overflow: 'hidden',
    width: '100%',
    '&.embla__viewport.is-draggable': { cursor: ['move', 'grab'] },
    '&.embla__viewport.is-dragging': { cursor: 'grabbing' },
  },

  emblaContainer: {
    display: 'flex',
    WebkitTapHighlightColor: 'transparent',
    marginLeft: '-10px',
  },
  emblaSlide: {
    position: 'relative',
    paddingLeft: '10px',
    // flex: '0 0 25%',
    width: '50%',
  },
  emblaSlideInner: {
    position: 'relative',
    overflow: 'hidden',
    height: '190px',
  },
  emblaSlideImg: {
    position: 'absolute',
    display: 'block',
    top: '50%',
    left: '50%',
    width: 'auto',
    minHeight: '100%',
    minWidth: '100%',
    maxWidth: 'none',
    transform: 'translate(-50%, -50%)',
  },
  emblaButton: {
    cursor: 'pointer',
    position: 'absolute',
    zIndex: 1,
    top: '50%',
    transform: 'translateY(-50%)',
    justifyContent: 'center',
    alignItems: 'center',
    fill: '#1bcacd',
    '&.embla__button--prev': {
      left: '27px',
    },
    '&.embla__button--next': {
      right: '27px',
    },
    '& .embla__button__svg': { width: '100%', height: '100%' },
  },
};
