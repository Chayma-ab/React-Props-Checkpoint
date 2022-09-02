import './App.css';
import Profile from './profile/Profile';

function App() {

  

  const handelAlert=(user)=>alert(`I am ${user}`);
  return (
    <div className="App">
      <Profile
      FullName = "Chaima Abidalli"
      Bio = "GIS engineer, on the road to build a career on web development"
      Profession = "geomatics engineer"
      handelAlert = {handelAlert}
    
      children={ <div className='Photo'>
        <img 
        src="../../chaima.jpg" 
        alt='myPhoto'
        width={300}
        height={300}
         />
        </div> }
        
      />

    </div>
  );
}

export default App;
