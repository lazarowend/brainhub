import logoUrl from '../assets/logo1.png';


export default function Home2() {
  return (
    <div className="flex h-screen">
      <aside className="w-[250px] bg-white p-4">
        <div className="mb-8">
          <img
            src={logoUrl}
            alt="Brain Hub logo"
            className="mx-auto w-100 h-11"
          />
        </div>
            <nav>
              <ul className="space-y-4">
                <li className="flex items-center text-[#313131]">
                  <i className="fas fa-home mr-4"></i>
                  <a href="#" className="font-semibold">
                    Início
                  </a>
                </li>
                <li className="flex items-center text-[#313131]">
                  <i className="fas fa-bolt mr-4"></i>
                  <a href="#" className="font-semibold">
                    Desafios
                  </a>
                </li>
                <li className="flex items-center text-[#313131]">
                  <i className="fas fa-trophy mr-4"></i>
                  <a href="#" className="font-semibold">
                    Competitivo
                  </a>
                </li>
                <li className="flex items-center text-[#313131]">
                  <i className="fas fa-chart-line mr-4"></i>
                  <a href="#" className="font-semibold">
                    Ranking
                  </a>
                </li>
                <li className="flex items-center text-[#313131]">
                  <i className="fas fa-users mr-4"></i>
                  <a href="#" className="font-semibold">
                    Equipe
                  </a>
                </li>
                <li className="flex items-center text-[#313131]">
                  <i className="fas fa-shopping-cart mr-4"></i>
                  <a href="#" className="font-semibold">
                    Loja
                  </a>
                </li>
                <li className="flex items-center text-[#313131]">
                  <i className="fas fa-folder mr-4"></i>
                  <a href="#" className="font-semibold">
                    Coleção
                  </a>
                </li>
              </ul>
              <ul className="mt-12 space-y-4">
                <li className="flex items-center text-[#313131]">
                  <i className="fas fa-cog mr-4"></i>
                  <a href="#" className="font-semibold">
                    Settings
                  </a>
                </li>
                <li className="flex items-center text-[#313131]">
                  <i className="fas fa-sign-out-alt mr-4"></i>
                  <a href="#" className="font-semibold">
                    Logout
                  </a>
                </li>
              </ul>
            </nav>
          </aside>
          <main className="flex-1 bg-[#F3F4F6] p-8 flex flex-col">
            <div className="flex justify-end items-center mb-8">
              <span className="font-semibold mr-4">Ranking Regional</span>
              <div className="font-bold mr-12">BR #1</div>
              <span className="font-semibold mr-4">Ranking Global</span>
              <div className="font-bold mr-12">GB #1</div>
              <span className="font-semibold mr-4">Pontos</span>
              <div className="font-bold mr-12">12.400</div>
              <div className="flex items-center">
                <i className="fas fa-bell text-[#313131]"></i>
                <div className="ml-4 flex items-center bg-white p-2 rounded-full shadow-sm">
                  <img
                    src="./user.png"
                    alt="User avatar"
                    className="w-8 h-8 rounded-full"
                  />
                  <span className="ml-2 font-semibold">BrainHubadm</span>
                  <i className="fas fa-crown text-yellow-500 ml-2"></i>
                </div>
              </div>
            </div>
            <button className="bg-[#1DBF73] text-white font-semibold py-2 px-4 rounded-lg self-end mb-4">
              PARTIDA RÁPIDA
            </button>
            <div className="bg-white p-6 rounded-lg shadow-md mb-8">
              <div className="flex items-center mb-4">
                <img
                  src="./ninja.png"
                  alt="Ninja illustration"
                  className="w-[60px] h-[60px] mr-4"
                />
                <div>
                  <h3 className="font-semibold text-xl">
                    Upgrade to Premium Membership
                  </h3>
                  <p className="text-gray-600">
                    Desbloqueie desafios premium, assistência de resolução a cada 7
                    dias, emblema premium, entre outros benefícios.
                  </p>
                  <div className="flex mt-4">
                    <button className="bg-[#1DBF73] text-white font-semibold py-2 px-4 rounded-lg">
                      Ser Premium
                    </button>
                    <button className="bg-white text-[#1DBF73] font-semibold py-2 px-4 rounded-lg ml-4 border border-[#1DBF73]">
                      Learn more
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="flex items-center border-b border-gray-200 pb-4 mb-4">
                <button className="mr-6 text-lg font-semibold border-b-2 border-black">
                  CAMPEONATOS
                </button>
                <button className="mr-6 text-lg font-semibold text-gray-500">
                  SOCIAL
                </button>
                <button className="text-lg font-semibold text-gray-500">
                  NOVIDADES
                </button>
              </div>
              <div className="flex items-center mb-4">
                <img
                  src="./tournament.png"
                  alt="Tournament illustration"
                  className="w-16 h-16 mr-4"
                />
                <div>
                  <h4 className="font-semibold">BREAK BRAIN2.0</h4>
                  <p className="text-gray-600">400 Participantes</p>
                  <div className="flex items-center mt-2">
                    <button className="bg-[#1DBF73] text-white font-semibold py-2 px-4 rounded-lg mr-4">
                      Participar
                    </button>
                    <a href="#" className="text-[#1DBF73] font-semibold">
                      See Details
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </main>
        </div>
      );
    
}