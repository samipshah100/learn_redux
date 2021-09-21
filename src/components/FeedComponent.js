import axios from "axios";
import React from "react";
import { useEffect, useState } from "react";


// functional component
export default function FeedComponent() {
  const [count, setCount] = useState(0);
  const [b, setb] = useState(0);
  const [isError, setIsError] = useState(false);
  const [feedData, setFeedData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  // no dependency array
  // useEffect(()=>{
  //     console.log('rendering')
  // })

  // // dependency array
  // useEffect(()=>{
  //     console.log('rendering')
  // },[b])

  //dependact array is empty on first mount

  // // do side effects here. do api calls here
  // useEffect(()=>{
  //     // console.log('rendering on app mount' )
  //     axios.get('https://reqres.in/api/users?page=2')
  // },[])

  // call back function , dependency array

  // api  call with async   
  useEffect(async () => {
    await loadPosts();
    console.log("rendering");

    // this function will be called whenver component will unmount
    return ()=>{

      // unsubscibre any listener
    }
  }, []);

  const loadPosts = async () => {
    try {
      setIsLoading(true);
      const res = await axios.get("https://reqres.in/api/users?delay=3");
      setIsLoading(false);
      console.log(res);

      setFeedData(res.data.data);

      // IF YOU ARE USING FETCH
      // if (res.status === 200) {
      //   setIsError(false);
      // } else {
      //   setIsError(true);
      // }
    } catch (error) {
      // axios will auto catch the error
      setIsError(true);
      setIsLoading(false);
    }
  };

  // const age = 22
  // 'my age is ', 22
  // ``
  // `My Age is ${age}sdkfj sdkf j sdjf `

  if (isError) {
    return <p>Sorry error occured. Please check your internet. </p>;
  }

  return (
    <div>
      <p>Welcome to my website. </p>
      <button onClick={() => setCount(count + 1)}>Button</button>
      {/* {res.data && res.data.data.map(item=><p>
        `First name: ${item.first_name}`
      </p>)} */}
      <br />
      {!isLoading ? (
        feedData.map((item) => (
          <p key={item.id}>First name: {item.first_name}</p>
        ))
      ) : (
        <img
          src="loader.gif"
          style={{
            height: 40,
            width: 40,
          }}
        />
      )}
    </div>
  );
}

// home work
// make a second page in react router for user feed
// display user list using axios and card
