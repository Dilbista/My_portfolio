---

title: "Day 3: AWS IAM, S3 & My First React Deployment"
date: "September 25, 2026"
category: "AWS"
description: "On Day 3 of my AWS journey, I learned IAM and Amazon S3 and deployed a React application to S3."
--------------------------------------------------------------------------------------------------------------

# Day 3: AWS IAM, S3 & My First React Deployment 🚀

Today was **Day 3 of my AWS learning journey**, and it was a very practical day.

I learned about **AWS IAM** and **Amazon S3**, and most importantly, I deployed a **React application to S3**.

This helped me understand how AWS services can be used in a real project.

---

## 🔐 Learning AWS IAM

**IAM (Identity and Access Management)** is used to manage access to AWS resources.

In simple words:

> **IAM controls who can access AWS resources and what they are allowed to do.**

### Main IAM Concepts

* 👤 **Users** — Individual AWS identities
* 👥 **Groups** — Collection of users
* 📜 **Policies** — Define permissions
* 🎭 **Roles** — Provide permissions to trusted services/applications
* 🔑 **Permissions** — Define allowed or denied actions

The main security principle I learned is:

> **Give only the permissions that are required.**

This is called the **Principle of Least Privilege**.

---

# 🪣 Learning Amazon S3

**Amazon S3 (Simple Storage Service)** is an AWS object storage service.

It can be used to store:

* Images 🖼️
* Documents 📄
* Videos 🎥
* Backups 💾
* Application files 📦
* Website files 🌐

### Bucket

A **bucket** is a container where objects are stored.

```text
S3 Bucket
│
├── images/
├── documents/
├── files/
└── website/
```

### Object

An **object** is the actual file stored inside an S3 bucket.

For example:

```text
profile.jpg
resume.pdf
project.zip
```

---

# ⚛️ Deploying My React App to S3

The most exciting part of today was deploying my **React application using Amazon S3**.

I followed this basic process:

```text
React Project
     ↓
npm run build
     ↓
dist/
     ↓
Create S3 Bucket
     ↓
Upload React Files
     ↓
Configure S3
     ↓
Open Website 🌐
```

First, I created the production build of my React project:

```bash
npm run build
```

This generated the `dist` folder containing the files required to run my production website.

Then I created an **S3 bucket** and uploaded the contents of the `dist` folder.

After configuring the required S3 settings, I was able to access my React application through S3.

🎉 **My React application was successfully deployed to AWS S3!**

---

# 🔗 IAM + S3

Today I also understood how IAM and S3 can work together.

```text
        IAM
         ↓
    Permissions
         ↓
        S3
         ↓
      Bucket
         ↓
      Objects
```

IAM manages **access and permissions**, while S3 provides **storage**.

---

# 🧪 What I Practiced Today

### IAM 🔐

* Users
* Groups
* Policies
* Roles
* Permissions
* Least Privilege

### S3 🪣

* Buckets
* Objects
* Object keys
* Uploading files
* Static website hosting
* Storage management
* Permissions
* Security

### React + AWS ⚛️☁️

* Created a production React build
* Generated the `dist` folder
* Created an S3 bucket
* Uploaded the React files
* Configured S3 for the website
* Successfully deployed my React application

---

# 🧠 What I Learned

Today's practice gave me a better understanding of the connection between **development and cloud deployment**.

Before today, I mainly worked with React locally. Today I took one step further:

> **Build → Upload → Configure → Deploy → Access 🌐**

It was a small deployment, but it was an important step in my AWS learning journey.


# 🚀 What's Next?

My AWS journey continues with more practical topics:

* ☁️ EC2
* 🗄️ RDS
* 🌐 VPC
* 🐧 Linux
* 🐳 Docker
* 🔄 CI/CD
* 🚀 Cloud Deployment

> **Learn → Practice → Build → Deploy → Improve 🚀**

---

## ☁️ Day 3 Complete!

Today I learned **IAM, S3**, and deployed my **React application to AWS S3**.

One more step forward in my journey from **local development to cloud deployment**. 🚀
    