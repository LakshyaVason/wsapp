import React from 'react'

const Homepage = () => {
  return (
    <div>Homepage</div>
  )
}

export default Homepage

// import React from 'react';
// import AppBar from '@mui/material/AppBar';
// import Toolbar from '@mui/material/Toolbar';
// import Typography from '@mui/material/Typography';
// import Button from '@mui/material/Button';
// import Box from '@mui/material/Box';
// import Container from '@mui/material/Container';
// import Paper from '@mui/material/Paper';
// import Grid from '@mui/material/Grid';
// import { styled } from '@mui/system';
// import {
//   Code,
//   Visibility,
//   Speed,
//   Devices,
//   Public,
//   Language,
// } from '@mui/icons-material';

// const StyledAppBar = styled(AppBar)(({ theme }) => ({
//   backgroundColor: 'black',
// }));

// const StyledToolbar = styled(Toolbar)(({ theme }) => ({
//   justifyContent: 'space-between',
// }));

// const Feature = ({ icon, title, description }) => (
//   <Grid item xs={12} sm={6} md={4}>
//     <Paper elevation={3} style={{ height: '100%', padding: '1rem' }}>
//       <Box display="flex" justifyContent="center" mb={2}>
//         {icon}
//       </Box>
//       <Typography variant="h6" gutterBottom>
//         {title}
//       </Typography>
//       <Typography>{description}</Typography>
//     </Paper>
//   </Grid>
// );

// const Homepage = () => {
//   return (
//     <Box>
//       <StyledAppBar position="static">
//         <StyledToolbar>
//           <Typography variant="h6">WebScraper Pro</Typography>
//           <Button variant="outlined" color="inherit" onClick={() => alert('Getting started!')}>
//             Get Started
//           </Button>
//         </StyledToolbar>
//       </StyledAppBar>
//       <Container maxWidth="lg">
//         <Box my={4}>
//           <Typography variant="h4" align="center" gutterBottom>
//             Welcome to WebScraper Pro!
//           </Typography>
//           <Typography variant="subtitle1" align="center" gutterBottom>
//             Your go-to solution for efficient and hassle-free web scraping
//           </Typography>
//         </Box>
//         <Grid container spacing={4}>
//           <Feature
//             icon={<Code fontSize="large" />}
//             title="Feature 1"
//             description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero."
//           />
//           <Feature
//             icon={<Visibility fontSize="large" />}
//             title="Feature 2"
//             description="Sed cursus ante dapibus diam. Sed nisi. Nulla quis sem at nibh elementum imperdiet."
//           />
//           <Feature
//             icon={<Speed fontSize="large" />}
//             title="Feature 3"
//             description="Duis sagittis ipsum. Praesent mauris. Fusce nec tellus sed augue semper porta."
//           />
//           <Feature
//             icon={<Devices fontSize="large" />}
//             title="Feature 4"
//             description="Morbi lectus risus, iaculis vel, suscipit quis, luctus non, massa. Fusce ac turpis quis."
//           />
//           <Feature
//             icon={<Public fontSize="large" />}
//             title="Feature 5"
//             description="Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos."
//           />
//           <Feature
//             icon={<Language fontSize="large" />}
//             title="Feature 6"
//             description="Sed dignissim lacinia nunc. Curabitur tortor. Pellentesque nibh. Aenean quam."
//           />
//         </Grid>
//       </Container>
//       <Box mt={5} py={3} bgcolor="black">
//         <Typography variant="body2" color="text.secondary" align="center">
//           © 2023 WebScraper Pro. All rights reserved.
//         </Typography>
//       </Box>
//     </Box>
//   );
// };

// export default Homepage;

