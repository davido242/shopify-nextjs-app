import * as React from 'react';
import { useRouter } from 'next/router'


import Container from '@mui/material/Container';
import Box from '@mui/material/Box';


import Navigation from '../../components/Navigation';
import BreadcrumbsNavigation from '../../components/BreadcrumbsNavigation';
import ProductList from '../../components/ProductList';
import PRODUCTS from '../../data.js';

export default function CollectionPage() {
    const router = useRouter();
    const { CollectionName} = router.query
    const products = PRODUCTS.filter(product => product.collection === CollectionName);
    return (
        <Box>
            <Navigation />
            <Container maxWidth="lg">
                <BreadcrumbsNavigation collection={CollectionName} />
                    <ProductList products={products} />

            </Container>
        </Box>
    );
}