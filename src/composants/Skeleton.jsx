import React from "react";

export default function Skeleton() {
  return (
    <li className="p-3 border-b flex items-center justify-between">
      {/* Skeleton de la checkbox */}
      <div className="flex items-center">
        <div className="skeleton h-4 w-4 rounded-md"></div>
        <div className="skeleton h-4 w-40 ml-2"></div>
      </div>

      {/* Skeleton des boutons */}
      <div className="flex items-center gap-2">
        {/* Bouton supprimer */}
        <div className="skeleton h-10 w-14 rounded-md"></div>

        {/* Bouton liker */}
        <div className="skeleton h-10 w-14 rounded-md"></div>
      </div>
    </li>
  );
}
