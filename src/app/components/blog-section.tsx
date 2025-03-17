"use client";

import { CopyButton } from "./copy-button";

interface BlogSectionProps {
  title: string;
  content: string;
}

export function BlogSection({ title, content }: BlogSectionProps) {
  if (!content) return null;

  return (
    <div className="mb-6">
      <div className="flex items-center justify-between mb-2">
        <h3 className="text-lg font-semibold">{title}</h3>
        <CopyButton text={content} />
      </div>
      <div className="prose prose-gray dark:prose-invert max-w-none">
        {content.split("\n").map((paragraph, index) => {
          // Check if the paragraph is a heading (starts with # or ##)
          if (paragraph.startsWith("# ")) {
            return (
              <h2 key={index} className="text-xl font-bold mt-4 mb-2">
                {paragraph.replace("# ", "")}
              </h2>
            );
          } else if (paragraph.startsWith("## ")) {
            return (
              <h3 key={index} className="text-lg font-semibold mt-3 mb-2">
                {paragraph.replace("## ", "")}
              </h3>
            );
          } else if (paragraph.startsWith("- ")) {
            // Handle bullet points
            return (
              <ul key={index} className="list-disc list-inside my-2">
                <li>{paragraph.replace("- ", "")}</li>
              </ul>
            );
          } else if (paragraph.match(/^\d+\.\s/)) {
            // Handle numbered lists
            return (
              <ol key={index} className="list-decimal list-inside my-2">
                <li>{paragraph.replace(/^\d+\.\s/, "")}</li>
              </ol>
            );
          } else if (paragraph.trim() === "") {
            return <br key={index} />;
          } else {
            return <p key={index} className="my-2">{paragraph}</p>;
          }
        })}
      </div>
    </div>
  );
} 