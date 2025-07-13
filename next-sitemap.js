module.exports = {
  siteUrl: 'https://www.domyebook.com', // Your website URL
  generateRobotsTxt: true, // Generate robots.txt file
  changefreq: 'monthly', // The default change frequency for pages
  priority: 0.7, // The default priority for pages

  // Custom function to handle each page and its properties
  transform: async (config, path) => {
    const highPriorityPages = ['/about', '/contact', '/how-it-works', '/features', '/services'];
    
    // Define the high-priority pages
    if (highPriorityPages.includes(path)) {
      return {
        loc: path,
        priority: 1.0, // High priority for key pages
        changefreq: 'monthly',
      };
    }

    // Blog pages: /blog and individual blog pages (/publication/1 to /publication/4)
    if (path.startsWith('/blog')) {
      return {
        loc: path,
        priority: 0.8, // Lower priority for blog posts
        changefreq: 'weekly',
      };
    }

    // Services and other sections
    const servicesPages = [
      '/ghostwriting',
      '/audio-ebook',
      '/strategicplot',
      '/childrens-book-writing',
      '/AI-to-human-writing',
      '/precision-editing',
      '/unwavering-quality',
      '/signature-ebook-design',
      '/imapctful-cover',
      '/custom-illustrations',
      '/professional-book-formatting',
      '/Compelling-Book-Descriptions',
      '/dynamic-video-promos',
      '/end-to-end-project-management',
      '/global-content-translation',
      '/book-launch-bundles',
      '/bulk-order-solutions'
    ];

    if (servicesPages.includes(path)) {
      return {
        loc: path,
        priority: 0.9, // Medium priority for service pages
        changefreq: 'monthly',
      };
    }

  },

}
