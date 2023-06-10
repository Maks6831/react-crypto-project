import React from 'react';
import '../styles/TableElement.css';

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
  return (
    <tr className='table-row' onClick={()=>{/*generateMain(id)*/ }}>
        <td className='td-hash'>{rank}</td>
        <td className='td-name'>{<img className='table-icon' src={iconUrl} alt='icon'/>}{name}<div className='symbol'>&nbsp; • {symbol}</div></td>
        <td className='td-change' style={{color: color}}>
            <div>
              {change}
            </div>
          </td>
        <td className='td-price'>{price}</td>
        <td className='td-btc'>{btcprice}</td>
        <td className='td-cap'>{marketCap}</td>
        <td className='td-volume'>{volume24}</td>
        <td className='td-graph'>
            <div className='little-line'>
            {/*<ResponsiveContainer width="100%" height="100%" className='response'>
        <AreaChart
            width={150}
            height={50}
            data={graphData}
            margin={{
                top: -30,
                right: 0,
                left: 0,
                bottom: -30,
              }}
              yAxis={{
                domain: [0, 100],
                axisLine: false, // hide the axis line
                tickLine: false, // hide the tick lines
              }}
        >
            <YAxis display="none" domain={[lower, upper]}/>
          <Area type="monotone" dataKey="price" stroke={lineColor} fill="none"/>
        </AreaChart>
            </ResponsiveContainer>*/}
            </div>
            </td>
            </tr>
  )
}
