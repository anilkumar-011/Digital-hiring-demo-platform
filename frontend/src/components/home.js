// src/components/Home.js

import React from 'react';

const Home = () => {
  return (
    <div className="bg-gray-100 min-h-screen">
      {/* Header Section */}
      <header className="bg-blue-500 p-4 text-white">
        <div className="container mx-auto">
          <h1 className="text-4xl font-bold">Welcome to Akatsuki</h1>
          <p className="mt-2 text-lg">Your trusted platform for hiring professionals.</p>
        </div>
      </header>

      {/* Main Content Section */}
      <main className="container mx-auto py-8">
        <section className="text-center">
          <h2 className="text-2xl font-bold">Find the Perfect Professional</h2>
          <p className="mt-4 text-lg">
            Browse and hire skilled individuals from various fields and industries.
          </p>
        </section>

        <section className="mt-12 text-center">
          <h2 className="text-2xl font-bold">Join Our Platform</h2>
          <p className="mt-4 text-lg">
            Sign up and create an account to get started with hiring or offering your professional services.
          </p>
          <button className="mt-4 bg-blue-500 text-white py-2 px-6 rounded-full hover:bg-blue-600">
            Get Started
          </button>
        </section>
      </main>

      {/* Footer Section */}
      <footer className="bg-gray-800 text-white py-4">
        <div className="container mx-auto text-center">
          <p>&copy; 2023 Akatsuki. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default Home;
