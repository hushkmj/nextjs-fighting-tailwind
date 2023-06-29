import { CheckIcon, ChevronDownIcon } from "@heroicons/react/24/outline";

export default function Home() {
  return (
    <div className="flex h-screen w-full items-center justify-center bg-orange-500 bg-opacity-90">
  <div className="w-full max-w-sm rounded-xl bg-gray-50 px-5 py-5">
    <div className="mb-5 border-b-2 border-gray-300 pb-2">
      <span className="text-xs">March 2022 &darr;</span>
    </div>
    <div className="mb-10 flex flex-col items-center text-sm font-medium">
      <span>Hello, Bruno!</span>
      <span>Your medicines for today</span>
    </div>
    <div className="mb-20 flex items-center justify-between">
      <div className="flex flex-col items-center">
        <span className="text-lg font-medium">16</span>
        <span className="text-xs">Mon</span>
      </div>
      <div className="flex flex-col items-center">
        <span className="text-lg font-medium">17</span>
        <span className="text-xs">Tue</span>
      </div>
      <div className="flex flex-col items-center rounded-2xl bg-blue-400 p-2 text-black">
        <span className="text-lg font-medium">18</span>
        <span className="text-xs">Wed</span>
      </div>
      <div className="flex flex-col items-center">
        <span className="text-lg font-medium">19</span>
        <span className="text-xs">Thu</span>
      </div>
      <div className="flex flex-col items-center">
        <span className="text-lg font-medium">20</span>
        <span className="text-xs">Fri</span>
      </div>
      <div className="flex flex-col items-center">
        <span className="text-lg font-medium">21</span>
        <span className="text-xs">Sat</span>
      </div>
    </div>
    <div>
      <div className="relative flex mb-2">
        <div className="z-10 w-[90%] rounded-lg bg-amber-200 p-3">
          <div className="flex flex-col font-medium">
            <span>Nora - BE</span>
            <span className="text-xs">Norenthindone - 0.35mg</span>
          </div>
          <span className="mt-24 block text-xs font-medium">7h30AM</span>
        </div>
        <div className="absolute right-0 flex h-full w-[12%] rounded-tr-lg rounded-br-lg bg-blue-400 justify-end pr-2">
          <svg fill="none" className="w-5" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
            <path stroke-linecap="round" stroke-linejoin="round" d="M4.5 12.75l6 6 9-13.5"></path>
          </svg>
        </div>
      </div>
      <div className="relative flex">
        <div className="z-10 w-full rounded-lg bg-emerald-300 p-3">
          <div className="flex flex-col font-medium">
            <span>Feosol</span>
            <span className="text-xs">Ferrous Sulfate - 600mg</span>
          </div>
          <span className="mt-24 block text-xs font-medium">7h30AM</span>
        </div>
      </div>
    </div>
  </div>
</div>

  )
}
