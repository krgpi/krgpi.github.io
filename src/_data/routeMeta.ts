import routeMeta from "./routeMeta.json";

export const SITE_ORIGIN = "https://krgpi.github.io";

export type RoutePath = keyof typeof routeMeta;

type StaticMeta = {
  title: string;
  description?: string;
  ogImage?: string;
  favicon?: string;
  lang?: string;
  noindex?: boolean;
  jsonLdId?: string;
  jsonLd?: Record<string, unknown>;
};

export const getRouteMeta = (path: RoutePath) => {
  const meta = routeMeta[path] as StaticMeta;
  return {
    title: meta.title,
    description: meta.description,
    canonical: `${SITE_ORIGIN}${path}`,
    ogImage: meta.ogImage,
    favicon: meta.favicon,
    jsonLdId: meta.jsonLdId,
    jsonLd: meta.jsonLd,
  };
};
