import React, { useState } from "react";
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
  {
    id: "aws-day-four",
    title: "Day 4: Learning AWS EC2 and RDS",
    date: "September 26, 2026",
    category: "AWS",
    description:
      "Today I learned AWS EC2 and Amazon RDS, including virtual servers, AMIs, EBS, security groups, databases, and how EC2 and RDS work together.",
  },
  {
    id: "aws-day-five",
    title: "Day 5: Learning AWS VPC and Networking Basics",
    date: "September 27, 2026",
    category: "AWS",
    description:
      "Today I learned AWS VPC and networking basics, including VPCs, subnets, route tables, internet gateways, security groups, and how AWS resources communicate with each other.",
  },
  // {
  //   id: "aws-day-six",
  //   title: "Day 6: Learning AWS Security Groups and Network ACLs",
  //   date: "September 28, 2026",
  //   category: "AWS",
  //   description:
  //     "Today I learned AWS Security Groups and Network ACLs, including inbound and outbound rules, resource-level and subnet-level security, and how they help control network traffic.",
  // },
  // {
  //   id: "aws-day-seven",
  //   title: "Day 7: Learning AWS Route 53 and DNS",
  //   date: "September 29, 2026",
  //   category: "AWS",
  //   description:
  //     "Today I learned AWS Route 53 and DNS, including hosted zones, DNS records, A records, CNAME records, name servers, and how domains connect users to applications.",
  // },
  // {
  //   id: "aws-day-eight",
  //   title: "Day 8: Learning Docker Basics for AWS",
  //   date: "September 30, 2026",
  //   category: "AWS",
  //   description:
  //     "Today I learned Docker basics, including containers, images, Dockerfiles, common Docker commands, port mapping, and how Docker can be used to deploy applications on AWS.",
  // },

  // {
  //   id: "aws-day-nine",
  //   title: "Day 9: Learning AWS Lambda",
  //   date: "October 1, 2026",
  //   category: "AWS",
  //   description:
  //     "Today I learned AWS Lambda and serverless computing, including Lambda functions, runtimes, triggers, IAM roles, testing functions, and how Lambda works with services like S3 and API Gateway.",
  // },

  // {
  //   id: "aws-day-ten",
  //   title: "Day 10: Learning AWS CloudWatch",
  //   date: "October 2, 2026",
  //   category: "AWS",
  //   description:
  //     "Today I learned Amazon CloudWatch, including metrics, logs, dashboards, alarms, EC2 monitoring, and how CloudWatch helps me monitor and troubleshoot AWS applications.",
  // },
  // {
  //   id: "aws-day-eleven",
  //   title: "Day 11: Learning CI/CD with AWS",
  //   date: "October 3, 2026",
  //   category: "AWS",
  //   description:
  //     "Today I learned CI/CD with AWS, including Continuous Integration, Continuous Delivery, CodePipeline, CodeBuild, CodeDeploy, Docker, Amazon ECR, automated testing, and deployment workflows.",
  // },

  // {
  //   id: "aws-day-twelve",
  //   title: "Day 12: Learning AWS Security and Best Practices",
  //   date: "October 4, 2026",
  //   category: "AWS",
  //   description:
  //     "Today I learned AWS security best practices, including IAM, least privilege, MFA, Security Groups, NACLs, encryption, S3 security, CloudTrail, CloudWatch, and protecting AWS resources and credentials.",
  // },
  // {
  //   id: "aws-day-thirteen",
  //   title: "Day 13: Deploying a Complete Web Application",
  //   date: "October 5, 2026",
  //   category: "AWS",
  //   description:
  //     "Today I deployed a complete web application using a frontend, backend, database, EC2, RDS, Docker, domain, HTTPS, CloudWatch, CI/CD, and AWS security best practices.",
  // },
];

function Blog() {
  const [currentPage, setCurrentPage] = useState(1);

  // Show only 3 posts per page
  const postsPerPage = 4;

  // Calculate total pages
  const totalPages = Math.ceil(posts.length / postsPerPage);

  // Calculate which posts to show
  const startIndex = (currentPage - 1) * postsPerPage;
  const currentPosts = posts.slice(startIndex, startIndex + postsPerPage);

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
          {currentPosts.map((post) => (
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

        {/* Pagination */}
        {totalPages > 1 && (
          <div className="pagination">
            {/* Previous */}
            <button
              onClick={() => setCurrentPage((page) => Math.max(page - 1, 1))}
              disabled={currentPage === 1}
              className="pagination-btn"
            >
              ← Previous
            </button>

            {/* Page Numbers */}
            <div className="page-numbers">
              {Array.from({ length: totalPages }, (_, index) => index + 1).map(
                (page) => (
                  <button
                    key={page}
                    onClick={() => setCurrentPage(page)}
                    className={`page-number ${
                      currentPage === page ? "active" : ""
                    }`}
                  >
                    {page}
                  </button>
                ),
              )}
            </div>

            {/* Next */}
            <button
              onClick={() =>
                setCurrentPage((page) => Math.min(page + 1, totalPages))
              }
              disabled={currentPage === totalPages}
              className="pagination-btn"
            >
              Next →
            </button>
          </div>
        )}
      </div>
    </section>
  );
}

export default Blog;
