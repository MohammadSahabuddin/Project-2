import { Box, Stack, Typography } from '@mui/material';

//iconify
import { Icon } from '@iconify/react';

//Style
import styles from 'Styles/Footer/Footer.style';

const Copyright = () => {
  return (
    <Box>
      <Stack direction="row" sx={styles.Copyright}>
        <Icon icon="charm:copyright" />
        <Typography variant="body1" component="p">
          {new Date().getFullYear()} Codeforest24, All right reserved
        </Typography>
      </Stack>
    </Box>
  );
};

export default Copyright;
