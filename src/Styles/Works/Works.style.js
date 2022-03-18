export default {
  Container: {
    mt: '16%',
    position: 'relative',
  },
  HoverEffect: {
    height: '100%',
    textAlign: 'center',
    bgcolor: 'text.primary',
    transition: '.5s ease',
    opacity: '0',
    cursor: 'pointer',
    '&:hover': {
      opacity: '100%',
      '& .ImageLstItem': {
        transform: 'scale(1.5)',
      },
    },
  },
};
