import Layout from '../components/Layout';
import NavBar from '../components/NavBar';
import Footer from '../components/Footer';

const contact = () => {
  return (
    <section className='flex-1 mt-24 px-6 sm:px-12 md:px-24 lg:px-48'>
      <div>
        <h1>Github</h1>
        <p>
          <a href='https://github.com/NourSerw' target='_blank'>
            {' '}
            Github profile{' '}
          </a>{' '}
        </p>
        <p>
          {' '}
          <a
            href='https://github.com/NourSerw/Comments-Analyzer'
            target='_blank'
          >
            {' '}
            Github repo for CommentsAnalyzer{' '}
          </a>
        </p>
      </div>
      <div>
        <h1>LinkedIn</h1>
        <p>
          {' '}
          <a href='https://www.linkedin.com/in/nour-al-serw/' target='_blank'>
            {' '}
            LinkedIn Profile
          </a>{' '}
          where you can check out my educational background as well as my
          professional and industrial experience.{' '}
        </p>
      </div>
      <div>
        <h1>Email</h1>
        <p>
          {' '}
          Personal <a href='mailto:nouralserw@gmail.com'>email</a> if you wish
          to contact me. If you have any questions, suggestions, concerns
          concerning this wee project of mine please do not hesitate to contact
          me.{' '}
        </p>
      </div>
    </section>
  );
};

export default contact;

contact.getLayout = function getLayout(page) {
  return (
    <Layout>
      <NavBar />
      {page}
      <Footer />
    </Layout>
  );
};
