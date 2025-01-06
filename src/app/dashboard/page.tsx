import { Grid, Card, CardContent, Typography } from '@mui/material';

export default function DashboardPage() {
  return (
    <Grid container spacing={3}>
      <Grid item xs={12} sm={6} md={4}>
        <Card>
          <CardContent>
            <Typography variant="h5">Card 1</Typography>
            <Typography>Details about Card 1</Typography>
          </CardContent>
        </Card>
      </Grid>
      <Grid item xs={12} sm={6} md={4}>
        <Card>
          <CardContent>
            <Typography variant="h5">Card 2</Typography>
            <Typography>Details about Card 2</Typography>
          </CardContent>
        </Card>
      </Grid>
      <Grid item xs={12} sm={6} md={4}>
        <Card>
          <CardContent>
            <Typography variant="h5">Card 3</Typography>
            <Typography>Details about Card 3</Typography>
          </CardContent>
        </Card>
      </Grid>
    </Grid>
  );
}
