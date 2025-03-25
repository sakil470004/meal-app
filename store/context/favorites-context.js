import { createContext, useEffect, useState } from "react";

export const FavoritesContext = createContext({
    ids:[],
    addFavorite:(id=>{}),
    removeFavorite:(id=>{}),
});
function FavoritesContextProvider({children}){
    const [favoriteMealIds,setFavoriteMealIds]=useState([]);
    useEffect(()=>{
        console.log(favoriteMealIds)
    },[favoriteMealIds])
    function addFavorite(id){
        console.log(id)
        setFavoriteMealIds((current)=>[id,...current]);
    }

    function removeFavorite(id){
        setFavoriteMealIds((current)=>current.filter((mealId)=>mealId!==id));   
    }

    const value={
        ids:favoriteMealIds,
        addFavorite:addFavorite,
        removeFavorite:removeFavorite,
    }
    return <FavoritesContext.Provider value={value} >{children}</FavoritesContext.Provider>
}

export default FavoritesContextProvider;