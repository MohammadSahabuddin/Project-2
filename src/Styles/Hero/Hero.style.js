export default {
  Title: { fontWeight: 600, fontSize: '115px', lineHeight: 1, m: '25px 0' },
  Paragraph: {
    padding: '10px 0 65px',
    width: '75%',
  },
  Button: {
    a: {
      textDecoration: 'none',
      padding: '13px 42px',
      border: '1px solid #000',
      cursor: 'pointer',
      transition: '0.3s',
      '&:hover': {
        bgcolor: 'text.primary',
        button: {
          color: 'background.default',
        },
      },
      button: {
        fontSize: '15px',
        color: 'black',
      },
    },
  },
  Image: {
    textAlign: 'right',
    img: {
      width: '87%',
    },
  },
  SVG: {
    position: 'absolute',
    top: '19%',
    left: '-33%',
    zIndex: -9999,
  },
};
