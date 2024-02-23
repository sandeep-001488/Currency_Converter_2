// // import {useEffect,useState} from 'react'

// //    function useCurrencyInfo(currency){
// //     const [data,setData]=useState({})
// //     // added
// //     // const [error,setError]=useState(null);
// //     useEffect(()=>{
// //         fetch(`https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/${currency}.json`)
// //         .then((res)=>res.json())
// //         .then((res)=>setData(res[currency])
// //     )
// //     },[currency])

    
// //     return data
// // }
// // export default useCurrencyInfo;

import { useEffect, useState } from 'react';

function useCurrencyInfo(currency) {
  const [data, setData] = useState({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

//   useEffect(() => {
//     fetch(`https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/${currency}.json`)
//       .then((res) => res.json())
//       .then((res) => {
//         setData(res[currency]);
//         console.log('Currency Info:', res[currency]);
//       })
//       .catch((error) => {
//         console.error('Error fetching currency info:', error);
//       });
//   }, [currency]);
// }
  





// export default useCurrencyInfo;
useEffect(() => {
    setLoading(true);
  
    fetch(`https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/${currency}.json`)
      .then((res) => {
        if (!res.ok) {
          throw new Error(`Failed to fetch data: ${res.status} ${res.statusText}`);
        }
        return res.json();
      })
      .then((res) => {
        console.log("entire response ",res);
        const currencyData = res[currency];
        if (currencyData) {
          setData(currencyData);
        } else {
          throw new Error(`Currency data not found for ${currency}`);
        }
      })
      .catch((error) => {
        setError(error.message);
      })
      .finally(() => {
        setLoading(false);
      });
  }, [currency]);
  
  
}
  
  export default useCurrencyInfo;