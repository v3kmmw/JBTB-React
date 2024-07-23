import React from 'react';
import './customInvite.css'; // Ensure to include your custom font and any additional custom styles

const CustomInvitePage = () => {
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
              <li><a href="/" className="text-gray-300 hover:text-mint-400">Home</a></li>
              <li><a href="/custominvite" className="text-gray-300 hover:text-mint-400">Custom Invite</a></li>
              <li><a href="/upload" className="text-gray-300 hover:text-mint-400">Upload Proof</a></li>
            </ul>
          </nav>
        </div>
      </header>
      <main className="flex-grow flex items-center justify-center">
        <div className="max-w-2xl p-6 bg-gray-700 bg-opacity-60 rounded-xl border-2 border-black shadow-lg text-center animate-fadeIn">
          <h1 className="text-3xl font-bold mb-6">How to Create a Custom Invite</h1>
          <p className="text-lg mb-4">Follow these steps to create a custom invite for your Discord server:</p>
          <p className="text-lg leading-relaxed mb-6">
            Click on a <strong>CHANNEL</strong> (not the server icon) in the server list.<br />
            Click <strong>Create Invite</strong>.<br />
            Click on <strong>Edit Invite Link</strong>.<br />
            Under <strong>Expire After</strong>, choose your desired time frame.<br />
            Click <strong>Generate a New Link</strong>.
          </p>
          
          <div className="w-full flex justify-center mb-6">
            <img src="https://jbtradebase.xyz/invite.gif" alt="Creating a custom invite GIF"
                 className="max-w-full rounded-lg border-2 border-black" />
          </div>
          <a href="/" className="inline-block px-6 py-3 text-lg bg-green-700 border-2 border-black rounded-lg transition duration-300 hover:bg-green-800 hover:border-4">
            Back to Home
          </a>
        </div>
      </main>
    </div>
  );
};

export default CustomInvitePage;
