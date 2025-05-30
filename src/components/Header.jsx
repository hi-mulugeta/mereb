import React from "react";

const Header = () => {
  return (
    <header className="bg-ethiopian-green text-gray-400 py-4 px-6 shadow-md">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
        <div className="flex items-center mb-4 md:mb-0">
          {/* <div className="bg-gray-200 border-2 border-dashed rounded-xl w-16 h-16" /> */}
          <img
            src="./images/proj.png"
            alt="Meregeta Tesema Logo"
            className="border-2 border-dashed rounded-xl w-16 h-16 bg-gray-200 object-cover"
          />
          <div className="ml-4">
            {/* Title: Changed from "Meregeta Tesema" to "መርጌታ ተሰማ" */}
            <h1 className="text-2xl font-bold">መርጌታ ተሰማ</h1>
            {/* Subtitle: Changed from "Traditional Healing Since 1985" to "ባህላዊ ህክምና ከ1985 ጀምሮ" */}
            <p className="text-ethiopian-yellow">ባህላዊ ህክምና ከ1985 ጀምሮ</p>
          </div>
        </div>

        <div className="bg-white/20 p-3 rounded-lg text-center">
          {/* Phone number text: Changed from "ለምርዚያት ይደውሉ፡" to "ለጥያቄ ይደውሉ:" */}
          <p className="font-semibold">ለጥያቄ ይደውሉ፡ +251-111-55-13-34</p>
          {/* Location text: Changed from "ቦታ፡ አዲስ አበባ, ፒያሳ" to "አድራሻ፡ አዲስ አበባ፣ ፒያሳ" */}
          <p className="text-sm mt-1">አድራሻ፡ አዲስ አበባ፣ ፒያሳ</p>
        </div>
      </div>
    </header>
  );
};

export default Header;
