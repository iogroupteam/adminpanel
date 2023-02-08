const index = () => {
  return (
    <div>
      <div className="w-full lg:h-52 xl:h-64 shadow-md bg-white px-4 rounded-lg lg:mt-8 2xl:mt-8 xl:mt-2">
        <div className="h-[13%] flex justify-between items-center">
          <p className="text-xs">Tickets</p>
          <div className="border border-gray-200 rounded-full py-1 px-4">
            <p className="text-xs">Last Tickets</p>
          </div>
        </div>

        <div className="h-[70%] flex items-center justify-center">
          <img className="h-full" src="/tick.png"></img>
        </div>

        <div className="flex justify-center my-1">
          <button className="text-xs border border-gray-200 px-2 rounded-full">
            add tickets
          </button>
        </div>
      </div>
    </div>
  );
};

export default index;
