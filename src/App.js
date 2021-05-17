import { useEffect, useState } from 'react';
import './App.css';
import Cart from './Cart/Cart';
import peopleData from './fakeData/fakeData.json';
import PeopleProfile from './PeopleProfile/PeopleProfile';

function App() {
  const [profile, setProfile] = useState([]);
  const [cart, setCart] = useState([])

  /* https://jsonkeeper.com/b/CHU7 */
    // useEffect(() => {
    //   fetch('https://api.jsonbin.io/b/60a1f7081ad3151d4b3184b4')
    //   .then(res => res.json())
    //   .then(data => setProfile(data));
    // }, [])
  // const [profile, setProfile] = useState([]);

  useEffect(() => {
    setProfile(peopleData);
  }, []);

  const handleAddBtn = (profile) =>{
    const newCart = [...cart, profile];
    setCart(newCart)
    console.log(newCart);
  }

  return (
    <div>
      <div className="container">
        <div className="userporfile">
          <div className="headerItem">
            <h1>User Profile</h1>
            <h2>People may you know</h2>
            <p>Total profile: {profile.length}</p>
          </div>
          {
            console.log(profile)
          }
          <div className="card-container">
          {
            profile.map(profile => <PeopleProfile profile={profile} handleAddBtn={handleAddBtn}></PeopleProfile>)
          }
          </div>
        </div>
        <div className="usercount">
          <h1>Total Added Profile : {cart.length}</h1>
          {
            cart.map((cart) => <Cart cart={cart}></Cart> )
            
          }

        </div>
      </div>



    </div>
  );
}

export default App;
