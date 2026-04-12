export interface BrandContent {
  logo: string;
  slogan: string;
  name: string;
  location: string;
  tagline: string;
  description: string;
  metaLine: string;
}

const BRAND_NAME = "GeoAxis";

export const BRAND_WORDMARK_PRIMARY = "Geo";
export const BRAND_WORDMARK_SECONDARY = "Axis";

export const BRAND_LOCATION = "София и Софийска област";

export const brand: BrandContent = {
  logo: "/images/brand/logo.svg",
  slogan: "Геодезия • Кадастър • Градоустройство",
  name: BRAND_NAME,
  location: BRAND_LOCATION,
  // tagline: `Геодезически услуги в ${BRAND_LOCATION}`,
  tagline: `${BRAND_NAME} - Геодезически услуги в ${BRAND_LOCATION}. | Геодезия • Кадастър • Градоустройство`,

  description: `${BRAND_NAME} предлага професионални геодезически услуги в ${BRAND_LOCATION} - заснемане, трасиране, кадастър, проектиране и градоустройство. Гарантирана точност и бързо изпълнение.`,
  metaLine: "София • Софийска област • По договаряне",
} as const;
