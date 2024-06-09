const Buttons = () => {
  return (
    <div className="flex w-full gap-2">
      <button className="w-full border-[1px] border-brand bg-brand p-2 font-light uppercase text-light transition-all duration-300 hover:bg-red-700 md:w-36 md:text-xl md:font-medium">
        Buy
      </button>
      <button className="w-full border-[1px] border-dark p-2 font-light uppercase transition-all duration-300 hover:bg-red-700 hover:text-light md:w-36 md:text-xl md:font-medium">
        Sell
      </button>
    </div>
  );
};

export default Buttons;
