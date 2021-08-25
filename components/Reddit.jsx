import { useState, useEffect } from 'react';
// import PieChart from './PieChart';
import dynamic from 'next/dynamic';

const PieChart = dynamic(() => import('./PieChart'), { ssr: false });

export default function Reddit() {
  const [data, setData] = useState({
    ['Post title']: '',
    neg_percentage: 0,
    positive_percentage: 0,
    neutral_percentage: 0,
    score: 0,
  });
  const [userInputURL, setUserInputURL] = useState('');
  const [catchError, setCatchError] = useState({ errorMessage: '' });
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (evt) => {
    evt.preventDefault();
    if (!userInputURL) {
      setCatchError({
        errorMessage: 'Input empty : please enter a valid reddit link.',
      });
      return;
    }
    fetchData();
  };

  const fetchData = async () => {
    setData({});
    setCatchError({ errorMessage: '' });
    setLoading(true);
    try {
      // console.log(userInputURL);
      const response = await fetch(`/api/reddit?url=${userInputURL}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
      });

      if (response.status >= 500) {
        console.log(response);
        setCatchError({
          // errorMessage: `Server error: ${response.statusText} code(${response.status})`,
          errorMessage: 'Server error : please try again',
        });
        setLoading(false);
      }

      const data = await response.json();

      // console.log(data);

      setData(data);
      setLoading(false);
    } catch (err) {
      // setCatchError(error);
      console.log(err);
    }
  };

  // useEffect to Handle fetchData function
  useEffect(() => {}, [fetchData]);

  return (
    <section className='flex-1'>
      <div className=' h-12 mb-24'>
        <form onSubmit={handleSubmit}>
          <label
            htmlFor='url'
            className='block text-xl font-medium text-gray-700'
          >
            Reddit Post URL
          </label>
          <div className='mt-1 relative rounded-md shadow-sm'>
            <div className='absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none'>
              <span className='text-gray-500 sm:text-md'>URL</span>
            </div>
            <input
              type='text'
              name='URL'
              onChange={(evt) => setUserInputURL(evt.target.value)}
              value={userInputURL}
              id='url'
              className='focus:ring-indigo-500 focus:border-indigo-500 block w-full px-12 sm:text-sm border-gray-300 rounded-md overflow-clip'
              // placeholder='www.reddit.com'
            />
            <div className='absolute inset-y-0 right-0 flex items-center'>
              <label htmlFor='url' className='sr-only'>
                Url
              </label>
              <select
                id='model'
                name='model'
                className='focus:ring-indigo-500 focus:border-indigo-500 hidden h-full py-0 pl-2 pr-7 border-transparent bg-transparent text-gray-500 sm:text-sm rounded-md'
              >
                <option>General</option>
                <option>Football</option>
                <option>News</option>
              </select>
            </div>
          </div>
          <div>
            <button
              type='submit'
              className='w-full h-10 py-1 bg-gray-600 text-lg font-semibold text-white rounded-lg my-5'
              // onClick={handleSubmit}
            >
              Submit
            </button>
            {loading && (
              <button className='w-full h-32 py-5 bg-gray-600 bg-opacity-50 text-lg font-semibold text-white rounded-lg my-0 animate-bounce'>
                Loading results
              </button>
            )}
          </div>
        </form>
      </div>
      <h1>
        <strong className='text-lg'>Post Title : </strong>
        {data['Post title']}
      </h1>
      <h1 className='text-red-600'>
        <strong>Negative : </strong>
        {data.neg_percentage} %
      </h1>
      <h1 className='text-green-600'>
        <strong>Positive : </strong>
        {data.positive_percentage} %
      </h1>
      <h1 className='text-yellow-600'>
        <strong>Neutral : </strong>
        {data.neutral_percentage} %
      </h1>
      <h1>
        <strong>Score : </strong>
        {data.score}
      </h1>
      {catchError && (
        <p className=' text-red-700 font-light text-xl rounded p-2 hover:text-red-500'>
          {catchError.errorMessage}
        </p>
      )}
      <div className='mt-8 flex flex-row justify-around'>
        <div className='w-auto px-5'>
          <PieChart data={data} />
        </div>
      </div>
    </section>
  );
}
