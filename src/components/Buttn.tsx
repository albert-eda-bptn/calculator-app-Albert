import React from 'react'; 
import styled from 'styled-components';
import { Button} from '@mui/material';

export enum ButtonType {
  Number,
  Operation

}
type Props = React.HTMLProps<HTMLButtonElement> & {
  buttonType?: ButtonType;
  label: string; 
}

const StyledButton = styled(Button)`
&& {
    background:#e040fb;
    color:black;
    border: none;
    border-radius: 8px;
    font-size: 24px;
  }
`;

const StyledButtonOperation = styled(Button)`
&& {
    background:"grey";
    color:black;
    border: none;
    border-radius: 8px;
    font-size: 24px;
  }
`;

const Buttn: React.FunctionComponent<Props> = ({label, buttonType = ButtonType.Operation, onClick}) => {

  const styles: React.CSSProperties = {};

  if (buttonType === ButtonType.Number) {
    styles.color = "black";
    styles.background = "#e040fb";
    styles.border = "none";
    styles.borderRadius = "8px"; 
    styles.fontSize = "24px"; 
  } 

  if (buttonType === ButtonType.Operation){
    styles.color = "black"; 
    styles.background = "grey";
    styles.border = "none";
    styles.borderRadius = "8px"; 
    styles.fontSize = "24px"; 

  }

    return (

      <StyledButton onClick={onClick} style={styles}>{label}</StyledButton>

      );

};

export default Buttn; 