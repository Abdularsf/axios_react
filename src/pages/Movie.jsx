import axios from "axios";
import { useEffect } from "react"

export const Movie = () => {

    const Api = "http://www.omdbapi.com/?i=tt3896198&apikey=342e4c02&s=Avengers&page=1"

    const getMovieData = async () => {
        try {
            const res = await axios.get(Api)
            console.log(res.data.Search);
        } catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
        getMovieData();
    }, [])

    return <h1>Movie</h1>
}