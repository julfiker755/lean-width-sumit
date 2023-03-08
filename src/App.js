import './App.css'
import image1 from './img/lws-logo.svg'
import { Provider} from 'react-redux'
import store from './components/Redux/store'
import FightInput from './components/FightInput'
import Fight from './components/Fight'


export default function App() {
    return (
         <Provider store={store}>
             <>
          {/* header */}
          <header id="header">
                <div className="container">
                    <img src={image1} alt="logo" className="logo" />
                    <div className="flex items-center">
                        <a className="text-white min-w-[50px] font-medium" href="#">Home</a>
                        <button className="log-btn btn">Login</button>
                    </div>
                </div>
            </header>
    {/* <!-- Input Data --> */}
       <FightInput></FightInput>
           {/* <!--------------------- Preview Data ----------------------> */}
    <div className="table-container">
      <table className="booking-table">
        <thead className="bg-gray-100/50">
          <tr className="text-black text-left">
            <th>Destination From</th>
            <th>Destination To</th>
            <th className="text-center">Journey Date</th>
            <th className="text-center">Guests</th>
            <th className="text-center">Class</th>
            <th className="text-center">Delete</th>
          </tr>
        </thead>
        <Fight></Fight>
      </table>

      
    </div>
   
          </>
         </Provider>
    );
}
