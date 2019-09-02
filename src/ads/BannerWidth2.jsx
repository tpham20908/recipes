import React from "react";

const styles = {
  container: {
    margin: "2rem auto"
  },
  iFrame: {
    border: "none",
    width: 728,
    height: 90,
    scrolling: "no",
    marginWidth: 0,
    frameBorder: 0
  }
};

const BannerWidth2 = () => {
  return (
    <div style={styles.container}>
      <iframe
        src="//rcm-na.amazon-adsystem.com/e/cm?o=15&p=48&l=ur1&category=family&banner=08GF9PD64MP7R02Q5N02&f=ifr&linkID=e3c3c79ae7044b439e517a38761f2bbf&t=lechateau2090-20&tracking_id=lechateau2090-20"
        style={styles.iFrame}
        title="banner width 2"
      ></iframe>
    </div>
  );
};

export default BannerWidth2;
