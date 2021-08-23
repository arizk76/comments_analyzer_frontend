// Main layout for application applied to all pages
import Head from 'next/head';

export default function Layout({ children }) {
  return (
    <>
      <Head>
        <title>Comment Analyzer Application</title>
        <meta charSet='utf-8' />
        <meta httpEquiv='X-UA-Compatible' content='IE=edge'/>
        <meta
          name='viewport'
          content='width=device-width, initial-scale=1.0'
        ></meta>
      </Head>

      <main className='flex flex-col min-h-screen content-between '>
        {children}
      </main>
    </>
  );
}
