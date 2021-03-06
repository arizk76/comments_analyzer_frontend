import Footer from '../components/Footer';
import Layout from '../components/Layout';
import NavBar from '../components/NavBar';
import Head from 'next/head';
// import Reddit from '../components/Reddit';
// import Twitter from '../components/Twitter';
import dynamic from 'next/dynamic';

const RedditWithNoSSR = dynamic(() => import('../components/Reddit'), {
  ssr: false,
});
const TwitterWithNoSSR = dynamic(() => import('../components/Twitter'), {
  ssr: false,
});
// import { install } from 'resize-observer';

export default function Home() {
  // if (typeof window !== 'undefined') {
  //   install();
  // }

  return (
    <>
      <Head>
        <title>Comments Analyzer | Home</title>
      </Head>
      <section className='flex-1 mt-24 px-6 sm:px-12 md:px-24 lg:px-48'>
        <h1 className='font-bold mb-2 md:text-2xl text-xl text-gray-800'>
          Comments Analyzer
          <span className='text-gray-500 text-lg font-bold'>
            {' '}
            - Find out what they really think
          </span>
        </h1>
        <p className=' py-3 h-48 text-left'>
          Hero section Need to add some text in this area
        </p>
        {/* <Reddit /> */}
        <RedditWithNoSSR />
        <br />
        <br />
        <br />
        <br />
        <br />
        <TwitterWithNoSSR />
        {/* <Twitter /> */}
        <br />
        <br />
        <br />
        <br />
        <br />
      </section>
    </>
  );
}

Home.getLayout = function getLayout(page) {
  return (
    <Layout>
      <NavBar />
      {page}
      <Footer />
    </Layout>
  );
};
