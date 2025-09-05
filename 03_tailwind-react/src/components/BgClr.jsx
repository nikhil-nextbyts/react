import React, {useState} from 'react'

function BgClr() {
  const [bgColor, setBgColor] = useState('lightgray');

  const handleColorChange = (color) => {
    setBgColor(color);
  };

  return (
    <div className="width-full h-screen duration-200"
      style={{ backgroundColor: bgColor }}>
      <div className="fixed bottom-12 inset-x-0 px-2 flex flex-wrap justify-center">
        <div className="flex justify-center flex-wrap gap-3 shadow-lg rounded-4xl text-white bg-white px-3 py-2">
          <button className="border-none bg-red-600 px-4  text-center  rounded-2xl" onClick={() => handleColorChange('red')}>
            Red
          </button>
          <button className="border-none bg-green-600 px-4  text-center  rounded-2xl" onClick={() => handleColorChange('green')}>
            Green
          </button>
          <button className="border-none bg-blue-600 px-4  text-center  rounded-2xl" onClick={() => handleColorChange('blue')}>
            Blue
          </button>
          <button className="border-none bg-yellow-600 px-4  text-center rounded-2xl" onClick={() => handleColorChange('yellow')}>
            Yellow
          </button>
          <button className="border-none bg-purple-600 px-4  text-center rounded-2xl" onClick={() => handleColorChange('purple')}>
            Purple
          </button>
          <button className="border-none bg-black px-4  text-center rounded-2xl" onClick={() => handleColorChange('black')}>
            Black
          </button>
          <button className="border-none bg-pink-600 px-4 text-center rounded-2xl" onClick={() => handleColorChange('pink')}>
            Pink
          </button>
        </div>
      </div>
    </div>
  );
}

export default BgClr

