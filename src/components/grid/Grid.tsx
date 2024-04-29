import React from "react";

function Grid() {
  return (
    <div className="grid grid-cols-12">
      <div className="bg-red-300 col-span-1">Container 1 - servidores</div>
      <div className="bg-green-300 col-span-3">Container 2 - canais</div>
      <div className="bg-yellow-300 col-span-6">Container 3 - feed</div>
      <div className="bg-orange-300 col-span-2">Container 4 - membros</div>
    </div>
  );
}

export default Grid;
