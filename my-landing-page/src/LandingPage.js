import React, { useEffect } from 'react';
import './LandingPage.css'; // Adjust the path as needed

const LandingPage = () => {
  useEffect(() => {
    // Create and load the widget script
    const script = document.createElement('script');
    script.src = '/scripts/widget.js'; // Path to widget.js in the public directory
    script.async = true;
    document.body.appendChild(script);

    // Cleanup the script when component unmounts
    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <div className="flex flex-col min-h-screen text-gray-200 font-sansation background">
            <header className="py-4">
                <div className="container mx-auto px-6 flex justify-between items-center">
                    <a href="/" className="flex items-center">
                        <img src="/favicon.ico" alt="Icon" className="w-8 h-8 mr-2" />
                        <h1 className="text-2xl font-bold text-white">Jailbreak Trade Base</h1>
                    </a>
                    <nav>
                        <ul className="flex space-x-4">
                            <li><a href="https://status.jbtradebase.xyz" className="text-gray-300 hover:text-mint-400">Status</a></li>
                            <li><a href="/" className="text-gray-300 hover:text-mint-400">Home</a></li>
                            <li><a href="/#/custominvite" className="text-gray-300 hover:text-mint-400">Custom Invite</a></li>
                            <li><a href="/#/upload" className="text-gray-300 hover:text-mint-400">Upload Proof</a></li>
                        </ul>
                    </nav>
                </div>
            </header>
      <main className="flex-grow flex items-center justify-center text-white pt-5">
        <div className="text-right animate-fadeIn">
          <h2 className="text-4xl font-bold mb-4">Welcome to Our Website</h2>
          <div className="w-full max-w-3xl mx-auto">
            <discord-widget
              id="1216546896491843664"
              width="100%"
              height="500px"
              color="#549061"
              backgroundColor="rgba(77, 77, 77, 0.534)"
              textColor="#fff"
              statusColor="#858585"
            ></discord-widget>
          </div>
        </div>
      </main>
      <section id="features" className="py-20 ">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-12 mt-10 text-mint-500">Features</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-gray-700 p-6 rounded-lg shadow animate-fadeInRight">
              <h3 className="font-bold text-lg text-mint-600">Customized Bot</h3>
              <p className="text-gray-300">A customized bot with unique features that no other server has, with the user in mind!</p>
            </div>
            <div className="bg-gray-700 p-6 rounded-lg shadow animate-fadeInRight">
              <h3 className="font-bold text-lg text-mint-600">Scammer Reports</h3>
              <p className="text-gray-300">Our custom bot features scammer reports giving users the option to share scammers, via code or link to spread awareness.</p>
            </div>
            <div className="bg-gray-700 p-6 rounded-lg shadow animate-fadeInRight">
              <h3 className="font-bold text-lg text-mint-600">The Ability to Earn</h3>
              <p className="text-gray-300">Every member has a chance to get rewards, by giveaways, and other contributions you can make to the server. invite your friends, and earn robux!</p>
            </div>
          </div>
        </div>
      </section>
      <footer className="bg-black-500 text-gray-200 py-6">
        <div className="container mx-auto text-right">
          <p>&copy; 2024 Jailbreak Trade Base. All rights reserved.</p>
          <div className="flex justify-end space-x-4 mt-2">
            <a href="https://jbtradebase.xyz/#/invite" className="material-icons text-mint-500">Discord</a>
            <a href="https://www.roblox.com/groups/34670629/JB-Trade-Base" className="material-icons text-mint-500">Roblox Group</a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default LandingPage;
