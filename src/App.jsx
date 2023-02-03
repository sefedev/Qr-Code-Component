import React from "react";

function App() {
  return (
    <>
      <div className="bg-gray h-screen flex justify-center items-center">
        <div className="rounded-lg shadow-md bg-white text-center p-3 w-64">
          <div className="">
          <img
            className="rounded-lg"
            src="/image-qr-code.png"
            alt="QR CODE"
          />
          </div>
          <div className="px-2">
          <p className="text-darkBlue font-bold text-lg leading-5 my-3">
            Improve your front-end skills by building projects
          </p>
          <p className="text-grayishBlue font-normal text-xs mb-4">
            Scan the QR Code to visit frontend mentor and take your coding
            skills to the next level
          </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
