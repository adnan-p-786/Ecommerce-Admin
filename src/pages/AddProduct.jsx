import React, { useState } from 'react';
import { FaCloudUploadAlt } from 'react-icons/fa';
import { MdAdd } from 'react-icons/md';
import { baseUrl } from '../utils/api';

function AddProduct() {
  const [image, setImage] = useState(null);
const [productDetails, setProductDetails] = useState({
  name: '',
  price: '',
  unit: '',
});

// Handle file upload
const imageHandler = (e) => {
  setImage(e.target.files[0]);
};

// Handle input change
const changeHandler = (e) => {
  setProductDetails({ ...productDetails, [e.target.name]: e.target.value });
};

// Add product to database
const AddProduct = async () => {
  // Validate input
  if (!productDetails.name || !productDetails.price || !productDetails.unit) {
    alert('Please fill all the product details');
    return;
  }

  if (!image) {
    alert('Please upload an image');
    return;
  }

  // Prepare FormData to send both image and product data
  let formData = new FormData();
  formData.append('image', image); // Matches 'uploadImg.single("image")'
  formData.append('name', productDetails.name);
  formData.append('price', productDetails.price);
  formData.append('unit', productDetails.unit);

  try {
    // Send product with image to backend
    const response = await fetch(`${baseUrl}/api/post-product`, {
      method: 'POST',
      body: formData,
    });

    const data = await response.json();

    if (response.ok) {
      alert('🎉 Product Added Successfully!');
    } else {
      alert(`❌ Failed to add product: ${data.message}`);
    }
  } catch (error) {
    console.error('Error:', error);
    alert('❌ An error occurred. Please try again.');
  }
};


  return (
    <div className="p-5 ml-65 bg-slate-200 -mt-150 mr-10 h-[600px]">
      <form action="">
        <h1 className="text-xl">Product Title:</h1>
        <input
          type="text"
          name="name"
          value={productDetails.name}
          onChange={changeHandler}
          placeholder="Type here"
          className="border rounded-md mt-2 px-2"
        />
        <h1 className="text-xl mt-3">Price:</h1>
        <input
          type="text"
          name="price"
          value={productDetails.price}
          onChange={changeHandler}
          placeholder="Type here"
          className="border rounded-md mt-2 px-2"
        />
        <h1 className="text-xl mt-3">unit:</h1>
        <input
          type="text"
          name="unit"
          value={productDetails.unit}
          onChange={changeHandler}
          placeholder="Type here"
          className="border rounded-md mt-2 px-2"
        />
        
        <h1 className="text-xl mt-3">Product Image:</h1>
      </form>

      {/* Hidden file input with linked label for uploading */}
      <input
        type="file"
        accept="image/*"
        onChange={imageHandler}
        className="hidden"
        id="fileInput"
      />
      <label
        htmlFor="fileInput"
        className="flex mt-4 flex-col items-center justify-center w-32 h-32 border-2 border-gray-300 rounded-lg bg-white hover:bg-gray-100 transition duration-200 cursor-pointer"
      >
        <FaCloudUploadAlt className="text-gray-400 text-3xl mb-2" />
        <span className="text-gray-500">
          {image ? image.name : 'Upload'}
        </span>
      </label>

      <button
        onClick={() => AddProduct()}
        className="px-4 py-2 mt-4 bg-black text-white rounded-full font-bold flex items-center gap-2"
      >
        <MdAdd /> Add Product
      </button>
    </div>
  );
}

export default AddProduct;
