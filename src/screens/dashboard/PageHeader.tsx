import { Typography, Grid } from "@mui/material";

function PageHeader() {
  return (
    <Grid container alignItems="center">
      <Grid item>
        <div>
          <Typography variant="h3" component="h3" gutterBottom>
            Welcome To TechNeutron!
          </Typography>
          <Typography variant="subtitle2">
            Today is a good day to start work!
          </Typography>
        </div>
      </Grid>
    </Grid>
  );
}

export default PageHeader;
