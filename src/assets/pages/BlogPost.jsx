
import React from "react";
import { useParams, Link } from "react-router-dom";
import ReactMarkdown from "react-markdown";

import "./Blog.css";

// Automatically load ALL markdown files from src/posts
const markdownFiles = import.meta.glob("../../posts/*.md", {
  query: "?raw",
  import: "default",
  eager: true,
});

function getPostId(path) {
  const fileName = path.split("/").pop().replace(".md", "");

  return fileName
    .toLowerCase()
    .replace(/_/g, "-")
    .replace(/\s+/g, "-");
}

function parseMarkdown(rawContent) {
  const match = rawContent.match(
    /^---\s*([\s\S]*?)\s*---\s*([\s\S]*)$/
  );

  if (!match) {
    return {
      title: "Untitled Post",
      date: "",
      category: "Blog",
      description: "",
      content: rawContent,
    };
  }

  const frontmatter = match[1];
  const content = match[2];

  const metadata = {};

  frontmatter.split("\n").forEach((line) => {
    const index = line.indexOf(":");

    if (index !== -1) {
      const key = line.substring(0, index).trim();
      let value = line.substring(index + 1).trim();

      value = value.replace(/^["']|["']$/g, "");

      metadata[key] = value;
    }
  });

  return {
    ...metadata,
    content,
  };
}

const posts = Object.entries(markdownFiles).map(([path, rawContent]) => {
  const post = parseMarkdown(rawContent);

  return {
    id: getPostId(path),
    ...post,
  };
});

function BlogPost() {
  const { postId } = useParams();

  const post = posts.find((post) => post.id === postId);

  if (!post) {
    return (
      <main className="blog-page">
        <div className="blog-post-container">
          <h1>Blog Not Found</h1>

          <p>
            Sorry, the blog post you are looking for does not exist.
          </p>

          <Link to="/blog" className="read-more">
            ← Back to Blog
          </Link>
        </div>
      </main>
    );
  }

  return (
    <main className="blog-page">
      <div className="blog-post-container">

        <Link to="/blog" className="back-blog">
          ← Back to Blog
        </Link>

        <div className="single-blog-header">

          <span className="blog-category">
            {post.category}
          </span>

          <h1>{post.title}</h1>

          <p className="blog-date">
            {post.date}
          </p>

        </div>

        <article className="markdown-content">
          <ReactMarkdown>
            {post.content}
          </ReactMarkdown>
        </article>

      </div>
    </main>
  );
}

export default BlogPost;
