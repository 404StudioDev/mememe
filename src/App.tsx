function App() {
  const [currentPage, setCurrentPage] = useState('home');

  const renderPage = () => {
    switch (currentPage) {
      case 'templates':
        return <TemplatesPage onBackToHome={() => setCurrentPage('home')} />;
      case 'about':
        return <AboutPage onBackToHome={() => setCurrentPage('home')} />;
      default:
        return (
          <>
            {/* Hero Section */}
            <section className="py-16 px-4">
              <div className="container mx-auto text-center max-w-4xl">
                <div className="mb-8">
                  <h2 className="text-5xl md:text-6xl font-extrabold text-gray-900 mb-6 leading-tight tracking-tight">
                    Create Viral Memes in
                    <span className="bg-gradient-to-r from-purple-600 via-pink-600 to-indigo-600 bg-clip-text text-transparent"> Seconds</span>
                  </h2>
                  <p className="text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto leading-relaxed font-light">
                    Upload your images, choose from trending templates, or let AI generate the perfect meme for you. 
                    Share your creativity with the world!
                  </p>
                </div>
                
                <div className="flex flex-wrap justify-center gap-4 mb-8">
                  <div className="flex items-center gap-3 px-6 py-3 bg-white/80 backdrop-blur-md rounded-full border border-gray-200/60 shadow-lg hover:shadow-xl transition-all duration-300">
                    <div className="w-3 h-3 bg-gradient-to-r from-green-400 to-emerald-500 rounded-full animate-pulse shadow-sm"></div>
                    <span className="text-sm font-semibold text-gray-700">AI-Powered Generation</span>
                  </div>
                  <div className="flex items-center gap-3 px-6 py-3 bg-white/80 backdrop-blur-md rounded-full border border-gray-200/60 shadow-lg hover:shadow-xl transition-all duration-300">
                    <div className="w-3 h-3 bg-gradient-to-r from-blue-400 to-cyan-500 rounded-full animate-pulse shadow-sm"></div>
                    <span className="text-sm font-semibold text-gray-700">Instant Download</span>
                  </div>
                  <div className="flex items-center gap-3 px-6 py-3 bg-white/80 backdrop-blur-md rounded-full border border-gray-200/60 shadow-lg hover:shadow-xl transition-all duration-300">
                    <div className="w-3 h-3 bg-gradient-to-r from-purple-400 to-pink-500 rounded-full animate-pulse shadow-sm"></div>
                    <span className="text-sm font-semibold text-gray-700">Professional Quality</span>
                  </div>
                </div>
              </div>
            </section>

            {/* Main Meme Generator */}
            <main className="pb-16 px-4">
              <div className="container mx-auto">
                <MemeGenerator />
              </div>
            </main>
          </>
        );
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50/50 to-indigo-100/80">
      {/* Header */}
      <header className="bg-white/90 backdrop-blur-xl border-b border-gray-200/60 sticky top-0 z-50 shadow-sm">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              {/* Logo Space - Replace this div with your logo */}
              <div className="w-12 h-12 bg-gradient-to-br from-purple-100 to-pink-100 rounded-xl flex items-center justify-center border-2 border-dashed border-purple-300/50 shadow-sm">
                <span className="text-xs text-purple-600 font-bold">LOGO</span>
              </div>
              <div>
                <button 
                  onClick={() => setCurrentPage('home')}
                  className="text-left"
                >
                  <h1 className="text-3xl font-black bg-gradient-to-r from-purple-600 via-pink-600 to-indigo-600 bg-clip-text text-transparent tracking-tight">
                    MemeForge
                  </h1>
                  <p className="text-sm text-gray-600 font-medium tracking-wide">AI-Powered Meme Generator</p>
                </button>
              </div>
            </div>
            
            <div className="hidden md:flex items-center gap-6">
              <div className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-green-100 to-emerald-100 text-green-700 rounded-full text-sm font-semibold shadow-md border border-green-200/50">
                <TrendingUp className="h-4 w-4" />
                <span>Trending Now</span>
              </div>
              <nav className="flex items-center gap-8 text-sm font-semibold">
                <button 
                  onClick={() => setCurrentPage('home')}
                  className={`transition-all duration-200 hover:scale-105 ${currentPage === 'home' ? 'text-purple-600 font-bold' : 'text-gray-600 hover:text-purple-600'}`}
                >
                  Home
                </button>
                <button 
                  onClick={() => setCurrentPage('templates')}
                  className={`transition-all duration-200 hover:scale-105 ${currentPage === 'templates' ? 'text-purple-600 font-bold' : 'text-gray-600 hover:text-purple-600'}`}
                >
                  Templates
                </button>
                <button 
                  onClick={() => setCurrentPage('about')}
                  className={`transition-all duration-200 hover:scale-105 ${currentPage === 'about' ? 'text-purple-600 font-bold' : 'text-gray-600 hover:text-purple-600'}`}
                >
                  About
                </button>
              </nav>
            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden">
              <button className="p-3 text-gray-600 hover:text-purple-600 hover:bg-purple-50 rounded-xl transition-all duration-200">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </header>

      {renderPage()}
    </div>
  );
}