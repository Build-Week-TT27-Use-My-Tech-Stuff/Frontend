import React, {useState} from 'react'
import styled from 'styled-components'
import axios from 'axios'

const initOIFormValues = {
    name:'',
    description: '',
    categories:'',
    price:'',
    time: '',
}

export default function OwnerPostItem() {
    const [item, setItem] = useState([])
    const [formValues, setFormValues]=useState(initOIFormValues)

    const postNewItem = (newItem) =>{
        axios.post('https://reqres.in/api/users', newItem)
        .then((resp)=>{
          setItem([resp.data, ...item])
          setFormValues(initOIFormValues)
        })
      }
    
    const handleChange= (evt)=>{
        const { name, value }= evt.target;
        setFormValues({...formValues, [name]:value})
    }

    const submitForm = (evt) => {
        evt.preventDefault();
        const newItem = {
            name: formValues.name.trim(),
            description: formValues.description.trim(),
            categories: formValues.categories,
            price: formValues.price.trim(),
            time: formValues.time,
        }
        setItem(newItem)

    }

    return (
        <div>
            <h1>Post a New Item for Rent</h1>
            <form onSubmit={submitForm}>
                <label>
                    <input name='name' type='text' value={formValues.name} onChange={handleChange} placeholder='Item Name'></input>
                </label>
                <label>
                    <input name='description' type='text' value={formValues.description} onChange={handleChange} placeholder='Item Description'></input>
                </label>
                <label>
                    <select onChange={handleChange} value={formValues.categories} name='categories'>
                        <option value=''>---------Select a Category---------</option>
                        <option value='serverBlades'>Server Blades</option>
                        <option value='n64Games'>n64 Games</option>
                        <option value='gamingMice'>Gaming Mice</option>
                        <option value='vidGameConsole'>Video Game Console</option>
                        <option value='sonyWalkman'>Sony Walkman</option>
                        <option value='tigerElectronics'>Tiger Electronics: Deluxe Talkboy</option>
                    </select>
                </label>
                <label>
                    <input name='price' type='text' value={formValues.price} onChange={handleChange} placeholder='Item Price'></input>
                </label>
                <label>
                    <input name='time' type='radio' value='day' checked={formValues.time === 'day'} onChange={handleChange}></input>
                    Per Day
                </label>
                <label>
                    <input name='time' type='radio' value='week' checked={formValues.time === 'week'} onChange={handleChange}></input>
                    Per Week
                </label>
                <label>
                    <input name='time' type='radio' value='month' checked={formValues.time === 'month'} onChange={handleChange}></input>
                    Per Month
                </label>
                <ButtonStyle>Post New Item</ButtonStyle>
                <div className='imgUpload'>
                    <h6>Upload an Image</h6>
                </div>
            </form>

        </div>
    )
}

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