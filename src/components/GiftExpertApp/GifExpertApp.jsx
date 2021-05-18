import React, {useState} from 'react';
import AddCategory from '../AddCategory/AddCategory'
import GifGrid from '../GifGrid/GifGrid'
const GiftExpertApp = ()=>{
    
    const [categories, setCategories] = useState(['One punch']);

    //Una forma de añadir categorias
    /* const handleAdd=()=>{
        //setCategories([...categories,'HunterXHunter']);
        setCategories(cats=>['HunterXHunter',...cats]);
    }; */

    return(
        <>
            <h2>GiftExpertApp</h2>
            <AddCategory setCategories={setCategories}/>
            <hr />

            

            <ol>
                {
                    categories.map((category)=>
                        <GifGrid 
                        key={category}
                        category={category}
                        />
                    )
                }
            </ol>
        </>
    );

}
export default GiftExpertApp;