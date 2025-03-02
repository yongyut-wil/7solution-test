'use client';

import { useEffect, useState } from 'react';
import { Grid, Box, Pagination, CircularProgress, Typography, Container } from '@mui/material';
import { fetchUsers } from '@/services/user.service';
import { RootObject, User } from '@/interfaces/user.interface';
import UserCard from './UserCard';

export default function UserList() {
  const [users, setUsers] = useState<User[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const [page, setPage] = useState<number>(1);
  const [totalPages, setTotalPages] = useState<number>(1);
  const limit = 12;

  useEffect(() => {
    const loadUsers = async () => {
      try {
        setLoading(true);
        const skip = (page - 1) * limit;
        const data = await fetchUsers(limit, skip);
        setUsers(data.users);
        setTotalPages(Math.ceil(data.total / limit));
      } catch (err) {
        setError('Failed to load users. Please try again later.');
        console.error('Error loading users:', err);
      } finally {
        setLoading(false);
      }
    };

    loadUsers();
  }, [page]);

  const handlePageChange = (event: React.ChangeEvent<unknown>, value: number) => {
    setPage(value);
  };

  if (loading && users.length === 0) {
    return (
      <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '50vh' }}>
        <CircularProgress />
      </Box>
    );
  }

  if (error) {
    return (
      <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '50vh' }}>
        <Typography color="error">{error}</Typography>
      </Box>
    );
  }

  return (
    <Container maxWidth="lg">
      <Box sx={{ py: 4 }}>
        <Grid container spacing={3}>
          {users.map((user) => (
            <Grid item key={user.id} xs={12} sm={6} md={4} lg={3}>
              <UserCard user={user} />
            </Grid>
          ))}
        </Grid>
        
        <Box sx={{ display: 'flex', justifyContent: 'center', mt: 4 }}>
          <Pagination 
            count={totalPages} 
            page={page} 
            onChange={handlePageChange} 
            color="primary" 
            size="large"
            disabled={loading}
          />
        </Box>
      </Box>
    </Container>
  );
}
