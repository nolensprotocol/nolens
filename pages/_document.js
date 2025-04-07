// pages/_document.js
import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html>
      <Head>
        {/* Twitter Base Pixel */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              !function(e,t,n,s,u,a){e.twq||(s=e.twq=function(){s.exe?s.exe.apply(s,arguments):s.queue.push(arguments);
              },s.version='1.1',s.queue=[],u=t.createElement(n),u.async=!0,u.src='https://static.ads-twitter.com/uwt.js',
              a=t.getElementsByTagName(n)[0],a.parentNode.insertBefore(u,a))}(window,document,'script');
              twq('config','pfyvq');
              twq('track','PageView');
            `
          }}
        />

        {/* Twitter Event Tracking */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              // Email signup (earn)
              window.trackEmailEarn = () => twq('track', 'email_earn');
              // Email signup (contribute)
              window.trackEmailContribute = () => twq('track', 'email_contribute');
              // Twitter handle follow submission
              window.trackFollowX = () => twq('track', 'follow_x');
              // Quote tweet submission
              window.trackQuoteTweet = () => twq('track', 'quote_tweet');
            `
          }}
        />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
