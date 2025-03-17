import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "About AILOG | AI-Powered Blog Generator",
  description: "Learn about AILOG, the AI-powered blog generator that creates simple, SEO-friendly content in seconds.",
  openGraph: {
    title: "About AILOG | AI-Powered Blog Generator",
    description: "Learn about AILOG, the AI-powered blog generator that creates simple, SEO-friendly content in seconds.",
  },
};

export default function AboutPage() {
  const currentYear = new Date().getFullYear();
  
  return (
    <div className="min-h-screen bg-black text-gray-100 transition-colors relative">
      {/* Background gradient effects */}
      <div className="fixed inset-0 bg-gradient-to-br from-blue-900/20 via-black to-purple-900/20 z-0"></div>
      <div className="fixed top-20 left-10 w-72 h-72 bg-blue-500/10 rounded-full blur-3xl"></div>
      <div className="fixed bottom-20 right-10 w-80 h-80 bg-purple-500/10 rounded-full blur-3xl"></div>
      
      <div className="relative z-10">
        <header className="border-b border-blue-900/30 backdrop-blur-sm sticky top-0 z-20">
          <div className="container mx-auto px-4 py-5 flex justify-between items-center">
            <Link href="/" className="text-3xl font-bold gradient-text">AILOG</Link>
            <div className="text-blue-400 text-base">AI-Powered Blog Generator</div>
          </div>
        </header>

        <main className="container mx-auto px-4 py-10 max-w-4xl">
          <section className="mb-10 animate-fadeIn">
            <h1 className="text-3xl font-bold mb-6 gradient-text">About AILOG</h1>
            
            <div className="glass-effect rounded-lg p-8 mb-10">
              <h2 className="text-2xl font-semibold mb-4 text-blue-300">Our Mission</h2>
              <p className="text-lg mb-6 text-blue-100">
                At AILOG, we believe that great content should be accessible to everyone. Our mission is to democratize content creation by providing an easy-to-use tool that generates high-quality, simple-to-understand blog posts in seconds.
              </p>
              <p className="text-lg mb-6 text-blue-100">
                We've built AILOG to help bloggers, students, small business owners, and content creators of all kinds produce professional content without the complexity of traditional writing.
              </p>
            </div>
            
            <div className="glass-effect rounded-lg p-8 mb-10">
              <h2 className="text-2xl font-semibold mb-4 text-blue-300">What Makes AILOG Special</h2>
              <ul className="list-disc list-inside space-y-4 text-lg text-blue-100">
                <li><strong className="text-blue-300">Simple English Focus:</strong> All content is written in clear, easy-to-understand language without complex vocabulary.</li>
                <li><strong className="text-blue-300">SEO-Friendly Structure:</strong> Our AI generates well-structured content that search engines love.</li>
                <li><strong className="text-blue-300">Powered by Advanced AI:</strong> We use Google's Gemini 2.0 Flash model to create high-quality content instantly.</li>
                <li><strong className="text-blue-300">Beautiful Design:</strong> Our futuristic interface makes content creation a pleasure.</li>
                <li><strong className="text-blue-300">Free to Use:</strong> AILOG is completely free with no hidden costs.</li>
              </ul>
            </div>
            
            <div className="glass-effect rounded-lg p-8">
              <h2 className="text-2xl font-semibold mb-4 text-blue-300">How to Use AILOG</h2>
              <ol className="list-decimal list-inside space-y-4 text-lg text-blue-100">
                <li>Enter your blog topic in the text area on the home page</li>
                <li>Click "Generate Blog" and wait a few seconds</li>
                <li>Review your professionally written blog post</li>
                <li>Use the copy button to copy the entire post or just the title</li>
                <li>Paste the content wherever you need it - your website, social media, or documents</li>
              </ol>
              <div className="mt-8 flex justify-center">
                <Link 
                  href="/"
                  className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-md hover:from-blue-700 hover:to-purple-700 focus:outline-none focus:ring-2 focus:ring-blue-500/50 transition-all duration-300 futuristic-button shadow-2xl shadow-blue-500/40 hover:shadow-blue-500/50 text-lg font-medium relative overflow-hidden"
                >
                  <span className="relative z-10">Try AILOG Now</span>
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-purple-500/20 animate-pulse-slow"></div>
                </Link>
              </div>
            </div>
          </section>
        </main>

        <footer className="border-t border-blue-900/30 mt-16 backdrop-blur-sm">
          <div className="container mx-auto px-4 py-8 text-center text-base text-blue-400/70">
            <p>© {currentYear} AILOG. All rights reserved.</p>
            <div className="mt-4 flex justify-center space-x-6">
              <Link href="/about" className="hover:text-blue-300 transition-colors">About</Link>
              <Link href="/privacy" className="hover:text-blue-300 transition-colors">Privacy Policy</Link>
              <Link href="/terms" className="hover:text-blue-300 transition-colors">Terms of Service</Link>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
} 