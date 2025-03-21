import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Privacy Policy | AILOG - AI-Powered Blog Generator",
  description: "Learn about how AILOG handles your data and protects your privacy.",
  openGraph: {
    title: "Privacy Policy | AILOG - AI-Powered Blog Generator",
    description: "Learn about how AILOG handles your data and protects your privacy.",
  },
};

export default function PrivacyPage() {
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
            <h1 className="text-3xl font-bold mb-6 gradient-text">Privacy Policy</h1>
            
            <div className="glass-effect rounded-lg p-8 mb-10">
              <p className="text-lg mb-6 text-blue-100">
                Last Updated: {currentYear}-03-17
              </p>
              
              <h2 className="text-2xl font-semibold mb-4 text-blue-300">1. Introduction</h2>
              <p className="text-lg mb-6 text-blue-100">
                Welcome to AILOG ("we," "our," or "us"). We respect your privacy and are committed to protecting your personal data. This privacy policy explains how we collect, use, and safeguard your information when you use our website and services.
              </p>
              
              <h2 className="text-2xl font-semibold mb-4 text-blue-300">2. Information We Collect</h2>
              <p className="text-lg mb-6 text-blue-100">
                When you use AILOG, we may collect the following types of information:
              </p>
              <ul className="list-disc list-inside space-y-4 text-lg text-blue-100 mb-6">
                <li><strong className="text-blue-300">Usage Data:</strong> Information about how you interact with our website, including the blog topics you enter.</li>
                <li><strong className="text-blue-300">Device Information:</strong> Data about your device, browser type, and IP address.</li>
                <li><strong className="text-blue-300">Cookies:</strong> Small files stored on your device to enhance your browsing experience.</li>
              </ul>
              <p className="text-lg mb-6 text-blue-100">
                We do not collect or store the content of the blog posts generated by our AI service for longer than necessary to provide the service to you.
              </p>
              
              <h2 className="text-2xl font-semibold mb-4 text-blue-300">3. How We Use Your Information</h2>
              <p className="text-lg mb-6 text-blue-100">
                We use the information we collect to:
              </p>
              <ul className="list-disc list-inside space-y-4 text-lg text-blue-100 mb-6">
                <li>Provide and maintain our services</li>
                <li>Improve and optimize our website and AI capabilities</li>
                <li>Analyze usage patterns to enhance user experience</li>
                <li>Detect and prevent technical issues</li>
              </ul>
              
              <h2 className="text-2xl font-semibold mb-4 text-blue-300">4. Data Security</h2>
              <p className="text-lg mb-6 text-blue-100">
                We implement appropriate security measures to protect your personal information. However, no method of transmission over the Internet or electronic storage is 100% secure, and we cannot guarantee absolute security.
              </p>
              
              <h2 className="text-2xl font-semibold mb-4 text-blue-300">5. Third-Party Services</h2>
              <p className="text-lg mb-6 text-blue-100">
                AILOG uses Google's Gemini API to generate blog content. Your prompts are processed according to Google's privacy policies. We recommend reviewing Google's privacy policy for more information on how they handle data.
              </p>
              
              <h2 className="text-2xl font-semibold mb-4 text-blue-300">6. Your Rights</h2>
              <p className="text-lg mb-6 text-blue-100">
                Depending on your location, you may have certain rights regarding your personal data, including:
              </p>
              <ul className="list-disc list-inside space-y-4 text-lg text-blue-100 mb-6">
                <li>The right to access your personal data</li>
                <li>The right to correct inaccurate data</li>
                <li>The right to request deletion of your data</li>
                <li>The right to restrict or object to processing</li>
              </ul>
              
              <h2 className="text-2xl font-semibold mb-4 text-blue-300">7. Changes to This Privacy Policy</h2>
              <p className="text-lg mb-6 text-blue-100">
                We may update our Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page and updating the "Last Updated" date.
              </p>
              
              <h2 className="text-2xl font-semibold mb-4 text-blue-300">8. Contact Us</h2>
              <p className="text-lg mb-6 text-blue-100">
                If you have any questions about this Privacy Policy, please contact us at privacy@ailog.vercel.app.
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