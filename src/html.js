import React from 'react'
import PropTypes from 'prop-types'

export default function HTML(props) {
  return (
    <html {...props.htmlAttributes}>
      <head>
        <meta charSet='utf-8' />
        <meta httpEquiv='x-ua-compatible' content='ie=edge' />
        <meta
          name='viewport'
          content='width=device-width, initial-scale=1, shrink-to-fit=no'
        />
        <script
          dangerouslySetInnerHTML={{
            __html: `
            var _gaq = _gaq || []
            _gaq.push(['_setAccount', 'UA-169031438-1'])
            _gaq.push(['_trackPageview'])
          
            ;(function () {
              var ga = document.createElement('script')
              ga.type = 'text/javascript'
              ga.async = true
              ga.src =
                ('https:' == document.location.protocol ? 'https://ssl' : 'http://www') +
                '.google-analytics.com/ga.js'
              var s = document.getElementsByTagName('script')[0]
              s.parentNode.insertBefore(ga, s)
            })()
            `,
          }}
        />
        {/* Google Tag Manager */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
            (function (w, d, s, l, i) {
              w[l] = w[l] || []
              w[l].push({
                'gtm.start': new Date().getTime(),
                event: 'gtm.js',
              })
              var f = d.getElementsByTagName(s)[0],
                j = d.createElement(s),
                dl = l != 'dataLayer' ? '&l=' + l : ''
              j.async = true
              j.src = 'https://www.googletagmanager.com/gtm.js?id=' + i + dl
              f.parentNode.insertBefore(j, f)
            })(window, document, 'script', 'dataLayer', 'GTM-TK5V677');
              `,
          }}
        />
        {/* End Google Tag Manager */}

        {/* Global site tag (gtag.js) - Google Ads: 339029822 */}
        <script
          async
          src='https://www.googletagmanager.com/gtag/js?id=AW-339029822'
        ></script>
        <script
          dangerouslySetInnerHTML={{
            __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
           
            gtag('config', 'AW-339029822');
            `,
          }}
        />
        {/* Facebook Pixel Code */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
            !function(f,b,e,v,n,t,s)
 
 
 
            {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
            
            
            
            n.callMethod.apply(n,arguments):n.queue.push(arguments)};
            
            
            
            if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
            
            
            
            n.queue=[];t=b.createElement(e);t.async=!0;
            
            
            
            t.src=v;s=b.getElementsByTagName(e)[0];
            
            
            
            s.parentNode.insertBefore(t,s)}(window,document,'script',
            
            
            
            'https://connect.facebook.net/en_US/fbevents.js');
            
            
            
            fbq('init', '437103407310894');
            
            
            
            fbq('track', 'PageView');           
              `,
          }}
        />
        <noscript>
          <img
            height='1'
            width='1'
            src='https://www.facebook.com/tr?id=437103407310894&ev=PageView&noscript=1'
          />
        </noscript>
        {/* End Facebook Pixel Code */}
        <meta
          name='facebook-domain-verification'
          content='676t4atbin7z9lcz6g62cs9txva5hv'
        />
        {props.headComponents}
      </head>
      <body {...props.bodyAttributes}>
        <script
          dangerouslySetInnerHTML={{
            __html: `
            window.fbAsyncInit = function () {
              FB.init({
                appId: '{your-app-id}',
                cookie: true,
                xfbml: true,
                version: '{api-version}',
              })
              FB.AppEvents.logPageView()
            }
            ;(function (d, s, id) {
              var js,
                fjs = d.getElementsByTagName(s)[0]
              if (d.getElementById(id)) {
                return
              }
              js = d.createElement(s)
              js.id = id
              js.src = 'https://connect.facebook.net/en_US/sdk.js'
              fjs.parentNode.insertBefore(js, fjs)
            })(document, 'script', 'facebook-jssdk')      
            `,
          }}
        />
        {/* Google Tag Manager (noscript) */}
        <noscript>
          <iframe
            src='https://www.googletagmanager.com/ns.html?id=GTM-TK5V677'
            height='0'
            width='0'
            style={{
              display: 'none',
              visibility: 'hidden',
            }}
          ></iframe>
        </noscript>
        {props.preBodyComponents}
        <div
          key={`body`}
          id='___gatsby'
          dangerouslySetInnerHTML={{ __html: props.body }}
        />
        {props.postBodyComponents}
      </body>
      <footer>
        {/* GetButton.io widget  */}

        <script
          dangerouslySetInnerHTML={{
            __html: `
            (function () {
              if (window.location.href.includes('/rehealth-prevaccination-plans')) return
              var options = {
                  facebook: "100757495628023", // Facebook page ID
                  whatsapp: "+(852)53770823", // WhatsApp number
                  call_to_action: "Message us", // Call to action
                  button_color: "#4FCE5D", // Color of button
                  position: "right", // Position may be 'right' or 'left'
                  order: "facebook,whatsapp", // Order of buttons
                  pre_filled_message: "Halo, I want to know more about Prophecy Test! ", // WhatsApp pre-filled message
              };
              var proto = document.location.protocol, host = "getbutton.io", url = proto + "//static." + host;
              var s = document.createElement('script'); s.type = 'text/javascript'; s.async = true; s.src = url + '/widget-send-button/js/init.js';
              s.onload = function () { WhWidgetSendButton.init(host, proto, options); };
              var x = document.getElementsByTagName('script')[0]; x.parentNode.insertBefore(s, x);
            })();      
            `,
          }}
        />
        {/* /GetButton.io widget */}
      </footer>
    </html>
  )
}

HTML.propTypes = {
  htmlAttributes: PropTypes.object,
  headComponents: PropTypes.array,
  bodyAttributes: PropTypes.object,
  preBodyComponents: PropTypes.array,
  body: PropTypes.string,
  postBodyComponents: PropTypes.array,
}
