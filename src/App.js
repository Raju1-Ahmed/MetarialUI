import './App.css';
import MuiButton from './Component/MuiButton.tsx';
import MuiCheckBox from './Component/MuiCheckBox.tsx';
import MuiRadioButton from './Component/MuiRadioButton.tsx';
import { MuiSelect } from './Component/MuiSelect.tsx';
import { MuiTextField } from './Component/MuiTextField.tsx';
import MuiTypography from './Component/MuiTypography.tsx';


function App() {
  return (
    <div  className='App'>
      <MuiTypography/>
      <MuiButton/>
      <MuiTextField/>
      <MuiSelect/>
      <MuiRadioButton/>
      <MuiCheckBox/>
    </div>
  );
}

export default App;
