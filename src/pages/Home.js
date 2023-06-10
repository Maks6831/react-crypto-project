import React from 'react'
import { Table } from '../components/Table';

export const Home = () => {

const url = 'https://coinranking1.p.rapidapi.com/coins?referenceCurrencyUuid=yhjMzLPhuIDl&timePeriod=24h&tiers%5B0%5D=1&orderBy=marketCap&orderDirection=desc&limit=50&offset=0';
const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': 'd5d189dccbmsh2ab4d6cb457627ap192a53jsn3fd7cd6caa99',
		'X-RapidAPI-Host': 'coinranking1.p.rapidapi.com'
	}
};

const  initialFetch = async ()=> {



try {
	const response = await fetch(url, options);
	const result = await response.json();
	console.log(result);
} catch (error) {
	console.error(error);
}
}

initialFetch();

  return (
    <div>
        <Table/>
    </div>
  )
}
