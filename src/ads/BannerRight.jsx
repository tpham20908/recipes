import React from "react";

const styles = {
  container: {
    maxWidth: 160,
    right: "1rem",
    position: "absolute",
    top: "1rem"
  },
  iFrame: {
    border: "none",
    width: 120,
    height: 600,
    scrolling: "no",
    marginwidth: 0,
    frameborder: 0
  }
};

const BannerRight = () => {
  return (
    <div style={styles.container}>
      <iframe
        style={styles.iFrame}
        src="//rcm-na.amazon-adsystem.com/e/cm?o=15&p=11&l=ur1&category=best_seller&banner=13NRS0YYHQNQ6NPC49R2&f=ifr&linkID=80b342603ede66060e3a856c626aa6df&t=lechateau2090-20&tracking_id=lechateau2090-20"
        title="right ad"
      ></iframe>
    </div>
  );
};

export default BannerRight;
