import * as cheerio from "cheerio";

export default defineEventHandler(async (event) => {
  const body = await readBody(event);

  try {
    const response = await fetch(body);
    const htmlString = await response.text();
    const $ = cheerio.load(htmlString);
    const agentName = $(".profile-Tiltle-main").text();
    const agentPhotoUrl = $(".profile-img img").attr("src");
    const firstSubtitle = $(".profile-Tiltle-sub").first().text();
    const subtitleArray = $(".profile-Tiltle-sub").text().split(firstSubtitle);
    const broker = !subtitleArray[1] ? firstSubtitle : subtitleArray[1];
    const license = subtitleArray[1] ? firstSubtitle : "";

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
