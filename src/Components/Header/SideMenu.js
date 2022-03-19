//Packages
import * as React from 'react';
import {
  Box,
  SwipeableDrawer,
  List,
  ListItem,
  ButtonBase,
  Typography,
  Grid,
} from '@mui/material';
import Link from 'next/link';
import { Icon } from '@iconify/react';

//Logo
import Logos from 'Assets/logo-img1.png';

//Data
import IconsData from 'Data/Footer/Icons.data';

//Styles
import styles from 'Styles/Header/SideMenu.style';

export default function SideMenu() {
  const [state, setState] = React.useState({
    right: false,
  });

  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event &&
      event.type === 'keydown' &&
      (event.key === 'Tab' || event.key === 'Shift')
    ) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const list = (anchor) => (
    <Box
      sx={{
        width: anchor === 'top' || anchor === 'bottom' ? 'auto' : 250,
        textAlign: 'right',
      }}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
      className="Look"
    >
      <List direction="row" className="Bangladesh">
        <ListItem>
          <Link href="/" passHref>
            <a>
              <Box component="img" src={Logos} alt="Logo" />
            </a>
          </Link>
        </ListItem>
        <ListItem>
          <Typography variant="body" component="p">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
            eiusmod tempor incididunt
          </Typography>
        </ListItem>
        <ListItem>
          {IconsData && (
            <Grid container spacing={2}>
              {IconsData &&
                IconsData.map((icon, i) => (
                  <Grid item md={3} key={i}>
                    <Link href={icon.link} passHref>
                      <a>
                        <Icon icon={icon.name} />
                      </a>
                    </Link>
                  </Grid>
                ))}
            </Grid>
          )}
        </ListItem>
      </List>
    </Box>
  );

  return (
    <div sx={{ width: '100%' }}>
      {['right'].map((anchor) => (
        <React.Fragment key={anchor}>
          <ButtonBase
            onClick={toggleDrawer(anchor, true)}
            className="LoveIt"
            sx={styles.Button}
          >
            <Icon icon="bi:list" />
          </ButtonBase>
          <SwipeableDrawer
            anchor={anchor}
            open={state[anchor]}
            onClose={toggleDrawer(anchor, false)}
            onOpen={toggleDrawer(anchor, true)}
            swipeAreaWidth={100}
            className="FaizanArif"
          >
            {list(anchor)}
          </SwipeableDrawer>
        </React.Fragment>
      ))}
    </div>
  );
}
