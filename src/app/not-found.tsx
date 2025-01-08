'use client';
import { Box, Typography, Button } from '@mui/material';
import { useRouter } from 'next/navigation';

const NotFoundPage = () => {
    const router = useRouter();

  return (
    <Box
      sx={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        textAlign: 'center',
        backgroundColor: '#0B1437',
        color: 'white',
        height:'100vh'
      }}
    >
      <Box>
        <Typography variant="h3" gutterBottom>
          Oops! Page Not Found
        </Typography>
        <Typography variant="body1" gutterBottom>
          It seems like you’re lost in space. Let’s get you back to safety!
        </Typography>
        <Button
          variant="contained"
          color="primary"
          onClick={() => router.push('/')}
          sx={{
            mt: 3,
            backgroundColor: '#FFC107',
            color: '#0B1437',
            '&:hover': { backgroundColor: '#FFB300' },
          }}
        >
          Go Back Home
        </Button>
      </Box>
    </Box   >
  );
};

export default NotFoundPage;
