import { BsCircleFill } from 'react-icons/bs';
const index = () => {
  return (
    <div>
      <div className="w-full lg:h-48 xl:h-64 bg-white px-4 rounded-lg shadow-md">
        <div className="h-[13%] flex justify-between items-center">
          <p className="text-xs">Latest sites</p>
          <div className="border border-gray-200 rounded-full py-1 px-4">
            <p className="text-xs">Show all sites</p>
          </div>
        </div>
        <div className="h-[70%] ">
          <table className="table-fixed w-full">
            <thead>
              <tr className="flex justify-between border-b border-gray-200 py-2 w-full">
                <th className="w-[30%] flex justify-start">URL</th>
                <th className="w-[30%] flex justify-start">Date</th>
                <th className="w-[30%] flex justify-start">Condition</th>
              </tr>
            </thead>

            <tbody>
              <tr className="flex justify-between border-b border-gray-200 py-1 w-full">
                <td className="w-[30%] flex justify-start">
                  <div className="flex items-center gap-x-2">
                    <div className="text-sm text-green-500">
                      <BsCircleFill />
                    </div>
                    <div>
                      <p className="lg:text-xs xl:text-sm">io-team.ir</p>
                    </div>
                  </div>
                </td>
                <td className="w-[30%] flex justify-start">
                  <div className="flex items-center">
                    <p className="text-xs text-center opacity-75">02/02/2023</p>
                  </div>
                </td>
                <td className="w-[30%] flex justify-start]">
                  <div>
                    <button className="bg-blue-200 px-5 xl:py-1 text-blue-400 rounded-full text-xs">
                      active
                    </button>
                  </div>
                </td>
              </tr>
              <tr className="flex justify-between border-b border-gray-200 py-1 w-full">
                <td className="w-[30%] flex justify-start">
                  <div className="flex items-center gap-x-2">
                    <div className="text-sm text-red-500">
                      <BsCircleFill />
                    </div>
                    <div>
                      <p className="lg:text-xs xl:text-sm">io-team.ir</p>
                    </div>
                  </div>
                </td>
                <td className="w-[30%] flex justify-start">
                  <div className="flex items-center">
                    <p className="text-xs text-center opacity-75">02/02/2023</p>
                  </div>
                </td>
                <td className="w-[30%] flex justify-start]">
                  <div>
                    <button className="bg-blue-200 px-5 xl:py-1 text-blue-400 rounded-full text-xs">
                      inactive
                    </button>
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="h-[17%] flex items-center">
          <div className="flex w-full justify-between">
            <div className="flex xl:gap-x-4">
              <div className="flex items-center gap-x-1">
                <div className="text-sm text-green-500">
                  <BsCircleFill />
                </div>
                <div>
                  <p className="text-xs">active</p>
                </div>
              </div>
              <div className="flex items-center gap-x-1">
                <div className="text-sm text-red-500">
                  <BsCircleFill />
                </div>
                <div>
                  <p className="text-xs"> inactive</p>
                </div>
              </div>
              <div className="flex items-center gap-x-1">
                <div className="text-sm text-yellow-500">
                  <BsCircleFill />
                </div>
                <div>
                  <p className="text-xs"> waiting</p>
                </div>
              </div>
            </div>
            <div>
              <button className="border border-gray-200 rounded-full px-5 py-1 lg:text-xs 2xl:text-sm">
                add url
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default index;
