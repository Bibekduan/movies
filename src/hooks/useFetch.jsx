import { useEffect,useState } from "react";
import {fetchDataFromApi} from "../utils/api"

const useFetch=(url)=>{
    const [data,setData]=useState("null");
    const [loding,setLoding]=useState("null");
    const [error,setError]=useState("null");

    useEffect(()=>{
        setLoding("loding.....");
        setData("null");
        setError("null");

        fetchDataFromApi(url)
            .then((res)=>{
                setLoding(false)
                setData(res)
            })
            .catch((err)=>{
                setLoding(false)
                setError("Something went wrong")
            });
    },[url]);
    
    return {data,loding,error}

}

export default useFetch;



























// import { useEffect, useState } from "react";
// import { fetchDataFromApi } from "../utils/api";
// const useFetch = (url) => {
//     const [data, setData] = useState(null);
//     const [loading, setLoading] = useState(null);
//     const [error, setError] = useState(null);

//     useEffect(() => {
//         setLoading("loading...");
//         setData(null);
//         setError(null);

//         fetchDataFromApi(url)
//             .then((res) => {
//                 setLoading(false);
//                 setData(res);
//             })
//             .catch((err) => {
//                 setLoading(false);
//                 setError("Something went wrong!");
//             });
//     }, [url]);

//     return { data, loading, error };
// };

// export default useFetch;