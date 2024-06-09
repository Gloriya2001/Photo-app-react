import React, { useState } from 'react'
import NavBar from './NavBar'

const Search = () => {

const [data,setData] = useState(
    {
        "photoId":""
    }
)
const inputHandler = (event) => {
    setData({...data,[event.target.name]:event.target.value})
}
const outputHandler = () => {
    console.log(data)
}

  return (
    <div>
<NavBar/>

<div className="container">
                <div className="row">
                    <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">

                        <div className="row g-3">

                            <h2>Search</h2>
                            <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">

                                <label htmlFor="" className="form-label">Photo Id</label>
                                <input type="text" className="form-control" name='photoId' value={data.photoId} onChange={inputHandler} />
                            </div>


                            <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">

                                <button className="btn btn-success" onClick={outputHandler}>Search</button>

                            </div>


                        </div>

                    </div>
                </div>
            </div>


    </div>
  )
}

export default Search