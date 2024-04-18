import React from 'react';
import './App.css';
import NameForm from './Container/NameForm';
import NumberWheels from './Container/NumberWeels';
import VehicleType from './Container/VehicleType';
import SpecificModel from './Container/SpecificModel';

function App() {
  const handleNameSubmit = (nameData: { firstName: string; lastName: string }) => {
    console.log('Received name data:', nameData);
  };

  const handleWheelsSubmit = (wheels: number) => {
    console.log('Received number of wheels:', wheels);
  };

  const handleVehicleTypeSubmit = (vehicleType: string) => {
    console.log('Received vehicle type:', vehicleType);

  };

  const handleModelSubmit = (selectedModel: string) => {
    console.log('Received selected model:', selectedModel);

  };

  return (
    <div className="App">

        <NameForm onNext={handleNameSubmit} />


        <NumberWheels onNext={handleWheelsSubmit} />


        <VehicleType wheels={4} onNext={handleVehicleTypeSubmit} />

        <SpecificModel onNext={handleModelSubmit} />
      {/* </header> */}
    </div>
  );
}

export default App;
