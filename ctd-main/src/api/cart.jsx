import axios from 'axios';

axios.defaults.withCredentials = true; // This ensures cookies are sent with the requests

// Fetch the cart items
export async function getCart() {
    return await axios.get('http://localhost:3000/api/cart', {
        headers: {
            'Content-Type': 'application/json'
        }
    });
}

// Delete an item from the cart
export async function deleteCartItem(eventName) {
    return await axios.delete(`http://localhost:3000/api/cart/${eventName}`, {
        headers: {
            'Content-Type': 'application/json'
        }
    });
}
