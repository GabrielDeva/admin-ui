import { useState } from 'react';

const PostCard = ({ id, userId, title, body }) => {
  const [isClicked, setIsClicked] = useState(false);

  const handleClick = () => {
    setIsClicked(!isClicked);
  };

  return (
    <div className="
      p-6 
      border border-gray-200 
      rounded-lg 
      shadow-md 
      transition-all duration-300 
      hover:scale-105 
      hover:border-2 
      hover:border-special-red2 
      hover:bg-pink-100
      bg-white
      flex flex-col
      h-full
      w-full
      max-w-sm
      mx-auto
    ">
      <h3 className="text-xl font-bold mb-2 text-gray-800 line-clamp-2 break-words">
        {title}
      </h3>
      
      <p className="text-gray-600 mb-4 line-clamp-4 flex-grow break-words">
        {body}
      </p>
      
      <button
        onClick={handleClick}
        className={`
          w-full 
          py-2 
          px-4 
          rounded-lg 
          font-semibold 
          transition-all duration-300
          ${isClicked 
            ? 'bg-special-red2 text-white hover:bg-red-700' 
            : 'bg-gray-400 text-white hover:bg-gray-500'
          }
          hover:brightness-110
        `}
      >
        {isClicked ? 'Tombol sudah diklik' : 'Silakan Klik'}
      </button>
    </div>
  );
};

export default PostCard;