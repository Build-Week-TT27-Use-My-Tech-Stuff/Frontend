import React, {useState} from 'react'

const initOIFormValues = {
    name:'',
    description: '',
    categories:'',
    price:'',
}

export default function OwnerPostItem() {
    const [formValues, setFormValues]=useState(initOIFormValues)

    const handleChange= (name, value)=>{
        setFormValues({...formValues, [name]:value})
    }

    return (
        <div>
            <h1>Post a New Item for Rent</h1>
            <form>
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
                <button>Post New Item</button>
            </form>
        </div>
    )
}
