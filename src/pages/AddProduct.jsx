import Swal from "sweetalert2";

const AddProduct = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const formData = new FormData(form);

    // Compute current price
    const oldPrice = parseFloat(form.oldPrice.value) || 0;
    const discount = parseFloat(form.discount.value) || 0;
    const currentPrice = oldPrice - (oldPrice * discount) / 100;

    // Add currentPrice to FormData
    formData.set("currentPrice", currentPrice.toFixed(2)); // optional: 2 decimal points

    fetch(
      "https://ravva-e-commerce-server-production.up.railway.app/products",
      {
        method: "POST",
        body: formData,
      }
    )
      .then((res) => res.json())
      .then((result) => {
        if (result.insertedId) {
          Swal.fire({
            title: "Product added Successfully !",
            icon: "success",
            draggable: true,
          });
        }
        console.log(result);
        form.reset();
      });
  };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-4  ">
      <form
        onSubmit={handleSubmit}
        className="bg-white w-full max-w-3xl rounded-xl shadow-lg p-6 space-y-6 "
      >
        <h2 className="text-2xl font-semibold text-gray-800 text-center">
          Add New Product
        </h2>

        {/* Product Name */}
        <input
          type="text"
          name="name"
          placeholder="Product Name"
          className="input"
        />

        {/* Size & Color */}

        <select name="size" className="input ml-3">
          <option value="">Select size</option>
          <option value="M">M </option>
          <option value="L">L</option>
          <option value="XL">XL</option>
          <option value="XXL">XXL</option>
        </select>

        <input
          type="text"
          name="color"
          placeholder="Color"
          className="input mr-3"
        />
        <input
          type="text"
          name="quantity"
          placeholder="Quantity"
          className="input"
        />

        {/* Price Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <input
            type="text"
            name="oldPrice"
            placeholder="Old Price"
            className="input"
          />
          <input
            type="number"
            name="discount"
            placeholder="Discount (%)"
            className="input"
          />
        </div>

        {/* Product Type */}
        <select name="type" className="input" required>
          <option value="">Select Product Type</option>
          <option value="new-arrival">New Arrival</option>
          <option value="top-selling">Top Selling</option>
        </select>

        {/* Images */}
        <div className="space-y-4 grid gap-5 grid-cols-1 md:grid-cols-2">
          <div>
            <label className="block mb-1 font-medium text-black">
              Main Image
            </label>
            <input
              type="file"
              name="mainImage"
              className="file-input"
              required
            />
          </div>

          <div>
            <label
              className="block mb-1 font-medium text-black
            "
            >
              Sub Images (Max 3)
            </label>
            <input
              type="file"
              name="subImages"
              multiple
              className="file-input"
              required
            />
          </div>
        </div>

        {/* Submit */}
        <button
          type="submit"
          className="w-full bg-black text-white py-3 rounded-lg font-medium hover:bg-gray-800 transition"
        >
          Add Product
        </button>
      </form>
    </div>
  );
};

export default AddProduct;
