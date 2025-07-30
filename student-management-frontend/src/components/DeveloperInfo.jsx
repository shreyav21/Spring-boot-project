import React from "react";

const DeveloperInfo = () => {
  return (
    <div className="bg-gray-100 p-6 rounded-xl shadow-md mt-10 mx-auto max-w-3xl text-center">
      <h2 className="text-xl font-semibold mb-4 text-blue-700">🔍 Developer Info</h2>
      <p className="text-gray-700 leading-relaxed">
        All data shown here is fetched in real-time from a live backend built with
        <strong> Spring Boot</strong> and connected to 
        <strong> in-memory H2 database</strong>. <br />
        You can verify this by adding, editing, or deleting students — the UI updates
        directly from the backend responses.
      </p>
      
    </div>
  );
};

export default DeveloperInfo;
