import { Plus } from "lucide-react";
import React, { useState } from "react";

export default function AjouterTache({ ajouterNewTache }) {
  const [nom, setNom] = useState("");
  console.log(nom);

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        ajouterNewTache(nom);
        setNom("");
      }}
      className="flex justify-between space-x-2"
    >
      <input
        type="text"
        value={nom}
        onChange={(e) => setNom(e.target.value)}
        className="w-full p-2 border rounded-md border-gray-400 outline-none focus:border-1 focus:border-blue-500"
      />
      <button className="bg-blue-500 text-white px-4 py-2 rounded-md flex gap-2">
        <Plus />
        Ajouter
      </button>
    </form>
  );
}
