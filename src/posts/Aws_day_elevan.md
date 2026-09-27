# 🔄 Day 11 – CI/CD with AWS

**Date:** October 3, 2026
**Topic:** CI/CD with AWS

Today I started learning about **CI/CD** and how it can be used with AWS to automate the process of building, testing, and deploying applications.

I learned the basic concepts of **Continuous Integration**, **Continuous Delivery**, and **Continuous Deployment**.

---

# 🔄 What is CI/CD?

CI/CD is a development practice that helps automate the software development and deployment process.

The basic workflow is:

```text
Developer
    ↓
Git Push
    ↓
Build
    ↓
Test
    ↓
Deploy
    ↓
Application 🚀
```

Instead of manually building and deploying my application every time I make a change, CI/CD can automate many of these steps.

---

# 🔵 What is Continuous Integration?

**Continuous Integration (CI)** means frequently integrating code changes into a shared repository and automatically building and testing the application.

For example:

```text
Write Code
    ↓
Git Push
    ↓
CI Pipeline
    ↓
Build
    ↓
Test
```

If the tests pass, the code can continue to the next stage.

---

# 🟢 What is Continuous Delivery?

**Continuous Delivery (CD)** means keeping the application in a deployable state after the code passes the required build and testing stages.

The workflow can be:

```text
Code
 ↓
Build
 ↓
Test
 ↓
Ready for Deployment
```

Deployment can then be started through an approved process.

---

# 🟠 What is Continuous Deployment?

**Continuous Deployment** goes one step further by automatically deploying changes after they successfully pass the configured pipeline stages.

```text
Code
 ↓
Build
 ↓
Test
 ↓
Automatic Deployment
 ↓
Production
```

The exact pipeline depends on the project and deployment strategy.

---

# ☁️ AWS CI/CD Services

I learned that AWS provides several services that can be used to build CI/CD pipelines.

Some important services are:

* **AWS CodePipeline**
* **AWS CodeBuild**
* **AWS CodeDeploy**
* **Amazon ECR**
* **Amazon ECS**
* **AWS Elastic Beanstalk**
* **AWS CodeConnections**

These services can be combined depending on the application architecture.

---

# 🔗 AWS CodePipeline

**AWS CodePipeline** is a continuous delivery service that helps automate the stages of a software release process.

A simplified pipeline looks like:

```text
Source
  ↓
Build
  ↓
Test
  ↓
Deploy
```

For example:

```text
GitHub
  ↓
CodePipeline
  ↓
CodeBuild
  ↓
CodeDeploy
  ↓
AWS Application
```

---

# 🏗️ AWS CodeBuild

**AWS CodeBuild** is a managed build service that can compile source code, run tests, and produce software packages.

The basic process is:

```text
Source Code
    ↓
CodeBuild
    ↓
Install Dependencies
    ↓
Build
    ↓
Test
    ↓
Build Artifact
```

This means I don't need to manually manage a build server for the build process.

---

# 🚀 AWS CodeDeploy

**AWS CodeDeploy** helps automate application deployments to supported compute environments.

A simple workflow is:

```text
Build Artifact
      ↓
CodeDeploy
      ↓
Deployment
      ↓
Application
```

It can help reduce the amount of manual work involved in application deployment.

---

# 🐳 CI/CD with Docker

I also connected today's topic with what I learned on **Day 8 about Docker**.

A containerized application can follow a workflow like:

```text
Developer
    ↓
Git Push
    ↓
Build Docker Image
    ↓
Test
    ↓
Push Image to Amazon ECR
    ↓
Deploy Container
    ↓
AWS Application 🚀
```

Amazon ECR can be used as a registry for Docker container images.

---

# 🛠️ Creating a Basic CI/CD Pipeline

I explored the basic process of creating an AWS CI/CD pipeline.

### 1. Prepare the Application

First, I prepared my application and stored the source code in a Git repository.

