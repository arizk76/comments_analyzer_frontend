import { useState, useEffect } from 'react';
import { Pie } from 'react-chartjs-2';

export default function Twitter() {
  const [data, setData] = useState({
    // ['Post title']: '',
    // neg_percentage: 0,
    // positive_percentage: 0,
    // neutral_percentage: 0,
    // score: 0,
  });
  const [userInputURL, setUserInputURL] = useState('');
  const [userSelectOptions, setUserSelectOptions] = useState('Hashtag');
  const [catchError, setCatchError] = useState({ errorMessage: '' });
  const chartData = {
    labels: ['Neg', 'Pos', 'Neu'],
    datasets: [
      {
        data: [
          data.neg_percentage,
          data.positive_percentage,
          data.neutral_percentage,
        ],
        backgroundColor: [
          'rgba(220, 38, 38, 0.2)',
          'rgba(5, 150, 105, 0.2)',
          'rgba(217, 119, 6, 0.2)',
        ],
        borderColor: [
          'rgba(255, 38, 38, 1)',
          'rgba(5, 162, 105, 1)',
          'rgba(225, 133, 8, 1)',
        ],
        borderWidth: 1,
      },
    ],
  };

  const handleSubmit = async (evt) => {
    setCatchError({ errorMessage: '' });
    try {
      evt.preventDefault();
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
      if (response.status === 500) {
        setCatchError({
          errorMessage: `An error has occurred while fetch request, No response: status ${response.status}`,
        });
      }
      const data = await response.json();
      if (!data) {
        return (
          <section className='flex-1'>
            <div className=' h-12 mb-24'>
              <h1>Loading .......</h1>
            </div>
          </section>
        );
      }

      // console.log(data);

      setData(data);
    } catch (err) {
      // setCatchError(error);
      console.log(err);
    }
  };

  useEffect(() => {}, [data, catchError]); // pass `data` and `error`as a dependency

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
            <div className='absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none'>
              {/* <span className='text-gray-500 sm:text-md'>URL</span> */}
            </div>
            <input
              type='text'
              name='URL'
              onChange={(evt) => setUserInputURL(evt.target.value)}
              value={userInputURL}
              id='url'
              className='focus:ring-indigo-500 focus:border-indigo-500 block w-full pl-3 pr-12 sm:text-sm border-gray-300 rounded-md overflow-clip'
              // placeholder='www.reddit.com'
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
              // onClick={handleSubmit}
            >
              Submit
            </button>
          </div>
        </form>
      </div>
      {/* <h1>{`${!data ? 'Loading....' : ''}`}</h1> */}
      <h1>
        <strong className='text-lg'>Tweet : </strong>
        {data.Tweet}
      </h1>
      <h1>
        <strong className='text-lg'>Hashtag : </strong>
        {data.Hashtag}
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

      {catchError && (
        <p className=' text-red-600 font-light text-2xl rounded p-2 hover:text-red-800'>
          {catchError.errorMessage}
        </p>
      )}

      <div className='mt-8 flex flex-row justify-around'>
        <div className='w-auto px-5'>
          <Pie
            data={chartData}
            options={{
              maintainAspectRatio: true,
              responsive: true,
              // resizeDelay: 300,
            }}
          />
        </div>
      </div>
    </section>
  );
}
