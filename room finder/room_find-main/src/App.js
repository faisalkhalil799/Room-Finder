import logo from './logo.jpeg';
import './App.css';

function Head(){
  return (
    <div>

      {/* <h1>My name is Faisal Khalil</h1>
       */ }
      <img src={logo} alt="Logo" />
    </div>
  );
}


function Contain(){
  return (
    <>
    <input></input>
    </>
  );
}
function Buttons(){
  return (
    <>
    {/* <input></input> */}
    <button className="btn" >Sign Up</button>
    <button className="btn1">Log In</button>
    </>
  );
}

function Location(){
  return (

    <>
    <select>
      <option value="zakir">Zakir Nagar</option>
      <option value="zakir">Batla House</option>
      <option value="zakir">Hari Masjid</option>
      <option value="zakir">Shaheen Bagh</option>
      <option value="zakir">Jauhri Farm</option>
    </select>
    </>
  );
}
function GetGender(){
  return (
    <>
    <input type="radio" value="male" name="radio"></input>Male
    <input type="radio" value="female" name="radio"></input>Female
    </>
  );
}

function Flattype(){
  return (

    <>
    <select>
      <option value="zakir">1 Room</option>
      <option value="zakir">1 BHK</option>
      <option value="zakir">2 BHK</option>
      <option value="zakir">3 BHK</option>
    </select>
    </>
  );
}

function Parking(){
  return (
    <>
    <select>
      <option value="zakir">2 Wheeler</option>
      <option value="zakir">4 Wheeler</option>
    </select>
    </>
  );
}

function People(){
  return (

    <>
    <input type="number"></input>
    </>
  );
}

function Budget(){
  return (
    <>
      <select>
      <option value="zakir">2000-6000</option>
      <option value="zakir">6000-10,000</option>
      <option value="zakir">10,000-15000</option>
    </select>
    </>
  );
}
function Lowerbody()
{
  
}
function App() {
  const list=[
    { "location":"zakir nagar",
       "gender":"male", 
      "apartment":"1BHK",
      "parking":"2 wheeler",
      "number of people":1,
       "budget":6000
          },
    { "location":"batla house",
       "gender":"female", 
      "apartment":"2BHK",
      "parking":"4 wheeler",
      "number of people":4,
       "budget":9000
          },
    { "location":"jauhri farm",
       "gender":"female", 
      "apartment":"1BHK",
      "parking":"2 wheeler",
      "number of people":2,
       "budget":3000
          },
    { "location":"batla house",
       "gender":"male", 
      "apartment":"1BHK",
      "parking":"2 wheeler",
      "number of people":1,
       "budget":6000
          },
    { "location":"shaheen bagh",
       "gender":"female", 
      "apartment":"1BHK",
      "parking":"2 wheeler",
      "number of people":1,
       "budget":15000
          },
    { "location":"zakir nagar",
       "gender":"male", 
      "apartment":"1 room",
      "parking":"2 wheeler",
      "number of people":1,
       "budget":7000
          },
    { "location":"batla house",
       "gender":"female", 
      "apartment":"2BHK",
      "parking":"2 wheeler",
      "number of people":3,
       "budget":11000
          },
    { "location":"jauhri farm",
       "gender":"female", 
      "apartment":"1BHK",
      "parking":"2 wheeler",
      "number of people":4,
       "budget":6000
          },
    { "location":"batla house",
       "gender":"male", 
      "apartment":"1BHK",
      "parking":"2 wheeler",
      "number of people":1,
       "budget":2000
          },
    { "location":"shaheen bagh",
       "gender":"female", 
      "apartment":"1 room",
      "parking":"2 wheeler",
      "number of people":1,
       "budget":10000
          }
  
  ];
  return (
    <div>
      <header className="App-header">
        <Head />
        <Buttons />
       </header>
       <h1 className="h1">
        World's Largest NoBrokerage Room Finder Site
        </h1>
      <div className="container">
        
    

     <p style={{textAlign:"left"}}> Your Location<Location/></p>
   
     <p style={{textAlign:"left"}}> Select Gender <GetGender/></p>

     <p style={{textAlign:"left"}}> Apartment Type <Flattype/></p>
   
     <p style={{textAlign:"left"}}> Parking:- <Parking/></p>
     
     <p style={{textAlign:"left"}}>  Number of People:- <People /></p>
   
     <p style={{textAlign:"left"}}>  Budget:- <Budget/>  &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; <button>Search</button></p>

      </div>
      {/* <Contain/> */}
    </div>
  );
}

export default App;
