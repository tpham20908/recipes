import React from "react";

const styles = {
  container: {
    maxWidth: 120,
    left: "1rem",
    position: "absolute",
    top: "1rem"
  },
  iFrame: {
    border: "none",
    width: 160,
    height: 600,
    scrolling: "no",
    marginWidth: 0,
    frameBorder: 0
  }
};

const BannerLeft = () => {
  return (
    <div style={styles.container}>
      <iframe
        style={styles.iFrame}
        src="//rcm-na.amazon-adsystem.com/e/cm?o=15&p=14&l=ur1&category=family&banner=1ZK1DB4NQZZQBW8TC002&f=ifr&linkID=ca80a804ce7e4c9aeb5b8b3c5ba87e0e&t=lechateau2090-20&tracking_id=lechateau2090-20"
        title="left ad"
      ></iframe>
    </div>
  );
};

export default BannerLeft;
