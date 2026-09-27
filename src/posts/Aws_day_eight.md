# 🐳 Day 8 – Docker Basics for AWS

**Date:** September 30, 2026
**Topic:** Docker Basics for AWS

Today I started learning **Docker** and how containers can be useful when working with AWS and cloud applications.

I learned what Docker is, why developers use containers, and the basic Docker commands I need to know.

---

## 🐳 What is Docker?

Docker is a platform that allows me to package an application together with its dependencies and run it inside a **container**.

Instead of installing everything directly on a server, I can create a Docker container that contains the application, required libraries, configurations, and runtime.

### Simple Example

Without Docker:

```text
Application
   ↓
Install PHP
   ↓
Install Node.js
   ↓
Install MySQL
   ↓
Install Dependencies
   ↓
Configure Server
```

With Docker:

```text
Docker
   ↓
Container
   ↓
Application + Dependencies
```

This makes application deployment more consistent between development and production environments.

---

## 📦 What is a Container?

A **container** is an isolated environment where an application runs with everything it needs.

For example:

```text
Docker Container
├── Application
├── Runtime
├── Libraries
├── Dependencies
└── Configuration
```

Containers are lightweight and can be started, stopped, removed, and recreated easily.

---

## 🆚 Docker vs Virtual Machine

I also learned the basic difference between Docker containers and virtual machines.

| Docker Container          | Virtual Machine         |
| ------------------------- | ----------------------- |
| Lightweight               | Heavier                 |
| Starts quickly            | Usually takes longer    |
| Shares host OS kernel     | Includes a guest OS     |
| Uses fewer resources      | Uses more resources     |
| Easy to create and remove | More resource-intensive |

Docker is useful when I need to run applications consistently across different environments.

---

# 🛠️ Installing Docker

Before practicing Docker, I installed **Docker Desktop** on my computer.

After installation, I checked whether Docker was working using:

```bash
docker --version
```

I also checked Docker information with:

```bash
docker info
```

If Docker is running correctly, these commands return Docker-related information.

---

# 🐳 My First Docker Container

I used the following command to run my first container:

```bash
docker run hello-world
```

This command downloads the `hello-world` image if it is not already available and creates a container from it.

The container runs and displays a message confirming that Docker is working.

---

# 🖼️ Docker Images

A **Docker image** is a template used to create containers.

For example:

```text
Docker Image
      ↓
Docker Container
```

I can see the images available on my computer using:

```bash
docker images
```

---

# 📦 Docker Containers

To see running containers:

```bash
docker ps
```

To see all containers, including stopped containers:

```bash
docker ps -a
```

This helped me understand the difference between an **image** and a **container**.

---

# 🔥 Important Docker Commands

These are some commands I practiced today:

### Check Docker version

```bash
docker --version
```

### Download an image

```bash
docker pull nginx
```

### Run a container

```bash
docker run nginx
```

### Run a container in the background

```bash
docker run -d nginx
```

### See running containers

```bash
docker ps
```

### See all containers

```bash
docker ps -a
```

### Stop a container

```bash
docker stop <container_id>
```

### Start a stopped container

```bash
docker start <container_id>
```

### Remove a container

```bash
docker rm <container_id>
```

### Remove an image

```bash
docker rmi <image_id>
```

---

# 🌐 Running Nginx with Docker

I also practiced running a web server using Docker.

```bash
docker run -d -p 8080:80 nginx
```

Here:

```text
-d       → Run container in background
-p       → Map ports
8080     → My computer's port
80       → Container's port
nginx    → Docker image
```

Then I opened:

```text
http://localhost:8080
```

and could access the Nginx web server.

---

# 📝 What is a Dockerfile?

A **Dockerfile** contains instructions for creating my own Docker image.

For example:

```dockerfile
FROM node:20-alpine

WORKDIR /app

COPY package*.json ./

RUN npm install

COPY . .

EXPOSE 5173

CMD ["npm", "run", "dev", "--", "--host", "0.0.0.0"]
```

This Dockerfile can be used to package a Node.js application into a Docker image.

---

# 🏗️ Building a Docker Image

After creating a Dockerfile, I can build an image using:

```bash
docker build -t my-app .
```

Here:

```text
docker build → Build an image
-t           → Give the image a name
my-app       → Image name
.            → Current directory
```

Then I can check the image:

```bash
docker images
```

---

# 🚀 Docker and AWS

Docker becomes very useful when deploying applications to AWS.

A simplified workflow is:

```text
My Application
      ↓
Dockerfile
      ↓
Docker Image
      ↓
Container
      ↓
AWS
      ↓
Application Running in Cloud
```

Docker containers can be used with AWS services such as:

* Amazon ECS
* Amazon EKS
* AWS Fargate
* Amazon EC2
* Amazon ECR

### Amazon ECR

**Amazon Elastic Container Registry (ECR)** is used to store Docker container images.

A common workflow is:

```text
Create Docker Image
       ↓
Push Image to Amazon ECR
       ↓
AWS Service Pulls Image
       ↓
Run Container
```

---

# ☁️ Docker on EC2

One way to use Docker on AWS is to install Docker on an **EC2 instance**.

For example:

```text
User
 ↓
Internet
 ↓
EC2
 ↓
Docker
 ↓
Container
 ↓
Application
```

This allows me to deploy a containerized application on a cloud server.

---

# 🔐 Why Docker is Useful

Today I understood that Docker can help with:

* Consistent application environments
* Easier deployment
* Dependency management
* Application isolation
* Portable applications
* Faster development
* Easier scaling

---

# 📚 What I Learned Today

Today I learned:

* What Docker is
* What containers are
* Docker images
* Docker containers
* Docker commands
* Dockerfile
* Building Docker images
* Running Nginx with Docker
* Port mapping
* Basic Docker deployment concepts
* How Docker can be used with AWS
* What Amazon ECR is

---

# 🎯 My Next Step

My next goal is to practice creating my own Docker image and deploying a containerized application on AWS.

I want to understand the complete workflow:

```text
Code
 ↓
Dockerfile
 ↓
Docker Image
 ↓
Amazon ECR
 ↓
AWS
 ↓
Running Application 🚀
```

## 🚀 Day 8 Complete

Today I learned the **basics of Docker for AWS**. Docker helped me understand how applications can be packaged into containers and moved more easily between development and cloud environments.

**Learn → Practice → Build → Deploy → Improve 🚀**
