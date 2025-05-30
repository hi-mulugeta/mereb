import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import PaymentModal from "./PaymentModal";

const OrderForm = ({ product, onClose }) => {
  const [formData, setFormData] = useState({
    fullName: "",
    phone: "",
    address: "",
    quantity: 1,
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setError("");

    // Form validation
    if (!formData.fullName.trim()) {
      setError("እባኮትን ሙሉ ስምዎን ያስገቡ");
      setIsLoading(false);
      return;
    }

    if (!formData.phone.trim() || formData.phone.length < 9) {
      setError("እባኮትን ትክክለኛ ስልክ ቁጥር ያስገቡ");
      setIsLoading(false);
      return;
    }

    if (!formData.address.trim()) {
      setError("እባኮትን የማድረሻ አድራሻ ያስገቡ");
      setIsLoading(false);
      return;
    }

    try {
      // Send to Telegram bot
      await sendToTelegramBot();
      setSubmitted(true);
    } catch (err) {
      setError("ስህተት ተፈጥሯል፣ እባኮትን እንደገና �ምር");
      console.error("Submission error:", err);
    } finally {
      setIsLoading(false);
    }
  };

  const sendToTelegramBot = async () => {
    const botToken = "7471453938:AAHIT3kJghyRkr4TSM6H0HD3Zg_YbI8DN5c";
    const chatId = "1145247457";

    if (!botToken || !chatId) {
      throw new Error("Telegram configuration missing");
    }

    const totalPrice = product.price * formData.quantity;

    const text = `📦 አዲስ ትዕዛዝ!\n
መርዚያ: ${product.name}
ስም: ${formData.fullName}
ስልክ: ${formData.phone}
አድራሻ: ${formData.address}
ብዛት: ${formData.quantity}
ጠቅላላ ዋጋ: ${totalPrice} ብር
መልዕክት: ${formData.message || "አልተገለጸም"}`;

    const response = await fetch(
      `https://api.telegram.org/bot${botToken}/sendMessage`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          chat_id: chatId,
          text: text,
          parse_mode: "Markdown",
        }),
      }
    );

    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(`Telegram error: ${errorData.description}`);
    }
  };

  if (submitted) {
    return (
      <PaymentModal
        product={{ ...product, price: product.price * formData.quantity }}
        onClose={onClose}
      />
    );
  }

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 bg-black/70 backdrop-blur-sm flex items-center justify-center z-50 p-4"
    >
      <motion.div
        initial={{ scale: 0.9, y: 20 }}
        animate={{ scale: 1, y: 0 }}
        className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl w-full max-w-md border border-gray-700 shadow-2xl overflow-hidden"
      >
        <div className="h-1 bg-gradient-to-r from-cyan-500 to-blue-600"></div>

        <div className="p-6">
          <div className="flex justify-between items-center mb-6">
            <motion.h3
              className="text-xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-400"
              whileHover={{ scale: 1.02 }}
            >
              የትዕዛዝ ቅጽ: {product.name}
            </motion.h3>
            <motion.button
              onClick={onClose}
              className="text-gray-400 hover:text-white p-1 rounded-full"
              whileHover={{ rotate: 90, scale: 1.1 }}
              disabled={isLoading}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </motion.button>
          </div>

          <form onSubmit={handleSubmit} className="space-y-5">
            <AnimatePresence>
              {error && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0 }}
                  className="bg-gray-800/50 text-red-400 p-3 rounded-lg flex items-start border border-red-900/50"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 mr-2 mt-0.5 flex-shrink-0"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <span>{error}</span>
                </motion.div>
              )}
            </AnimatePresence>

            <motion.div whileHover={{ y: -2 }}>
              <label className="block text-sm font-medium text-gray-400 mb-2">
                ሙሉ ስም
              </label>
              <input
                type="text"
                name="fullName"
                value={formData.fullName}
                onChange={handleChange}
                className="w-full px-4 py-3 bg-gray-800/50 border border-gray-700 rounded-lg focus:ring-2 focus:ring-cyan-500 focus:border-transparent text-white placeholder-gray-500"
                placeholder="ስምዎን ያስገቡ"
                disabled={isLoading}
              />
            </motion.div>

            <div className="grid grid-cols-2 gap-4">
              <motion.div whileHover={{ y: -2 }}>
                <label className="block text-sm font-medium text-gray-400 mb-2">
                  ስልክ ቁጥር
                </label>
                <div className="flex">
                  <span className="inline-flex items-center px-3 rounded-l-lg border border-r-0 border-gray-700 bg-gray-800 text-gray-400 text-sm">
                    +251
                  </span>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-gray-800/50 border border-gray-700 rounded-r-lg focus:ring-2 focus:ring-cyan-500 focus:border-transparent text-white placeholder-gray-500"
                    placeholder="911223344"
                    disabled={isLoading}
                  />
                </div>
              </motion.div>

              <motion.div whileHover={{ y: -2 }}>
                <label className="block text-sm font-medium text-gray-400 mb-2">
                  ብዛት?
                </label>
                <select
                  name="quantity"
                  value={formData.quantity}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-gray-800/50 border border-gray-700 rounded-lg focus:ring-2 focus:ring-cyan-500 focus:border-transparent text-white"
                  disabled={isLoading}
                >
                  {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((num) => (
                    <option key={num} value={num} className="bg-gray-800">
                      {num}
                    </option>
                  ))}
                </select>
              </motion.div>
            </div>

            <motion.div whileHover={{ y: -2 }}>
              <label className="block text-sm font-medium text-gray-400 mb-2">
                የማድረሻ አድራሻ
              </label>
              <textarea
                name="address"
                value={formData.address}
                onChange={handleChange}
                rows="3"
                className="w-full px-4 py-3 bg-gray-800/50 border border-gray-700 rounded-lg focus:ring-2 focus:ring-cyan-500 focus:border-transparent text-white placeholder-gray-500"
                placeholder="ከተማ፣ ክልል፣ ዝርዝር አድራሻ"
                disabled={isLoading}
              ></textarea>
            </motion.div>

            <motion.div whileHover={{ y: -2 }}>
              <label className="block text-sm font-medium text-gray-400 mb-2">
                ተጨማሪ መልዕክት (አማራጭ)
              </label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows="2"
                className="w-full px-4 py-3 bg-gray-800/50 border border-gray-700 rounded-lg focus:ring-2 focus:ring-cyan-500 focus:border-transparent text-white placeholder-gray-500"
                placeholder="ማንኛውም ተጨማሪ መረጃ ወይም ማስታወሻ..."
                disabled={isLoading}
              ></textarea>
            </motion.div>

            <motion.div
              className="bg-gray-800/30 p-4 rounded-lg border border-gray-700"
              whileHover={{ scale: 1.01 }}
            >
              <div className="flex justify-between">
                <span className="text-gray-400">የአንድ ዋጋ</span>
                <span className="font-medium text-gray-300">
                  {product.price} ብር
                </span>
              </div>
              <div className="flex justify-between mt-2">
                <span className="text-gray-400">ጠቅላላ ዋጋ</span>
                <span className="text-lg font-bold text-cyan-400">
                  {product.price * formData.quantity} ብር
                </span>
              </div>
            </motion.div>

            <motion.button
              type="submit"
              disabled={isLoading}
              className={`w-full py-3 rounded-lg font-medium flex items-center justify-center gap-2 ${
                isLoading
                  ? "bg-gray-700 cursor-not-allowed"
                  : "bg-gradient-to-r from-cyan-600 to-blue-600 hover:from-cyan-500 hover:to-blue-500"
              }`}
              whileHover={
                !isLoading
                  ? {
                      scale: 1.02,
                      boxShadow: "0 0 20px -5px rgba(6, 182, 212, 0.5)",
                    }
                  : {}
              }
              whileTap={!isLoading ? { scale: 0.98 } : {}}
            >
              {isLoading ? (
                <>
                  <svg
                    className="animate-spin -ml-1 mr-2 h-5 w-5 text-white"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                  >
                    <circle
                      className="opacity-25"
                      cx="12"
                      cy="12"
                      r="10"
                      stroke="currentColor"
                      strokeWidth="4"
                    ></circle>
                    <path
                      className="opacity-75"
                      fill="currentColor"
                      d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                    ></path>
                  </svg>
                  <span className="text-white">እየተላከ ነው...</span>
                </>
              ) : (
                <>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <span className="text-white">ትዕዛዝ ይላኩ</span>
                </>
              )}
            </motion.button>
          </form>

          <p className="text-center text-gray-500 text-xs mt-5">
            የእርስዎ መረጃ የሚያልፈው በደህንነት ብቻ ነው። እኛ የእርስዎን ግላዊነት እናስከብራለን።
          </p>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default OrderForm;
