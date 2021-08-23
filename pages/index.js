import Footer from '../components/Footer';
import Layout from '../components/Layout';
import NavBar from '../components/NavBar';

export default function Home() {
  return (
    <section className='flex-1 mt-24 px-6 sm:px-12 md:px-24 lg:px-48'>
      <h2 className=' font-bold mb-2'>Home Page (Index)</h2>
      <p className=' py-3 text-left'>
        This example adds a property to your page, allowing you to return a
        React component for the layout. This allows you to define the layout on
        a per-page basis. Since we're returning a function, we can have complex
        nested layouts if desired.
      </p>
    </section>
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
