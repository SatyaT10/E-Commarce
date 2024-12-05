import React from "react";
// import "./Cart.css"; // Include the styles for the cart

const WCart = ({ cartItems, onQuantityChange, onRemoveItem }) => {
    const calculateSubtotal = () => {
        return cartItems.reduce((total, item) => total + item.price * item.quantity, 0);
    };

    return (
        <div className="cart-container">
            <h1 className="cart-title">Your Cart Items</h1>
            {cartItems.length === 0 ? (
                <p>Your cart is empty.</p>
            ) : (
                <div>
                    {cartItems.map((item) => (
                        <div className="cart-item" key={item.id}>
                            <img src={item.image} alt={item.name} className="cart-item-image" />
                            <div className="cart-item-details">
                                <h2>{item.name}</h2>
                                <p>Price: Rs {item.price}</p>
                                <div className="cart-item-quantity">
                                    <button onClick={() => onQuantityChange(item.id, item.quantity - 1)}>-</button>
                                    <span>{item.quantity}</span>
                                    <button onClick={() => onQuantityChange(item.id, item.quantity + 1)}>+</button>
                                </div>
                                <button className="cart-item-remove" onClick={() => onRemoveItem(item.id)}>
                                    Remove Item
                                </button>
                            </div>
                        </div>
                    ))}
                    <div className="cart-summary">
                        <h2>Subtotal: Rs {calculateSubtotal().toFixed(2)} /- to pay</h2>
                        <div className="cart-summary-buttons">
                            <button className="cart-button">Continue Shopping</button>
                            <button className="cart-button">Checkout</button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default WCart;
