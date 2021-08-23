// Main layout for application applied to all pages
import Head from 'next/head';

export default function Layout({ children }) {
  return (
    <>
      <Head>
        <title>Comment Analyzer Application</title>
        <meta
          name='description'
          content='Comments Analyzer - Find out what they really think'
        />
        <meta charSet='UTF-8' />
        <meta httpEquiv='X-UA-Compatible' content='IE=edge' />
        <meta
          name='viewport'
          content='width=device-width, initial-scale=1.0, minimal-ui,maximum-scale=1,user-scalable=0,viewport-fit=cover'
        />

        <meta meta name='apple-mobile-app-capable' content='yes' />
        <meta name='mobile-web-app-capable' content='yes' />
        <meta name='apple-mobile-web-app-title' content='Comment Analyzer' />
        <meta name='robots' content='index, follow' />
        <link
          rel='canonical'
          href='https://comments-analyzer-frontend.vercel.app/'
        />
      </Head>

      <main className='flex flex-col min-h-screen content-between '>
        {children}
      </main>
    </>
  );
}
