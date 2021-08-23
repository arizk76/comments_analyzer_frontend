import Footer from '../components/Footer';
import Layout from '../components/Layout';
import NavBar from '../components/NavBar';

const changeLog = () => {
  return (
    <section className='flex-1 mt-24 px-6 sm:px-12 md:px-24 lg:px-48'>
      <div className='divide-y-2 divide-gray-100 leading-relaxed sh'>
        <div className=' mb-16'>
          <h2 className=' font-bold mb-2 md:text-2xl '>
            <strong className='text-gray-7  00'>Change Log </strong>
            <span className='text-gray-500'>- History of application</span>
          </h2>
          {/* <h1>Comments Analyzer Change Log</h1> */}
          <p>For more information, please visit: https://www.example.com</p>
          <p>Author: Nour Al Rahman</p>
          <hr className=' mb-10' />
          <h3>
            <strong className='text-lg'>V1.0 </strong>

            <p className='italic'>22&#8211;08&#8211;2021</p>
          </h3>
          <p></p>
          <ul className='list-disc list-inside p-3  bg-gray-100 rounded-lg'>
            <li className='list-item mb-3'>
              First deployed version of CommentsAnalyzer.
            </li>
            <li className='list-item mb-3'>
              There are two forms where you can scrape and do sentiment analysis
              of
            </li>
            <ul className=' list-decimal list-inside p-1 m-1 bg-gray-100 rounded-lg'>
              <li className='list-item mb-2'>Reddit posts,</li>
              <li className='list-item mb-2'>Twitter hashtag, or tweets.</li>
            </ul>
            <li className='list-item mb-3'>
              The result is the percentage of positive, neutral, and negative
              sentiment with the comments, or in the case of a hashtag then it's
              the tweets that contain said hashtag.
            </li>
            <li className='list-item mb-3'>
              Currently, using the free tier of the Twitter API so there is a
              limit on the number of tweets retrieved.
            </li>
          </ul>
        </div>
      </div>
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
