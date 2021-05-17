import {useState} from 'react'
 function Button() {
    const [buttonText, setButtonText] = useState("Follow");
  
   const handleClick = () => {
      switch (buttonText) {
        case "My Button":
          setButtonText("Follow");
          break;
        case "Follow":
          setButtonText("Unfollow");
          break;
        case "My Button 2":
          setButtonText("Whoops");
          break;
        default:
          setButtonText("Follow");
          break;
      }
    };

    return (
        <div className="App">
        <button className="btn" onClick={() => handleClick()}>{buttonText}</button>
      </div>
    )
}

export default Button


  

