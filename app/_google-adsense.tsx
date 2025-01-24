import Script from "next/script";

export default function GoogleAdsense() {
    if (process.env.NODE_ENV !== "production") {
        return null;
    }

    const pId = process.env.GOOGLE_ADSENSE_ID;
    
    if (!pId) {
        return null;
    }

    return (
        <Script
            async
            src={`https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-${pId}`}
            crossOrigin="anonymous"
            strategy="afterInteractive"
        />
    );
}
