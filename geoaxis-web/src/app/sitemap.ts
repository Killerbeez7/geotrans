import { MetadataRoute } from "next";
import { serviceCategories } from "@/config/services/categories";
import { SITE_URL } from "@/config/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = SITE_URL

  const lastModified = new Date();

  const serviceUrls: MetadataRoute.Sitemap = serviceCategories.flatMap((category) => {
    const categoryUrl: MetadataRoute.Sitemap = [
      { url: `${baseUrl}/services/${category.slug}`, lastModified },
    ];

    const detailUrls: MetadataRoute.Sitemap = category.services.map((service) => ({
      url: `${baseUrl}/services/${category.slug}/${service.slug}`,
      lastModified,
    }));

    return [...categoryUrl, ...detailUrls];
  });

  return [
    { url: baseUrl, lastModified },
    { url: `${baseUrl}/services`, lastModified },
    { url: `${baseUrl}/projects`, lastModified },
    { url: `${baseUrl}/about`, lastModified },
    { url: `${baseUrl}/contacts`, lastModified },
    ...serviceUrls,
  ];
}
