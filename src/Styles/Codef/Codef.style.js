export default {
  Codef: {
    textAlign: 'center',
    transition: '3s',
    svg: {
      fontSize: '50px',
      mb: '32px',
      cursor: 'pointer',
    },
    h4: {
      fontSize: '25px',
      fontWeight: 600,
      mb: '17px',
      cursor: 'pointer',
    },
    '& p': {
      fontSize: '15px',
    },
    '&:hover': {
      '& .FirstIcon': {
        display: 'none',
      },
      '& .SecondIcon': {
        display: 'inline-block',
      },
    },
    '& .SecondIcon': {
      display: 'none',
    },
  },
};
