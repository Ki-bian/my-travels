import React from "react";
import Travel from "./Travel"
// src/Quotes.js
const travels = [
  {
    destination:
      "Facts are meaningless. You could use facts to prove anything that's even remotely true.",
    country: "Homer Simpson",
    photo:
      "https://cdn.glitch.com/3c3ffadc-3406-4440-bb95-d40ec8fcde72%2FHomerSimpson.png?1497567511939"
  },
  {
   destination:
      "Facts are meaningless. You could use facts to prove anything that's even remotely true.",
    country: "Homer Simpson",
    photo:
      "https://cdn.glitch.com/3c3ffadc-3406-4440-bb95-d40ec8fcde72%2FHomerSimpson.png?1497567511939"
  },
  {
   destination:
      "Facts are meaningless. You could use facts to prove anything that's even remotely true.",
    country: "Homer Simpson",
    photo:
      "https://cdn.glitch.com/3c3ffadc-3406-4440-bb95-d40ec8fcde72%2FHomerSimpson.png?1497567511939"
  },
  {
   destination:
      "Facts are meaningless. You could use facts to prove anything that's even remotely true.",
    country: "Homer Simpson",
    photo:
      "https://cdn.glitch.com/3c3ffadc-3406-4440-bb95-d40ec8fcde72%2FHomerSimpson.png?1497567511939"
  },
  {
   destination:
      "Facts are meaningless. You could use facts to prove anything that's even remotely true.",
    country: "Homer Simpson",
    photo:
      "https://cdn.glitch.com/3c3ffadc-3406-4440-bb95-d40ec8fcde72%2FHomerSimpson.png?1497567511939"
  },
];

const Travels = () => (
  <div>
    {travels.map(travel => (
      <Travel data={travel}/>
    ))}
  </div>
);

export default Travels;