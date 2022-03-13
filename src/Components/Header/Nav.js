//packages
import {
  Box,
  ButtonBase,
  List,
  ListItem,
  Stack,
  Typography,
} from '@mui/material';
import Link from 'next/link';

//Data
import Navs from 'Data/Header/nav.data';

//Styles
import styles from 'Styles/Header/Nav.style';

const Nav = ({ activePage }) => {
  return (
    <Box>
      <List
        component={Stack}
        direction="row"
        sx={styles.ListItem}
        className="ListItem"
      >
        {Navs &&
          Navs.map((nav, i) => (
            <ListItem key={i}>
              <Link href={nav.url}>
                <a className={activePage === nav.id ? 'active' : ''}>
                  <ButtonBase>
                    <Typography variant="body1" component="p">
                      {nav.name}
                    </Typography>
                  </ButtonBase>
                </a>
              </Link>
            </ListItem>
          ))}
      </List>
    </Box>
  );
};

export default Nav;
