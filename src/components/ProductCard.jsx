import React from "react";
import { motion } from "framer-motion";

const ProductCard = ({ product, onOrderClick }) => {
  return (
    <motion.div
      className="bg-white dark:bg-gray-900 rounded-xl border border-gray-200 dark:border-gray-700 shadow-sm hover:shadow-md p-5 max-w-sm w-full transition-all"
      whileHover={{ scale: 1.02, y: -4 }}
      whileTap={{ scale: 0.98 }}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3, type: "spring", stiffness: 200 }}
    >
      {/* Product image with improved aspect ratio */}
      <div className="w-full aspect-[4/3] bg-gray-100 dark:bg-gray-800 rounded-lg flex items-center justify-center mb-4 overflow-hidden">
        {product.imageUrl ? (
          <img
            src={product.imageUrl}
            alt={product.name}
            className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
          />
        ) : (
          <div className=" p-2 text-4xl text-center text-gray-900 dark:text-gray-600">
            {product.name}
          </div>
        )}
      </div>

      {/* Product info section */}
      <div className="mb-3">
        {/* <h3 className="text-lg font-semibold text-gray-900 dark:text-white line-clamp-1 mb-1">
          {product.name}
        </h3> */}

        {/* Enhanced price display with currency formatting */}
        <div className="flex items-center justify-between mb-2">
          <span className="text-sm text-gray-500 dark:text-gray-400">
            <span className="text-xl font-bold text-blue-600 dark:text-cyan-400">
              ከ...
              {product.price
                ? new Intl.NumberFormat("en-ET").format(product.price)
                : "3,000"}
            </span>
            <span className="text-sm font-medium text-blue-500 dark:text-cyan-300">
              ብር
            </span>
          </span>
          <div className="flex items-baseline text-x text-blue-500 space-x-1">
            ጀምሮ
          </div>
        </div>
      </div>

      {/* Description with better typography */}
      <p className="text-sm text-gray-600 dark:text-gray-300 leading-relaxed line-clamp-3 mb-4">
        {product.description ||
          "Premium quality product with excellent craftsmanship"}
      </p>

      {/* Tags with subtle animation */}
      <div className="flex flex-wrap gap-2 mb-5">
        {product.tags?.slice(0, 3).map((tag, index) => (
          <motion.span
            key={index}
            whileHover={{ scale: 1.05 }}
            className="bg-gray-100 dark:bg-gray-800 text-xs text-gray-700 dark:text-gray-300 px-3 py-1 rounded-full"
          >
            #{tag}
          </motion.span>
        ))}
        {product.tags?.length > 3 && (
          <span className="text-xs text-gray-500 dark:text-gray-400 self-center">
            +{product.tags.length - 3} more
          </span>
        )}
      </div>

      {/* Refined outline button with better visual hierarchy */}
      <motion.button
        onClick={() => onOrderClick(product)}
        className="w-full px-4 py-3 font-medium border-2 border-blue-600 dark:border-cyan-500 text-blue-600 dark:text-cyan-400 rounded-lg hover:bg-blue-600 dark:hover:bg-cyan-600 hover:text-white transition-all duration-300 flex items-center justify-center gap-2"
        whileHover={{
          scale: 1.01,
          boxShadow: "0 2px 8px rgba(59, 130, 246, 0.2)",
        }}
        whileTap={{ scale: 0.98 }}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5"
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path d="M3 1a1 1 0 000 2h1.22l.305 1.222a.997.997 0 00.01.042l1.358 5.43-.893.892C3.74 11.846 4.632 14 6.414 14H15a1 1 0 000-2H6.414l1-1H14a1 1 0 00.894-.553l3-6A1 1 0 0017 3H6.28l-.31-1.243A1 1 0 005 1H3zM16 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM6.5 18a1.5 1.5 0 100-3 1.5 1.5 0 000 3z" />
        </svg>
        ይዘዙ
      </motion.button>
    </motion.div>
  );
};

export default ProductCard;
