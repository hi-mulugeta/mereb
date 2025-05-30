import React from "react";
import { motion } from "framer-motion";

const ProductCard = ({ product, onOrderClick }) => {
  return (
    <motion.div
      className="bg-white dark:bg-gray-900 rounded-xl border border-gray-200 dark:border-gray-700 shadow-md p-5 max-w-sm w-full transition-all"
      whileHover={{ scale: 1.02, y: -4 }}
      whileTap={{ scale: 0.98 }}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3, type: "spring", stiffness: 200 }}
    >
      {/* Product image (fallback to a colored box if none) */}
      <div className="w-full h-40 bg-gray-100 dark:bg-gray-800 rounded-lg flex items-center justify-center mb-4 overflow-hidden">
        {product.imageUrl ? (
          <img
            src={product.imageUrl}
            alt={product.name}
            className="w-full h-full object-cover rounded-md"
          />
        ) : (
          <div className="text-gray-400 text-sm">No Image</div>
        )}
      </div>

      {/* Product name and price */}
      <div className="flex justify-between items-center mb-2">
        <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
          {product.name}
        </h3>
        <span className="text-sm font-medium text-blue-600 dark:text-cyan-400">
          {product.price ? product.price + " ብር" : "3,000 ብር"}
        </span>
      </div>

      {/* Description */}
      <p className="text-sm text-gray-600 dark:text-gray-300 leading-relaxed line-clamp-3 mb-3">
        {product.description}
      </p>

      {/* Tags */}
      <div className="flex flex-wrap gap-2 mb-4">
        {product.tags.slice(0, 3).map((tag, index) => (
          <span
            key={index}
            className="bg-gray-100 dark:bg-gray-800 text-xs text-gray-700 dark:text-gray-300 px-3 py-1 rounded-full"
          >
            #{tag}
          </span>
        ))}
        {product.tags.length > 3 && (
          <span className="text-xs text-gray-500 dark:text-gray-400">
            +{product.tags.length - 3}
          </span>
        )}
      </div>

      {/* Order button */}
      <motion.button
        onClick={() => onOrderClick(product)}
        className="w-full py-2.5 bg-indigo-600 hover:bg-indigo-700 text-white text-sm font-medium rounded-lg transition-colors"
        whileHover={{ scale: 1.01 }}
        whileTap={{ scale: 0.97 }}
      >
        ይዘዙ
      </motion.button>
    </motion.div>
  );
};

export default ProductCard;
