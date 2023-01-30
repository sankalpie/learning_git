import './App.css';
import Description from './componenets/Description';
import Navbar from './componenets/Navbar';
import 'prismjs/components/prism-clike';
import 'prismjs/components/prism-c';
import 'prismjs/components/prism-cpp';
import 'prismjs/components/prism-java';
import 'prismjs/components/prism-python';
// import Prism from "prismjs";
import 'prismjs/themes/prism-okaidia.css';

import 'prismjs/plugins/line-numbers/prism-line-numbers';

function App() {
  
  return (
    <div >
      <Navbar/>
      <Description/>
    </div>
  );
}

export default App;
