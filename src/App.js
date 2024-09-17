
import './App.css';
import { useState } from "react";
import CatItem from "./CatItem";
import initialCats from "./initial-cats";

const App = () => {
  const [cats, setCats] = useState(initialCats);
  const [age,setAge] = useState(2);
  const [imageUrl,setImageUrl] = useState("");
  const [name,setName] = useState("");
  const [interests,setInterests] = useState("");
  const [errorAge,setErrorAge] = useState("")


  
  const catItems = cats.map((cat, idx) => <CatItem key={idx} cat={cat} />);

  return (
    <div className="flex flex-col items-center justify-center  bg-indigo-50">

      <form
        onSubmit={(e)=>{
          e.preventDefault();
          const newCat={
            age,
            imageUrl,
            name,
            interests
          };
          setCats([...cats,newCat]);
          setAge(2);
          setImageUrl("");
          setName("");
          setInterests("");
          
        }}
        className="shadow-lg mt-16 rounded-t-lg overflow-clip">
        <div className="w-full bg-purple-700 p-2 text-white text-xl flex justify-center">
        Create a cat profile
        </div>
       <div className="formContainer flex flex-col p-4">
         <div>
         
          <label htmlFor="name"></label>
        <input
          required
          value={name}
          onChange={(e)=>setName(e.target.value)}
          id="name"
          placeholder="name"
          type="text" 
          className="shadow-lg p-2 m-2" />
          
         </div>
       

         
       <div className="flex p-2 ">

         <div className="flex flex-col p-2 ">

          <label htmlFor="age">age</label>
        <input
          onChange={(e)=>{
            const newAge = Number(e.target.value);
            if(newAge < 25 && newAge > 1){
              setAge(newAge);
              setErrorAge("");
            }else{
              setAge(newAge);
              setErrorAge("age must be between 1 and 25")
            }
          }}
          required
          min={1}
          value={age}
          max={25}
          placeholder="age"
          type="number" 
          className=" w-12 shadow-lg" />
          <div className=" text-red-700 h-5 p-2 w-64" >{errorAge}</div>
        </div>


            
         <div className="flex flex-col p-2 ">

           <label htmlFor="url">url</label>
        <input
          required
          value={imageUrl}
          onChange={(e)=>setImageUrl(e.target.value)}
          id="url"
          placeholder="enter an url"
          type="text" 
          className="shadow-lg" />
         </div>
         
       </div>

     <div className="flex flex-col p-2 ">
     <label
       className="px-2"
       htmlFor="area">Tell me smth about your cat:</label>
<textarea
  value={interests}
  onChange={(e)=>setInterests(e.target.value)}
  id="area"
  row={3}
  required
  maxLength={80}
  className="shadow-lg" />    
     </div>   

         <button className="bg-pink-200 p-2 rounded-lg m-2 shadow-lg">Create</button>
         
       </div>
        
      
      </form>
      
      <div className="flex flex-col items-center w-full max-w-2xl">
        {catItems}
      </div>
    </div>
  );
};

export default App;
