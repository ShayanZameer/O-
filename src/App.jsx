



// import React from 'react';
// import { BrowserRouter as Router } from "react-router-dom";
// import MainContent from './Stack/MainContent';

// import DashboardStack from './Stack/DashboardStack';
// const App = () => {
//   return (
//     <Router>
//       <MainContent />

//       <DashboardStack/>
//     </Router>
//   );
// }

// export default App;



import React from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import MainContent from './Stack/MainContent';
import DashboardStack from './Stack/DashboardStack';
import Dashboardd from './Pages/Dashboardd';

const App = () => {
  return (
    <Router>
      {/* <MainContent/> */}
      
      <Routes>
        <Route path="/dashboard/*" element={<DashboardStack />} />
        <Route path="/*" element={<MainContent />} />
      </Routes>
    </Router>
  );
}

export default App;

