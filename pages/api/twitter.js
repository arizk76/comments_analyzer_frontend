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
  const userInputURL = req.query.url;
  const userSource = req.query.source;

  const post = {
    url: `${userInputURL}`,
    source: `${userSource}`,
    model: 'General',
  };
  const options = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(post),
  };
  let response, responseJson;

  try {
    // for (let i = 0; i < 2; i++) {
    response = await fetch(process.env.TWITTER_API_URL, options);
    // console.log(response);

    if (!response.ok) {
      const message = `An error has occurred while fetch request, No response: status ${response.status}`;
      // console.log(new Error(message));
      return res.status(response.status).json({
        ServerError: message,
      });
    } else {
      responseJson = await response.json();
    }

    // }
  } catch (err) {
    console.log(err);
    return res.status(response.status).json({
      ...err,
    });
  }
  // console.log(responseJson);
  return res.status(200).json({
    ...responseJson,
  });
}

export default handler;
