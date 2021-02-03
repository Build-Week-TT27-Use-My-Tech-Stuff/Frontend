import React, {useState, useHistory} from 'react'
import styled from 'styled-components'
import axios from 'axios'
import OwnerPostItemConf from './OwnerPostItemConf'

const initOIFormValues = {
    name:'',
    description: '',
    categories:'',
    price:'',
    time: '',
}

export default function OwnerPostItem() {
    const [items, setItems] = useState([])
    const [formValues, setFormValues]=useState(initOIFormValues)

    const postNewItem = (newItem) =>{
        axios.post('https://reqres.in/api/users', newItem)
        .then((resp)=>{
          setItems([resp.data, ...items])
          setFormValues(initOIFormValues)
        })
      }
    
    const handleChange= (evt)=>{
        const { name, value }= evt.target;
        setFormValues({...formValues, [name]:value})
    }

    // const history = useHistory();

    const submitForm = (evt) => {
        evt.preventDefault();
        const newItem = {
            name: formValues.name.trim(),
            description: formValues.description.trim(),
            categories: formValues.categories,
            price: formValues.price.trim(),
            time: formValues.time,
        }
        postNewItem(newItem);
        // history.push('/owner/post-item-form/confirmation')

    }

    return (
        <PageContainer>
            <TitleStyle>
            <h1>Post a New Item for Rent</h1>
            </TitleStyle>
            <FormContainer className='formContainer'>
                <form onSubmit={submitForm}>
                    <InputsandImageCont>
                        <InputContainer className='inputContainer'>
                            <Label>
                                <input name='name' type='text' value={formValues.name} onChange={handleChange} placeholder='Item Name' className= 'input-box'></input>
                            </Label>
                            <Label>
                                <input name='description' type='text' value={formValues.description} onChange={handleChange} placeholder='Item Description' className= 'input-box'></input>
                            </Label>
                            <Label>
                                <select onChange={handleChange} value={formValues.categories} name='categories' className= 'input-box'>
                                    <option value=''>Categories</option>
                                    <option value='serverBlades'>Server Blades</option>
                                    <option value='n64Games'>n64 Games</option>
                                    <option value='gamingMice'>Gaming Mice</option>
                                    <option value='vidGameConsole'>Video Game Console</option>
                                    <option value='sonyWalkman'>Sony Walkman</option>
                                    <option value='tigerElectronics'>Tiger Electronics: Deluxe Talkboy</option>
                                </select>
                            </Label>
                            <Label>
                                <input name='price' type='text' value={formValues.price} onChange={handleChange} placeholder='Item Price' className= 'input-box'></input>
                            </Label>
                            <RadBtnsCont>
                                <Label>
                                    <input name='time' type='radio' value='day' checked={formValues.time === 'day'} onChange={handleChange}></input>
                                    Per Day
                                </Label>
                                <Label>
                                    <input name='time' type='radio' value='week' checked={formValues.time === 'week'} onChange={handleChange}></input>
                                    Per Week
                                </Label>
                                <Label>
                                    <input name='time' type='radio' value='month' checked={formValues.time === 'month'} onChange={handleChange}></input>
                                    Per Month
                                </Label>
                            </RadBtnsCont>
                        </InputContainer>
                        <ImgUpload className='imgUpload'>
                            <h6>Upload an Image</h6>
                        </ImgUpload>
                    </InputsandImageCont>    
                    <PostBtnDiv className='postBtnDiv'>
                        <ButtonStyle>Post New Item</ButtonStyle>
                    </PostBtnDiv>
                </form>
            </FormContainer>

            {
                items.map(item=>{
                    return(
                        <div>
                            <h3>{item.name}</h3>
                            <h3>{item.description}</h3>
                            <h3>{item.price} per {item.time}</h3>
                        </div>
                    )
                })
            }
           
            {/* <OwnerPostItemConf items={items}/> */}
        </PageContainer>
    )
}

const PageContainer=styled.div`
height:100vh;
display:flex;
align-items: center;
flex-flow: column wrap;
justify-content:center;
`

const ButtonStyle = styled.button`
    border-radius: 2rem;
    background-color:#80ED99;
    color: #353535;
    height: 2.3rem;
    width: 24rem;
    border: none;
    cursor: pointer;
    font-size: 1rem;  
    margin: 0% 0% 1% 0%;
`

const FormContainer = styled.div`
display:flex;
align-items:center;

`

const InputContainer = styled.div`
width: 30%;
height: 250px;

`

const ImgUpload = styled.div`
display: inline-block;
height: 200px;
border: 1px dashed #353535;
padding: 3%;

h6{
    margin:  90% 0% 1% 0%;
}
`

const PostBtnDiv = styled.div`
`

const RadBtnsCont= styled.div`
width:100%;
display:flex;
justify-content:space-evenly;
`
const InputsandImageCont = styled.div`
display:flex;
justify-content:center;

`
const Label = styled.label`
    padding: 1%;
    margin: 1%;
    width: 100%;
`

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