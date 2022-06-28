import React, { useState, useEffect } from 'react';
import getData from "../pages/data/product_data";
const MainContent = () => {
    function handleSearch(id) {
        window.location.assign('products/'+id);
    }
   

    const [sproduct_card, setproduct_card] = useState([
            {
                id: 1,
                product_name: "Rayes Alpha",
                description: "Hands-free, Hads-on Mushc Experience",
                price: 350,
                currency: "₹",
                thumb: "http://localhost:3000/images/1.png"
            },
        ]);

    useEffect(() => {
        getData((res) => {
            console.log(res);
            setproduct_card(res);
         });
      }, []);

      console.log(localStorage.getItem('username'));
    
    // var result = this.useState.sproduct_card.filter(function (o1) {
    //         return o1.id === 1;
    // });
    //console.log(result);
    return (
        <div>
        <div className="main_content">
            {sproduct_card.map((item) =>
        <div className="card" key={item.id} onClick={handleSearch.bind(this,item.id)}>
            <div className="card_img">
                <img src={item.thumb} />
            </div>
            <div className="card_header">
                <h2>{item.product_name}</h2>
                <p>{item.description}</p>
                <p className="price">{item.price}<span>{item.currency}</span></p>
                <div className="btn">Add to cart</div>
            </div>
        </div>

    )}
        </div>
        </div>
    )
}

export default MainContent;
