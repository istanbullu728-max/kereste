import { MetadataRoute } from 'next';
import { blogPosts } from '@/data/blogPosts';
import seoData from '../../seo_dataset.json';

export default function sitemap(): MetadataRoute.Sitemap {
    const blogEntries: MetadataRoute.Sitemap = blogPosts.map((post) => ({
        url: `https://hataykereste.com/blog/${post.slug}`,
        lastModified: new Date(),
        changeFrequency: 'monthly',
        priority: 0.7,
    }));

    const seoEntries: MetadataRoute.Sitemap = seoData.map((item) => ({
        url: `https://hataykereste.com/${item.slug}`,
        lastModified: new Date(),
        changeFrequency: 'monthly',
        priority: 0.6,
    }));

    return [
        {
            url: 'https://hataykereste.com',
            lastModified: new Date(),
            changeFrequency: 'monthly',
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
        ...seoEntries,
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
