import { async } from "@firebase/util";
import axios from "axios";
import { useEffect, useState } from "react";
import StripeCheckout from "react-stripe-checkout";

  const STRIPE_KEY = "pk_test_51KmQZ1Cz6RSCMCCXpRfTNxGgQFkHovBTwCQqgw162K050s9JxuyO4pQQBz70izz0LQeKE29rVsQNZZ5YtjcOT0zc00jGxHBB6r"
  
  export default function Pay() {
const [stripeToken,setStripeToken] = useState()
    const onToken= (token)=>{
        setStripeToken(token)
    }

    useEffect(()=>{
        const makeRequest= async() =>{
            try {
               const response = axios.post("http://localhost:3001/api/stripe",{
                   tokenId:stripeToken.id,
                   amount:2000
               }
               );
               console.log(response.data)
            } catch (error) {
                console.log(error)
            }
        }
        stripeToken && makeRequest()
    },[stripeToken])
    return (
        <div>
            {stripeToken ? (
                <h1>Ptocessing. Please wait..</h1>
            ): (

                <StripeCheckout 
                name="Heading North" 
                image="#"
                billingAddress
                shippingAddress
                description=" Your total is $ 73"
                amount={2000}
                token={onToken}
                stripeKey={STRIPE_KEY}
                >
                <button>Pay</button>
            </StripeCheckout>
                )}
        </div>
    )
}