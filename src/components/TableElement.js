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
  return (
    <tr className='table-row' onClick={()=>{/*generateMain(id)*/ }}>
        <td className='td-hash'>{rank}</td>
        <td className='td-name'>{<img className='table-icon' src={iconUrl} alt='icon'/>}{name}<div className='symbol'>&nbsp; • {symbol}</div></td>
        <td className='td-change' style={{color: color}}>
            <div className='percentage'>
              {percenter(change)}
            </div>
          </td>
        <td><div className='td-price'>{gbFormatter(price)}</div></td>
        <td><div className='td-btc'>{btcFormatter(btcprice)}</div></td>
        <td><div  className='td-cap'>{moneyFormatter(marketCap)}</div></td>
        <td><div  className='td-volume'>{moneyFormatter(volume24)}</div></td>
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
