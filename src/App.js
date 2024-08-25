import { Routes, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import LoginForm from './components/LoginForm';
import RegisterForm from './components/RegisterForm';
import Home from './components/Home';
import PostDetail from './components/PostDetail';
import SpecificPost from './components/SpecificPost';
import CreateBlog from './components/CreateBlog';
import EditBlog from './components/EditBlog';

function App() {
  return (
    <div className="App">
      <Routes>
          <Route exact path='/login' element={<LoginForm/>}/>
          <Route exact path='/register' element={<RegisterForm/>}/>
          <Route exact path='/' element={<Home/>}/>
          <Route exact path='/post/:id' element={<PostDetail/>}/>
          <Route exact path='/your-space' element={<SpecificPost/>}/>
          <Route exact path='/create-blog' element={<CreateBlog/>}/>
          <Route exact path='/edit/:id' element={<EditBlog/>}/>
      </Routes>
    </div>
  );
}

export default App;
