import Footer from '../components/Footer';
import Layout from '../components/Layout';
import NavBar from '../components/NavBar';

const about = () => {
  return (
    <section className='flex-1 mt-24 px-6 sm:px-12 md:px-24 lg:px-48 md:text-lg'>
      <div className='divide-y-2 divide-gray-100 leading-relaxed sh'>
        <div className=' mb-16'>
          <h2 className=' font-bold mb-2 md:text-2xl '>
            <strong className='text-gray-7  00'>Comments Analyzer </strong>
            <span className='text-gray-500'>
              - Find out what they really think
            </span>
          </h2>
          <p className='py-3 text-left'>
            Basically what we do is find the top-level comments of{' '}
            <span className='italic font-medium'>Reddit</span> posts and the
            replies of any <span className='italic font-medium'>tweet</span> you
            supply and then we do something called{' '}
            <span className='underline italic'>sentiment analysis</span>{' '}
            depending on the context of the text. This sentiment analysis uses
            Natural Language Processing 'NLP', a field of Data Science. You can
            read more about it{' '}
            <a href='#' className='text-blue-600 underline'>
              here
            </a>
            .
          </p>
        </div>
        <div className='mb-20'>
          <div className='flex flex-row items-center'>
            <h2 className=' font-bold mb-2 mt-4 md:text-xl'>
              How does it work with
              <strong className='tracking-wide text-[#FF4500]'>
                {' '}
                Reddit
              </strong>{' '}
              ?
            </h2>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              viewBox='0 0 20 20'
              className=' w-10 h-10 ml-3 sm:w-12 sm:h-12 md:w-16 md:h-16 '
            >
              <path
                fill='#FF4500'
                d='M16.67,10A1.46,1.46,0,0,0,14.2,9a7.12,7.12,0,0,0-3.85-1.23L11,4.65,13.14,5.1a1,1,0,1,0,.13-0.61L10.82,4a0.31,0.31,0,0,0-.37.24L9.71,7.71a7.14,7.14,0,0,0-3.9,1.23A1.46,1.46,0,1,0,4.2,11.33a2.87,2.87,0,0,0,0,.44c0,2.24,2.61,4.06,5.83,4.06s5.83-1.82,5.83-4.06a2.87,2.87,0,0,0,0-.44A1.46,1.46,0,0,0,16.67,10Zm-10,1a1,1,0,1,1,1,1A1,1,0,0,1,6.67,11Zm5.81,2.75a3.84,3.84,0,0,1-2.47.77,3.84,3.84,0,0,1-2.47-.77,0.27,0.27,0,0,1,.38-0.38A3.27,3.27,0,0,0,10,14a3.28,3.28,0,0,0,2.09-.61A0.27,0.27,0,1,1,12.48,13.79Zm-0.18-1.71a1,1,0,1,1,1-1A1,1,0,0,1,12.29,12.08Z'
              ></path>
            </svg>
          </div>

          <p className=' py-3 text-left break-words'>
            I'll give an overview of how it works and then dive into the
            technicality later on. Now how it works generally is rather simple,
            first I retrieve all the top-level comments on the post and save
            them, The reason I don't retrieve all the comments is a pure
            business and logical decision, as a big fan of Reddit myself I
            usually find that some of the comments ({' '}
            <span className='italic '>
              especially the ones replying to the top-level comments
            </span>{' '}
            ) tends to steer away from the topic and talk about something else
            entirely. Thus the reason I only take the <strong>top-level</strong>{' '}
            comments. After that, I then run my model on each comment to find
            its sentiment whether it be:{' '}
            <span className='underline'>positive</span>,{' '}
            <span className='underline'>negative</span>, or{' '}
            <span className='underline'>neutral</span>. Then I add them up and
            give you the percentage of each sentiment as well as some other
            information concerning the post.
          </p>
          <h2 className='font-semibold mb-2 mt-4 md:text-xl'>
            Now, the more technical stuff
          </h2>
          <p className='py-3 text-left'>
            I used a number of libraries to do this. First I used Python Red.
            API Wrapper ( more known as PRAW ) in order to create a{' '}
            <strong>Reddit instance </strong>and get the credentials needed to
            scrape Reddit. Here is the{' '}
            <a href='#' className='text-blue-600 underline'>
              link
            </a>{' '}
            to the official documentation of the library. To be frank it is one
            of the nicest documentation I ever came across. But before you are
            able to use this library you need to sign-up for Reddit API access.
            Here is a{' '}
            <a href='#' className='text-blue-600 underline'>
              link
            </a>{' '}
            on how to do so. It's quite simple it should not be much of a
            headache to achieve. Now after that I have a written function just
            to get all the comments and then feed them into another function
            that does a number of things:
          </p>
          <ul className='list-disc list-inside p-3 m-2 bg-gray-100 rounded-lg'>
            <li className='list-item mb-3'>
              <strong>First</strong> retrieves the pickled classifier and the
              pickled vectorizer. For both Reddit and Twitter, I used a TF-IDF
              Vectorizer and a C-Support Vector Classification with a linear
              kernel.
            </li>
            <li className='list-item'>
              <strong>Then</strong> loop through the list going over each
              comment and predict the sentiment of each individual comment, then
              add them all up to their respective weights.
            </li>
          </ul>
          <p>
            After that, I use the Natural Language Toolkit ( known more commonly
            as <strong>NLTK</strong> ) to find the FreqDist of the comments.
            Then after l get all these results I save them to a Python dict().
          </p>
        </div>
        <div className=' mb-16'>
          <div className='flex flex-row items-center'>
            <h2 className=' font-bold mb-2 mt-4 md:text-xl'>
              How does it work with{' '}
              <strong className='tracking-wide text-[#1da1f2]'>Twitter</strong>{' '}
              ?
            </h2>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              viewBox='0 0 24 24'
              className=' w-6 h-6 ml-5 sm:w-8 sm:h-8 md:w-10 md:h-10 '
            >
              <path
                fill='#1da1f2'
                d='M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z'
              />
            </svg>
          </div>
          <p className='py-3 text-left'>
            Now with twitter there are two options on how I can extract the
            information needed supplied by you:
          </p>
          <ul className='list-disc list-inside p-3 m-2 bg-gray-100 rounded-lg'>
            <li className='list-item mb-3'>
              <strong>Either </strong>I scrape a tweets with a specified hashtag
            </li>
            <li className='list-item mb-3'>
              <strong>Or </strong>the replies to a tweet.{' '}
            </li>
          </ul>
          <p>
            Now this website does use the{' '}
            <span className='italic'>free tier </span>of the Twitter API so
            there will be a limit on the number of tweets/replies retrieved. In
            the case this changes in the future ( either I upgraded or the API
            somehow changes ) I will post an update. Now with hashtags what
            happens is I retrieve the maximum number of replies. analyze each of
            them and find its sentiment positive, neutral, and negative. While
            with tweets I retrieve the maximum of replies and find the sentiment
            of each reply.{' '}
          </p>
          <h2 className='font-semibold mb-2 mt-4 md:text-xl'>
            Now, the more technical stuff
          </h2>
          <p className='py-3 text-left'>
            I use the twitter API which is in this link where can read more
            about the API, how to register and so fonh. Unlike PRAW. the Twitter
            API uses endpoints to retrieve either tweets. hashtags, users and
            soon, to be frank I'm only using a wee bit of the API for my
            purposes. I use the Python requests library to do a GET request of
            either the conversation ID or the hashtag which returns a JSON body
            with either the tweets or replies. I then use a classifier trained
            on tweets using a pickled C-Suppon Vector Classification and a
            TF-IDF Vectorizer (which is obviously a different one from the one
            used for the reddit posts) and then return it in a Python dict().
          </p>
        </div>
      </div>
    </section>
  );
};
export default about;

about.getLayout = function getLayout(page) {
  return (
    <Layout>
      <NavBar />
      {page}
      <Footer />
    </Layout>
  );
};
