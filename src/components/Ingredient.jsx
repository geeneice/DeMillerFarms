import { useState } from "react";

const ProductCard = ({ image, title, summary, ingredients, nutritionalFacts }) => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownOpen((prevState) => !prevState);
  };

  return (
    <div className="flex flex-col sm:flex-row items-stretch border-b-4 border-white">
      {/* Left Section: Image with White Background */}
      <div className="w-full sm:w-1/2 bg-white flex justify-center items-center">
        <img
          src={image}
          alt={title}
          className="w-[50%] h-full object-cover p-4"
        />
      </div>

      {/* Right Section: Content with Yellow Background */}
      <div className="w-full sm:w-1/2 bg-yellow-500 p-6 flex flex-col justify-center text-center sm:text-left rounded-lg">
        {/* Title */}
        <h3 className="text-2xl sm:text-3xl font-semibold text-white mb-4">
          {title}
        </h3>

        {/* Summary */}
        <p className="text-base sm:text-lg text-gray-200 mb-6">{summary}</p>

        {/* Dropdown Button */}
        <button
          onClick={toggleDropdown}
          className="text-lg font-semibold text-yellow-500 bg-white hover:bg-gray-200 rounded-lg px-4 py-2 transition-all duration-300"
        >
          {isDropdownOpen ? "Hide Nutritional Facts" : "View Nutritional Facts"}
        </button>

        {/* Dropdown Content */}
        <div
          className={`mt-4 overflow-hidden transition-all duration-500 ${
            isDropdownOpen ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"
          }`}
        >
          <div className="bg-gray-50 p-4 rounded-lg shadow-lg">
            {/* Ingredients Section */}
            <div className="mb-4">
              <h4 className="text-lg sm:text-xl font-medium text-gray-600 mb-3">
                Ingredients:
              </h4>
              <p className="text-gray-700">{ingredients.join(", ")}</p>
            </div>

            {/* Border Divider */}
            <div className="border-t-2 border-gray-300 mt-6 mb-4"></div>

            {/* Nutritional Facts Section */}
            <h5 className="text-xl font-semibold text-gray-800 mb-3">
              Nutritional Facts
            </h5>
            <ul className="text-gray-700 space-y-2">
              {nutritionalFacts.map((fact, index) => (
                <li key={index} className="text-base">
                  <span className="font-medium">{fact.label}:</span>{" "}
                  {fact.value}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

const ProductList = ({ products }) => (
  <div className="max-w-screen-xl mx-auto px-4 py-12">
    <div className="space-y-0">
      {products.map((product, index) => (
        <ProductCard
          key={index}
          image={product.image}
          title={product.title}
          summary={product.summary}
          ingredients={product.ingredients}
          nutritionalFacts={product.nutritionalFacts}
        />
      ))}
    </div>
  </div>
);

export default ProductList;
