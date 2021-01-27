# Chromeless_exercises

## Chromeless
Chrome automation made simple. Runs locally or headless on AWS Lambda.
Chromeless is deprecated in favor for [Puppeteer](https://github.com/puppeteer/puppeteer).

##### PROS
* Run 1000s of browser integration tests in parallel zap
* Crawl the web & automate screenshots
* Write bots that require a real browser
* Do pretty much everything you've used PhantomJS, NightmareJS or Selenium for before

##### CONS
* No longer maintained (View the details [here](https://github.com/prisma-archive/chromeless/blob/master/README.md))

### Installation
Requirements: NodeJS version 8.2 and greater
<br>`npm install`
<br>`npm run build`
<br>`npm install chromeless`

### Usage
There are 2 ways to use Chromeless:
1. Running Chrome on your local computer
<br>`const chromeless = new Chromeless();`
2. Running Chrome on AWS Lambda and controlling it remotely
<br>`const chromeless = new Chromeless({remote: true});`
<br>view details in [Getting Started with Headless Chrome](https://developers.google.com/web/updates/2017/04/headless-chrome)

Execute script on the command line `node [the script name]`

### Reference
[GitHub Repo](https://github.com/prisma-archive/chromeless)
[API documentation for Chromeless](https://github.com/prisma-archive/chromeless/blob/master/README.md#api-documentation)
