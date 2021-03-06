import React, {useState} from 'react'
import styled from 'styled-components'
import { axiosWithAuth } from '../utils/axiosWithAuth';
// import OwnerPostItemConf from './OwnerPostItemConf'
const initOIFormValues = {
    
    name:'',
    user_id: '',
    category:'',
    picture: '',
    cost:'',
    availability: '',
    description: '',
    
    
}
export default function OwnerPostItem() {
    const [items, setItems] = useState([])
    const [formValues, setFormValues]=useState(initOIFormValues)
    const postNewItem = (newItem) =>{
        axiosWithAuth().post('/tech', newItem)
        .then((resp)=>{
          setItems([resp.data, ...items])
          setFormValues(initOIFormValues)
        }).catch(err => console.log(err))
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
            user_id: formValues.user_id.trim(),
            category: formValues.category,
            picture: formValues.picture.trim(),
            cost: formValues.cost.trim(),
            availability: formValues.availability.trim(),
            description: formValues.description.trim(),
        }
        postNewItem(newItem);
    }
    return (
        <div>
       
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
                                <select onChange={handleChange} value={formValues.category} name='category' className= 'input-box'>
                                    <option value=''>Categories</option>
                                    {/* Computers, Filming, Gaming, Photography, Music, TVs */}
                                    <option value='gaming'>Gaming</option>
                                    <option value='video'>Video</option>
                                    <option value='computers'>Computers</option>
                                    <option value='photography'>Photography</option>
                                    <option value='audio'>Audio/Speakers</option>
                                    <option value='tvs'>TVs</option>
                                </select>
                            </Label>
                            <Label>
                                <input name='cost' type='text' value={formValues.cost} onChange={handleChange} placeholder='Item Price' className= 'input-box'></input>
                            </Label>
                            {/* <RadBtnsCont>
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
                            </RadBtnsCont> */}
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
                            <TitleStyle1>
                                <h1> Your Item has been posted! </h1>
                             </TitleStyle1>
                             <ConfirmContainer>
                                 <div>
                                    <h3 className='itemConf'>Item:</h3>
                                    <h2 className='itemConf'>{item.name}</h2>
                                 </div>
                                <div>
                                    <h3 className='descriptionConf'>Description: </h3>
                                    <h2 className='descriptionConf'>{item.description}</h2>
                                </div>
                                <div>
                                    <h3 className='pricingConf'>Pricing: </h3>
                                    <h2 className='pricingConf'>{item.cost}</h2>
                                </div>
                             </ConfirmContainer>
                            <ButtonStyle1>Edit Listing </ButtonStyle1>
                            <ButtonStyle2>Delete Listing </ButtonStyle2>
                        </div>
                    )
                })
            }
           {/* <Route path='/owner/post-item-form/confirmation'>
            <OwnerPostItemConf items={items}/>
          </Route> */}
        </PageContainer>
        </div>
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
///Next form over styles
const TitleStyle1 = styled.div`
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
const ButtonStyle1 = styled.button`
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
const ConfirmContainer = styled.div`
display: flex;
justify-content:space-evenly;
background: #FFFFFF;
width: 900px;
margin-bottom: 4%;
h3{
    font-size: 1.5rem; 
}
h2{
    font-size: 1rem;
    text-align: left;
}
#itemConf{
    width: 150px;
}
#descriptionConf{
    width: 500px;
}
#pricingConf{
    width: 150px;
}
`