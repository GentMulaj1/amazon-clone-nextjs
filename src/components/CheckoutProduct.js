import { StarIcon } from "@heroicons/react/solid"
import Image from "next/image"
import { useDispatch } from "react-redux";
import { addToBasket, removeFromBasket } from "../slices/basketSlice";


function CheckoutProduct({ id, title, price, rating, description, category, image, hasPrime }) {
    let dollarUS = Intl.NumberFormat("en-US", {
        style: "currency",
        currency: "USD",
    });

    const dispatch = useDispatch();

    const addItemToBasket = () => {
        const product = { id, title, price, rating, description, category, image, hasPrime }

        // Push item into redux
        dispatch(addToBasket(product))
    }

    const removeItemToBasket = () => {
        
        // Remove item from redux
        dispatch(removeFromBasket({ id }))

    }

    return (
        <div className="grid grid-cols-5">
            <Image src={image} height={200} width={200} objectFit="contain" alt="_"/>

            <div className="col-span-3 mx-5">
                <p>{title}</p>
                <div className="flex">
                    {Array(rating).fill().map((_,i) => 
                        <StarIcon key={i} className="h-5 text-yellow-500" />
                        )
                    }
                </div>

                <p className="text-xs my-2 line-clamp-3">{description}</p>
                <div>
                    {dollarUS.format(price)}
                </div>

                {hasPrime && (
                    <div className="flex items-center space-x-2">
                        <img 
                            className="w-12"
                            loading="lazy"
                            src="https://www.pngplay.com/wp-content/uploads/3/Amazon-Prime-Logo-PNG-HD-Quality.png"
                            alt="logo" 
                        />
                        <p className="text-sm text-gray-500">FREE Next-day Delivery</p>
                    </div>
                )}
            </div>

            {/* Right add/remove buttons */}
            <div className="flex flex-col space-y-2 my-auto justify-self-end">
            <button className="button nt-auto" onClick={addItemToBasket}>Add to Basket</button>
            <button className="button nt-auto" onClick={removeItemToBasket} >Remove from Basket</button>
                
            </div>                        



        </div>
    )
}

export default CheckoutProduct
