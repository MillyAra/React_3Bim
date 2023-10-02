import {Link} from "react-router-dom"

function Home() {

    return (
      <>
        <div>
          <h1>Micasa</h1>
          <Link to={'/Joao'}>Ver página do João</Link>
         </div>   
      </>
    )
  }
  
  export default Home
  