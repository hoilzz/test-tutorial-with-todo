import axios from 'axios';

async function getPosts(subReddit) {
  const posts = await axios.get(
    `https://www.reddit.com/r/${subReddit}.json`,
  );
  return posts;
}
