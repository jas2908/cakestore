'use client';

import React from 'react'
import Link from 'next/link';
import { urlFor } from '../lib/client';

const HeroBanner = ({heroBanner}) => {
  if (!heroBanner) return null;
  return (
    <div className='hero-banner-container' style={{ position: 'relative', overflow: 'hidden' }}>
      <div>
      <p className='beats-solo'>{heroBanner.smallText}</p>
      <h3>{heroBanner.midText}</h3>
      <h1>{heroBanner.largeText1}</h1>
      <h1>{heroBanner.largeText2}</h1>
      <img src={urlFor(heroBanner.image)} alt='cake' className='hero-banner-image'
      style={{
          height: '100%',     // Forces it to match the banner box height perfectly
          width: 'auto',      // Keeps the correct image proportions
          objectFit: 'cover', // Crops perfectly instead of squishing the cake
          position: 'absolute',
          right: 0,           // Pushes it to the right side of the box
          top: 0,
          bottom: 0
        }}
      />

    </div>
      
      <div>
        <Link href={`/product/${heroBanner.product}`}>
        <button type="button">{heroBanner.buttonText}</button>
        </Link>
        <div className='desc'>
          {/* <h5>Description</h5> */}
          <p>{heroBanner.desc}</p>
        </div>
      </div>
    </div>
  )
}

export default HeroBanner
