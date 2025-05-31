import { useCart } from '../context/CartContext';

export default function CartPage() {
  const { cart, removeFromCart, totalPrice } = useCart();

  return (
    <div className="max-w-4xl mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Your Cart</h1>
      {cart.length === 0 ? (
        <p>Your cart is empty</p>
      ) : (
        <>
          <div className="space-y-4">
            {cart.map(item => (
              <div key={item.id} className="flex justify-between items-center border-b pb-2">
                <div className="flex items-center">
                  <img src={item.image} alt={item.name} className="w-16 h-16 object-contain mr-4"/>
                  <div>
                    <h3 className="font-medium">{item.name}</h3>
                    <p>${item.price} x {item.quantity}</p>
                  </div>
                </div>
                <button 
                  onClick={() => removeFromCart(item.id)}
                  className="text-red-500 hover:text-red-700"
                >
                  Remove
                </button>
              </div>
            ))}
          </div>
          <div className="mt-8 text-xl font-semibold">
            Total: ${totalPrice.toFixed(2)}
          </div>
        </>
      )}
    </div>
  );
}