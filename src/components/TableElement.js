import React, { useEffect, useState } from 'react';
import '../styles/TableElement.css';
import { Line, LineChart, ResponsiveContainer, YAxis } from 'recharts';

export const TableElement = ({id, 
  symbol,
  name,
  color,
  iconUrl,
  marketCap, 
  volume24, 
  change, 
  rank,
  price,  sparkline,
  btcprice
}) => {
 
  const [graphData, setGraphData] = useState([]);
  const [graphReady, setGraphReady] = useState(false)
  const [background, setBackground] = useState();
  const [lineColor, setLineColor] = useState();
  const percenter = (percent)=> {
 
    return percent.includes('-') ? percent + '%' : '+' + percent + '%'
  }

  const gbFormatter = (num) => {
    return "£" + parseFloat(num).toFixed(2)
  }

  const btcFormatter = (number) =>{
    const num = parseFloat(number);
    return num < 0.000000001 ? "0" : num.toFixed(8);
  }

  const moneyFormatter = (num) => {
    if(1000000 <= num && num < 1000000000){
      return '£' + (num / 1000000).toFixed(1) + 'M';
    } else if(num >= 1000000000 ){
      return '£' + (num / 1000000000).toFixed(1) + 'B';

    }
  }
 

  useEffect(() => {
    if (sparkline.length > 0) {
      setGraphData(
        sparkline.map((value, index) => ({
          value: value,
          index: index
        }))
      );
      setGraphReady(true);
    }
  }, [sparkline]);

  useEffect(()=>{
    change.includes('-') ? setBackground(false): setBackground(true);
    change.includes('-') ? setLineColor('#ff4d4d') : setLineColor('#6ccf59');
  },[])

  const min = (Math.min(...sparkline)) * 1.5;
  const max = (Math.max(...sparkline)) * 0.6;
    
  return (
    <tr className='table-row' onClick={()=>{/*generateMain(id)*/ }}>
        <td><div className='td-hash'>{rank}</div></td>
        <td className='td-name'>{<img className='table-icon' src={iconUrl} alt='icon'/>}{name}<div className='symbol'>&nbsp; • {symbol}</div></td>
        <td className='td-change' style={{color: color}}>
            <div className='percentage'>
              <div className={!background ? 'background-down':'background-up'} style={{color: lineColor}}>{percenter(change)}</div>
              
            </div>
          </td>
        <td><div className='td-price'>{gbFormatter(price)}</div></td>
        <td><div className='td-btc'>{btcFormatter(btcprice)}</div></td>
        <td><div  className='td-cap'>{moneyFormatter(marketCap)}</div></td>
        <td><div  className='td-volume'>{moneyFormatter(volume24)}</div></td>
        <td className='td-graph'>
            <div className='little-line'>
            { graphReady && <ResponsiveContainer width="100%" height="100%">
        <LineChart 
        width={300} 
        height={100} 
        data={graphData}
        margin={{
          top: 10,
          right: -40,
          left: -40,
          bottom: 10,
        }}
        >
          <Line type="monotone" dataKey="value" stroke={lineColor} strokeWidth={1} dot={false} />
          <YAxis domain={[min, max]} axisLine={false} tickLine={false} display='none' />
        </LineChart>
      </ResponsiveContainer>}
            </div>
            </td>
            </tr>
  )
}
