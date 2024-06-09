import React, { useState } from 'react'
import NavBar from './NavBar'

const Add = () => {

    const [data, setData] = useState(

        {
            "albumId": "",
            "id": "",
            "title": "",
            "url": "",
            "uploadDate": "",
            "category": ""

        }
    )
    const inputHandler = (event) => {
        setData({ ...data, [event.target.name]: event.target.value })
    }
    const outputHandler = () => {
        console.log(data)
    }




    return (
        <div>
            <NavBar />
            <div className="container">

                <div className="row">
                    <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">

                        <h2>Add Photo Details </h2>

                        <div className="row g-3">
                            <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">

                                <label htmlFor="" className="form-label">Album Id</label>
                                <input type="text" className="form-control" name='albumId' value={data.albumId} onChange={inputHandler} />

                            </div>
                            <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">

                                <label htmlFor="" className="form-label">Id</label>
                                <input type="text" className="form-control" name='id' value={data.id} onChange={inputHandler}/>

                            </div>
                            <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">

                                <label htmlFor="" className="form-label">Title</label>
                                <input type="text" className="form-control" name='title' value={data.title} onChange={inputHandler}/>

                            </div>
                            <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">

                                <label htmlFor="" className="form-label">Url</label>
                                <input type="text" className="form-control" name='url' value={data.url} onChange={inputHandler}/>

                            </div>

                            <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">

                                <label htmlFor="" className="form-label">uploaded date</label>
                                <input type="date"  id="" className="form-control" name='uploadDate' value={data.uploadDate} onChange={inputHandler}/>

                            </div>

                            <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">

                                <label htmlFor="" className="form-label">Category</label>
                                <select id="" className="form-control" name='category' value={data.category} onChange={inputHandler} >
                                    <option value="electronics">electronics</option>
                                    <option value="sports">sports</option>
                                    <option value="food">food</option>
                                    <option value="dress">dress</option>
                                    <option value="nature">nature</option>
                                </select>

                            </div>


                            <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">

                                <button className="btn btn-success" onClick={outputHandler}>Add</button>

                            </div>
                        </div>

                    </div>
                </div>
            </div>




        </div>
    )
}

export default Add