"use client";
export default function Admin(){return <main><h1 className="text-2xl font-bold">Admin Utilities</h1><button className="px-3 py-2 bg-red-600 text-white rounded" onClick={()=>{localStorage.clear();alert('Local data reset')}}>Reset local data</button></main>}
