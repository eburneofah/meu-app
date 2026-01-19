import React, { useState, useEffect } from 'react';
import { Brain, Users, Trophy, AlertCircle, MessageSquare } from 'lucide-react';

export default function VivaMeta() {
  const [activeTab, setActiveTab] = useState('my-goals');
  const [posts, setPosts] = useState([]);

  return (
    <div className="min-h-screen bg-slate-50 font-sans text-slate-900">
      {/* Navbar */}
      <nav className="bg-white border-b p-4 flex justify-between items-center sticky top-0 z-10">
        <h1 className="text-2xl font-black text-indigo-600 tracking-tighter">VIVA META</h1>
        <div className="flex gap-4">
          <button onClick={() => setActiveTab('my-goals')} className={`p-2 rounded-lg ${activeTab === 'my-goals' ? 'bg-indigo-100 text-indigo-600' : ''}`}><Brain /></button>
          <button onClick={() => setActiveTab('community')} className={`p-2 rounded-lg ${activeTab === 'community' ? 'bg-indigo-100 text-indigo-600' : ''}`}><Users /></button>
        </div>
      </nav>

      <main className="max-w-2xl mx-auto p-6">
        {activeTab === 'my-goals' ? (
          <div className="space-y-6">
            <section className="bg-white p-6 rounded-3xl shadow-sm border border-slate-200">
              <h2 className="text-xl font-bold mb-4">Minha Meta Ativa</h2>
              <div className="bg-indigo-600 text-white p-6 rounded-2xl mb-4">
                <p className="text-sm opacity-80 uppercase">Probabilidade de Sucesso</p>
                <div className="text-5xl font-black mt-1">82.4%</div>
              </div>
              <label className="text-sm font-bold text-slate-500 uppercase">Desenvolvimento da Meta</label>
              <textarea className="w-full mt-2 p-4 bg-slate-50 border rounded-xl h-32 outline-none focus:ring-2 ring-indigo-400" placeholder="Relate seus avanços e dificuldades aqui..."/>
            </section>
          </div>
        ) : (
          <div className="space-y-4">
            <h2 className="text-xl font-bold mb-4 flex items-center gap-2"><Users className="text-indigo-600"/> Feed da Comunidade</h2>
            {[1, 2].map((i) => (
              <div key={i} className="bg-white p-5 rounded-2xl shadow-sm border border-slate-200">
                <div className="flex justify-between mb-2">
                  <span className="font-bold text-sm">@usuario_viva</span>
                  <span className="bg-green-100 text-green-700 text-[10px] font-black px-2 py-1 rounded-full uppercase">Conquista</span>
                </div>
                <p className="text-slate-600 text-sm">Consegui manter a constância mesmo com a semana corrida no trabalho!</p>
                <div className="mt-4 flex gap-4 text-slate-400 text-xs font-bold uppercase">
                  <button className="flex items-center gap-1 hover:text-indigo-600"><Trophy size={14}/> Apoiar</button>
                  <button className="flex items-center gap-1 hover:text-indigo-600"><MessageSquare size={14}/> Experiência</button>
                </div>
              </div>
            ))}
          </div>
        )}
      </main>
    </div>
  );
  
  }
