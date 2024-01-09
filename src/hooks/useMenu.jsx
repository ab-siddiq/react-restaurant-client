import { useEffect, useState } from "react";

const useMenu = () => {
  const [menu,setMenu] = useState([])
  useEffect(()=>{
    fetch('https://react-restaurant-server.vercel.app/menu')
    .then(res=>res.json())
    .then(data=>{
      setMenu(data)
    })
  },[])
  return [menu]
};

export default useMenu;