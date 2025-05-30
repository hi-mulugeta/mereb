import React from "react";

const PaymentModal = ({ product, onClose }) => {
  const copyToClipboard = (text) => {
    navigator.clipboard.writeText(text);
    alert("ተገልብጧል!");
  };

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-xl w-full max-w-md overflow-hidden">
        <div className="p-6">
          <div className="text-center mb-5">
            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-10 w-10 text-green-500"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                  clipRule="evenodd"
                />
              </svg>
            </div>
            <h3 className="text-xl font-bold text-ethiopian-green">
              ትዕዛዝዎ ተቀብሏል!
            </h3>
            <p className="text-gray-600 mt-2">ለመጠባበቅ ከታች ያለውን የክፍያ መረጃ ይጠቀሙ</p>
          </div>

          <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 mb-6">
            <div className="flex">
              <div className="flex-shrink-0">
                <svg
                  className="h-5 w-5 text-yellow-400"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>
              <div className="ml-3">
                <p className="text-sm text-yellow-700">
                  <strong>ማስታወሻ:</strong> ዕቃዎ ከክፍያዎ በኋላ በ 3 የስራ ቀናት ውስጥ ይደርስዎታል።
                  ክፍያ ካደረጉ በኋላ ስልክዎን በማያሻማ መጠበቅ ይኖርብዎታል።
                </p>
              </div>
            </div>
          </div>

          <div className="border border-gray-200 rounded-lg p-4 mb-6">
            <h4 className="font-medium text-gray-900 mb-3 flex items-center">
              <div className="bg-gray-200 border-2 border-dashed rounded-xl w-8 h-8 mr-2" />
              የኢትዮጵያ ንግድ ባንክ (CBE)
            </h4>

            <div className="space-y-3">
              <div>
                <p className="text-sm text-gray-500">የሂሳብ ቁጥር</p>
                <div className="flex justify-between items-center mt-1">
                  <p className="font-mono text-lg">1000345678901</p>
                  <button
                    onClick={() => copyToClipboard("1000345678901")}
                    className="text-ethiopian-green hover:text-ethiopian-green-dark flex items-center"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5 mr-1"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path d="M8 3a1 1 0 011-1h2a1 1 0 110 2H9a1 1 0 01-1-1z" />
                      <path d="M6 3a2 2 0 00-2 2v11a2 2 0 002 2h8a2 2 0 002-2V5a2 2 0 00-2-2 3 3 0 01-3 3H9a3 3 0 01-3-3z" />
                    </svg>
                    ቅዳ
                  </button>
                </div>
              </div>

              <div>
                <p className="text-sm text-gray-500">ተቀባይ ስም</p>
                <p className="font-semibold">Meregeta Tesema</p>
              </div>

              <div>
                <p className="text-sm text-gray-500">መጠን</p>
                <p className="text-2xl font-bold text-ethiopian-red">
                  {product.price * 1} ብር
                </p>
              </div>
            </div>
          </div>

          <button
            onClick={onClose}
            className="w-full bg-ethiopian-green hover:bg-ethiopian-green-dark text-white py-3 rounded-lg font-medium transition-colors"
          >
            ተረድቻለሁ
          </button>

          <p className="text-center text-gray-500 text-sm mt-4">
            ክፍያ ካደረጉ በኋላ በስልክ ቁጥር{" "}
            <span className="font-semibold">+251 911 223344</span> ያግኙን
          </p>
        </div>
      </div>
    </div>
  );
};

export default PaymentModal;
