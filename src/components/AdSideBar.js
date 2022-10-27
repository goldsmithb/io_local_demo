import styles from "./AdSideBar.module.css"

export default function AdSideBar() {
  const exampleAd = {
    company: "Amazon",
    text: "Buy Now with one click to buy this thing click here to buy it."
  }

  let adArray = new Array(20);
  for (let i = 0; i < 20; i++) {
    adArray[i] = exampleAd;
  }

  return (
    <div className={styles['side-bar']}>
      <div>Advertisements:</div>
      {adArray.map((ad) => (
        <div className={styles.ad}>
          <h3>{ad.company}</h3>
          <img src="/adExample.jpg" alt="ad image" />
          <p>{ad.text}</p>
        </div>
      ))}
    </div>
  )
}