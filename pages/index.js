import * as React from 'react';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

import Navigation from '../components/Navigation';
import ProductList from '../components/ProductList';
import PRODUCTS from '../data.js';

export default function Index() {
  return (
    <Container maxWidth="sm">
      <Box sx={{ my: 4 }}>
        <Navigation />
        <ProductList products={PRODUCTS} />
      </Box>
    </Container>
  );
}
