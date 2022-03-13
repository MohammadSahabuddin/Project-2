import { Button } from '@mui/material';

export const DotButton = ({ selected, onClick }) => (
  <Button
    className={`embla__dot ${selected ? 'is-selected' : ''}`}
    type="button"
    onClick={onClick}
    sx={styles.dot}
  />
);
