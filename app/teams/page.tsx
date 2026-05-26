"use client";
import { useState } from "react";import Link from "next/link";
export default function Teams(){const [id]=useState('demo-team'); return <main className="space-y-3"><h1 className="text-2xl font-bold">Create a Team</h1><p>Create a shared team space and invite members via link code.</p><div className="bg-white p-4 rounded shadow">Invite link: <code>/teams/{id}</code></div><Link className="px-3 py-2 bg-indigo-600 text-white rounded inline-block" href={`/teams/${id}`}>Open Team Dashboard</Link></main>}
