import React, {useState, useEffect} from 'react'
import { Link, useHistory } from 'react-router-dom';

function POSTFetch(url, data, redirect) {

    const history = useHistory();
            const result = fetch(url, {
            method: 'POST',
            headers: {
                "Content-Type": "application/json",
                'Accept': 'application/json'
            },
            body: JSON.stringify(data)
            })
            .then((response) => {
                console.log('Added');
                history.push(redirect);
            })
            .catch((error) => {
                console.log('Error');
            });
            return result;
}

export default POSTFetch;
