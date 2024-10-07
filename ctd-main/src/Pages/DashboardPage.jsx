const DashboardPage = () => {
  return (

      <div className="bg-black min-h-screen w-full text-white flex flex-col">
      
  
        
        <div className="flex-grow flex flex-col items-center py-8 px-8">
          <div className="flex-grow w-full flex justify-center items-center">
            <div className="bg-gray-900 p-12 rounded-lg w-full max-w-7xl flex space-x-8">
              
              <div className="w-1/2 flex justify-center items-center">
                <img
                  src="https://example.com/profile.jpg" // Replace with actual image URL
                  alt="Profile"
                  className="w-60 h-60 rounded-lg object-cover"
                />
              </div>
  
              
              <div className="w-1/2 space-y-4">
                <div className="flex justify-between items-center">
                  <div>
                    <h2 className="text-2xl font-bold">SyKunno</h2>
                    <p className="text-gray-400">sykunnoinit@gmail.com</p>
                  </div>
                  <button className="bg-gray-700 px-4 py-2 rounded-lg hover:bg-gray-600">
                    Edit
                  </button>
                </div>
  
                
                <div className="space-y-2">
                  <div className="flex justify-between bg-red-500 px-4 py-2 rounded-lg">
                    <p className="text-lg font-semibold">NCC</p>
                    <span>Registered</span>
                  </div>
                  <div className="flex justify-between bg-blue-500 px-4 py-2 rounded-lg">
                    <p className="text-lg font-semibold">Decode Rush</p>
                    <span>Registered</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  
}
 
export default DashboardPage;