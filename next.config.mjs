/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        qualities: [70, 75, 85, 100],
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'ilt-sa.com',
            },
            {
                protocol: 'https',
                hostname: 'upload.wikimedia.org',
            },
            {
                protocol: 'https',
                hostname: 'placehold.co',
            },
            {
                protocol: 'https',
                hostname: 'images.unsplash.com',
            },
            {
                protocol: 'https',
                hostname: 'www.transparenttextures.com',
            },
            {
                protocol: 'https',
                hostname: 'via.placeholder.com',
            },
            {
                protocol: 'https',
                hostname: 'res.cloudinary.com',
            },
        ],
    },
};

export default nextConfig;
