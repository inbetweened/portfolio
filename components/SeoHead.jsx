import Head from 'next/head';

export default function SeoHead({ title = "Daniel – Creative Portfolio", description = "A creative showcase of motion, design & code" }) {
  return (
    <Head>
      <title>{title}</title>
      <meta name="description" content={description} />

      {/* Favicon */}
      <link rel="icon" href="/favicon.ico" />

      {/* Responsive */}
      <meta name="viewport" content="width=device-width, initial-scale=1" />

      {/* Open Graph for social sharing */}
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content="website" />
      <meta property="og:image" content="/preview.png" />
      <meta property="og:url" content="https://bydaniel.co" />

      {/* Google Font: Futura Alternative (if Futura PT not available) */}
      <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@400;700&display=swap" rel="stylesheet" />

      {/* Optional: fallback font styling if needed */}
      <style>{`
        body {
          font-family: 'Montserrat', sans-serif;
        }
      `}</style>
    </Head>
  );
}
