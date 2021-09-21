import React from 'react'
import { useSelector, Connect, useDispatch } from 'react-redux'
import { buyDosa } from '../redux/actions/restaurantActions'


export default function Dhaba() {
     const dosaCount =useSelector(state => state.restaurant.dosaCount)
     const idliCount =useSelector(state => state.restaurant.idliCount)
     const dispatch =useDispatch(buyDosa)

     const handleBuyDosa = ()=>{
         console.log('BUYING A DOSA. BEFORE:  ', dosaCount) 

         //  call redux action
         dispatch(buyDosa())

         console.log('BUYING A DOSA. BEFORE:  ', dosaCount)
     }
    return (
        <div>
        <p style ={{

            marginLeft: 'auto',
            marginRight: 'auto',
            maxWidth : 700,
            marginTop:20, 
            // height:500,
            // display:'flex',
            // flexDirection:'column',
            // justifyContent:'space-around'


        }}>
            <p>
            `Number of Dosas available : ${dosaCount}`

            </p>
            <p>
            {/* `Number of Idlis available : ${idliCount}` */}

            </p>

            <button onClick = {handleBuyDosa}>Buy Dosa</button><br/>
            {/* <button onClick = {handleBuyIdli}>Buy Idli</button><br/> */}
        </p>
 </div>   )
}
