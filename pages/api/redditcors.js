import Cors from 'cors';

// Initializing the cors middleware
const cors = Cors({
  methods: ['POST'],
});

// Helper method to wait for a middleware to execute before continuing
// And to throw an error when an error happens in a middleware
function runMiddleware(req, res, fn) {
  return new Promise((resolve, reject) => {
    fn(req, res, (result) => {
      if (result instanceof Error) {
        return reject(result);
      }

      return resolve(result);
    });
  });
}

async function handler(req, res) {
  // Run the middleware
  await runMiddleware(req, res, cors);

  // Rest of the API logic
  // res.json({ message: 'Hello Everyone!' })
  const userInputURL = req.query.url;
  const post = {
    url: `${userInputURL}`,
    model: 'General',
  };
  const options = {
    method: 'POST',
    headers: new Headers({
      'Content-Type': 'application/json',
      Accept: 'application/json',
    }),
    body: JSON.stringify(post),
  };
  let response, responseJson;
  try {
    response = await fetch(process.env.REDDIT_API_URL, options);
    responseJson = await response.json();
  } catch (err) {
    console.log(err);
  }
  // console.log(responseJson);
  return res.status(200).json({
    ...responseJson,
  });

  // await fetch(process.env.REDDIT_API_URL, options)
  //   .then((response) => {
  //     response.json();
  //   })
  //   .then((data) => {
  //     return {  };
  //   });
  // console.log('mamdouh');
  // console.log(response);

  // return res.status(200).json({
  //   data: { ...responseJson },
  // });
}

export default handler;
