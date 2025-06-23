import React from 'react';

const PricingSection = () => {
  const primaryColor = '#7eb947'; // Green
  const textColor = '#000000'; // Black
  const backgroundColor = '#f2fafa'; // Light background
  const greyLight = '#e0e0e0';
  const greyDark = '#333333';

  const packages = [
    {
      name: 'Rising Package',
      writer: 'Rising writer',
      price: '$ 3.30',
      revisions: '1 Included',
      images: 'Not included',
      orderPlatform: true,
      ebookFormatting: false,
      proofreading: true,
      highestPerformers: false,
      specialtyWriters: false,
      isBestSeller: false,
    },
    {
      name: 'Urban Package',
      writer: 'Urban writer',
      price: '$ 3.89',
      revisions: '2 Included',
      images: 'Not included',
      orderPlatform: true,
      ebookFormatting: true,
      proofreading: true,
      highestPerformers: false,
      specialtyWriters: false,
      isBestSeller: false,
    },
    {
      name: 'Top Package',
      writer: 'Top writer',
      price: '$ 4.29',
      revisions: '3 Included',
      images: 'Up to 10 (optional)',
      orderPlatform: true,
      ebookFormatting: true,
      proofreading: true,
      highestPerformers: true,
      specialtyWriters: false,
      isBestSeller: false,
    },
    {
      name: 'Premium Package',
      writer: 'Premium writer',
      price: '$ 4.49',
      revisions: '4 Included',
      images: 'Up to 20 (optional)',
      orderPlatform: true,
      ebookFormatting: true,
      proofreading: true,
      highestPerformers: true,
      specialtyWriters: true,
      isBestSeller: true,
    },
    {
      name: 'Finance & Tech',
      writer: 'Specialty Writer',
      price: '$ 5.50',
      revisions: '4 Included',
      images: '4 Included',
      orderPlatform: true,
      ebookFormatting: true,
      proofreading: true,
      highestPerformers: true,
      specialtyWriters: true,
      isBestSeller: false,
    },
  ];

  const features = [
    { key: 'price', label: 'Price' },
    { key: 'revisions', label: 'Content revisions' },
    { key: 'images', label: 'Included images' },
    { key: 'orderPlatform', label: 'Order management platform' },
    { key: 'ebookFormatting', label: 'eBook Formatting' },
    { key: 'proofreading', label: 'Proofreading and editing' },
    { key: 'highestPerformers', label: 'Highest performers' },
    { key: 'specialtyWriters', label: 'Speciality writers' },
  ];

  // Helper for checkmark SVG
  const CheckIcon = ({ color = primaryColor }) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
      <polyline points="20 6 9 17 4 12"></polyline>
    </svg>
  );

  // Helper for dash/not included
  const DashIcon = () => (
    <div style={{ color: greyLight, fontSize: '20px', lineHeight: '1', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>-</div>
  );

  // Helper for crown icon
  const CrownIcon = ({ color = '#FFD700' }) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill={color} stroke={color} strokeWidth="1" strokeLinecap="round" strokeLinejoin="round">
        <path d="M11 2L13 2L13 6L11 6L11 2ZM17 6L19 6L19 10L17 10L17 6ZM5 6L7 6L7 10L5 10L5 6ZM21 15L21 22L3 22L3 15L6 15L8 12L16 12L18 15L21 15Z"></path>
    </svg>
  );


  return (
    <div style={{
      backgroundColor: backgroundColor,
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      minHeight: '60vh', // Approximately 60% of viewport height
      width: '100%',
      fontFamily: 'Inter, sans-serif',
      color: textColor,
      padding: '20px 0',
      boxSizing: 'border-box',
    }}>
      <div style={{
        maxWidth: '960px', // Adjusted max-width for better fitting on smaller screens
        width: '95%', // Wider on smaller screens
        backgroundColor: '#fff',
        borderRadius: '15px',
        boxShadow: '0 8px 30px rgba(0,0,0,0.1)', // More prominent shadow
        overflow: 'hidden',
        position: 'relative',
        height: 'auto',
        maxHeight: '90vh', // Allow it to be taller if content demands
        display: 'flex',
        flexDirection: 'column',
      }}>
        <h2 style={{
          fontSize: '32px', // Larger title
          fontWeight: '700', // Bolder
          textAlign: 'center',
          padding: '40px 20px 30px', // More padding
          margin: '0',
          color: textColor,
          borderBottom: `1px solid ${greyLight}`, // Subtle separator
        }}>
          Hire a Ghostwriter for Your Nonfiction Book
        </h2>

        <div style={{
          display: 'grid',
          gridTemplateColumns: `minmax(180px, 1.5fr) repeat(${packages.length}, 1fr)`, // Adjust first column width
          overflowX: 'auto', // Allow horizontal scrolling on small screens
          flexGrow: 1,
          borderBottomLeftRadius: '15px', // Match parent border radius
          borderBottomRightRadius: '15px',
        }}>
          {/* Header Row */}
          <div style={{
            padding: '20px 15px', // More padding
            fontWeight: '600',
            backgroundColor: '#fdfdfd', // Slightly lighter header background
            borderBottom: `1px solid ${greyLight}`,
            borderRight: `1px solid ${greyLight}`,
            display: 'flex',
            alignItems: 'center',
            fontSize: '17px', // Slightly larger font
            color: greyDark,
            textAlign: 'left',
          }}>
            What&apos;s Included
          </div>
          {packages.map((pkg, index) => (
            <div
              key={index}
              style={{
                padding: '20px 15px',
                fontWeight: '600',
                backgroundColor: pkg.isBestSeller ? primaryColor : '#fdfdfd', // Green header for Premium
                color: pkg.isBestSeller ? '#fff' : greyDark, // White text for Premium header
                borderBottom: `1px solid ${pkg.isBestSeller ? primaryColor : greyLight}`, // Green border for premium
                borderRight: (index === packages.length - 1) ? 'none' : `1px solid ${greyLight}`,
                borderTop: pkg.isBestSeller ? `2px solid ${primaryColor}` : 'none', // Top border for best seller
                borderLeft: pkg.isBestSeller ? `2px solid ${primaryColor}` : 'none', // Left border for best seller
                borderRadius: pkg.isBestSeller ? '10px 10px 0 0' : '0', // Rounded top corners for premium
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
                textAlign: 'center',
                position: 'relative',
                transition: 'all 0.3s ease-in-out',
                zIndex: pkg.isBestSeller ? 2 : 1, // Ensure best seller is on top
                boxShadow: pkg.isBestSeller ? '0 5px 20px rgba(0,0,0,0.15)' : 'none',
              }}
            >
              {pkg.isBestSeller && (
                <div style={{
                  position: 'absolute',
                  top: '-18px', // Adjusted position
                  left: '50%',
                  transform: 'translateX(-50%)',
                  background: `linear-gradient(45deg, ${primaryColor}, ${primaryColor}dd)`, // Gradient for badge
                  color: '#fff',
                  fontSize: '13px', // Slightly larger font
                  padding: '6px 12px', // More padding
                  borderRadius: '20px', // Pill shape
                  whiteSpace: 'nowrap',
                  fontWeight: 'normal',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '6px',
                  boxShadow: '0 3px 8px rgba(0,0,0,0.3)',
                }}>
                  <CrownIcon color="#fff" /> BEST SELLER
                </div>
              )}
              <div style={{ fontSize: '19px', marginBottom: '8px', color: pkg.isBestSeller ? '#fff' : textColor }}>{pkg.name}</div>
              <div style={{ fontSize: '15px', fontWeight: 'normal', color: pkg.isBestSeller ? '#fff' : '#888' }}>{pkg.writer}</div>
            </div>
          ))}

          {/* Price Row */}
          <div style={{
            padding: '20px 15px',
            borderBottom: `1px solid ${greyLight}`,
            borderRight: `1px solid ${greyLight}`,
            display: 'flex',
            alignItems: 'center',
            fontSize: '16px',
            fontWeight: '600',
            color: greyDark,
          }}>
            Price
          </div>
          {packages.map((pkg, index) => (
            <div
              key={`price-${index}`}
              style={{
                padding: '20px 15px',
                borderBottom: `1px solid ${greyLight}`,
                borderRight: (index === packages.length - 1) ? 'none' : `1px solid ${greyLight}`,
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
                textAlign: 'center',
                ...(pkg.isBestSeller && {
                  borderLeft: `2px solid ${primaryColor}`,
                  borderRight: (index === packages.length - 1) ? `2px solid ${primaryColor}` : 'none',
                  borderBottom: `2px solid ${primaryColor}`,
                  color: primaryColor,
                  fontWeight: 'bold',
                }),
              }}
            >
              <div style={{ fontSize: '22px', fontWeight: 'bold' }}>{pkg.price}</div>
              <div style={{ fontSize: '13px', color: '#777' }}>per 100 words</div>
            </div>
          ))}

          {/* Feature Rows */}
          {features.filter(f => f.key !== 'price').map((feature, featureIndex) => (
            <React.Fragment key={feature.key}>
              <div style={{
                padding: '15px 15px', // Consistent padding
                borderBottom: (featureIndex === features.length - 2) ? 'none' : `1px solid ${greyLight}`, // Last feature row's last border
                borderRight: `1px solid ${greyLight}`,
                display: 'flex',
                alignItems: 'center',
                fontSize: '15px',
                color: greyDark,
              }}>
                {feature.label}
              </div>
              {packages.map((pkg, packageIndex) => {
                let content;
                if (typeof pkg[feature.key] === 'boolean') {
                  content = pkg[feature.key] ? <CheckIcon /> : <DashIcon />;
                } else {
                  content = pkg[feature.key] || <DashIcon />;
                }

                return (
                  <div
                    key={`${feature.key}-${packageIndex}`}
                    style={{
                      padding: '15px 15px',
                      borderBottom: (featureIndex === features.length - 2) ? 'none' : `1px solid ${greyLight}`,
                      borderRight: (packageIndex === packages.length - 1) ? 'none' : `1px solid ${greyLight}`,
                      display: 'flex',
                      justifyContent: 'center',
                      alignItems: 'center',
                      fontSize: '14px',
                      color: greyDark, // Darker text for better contrast
                      ...(pkg.isBestSeller && {
                        borderLeft: `2px solid ${primaryColor}`,
                        borderRight: (packageIndex === packages.length - 1) ? `2px solid ${primaryColor}` : 'none',
                        borderBottom: (featureIndex === features.length - 2) ? `2px solid ${primaryColor}` : 'none',
                        color: primaryColor,
                        fontWeight: '500',
                      }),
                    }}
                  >
                    {content}
                  </div>
                );
              })}
            </React.Fragment>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PricingSection;
