import React, {useState} from 'react';
import { Container, InputLabel, Button,Grid, Box} from '@mui/material';
import { resolvePath } from 'react-router-dom';
import { CalcInput, InputType, OperatorType, useCalc } from '../module/useCalc';
import styled from 'styled-components';
import Buttn, {ButtonType} from './Buttn';


const StyledContainer = styled(Container)`
    padding-top: 50px;
`;

const StyledGrid = styled(Grid)`
    display:grid;
    grid-template-columns: repeat(4, 80px);
    grid-template-rows: repeat(5, 80px);
    column-gap: 10px;
    row-gap: 10px; 
    margin-left: 200px;
    
`;

const StyledBox = styled(Box)`
    background-color: white;
    margin-bottom: 20px;
    width: 330px;
    height: 50px;
    align-items: center;
    margin-left: 200px;
    font-size: 30px;
    display: flex;
    justify-content: right;
    font-variant: contained;
    padding: 10px;
    border-radius: 8px;
    
`;

function Calc() {

    const [inputs, setInputs] = useState<Array<CalcInput>>([]);
    const {getState} = useCalc()
    const state = getState(inputs);

    const appendInput = (input: CalcInput): void => {
      setInputs((prev) => [...prev, input]);
    }
    const handleNumerical = (value: number) => {
      appendInput({type: InputType.Numerical, value});
    }

    const handleOperator = (operator: OperatorType) => {
      appendInput({type: InputType.Operator, operator});
    }

    const handleAllClear = () => setInputs([]);

    const handleClear = () => setInputs(prev => prev.slice(0,-1));
    
    return(
        
        <StyledContainer>
            <StyledBox>
                {state.displayValue}
            </StyledBox>
            <StyledGrid>

                <Buttn buttonType={ButtonType.Operation} label="AC" onClick={ () => handleAllClear()} />
                
                <Buttn buttonType={ButtonType.Number} label="1" onClick={() => handleNumerical(1)}/>
                <Buttn buttonType={ButtonType.Number} label="2" onClick={() => handleNumerical(2)}/>
                <Buttn buttonType={ButtonType.Number} label="3" onClick={() => handleNumerical(3)}/>

                <Buttn buttonType={ButtonType.Operation} label="C" onClick={ () => handleClear()} />

                <Buttn buttonType={ButtonType.Number} label="4" onClick={() =>handleNumerical(4)}/>
                <Buttn buttonType={ButtonType.Number} label="5" onClick={() => handleNumerical(5)}/>
                <Buttn buttonType={ButtonType.Number} label="6" onClick={() =>handleNumerical(6)}/>

                <Buttn buttonType={ButtonType.Operation} label="+" onClick={ () => handleOperator(OperatorType.Add)}/>

                <Buttn buttonType={ButtonType.Number} label="7" onClick={() => handleNumerical(7)}/>
                <Buttn buttonType={ButtonType.Number} label="8" onClick={() => handleNumerical(8)}/>
                <Buttn buttonType={ButtonType.Number} label="9" onClick={ () => handleNumerical(9)}/>

                <Buttn buttonType={ButtonType.Operation} label="-" onClick={ () => handleOperator(OperatorType.Subtract)}/>

                
                <Buttn buttonType={ButtonType.Operation} label="/" onClick={ () => handleOperator(OperatorType.Divide)}/> 
                <Buttn buttonType={ButtonType.Operation} label="." onClick={ () => handleOperator(OperatorType.Decimal)}/>
                
                <Buttn buttonType={ButtonType.Number} label="0" onClick={ () => handleNumerical(0)}/>

                <Buttn buttonType={ButtonType.Operation} label="x" onClick={ () => handleOperator(OperatorType.Multiply)}/>
                <Buttn buttonType={ButtonType.Operation} label="&#8730;" onClick={ () => handleOperator(OperatorType.Squareroot)}/>
                <Buttn buttonType={ButtonType.Operation} label="%" onClick={ () => handleOperator(OperatorType.Percentage)}/> 
                <Buttn buttonType={ButtonType.Operation} label="=" onClick={ () => handleOperator(OperatorType.Equals)}/>
            </StyledGrid>
        </StyledContainer>
        
    );
}

export default Calc;