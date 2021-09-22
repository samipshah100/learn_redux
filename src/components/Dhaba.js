import React from "react";
import { useSelector, Connect, useDispatch } from "react-redux";
import { buyDosa, buyIdli } from "../redux/actions/restaurantActions";

export default function Dhaba() {
  const dosaCount = useSelector((state) => state.restaurant.dosaCount);
  const idliCount = useSelector((state) => state.restaurant.idliCount);
  const dispatch = useDispatch();

  const handleBuyDosa = () => {
    //  call redux action
    dispatch(buyDosa());
  };
  const handleBuyIdli = () => {
    //  call redux action
    dispatch(buyIdli());
  };
  return (
    <div>
      <p
        style={{
          marginLeft: "auto",
          marginRight: "auto",
          maxWidth: 700,
          marginTop: 20,
          // height:500,
          // display:'flex',
          // flexDirection:'column',
          // justifyContent:'space-around'
        }}
      >
        <p>Number of Dosas available : {dosaCount}</p>
        <p>Number of Idlis available : {idliCount}</p>

        <button onClick={handleBuyDosa}>Buy Dosa</button>
        <br />
        <button onClick={handleBuyIdli}>Buy Idli</button>
        <br />
      </p>
    </div>
  );
}
