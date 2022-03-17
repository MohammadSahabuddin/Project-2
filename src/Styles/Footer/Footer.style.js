export default {
  Footer: {
    bgcolor: 'text.primary',
    color: 'background.default',
    p: '6rem 0',
  },
  Wrapper: {
    textAlign: 'center',
    width: '40%',
    margin: '0 auto',
  },
  Logo: {
    a: {
      img: {
        width: '29%',
        mb: '22px',
      },
    },
  },
  Text: {
    mb: '22px',
    '& p': {
      fontSize: '15px',
    },
  },
  Icons: {
    justifyContent: 'center',
    li: {
      justifyContent: 'center',
      width: '12%',
      a: {
        textAlign: 'center',
        textDecoration: 'none',
        borderRadius: '50%',
        svg: {
          color: '#fff',
          fontSize: '20px',
          m: '10px 10px 5px',
        },
      },
      '&:nth-child(1)': {
        a: {
          bgcolor: '#0066FF',
          '&:hover': {
            bgcolor: '#282828',
          },
          svg: {
            m: '10px 15px 5px',
          },
        },
      },
      '&:nth-child(2)': {
        a: {
          bgcolor: '#FF2106',
          '&:hover': {
            bgcolor: '#043894',
          },
        },
      },
      '&:nth-child(3)': {
        a: {
          bgcolor: '#7027FF',
          '&:hover': {
            bgcolor: '#FF0437',
          },
        },
      },
      '&:nth-child(4)': {
        a: {
          bgcolor: '#4E1E95',
          '&:hover': {
            bgcolor: '#0066FF',
          },
        },
      },
    },
  },
  Copyright: {
    alignItems: 'center',
    justifyContent: 'center',
    mt: '4px',
    svg: {
      color: 'primary.footer',
      fontSize: '15px',
      marginRight: '4px',
    },
    '& p': {
      fontSize: '15px',
      color: 'primary.copyright',
    },
  },
};
