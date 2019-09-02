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

const BannerWidth1 = () => {
  return (
    <div style={styles.container}>
      <iframe
        src="//rcm-na.amazon-adsystem.com/e/cm?o=15&p=48&l=ur1&category=wholefoods&banner=19PRD6F9T3XAH680YP02&f=ifr&linkID=bdf9f19e2a6bdb2a3b80aa2521399888&t=lechateau2090-20&tracking_id=lechateau2090-20"
        style={styles.iFrame}
        title="banner width 1"
      ></iframe>
    </div>
  );
};

export default BannerWidth1;
