# mjml-react-reload

Building responsive emails is hard. Thankfully [MJML](https://mjml.io/documentation/) exists. Here's a boilerplate project that
will help you quickly iterate through responsive email designs. Make a change to [mjml-react](https://github.com/wix-incubator/mjml-react) code and the browser automatically refreshes.

Give it a try. Edit the following component:

    src/server/templates/email-1.js

Since HTML is sent from the server, you can develop your designs with real data from your database or api of choice.

Normally you would need to refresh the browser every time you made a change but we already installed [reload](https://github.com/alallier/reload) to do that for you.

## Setup

    npm install
    npm run dev

## Todo

-   Convert [mjml starter](https://github.com/mjmlio/email-templates) templates to mjml-react
-   Make a blog post
