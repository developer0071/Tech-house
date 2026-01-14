const PRODUCTS = {
  'cleaning-robot-vacuum': {
    id: 'cleaning-robot-vacuum',
    name: 'UltraClean Vacuum Cleaner',
    category: 'cleaning',
    price: 299.99,
    image: 'https://i.ytimg.com/vi/puDGvKJw_Rw/maxresdefault.jpg',
    additionalimgs: [
      "https://avatars.mds.yandex.net/i?id=bb578e7d19450cfdcae1f2cb305c7a03915fa7d4-5234690-images-thumbs&n=13",
      "https://avatars.mds.yandex.net/i?id=1e8d292497a08ebd0f67c3e7d664d62102d24353-10149683-images-thumbs&n=13",
      "https://avatars.mds.yandex.net/i?id=93eb225701c766601c9a9d839e881b8648ec6b73-13234616-images-thumbs&n=13",
      "https://avatars.mds.yandex.net/i?id=910a3aa80ceac0b70c3aa6cffddb1132f3ce26c0-5277860-images-thumbs&n=13",
      "https://avatars.mds.yandex.net/i?id=6840c285bd31b6eae7c1836dfb39e23fb6b1f7f0-12528722-images-thumbs&n=13",
      "https://avatars.mds.yandex.net/i?id=5b1bb39ae921d66dada922694aafa1b548c22f26-9181220-images-thumbs&n=13"
    ],
    rating: 5,
    reviews: 512,
    badge: 'Best Seller',
    inStock: true,
    description: 'Professional-grade vacuum cleaner with powerful suction and HEPA filtration. Perfect for all floor types and pet hair removal.',
    features: [
      'Powerful 2000W Motor',
      'HEPA Filtration System',
      'Multiple Attachments',
      'Large Dust Capacity',
      'Cord Storage System',
      'Lightweight Design'
    ],
    specifications: {
      'Power': '2000W',
      'Dust Capacity': '2.5L',
      'Cord Length': '8m',
      'Weight': '4.5kg',
      'Warranty': '2 Years',
      'Noise Level': '75dB'
    },
    shipping: 'Free delivery on orders over £50',
    returns: '30-day money-back guarantee'
  },

  'cleaning-steam-mop': {
    id: 'cleaning-steam-mop',
    name: 'Professional Steam Mop',
    category: 'cleaning',
    price: 149.99,
    image: 'https://sc04.alicdn.com/kf/H3d64efa5483249d4b83fa0e55df0b00f1/Portable-Steam-Fabric-Cleaner-for-Upholstery-Carpet-Sofa-with-High-Temperature-Sterilization.png',
    additionalimgs: [
      "https://avatars.mds.yandex.net/i?id=c338b2b91230dc5d24c2fe9f9db7700f6493ebd7-5433932-images-thumbs&n=13",
      "https://avatars.mds.yandex.net/i?id=6b5774d55611c4aeaa50bb74031960f2024c20c6-10503706-images-thumbs&n=13",
      "https://avatars.mds.yandex.net/i?id=eba87367be38f61d6994285c911f0b904e5681bc-5386849-images-thumbs&n=13",
      "https://avatars.mds.yandex.net/i?id=188242ebc98d41a00ca912f90b77eac38eeba76c-5235677-images-thumbs&n=13",
      "https://avatars.mds.yandex.net/i?id=898dc11fbc76c66dbe0a6ab072c9065f69bd7a50-5672616-images-thumbs&n=13",
      "https://sc04.alicdn.com/kf/H3d64efa5483249d4b83fa0e55df0b00f1/Portable-Steam-Fabric-Cleaner-for-Upholstery-Carpet-Sofa-with-High-Temperature-Sterilization.png"
    ],
    rating: 4,
    reviews: 218,
    inStock: true,
    description: 'Professional-grade steam mop that sanitizes floors without chemicals. Kills 99.9% of bacteria with natural steam power.',
    features: [
      'Chemical-Free Cleaning', 
      'Quick Heat-Up', 
      'Adjustable Steam', 
      '360° Swivel Head', 
      'Large Water Tank', 
      'Multiple Steam Settings'
    ],
    specifications: {
      'Heat-up Time': '30 seconds',
      'Water Tank': '450ml',
      'Steam Time': '20 minutes',
      'Weight': '2.8kg',
      'Warranty': '1 Year',
      'Cable Length': '6m'
    },
    shipping: 'Free delivery on orders over £50',
    returns: '30-day money-back guarantee'
  },

  'cooling-smart-ac': {
    id: 'cooling-smart-ac',
    name: 'ArcticBreeze Window AC',
    category: 'cooling',
    price: 415.00,
    image: 'https://avatars.mds.yandex.net/i?id=4e9d4c70262ab18ed1d960d04bb93d8a3605d78d-2359126-images-thumbs&n=13',
    additionalimgs: [
      "https://avatars.mds.yandex.net/i?id=05e556de3073ba8a91d713ae4a199692fbd7b60f-16186736-images-thumbs&n=13",
      "https://avatars.mds.yandex.net/i?id=f44bdd160ade71603f3ae321f3486440ff878466-6454405-images-thumbs&n=13",
      "https://avatars.mds.yandex.net/i?id=8ad4cf9ff2ef46be0101937b8c1dc88ff035a0d9-11959565-images-thumbs&n=13",
      "https://avatars.mds.yandex.net/i?id=d6085fedf1e082ad634314c7b4019262b38faa0d-9181195-images-thumbs&n=13",
      "https://avatars.mds.yandex.net/i?id=8174015ba3a09a8903314a17b7fc93afec07fe7a-4874404-images-thumbs&n=13",
      "https://avatars.mds.yandex.net/i?id=8a224aee30ed6ac08eb51354d08cde3ef1bc3ab5-5284840-images-thumbs&n=13"
    ],
    rating: 5,
    reviews: 121,
    badge: 'New Arrival',
    inStock: true,
    description: 'Energy-efficient smart AC with WiFi control and voice assistant compatibility. Cools rooms up to 550 sq ft with whisper-quiet operation.',
    features: [
      'WiFi & App Control',
      '12000 BTU Cooling Power',
      'Energy Star Certified',
      'Voice Assistant Compatible',
      'Sleep Mode & Timer',
      'Easy Installation Kit'
    ],
    specifications: {
      'BTU': '12000',
      'Coverage': '550 sq ft',
      'Energy Rating': 'A++',
      'Noise Level': '52dB',
      'Warranty': '3 Years',
      'Weight': '28kg'
    },
    shipping: 'Free delivery and installation',
    returns: '14-day return policy'
  },

  'cooling-tower-fan': {
    id: 'cooling-tower-fan',
    name: 'TowerFan Pro Oscillating',
    category: 'cooling',
    price: 89.99,
    image: 'https://avatars.mds.yandex.net/i?id=f4b72d2c84344db95843baf720cecf0cb55fca30-12813659-images-thumbs&n=13',
    additionalimgs: [
      "https://avatars.mds.yandex.net/i?id=7f6e5d4c3b2a1f0e9d8c7b6a5f4e3d2c1b0a9f8-images-thumbs&n=13",
      "https://avatars.mds.yandex.net/i?id=6e5d4c3b2a1f0e9d8c7b6a5f4e3d2c1b0a9f8e7-images-thumbs&n=13",
      "https://avatars.mds.yandex.net/i?id=5d4c3b2a1f0e9d8c7b6a5f4e3d2c1b0a9f8e7d6-images-thumbs&n=13",
      "https://avatars.mds.yandex.net/i?id=4c3b2a1f0e9d8c7b6a5f4e3d2c1b0a9f8e7d6c5-images-thumbs&n=13",
      "https://avatars.mds.yandex.net/i?id=3b2a1f0e9d8c7b6a5f4e3d2c1b0a9f8e7d6c5b4-images-thumbs&n=13",
      "https://avatars.mds.yandex.net/i?id=2a1f0e9d8c7b6a5f4e3d2c1b0a9f8e7d6c5b4a3-images-thumbs&n=13"
    ],
    rating: 4,
    reviews: 178,
    inStock: false,
    description: 'Sleek tower fan with remote control and multiple speed settings. Perfect for any room with its space-saving vertical design.',
    features: [
      '3 Speed Settings',
      'Remote Control Included',
      'Oscillating Feature',
      'Timer Function (up to 8hrs)',
      'Ultra-Quiet Operation',
      'Slim Space-Saving Design'
    ],
    specifications: {
      'Height': '106cm',
      'Speeds': '3',
      'Timer': '8 hours',
      'Noise Level': '45dB',
      'Warranty': '1 Year',
      'Weight': '3.2kg'
    },
    shipping: 'Currently out of stock',
    returns: '30-day money-back guarantee'
  },

  'kitchen-air-fryer': {
    id: 'kitchen-air-fryer',
    name: 'Digital Air Fryer XL',
    category: 'kitchen',
    price: 129.99,
    image: 'https://avatars.mds.yandex.net/i?id=c052cda0c5c9ede5100ace0872b7a6fa3a33882f-8428027-images-thumbs&n=13',
    additionalimgs: [
      "https://avatars.mds.yandex.net/i?id=1f0e9d8c7b6a5f4e3d2c1b0a9f8e7d6c5b4a3f2-images-thumbs&n=13",
      "https://avatars.mds.yandex.net/i?id=0e9d8c7b6a5f4e3d2c1b0a9f8e7d6c5b4a3f2e1-images-thumbs&n=13",
      "https://avatars.mds.yandex.net/i?id=9d8c7b6a5f4e3d2c1b0a9f8e7d6c5b4a3f2e1d0-images-thumbs&n=13",
      "https://avatars.mds.yandex.net/i?id=8c7b6a5f4e3d2c1b0a9f8e7d6c5b4a3f2e1d0c9-images-thumbs&n=13",
      "https://avatars.mds.yandex.net/i?id=7b6a5f4e3d2c1b0a9f8e7d6c5b4a3f2e1d0c9b8-images-thumbs&n=13",
      "https://avatars.mds.yandex.net/i?id=6a5f4e3d2c1b0a9f8e7d6c5b4a3f2e1d0c9b8a7-images-thumbs&n=13"
    ],
    rating: 4,
    reviews: 387,
    inStock: true,
    description: 'Multi-function air fryer with digital controls. Cook healthier meals with 80% less fat than traditional frying while maintaining that crispy texture.',
    features: [
      'Digital Touch Screen',
      '8 Preset Cooking Programs',
      'Large 5.5L Capacity',
      '80% Less Fat',
      'Dishwasher Safe Parts',
      'Auto Shut-Off Feature'
    ],
    specifications: {
      'Capacity': '5.5L',
      'Power': '1700W',
      'Temperature Range': '80-200°C',
      'Programs': '8',
      'Warranty': '2 Years',
      'Weight': '5.8kg'
    },
    shipping: 'Free delivery on orders over £50',
    returns: '30-day money-back guarantee'
  },

  'kitchen-blender': {
    id: 'kitchen-blender',
    name: 'MultiBlend Food Processor',
    category: 'kitchen',
    price: 199.99,
    image: 'https://avatars.mds.yandex.net/i?id=01856ad45cfe3e8bc039844441e5dd61ba69c775-10696481-images-thumbs&n=13',
    additionalimgs: [
      "https://avatars.mds.yandex.net/i?id=5f4e3d2c1b0a9f8e7d6c5b4a3f2e1d0c9b8a7f6-images-thumbs&n=13",
      "https://avatars.mds.yandex.net/i?id=4e3d2c1b0a9f8e7d6c5b4a3f2e1d0c9b8a7f6e5-images-thumbs&n=13",
      "https://avatars.mds.yandex.net/i?id=3d2c1b0a9f8e7d6c5b4a3f2e1d0c9b8a7f6e5d4-images-thumbs&n=13",
      "https://avatars.mds.yandex.net/i?id=2c1b0a9f8e7d6c5b4a3f2e1d0c9b8a7f6e5d4c3-images-thumbs&n=13",
      "https://avatars.mds.yandex.net/i?id=1b0a9f8e7d6c5b4a3f2e1d0c9b8a7f6e5d4c3b2-images-thumbs&n=13",
      "https://avatars.mds.yandex.net/i?id=0a9f8e7d6c5b4a3f2e1d0c9b8a7f6e5d4c3b2a1-images-thumbs&n=13"
    ],
    rating: 4,
    reviews: 289,
    inStock: false,
    description: 'Professional-grade blender with 1500W motor. Perfect for smoothies, soups, nut butters, and crushing ice with ease.',
    features: [
      '1500W Powerful Motor',
      'Variable Speed Control',
      '2L BPA-Free Container',
      'Pulse Function',
      'Self-Cleaning',
      'Stainless Steel Blades'
    ],
    specifications: {
      'Power': '1500W',
      'Capacity': '2L',
      'Speeds': 'Variable',
      'Material': 'BPA-Free',
      'Warranty': '2 Years',
      'Weight': '4.2kg'
    },
    shipping: 'Currently out of stock',
    returns: '30-day money-back guarantee'
  },

  'laundry-iron': {
    id: 'laundry-iron',
    name: 'StainMaster Iron & Steamer',
    category: 'laundry',
    price: 79.99,
    image: 'https://avatars.mds.yandex.net/i?id=adc44e9e4c6a54b82298d6a3536a37ef012bf958-4570267-images-thumbs&n=13',
    additionalimgs: [
      "https://avatars.mds.yandex.net/i?id=9f8e7d6c5b4a3f2e1d0c9b8a7f6e5d4c3b2a1f0-images-thumbs&n=13",
      "https://avatars.mds.yandex.net/i?id=8e7d6c5b4a3f2e1d0c9b8a7f6e5d4c3b2a1f0e9-images-thumbs&n=13",
      "https://avatars.mds.yandex.net/i?id=7d6c5b4a3f2e1d0c9b8a7f6e5d4c3b2a1f0e9d8-images-thumbs&n=13",
      "https://avatars.mds.yandex.net/i?id=6c5b4a3f2e1d0c9b8a7f6e5d4c3b2a1f0e9d8c7-images-thumbs&n=13",
      "https://avatars.mds.yandex.net/i?id=5b4a3f2e1d0c9b8a7f6e5d4c3b2a1f0e9d8c7b6-images-thumbs&n=13",
      "https://avatars.mds.yandex.net/i?id=4a3f2e1d0c9b8a7f6e5d4c3b2a1f0e9d8c7b6a5-images-thumbs&n=13"
    ],
    rating: 4,
    reviews: 156,
    badge: 'Best Value',
    inStock: true,
    description: 'Professional steam iron with ceramic soleplate for wrinkle-free clothes. Powerful steam burst removes even the toughest creases.',
    features: [
      'Ceramic Soleplate',
      'Powerful Steam Burst',
      'Anti-Drip System',
      'Self-Cleaning Function',
      'Variable Temperature Control',
      '360° Swivel Cord'
    ],
    specifications: {
      'Power': '2400W',
      'Steam Output': '50g/min',
      'Water Tank': '300ml',
      'Soleplate': 'Ceramic',
      'Warranty': '1 Year',
      'Weight': '1.2kg'
    },
    shipping: 'Free delivery on orders over £50',
    returns: '30-day money-back guarantee'
  },

  'laundry-washer': {
    id: 'laundry-washer',
    name: 'PureWash Washing Machine',
    category: 'laundry',
    price: 449.99,
    image: 'https://avatars.mds.yandex.net/i?id=f879a497052bc13064c1a89feb4ed4ba08323a4d-5210052-images-thumbs&n=13',
    additionalimgs: [
      "https://avatars.mds.yandex.net/i?id=3f2e1d0c9b8a7f6e5d4c3b2a1f0e9d8c7b6a5f4-images-thumbs&n=13",
      "https://avatars.mds.yandex.net/i?id=2e1d0c9b8a7f6e5d4c3b2a1f0e9d8c7b6a5f4e3-images-thumbs&n=13",
      "https://avatars.mds.yandex.net/i?id=1d0c9b8a7f6e5d4c3b2a1f0e9d8c7b6a5f4e3d2-images-thumbs&n=13",
      "https://avatars.mds.yandex.net/i?id=0c9b8a7f6e5d4c3b2a1f0e9d8c7b6a5f4e3d2c1-images-thumbs&n=13",
      "https://avatars.mds.yandex.net/i?id=9b8a7f6e5d4c3b2a1f0e9d8c7b6a5f4e3d2c1b0-images-thumbs&n=13",
      "https://avatars.mds.yandex.net/i?id=8a7f6e5d4c3b2a1f0e9d8c7b6a5f4e3d2c1b0a9-images-thumbs&n=13"
    ],
    rating: 5,
    reviews: 892,
    inStock: false,
    description: 'Energy-efficient washing machine with multiple wash programs and quick wash feature. Large capacity perfect for families.',
    features: [
      'Energy Star Certified',
      '15 Wash Programs',
      'Quick Wash (15 min)',
      'Large 8kg Capacity',
      'Quiet Operation',
      'Delay Start Timer'
    ],
    specifications: {
      'Capacity': '8kg',
      'Energy Rating': 'A+++',
      'Spin Speed': '1400 RPM',
      'Programs': '15',
      'Warranty': '2 Years',
      'Noise Level': '54dB'
    },
    shipping: 'Free delivery and installation',
    returns: '14-day return policy'
  }
};

