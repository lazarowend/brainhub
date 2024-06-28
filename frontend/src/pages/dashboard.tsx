import logoUrl from '../assets/logo1.png';


export default function Dashboard() {
    return (
        <div className="flex h-screen">
          <aside className="w-[20%] bg-white shadow-md p-4">
            <div className="flex items-center mb-4">
              <img src={logoUrl} alt="Brain Hub Logo" className="h-12" />
              <h1 className="text-xl font-bold ml-2">BRAIN HUB</h1>
            </div>
            <nav className="space-y-4">
              <a
                href="#"
                className="flex items-center p-2 bg-blue-500 text-white rounded-md"
              >
                <i className="fas fa-home mr-2"></i>
                <span>Início</span>
              </a>
              <a
                href="#"
                className="flex items-center p-2 hover:bg-gray-100 rounded-md"
              >
                <i className="fas fa-tasks mr-2"></i>
                <span className="font-medium">Desafios</span>
              </a>
              <a
                href="#"
                className="flex items-center p-2 hover:bg-gray-100 rounded-md"
              >
                <i className="fas fa-trophy mr-2"></i>
                <span className="font-medium">Competitivo</span>
              </a>
              <a
                href="#"
                className="flex items-center p-2 hover:bg-gray-100 rounded-md"
              >
                <i className="fas fa-award mr-2"></i>
                <span className="font-medium">Ranking</span>
              </a>
              <a
                href="#"
                className="flex items-center p-2 hover:bg-gray-100 rounded-md"
              >
                <i className="fas fa-users mr-2"></i>
                <span className="font-medium">Equipe</span>
              </a>
              <a
                href="#"
                className="flex items-center p-2 hover:bg-gray-100 rounded-md"
              >
                <i className="fas fa-shopping-cart mr-2"></i>
                <span className="font-medium">Loja</span>
              </a>
              <a
                href="#"
                className="flex items-center p-2 hover:bg-gray-100 rounded-md"
              >
                <i className="fas fa-archive mr-2"></i>
                <span className="font-medium">Coleção</span>
              </a>
              <a
                href="#"
                className="flex items-center p-2 hover:bg-gray-100 rounded-md"
              >
                <i className="fas fa-cog mr-2"></i>
                <span className="font-medium">Settings</span>
              </a>
              <a
                href="#"
                className="flex items-center p-2 hover:bg-gray-100 rounded-md"
              >
                <i className="fas fa-sign-out-alt mr-2"></i>
                <span className="font-medium">Logout</span>
              </a>
            </nav>
          </aside>
          <main className="flex-1 p-8 bg-[#f6f6f6]">
            <div className="flex justify-between items-center mb-8">
              <button className="bg-blue-500 text-white rounded-md px-4 py-2 font-semibold">
                PARTIDA RÁPIDA
              </button>
              <div className="flex space-x-8">
                <div>
                  <p className="text-gray-500">RANKING REGIONAL</p>
                  <p className="font-bold text-xl">BR #1</p>
                </div>
                <div>
                  <p className="text-gray-500">RANKING GLOBAL</p>
                  <p className="font-bold text-xl">GB #1</p>
                </div>
                <div>
                  <p className="text-gray-500">PONTOS</p>
                  <p className="font-bold text-xl">12.400</p>
                </div>
                <div className="flex items-center">
                  <img
                    src="/path/to/user-avatar.png"
                    alt="User Avatar"
                    className="h-10 w-10 rounded-full"
                  />
                  <p className="ml-2 font-bold">BrainHubadm</p>
                  <i className="fas fa-bell ml-4"></i>
                </div>
              </div>
            </div>
    
            <div className="bg-white p-6 rounded-md shadow-md mb-8">
              <div className="flex">
                <div className="flex-1">
                  <h2 className="text-2xl font-bold">
                    Upgrade to Premium Membership
                  </h2>
                  <p className="text-gray-500 mt-2">
                    Desbloqueie desafios premium, assistência de resolução a cada 7
                    dias, emblema premium, entre outros benefícios.
                  </p>
                  <div className="mt-4">
                    <button className="bg-green-500 text-white rounded-md px-4 py-2 font-semibold mr-2">
                      SER PREMIUM
                    </button>
                    <button className="bg-gray-200 text-gray-700 rounded-md px-4 py-2 font-semibold">
                      Learn more
                    </button>
                  </div>
                </div>
                <div className="flex-shrink-0 ml-4">
                  <img
                    src="/path/to/premium-icon.png"
                    alt="Premium Icon"
                    className="h-24 w-24"
                  />
                </div>
              </div>
            </div>
    
            <div className="bg-white p-6 rounded-md shadow-md">
              <div className="flex border-b border-gray-200 mb-4">
                <button className="px-4 py-2 font-medium text-blue-500 border-b-2 border-blue-500">
                  CAMPEONATOS
                </button>
                <button className="px-4 py-2 font-medium text-gray-500">
                  SOCIAL
                </button>
                <button className="px-4 py-2 font-medium text-gray-500">
                  NOVIDADES
                </button>
              </div>
    
              <div className="flex items-center">
                <img
                  src="/path/to/tournament-image.png"
                  alt="Tournament Image"
                  className="h-12 w-12 rounded-full mr-4"
                />
                <div className="flex-1">
                  <h3 className="font-bold">BREAK BRAIN2.0</h3>
                  <p className="text-gray-500">400 Participantes</p>
                </div>
                <button className="bg-green-100 text-[#34D399] rounded-md px-4 py-2 font-semibold mr-4">
                  PARTICIPAR
                </button>
                <a href="#" className="text-green-500 font-semibold">
                  &gt; See Details
                </a>
              </div>
            </div>
          </main>
        </div>
      );
    
}