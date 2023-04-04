import { useRef, useState } from 'react'
import './App.css'
import PrintComp from './PrintComp'

const emptyProduct = {
  name: 'Sample',
  price: 0,
  quantity: 0,
}
const init = {
  name: '',
  mobile: '',
  address: '',
  email: '',
  products: [emptyProduct],
  discount: 0,
  deliveryCharge: 0,
}

function App() {
  const printRef = useRef()
  const iframeRef = useRef()
  const [values, setValues] = useState(() => {
    const localData = localStorage.getItem('userData')
    return localData ? JSON.parse(localData) : init
  })

  const setInput = (key, val) => {
    setValues((v) => {
      const obj = { ...v, [key]: val }
      localStorage.setItem('userData', JSON.stringify(obj))
      return obj
    })
  }

  const addProduct = () => {
    setValues((v) => {
      const products = [...v.products, emptyProduct]
      const obj = { ...v, products }
      localStorage.setItem('userData', JSON.stringify(obj))
      return obj
    })
  }

  const setProduct = (index, key, val) => {
    setValues((v) => {
      const products = [...v.products]
      products[index] = { ...products[index], [key]: val }
      const obj = { ...v, products }
      localStorage.setItem('userData', JSON.stringify(obj))
      return obj
    })
  }

  const onRemove = (index) => {
    setValues((v) => {
      const products = [...v.products.filter((a, i) => i !== index)]
      const obj = { ...v, products }
      localStorage.setItem('userData', JSON.stringify(obj))
      return obj
    })
  }

  function onPrint() {
    var pri = iframeRef.current.contentWindow
    pri.document.open()
    pri.document.write(printRef.current.innerHTML)
    pri.document.close()
    pri.focus()
    setTimeout(() => {
      pri.print()
    }, 1000)
  }
  return (
    <div className="flex flex-col md:flex-row w-100 p-8">
      <div className="flex flex-col w-full p-8">
        <h2 className="text-center pt-2 font-bold">Delivery ID</h2>
        <div class=" relative mt-4 ">
          <label for="name-with-label" class="text-gray-700">
            Delivery Id
          </label>
          <input
            value={values.deliveryId}
            onChange={(e) => setInput('deliveryId', e.target.value)}
            type="text"
            id="name-with-label"
            class=" rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
            name="text"
            placeholder="Delivery ID"
          />
        </div>
        <h2 className="text-center pt-2 font-bold">Customer Details</h2>

        <div class=" relative mt-4 ">
          <label for="name-with-label" class="text-gray-700">
            Name
          </label>
          <input
            value={values.name}
            onChange={(e) => setInput('name', e.target.value)}
            type="text"
            id="name-with-label"
            class=" rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
            name="text"
            placeholder="Customer Name"
          />
        </div>
        <div class=" relative mt-4">
          <label for="name-with-label" class="text-gray-700">
            Address
          </label>
          <textarea
            value={values.address}
            onChange={(e) => setInput('address', e.target.value)}
            type="text"
            id="adderess-with-label"
            class=" rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
            name="text"
            placeholder="Address"
          />
        </div>
        <div class=" relative mt-4">
          <label for="email-with-label" class="text-gray-700">
            Email
          </label>
          <input
            value={values.email}
            onChange={(e) => setInput('email', e.target.value)}
            type="text"
            id="email-with-label"
            class=" rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
            name="email"
            placeholder="email"
          />
        </div>
        <div class=" relative mt-4">
          <label for="mobile-with-label" class="text-gray-700">
            Mobile
          </label>
          <input
            value={values.mobile}
            onChange={(e) => setInput('mobile', e.target.value)}
            type="text"
            id="mobile-with-label"
            class=" rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
            name="text"
            placeholder="Mobile"
          />
        </div>
        <h2 className="text-center pt-2 font-bold">Product</h2>

        {(values.products ?? []).map((p, i) => (
          <div className="flex flex-col md:flex-row w-full py-8 items-center">
            <div class=" relative w-full md:w-3/5 px-2">
              <label for="product-with-label" class="text-gray-700">
                Product Name
              </label>
              <input
                value={p.name}
                onChange={(e) => setProduct(i, 'name', e.target.value)}
                type="text"
                id="product-with-label"
                class=" rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
                name="text"
                placeholder="product Name"
              />
            </div>
            <div class=" relative w-full md:w-1/5 px-2">
              <label for="price-with-label" class="text-gray-700">
                Price
              </label>
              <input
                value={p.price}
                onChange={(e) => setProduct(i, 'price', e.target.value)}
                type="number"
                id="price-with-label"
                class=" rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
                name="price"
                placeholder="Mobile"
              />
            </div>
            <div class=" relative w-full md:w-1/5 px-2">
              <label for="quantity-with-label" class="text-gray-700">
                Quantity
              </label>
              <input
                value={p.quantity}
                onChange={(e) => setProduct(i, 'quantity', e.target.value)}
                type="number"
                id="quantity-with-label"
                class=" rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
                name="quantity"
                placeholder="Mobile"
              />
            </div>
            <div>
              {values.products.length > 1 && (
                <button
                  onClick={() => onRemove(i)}
                  type="button"
                  class="py-2 mr-6 px-4 mt-8 text-red-600 text-center "
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    class="w-6 h-6"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                </button>
              )}
            </div>
          </div>
        ))}
        <div class=" relative w-full px-2 mt-2">
          <label for="discount-with-label" class="text-gray-700">
            Delivery Charge
          </label>
          <input
            value={values.deliveryCharge}
            onChange={(e) => setInput('deliveryCharge', e.target.value)}
            type="number"
            id="price-with-label"
            class=" rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
            name="price"
            placeholder="Delivery Charge"
          />
        </div>
        <div class=" relative w-full px-2 mt-2">
          <label for="discount-with-label" class="text-gray-700">
            Discount
          </label>
          <input
            value={values.discount}
            onChange={(e) => setInput('discount', e.target.value)}
            type="number"
            id="price-with-label"
            class=" rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
            name="price"
            placeholder="Discount"
          />
        </div>
        <div className="w-full mt-20">
          <button
            onClick={() => {
              setValues(init)
              localStorage.removeItem('userData')
            }}
            type="button"
            class="py-2 px-4 px-2 mx-2 bg-blue-600 hover:bg-blue-700 focus:ring-blue-500 focus:ring-offset-indigo-200 text-white transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-lg "
          >
            Clear
          </button>
          <button
            onClick={addProduct}
            type="button"
            class="py-2 px-4 px-2 mx-2 bg-green-600 hover:bg-green-700 focus:ring-green-500 focus:ring-offset-green-200 text-white transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-lg "
          >
            Add New Product
          </button>
        </div>
        <div></div>
      </div>

      <iframe
        ref={iframeRef}
        title="recipt"
        style={{ height: 0, width: 0, position: 'absolute', margin: 0 }}
      />
      <div>
        <PrintComp values={values} printCompRef={printRef} />

        <button
          onClick={onPrint}
          type="button"
          class="py-2 mr-6 px-4 mt-8 bg-indigo-600 hover:bg-indigo-700 focus:ring-indigo-500 focus:ring-offset-indigo-200 text-white transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-lg "
        >
          print
        </button>
      </div>
    </div>
  )
}

export default App
