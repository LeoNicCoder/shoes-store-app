import React from 'react';
import logo from '../../images/logo.svg';
import '../../assets/styles.output.css';
import List from '../sidebar/List';
import Footer from '../footer/Footer';
import RangeSelector from '../sidebar/RangeSelector';

const brandList = [
  'Nike',
  'Adidas',
  'Reebok'
];

const modelList = [
  'Red Violent',
  'Anything',
  'Master Blue',
  'Gigant Gray',
  'Random Value',
];

function App() {
  return (
    <div className="App">
      <header className="flex items-center justify-between bg-white px-3 shadow">
        <img src={logo} className="w-12 h-12" alt="logo" />
        <button className="text-gray-200 text-sm bg-primary rounded-full 
        py-1 px-4 active:outline-none">Saber más</button>
        <p>Deployed with <strong>Vercel ⧊</strong></p>
        
      </header>

      <div className="flex">

        <div className="mt-8 sb-w pl-2">
          <List name="brand" label="Brand" options={brandList}/>
          <List name="model" label="Model" options={modelList}/>
          <List name="model" label="Model" options={modelList}/>
          <RangeSelector initial_value={50} step={50} min={0} max={500} tag="Price"/>
        </div>
      </div>


      <Footer />

    </div>
  );
}

export default App;
