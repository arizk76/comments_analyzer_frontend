// Main layout for application applied to all pages
import Head from 'next/head';

export default function Layout({ children }) {
  return (
    <>
      <Head>
        <title>Comment Analyzer Application</title>
        <meta charSet='utf-8' />
        <meta
          name='viewport'
          content='width=device-width,initial-scale=1,maximum-scale=1,user-scalable=0,viewport-fit=cover'
        />
        <meta name='mobile-web-app-capable' content='yes' />
      </Head>

      <main className='flex flex-col min-h-screen content-between '>
        {children}
      </main>
    </>
  );
}
