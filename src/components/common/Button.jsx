const Button = ({ content, onClick }) => {
  return (
    <button
      onClick={onClick}
      className="bg-black text-white md:p-5 p-3 border-[2px] border-yellow font-inter font-black md:text-sm text-xs relative after:content-[''] after:absolute after:top-0 hover:after:w-full after:left-0 after:w-0 transition-all ease-in-out duration-300 after:transition-all after:ease-in-out after:duration-300 after:h-0 hover:after:h-full after:bg-yellow hover:text-white"
    >
      <span className="relative z-10 uppercase">{content}</span>
    </button>
  );
};

export default Button;
