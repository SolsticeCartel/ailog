import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Terms of Service | AILOG - AI-Powered Blog Generator",
  description: "Read the terms and conditions for using AILOG, the AI-powered blog generator.",
  openGraph: {
    title: "Terms of Service | AILOG - AI-Powered Blog Generator",
    description: "Read the terms and conditions for using AILOG, the AI-powered blog generator.",
  },
};

export default function TermsPage() {
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
            <h1 className="text-3xl font-bold mb-6 gradient-text">Terms of Service</h1>
            
            <div className="glass-effect rounded-lg p-8 mb-10">
              <p className="text-lg mb-6 text-blue-100">
                Last Updated: {currentYear}-3-17
              </p>
              
              <h2 className="text-2xl font-semibold mb-4 text-blue-300">1. Acceptance of Terms</h2>
              <p className="text-lg mb-6 text-blue-100">
                By accessing or using AILOG ("the Service"), you agree to be bound by these Terms of Service. If you do not agree to these terms, please do not use the Service.
              </p>
              
              <h2 className="text-2xl font-semibold mb-4 text-blue-300">2. Description of Service</h2>
              <p className="text-lg mb-6 text-blue-100">
                AILOG is an AI-powered blog generator that creates content based on user prompts. The Service uses Google's Gemini API to generate blog posts in simple, easy-to-understand English.
              </p>
              
              <h2 className="text-2xl font-semibold mb-4 text-blue-300">3. User Responsibilities</h2>
              <p className="text-lg mb-6 text-blue-100">
                When using AILOG, you agree to:
              </p>
              <ul className="list-disc list-inside space-y-4 text-lg text-blue-100 mb-6">
                <li>Provide prompts that do not violate any laws or regulations</li>
                <li>Not use the Service to generate content that is harmful, offensive, or discriminatory</li>
                <li>Not attempt to reverse engineer or bypass any security features of the Service</li>
                <li>Not use the Service in any way that could damage or overburden our systems</li>
              </ul>
              
              <h2 className="text-2xl font-semibold mb-4 text-blue-300">4. Content Ownership</h2>
              <p className="text-lg mb-6 text-blue-100">
                You retain ownership of the content generated through AILOG based on your prompts. However, we cannot guarantee that the generated content is entirely original or free from unintentional similarities to existing content.
              </p>
              <p className="text-lg mb-6 text-blue-100">
                You are responsible for ensuring that your use of the generated content complies with applicable copyright laws and regulations.
              </p>
              
              <h2 className="text-2xl font-semibold mb-4 text-blue-300">5. Limitation of Liability</h2>
              <p className="text-lg mb-6 text-blue-100">
                AILOG is provided "as is" without warranties of any kind, either express or implied. We do not guarantee that:
              </p>
              <ul className="list-disc list-inside space-y-4 text-lg text-blue-100 mb-6">
                <li>The Service will always be available or error-free</li>
                <li>The content generated will be accurate, reliable, or meet your specific requirements</li>
                <li>The content will be free from factual errors or biases</li>
              </ul>
              <p className="text-lg mb-6 text-blue-100">
                In no event shall AILOG be liable for any indirect, incidental, special, consequential, or punitive damages arising out of or related to your use of the Service.
              </p>
              
              <h2 className="text-2xl font-semibold mb-4 text-blue-300">6. Third-Party Services</h2>
              <p className="text-lg mb-6 text-blue-100">
                AILOG uses Google's Gemini API to generate content. Your use of AILOG is also subject to Google's terms of service and policies. We are not responsible for the practices of third-party services.
              </p>
              
              <h2 className="text-2xl font-semibold mb-4 text-blue-300">7. Modifications to Terms</h2>
              <p className="text-lg mb-6 text-blue-100">
                We reserve the right to modify these Terms of Service at any time. We will notify users of significant changes by posting the new Terms on this page and updating the "Last Updated" date.
              </p>
              <p className="text-lg mb-6 text-blue-100">
                Your continued use of AILOG after any changes to the Terms constitutes your acceptance of the new Terms.
              </p>
              
              <h2 className="text-2xl font-semibold mb-4 text-blue-300">8. Termination</h2>
              <p className="text-lg mb-6 text-blue-100">
                We reserve the right to terminate or suspend access to our Service immediately, without prior notice, for any reason whatsoever, including without limitation if you breach the Terms.
              </p>
              
              <h2 className="text-2xl font-semibold mb-4 text-blue-300">9. Contact Us</h2>
              <p className="text-lg mb-6 text-blue-100">
                If you have any questions about these Terms of Service, please contact us at terms@ailog.vercel.app.
              </p>
            </div>
            
            <div className="flex justify-center mt-8">
              <Link 
                href="/"
                className="px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-md hover:from-blue-700 hover:to-purple-700 focus:outline-none focus:ring-2 focus:ring-blue-500/50 transition-all duration-300 futuristic-button shadow-xl shadow-blue-500/30 text-lg font-medium"
              >
                Return to Home
              </Link>
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