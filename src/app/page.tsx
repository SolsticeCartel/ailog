"use client";

import { useState, useEffect } from "react";
import { ThemeToggle } from "./components/theme-toggle";
import { LoadingSpinner } from "./components/loading-spinner";
import { CopyButton } from "./components/copy-button";
import { BlogContent } from "./components/blog-content";
import { generateBlogPost, BlogPost } from "./utils/gemini";
import Head from "next/head";
import Script from "next/script";
import Link from "next/link";

export default function Home() {
  const [prompt, setPrompt] = useState("");
  const [blogPost, setBlogPost] = useState<BlogPost | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const currentYear = new Date().getFullYear();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!prompt.trim()) return;

    setIsLoading(true);
    setError(null);
    setBlogPost(null);

    try {
      const generatedBlog = await generateBlogPost(prompt);
      setBlogPost(generatedBlog);
    } catch (err) {
      setError(err instanceof Error ? err.message : "An unexpected error occurred");
    } finally {
      setIsLoading(false);
    }
  };

  const handleReset = () => {
    setPrompt("");
    setBlogPost(null);
    setError(null);
  };

  // Structured data for SEO
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "WebApplication",
    "name": "AILOG - AI-Powered Blog Generator",
    "description": "Create professional, well-structured blog posts in simple, easy-to-understand English with advanced AI.",
    "applicationCategory": "BusinessApplication",
    "operatingSystem": "Web",
    "offers": {
      "@type": "Offer",
      "price": "0",
      "priceCurrency": "USD"
    },
    "author": {
      "@type": "Organization",
      "name": "AILOG Team"
    }
  };

  return (
    <>
      <Script
        id="structured-data"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      <div className="min-h-screen bg-black text-gray-100 transition-colors relative">
        {/* Background gradient effects */}
        <div className="fixed inset-0 bg-gradient-to-br from-blue-900/20 via-black to-purple-900/20 z-0"></div>
        <div className="fixed top-20 left-10 w-72 h-72 bg-blue-500/10 rounded-full blur-3xl"></div>
        <div className="fixed bottom-20 right-10 w-80 h-80 bg-purple-500/10 rounded-full blur-3xl"></div>
        
        <div className="relative z-10">
          <header className="border-b border-blue-900/30 backdrop-blur-sm sticky top-0 z-20">
            <div className="container mx-auto px-4 py-5 flex justify-between items-center">
              <h1 className="text-3xl font-bold gradient-text">AILOG</h1>
              <div className="text-blue-400 text-base">AI-Powered Blog Generator</div>
            </div>
          </header>

          <main className="container mx-auto px-4 py-10 max-w-4xl">
            <section className="mb-10 animate-fadeIn">
              <h2 className="text-2xl font-semibold mb-5 text-blue-400">Generate Your Blog Post</h2>
              <p className="text-base text-blue-300 mb-5 opacity-80">
                Create professional, well-structured blog posts in seconds with advanced AI
              </p>
              
              {/* SEO-friendly content section */}
              <div className="mb-8 glass-effect rounded-lg p-6">
                <h3 className="text-xl font-semibold mb-3 text-blue-300">Why Choose AILOG for Your Blog Content?</h3>
                <ul className="list-disc list-inside space-y-2 text-blue-200">
                  <li>Generate <strong>SEO-friendly</strong> blog posts in seconds</li>
                  <li>Content written in <strong>simple, easy-to-understand English</strong></li>
                  <li>Perfect for bloggers, students, and content creators</li>
                  <li>Professionally structured with proper formatting</li>
                </ul>
              </div>
              
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="glass-effect rounded-lg p-4">
                  <div className="flex flex-col space-y-3">
                    <label htmlFor="prompt" className="text-lg font-medium text-blue-300">
                      What would you like to write about?
                    </label>
                    <textarea
                      id="prompt"
                      rows={5}
                      className="w-full p-4 rounded-md bg-black/50 border border-blue-500/30 focus:border-blue-400/50 focus:ring-2 focus:ring-blue-500/20 focus:outline-none transition-all duration-300 text-gray-100 placeholder-blue-300/50 text-lg"
                      placeholder="e.g., Write a simple blog about why exercise is good for kids."
                      value={prompt}
                      onChange={(e) => setPrompt(e.target.value)}
                      required
                      aria-label="Blog topic input"
                    />
                  </div>
                </div>
                <div className="flex gap-4">
                  <button
                    type="submit"
                    disabled={isLoading}
                    className="px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-md hover:from-blue-700 hover:to-purple-700 focus:outline-none focus:ring-2 focus:ring-blue-500/50 disabled:opacity-50 transition-all duration-300 futuristic-button shadow-lg shadow-blue-500/20 text-lg font-medium"
                    aria-label="Generate blog post"
                  >
                    Generate Blog
                  </button>
                  {blogPost && (
                    <button
                      type="button"
                      onClick={handleReset}
                      className="px-8 py-4 border border-blue-500/30 rounded-md hover:bg-blue-500/10 focus:outline-none focus:ring-2 focus:ring-blue-500/30 transition-all duration-300 backdrop-blur-sm text-lg font-medium"
                      aria-label="Reset form"
                    >
                      Reset
                    </button>
                  )}
                </div>
              </form>
            </section>

            {isLoading && <LoadingSpinner />}

            {error && (
              <div className="p-5 mb-8 bg-red-900/20 border border-red-800/50 rounded-md text-red-300 animate-fadeIn text-lg" role="alert">
                {error}
              </div>
            )}

            {blogPost && (
              <section className="border border-blue-900/30 rounded-lg p-6 bg-black/30 backdrop-blur-md shadow-xl shadow-blue-500/10 relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 via-transparent to-purple-500/10 z-0"></div>
                <div className="relative z-10">
                  <h2 className="text-3xl font-bold mb-4 flex items-center justify-between gradient-text">
                    {blogPost.title}
                    <span className="ml-2 bg-black/30 backdrop-blur-sm rounded-md border border-blue-500/20 hover:border-blue-500/40 transition-all duration-300 flex items-center justify-center h-7">
                      <CopyButton text={blogPost.title} />
                    </span>
                  </h2>

                  <BlogContent content={blogPost.content} />
                </div>
              </section>
            )}
            
            {/* FAQ Section for SEO */}
            <section className="mt-16 mb-10 glass-effect rounded-lg p-6">
              <h2 className="text-2xl font-semibold mb-6 text-blue-400">FAQ's</h2>
              
              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-medium text-blue-300 mb-2">How does AILOG generate blog content?</h3>
                  <p className="text-blue-200">AILOG uses Google's Gemini 2.0 Flash AI model to create well-structured blog posts based on your input. Just type what you want to write about, and our AI will generate a complete blog post in simple English.</p>
                </div>
                
                <div>
                  <h3 className="text-xl font-medium text-blue-300 mb-2">Is the content SEO-friendly?</h3>
                  <p className="text-blue-200">Yes! All content is created with SEO in mind. The blogs have proper structure, relevant content, and are written in simple English that both readers and search engines love.</p>
                </div>
                
                <div>
                  <h3 className="text-xl font-medium text-blue-300 mb-2">Can I use the generated content for my website?</h3>
                  <p className="text-blue-200">Absolutely! You own all the content generated by AILOG. You can use it for your personal blog, business website, social media, or any other purpose.</p>
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
    </>
  );
}
