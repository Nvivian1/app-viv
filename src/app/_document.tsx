// src/pages/_document.tsx
import { Html, Head, Main, NextScript } from 'next/document';

const MyDocument = () => (
  <Html>
    <Head>
      {/* Include Tailwind CSS via CDN */}
      <link
        href="https://cdn.jsdelivr.net/npm/tailwindcss@2.2.19/dist/tailwind.min.css"
        rel="stylesheet"
      />
      {/* Include Bootstrap CSS via CDN */}
      <link
        href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css"
        rel="stylesheet"
      />
    </Head>
    <body>
      <Main />
      <NextScript />
    </body>
  </Html>
);

export default MyDocument;
