import React from 'react'
import FetchGif from './FetchGif'

const styles = {
  container:{
    width: "60vw",
    height: "80vh",
    display: "flex",
    margin: "0 auto",
    backgroundColor: "pink",
    justifyContent: "flex-start",
    flexDirection: "column",
    alignItems: "center",
  },
  title:{
    marginTop: "5%"
  }
}

function Container(props) {
    return (
        <div style={styles.container}>
          <h1 style={styles.title}>{props.title}</h1>
          <FetchGif />

        </div>
    )
}

export default Container
