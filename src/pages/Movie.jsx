import axios from "axios";
import { useEffect, useState } from "react"

export const Movie = () => {

    const [data,setData] = useState([]);

    const Api = "http://www.omdbapi.com/?i=tt3896198&apikey=342e4c02&s=Avengers&page=1"

    const getMovieData = async () => {
        try {
            const res = await axios.get(Api)
            // console.log(res.data.Search);
            setData(res.data.Search)
        } catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
        getMovieData();
    }, [])

    return (
        <ul>
            {
                data.map((curElem)=>{
                    return <Card key = {curElem.imdbID} movieData = {curElem}/>
                })
            }
        </ul>
    )
}