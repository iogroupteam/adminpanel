/* eslint-disable @next/next/no-img-element */
const index = () => {
  return (
    <div>
      <div className="w-full grid grid-cols-2 lg:mt-8 xl:mt-4 2xl:mt-8 gap-x-4">
        <div className="bg-white shadow-md px-4 py-2 lg:h-52 xl:h-64 rounded-lg">
          <div className="flex justify-between items-center h-[10%]">
            <p className="text-xs">Consumption</p>
            <div className="border border-gray-200 rounded-full px-4">
              <p className="text-xs">History</p>
            </div>
          </div>
          <div className="h-[90%] flex items-center justify-center">
            <div className="h-[60%]">
              <img alt="icon" src="/sleeping.png" className="h-full"></img>
            </div>
          </div>
        </div>

        <div className="bg-white shadow-md px-4 py-2 lg:h-52 xl:h-64 rounded-lg">
          <div className="flex h-[10%] justify-between items-center">
            <p className="text-xs">
              Increase<span className="lg:hidden 2xl:block">credite</span>
            </p>
            <div className="border border-gray-200 rounded-full xl:px-4">
              <p className="text-xs">Transaction</p>
            </div>
          </div>

          <div className="h-[90%] flex flex-col items-center justify-center gap-y-3 ">
            <div className="h-[35%]">
              <img alt="icon" className="h-full" src="/ticket.png"></img>
            </div>

            <div>
              <p className="text-red-700 text-xs">Remaining credit : 6</p>
            </div>

            <div>
              <button className="text-xs border border-gray-200 px-2 py-2 rounded-full ">
                Increase credit
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default index;
