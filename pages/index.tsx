import { CheckIcon, ChevronDownIcon } from "@heroicons/react/24/outline";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen px-24 bg-orange-500 py-14">
      <div className="absolute border-[14px] border-black w-[300px] h-[650px] rounded-3xl z-10" />
      <div className="absolute bg-white w-[275px] h-[630px] px-1">
        <div className="absolute -top-1 left-12 rounded-md bg-black w-20 h-4" />
        <div className="border-b-2 h-9 flex items-end mx-1">
          <div className="text-[12px]">June 2023</div>
          <ChevronDownIcon className="h-3 w-3 text-gray-500 ml-1" />
        </div>
        <div className="text-[12px] flex flex-col justify-center items-center p-2 font-semibold my-2">
          <div>Hello, Bruno!</div>
          <div>Your medicines for today</div>
        </div>
        <div className="flex justify-between my-2">
          <div className="flex flex-col justify-center items-center p-1 ounded-lg">
            <span>16</span>
            <span className="text-[10px]">Mon</span>
          </div>
          <div className="flex flex-col justify-center items-center p-1 ounded-lg">
            <span>17</span>
            <span className="text-[10px]">Tue</span>
          </div>
          <div className="flex flex-col justify-center items-center p-1 rounded-lg bg-blue-400">
            <span>18</span>
            <span className="text-[10px]">Wed</span>
          </div>
          <div className="flex flex-col justify-center items-center p-1 ounded-lg">
            <span>19</span>
            <span className="text-[10px]">Thu</span>
          </div>
          <div className="flex flex-col justify-center items-center p-1 ounded-lg">
            <span>20</span>
            <span className="text-[10px]">Fri</span>
          </div>
          <div className="flex flex-col justify-center items-center p-1 ounded-lg">
            <span>21</span>
            <span className="text-[10px]">Sat</span>
          </div>
        </div>
        <div className="relative mt-32 h-[180px]">
          <div className="absolute w-4/5 bg-yellow-300 h-full z-10 rounded-lg px-2 pt-1 pb-2 flex flex-col justify-between">
            <div>
              <div>Nora - BE</div>
              <div className="text-[8px] -mt-1">Norenthindrone - 0.35mg</div>
            </div>
            <div>
              <div className="text-[8px]">7h30AM</div>
            </div>
          </div>
          <div className="absolute w-full h-full bg-blue-300 rounded-lg flex justify-end items-center px-4">
            <CheckIcon className="w-5 text-gray-950" />
          </div>
        </div>
        <div className="relative mt-1 h-[28%] rounded-lg px-2 py-1 bg-green-400">
          <div>Feosol</div>
          <div className="text-[8px] -mt-1">Ferrous Sulfate - 600mg</div>
        </div>
      </div>

    </div>
  )
}
