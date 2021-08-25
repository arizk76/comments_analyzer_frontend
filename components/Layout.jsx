// Main layout for application applied to all pages
import Head from 'next/head';

export default function Layout({ children }) {
  return (
    <>
      <Head>
        <meta
          name='description'
          content='Comments Analyzer - Find out what they really think'
        />
        <meta charSet='utf-8' />
        <meta name='viewport' content='width=device-width, initial-scale=1.0' />
      </Head>
      <main className='flex flex-col min-h-screen content-between '>
        {children}
      </main>
    </>
  );
}
