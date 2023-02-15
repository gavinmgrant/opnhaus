import * as cheerio from "cheerio";

export default defineEventHandler(async (event) => {
  const body = await readBody(event);

  try {
    const response = await fetch(body);
    const htmlString = await response.text();
    const $ = cheerio.load(htmlString);
    const agentName = $(".profile-Tiltle-main").text();
    const agentPhotoUrl = $(".profile-img img").attr("src");
    const license = $(".profile-Tiltle-sub").first().text();
    const brokerArray = $(".profile-Tiltle-sub").text().split(license);
    const broker = brokerArray[1];

    return {
      agentName,
      agentPhotoUrl,
      license,
      broker,
    };
  } catch (e) {
    console.log("Error fetching agent details: ", e);
  }
});
