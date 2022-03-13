export default {
  ListItem: {
    width: '62%',
    margin: '0 0 0 auto',
    justifyContent: 'center',
    li: {
      textAlign: 'center',
      display: 'inline-block',
      transition: 'all 2s',
      a: {
        transition: 'all 2s',
        textDecoration: 'none',
        cursor: 'pointer',
        button: {
          padding: '5px 20px',
          borderRadius: '5px',
          color: 'text.primary',
          transition: '60s',
          '& p': {
            fontSize: '15px',
            fontWeight: 600,
            '&:hover::after': {
              content: "''",
              background: '#000',
              position: 'absolute',
              height: '2px',
              width: '58%',
              bottom: '10%',
              margin: '0 auto',
              right: '0',
              left: '0',
              zIndex: 99,
            },
          },
        },
      },
    },
  },
};
