import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="en">

      <Head>
          {/* eslint-disable-next-line @next/next/no-title-in-document-head */}
          <title>MUSIC SEARCH</title>
          <body className="bg-gradient-to-r from-blue-200 to-cyan-200"/>

      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
