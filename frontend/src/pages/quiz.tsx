

export default function Quiz() {
  return (
    <div className="w-full h-full flex">
      <div className="w-[300px] p-4 bg-[#f6f6f6]">
        <div className="flex flex-col items-center mb-6">
          {[...Array.from({ length: 10 })].map((_, i) => (
            <div key={i} className="flex items-center mb-4">
              <img
                src="profile.jpg"
                alt="Profile"
                className="w-[50px] h-[50px] rounded-full"
              />
              <div className="ml-4">
                <div className="font-bold">BRAINHUBADM</div>
                <div className="text-xs text-gray-500">THE LIMITLESS</div>
              </div>
              <span className="fa fa-trophy ml-2 text-yellow-500"></span>
            </div>
          ))}
        </div>
      </div>
      <div className="flex-1 p-8">
        <div className="flex justify-between">
          <div className="text-3xl font-bold">#1</div>
          <div className="text-lg font-bold text-gray-500">HARDWARE GERAL</div>
        </div>
        <div className="mt-8 text-2xl font-bold">
          Qual das seguintes tecnologias de memória é usada em cache de
          processadores para melhorar a velocidade de acesso aos dados
          frequentemente utilizados?
        </div>
        <div className="mt-8 space-y-4">
          <button className="w-full p-4 bg-[#000000] text-white rounded-lg font-bold">
            DRAM (Dynamic Random-Access Memory)
          </button>
          <button className="w-full p-4 bg-[#000000] text-white rounded-lg font-bold">
            SDRAM (Synchronous Dynamic Random-Access Memory)
          </button>
          <button className="w-full p-4 bg-[#000000] text-white rounded-lg font-bold">
            SRAM (Static Random-Access Memory)
          </button>
          <button className="w-full p-4 bg-[#000000] text-white rounded-lg font-bold">
            ROM (Read-Only Memory)
          </button>
        </div>
      </div>
    </div>
  );
}
