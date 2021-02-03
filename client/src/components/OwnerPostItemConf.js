import React from 'react'
import styled from 'styled-components'

export default function OwnerPostItemConf(props) {
        const {items} = props
        console.log(items)
    return (
        <div>
        
        {
                items.map(item=>{
                    return(
                        <div>
                            <TitleStyle>
                                <h1> Your Item has been posted! </h1>
                             </TitleStyle>
                            <h3>{item.name}</h3>
                            <h3>{item.description}</h3>
                            <h3>{item.price} per {item.time}</h3>
                        </div>
                    )
                })
            }
           
        <ButtonStyle>Edit Listing </ButtonStyle>
        <ButtonStyle2>Delete Listing </ButtonStyle2>
    
        </div>
        
    )
}

const TitleStyle = styled.div`
    color: #353535;
    padding-top: 1.5rem;
    font-size: 1.2rem;
    padding-left: 2rem; 
    width:100%;
    display:flex; 
    justify-content: center;
    font-family: 'Nova Mono', monospace;
    font-style: normal;
    font-weight: normal;
    margin: 3% auto;
`
const ButtonStyle = styled.button`
    border-radius: 2rem;
    background-color:#80ED99;
    color: #353535;
    height: 2.3rem;
    width: 15rem;
    border: none;
    cursor: pointer;
    font-size: 1rem;  
    margin: 0% 0% 1% 0%;
`
const ButtonStyle2 = styled.button`
    border-radius: 2rem;
    background-color:#C4C4C4;
    color: #FFFFFF;
    height: 2.3rem;
    width: 15rem;
    border: none;
    cursor: pointer;
    font-size: 1rem;  
    margin: 0% 0% 1% 0%;
`