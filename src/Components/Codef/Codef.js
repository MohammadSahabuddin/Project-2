//Packages
import { Container, Grid, Typography } from '@mui/material';
import { Icon } from '@iconify/react';

//Data
import Code from 'Data/Codef/Codef.data';

const Codef = () => {
  return (
    <Container>
      <Grid container spacing={2}>
        {Code &&
          Code.map((code, i) => (
            <Grid item md={3} key={i}>
              <Icon icon={code.icon} />
              <Typography variant="h4" component="h4">
                {code.title}
              </Typography>
              <Typography variant="body1" component="p">
                {code.description}
              </Typography>
            </Grid>
          ))}
      </Grid>
    </Container>
  );
};

export default Codef;
