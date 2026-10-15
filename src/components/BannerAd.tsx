// 728x90 banner ad. Rendered inside a sandboxed iframe so the ad script
// (which may use document.write) can't affect the rest of the page.
const AD_HTML = `<!doctype html><html><head><style>html,body{margin:0;padding:0;overflow:hidden}</style></head><body>
<script>atOptions={'key':'2aa277f7db24f2e30314c29693455b97','format':'iframe','height':90,'width':728,'params':{}};</script>
<script src="https://www.highrevenueformat.com/2aa277f7db24f2e30314c29693455b97/invoke.js"></script>
</body></html>`;

const BannerAd = () => (
  <div className="w-full flex justify-center overflow-x-auto">
    <iframe
      title="Advertisement"
      srcDoc={AD_HTML}
      width={728}
      height={90}
      loading="lazy"
      scrolling="no"
      className="border-0 shrink-0"
      sandbox="allow-scripts allow-popups allow-popups-to-escape-sandbox allow-same-origin"
    />
  </div>
);

export default BannerAd;
