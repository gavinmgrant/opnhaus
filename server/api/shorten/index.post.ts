import { Schema, model } from "mongoose";
import { nanoid } from "nanoid";

const UrlSchema = new Schema({
  origUrl: {
    type: String,
    required: true,
  },
  shortUrl: {
    type: String,
    required: true,
  },
  date: {
    type: String,
    default: Date.now,
  },
});

export const Url = model<any>("Url", UrlSchema);

export default defineEventHandler(async (event) => {
  const origUrl = await readBody(event);
  const shortUrl = nanoid();

  try {
    // first see if the original URL already exists in the database
    let url = await Url.findOne({ origUrl });

    if (url) {
      return url;
    } else {
      url = new Url({
        origUrl,
        shortUrl,
        date: new Date(),
      });

      await url.save();

      return url;
    }
  } catch (e) {
    console.log("Error shortening URL: ", e);
  }
});
