export default {
  Brands: {
    position: 'relative',
  },
  Texts: {
    height: '60%',
    width: '41%',
    background: 'wheat',
    padding: '60px',
    zIndex: 9999,
    position: 'absolute',
    top: '15%',
    left: '53%',
  },
  Image: {
    width: '100%',
  },
  Title: {
    fontSize: '40px',
    fontWeight: 600,
  },
  Description: {
    width: '80%',
    margin: '27px 0 0 auto',
    fontSize: '15px',
  },
  Special: {
    background: 'black',
    width: '11%',
    height: '1px',
    position: 'absolute',
    top: '49%',
  },
  Button: {
    a: {
      textDecoration: 'none',
      padding: '13px 42px',
      border: '1px solid #000',
      cursor: 'pointer',
      transition: '0.3s',
      button: {
        '& p': {
          fontSize: '15px',
          color: 'text.primary',
        },
      },
    },
    '&:hover': {
      a: {
        bgcolor: 'text.primary',
        transition: '0.3s',
        button: {
          '& p': {
            fontSize: '15px',
            color: 'background.default',
          },
        },
      },
    },
    m: '50px 20px 20px 78px',
  },
};
