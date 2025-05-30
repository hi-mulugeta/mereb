import React from "react";

const Footer = () => {
  return (
    <footer className="bg-ethiopian-green text-gray-400 py-8 px-4 mt-12">
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <div className="flex items-center">
              {/* <div className="bg-gray-200 border-2 border-dashed rounded-xl w-12 h-12" /> */}
              <img
                src="./images/proj.png"
                alt="Meregeta Tesema Logo"
                className="bg-gray-200 border-2 border-dashed rounded-xl w-12 h-12 object-cover"
              />
              <div className="ml-3">
                <h3 className="text-xl font-bold">መርጌታ ተሰማ</h3>
                <p className="text-ethiopian-yellow text-sm">
                  Traditional Healing
                </p>
              </div>
            </div>
            <p className="mt-4 max-w-xs text-gray-400 amharic">
              ከተለያዩ ተፈጥሯዊ ምህንድስናዎች የተሰሩ የጤና ውጤታማ መድሃኒቶች
            </p>
          </div>

          <div className="grid grid-cols-2 gap-8">
            <div>
              <h4 className="text-lg font-semibold mb-4 amharic">አገናኞች</h4>
              <ul className="space-y-2">
                <li>
                  <a
                    href="#"
                    className="text-gray-400 hover:text-white transition amharic"
                  >
                    መግቢያ
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-gray-300 hover:text-white transition amharic"
                  >
                    ስለ እኛ
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-gray-300 hover:text-white transition amharic"
                  >
                    መድሃኒቶች
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-gray-300 hover:text-white transition amharic"
                  >
                    እንገናኝ
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4 amharic">አግኙን</h4>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 mr-2 mt-0.5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                    />
                  </svg>
                  <span>+251 911 223344</span>
                </li>
                <li className="flex items-start">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 mr-2 mt-0.5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                    />
                  </svg>
                  <span>mereb@example.com</span>
                </li>
                <li className="flex items-start">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 mr-2 mt-0.5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                  </svg>
                  <span className="amharic">አዲስ አበባ, ፒያሳ</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="border-t border-ethiopian-green-light mt-8 pt-6 text-center text-gray-300">
          <p className="amharic">
            © {new Date().getFullYear()} Meregeta Tesema. ሁሉም መብቶች የተጠበቁ ናቸው
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
