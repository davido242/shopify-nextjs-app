import * as React from 'react';
import Typography from '@mui/material/Typography';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import ImageListItemBar from '@mui/material/ImageListItemBar';

export default function ProductList({products}){
    return (
        <ImageList cols={5} gap={20}>
            {products.map((product) => (
                <ImageListItem key={product.image}>
                    <Img
                    src={`${product.image}?w=250&fit=crop&auto=format`}
                    srcSet={`${product.image}?w=250&fit=crop&auto=format&dpr=2 2x`}
                    alt={product.name}
                    loading="lazy"
                    />
                    <ImageListItemBar
                    title={product.name}
                    subtitle={<span>Price: {product.price}</span>}
                    position="below"
                    />
                </ImageListItem>
            )
            )}
        </ImageList>
    )
};