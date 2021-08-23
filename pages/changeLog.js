import Footer from '../components/Footer';
import Layout from '../components/Layout';
import NavBar from '../components/NavBar';

const changeLog = () => {
  return (
    <section className='flex-1 mt-24 px-6 sm:px-12 md:px-24 lg:px-48'>
      ChangeLog
    </section>
  );
};

export default changeLog;

changeLog.getLayout = function getLayout(page) {
  return (
    <Layout>
      <NavBar />
      {page}
      <Footer />
    </Layout>
  );
};
