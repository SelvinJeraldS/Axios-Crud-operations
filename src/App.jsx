// import React from 'react';
// import { BrowserRouter, Route,Routes } from 'react-router-dom';
// import Home from './Pages/Home';
// import Create from './Pages/Create';
// import Edit from './Pages/Edit';
// import Users from './Pages/Users';

// import Navbar from './Components/Navbar';


// const App = () => {
//   return (
//     <div>
//       <h1>Welocme Crud</h1>

//       <BrowserRouter>
// {/* <div>  <Navbar/></div> */}
//         <Routes>
// <Route path='/'  element={<Home/>}></Route>
// <Route path='/create'  element={<Create/>}></Route>

// <Route path='/edit:id'  element={<Edit/>}></Route>

// <Route path='/users'  element={<Users/>}></Route>


//         </Routes>
      
//       </BrowserRouter>
//       <Users/>
//     </div>
//   );
// };

// export default App;

import React, { useState } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './Pages/Home';
import Create from './Pages/Create';
import Edit from './Pages/Edit';
import Users from './Pages/Users';
import Navbar from './Components/Navbar';
import Footer from './Components/Footer';
import EditUserForm from './Pages/EditUserForm';

const App = () => {
  
  return (
    <div>
      <h1>Welcome Crud</h1>

      <BrowserRouter>
       
        <Navbar />
        <Routes>
         <Route path='/' element={<Home/>}> </Route>
         <Route path='/users' element={<Users/>}/> 
         <Route path='/edit/:id' element={<Edit  />}/> 
         <Route path='/create' element={<Create/>}/> 
        

        </Routes>
        <div>
          <Footer/>
        </div>
      </BrowserRouter>
    </div>
  );
};

export default App;
