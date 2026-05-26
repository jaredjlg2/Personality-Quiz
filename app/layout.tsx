import "./globals.css";
import Link from "next/link";
export default function RootLayout({children}:{children:React.ReactNode}){
 return <html><body><div className="max-w-6xl mx-auto p-4"><nav className="no-print flex gap-4 mb-6 text-sm"><Link href="/">Home</Link><Link href="/questionnaire">Questionnaire</Link><Link href="/teams">Teams</Link><Link href="/sample-report">Demo</Link><Link href="/admin">Admin</Link></nav>{children}</div></body></html>
}
