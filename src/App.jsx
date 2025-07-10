import React from "react";
import ContactCard from "./ContactCard";
function App() {
  return (
    <div>
      <h2>My Contact Card</h2>
      <ContactCard
        no="1"
        name="John Doe"
        phone="+00000000000"
        email="ABC@gmail.com"
      />
      <ContactCard
        no="2"
        name="John Snow"
        phone="+11111111111"
        email="DEF@gmail.com"
      />
      <ContactCard
        no="3"
        name="John Wick"
        phone="+22222222222"
        email="GHI@gmail.com"
      />
    </div>
  );
}
export default App;
