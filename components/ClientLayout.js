"use client";
import { useState } from 'react';
import PromoBanner, { BANNER_HEIGHT } from '@/components/PromoBanner';
import Header from '@/layouts/Header'; // assuming it's a component

export default function ClientLayout({ children }) {
  const [bannerVisible, setBannerVisible] = useState(true);

  const headerOffset = bannerVisible ? BANNER_HEIGHT : 0;

  return (
    <>
      <PromoBanner onVisibilityChange={setBannerVisible} />
      <Header offsetTop={headerOffset} />
      {children}
    </>
  );
}