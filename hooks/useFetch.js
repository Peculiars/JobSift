import { useState, useEffect } from "react";
import axios from 'axios';
import {RAPID_API_KEY} from '@env';
const useFetch = (endpoint, query) =>{
    const [data, setData] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);
    const rapidapi = RAPID_API_KEY

    const options = {
        method: 'GET',
        url: `https://jsearch.p.rapidapi.com/${endpoint}`,
        headers: {
            'x-rapidapi-key': rapidapi,
            'x-rapidapi-host': 'jsearch.p.rapidapi.com'
        },
        params: {...query},
    };
}

export default useFetch