import { memo } from "react";

const Loader = memo(() => {
  return (
    <div className="fixed inset-0 z-[80] flex items-center justify-center px-6 py-12 bg-gradient-to-br from-vanilla/90 via-arylide-yellow/40 to-vanilla/90 backdrop-blur-md">
      <div className="flex flex-col items-center gap-6">
        <div className="kisan-loader">
          <div className="kisan-loader__ring kisan-loader__ring--outer"></div>
          <div className="kisan-loader__ring kisan-loader__ring--mid"></div>
          <div className="kisan-loader__ring kisan-loader__ring--inner"></div>
          <div className="kisan-loader__core"></div>
          <div className="kisan-loader__node kisan-loader__node--a"></div>
          <div className="kisan-loader__node kisan-loader__node--b"></div>
          <div className="kisan-loader__node kisan-loader__node--c"></div>
          <div className="kisan-loader__node kisan-loader__node--d"></div>
        </div>
        <div className="text-center">
          <p className="text-xs uppercase tracking-[0.3em] text-green-700/70">KisanAI</p>
          <p className="text-sm font-semibold text-gray-900">Loading your data</p>
          <p className="text-xs text-gray-500">Calibrating fields and insights</p>
        </div>
      </div>
    </div>
  );
});

export default Loader;
