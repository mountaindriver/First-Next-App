// req = HTTP incoming message, res = HTTP server response
export default function handler(req, res) {
    res.status(200).json({ text: 'Hello' });
  }

  // Do Not Fetch an API Route from getStaticProps or getStaticPaths
  // This is because getStaticProps and getStaticPaths only run on the server side

  