import logo from './logo.svg';
import './App.css';
import Header from './componets/Header'
import Button from './componets/Button'
import Message from './componets/Message'


import img from './img.jpeg'




function App() {
  const brand = "Rain"
  const First = "Mark"
  const Last = "Spence"
  return (
    <div className="container">

<nav style={navStyle}>
  <h1 style={brandStyle}>{brand}</h1>
</nav>
<img src={img} className="account-img" />
<h1><b><u>{First}{Last}</u></b></h1>
<Header />
<Button />
<hr />

<Message />
    </div>
  );
}
const brandStyle = {
  color: 'Blue',

}
const navStyle = {
  backgroundColor: 'Black',
}
export default App;
