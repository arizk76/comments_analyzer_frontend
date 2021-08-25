import Link from 'next/link';
import Footer from '../components/Footer';
import Layout from '../components/Layout';
import NavBar from '../components/NavBar';
import Head from 'next/head';

const PageNotFound = () => {
  return (
    <>
      <Head>
        <title>Comments Analyzer | 404</title>
      </Head>
      <section className='flex-1 mt-24 px-6 sm:px-12 md:px-24 lg:px-48 text-center'>
        <h1 className=' font-semibold text-5xl text-red-900'>404</h1>
        <p className=' pt-4 font-bold text-xl'>OPPS!!!! Page Not Found</p>
        <p className=' p-4 mb-3'>
          Sorry, the page you are looking for doesn't exist.{' '}
        </p>
        <Link href='/'>
          <a className=' px-5 py-2 uppercase border-2 border-gray-300  rounded-md shadow-md'>
            Home
          </a>
        </Link>
      </section>
    </>
  );
};

export default PageNotFound;

PageNotFound.getLayout = function getLayout(page) {
  return (
    <Layout>
      <NavBar />
      {page}
      <Footer />
    </Layout>
  );
};
