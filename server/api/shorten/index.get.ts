import { Url } from "./index.post";

export default defineEventHandler(async (event) => {
  const query = await getQuery(event);

  try {
    // first see if the short URL already exists in the database
    let url = await Url.findOne({ origUrl: query.id });
    if (url) {
      return url.shortUrl;
    } else {
      return "Does not exist.";
    }
  } catch (e) {
    console.log("Error finding short link: ", e);
  }
});
