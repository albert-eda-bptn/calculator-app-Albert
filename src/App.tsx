import React from 'react';
import './App.css';
import { BrowserRouter, Routes, Route, Link} from "react-router-dom"; 
import Calc  from "./components/Calc"; 
import { Container } from '@mui/material';
import  styled  from 'styled-components';

const StyledContainer = styled(Container)`
    background-color: #323232;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    min-height: 100vh;
    padding-top: 100px;
    padding-left:100px;
`;

function App() {
  return (
        <StyledContainer>
          <BrowserRouter>
          <Routes>
            <Route path="/" element={<Calc/>}/>
          </Routes>
        </BrowserRouter>
        </StyledContainer>
  );
}

export default App;