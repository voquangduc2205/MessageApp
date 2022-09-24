import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Login from './Component/Login';
import SignUp from './Component/SignUp';
import FriendList from './Component/Messenger/FriendList';

function App() {
  return (
    <div>
        <BrowserRouter>
        <Routes>
          <Route exact path = '/' element={<Login />} />
          <Route path = '/sign_up' element={<SignUp />} /> 
          <Route path = '/user/:userID' element={<FriendList />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
