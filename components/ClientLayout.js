"use client";
import { useState } from 'react';
import PromoBanner from '@/components/PromoBanner';

export default function ClientLayout({ children }) {
  const [bannerVisible, setBannerVisible] = useState(true);

  return (
    <>
      <PromoBanner onVisibilityChange={setBannerVisible} />
      {children}
    </>
  );
}
