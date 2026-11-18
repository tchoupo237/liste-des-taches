import React, { useState } from "react";
import { ThumbsDown, ThumbsUp, Trash } from "lucide-react";

export default function Tache({ data, liker, supprimer }) {
  const [Barrel, setBarer] = useState(false);
  const cocher = () => {
    if (!Barrel) {
      setBarer(true);
    } else {
      setBarer(false);
    }
  };
  return (
    <li className="p-2  hover:border-b-blue-500 hover:bg-gray-100 p-3 border-b flex items-center justify-between">
      <div className="flex items-center">
        <input
          type="checkbox"
          onChange={() => cocher()}
          className={`mr-4 h-4 w-4 rounded-md`}
        />
        <span className={`${Barrel ? "line-through" : ""}`}>{data.nom}</span>
      </div>
      <div className="float-right space-x-2">
        <button className="btn btn-outline btn-error font-bold hover:text-white">
          <Trash onClick={() => supprimer(data)} />
        </button>
        <button className="btn btn-outline border-blue-500 text-blue-500 font-bold hover:text-white hover:bg-blue-500">
          {data.liker ? (
            <ThumbsDown onClick={() => liker(data)} />
          ) : (
            <ThumbsUp onClick={() => liker(data)} />
          )}
        </button>
      </div>
    </li>
  );
}
