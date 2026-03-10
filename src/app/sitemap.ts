import { MetadataRoute } from 'next';
import { blogPosts } from '@/data/blogPosts';

export default function sitemap(): MetadataRoute.Sitemap {
    const blogEntries: MetadataRoute.Sitemap = blogPosts.map((post) => ({
        url: `https://hataykereste.com/blog/${post.slug}`,
        lastModified: new Date(),
        changeFrequency: 'monthly',
        priority: 0.7,
    }));

    return [
        {
            url: 'https://hataykereste.com',
            lastModified: new Date(),
            changeFrequency: 'yearly',
            priority: 1,
        },
        {
            url: 'https://hataykereste.com/urunler',
            lastModified: new Date(),
            changeFrequency: 'monthly',
            priority: 0.9,
        },
        {
            url: 'https://hataykereste.com/blog',
            lastModified: new Date(),
            changeFrequency: 'monthly',
            priority: 0.8,
        },
        ...blogEntries,
        {
            url: 'https://hataykereste.com/hakkimizda',
            lastModified: new Date(),
            changeFrequency: 'yearly',
            priority: 0.7,
        },
        {
            url: 'https://hataykereste.com/iletisim',
            lastModified: new Date(),
            changeFrequency: 'yearly',
            priority: 0.5,
        },
    ];
}
