/** @type {import('next').NextConfig} */

module.exports = {
    images: {
      remotePatterns: [
        {
          protocol: 'https',
          hostname: 'clarknarvas.com',
          pathname: '/assets/**'
        }, {
          protocol: 'https',
          hostname: 'clarknarvas.com',
          pathname: '/uploads/**'
        },
        
      ],
    }
  }


