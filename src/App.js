import DBC from './components/DBC/DBC';
import DFC from './components/DFC/DFC';
import DIBC from './components/DIBC/DIBC';
import DIC from './components/DIC/DIC';
import Flex from './components/Flex/Flex';
import Title from './components/Title/Title';

function App() {
  return (
    <div className='App'>
      <Title />
      <div style={{marginTop: '20px'}}>Властивість <b>display</b> є найбільш важливою властивістю CSS для управління макетом.</div>
      <DBC/>
      <DIC/>
      <DIBC/>
      <DFC/>
      <Flex/>
    </div>
  );
}

export default App;
