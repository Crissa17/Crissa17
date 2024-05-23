import ChatBot from "./components/ChatBot";

function App() {
  return (
    <div className="relative">
      <div className="w-full flex justify-center items-center h-[100vh]">
        <h1 className="text-[120px] md:text-[100px] text-white font-bold p-[15px] sm:text-[80px] xs:text-[50px]">ChatBot App</h1>
      </div>
      <ChatBot />
    </div>
  );
}

export default App;
