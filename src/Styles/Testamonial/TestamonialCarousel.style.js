export default {
  embla: {
    position: 'relative',
    padding: '20px',
    maxWidth: '70%',
    ml: 'auto',
    mr: 'auto',
    textAlign: 'center',
  },
  emblaViewport: {
    overflow: 'hidden',
    width: '100%',
    '&.embla__viewport.is-draggable': { cursor: ['move', 'grab'] },
    '&.embla__viewport.is-dragging': { cursor: 'grabbing' },
  },

  emblaContainer: {
    display: 'flex',
    userSelect: 'none',
    WebkitTouchCallout: 'none',
    KhtmlUserSelect: 'none',
    WebkitTapHighlightColor: 'transparent',
    marginLeft: '-10px',
  },
  emblaSlide: {
    position: 'relative',
    minWidth: '100%',
    paddingLeft: '10px',
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
    justifyContent: 'center',
    alignItems: 'center',
    top: '58%',
    '&.embla__button--prev': {
      left: '-11.5%',
    },
    '&.embla__button--next': {
      right: '-11.5%',
    },
    '& .embla__button__svg': { width: '100%', height: '100%' },
  },
  H1: {
    fontSize: '120px',
    textAlign: 'center',
    fontWeight: 600,
    top: '49px',
    position: 'relative',
  },
  Details: {
    fontSize: '17px',
    margin: '19px 0 0',
  },
  Title: {
    margin: '38px 0 6px',
    fontWeight: 600,
    fontSize: '25px',
  },
};
