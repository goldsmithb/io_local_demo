import styles from './NewsFeedFilter.module.css'

export default function newsFeedFilter(setFilter) {
  console.log(styles)
  return (
    <div className={styles.filter}>
        <div style={{
          height: "40px",
          width: "40px",
          backgroundColor: "#ffcc8c",
          border: "solid 1px red"
          }}
          value="social"
          onChange={(e) => setFilter(e.target.value)}/>
        <div style={{
          height: "40px",
          width: "40px",
          backgroundColor: "#8cffdb",
          border: "solid 1px blue"
          }}
          value="market"
          onChange={(e) => setFilter(e.target.value)}/>
        <div style={{
          height: "40px",
          width: "40px",
          backgroundColor: "#ff8cee",
          border: "solid 1px crimson"
          }}
          value="request"
          onChange={(e) => setFilter(e.target.value)}/>
    </div>
  )
}
