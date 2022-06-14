import './style.css'
import React, { useState, useContext } from "react";
import { useDispatch, useSelector } from "react-redux";

import Counter from './Counter';
import { useNavigate } from "react-router-dom";
import { setsumPriceUser } from '../../../redux/reducers/User';




const YourCart = ({ name }) => {
    const navigate = useNavigate()
    const dispatch = useDispatch();

    const Userinfor = useSelector((state) => {

        return {
            yourCart: state.User.cart,
            yourPrice: state.User.price,
            yourTotal: state.User.total,
            islogin: state.auth.isLoggedIn,
            name: state.User.name,
        }
    })

    // console.log(Userinfor.islogin)
    const [totalPrice, setTotalPrice] = useState(
        Userinfor.yourPrice.reduce((acc, element, index) => {
            console.log(typeof element.price);
            return acc + Number(element.price)
        }, 0)
    )


    // console.log(Userinfor.yourPrice, "YourPrice")
    //!..............................
    // console.log(Userinfor.name, "YourName")


    const complete = () => {
        // navigate("/Hotelinform", { state: { id: element._id } })
        Userinfor.islogin == true ? navigate("/CompleteOrder") : navigate("/Login")

    }



    console.log(name)
    return (<div className="YourCartinRest" >{Userinfor.yourCart !== 0 && Userinfor.yourCart.length ? Userinfor.yourCart.map((element, index) => {
        return (<div key={index} className="div-Yourcart">
            {<Counter element={element} />}

        </div>)

    }) : <div className='cartempty '><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR2RAmmS3yjdMkpGUh2S858rxj2HB4fzf-4CQ&usqp=CAU" /><h2 className='textinYourCart'>Your cart is empty</h2><br /><h2 className='textinYourCart'>
        Add items to get started</h2></div>}
        <h1>{Userinfor.yourCart !== 0 && Userinfor.yourCart.length ? <div><h3>total:{Userinfor.yourTotal}</h3>



            <button onClick={() => {
                complete();
                dispatch(setsumPriceUser())
            }}>Go to the checkout</button>
        </div> : ""}</h1>


    </div>)

}

export default YourCart;



