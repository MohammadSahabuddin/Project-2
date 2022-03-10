//Packages
import { Box, List, ListItem, Stack } from '@mui/material';
import Link from 'next/link';
import { Icon } from '@iconify/react';

//Data
import IconData from 'Data/Footer/Icons.data';

const Icons = () => {
  return (
    <List component={Stack} direction="row">
      {IconData &&
        IconData.map((icon, i) => (
          <ListItem key={i}>
            <Link href={icon.link} passHref>
              <a>
                <Icon icon={icon.name} />
              </a>
            </Link>
          </ListItem>
        ))}
    </List>
  );
};

export default Icons;
