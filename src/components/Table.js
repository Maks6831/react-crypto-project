import React, { useEffect, useState } from 'react'
import { TableElement } from './TableElement';

export const Table = () => {
    const [tableData, setTableData] = useState();
    const url = 'https://coinranking1.p.rapidapi.com/coins?referenceCurrencyUuid=yhjMzLPhuIDl&timePeriod=24h&tiers%5B0%5D=1&orderBy=marketCap&orderDirection=desc&limit=50&offset=0';
const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': process.env.REACT_APP_COINRANKING_APIKEY_SIX,
		'X-RapidAPI-Host': 'coinranking1.p.rapidapi.com'
	}
};

const  initialFetch = async ()=> {



try {
	const response = await fetch(url, options);
	const result = await response.json();
	console.log(result.data.coins);
    setTableData(result.data.coins)
} catch (error) {
	console.error(error);
}
}
useEffect(()=>{
    initialFetch();

},[])


  return (
    <div>
        <table className='table'>
          <thead className='thead'>
            <tr>
            <th className='table-headers hash'>#</th>
            <th className='table-headers tname'>Name</th>
            <th className='table-headers tchange'>Change(24h)</th>
            <th className='table-headers tprice'>price</th>
            <th className='table-headers tbtc'>price in BTC</th>
            <th className='table-headers tcap'>Market Cap</th>
            <th className='table-headers tvolume'> Volume 24h</th>
            <th className='table-headers tgraph'>price graph (7d)</th>
            </tr>
          </thead>
          <tbody>
            { tableData &&
            tableData.map((coin)=>(
                <TableElement
                id={coin.uuid}
                symbol={coin.symbol}
                name={coin.name}
                color={coin.color}
                iconUrl={coin.iconUrl}
                marketCap={coin.marketCap}
                volume24={coin['24hVolume']}
                change={coin.change}
                rank={coin.rank}
                price={coin.price}
                sparkline={coin.sparkline}


                />
            ))

            }

          </tbody>
          </table>

    </div>
  )
}
