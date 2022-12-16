
import './App.css';


//to-do taski


// import { useState } from 'react';

// function App() {

// const [text,setText]=useState("")


// const handleChange=(e)=>{
 
//   setText(e.target.value)
// }
//  const handleSubmit=(e)=>{
//   e.preventDefault();

//   if(text){
//     console.log(text);
//   }else{
//     alert("Input bosdur")
//   }
//   setText("")
//  }


//   return (
//     <div className="App">
//       <form onSubmit={handleSubmit}>
//         <input placeholder='create text' value={text} onChange={handleChange}/>
//         <input type="submit"/>
//       </form>
//     </div>
//   );
// }





//+0- taski


// import React, { useState } from 'react';

// function App() {
//   const [count, setCount] = useState(0);
 

//   return (
//     <div>
    
//       <button onClick={() => setCount(count + 1)}>
//         +
//       </button>
//       <span>{count}</span>
//       <button onClick={() => setCount(count - 1)}>
//         -
//       </button>
//     </div>
//   );
// }




//divi gizle goster



// import React, { useState } from 'react';

// function App() {

//  const [vis, setVis] = useState();

//  const Hide=()=>{
//   setVis("none")
//   }

//   const Show=()=>{
//     setVis("block")

//     }

//   return (
//     <div>
    
//       <div className='div'style={{display:vis}}>
       
//       </div>
//       <button onClick={Hide}>Hide</button>
//         <button onClick={Show}>Show</button>
      
     
//     </div>
//   );
// }





import React, { useState } from 'react';

function App() {

 const [vis, setVis] = useState(true);

 const Hide=()=>{
  setVis(false)
  }

  const show=()=>{
    setVis(true)
    }

 

  return (
    <>
    
    {
         vis && ((<button onClick={Hide}><span>Hide</span></button> ) )
       
      }
     
      {
         vis && (<p>Toggle</p>)
        
       
      }

{
  vis==false && (<button  onClick={show}>Show</button>)
}

   
    
     
    </>
  );
}














export default App;
