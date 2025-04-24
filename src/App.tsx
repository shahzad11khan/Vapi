import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Layout from './components/Reuseable/Layout';
import Dashboard from './components/dashboard/Dashboard';
import Assistants from './components/Assistants/Assistants';
import Workflows from './components/Workflows/Workflows';
import PhoneNumber from './components/PhoneNumber/PhoneNumber';
import Tools from './components/Tool/Tool';
import ToolForm from './components/Tool/ToolForm';
import Files from './components/File/File';
import Squads from './components/Squads/Squads';
import Login from './components/Auth/Login';
import Signup from './components/Auth/Signup';

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/Signup" element={<Signup />} />

          {/* 👇 Routes that are wrapped inside Layout */}
          <Route path="/" element={<Layout />}>
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/Assistant" element={<Assistants />} />
            <Route path="/Workflows" element={<Workflows />} />
            <Route path="/PhoneNumbers" element={<PhoneNumber />} />
            <Route path="/Tools" element={<Tools />} />
            <Route path="/create-tool" element={<ToolForm />} />
            <Route path="/Files" element={<Files />} />
            <Route path="/Squads" element={<Squads />} />
          </Route>
        </Routes>
      </Router>
      <ToastContainer
        position="top-right"
        autoClose={3000}
        hideProgressBar={true}
        newestOnTop={false}
        closeOnClick={false}
        closeButton={false}
        limit={2}
        toastStyle={{
          fontSize: '11px',
          padding: '8px 12px',
          minHeight: '30px',
          width: '200px',
          borderRadius: '4px',
          backgroundColor: '#2f2f2f',
          color: '#fff',
        }}
        />      </>
  );
}

export default App;
