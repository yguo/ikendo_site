import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { remark } from "remark";
import html from "remark-html";

const docsDirectory = path.join(process.cwd(), "docs");

export interface PostMeta {
  slug: string;
  title: string;
  date: string;
  description: string;
  author: string;
  tags: string[];
  readingTime: string;
}

export interface Post extends PostMeta {
  contentHtml: string;
}

function estimateReadingTime(content: string): string {
  const wordsPerMinute = 200;
  const words = content.split(/\s+/).length;
  const minutes = Math.ceil(words / wordsPerMinute);
  return `${minutes} min read`;
}

export function getAllPosts(): PostMeta[] {
  if (!fs.existsSync(docsDirectory)) {
    return [];
  }

  const fileNames = fs.readdirSync(docsDirectory).filter((f) => f.endsWith(".md"));

  const posts = fileNames.map((fileName) => {
    const slug = fileName.replace(/\.md$/, "");
    const fullPath = path.join(docsDirectory, fileName);
    const fileContents = fs.readFileSync(fullPath, "utf8");
    const { data, content } = matter(fileContents);

    return {
      slug,
      title: (data.title as string) || slug,
      date: (data.date as string) || "",
      description: (data.description as string) || "",
      author: (data.author as string) || "iKendo Team",
      tags: (data.tags as string[]) || [],
      readingTime: estimateReadingTime(content),
    };
  });

  return posts.sort((a, b) => (a.date > b.date ? -1 : 1));
}

export async function getPostBySlug(slug: string): Promise<Post | null> {
  const fullPath = path.join(docsDirectory, `${slug}.md`);

  if (!fs.existsSync(fullPath)) {
    return null;
  }

  const fileContents = fs.readFileSync(fullPath, "utf8");
  const { data, content } = matter(fileContents);

  const processedContent = await remark().use(html).process(content);
  const contentHtml = processedContent.toString();

  return {
    slug,
    title: (data.title as string) || slug,
    date: (data.date as string) || "",
    description: (data.description as string) || "",
    author: (data.author as string) || "iKendo Team",
    tags: (data.tags as string[]) || [],
    readingTime: estimateReadingTime(content),
    contentHtml,
  };
}

export function getAllSlugs(): string[] {
  if (!fs.existsSync(docsDirectory)) {
    return [];
  }
  return fs
    .readdirSync(docsDirectory)
    .filter((f) => f.endsWith(".md"))
    .map((f) => f.replace(/\.md$/, ""));
}
