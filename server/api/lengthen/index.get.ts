import { Url } from "../shorten/index.post";

export default defineEventHandler(async (event) => {
  const query = await getQuery(event);

  try {
    // first see if the short URL already exists in the database
    let url = await Url.findOne({ shortUrl: query.id });
    if (url) {
      return url.origUrl;
    } else {
      return "Does not exist.";
    }
  } catch (e) {
    console.log("Error shortening URL: ", e);
  }
});