import React , { useState, useEffect}from 'react'
import Recipe from '../recipeComponent/recipe'
import Typical from 'react-typical'
const  Forms = ()=>  {
const [input,setInput] = useState('')
const [recipes,setRecipes] = useState([])

 const APPID = '0f0afe0f';
 const APP_KEY = 'c99e420c69c18f56e8bb149b7a8ffdb9';


 const apiCall = async (event) =>{
     event.preventDefault()
     const response = await fetch(`https://api.edamam.com/search?q=${input}&app_id=${APPID}&app_key=${APP_KEY}`)
     const data  = await response.json()
   setRecipes(data.hits)
   console.log(recipes);
}


const changeHandle = (event) =>{
    setInput(event.target.value)
}


        return (
                <div className="container">
                    <div className="col-12">
                        <div className="row">
                            <form onSubmit={apiCall}>
                                <div className=" col-12">
                                    <div className="row">
                                        <div className="mt-5 col-md-7 col-sm-6  col-12">
                                            <input type="text" onChange={changeHandle} value={input} className="form-control" placeholder="Find Your Recipe . . ." id="exampleInputEmail1" aria-describedby="emailHelp" />
                                        </div>
                                        <div className="mt-5 col-md-5 col-sm-6  col-12">
                                            <button type="submit" className="btn btn-primary" >Search</button>
                                        </div>
                                    </div>
                                </div>
                            </form>
                        </div>
                
                        <div className="row mt-5" style={{display:"flex", justifyContent:"center"}}>
                        
                            {recipes.map((recipe) =>(
                                <Recipe 
                                title = {recipe.recipe.label}
                                image = {recipe.recipe.image}
                                />
                            ))}
                        </div>
                       
                            <div className="row mt-5">
                                <div className="col-12" style={{color:"white", display:'flex',justifyContent:'center',marginTop:"100px"}}>
                                    <h1 style={{fontSize:"50px"}}> Let's Find <Typical 
                                        steps= {[
                                            'Foods',2000,
                                            'Recipes',2000,
                                        ]}
                                        loop ={Infinity}
                                        wrapper ="b"
                                    /></h1>
                                </div>
                            </div>
                        
                    </div>
                </div>
        )
}
export default Forms