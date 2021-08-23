import { useState } from 'react';
import { Pie } from 'react-chartjs-2';

export default function Twitter() {
  const [data, setData] = useState({
    ['Post title']: '',
    neg_percentage: 0,
    positive_percentage: 0,
    neutral_percentage: 0,
    score: 0,
  });
  const [userInputURL, setUserInputURL] = useState('');
  const [userSelectOptions, setUserSelectOptions] = useState('');
  const [catchError, setCatchError] = useState();
  const chartData = {
    labels: ['Negative', 'Positive', 'Neutral'],
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
    } catch (error) {
      setCatchError(error);
    }
  };
  if (catchError) {
    return (
      <section className='flex-1'>
        <div className=' h-12 mb-24'>
          <h1>Caught an error. Please try again later</h1>
        </div>
      </section>
    );
  }

  return (
    <section className='flex-1'>
      <div className=' h-12 mb-24'>
        <form onSubmit={handleSubmit}>
          <label
            htmlFor='url'
            className='block text-xl font-medium text-gray-700'
          >
            Tweet URL
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
                className='focus:ring-indigo-500 focus:border-indigo-500 h-full py-0 pl-2 pr-7 border-transparent bg-transparent text-gray-500 sm:text-sm rounded-md'
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
      {/* <h1>{`${!data ? 'Loading....' : 'block'}`}</h1> */}
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
      <div className='mt-12 flex flex-row justify-around'>
        <div className='xl:w-1/3 xl:h-1/3 md:w-2/3 md:h-2/3 sm:w-3/4 sm:h-3/4 w-auto h-auto'>
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
