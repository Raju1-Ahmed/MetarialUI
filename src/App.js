import './App.css';
import MuiBreadCrumbs from './Component/MuiBreadCrumbs.tsx';
import { MuiDrawer } from './Component/MuiDrawer.tsx';
// import { MuiLink } from './Component/MuiLink.tsx';
// import { MuiAccordion } from './Component/MuiAccordion.tsx';
// import { MuiImageList } from './Component/MuiImageList.tsx';
import { MuiNavbar } from './Component/MuiNavbar.tsx';
import { MuiSpeedDial } from './Component/MuiSpeedDial.tsx';
// import { MuiAutoComplete } from './Component/MuiAutoComplete.tsx';
// import MuiButton from './Component/MuiButton.tsx';
// import { MuiCard } from './Component/MuiCard.tsx';
// import MuiCheckBox from './Component/MuiCheckBox.tsx';
// import { MuiLayout } from './Component/MuiLayout.tsx';
// import MuiRadioButton from './Component/MuiRadioButton.tsx';
// import { MuiSelect } from './Component/MuiSelect.tsx';
// import { MuiSwitch } from './Component/MuiSwitch.tsx';
// import { MuiTextField } from './Component/MuiTextField.tsx';
// import MuiTypography from './Component/MuiTypography.tsx';


function App() {
  return (
    <div  className='App'>
      {/* <MuiTypography/>
      <MuiButton/>
      <MuiTextField/>
      <MuiSelect/>
      <MuiRadioButton/>
      <MuiCheckBox/>
      <MuiSwitch/>
      <MuiAutoComplete/>
      <MuiLayout/> */}
      {/* <MuiCard/> */}
      {/* <MuiAccordion/> */}
      {/* <MuiImageList/> */}
      <MuiNavbar/>
      <MuiBreadCrumbs/>
      <MuiDrawer/>
      <MuiSpeedDial/>
      {/* <MuiLink/> */}
    </div>
  );
}

export default App;
