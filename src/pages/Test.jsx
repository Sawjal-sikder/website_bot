import React from 'react'
import axios from 'axios'

function Test() {


    const handleTest = async () => {
      try {

        const payload = {
          message: "Hello"
        };

        // // post to http://10.10.7.76:14009/api/chat/ using fetch
        // const response = await fetch('http://10.10.7.76:14009/api/chat/', { 
        //   method: 'POST',
        //   headers: {
        //     'Content-Type': 'application/json'
        //   },
        //   body: JSON.stringify(payload)
        // });

        //  const data = await response.json();
        // console.log("Test response:", data);  

        const res = await axios.post(
          'http://10.10.7.76:14009/api/chat/',
          payload
        );

        console.log("Test response using axios:", res.data);

       

        

      

      } catch (error) {
        console.error("Error in test function:", error)
      }
    }

  return (
    <div>
      
      
      <button onClick={handleTest}>Test Page</button>
    </div>
  )
}

export default Test
