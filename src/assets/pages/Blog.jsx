import React from "react";
import { Link } from "react-router-dom";
import "./Blog.css";

const posts = [
  {
    id: "aws-day-one",
    title: "Day 1: Starting My AWS Learning Journey",
    date: "September 23, 2026",
    category: "AWS",
    description:
      "Today I started learning AWS, EC2, Linux commands, Apache web server, and static website deployment.",
  },
  {
    id: "aws-day-two",
    title: "Day 2: Creating My AWS Account",
    date: "September 24, 2026",
    category: "AWS",
    description:
      "Today I created my AWS account using the Free Tier and learned about dollar cards, international online payments, and basic AWS billing.",
  },
  {
    id: "aws-day-three",
    title: "Day 3: Learning AWS IAM and S3",
    date: "September 25, 2026",
    category: "AWS",
    description:
      "Today I learned AWS IAM and Amazon S3, including users, groups, policies, roles, permissions, buckets, objects, and basic cloud security.",
  },
];

function Blog() {
  return (
    <section className="blog-page">
      <div className="blog-container">
        {/* Blog Header */}

        <div className="blog-header">
          <p className="blog-subtitle">MY DEVELOPER JOURNEY</p>

          <h1>Learn. Build. Share.</h1>

          <p className="blog-intro">
            I document what I learn, what I build, the problems I solve, and the
            lessons I discover along the way.
          </p>
        </div>

        {/* Blog Posts */}
        <div className="blog-grid">
          {posts.map((post) => (
            <article className="blog-card" key={post.id}>
              <span className="blog-category">{post.category}</span>

              <h2>{post.title}</h2>

              <p className="blog-date">{post.date}</p>

              <p className="blog-description">{post.description}</p>

              <Link to={`/blog/${post.id}`} className="read-more">
                Read More →
              </Link>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Blog;
