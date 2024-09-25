import './App.css'
import { useEffect, useState } from 'react'
import 'bootstrap/dist/css/bootstrap.css';

interface Product {
  id: number;
  title: string;
  description: string;
  image: string;
  price: string;
}

function App() {
  const [list, setList] = useState([]);

  function getStoreProducts() {
    return fetch('https://fakestoreapi.com/products').
      then((res) => res.json())
      .then((val) => val)
      .catch((error) => {
        console.warn(error);
        console.warn("Failed to fetch the data");
      })
  }

  useEffect(() => {
    getStoreProducts().then((val) => setList(val))
  }, [])

  return (
    <div className="container-fluid">
      <div className="row">
        {
          list.map((product: Product) => {
            return (
              <div className="col-6 col-lg-3" key={product.id}>
                <div className="card h-100">
                  <div className="card-body">
                    <img className="w-100" src={product.image} alt="" />
                    <h2>{product.title}</h2>
                    <p aria-description="price">
                      INR {product.price}
                    </p>
                    <p>
                      {product.description}
                    </p>

                  </div>
                </div>
              </div>
            )
          })
        }
      </div>
    </div>
  )
}

export default App
