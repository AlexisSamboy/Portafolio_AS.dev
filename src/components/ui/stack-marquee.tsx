import React from 'react';
import { getAssetPath } from '@/lib/utils';

const tools = [
  { name: 'Power BI', src: '/img/tools/power-bi.png' },
  { name: 'Excel', src: '/img/tools/microsoft-excel.png' },
  { name: 'Python', src: '/img/tools/python.png' },
  { name: 'Pandas', src: '/img/tools/pandas.png' },
  { name: 'NumPy', src: '/img/tools/numpy.png' },
  { name: 'Jupyter', src: '/img/tools/jupyter.png' },
  { name: 'SQL Server', src: '/img/tools/microsoft-sql-server.png' },
  { name: 'PostgreSQL', src: '/img/tools/postgre-sql.png' },
  { name: 'MySQL', src: '/img/tools/mysql.png' },
  { name: 'Tableau', src: '/img/tools/tableau.png' },
  { name: 'GitHub', src: '/img/tools/github.png' },
  { name: 'Google Colab', src: '/img/tools/google-colab.png' },
  { name: 'Power Point', src: '/img/tools/power-point.png' },
];

export const StackMarquee = () => {
  return (
    <div className="relative my-20 w-full overflow-hidden py-4">
      {/* Background cyber glowing panel */}
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[#00f0ff]/5 to-transparent border-y border-cyan-500/10 backdrop-blur-md" />
      
      {/* Linear gradients to fade out edges */}
      <div className="absolute inset-y-0 left-0 z-10 w-24 bg-gradient-to-r from-[#05060a] to-transparent pointer-events-none" />
      <div className="absolute inset-y-0 right-0 z-10 w-24 bg-gradient-to-l from-[#05060a] to-transparent pointer-events-none" />

      {/* Marquee sliding track */}
      <div className="flex w-max animate-marquee space-x-6 px-4">
        {/* Double array for infinite seamless looping */}
        {[...tools, ...tools].map((tool, idx) => (
          <div
            key={idx}
            className="flex items-center space-x-3 rounded-full border border-cyan-500/15 bg-slate-950/60 px-5 py-3 text-sm text-cyan-200/80 shadow-[0_0_15px_rgba(0,240,255,0.02)] transition-all duration-300 hover:border-cyan-400 hover:text-cyan-100 hover:shadow-[0_0_20px_rgba(0,240,255,0.15)] hover:-translate-y-0.5"
          >
            <img
              src={getAssetPath(tool.src)}
              alt={tool.name}
              className="h-7 w-7 object-contain drop-shadow-[0_4px_8px_rgba(0,0,0,0.5)]"
              onError={(e) => {
                const target = e.target as HTMLImageElement;
                target.src = `https://placehold.co/40x40/020617/00f0ff?text=${tool.name[0]}`;
              }}
            />
            <span className="font-mono tracking-wider">{tool.name}</span>
          </div>
        ))}
      </div>
    </div>
  );
};
