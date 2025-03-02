'use client';

import { User } from '@/interfaces/user.interface';
import { 
  Card, 
  CardContent, 
  CardMedia, 
  Typography, 
  Box, 
  Chip,
  CardActions,
  Button,
  Collapse,
  Divider,
  Grid,
  Avatar
} from '@mui/material';
import { useState } from 'react';
import EmailIcon from '@mui/icons-material/Email';
import PhoneIcon from '@mui/icons-material/Phone';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import WorkIcon from '@mui/icons-material/Work';
import SchoolIcon from '@mui/icons-material/School';

interface UserCardProps {
  user: User;
}

export default function UserCard({ user }: UserCardProps) {
  const [expanded, setExpanded] = useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <Card sx={{ 
      maxWidth: 345, 
      height: expanded ? 'auto' : 380, 
      display: 'flex', 
      flexDirection: 'column',
      transition: 'height 0.3s ease',
      boxShadow: 3,
      '&:hover': {
        boxShadow: 6,
      },
    }}>
      <CardMedia
        component="img"
        height="140"
        image={user.image}
        alt={`${user.firstName} ${user.lastName}`}
        sx={{ objectFit: 'cover' }}
      />
      <CardContent sx={{ flexGrow: 1 }}>
        <Typography gutterBottom variant="h5" component="div">
          {user.firstName} {user.lastName}
        </Typography>
        <Box sx={{ display: 'flex', alignItems: 'center', mb: 1 }}>
          <EmailIcon fontSize="small" sx={{ mr: 1, color: 'primary.main' }} />
          <Typography variant="body2" color="text.secondary">
            {user.email}
          </Typography>
        </Box>
        <Box sx={{ display: 'flex', alignItems: 'center', mb: 1 }}>
          <PhoneIcon fontSize="small" sx={{ mr: 1, color: 'primary.main' }} />
          <Typography variant="body2" color="text.secondary">
            {user.phone}
          </Typography>
        </Box>
        <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.5, mt: 2 }}>
          <Chip 
            label={`Age: ${user.age}`} 
            size="small" 
            variant="outlined" 
          />
          <Chip 
            label={user.gender} 
            size="small" 
            color="primary" 
            variant="outlined" 
          />
        </Box>
      </CardContent>
      <CardActions>
        <Button 
          size="small" 
          onClick={handleExpandClick}
          sx={{ marginLeft: 'auto' }}
        >
          {expanded ? 'Show Less' : 'Show More'}
        </Button>
      </CardActions>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
          <Divider sx={{ mb: 2 }} />
          <Typography variant="h6" gutterBottom>
            Personal Information
          </Typography>
          <Grid container spacing={1}>
            <Grid item xs={6}>
              <Typography variant="body2" color="text.secondary">
                Username: {user.username}
              </Typography>
            </Grid>
            <Grid item xs={6}>
              <Typography variant="body2" color="text.secondary">
                Birth Date: {user.birthDate}
              </Typography>
            </Grid>
            <Grid item xs={6}>
              <Typography variant="body2" color="text.secondary">
                Blood Group: {user.bloodGroup}
              </Typography>
            </Grid>
            <Grid item xs={6}>
              <Typography variant="body2" color="text.secondary">
                Height: {user.height} cm
              </Typography>
            </Grid>
            <Grid item xs={6}>
              <Typography variant="body2" color="text.secondary">
                Weight: {user.weight} kg
              </Typography>
            </Grid>
            <Grid item xs={6}>
              <Typography variant="body2" color="text.secondary">
                Eye Color: {user.eyeColor}
              </Typography>
            </Grid>
          </Grid>

          <Divider sx={{ my: 2 }} />
          <Box sx={{ display: 'flex', alignItems: 'center', mb: 1 }}>
            <LocationOnIcon fontSize="small" sx={{ mr: 1, color: 'primary.main' }} />
            <Typography variant="body2" color="text.secondary">
              {user.address.address}, {user.address.city}, {user.address.state} {user.address.postalCode}
            </Typography>
          </Box>

          <Divider sx={{ my: 2 }} />
          <Box sx={{ display: 'flex', alignItems: 'center', mb: 1 }}>
            <WorkIcon fontSize="small" sx={{ mr: 1, color: 'primary.main' }} />
            <Typography variant="body2" color="text.secondary">
              {user.company.name} - {user.company.title}
            </Typography>
          </Box>
          <Typography variant="body2" color="text.secondary">
            Department: {user.company.department}
          </Typography>

          <Divider sx={{ my: 2 }} />
          <Box sx={{ display: 'flex', alignItems: 'center', mb: 1 }}>
            <SchoolIcon fontSize="small" sx={{ mr: 1, color: 'primary.main' }} />
            <Typography variant="body2" color="text.secondary">
              {user.university}
            </Typography>
          </Box>
        </CardContent>
      </Collapse>
    </Card>
  );
}
