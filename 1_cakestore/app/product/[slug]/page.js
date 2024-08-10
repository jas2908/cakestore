import React from 'react';
import ProductDetail from '@/components/ProductDetails';
import { client } from '@/lib/client';

const fetchProduct = async (slug) => {
    const query = `*[_type == "product" && slug.current == $slug][0]`;
    const product = await client.fetch(query, { slug });
    return product;
};

const fetchAllProducts = async () => {
    const query = '*[_type == "product"]';
    const products = await client.fetch(query);
    return products;
};

const ProductPage = async ({ params }) => {
    const { slug } = params;

    // Fetch product and all products data
    const product = await fetchProduct(slug);
    const products = await fetchAllProducts();

    return (
        <ProductDetail product={product} products={products} />
    );
};

export default ProductPage;
