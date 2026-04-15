import { MetadataRoute } from "next";
import { serviceCategories } from "@/config/services/categories";
import { SITE_URL } from "@/config/site";
import { getLastModified } from "@/lib/getLastModified";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseUrl = SITE_URL;

  // Static pages mapped to their actual files
  const staticPageMap = [
    { route: "", file: "app/page.tsx" },
    { route: "/uslugi", file: "app/uslugi/page.tsx" },
    { route: "/polezno", file: "app/polezno/page.tsx" },
    { route: "/projects", file: "app/projects/page.tsx" },
    { route: "/about", file: "app/about/page.tsx" },
    { route: "/contacts", file: "app/contacts/page.tsx" },
  ];

  const staticPages = await Promise.all(
    staticPageMap.map(async ({ route, file }) => ({
      url: `${baseUrl}${route}`,
      lastModified: await getLastModified(file),
    }))
  );

  // Services (based on config file changes)
  const servicesFile = "config/services/categories.ts";

  const serviceLastModified = await getLastModified(servicesFile);

  const serviceUrls: MetadataRoute.Sitemap = serviceCategories.flatMap((category) => {
    const categoryUrl = {
      url: `${baseUrl}/uslugi/${category.slug}`,
      lastModified: serviceLastModified,
    };

    const detailUrls = category.services.map((service) => ({
      url: `${baseUrl}/uslugi/${category.slug}/${service.slug}`,
      lastModified: serviceLastModified,
    }));

    return [categoryUrl, ...detailUrls];
  });

  return [...staticPages, ...serviceUrls];
}
