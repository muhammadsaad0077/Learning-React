import React from 'react'
import ReactDOM from 'react-dom/client'

/*
Header
 -Logo
 -NavItems

Body
 -Search
 -FoodContainer
 -FoodCards

Footer
 -Links
 -Copyright

*/


const Header = ()=>{
    return(
    <div className='header'>
        <div className='logoContainer'>
            <img className='logo' src='https://www.logodesign.net/logo/smoking-burger-with-lettuce-3624ld.png'></img>
        </div>
        <div className='nav-items'>
            <ul>
              <li>Home</li>
              <li>About Us</li>
              <li>Contact</li>
              <li>Cart</li>
            </ul>
        </div>
    </div>
    )
}

const Body = ()=>{
    return(
    <div className='body'>
        <div className='search'>
            <input type='text' placeholder='Search Your Food...'></input>
        </div>
        <div className='res-container'>
        <ResturantCard resName="KFC" des="Burger, Chicken Pieces" rating="4.9 stars" foodPic="https://juliesfamilykitchen.com/wp-content/uploads/2021/11/Crispy-Zinger-Burger-KFC-Chicken-Burger-Copycat-Recipe.jpg"/>
            <ResturantCard resName="Delicous Food" des="Biryani, Asian" rating="4.8 stars" foodPic="https://norecipes.com/wp-content/uploads/2017/05/chicken-biryani-006-500x500.jpg"/>
            <ResturantCard resName="Pizza" des="Chicken, Mutton" rating="4.7 stars" foodPic="https://norecipes.com/wp-content/uploads/2017/05/chicken-biryani-006-500x500.jpg"/>
            <ResturantCard resName="Chicken Pieces" des="Sauce, Roast" rating="4.6 stars" foodPic="https://norecipes.com/wp-content/uploads/2017/05/chicken-biryani-006-500x500.jpg"/>
            <ResturantCard resName="Zinger" des="Burger, Chicken" rating="4.5 stars" foodPic="https://norecipes.com/wp-content/uploads/2017/05/chicken-biryani-006-500x500.jpg"/>
            <ResturantCard resName="Chicken" des="Chicken, Asian" rating="4.4 stars" foodPic="https://norecipes.com/wp-content/uploads/2017/05/chicken-biryani-006-500x500.jpg"/>
            <ResturantCard resName="Chicken Steak" des="Chicken, Asian" rating="4.3 stars" foodPic="https://norecipes.com/wp-content/uploads/2017/05/chicken-biryani-006-500x500.jpg"/>
            <ResturantCard resName="Pasta" des="Special, Asian" rating="4.2 stars" foodPic="https://norecipes.com/wp-content/uploads/2017/05/chicken-biryani-006-500x500.jpg"/>
            <ResturantCard resName="Chicken Pieces" des="Sauce, Roast" rating="4.6 stars" foodPic="https://norecipes.com/wp-content/uploads/2017/05/chicken-biryani-006-500x500.jpg"/>
            <ResturantCard resName="Zinger" des="Burger, Chicken" rating="4.5 stars" foodPic="https://norecipes.com/wp-content/uploads/2017/05/chicken-biryani-006-500x500.jpg"/>
            <ResturantCard resName="Chicken" des="Chicken, Asian" rating="4.4 stars" foodPic="https://norecipes.com/wp-content/uploads/2017/05/chicken-biryani-006-500x500.jpg"/>
            <ResturantCard resName="Chicken Steak" des="Chicken, Asian" rating="4.3 stars" foodPic="https://norecipes.com/wp-content/uploads/2017/05/chicken-biryani-006-500x500.jpg"/>
            <ResturantCard resName="Pasta" des="Special, Asian" rating="4.2 stars" foodPic="https://norecipes.com/wp-content/uploads/2017/05/chicken-biryani-006-500x500.jpg"/>
            <ResturantCard resName="Pasta" des="Special, Asian" rating="4.2 stars" foodPic="https://norecipes.com/wp-content/uploads/2017/05/chicken-biryani-006-500x500.jpg"/>
            
            
        </div>
    </div>
    )
}

const ResturantCard = ({resName, des, rating, foodPic})=>{
    return(
    <div className='res-card'>
        <img className='res-pic' src={foodPic} ></img>
        <h3>{resName}</h3>
        <h4>{des}</h4>
        <h4>{rating}</h4>
    </div>
    )
}




const App = ()=>{
    return(
        <div className='App'>
            <Header />
            <Body />
        </div>
    )
}

const root = ReactDOM.createRoot(document.getElementById('root'))
 root.render(<App />)

 