import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  // Using the domain or fallback for sitemap URL generation
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://peacecode.in'

  const routes = [
    '',
    '/about/about-peace-code',
    '/about/careers',
    '/about/media',
    '/about/team',
    '/about/contact',
    '/about/faqs',
    '/announcements',
    '/ai-support',
    '/counseling',
    '/experts',
    '/screening',
    '/breathe',
    '/focus',
    '/gratitude',
    '/journal',
    '/community',
    '/resources',
    '/partners',
    '/pricing',
  ]

  return routes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: route === '' ? 'daily' : 'weekly',
    priority: route === '' ? 1.0 : route.startsWith('/about') ? 0.8 : 0.7,
  }))
}
