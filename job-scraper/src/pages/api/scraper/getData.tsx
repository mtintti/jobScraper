
import { NextApiRequest, NextApiResponse } from "next";
const jsdom = require("jsdom");
const { JSDOM } = jsdom;

const getData = async (req: NextApiRequest, res: NextApiResponse) => {
  const body = JSON.parse(req.body)
  const { input } = body;

  if (input.includes("jobly.fi")) {
    const response = await fetch(`${input}`);


    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }
    const html = await response.text();
    
    // Parsetaan HTML ja otetaan työn nimi, firma ja sijainti
    const dom = new JSDOM(html);
    const document = dom.window.document;
    console.log(document.documentElement.outerHTML);

    const title = document.querySelector("h1")?.textContent  || "Title not found"
    const company = document.querySelector(".panel-pane.pane-token.pane-node-recruiter-company-profile-job-organization a")?.textContent?.trim() || "Company not found";
    const location = document.querySelector(".field_item.even")?.textContent?.trim() || "Location not found";

    res.status(200).json({ title, company, location });

  }

  if (input.includes("linkedin.")) {
    const response = await fetch(`${input}`);


    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }
    const html = await response.text();

    // Simuloidaan 7 sekunnin viivästys että sivu lataa kokonaan.
    await new Promise(resolve => setTimeout(resolve, 7000));

    // Parsetaan HTML viivästyksen jälkeen ja otetaan työn nimi, firma ja sijainti
    const dom = new JSDOM(html);
    const document = dom.window.document;
    console.log(document.documentElement.outerHTML);

    const title = document.querySelector(".ember-view")?.textContent || "Title not found";
    const company = document.querySelector(".app-aware-link")?.textContent?.trim()  || "Company not found";
    const location = document.querySelector(".tvm__text.tvm__text--low-emphasis")?.textContent?.trim() || "Location not found";

    res.status(200).json({ title, company, location });

  }

  if (input.includes("duunitori.fi")) {
    const response = await fetch(`${input}`);


    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }
    const html = await response.text();

    // Parsetaan HTML ja otetaan työn nimi, firma ja sijainti
    const dom = new JSDOM(html);
    const document = dom.window.document;
    console.log(document.documentElement.outerHTML);

    const title = document.querySelector(".text--break-word")?.textContent || "Title not found";
    const company = document.querySelector("p.header__info > span > span")?.textContent?.trim()  || "Company not found";
    const location = document.querySelector("a[href*='/tyopaikat/alue'] span")?.textContent?.trim() || "Location not found";

    res.status(200).json({ title, company, location });
  }

  if (input.includes("duunitori.fi")) {
    const response = await fetch(`${input}`);


    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }
    const html = await response.text();

    // Parsetaan HTML ja otetaan työn nimi, firma ja sijainti
    const dom = new JSDOM(html);
    const document = dom.window.document;
    console.log(document.documentElement.outerHTML);

    const title = document.querySelector(".text--break-word")?.textContent || "Title not found";
    const company = document.querySelector("p.header__info > span > span")?.textContent?.trim()  || "Company not found";
    const location = document.querySelector("a[href*='/tyopaikat/alue'] span")?.textContent?.trim() || "Location not found";

    res.status(200).json({ title, company, location });
  }

}
export default getData;