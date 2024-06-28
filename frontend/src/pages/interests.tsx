import logoUrl from '../assets/logo2.png';


export default function Interest() {

  return (
    <div className="flex items-center justify-center min-h-screen bg-[#212121]">
      <div className="bg-white w-[350px] rounded-[40px] p-8 flex flex-col items-center">
        <h1 className="text-2xl font-black mb-2 text-center font-sans">
          Select 3 interests
        </h1>
        <p className="text-center mb-8 font-sans text-[#6B7280]">
          Select things that interest you.
        </p>
        <button className="w-full bg-[#E5E7EB] rounded-[20px] py-4 mb-4 font-sans font-light text-left px-4">
          Programming
        </button>
        <button className="w-full bg-[#E5E7EB] rounded-[20px] py-4 mb-4 font-sans font-light text-left px-4">
          Math
        </button>
        <button className="w-full bg-[#E5E7EB] rounded-[20px] py-4 mb-8 font-sans font-light text-left px-4">
          Chimical
        </button>
        <button className="w-full bg-[#212121] text-white rounded-[20px] py-4 mb-8 font-sans font-medium">
          Finish!
        </button>
        <img src={logoUrl} alt="logo" className="w-16 h-16" />
      </div>
    </div>
  );

}