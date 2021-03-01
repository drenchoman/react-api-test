import React, {useState, useEffect} from 'react'
import axios from 'axios'

const styles = {
  gif: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    marginTop: "5%",
    flexDirection: "column"
  },
  butt: {
    marginTop: "5%",
    position: "sticky",
  }
}

function FetchGif() {
  const [gif, setGif]= useState(null)

  const randomGif = () => {
    setGif("")

  }

useEffect(()=> {
  axios.get("https://api.giphy.com/v1/gifs/random?api_key=qitI9CMnXX08n6UFhJJoChiA9ZKbAl53")
  .then(res => {
    const x = res.data.data.images.fixed_height.url
    console.log(x)
    setGif(x)
  })
  .catch(err => {
    console.log(err)
  })
},[gif])

    return (
        <div style={styles.gif}>
          <img alt="Random gif" src={gif}></img>
          <button style={styles.butt} onClick={randomGif}>Random Gif</button>
        </div>
    )
}

export default FetchGif
