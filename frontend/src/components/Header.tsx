'use client';

import { AppBar, Toolbar, Typography, Container, Box } from '@mui/material';
import PeopleAltIcon from '@mui/icons-material/PeopleAlt';

export default function Header() {
  return (
    <AppBar position="static" color="primary" elevation={0}>
      <Container maxWidth="lg">
        <Toolbar disableGutters>
          <PeopleAltIcon sx={{ mr: 2 }} />
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{
              flexGrow: 1,
              fontWeight: 700,
              letterSpacing: '.1rem',
            }}
          >
            USER MANAGEMENT
          </Typography>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
