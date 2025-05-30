import React from "react";
import Home from "./pages/Home";
import OrderForm from "./components/OrderForm";

function App() {
  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <Home />
      {/* <OrderForm
        product={{ id: 1, name: "Test Product", price: 100 }}
        onClose={() => console.log("close")}
      /> */}
    </div>
  );
}

export default App;
