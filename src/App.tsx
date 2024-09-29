import { HashRouter, Navigate, Route, Routes } from 'react-router-dom'; // HashRouter로 변경
import { ToastContainer } from 'react-toastify';
import './App.css';
import { CreateNoteModal, TagsModal } from './components';
import { useAppSelector } from './hooks/redux';
import { Navbar, Sidebar } from './layout';
import { AllNotes, ArchiveNotes, ErrorPage, TagNotes, TrashNotes } from './pages';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  const { viewEditTagsModal, viewCreateNoteModal } = useAppSelector((state) => state.modal);

  return (
    <div className="app">
      {viewCreateNoteModal && <CreateNoteModal />}
      {viewEditTagsModal && <TagsModal type='edit' />}

      <ToastContainer
        position='bottom-right'
        theme='light'
        pauseOnHover
        autoClose={1500}
      />

      {/* BrowserRouter를 HashRouter로 변경 */}
      <HashRouter>
        <Sidebar />
        <div className='app__container'>
          <Navbar /> 
          <Routes>
            <Route path='/' element={<AllNotes />} />
            <Route path='/archive' element={<ArchiveNotes />} />
            <Route path='/trash' element={<TrashNotes />} />
            <Route path='/tag/:name' element={<TagNotes />} />
            <Route path='/404' element={<ErrorPage />} />
            <Route path='/*' element={<Navigate to={"/404"} />} />
          </Routes>
        </div>
      </HashRouter>
    </div>
  );
}

export default App;