```text
Project
├── Source Code
├── Configuration
├── Tests
└── Build Files
```

---

### 2. Create a Source Repository

My source code can be stored in a Git-based repository such as GitHub.

```text
Git Repository
      ↓
Source Code
```

---

### 3. Build the Application

The build stage installs dependencies and creates the required application output.

```text
Source Code
    ↓
Build
    ↓
Application Artifact
```

---

### 4. Run Tests

Before deployment, automated tests can check whether the application is working correctly.

```text
Build
 ↓
Tests
 ↓
Pass / Fail
```

If the required tests fail, the pipeline can stop before deployment.

---

### 5. Deploy the Application

After successful build and testing, the application can be deployed to the selected AWS environment.

```text
Build
 ↓
Test
 ↓
Deploy
 ↓
AWS
```

---

# 📊 CI/CD Pipeline Example

The complete process I learned today can be represented as:

```text
        Developer
            ↓
         Git Push
            ↓
     ┌──────────────┐
     │    Source    │
     └──────────────┘
            ↓
     ┌──────────────┐
     │     Build    │
     └──────────────┘
            ↓
     ┌──────────────┐
     │     Test     │
     └──────────────┘
            ↓
     ┌──────────────┐
     │    Deploy    │
     └──────────────┘
            ↓
       AWS Application
```

---

# 🔐 Why CI/CD is Useful

Today I understood that CI/CD can help with:

* Automating builds
* Running automated tests
* Reducing manual deployment work
* Finding problems earlier
* Making deployments more consistent
* Creating repeatable release processes
* Connecting development and deployment workflows

---

# 🆚 Manual Deployment vs CI/CD

| Manual Deployment                 | CI/CD                                 |
| --------------------------------- | ------------------------------------- |
| Many steps are performed manually | Many steps are automated              |
| More repetitive work              | Less repetitive work                  |
| Manual testing may be required    | Automated testing can be added        |
| Deployment can take more effort   | Deployment can be repeatable          |
| Higher chance of manual mistakes  | Pipeline can enforce consistent steps |

---

# 🧠 Important CI/CD Terms

### Source

The location where my application code is stored.

### Build

The process of preparing the application for deployment.

### Test

The process of checking whether the application works as expected.

### Artifact

The output produced by the build process.

### Pipeline

The automated workflow connecting source, build, test, and deployment stages.

### Deployment

The process of releasing the application to an environment.

---

# ☁️ AWS CI/CD Architecture

A simple AWS-based workflow can look like:

```text
GitHub
   ↓
AWS CodePipeline
   ↓
AWS CodeBuild
   ↓
Tests
   ↓
Amazon ECR / Deployment Service
   ↓
AWS Application
```

The exact services depend on whether I am deploying to EC2, ECS, Lambda, Elastic Beanstalk, or another AWS environment.

---

# 📚 What I Learned Today

Today I learned:

* What CI/CD means
* Continuous Integration
* Continuous Delivery
* Continuous Deployment
* AWS CodePipeline
* AWS CodeBuild
* AWS CodeDeploy
* Amazon ECR
* Git-based CI/CD workflow
* Docker and CI/CD
* Build and test stages
* Deployment automation
* CI/CD pipeline architecture

---

# 🎯 My Next Step

My next goal is to create a practical CI/CD pipeline for one of my applications.

I want to understand this complete workflow:

```text
Code
 ↓
GitHub
 ↓
CI/CD Pipeline
 ↓
Build
 ↓
Test
 ↓
Docker Image
 ↓
Amazon ECR
 ↓
AWS Deployment
 ↓
Live Application 🚀
```

---

# 🚀 Day 11 Complete

Today I learned how **CI/CD** can automate the journey from source code to a deployed application.

The main concept I learned today was:

```text
Code → Build → Test → Deploy → Monitor
```

**Learn → Practice → Automate → Deploy → Improve 🚀**

