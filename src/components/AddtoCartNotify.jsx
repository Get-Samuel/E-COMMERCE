import { PiWarningCircle } from "react-icons/pi";

function AddtoCartNotify({ title }) {
  const truncatedTitle = title.split(" ")[0] + (title.split(" ").length > 1 ? "…" : "");
  return (
    <div className="fixed max-w-[90%] z-50 left-[50%] -translate-x-1/2 top-[10%] bg-orange-50 rounded-xl w-fit py-3 px-5">
      <p className="text-orange-600 whitespace-nowrap md:text-sm text-xs flex gap-1 items-center"><PiWarningCircle size={19}/> Added <span className="font-bold text-black">{truncatedTitle}</span> to your cart</p>
    </div>
  )
}

export default AddtoCartNotify
