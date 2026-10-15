// Banner ad rendered inside a sandboxed iframe so the ad script
// (which may use document.write) can't affect the rest of the page.
interface BannerAdProps {
  adKey?: string;
  width?: number;
  height?: number;
}

const BannerAd = ({
  adKey = "2aa277f7db24f2e30314c29693455b97",
  width = 728,
  height = 90,
}: BannerAdProps) => {
  const adHtml = `<!doctype html><html><head><style>html,body{margin:0;padding:0;overflow:hidden}</style></head><body>
<script>atOptions={'key':'${adKey}','format':'iframe','height':${height},'width':${width},'params':{}};</script>
<script src="https://www.highrevenueformat.com/${adKey}/invoke.js"></script>
</body></html>`;

  return (
    <div className="w-full flex justify-center overflow-x-auto">
      <iframe
        title="Advertisement"
        srcDoc={adHtml}
        width={width}
        height={height}
        loading="lazy"
        scrolling="no"
        className="border-0 shrink-0"
        sandbox="allow-scripts allow-popups allow-popups-to-escape-sandbox allow-same-origin"
      />
    </div>
  );
};

export default BannerAd;
