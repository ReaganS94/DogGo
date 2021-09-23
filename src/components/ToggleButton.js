import React from "react";
import styled from 'styled-components'

const InputWrapper = styled.div`
   position: relative;
`

const Input= styled.input`
   position: absolute;
   left: -9999px; 
   top:-9999px; 

`
const Slider = styled.span`
   display: flex; 
   cursor: pointer; 
   width:50px; 
   height: 25px; 
   border-radius: 100px; 
   background-color: black; 
   position: relative; 
   transition: background-color 0.2s; 


   &:before {
   content: "";
   position: absolute;
   top: 2px; 
   left: 2px; 
   width: 21px; 
   height: 21px; 
   border-radius: 45px; 
   transition: 0.2s; 
   background: white; 
   box-shadow: 0 2px 4px 0 rgba(0, 35, 11, 0.2)
   }

`


function ToggleButton({onChange}) {


    return (
        <InputWrapper>
        <Input type="checkbox" onChange={onChange}/>
        <Slider/>
        </InputWrapper>
            

    )
}

export default ToggleButton
