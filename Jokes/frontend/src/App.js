import './App.css';
import {useEffect,useState} from 'react';
import axios from 'axios'


function App() {
  const [jokes,setJokes] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:4000/jokes')
    .then((response) => {
      setJokes(response.data);
      // console.log(response.data);
    })
    .catch(function (error) {
      // handle error
      console.log(error);
    })
  });

  return (
    <div className="App">
      {
        jokes.map((joke)=>(
          <div key={joke.id}>
            <h1>{joke.title}</h1>
            <p>{joke.discp}</p>
          </div>
        ))
      }
    </div>
  );
}

export default App;
