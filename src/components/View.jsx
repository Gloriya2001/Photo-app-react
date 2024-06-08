import React, { useEffect, useState } from 'react'
import NavBar from './NavBar'
import axios from 'axios'
import { Link } from 'react-router-dom'

const View = () => {


  const [photo, changePhoto] = useState([])

  const fetchDataFromApi = () => {

    axios.get("https://jsonplaceholder.typicode.com/photos").then(

      (response) => {
        changePhoto(response.data)
      }

    ).catch().finally()


  }
  useEffect(()=>{fetchDataFromApi()},[])


  return (
    <div>
      <NavBar />
      <div className="container">
        <div className="row">
          <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">

            <div className="row g-3">


              <h1>view Photos</h1>

              {photo.map(

                (value, index) => {


                  return <div className="col col-12 col-sm-6 col-md-4 col-lg-3 col-xl-3 col-xxl-3">

                    <div className="card">
                      <img src={value.thumbnailUrl} alt="...">
                      </img>
                      <div className="card-body">
                        <h4 className="card-title">Album Id : {value.albumId}</h4>
                        <h5 className="card-title">{value.title}</h5>

                        <Link to={value.url} class="btn btn-info">More</Link>
                      </div>
                    </div>


                  </div>




                }
              )


              }


            </div>

          </div>


        </div>
      </div>

    </div>
  )
}

export default View