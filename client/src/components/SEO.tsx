import { useEffect } from "react";

type SchemaValue = Record<string, unknown> | Record<string, unknown>[];

interface SEOProps {
  title: string;
  description: string;
  path?: string;
  image?: string;
  type?: string;
  author?: string;
  keywords?: string[];
  robots?: string;
  schema?: SchemaValue;
}

const SITE_NAME = "Maa Aasho Devi Tours";
const SITE_URL = "https://maaaashodevidharmayatra.in";
const DEFAULT_IMAGE =
  "https://staticimg.amarujala.com/assets/images/2016/03/13/snowfall-in-kedarnath_1457875309.jpeg";

const upsertMetaTag = (
  selector: string,
  attribute: "name" | "property",
  key: string,
  content: string,
) => {
  let tag = document.head.querySelector<HTMLMetaElement>(selector);

  if (!tag) {
    tag = document.createElement("meta");
    tag.setAttribute(attribute, key);
    document.head.appendChild(tag);
  }

  tag.setAttribute("content", content);
};

const SEO = ({
  title,
  description,
  path = "/",
  image = DEFAULT_IMAGE,
  type = "website",
  author = SITE_NAME,
  keywords = [],
  robots = "index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1",
  schema,
}: SEOProps) => {
  useEffect(() => {
    const canonicalUrl = `${SITE_URL}${path}`;
    document.title = title;

    upsertMetaTag('meta[name="description"]', "name", "description", description);
    upsertMetaTag('meta[name="robots"]', "name", "robots", robots);
    upsertMetaTag('meta[name="googlebot"]', "name", "googlebot", robots);
    upsertMetaTag('meta[name="author"]', "name", "author", author);

    if (keywords.length > 0) {
      upsertMetaTag(
        'meta[name="keywords"]',
        "name",
        "keywords",
        keywords.join(", "),
      );
    }

    upsertMetaTag("meta[property='og:title']", "property", "og:title", title);
    upsertMetaTag(
      "meta[property='og:description']",
      "property",
      "og:description",
      description,
    );
    upsertMetaTag("meta[property='og:type']", "property", "og:type", type);
    upsertMetaTag("meta[property='og:url']", "property", "og:url", canonicalUrl);
    upsertMetaTag("meta[property='og:image']", "property", "og:image", image);
    upsertMetaTag(
      "meta[property='og:image:alt']",
      "property",
      "og:image:alt",
      title,
    );
    upsertMetaTag(
      "meta[property='og:site_name']",
      "property",
      "og:site_name",
      SITE_NAME,
    );
    upsertMetaTag(
      "meta[property='og:locale']",
      "property",
      "og:locale",
      "en_IN",
    );

    upsertMetaTag(
      "meta[name='twitter:card']",
      "name",
      "twitter:card",
      "summary_large_image",
    );
    upsertMetaTag("meta[name='twitter:title']", "name", "twitter:title", title);
    upsertMetaTag(
      "meta[name='twitter:description']",
      "name",
      "twitter:description",
      description,
    );
    upsertMetaTag("meta[name='twitter:image']", "name", "twitter:image", image);
    upsertMetaTag(
      "meta[name='twitter:image:alt']",
      "name",
      "twitter:image:alt",
      title,
    );

    let canonicalTag = document.head.querySelector<HTMLLinkElement>(
      "link[rel='canonical']",
    );

    if (!canonicalTag) {
      canonicalTag = document.createElement("link");
      canonicalTag.setAttribute("rel", "canonical");
      document.head.appendChild(canonicalTag);
    }

    canonicalTag.setAttribute("href", canonicalUrl);

    let schemaTag = document.head.querySelector<HTMLScriptElement>(
      'script[data-seo-schema="true"]',
    );

    if (!schemaTag && schema) {
      schemaTag = document.createElement("script");
      schemaTag.type = "application/ld+json";
      schemaTag.setAttribute("data-seo-schema", "true");
      document.head.appendChild(schemaTag);
    }

    if (schemaTag) {
      if (schema) {
        schemaTag.textContent = JSON.stringify(schema);
      } else {
        schemaTag.remove();
      }
    }
  }, [author, description, image, keywords, path, robots, schema, title, type]);

  return null;
};

export default SEO;
