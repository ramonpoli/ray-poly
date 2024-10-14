Let’s go through the process of installing Google analytics on your website. You might want to start using GA to find out how your users are navigating through your website, why they might be struggling on certain pages, or how you can increase the sales/leads. I’m not going to go through how to do these things but you can check the extensive documentation on how to use Google Analytics.

During this tutorial, I’m going to go through installing the necessary scripts so your website can communicate with Google tracking your users, we’re using React with Next.js as a framework working with the App folder, an already created Google analytics account and GoogleAnalytics from ‘@next/third-parties/google’, which is a npm package.

First of all we’re going to add our Google Analytics ID to our .env file (create it if you haven’t got it)

GOOGLE\_ANALYTICS\_ID=G-XYZ

Next we’re going to install the necessary recommended package: npm install @next/third-parties

This is a collection of components and utilities like:  
 

* Google Analytics  
* Google Tag Manager  
* Google Maps Embed  
* Youtube Embed

I know what you might be thinking: but Ray, I just want to use the google analytics tool. Don’t worry, there are ways to just install what you need, which I’ll cover at the end of this tutorial, but for now, we’re just going to go through the basics and the easiest way to start using GA.

Once you’ve installed this package, you can add the following line to your main Layout.tsx file

\<GoogleAnalytics gaId={process.env.GOOGLE\_ANALYTICS\_ID} /\>

This line of code will make your page download the GA script and start tracking your users. For now it will track page views (which pages are seen and how much) new users etc.

You can test it works by navigating to your website and writing ‘dataLayer’ on your console tab. If it logs undefined, there is something wrong.

If you want to manually trigger events to be tracked (when a user does something specific on a page: clicks, hovers…) you are going to trigger an event: 

import {sendGAEvent } from "@next/third-parties/google";

export const sendGoogleEvent \= (event: string, eventValue?: string) \=\> {  
    sendGAEvent('event', event, { value: eventValue });  
}

What this utility does is trigger an event sending the data in eventValue as a parameter, this function can be called from anywhere like so:

onClick={() \=\> { sendGoogleEvent('socialMediaClick', 'linekedin') }}

On your Google analytics dashboard (after 24 hours) you will be able to see how many people clicked on your LinkedIn profile, how cool is that?

If you want to install only the google analytics package (without getting the whole jungle and gorilla) you can just include the script in your page:

import React from 'react';  
import Script from 'next/script';

const GoogleAnalytics \= () \=\> {  
  return (  
    \<\>  
      \<Script  
        strategy='lazyOnload'  
        src={\`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT\_PUBLIC\_MEASUREMENT\_ID}\`}  
      /\>

      \<Script id='' strategy='lazyOnload'\>  
        {\`  
              window.dataLayer \= window.dataLayer || \[\];  
              function gtag(){dataLayer.push(arguments);}  
              gtag('js', new Date());  
              gtag('config', '${process.env.GOOGLE\_ANALYTICS\_ID}', {  
              page\_path: window.location.pathname,  
              });  
          \`}  
      \</Script\>  
    \</\>  
  );  
};

export default GoogleAnalytics;

But don’t trust me on this and do your research on what scripts to include on your website (Google has extensive documentation pages to do so). After you’ve added this file to your App folder, you can include it on your main Layout.tsx file:

import GoogleAnalytics from '@/components/GoogleAnalytics';

      \<GoogleAnalytics /\>

I hope you’ve liked my first blog article. Don’t forget to subscribe to my socials and share it. Cheers, Ray.

