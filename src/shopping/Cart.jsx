import React from "react";
import "./HomeComp.css";
function Cart({ products, deleteProduct }) {
  const handleDelete = (productId) => {
    deleteProduct(productId);
  };
  return (
    <div>
      <div>
        <table>
          <tr>
            <th>STT</th>
            <th>Name</th>
            <th>IMAGE</th>
            <th>quantity</th>
            <th>Price</th>
            <th>TotalAmount</th>
            <th>Action</th>
          </tr>
          {products.map((data, index) => (
            <tr key={index}>
              <td>{index + 1}</td>
              <td>{data.name}</td>
              <td>
                <img
                  src={data.image_url}
                  alt={data.name}
                  style={{ width: "50px" }}
                />
              </td>
              <td>{data.quantity}</td>
              <td>{data.price}</td>
              <td>{data.price * data.quantity}</td>
              <td>
                <button
                  className="delete"
                  onClick={() => handleDelete(data.id)}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </table>
      </div>
    </div>
  );
}

export default Cart;
