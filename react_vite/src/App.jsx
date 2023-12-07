import Youtube from "./Youtube"

function App(){
  const username = "Hashim"
  return(
    <>
      <h2>vite {2+3}</h2>
      <h1>vite {(username === "Hashim") ? "Yes" : "No"} </h1>
      <Youtube />

    
    </>
  )
}

export default App
