import React, { useState } from 'react'
import "./style.css";
import Menu from "./menuApi";
import MenuCard from './MenuCard';
import Navbar from './Navbar';

const uniqueList = [... new Set(Menu.map((curElem) => {
  return curElem.category;
})),"All",
];
console.log(uniqueList);

const Resturant = () => {
    // const MyStyle = {color: "red", background: "black"};
    const [menuData,setMenuData] = useState(Menu);
    const [menuList,setMenuList] = useState(uniqueList);
    const filterItem = (catagory) => {

      if(catagory === "All"){
        return setMenuData(Menu);
      }
        const updatedList = Menu.filter((curElem) => {
            return curElem.category === catagory;
        });
        setMenuData(updatedList);
    };
  return (
    <>
      <Navbar filterItem = {filterItem} menuList={menuList} />
       <MenuCard menuData = {menuData}/>    
   </>
  )
}

export default Resturant;

