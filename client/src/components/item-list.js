import React, {useState, useEffect} from 'react';
import axios from 'axios'
import ItemCard from './item-card'
import {useForm} from 'react-hook-form'
const ItemList = () => {
  const {register, handleSubmit, errors} = useForm();
  const [filter, setFilter] = useState([]);
  const [item, setItem] = useState([]);
  
  const onSubmit = (data) => {
      console.log(data);
      setFilter(data);
  } 
  const printWork = () =>{
      console.log('click is working in item-list')
    }

  useEffect( ()=>{
    axios.get(`https://usemytechstuff.herokuapp.com/api/tech/`)
        .then(res =>{
          console.log('item-list api data ', res.data);
          setItem(res.data);
          
        }).catch(err => console.log(err));
    console.log('item-list page reloaded');
  },[filter])
  console.log('item-page item ', item);
  return (
    <div className ='item-list' onClick = {printWork}>
      <div className = 'sidebar'>
        <form className = 'sidebar-filters' onSubmit = {handleSubmit(onSubmit)}>
          <span>
          <input type = 'checkbox'
            name='availability'
            ref = {register}
          />
          <label for = 'availability'>Available</label>
          </span>
          <span>
          <label for = 'category'>Categories: </label>
          <select name = 'category' id = 'category' ref = {register}>
            <option value="" selected disabled hidden>Choose here</option>
            <option value="gaming" >Gaming</option>
            <option value="video">Video Equipment</option>
            <option value="computers">Computers</option>
            <option value="photography">Photography</option>
            <option value="audio">Audio/Speakers</option>
            <option value="tvs">Televisions</option>
          </select>
          </span>
          <input type = 'text'
            name = 'description'
            placeholder = 'Description'
            ref = {register}/>
          <input type = 'submit' className='login-btn' value = 'Filter'/>
        </form>
      </div>
      <div className = 'items-div'>
        {item?.map(data => {
          return (
          <ItemCard data = {data}/>
        )})} 
        
      </div>
    </div>
  );
};
export default ItemList;