import Header from '@/components/Header';
import UserList from '@/components/UserList';
import { Box, Container, Typography } from '@mui/material';

export default function Home() {
  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
      <Header />
      <Box component="main" sx={{ flexGrow: 1, py: 3 }}>
        <Container maxWidth="lg">
          <Typography variant="h4" component="h1" gutterBottom sx={{ mb: 4, fontWeight: 'bold' }}>
            User Directory
          </Typography>
          <UserList />
        </Container>
      </Box>
      <Box component="footer" sx={{ py: 3, bgcolor: 'background.paper' }}>
        <Container maxWidth="lg">
          <Typography variant="body2" color="text.secondary" align="center">
            {new Date().getFullYear()} User Management App
          </Typography>
        </Container>
      </Box>
    </Box>
  );
}
