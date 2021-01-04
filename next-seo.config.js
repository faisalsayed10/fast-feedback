const title = 'Fast Feedback';
const description =
  'Fast Feedback - The easiest way to add comments or reviews to your static site.';

const SEO = {
  title,
  description,
  canonical: 'https://fast-feed.now.sh',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://fast-feed.now.sh',
    title,
    description,
    images: [
      {
        url: 'https://fast-feed.now.sh/og.png',
        alt: title,
        width: 1280,
        height: 720
      }
    ]
  }
};

export default SEO;