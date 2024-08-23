import "./App.css";
import DropDownComponent from "./component/DropDownComponent";

function App() {

  const dropdownItems = [
    { label: 'option A', type: 'text' },
    
  ]

  return (
    <div>
      <DropDownComponent buttonLabel="Filter Options" items={dropdownItems} />
    </div>
  );
}

export default App;
