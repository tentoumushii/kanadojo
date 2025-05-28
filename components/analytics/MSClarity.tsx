import Script from 'next/script';

export default function MicrosoftClarity() {
  const MS_CLARITY_ID = process.env.MS_CLARITY_ID; // No NEXT_PUBLIC needed

  if (!MS_CLARITY_ID) return null;

  return (
    <Script
      id='ms-clarity'
      strategy='afterInteractive'
      dangerouslySetInnerHTML={{
        __html: `(function(c,l,a,r,i,t,y){
          c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
          t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
          y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
        })(window, document, "clarity", "script", "${MS_CLARITY_ID}");`
      }}
    />
  );
}
