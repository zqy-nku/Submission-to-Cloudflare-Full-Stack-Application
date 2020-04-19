# Submission to Cloudflare Workers Internship Application: Full-Stack

## Application Demo

Please click my [worker.dev subdomain](https://internship-assignment-cloudflare.qingyuz.workers.dev/) or my [domain](https://qingyuz.ml/) to see my application.

## What I Have Done?

### 1. Get Family with Wrangler Environment

#### 1.1 Install the workers command-line tool wrangler.

#### 1.2 Generate a new project using `wrangler generate` command

#### 1.3 Use `wrangler dev` and `wrangler preview` to locally test/develop my application

### 2. Complete Basic Requirements

#### 2.1 Request the URLs from the API

Made a fetch request inside of my script's event handler to the URL `https://cfw-takehome.developers.workers.dev/api/variants`, and parse the response as JSON. 

#### 2.2 Request a random variant

Made a fetch request to one of the two URLs, and return it as the response from the script.

#### 2.3 Distribute requests between variants

When a client makes a request to the Workers script, the script will roughly return each variant around 50% of the time, in A/B testing style.

### 3. Complete Extra Credit

#### 3.1 Changing copy/URLs

Used the [HTMLRewriter](https://developers.cloudflare.com/workers/reference/apis/html-rewriter/) API to change the following values insides of the variants:

- `title`: the title of the web page, displayed on the window or tab title in the browser.
- `h1#title`: the main title of the page. By default, this displays "Variant 1" or "Variant 2"
- `p#description`: the description paragraph on the page. By default, this displays the text "This is variant X of the take home project!".
- `a#url`: a Call to Action link with strong emphasis on the page. Changed this to my personal website, and make sure to update the text "Return to cloudflare.com" as well!

#### 3.2 Persisting variants

Implemented persisting variants by creating a cookie. If a user visits the site and receives one of the two URLs, persist which URL is chosen in a cookie so that they always see the same variant when they return to the application.

#### 3.3 Publish to a domain

Deployed my project by customizing the `zone_id` and `route` in my wrangler.toml. Published my application to [qingyuz.ml](https://qingyuz.ml/).

### 4. Deployment the Application

#### 4.1 Register a workers.dev subdomain

Setted up a workers.dev subdomain by following the Quick Start linked above.

#### 4.2 A user should be able to visit the deployed version of the site

Deployed my application and make it available under my workers.dev subdomain. Please check the [application](https://internship-assignment-cloudflare.qingyuz.workers.dev/).

### 5. Submitted my project
Uploaded the code to Greehouse with a "ZIP archive" of my project folder.

**Original Link**
https://github.com/cloudflare-internship-2020/internship-application-fullstack

Thank you


Qingyu ZHU
