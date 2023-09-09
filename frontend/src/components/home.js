import React from 'react';
import "../components/home.css"

const Home = () => {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Header Section */}
      <header className= " bg-blue-400 p-4 text-white ">
        <div className="container w-[50%] text-center  ">
          <h1 className="text-4xl font-bold">Welcome to Akatsuki</h1>
          <p className="mt-2 text-lg">Your trusted platform for hiring professionals.</p>
        </div>
      </header>

      <div className='headerCustom '>
          <div className='main1 my-auto'>
            <h1>Connecting Talent with Opportunity!</h1>
          </div>
          <div className='main2'>
            <img src="https://img.freepik.com/premium-photo/photo-back-school-stationery-education-element-cartoon-white-background-3d-render-illustration_175994-5169.jpg?size=626&ext=jpg&ga=GA1.2.1807596171.1678537696&semt=ais"/>
            <img src="https://img.freepik.com/premium-vector/employees-looking-job-employees-using-magnifying-glass-searching-job-search-bar_70921-1842.jpg?size=626&ext=jpg&ga=GA1.2.1807596171.1678537696&semt=ais"/>
            <img src="https://img.freepik.com/free-vector/people-waiting-job-interview_23-2148625460.jpg?size=626&ext=jpg&ga=GA1.1.1807596171.1678537696&semt=ais"/>
            <img src="https://img.freepik.com/free-vector/organic-flat-design-join-us-concept_23-2148944480.jpg?w=996&t=st=1694273503~exp=1694274103~hmac=ec9850a8789757ad1fbe0d7d4665d4a0866c3f35ea5b779fcbcc788ff03b95f8"/>
            <img src="https://img.freepik.com/free-vector/business-people-isometric-human-characters-recruitment-consultant-job-candidate-with-editable-text-vector-illustration_1284-30147.jpg?size=626&ext=jpg&ga=GA1.1.1807596171.1678537696&semt=ais"/>
            <img src="https://img.freepik.com/free-vector/multitask-business-woman-flat-design_52683-54978.jpg?w=996&t=st=1694276251~exp=1694276851~hmac=24f3432ddad599c6fab54c55a98b91a115eb118162bf2b7ef9ee8a00903515fe"/>

          </div>
      </div>

      {/* Main Content Section */}
      {/* <main className="container mx-auto py-8 flex-grow">
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
      </main> */}

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
