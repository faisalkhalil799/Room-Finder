import logo from './logo.jpeg';
import './App.css';

function Head(){
  return (
    <div>

      {/* <h1>My name is kashif</h1>
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
    <button>Log In</button>
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
function App() {
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