const CATEGORIES = {
  kitchen: 'Kitchen',
  cleaning: 'Cleaning',
  cooling: 'Cooling',
  laundry: 'Laundry'
};

if (typeof module !== 'undefined' && module.exports) {
  module.exports = { PRODUCTS, CATEGORIES };
}

function loadProductPage() {
  const urlParams = new URLSearchParams(window.location.search);
  const productId = urlParams.get('product');
  
  if (!productId || !PRODUCTS[productId]) {
    document.querySelector('main').innerHTML = `
      <div style="text-align: center; padding: 100px 20px;">
        <h2 style="color: #111827; margin-bottom: 10px;">Product Not Found</h2>
        <p style="color: #6b7280;">The product you're looking for doesn't exist.</p>
        <a href="all products.html" style="display: inline-block; margin-top: 20px; padding: 12px 24px; background: #111827; color: white; text-decoration: none; border-radius: 8px;">View All Products</a>
      </div>
    `;
    return;
  }

  const product = PRODUCTS[productId];
  const stars = generateStars(product.rating);

  let galleryHtml = '';
  if (product.additionalimgs && product.additionalimgs.length > 0) {
    galleryHtml = `
      <div class="product-gallery">
        ${product.additionalimgs.map(imgUrl => `
          <div class="gallery-item" onclick="changeMainImage(this, '${imgUrl}')">
            <img src="${imgUrl}" alt="Product thumbnail">
          </div>
        `).join('')}
      </div>
    `;
  }

  let specsHtml = '';
  if (product.specifications) {
    specsHtml = `
      <div style="background: #f9fafb; border-radius: 12px; padding: 25px; margin-top: 30px;">
        <h3 style="font-size: 1.3rem; color: #111827; margin: 0 0 20px 0; font-weight: 600;">Technical Specifications</h3>
        <div class="specs-grid">
          ${Object.entries(product.specifications).map(([key, value]) => `
            <div style="display: flex; justify-content: space-between; padding: 12px; background: white; border-radius: 8px;">
              <span style="color: #6b7280; font-weight: 500;">${key}:</span>
              <span style="color: #111827; font-weight: 600;">${value}</span>
            </div>
          `).join('')}
        </div>
      </div>
    `;
  }

  const deliveryHtml = `
    <div style="margin-top: 30px; display: grid; gap: 15px;">
      <div style="display: flex; align-items: start; gap: 12px; padding: 15px; background: #f0fdf4; border-radius: 10px; border-left: 4px solid #10b981;">
        <svg style="min-width: 24px; margin-top: 2px;" width="24" height="24" fill="none" stroke="#10b981" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
          <circle cx="8" cy="18" r="2"/><circle cx="18" cy="18" r="2"/>
          <path d="M1 1h4l1.68 8.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"/>
        </svg>
        <div>
          <div style="font-weight: 600; color: #111827; margin-bottom: 3px;">Delivery</div>
          <div style="color: #059669; font-size: 0.9rem;">${product.shipping}</div>
        </div>
      </div>
      <div style="display: flex; align-items: start; gap: 12px; padding: 15px; background: #eff6ff; border-radius: 10px; border-left: 4px solid #3b82f6;">
        <svg style="min-width: 24px; margin-top: 2px;" width="24" height="24" fill="none" stroke="#3b82f6" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
          <path d="M9 14l-5-5 5-5M20 20v-7a4 4 0 0 0-4-4H4"/>
        </svg>
        <div>
          <div style="font-weight: 600; color: #111827; margin-bottom: 3px;">Returns</div>
          <div style="color: #2563eb; font-size: 0.9rem;">${product.returns}</div>
        </div>
      </div>
    </div>
  `;

  const styleTag = document.createElement('style');
  styleTag.innerHTML = `
    * {
      box-sizing: border-box;
    }
    
    .product-info-grid-container {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 50px;
      padding: 40px 20px;
      max-width: 1400px;
      margin: 0 auto;
    }
    
    .product-visual {
      width: 100%;
    }
    

    .product-visual {
      width: 100%;
      display: flex;
      flex-direction: column;
      gap: 16px;
    }
    .main-image-wrapper {
      width: 100%;
      height: 450px; /* Forces the box to be large */
      border-radius: 16px;
      overflow: hidden;
      border: 1px solid #e5e7eb;
      background: #fff;
      display: flex;
      align-items: center;
      justify-content: center;
    }

    #main-product-img {
      width: 100%;
      height: 100%;
      object-fit: contain; 
      background-color: #ffffff;
      display: block;
      transition: transform 0.3s ease;
    }

    .product-gallery {
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      gap: 12px;
      margin-top: 16px;
      width: 100%;
    }
        
    .gallery-item {
      position: relative;
      width: 100%;
      padding-bottom: 100%;
      border-radius: 10px;
      overflow: hidden;
      cursor: pointer;
      border: 2px solid #e5e7eb;
      transition: all 0.3s;
      box-shadow: 0 2px 4px rgba(0,0,0,0.05);
    }
    
    .gallery-item:hover {
      border-color: #111827;
      transform: scale(1.05);
      box-shadow: 0 4px 12px rgba(0,0,0,0.15);
    }
    
    .gallery-item img {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      object-fit: cover;
      display: block;
    }
    
    .specs-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
      gap: 15px;
    }
    
    .add-btn,
    .view-cart-btn {
      width: 100%;
      max-width: 100%; 
      padding: 18px;
      border: none;
      border-radius: 10px;
      font-weight: 700;
      font-size: 1.05rem;
      cursor: pointer;
      transition: all 0.3s;
      box-shadow: 0 4px 12px rgba(17, 24, 39, 0.3);
      display: block;
      box-sizing: border-box;
    }

    .add-btn:not([disabled]) {
      background: linear-gradient(135deg, #111827 0%, #1f2937 100%);
      color: white;
    }

    .add-btn:not([disabled]):hover {
      transform: translateY(-2px);
      box-shadow: 0 6px 16px rgba(17, 24, 39, 0.4);
    }

    .view-cart-btn {
      background: linear-gradient(135deg, #f3f4f6 0%, #ffffff 100%);
      color: #111827;
    }

    .view-cart-btn:hover {
      transform: translateY(-2px);
      box-shadow: 0 6px 16px rgba(17, 24, 39, 0.4);
    }

    .add-btn[disabled] {
      background: #9ca3af;
      cursor: not-allowed;
      box-shadow: none;
    }
    
    @media (max-width: 1024px) {
      .product-info-grid-container {
        gap: 40px;
        padding: 30px 20px;
      }
      .main-product-img-container {
        height: 400px;
        padding: 25px;
      }
    }
    
    @media (max-width: 850px) {
      .product-info-grid-container {
        grid-template-columns: 1fr;
        gap: 30px;
        padding: 20px 15px;
      }
      .main-product-img-container {
        height: 350px;
      }
      .product-title {
        font-size: 1.8rem !important;
      }
    }
    
    @media (max-width: 600px) {
      .product-info-grid-container {
        padding: 15px 10px;
        gap: 20px;
      }
      .main-product-img-container {
        height: 280px;
        padding: 20px;
      }
      .product-gallery {
        grid-template-columns: repeat(3, 1fr);
        gap: 8px;
        margin-top: 12px;
      }
      .product-title {
        font-size: 1.5rem !important;
      }
      .specs-grid {
        grid-template-columns: 1fr !important;
      }
    }
    
    @media (max-width: 480px) {
      .product-info-grid-container {
        padding: 10px 8px;
      }
      .main-product-img-container {
        height: 250px;
        padding: 15px;
        border-radius: 12px;
      }
      .product-gallery {
        grid-template-columns: repeat(3, 1fr);
        gap: 6px;
      }
      .gallery-item {
        border-radius: 8px;
        border-width: 1.5px;
      }
      .product-title {
        font-size: 1.3rem !important;
      }
      .add-btn, 
      .view-cart-btn {
        padding: 15px;
        font-size: 1rem;
      }
    }

    .main-image-wrapper {
      width: 100%;
      height: 450px;
      border-radius: 16px;
      overflow: hidden;
      background: #fff;
    }

    #main-product-img {
      width: 100%;
      height: 100%;
      object-fit: cover; 
      object-position: center;
      display: block;
      transition: transform 0.3s ease;
    }

    .product-gallery {
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      gap: 12px;
      margin-top: 16px;
    }
    @media (max-width: 380px) {
      .main-product-img-container {
        height: 220px;
        padding: 12px;
      }
      .product-gallery {
        grid-template-columns: repeat(2, 1fr);
      }
    }
  `;
  document.head.appendChild(styleTag);
  
  document.querySelector('main').innerHTML = `
  <div class="product-info">
    <div class="product-info-grid-container">
      <div class="product-visual">
        <div class="main-image-wrapper">
          <img id="main-product-img" src="${product.image}" alt="${product.name}">
        </div>
        ${galleryHtml}
      </div>
      
      <div class="product-details">
          ${product.badge ? `<span style="display: inline-block; background: linear-gradient(135deg, #fbbf24 0%, #f59e0b 100%); color: #78350f; padding: 6px 14px; border-radius: 6px; font-size: 12px; font-weight: 700; margin-bottom: 12px; text-transform: uppercase; letter-spacing: 0.5px; box-shadow: 0 2px 4px rgba(251, 191, 36, 0.3);">${product.badge}</span>` : ''}
          ${!product.inStock && !product.badge ? '<span style="display: inline-block; background: #6b7280; color: white; padding: 6px 14px; border-radius: 6px; font-size: 12px; font-weight: 700; margin-bottom: 12px; text-transform: uppercase; letter-spacing: 0.5px;">Out of Stock</span>' : ''}
          
          <h1 class="product-title" style="font-size: 2.5rem; margin: 0 0 15px 0; color: #111827; font-weight: 700; line-height: 1.2;">${product.name}</h1>
          
          <div class="product-rating" style="display: flex; align-items: center; gap: 8px; margin-bottom: 20px;">
            <div style="color: #fbbf24; display: flex; gap: 2px;">${stars}</div>
            <span style="color: #6b7280; font-size: 0.95rem; font-weight: 500;">${product.rating}.0</span>
            <span style="color: #d1d5db;">|</span>
            <a href="#reviews" style="color: #3b82f6; text-decoration: none; font-size: 0.95rem; font-weight: 500;">${product.reviews} reviews</a>
          </div>
          
          <div class="product-price" style="font-size: 2.2rem; font-weight: 800; color: #111827; margin-bottom: 25px; display: flex; align-items: baseline; gap: 10px; flex-wrap: wrap;">
            £${product.price.toFixed(2)}
            <span style="font-size: 1rem; color: #6b7280; font-weight: 400; text-decoration: line-through;">£${(product.price * 1.25).toFixed(2)}</span>
            <span style="font-size: 0.9rem; color: #10b981; font-weight: 600; background: #d1fae5; padding: 4px 10px; border-radius: 6px;">Save ${Math.round(20)}%</span>
          </div>
          
          <p class="product-desc" style="line-height: 1.7; color: #4b5563; margin-bottom: 30px; font-size: 1.05rem;">${product.description}</p>
          
          <div class="features" style="margin-bottom: 30px;">
            <h3 style="font-size: 1.2rem; color: #111827; margin-bottom: 15px; font-weight: 600;">Key Features:</h3>
            <ul style="padding-left: 0; color: #4b5563; list-style: none;">
              ${product.features.map(feature => `
                <li style="margin-bottom: 10px; display: flex; align-items: start; gap: 10px;">
                  <svg style="min-width: 20px; margin-top: 2px;" width="20" height="20" fill="#10b981" viewBox="0 0 20 20">
                    <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"/>
                  </svg>
                  <span style="font-weight: 500;">${feature}</span>
                </li>
              `).join('')}
            </ul>
          </div>
          ${deliveryHtml}
          ${specsHtml}
          <div>

            <button class="add-btn" onclick="addToCart('${product.id}')" ${!product.inStock ? 'disabled' : ''}>
              ${product.inStock ? '🛒 Add to Cart' : '❌ Out of Stock'}
            </button>

            <button class="view-cart-btn" onclick="location.href='cart.html'">
              👁️ View Cart
            </button>
          </div>
        </div>
      </div>
    </div>
  `;

  if (typeof lucide !== 'undefined') {
    lucide.createIcons();
  }
}

function changeMainImage(element, imgSrc) {
  const mainImg = document.getElementById('main-product-img');
  mainImg.style.transform = 'scale(0.95)';
  
  setTimeout(() => {
    mainImg.src = imgSrc;
    mainImg.style.transform = 'scale(1)';
  }, 150);
}

function generateStars(rating) {
  const fullStars = Math.floor(rating);
  const emptyStars = 5 - fullStars;
  
  let html = '';
  for (let i = 0; i < fullStars; i++) {
    html += '<i data-lucide="star" fill="currentColor" size="18"></i>';
  }
  for (let i = 0; i < emptyStars; i++) {
    html += '<i data-lucide="star" size="18"></i>';
  }
  
  return html;
}

window.PRODUCTS = PRODUCTS;
window.CATEGORIES = CATEGORIES;
if (window.location.pathname.includes('product.html')) {
  window.addEventListener('DOMContentLoaded', loadProductPage);
}