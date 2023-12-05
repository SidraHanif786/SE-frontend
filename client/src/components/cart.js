import React from "react";
import { useCart } from "./CartContext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import client from "../service";
import { useAuth } from "./AuthContext";

const Cart = () => {
  const { token } = useAuth();
  const { cartItems, removeFromCart, updateQuantity, clearCart } = useCart();

  const handleQuantityChange = (productId, newQuantity) => {
    updateQuantity(productId, newQuantity);
  };

  const handleRemoveItem = (productId) => {
    removeFromCart(productId);
  };

  const calculateTotal = () => {
    return cartItems.reduce(
      (total, item) => total + item.price * item.quantity,
      0
    );
  };

  const handleCheckout = async () => {
    try {
      const orderData = {
        products: cartItems.map((item) => ({
          productId: item._id,
          quantity: item.quantity,
          totalPrice: item.price * item.quantity,
        })),
        address: "123 Main St, City, Country", // Hardcoded for now
        totalBalance: calculateTotal() + 3000,
      };

      const response = await client.post("/orders/create", orderData, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      console.log("Order created successfully:", response.data);
    } catch (error) {
      console.error("Error during checkout:", error);
    }
  };

  return (
    <div className="bg-stone-100 min-h-screen pt-[5%]">
      <div className="container mx-auto px-4 pt-20">
        <h1 className="text-lg font-normal mb-4 md:text-2xl md:font-semibold">
          Shopping Cart
        </h1>
        <div className="flex flex-col md:flex-row gap-4">
          <div className="md:w-3/4 mb-4 md:mb-0 overflow-y-auto max-h-[60vh]">
            <div className="bg-white rounded-lg shadow-md p-6">
              <table className="w-full">
                <thead>
                  <tr>
                    <th className="text-left font-semibold">Product</th>
                    <th className="text-left font-semibold">Price</th>
                    <th className="text-left font-semibold hidden md:flex">
                      Quantity
                    </th>
                    <th className="text-left font-semibold ">Total</th>
                    <th className="text-left font-semibold ">Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {cartItems.map((item) => (
                    <tr key={item._id}>
                      <td className="py-4">
                        <div className="flex items-center">
                          <img
                            className="h-16 w-16 mr-4"
                            src={item.img[0]}
                            alt="Product image"
                          />
                          <span className="font-semibold">{item.title}</span>
                        </div>
                      </td>
                      <td className="py-4 ">{`Rs ${item.price || 0}`}</td>
                      <td className="py-4">
                        <div className="flex items-center hidden md:flex">
                          <button
                            className="border rounded-md py-1 px-2 mr-2"
                            onClick={() => {
                              const newQuantity = item.quantity - 1;
                              if (newQuantity > 0) {
                                handleQuantityChange(item._id, newQuantity);
                              } else {
                                // If quantity reaches 0, remove the item
                                handleRemoveItem(item._id);
                              }
                            }}
                            disabled={item.total === 0}>
                            -
                          </button>
                          <span className="text-center w-8 ">
                            {item.quantity}
                          </span>
                          <button
                            className="border rounded-md py-1 px-2 ml-1"
                            onClick={() => {
                              if (item.total > item.quantity) {
                                handleQuantityChange(
                                  item._id,
                                  item.quantity + 1
                                );
                              }
                            }}
                            disabled={item.total <= item.quantity}>
                            +
                          </button>
                        </div>
                      </td>
                      <td className="py-4">{`Rs ${
                        item.price * item.quantity
                      }`}</td>
                      <td className="py-4 ">
                        <FontAwesomeIcon
                          icon={faTrash}
                          className="text-red-500 hover:text-red-700 cursor-pointer"
                          onClick={() => handleRemoveItem(item.id)}
                        />
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
          <div className="md:w-1/4">
            <div className="bg-white rounded-lg shadow-md p-6">
              <h2 className="text-lg font-semibold mb-4">Summary</h2>
              <div className="flex justify-between mb-2">
                <span>Subtotal</span>
                <span>{`Rs ${calculateTotal()}`}</span>
              </div>
              <div className="flex justify-between mb-2">
                <span>Taxes</span>
                <span>Rs 0.00</span>
              </div>
              <div className="flex justify-between mb-2">
                <span>Shipping</span>
                <span>Rs 3000.00</span>
              </div>
              <hr className="my-2" />
              <div className="flex justify-between mb-2">
                <span className="font-semibold">Total</span>
                <span className="font-semibold">{`Rs ${
                  calculateTotal() + 3000
                }`}</span>
              </div>
              <button
                className="bg-blue-500 text-white py-2 px-4 rounded-lg mt-4 w-full"
                onClick={handleCheckout}>
                Checkout
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
