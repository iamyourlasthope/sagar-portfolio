import { Helmet } from 'react-helmet-async';
import seoImage from "@/assets/SEO-Metatag.webp";

interface SEOProps {
  title?: string;
  description?: string;
  keywords?: string;
  image?: string;
  url?: string;
  type?: 'website' | 'article' | 'profile';
  author?: string;
  publishedTime?: string;
  modifiedTime?: string;
  section?: string;
  tags?: string[];
}

const DEFAULT_TITLE = "Sagar Edits – Meme Marketer & Digital Creator";
const DEFAULT_DESCRIPTION = "100K+ follower base | Viral content creator | Brand collaborations & meme marketing expert.";
const DEFAULT_KEYWORDS = "Sagar Edits, Sagar Singh, Meme Marketer, Digital Creator, Content Creator, Instagram Influencer, YouTube Creator, Viral Memes, Brand Promotion, Video Editor, 100K YouTube Subscribers, 10K Instagram Followers, Social Media Marketing, Indian Meme Creator, Sagar Edits Portfolio, Influencer Marketing, Trending Reels, YouTube Shorts Creator, Instagram Reels Editor, Sagar Edits";

const SEO: React.FC<SEOProps> = ({
  title = DEFAULT_TITLE,
  description = DEFAULT_DESCRIPTION,
  keywords = DEFAULT_KEYWORDS,
  image = "https://sagaredits.in/favicon.png",
  url = "https://sagaredits.in/",
  type = "website",
  author = "Sagar Singh",
  publishedTime,
  modifiedTime,
  section,
  tags = []
}) => {
  const siteName = "Sagar Edits – Meme Marketer & Digital Creator";
  const twitterHandle = "@sagar_edits";

  return (
    <Helmet>
      {/* Primary Meta Tags */}
      <title>{title}</title>
      <meta name="title" content={title} />
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <meta name="author" content={author} />
      
      {/* Canonical URL */}
      <link rel="canonical" href={url} />
      
      {/* Open Graph Meta Tags */}
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content={type} />
      <meta property="og:url" content={url} />
      <meta property="og:image" content={image} />
      <meta property="og:image:alt" content={title} />
      <meta property="og:site_name" content={siteName} />
      <meta property="og:locale" content="en_US" />
      
      {publishedTime && <meta property="article:published_time" content={publishedTime} />}
      {modifiedTime && <meta property="article:modified_time" content={modifiedTime} />}
      {section && <meta property="article:section" content={section} />}
      {tags.length > 0 && tags.map((tag, index) => (
        <meta key={index} property="article:tag" content={tag} />
      ))}
      
      {/* Twitter Card Meta Tags */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:site" content={twitterHandle} />
      <meta name="twitter:creator" content={twitterHandle} />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />
      <meta name="twitter:image:alt" content={title} />
      
      {/* Additional SEO Meta Tags */}
      <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />
      <meta name="googlebot" content="index, follow" />
      
      {/* Structured Data */}
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": type === "article" ? "Article" : "WebPage",
          "headline": title,
          "description": description,
          "image": image,
          "url": url,
          "author": {
            "@type": "Person",
            "name": author
          },
          "publisher": {
            "@type": "Organization",
            "name": siteName,
            "logo": {
              "@type": "ImageObject",
              "url": image
            }
          },
          "mainEntityOfPage": {
            "@type": "WebPage",
            "@id": url
          },
          ...(publishedTime && { "datePublished": publishedTime }),
          ...(modifiedTime && { "dateModified": modifiedTime }),
          ...(tags.length > 0 && { "keywords": tags.join(", ") })
        })}
      </script>
    </Helmet>
  );
};

export default SEO; 