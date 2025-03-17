import { GoogleGenerativeAI } from "@google/generative-ai";

// Initialize the Gemini API with the API key from environment variables
const API_KEY = process.env.NEXT_PUBLIC_GEMINI_API_KEY || "";
// Silent initialization for production
const genAI = new GoogleGenerativeAI(API_KEY);

export interface BlogPost {
  title: string;
  content: string;
}

export async function generateBlogPost(prompt: string): Promise<BlogPost> {
  try {
    // Use the Gemini 2.0 Flash model
    const model = genAI.getGenerativeModel({ model: "gemini-2.0-flash" });

    const systemPrompt = `
      You are a professional blog writer. Create a well-structured blog post based on the user's input.
      Format your response in the following structure:
      
      TITLE: [Blog Title]
      
      [Full blog content with appropriate paragraphs, subheadings, bullet points, or numbered lists as needed]
      
      The blog should have a clear introduction, body, and conclusion, but don't include explicit section headings like "INTRODUCTION:", "BODY:", etc.
      Only the title should be labeled with "TITLE:" at the beginning.
      
      IMPORTANT: Write the entire blog in very simple English. Avoid using complex vocabulary, technical jargon, or difficult words. Use short, clear sentences that would be easily understood by a young reader or someone learning English. Aim for approximately a 4th-5th grade reading level.
      
      FORMATTING GUIDELINES:
      1. Use compact formatting with minimal empty lines
      2. Don't add extra line breaks between paragraphs
      3. Only use a single line break before subheadings
      4. Keep the content concise and to the point
      
      SEO GUIDELINES:
      1. Create an attention-grabbing title that includes the main keyword
      2. Use subheadings (## format) to break up content and include relevant keywords
      3. Keep paragraphs short (2-3 sentences) for better readability
      4. Include a list (bullet or numbered) where appropriate
      5. Use simple language that's easy to understand
      6. Naturally incorporate relevant keywords throughout the text
      7. End with a clear conclusion or call-to-action
      8. Aim for approximately 400-600 words total
    `;

    const result = await model.generateContent([
      systemPrompt,
      prompt
    ]);
    const response = result.response;
    const text = response.text();

    // Parse the response to extract the title and content
    // Using a regex that doesn't require the 's' flag (dotAll)
    const titleMatch = text.match(/TITLE:\s*(.*?)(?=\n\n|\n[^A-Z]|$)/) || 
                       text.split('\n').find(line => line.startsWith('TITLE:'))?.match(/TITLE:\s*(.*)/);
    const title = titleMatch ? (titleMatch[1] || '').trim() : "Generated Blog Post";
    
    // Get the content after the title
    let content = text;
    if (titleMatch && titleMatch[0]) {
      const titleEndIndex = text.indexOf(titleMatch[0]) + titleMatch[0].length;
      content = text.substring(titleEndIndex).trim();
    }

    // Process content to remove excessive empty lines
    content = content
      .split('\n')
      .reduce((result, line, index, array) => {
        // Always keep non-empty lines
        if (line.trim() !== '') {
          result.push(line);
          return result;
        }
        
        // For empty lines, only keep them if they're not consecutive
        // and if they're before a heading
        const nextLine = index < array.length - 1 ? array[index + 1] : '';
        if (
          result.length > 0 && 
          result[result.length - 1].trim() !== '' && 
          (nextLine.startsWith('##') || nextLine.startsWith('# '))
        ) {
          result.push(line);
        }
        
        return result;
      }, [] as string[])
      .join('\n');

    return {
      title,
      content
    };
  } catch (error) {
    console.error("Error generating blog post:", error);
    throw new Error("Failed to generate blog post. Please try again.");
  }
} 