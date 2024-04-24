import './App.css';
import Header from './component/Header';
import Main from './component/Main';
import Footer from './component/Footer';
import { useState } from 'react';

function App() {
  const [data, setData] = useState([]);
  
  const updateData = (newData) => {
		setData(newData);
    console.log(data);
  };

  return (
		<div className="App">
			<Header updateData={updateData} />
			<Main data={data} />
			<Footer />
		</div>
  );
}

export default App;
