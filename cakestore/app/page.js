// app/page.js
import React from 'react';
import { client } from '../lib/client';
import { Product, FooterBanner, HeroBanner } from '../components';

// Fetch products
const fetchProducts = async () => {
  const query = '*[_type == "product"]';
  try {
    return await client.fetch(query);
  } catch (error) {
    console.error('Error fetching products:', error);
    return [];
  }
};

// Fetch banner data
const fetchBannerData = async () => {
  const BannerQuery = '*[_type == "banner"]';
  try {
    return await client.fetch(BannerQuery);
  } catch (error) {
    console.error('Error fetching banner data:', error);
    return [];
  }
};

// Define the page component as async
const Home = async () => {
  const [products, bannerData] = await Promise.all([
    fetchProducts(),
    fetchBannerData()
  ]);

  return (
    <>
      <HeroBanner heroBanner={bannerData.length > 0 ? bannerData[0] : null} />
      <div className='products-heading'>
        <h2>Best Selling Products</h2>
        <p>Carrot Cake</p>
      </div>
      <div className='products-container'>
        {products?.map((product) => (
          <Product key={product._id} product={product} />
        ))}
      </div>
      <FooterBanner />
    </>
  );
};

export default Home;
