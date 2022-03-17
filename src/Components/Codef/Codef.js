//Packages
import { Box, Container, Grid, Typography } from '@mui/material';
import { Icon } from '@iconify/react';

//Data
import Code from 'Data/Codef/Codef.data';

//styles
import styles from 'Styles/Codef/Codef.style';

const Codef = () => {
  return (
    <Container
      maxWidth={false}
      disableGutters
      component="section"
      sx={{ mt: '3.5%' }}
    >
      <Grid container spacing={2}>
        {Code &&
          Code.map((code, i) => (
            <Grid item md={3} key={i}>
              <Box sx={styles.Codef}>
                <Icon icon={code.icon} className="FirstIcon" />
                <Icon icon={code.hoverIcon} className="SecondIcon" />
                <Typography variant="h4" component="h4">
                  {code.title}
                </Typography>
                <Typography variant="body1" component="p">
                  {code.description}
                </Typography>
              </Box>
            </Grid>
          ))}
      </Grid>
    </Container>
  );
};

export default Codef;
