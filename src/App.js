import { Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage';
import ArticlesPage from "./pages/ArticlesPage"
import ArtDetailPage from './pages/ArtDetalPage';
import QuizesPage from './pages/QuizesPage'
import QuizStart from './pages/QuizStart'
import StartTest from "./pages/StartTest";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element = {<HomePage/>}/>
        <Route path='/art' element = {<ArticlesPage/>}/>
        <Route path='/quizes' element = {<QuizesPage/>}/>
        <Route path="/artdetal/:id" element={<ArtDetailPage />} />
        <Route path='/quiz-start/:id' element={<QuizStart/>}/>
        <Route path='/quiz/start/:id' element={<StartTest/>}/>
      </Routes>
    </div>
  );
}

export default App;
