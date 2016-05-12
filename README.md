budgetScrape
============

Node scraper for NYC Budget PDFs.

Uses NYC "supporting schedules" budget documents, outputs a csv for lowest-level budgeted amounts with associated hierarchy.

The hierarchy looks like this:

`Agency > Unit of Appropriation > Responsibility Center > Budget Code > Object Class > Object and Dollar Amount`

For example:

`002 Mayoralty > 020 Office of the Mayor > 0006 Counsel to the Mayor > 0230 Mayor's Judiciary Committee > 01 F/T Salaried > 001 Full Year Positions $202,774`

##How to Use

Clone this repo, install dependencies `npm install`

First, scrape raw text out of PDFs using `node scrape.js`.  This script is looking for pdf files in the `/raw` directory, and will output a text file of the same name in `/txt`.

Next run `node parsetxt.js {filepath}` replacing {filepath} with the path to the .txt file you want to parse.  This will create a csv of the same name in `/csv`.

The FY 2017 Executive Budget is provided as an example in this repo, you may need to modify the script to get different columns of text depending on which budget docs you are parsing.