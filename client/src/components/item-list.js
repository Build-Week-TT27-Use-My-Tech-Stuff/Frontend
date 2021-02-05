import React, {useState, useEffect} from 'react';
import ItemCard from './item-card'
import {useForm} from 'react-hook-form'
import {axiosWithAuth} from '../utils/axiosWithAuth'
const ItemList = (props) => {
  const {register, handleSubmit, errors} = useForm();
  const [filter, setFilter] = useState([]);
  console.log('item-list props ', props);
  const {data} = props;
  axiosWithAuth().get('/api/tech')
  .then(res =>{
    console.log('item-list axios data ',res.data)
  })
  const onSubmit = (data) => {
      console.log(data);

      setFilter(data);
  } 
  const printWork = () =>{
      console.log('click is working in item-list')
    }
  useEffect( ()=>{
    console.log('item-list page reloaded');
  },[filter])
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
        {data.map((x) => {return <ItemCard data = {x} filter = {filter}/>})}
      </div>
    </div>
  );
};
export default ItemList;