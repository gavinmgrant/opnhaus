import * as cheerio from "cheerio";

export default defineEventHandler(async (event) => {
  const body = await readBody(event);

  try {
    const response = await fetch(body);
    const htmlString = await response.text();
    const $ = cheerio.load(htmlString);
    const photoUrl = $(".main-carousel img").attr("src");
    const address = $(".address-value").text();
    const meta = $(".property-meta").text();
    const bedArray = meta.split("bed");
    const bathArray = bedArray[1].split("bath");

    return {
      photoUrl,
      address,
      beds: bedArray[0],
      baths: bathArray[0],
    };
  } catch (e) {
    console.log("Error fetching property details: ", e);
  }
});
