import './App.css';
import { MuiAutoComplete } from './Component/MuiAutoComplete.tsx';
import MuiButton from './Component/MuiButton.tsx';
import MuiCheckBox from './Component/MuiCheckBox.tsx';
import { MuiLayout } from './Component/MuiLayout.tsx';
import MuiRadioButton from './Component/MuiRadioButton.tsx';
import { MuiSelect } from './Component/MuiSelect.tsx';
import { MuiSwitch } from './Component/MuiSwitch.tsx';
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
      <MuiSwitch/>
      <MuiAutoComplete/>
      <MuiLayout/>
    </div>
  );
}

export default App;
