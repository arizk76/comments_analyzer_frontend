import { useState, useEffect } from 'react';
import dynamic from 'next/dynamic';

const PieChart = dynamic(() => import('./PieChart'), { ssr: false });

export default function Twitter() {
  const [data, setData] = useState({
    ['Post title']: '',
    neg_percentage: 0,
    positive_percentage: 0,
    neutral_percentage: 0,
    score: 0,
  });
  const [userInputURL, setUserInputURL] = useState('');
  const [userSelectOptions, setUserSelectOptions] = useState('Hashtag');
  const [catchError, setCatchError] = useState({ errorMessage: '' });
  const [loading, setLoading] = useState(false);

  const handleChange = (evt) => {
    setUserInputURL(updatedURL(evt.target.value));
  };
  const updatedURL = (url) => {
    if (!url.includes('?s=20')) {
      let newURL = url;
      return newURL;
    } else if (url.includes('?s=20')) {
      let newURL = url.substring(0, url.length - 5);
      return newURL;
    }
  };

  const handleSubmit = async (evt) => {
    evt.preventDefault();

    fetchData();
  };

  const fetchData = async () => {
    setData({});
    setCatchError({ errorMessage: '' });
    setLoading(true);

    try {
      // console.log(userInputURL);
      const response = await fetch(
        `/api/twitter?url=${userInputURL}&source=${userSelectOptions}`,
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
        }
      );

      if (response.status >= 500) {
        // console.log(response);
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
      setCatchError(err);
      console.log('Catch Error: ', err);
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
            Tweet | Hashtag
          </label>
          <div className='mt-1 relative rounded-md shadow-sm'>
            <div className='absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none'></div>
            <input
              type='text'
              name='URL'
              onChange={handleChange}
              value={userInputURL}
              id='url'
              className='focus:ring-indigo-500 focus:border-indigo-500 block w-full pl-3 pr-12 sm:text-sm border-gray-300 rounded-md overflow-clip'
            />
            <div className='absolute inset-y-0 right-0 flex items-center'>
              <label htmlFor='url' className='sr-only'>
                Url
              </label>
              <select
                id='model'
                name='model'
                value={userSelectOptions}
                onChange={(evt) => setUserSelectOptions(evt.target.value)}
                className='focus:ring-indigo-500 focus:border-indigo-500 h-full py-1 pl-2 pr-8 border-gray-300 bg-white text-gray-700 sm:text-sm rounded-md'
              >
                <option value='Hashtag'>Hashtag</option>
                <option value='Singular_tweet'>Singular Tweet</option>
              </select>
            </div>
          </div>
          <div>
            <button
              type='submit'
              className='w-full h-10 py-1 bg-gray-600 text-lg font-semibold text-white rounded-lg my-5'
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

      {data.Tweet && (
        <h1>
          <strong className='text-lg'>Tweet : </strong>
          <span className=' text-base'>{data.Tweet}</span>
        </h1>
      )}
      {data.Hashtag && (
        <h1>
          <strong className='text-lg'>Hashtag : </strong>
          <span className=' text-xl'>{data.Hashtag}</span>
        </h1>
      )}

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
