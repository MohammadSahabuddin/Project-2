//Packages
import * as React from 'react';
import {
  Box,
  SwipeableDrawer,
  List,
  ListItem,
  ButtonBase,
} from '@mui/material';
import Link from 'next/link';
import { Icon } from '@iconify/react';

//Logo
import Logos from 'Assets/logo-img1.png';

//Data
import Navs from 'Data/Header/nav.data';

export default function ResponsiveMenu({ activePage }) {
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
      }}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <List direction="row">
        <ListItem>
          <Link href="/">
            <a>
              <Box component="img" src={Logos} alt="Logo" />
            </a>
          </Link>
        </ListItem>
        {Navs &&
          Navs.map((nav, i) => (
            <ListItem key={i}>
              <Link href={nav.url}>
                <a className={activePage === nav.id ? 'active' : ''}>
                  <ButtonBase>{nav.name}</ButtonBase>
                </a>
              </Link>
            </ListItem>
          ))}
      </List>
    </Box>
  );

  return (
    <div>
      {['right'].map((anchor) => (
        <React.Fragment key={anchor}>
          <ButtonBase onClick={toggleDrawer(anchor, true)}>
            <Icon icon="bi:list" />
          </ButtonBase>
          <SwipeableDrawer
            anchor={anchor}
            open={state[anchor]}
            onClose={toggleDrawer(anchor, false)}
            onOpen={toggleDrawer(anchor, true)}
          >
            {list(anchor)}
          </SwipeableDrawer>
        </React.Fragment>
      ))}
    </div>
  );
}
