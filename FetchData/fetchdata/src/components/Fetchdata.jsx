import { useEffect, useState } from "react"
import axios from "axios"
import "../css/Fetchdata.css"

export function Fetchdata() {

    let [data, setdata] = useState([])
    let api = "https://jsonplaceholder.typicode.com/posts";

    async function fetchdata() {
        let res = await axios.get(api)
        setdata(res.data)
    }
    useEffect(() => {
        fetchdata()
    })
    return (
        <>
            <h1>Fetchdata</h1>
        <div className="parent">
            {
                data.map((ele) => {
                    return (
                        <div key={ele.id} className="child">
                            <p><b>Id:</b>{ele.id}</p>
                            <p><b>Title: </b>{ele.title}</p>
                            <p><b>Body: </b>{ele.body }</p>
                      </div>
                    );
                })
        }
        </div>
        </>
    )
}