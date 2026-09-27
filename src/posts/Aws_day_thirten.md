# 🚀 Day 13 – Deploying a Complete Web Application

**Date:** October 5, 2026
**Topic:** Final AWS Deployment Project

Today I worked on one of the most important parts of my AWS learning journey: **deploying a complete web application to AWS**.

I combined the concepts I learned from the previous days, including **EC2, RDS, VPC, Security Groups, Docker, CloudWatch, CI/CD, security, domain configuration, and HTTPS**.

My goal was to understand how a real web application can move from my local computer to a live AWS environment.

---

# 🏗️ My Complete Application Architecture

The application I deployed contains:

* Frontend
* Backend/API
* Database
* EC2 server
* Amazon RDS
* Domain name
* HTTPS/SSL
* Security Groups
* Monitoring

My basic architecture looks like this:

```text
                    User
                     ↓
                 Domain Name
                     ↓
                   HTTPS
                     ↓
              EC2 Web Server
                ↙        ↘
         Frontend       Backend/API
                           ↓
                         RDS
                           ↓
                       Database
```

---

# 🖥️ 1. Preparing My Application

Before deploying, I checked my application locally.

My project contains:

```text
My Web Application
│
├── frontend
│   ├── components
│   ├── pages
│   └── assets
│
├── backend
│   ├── API
│   ├── controllers
│   ├── models
│   └── routes
│
└── database
```

I first made sure that the frontend, backend, and database were working correctly on my local machine.

---

# ☁️ 2. Creating an EC2 Instance

The first major AWS resource I prepared was an **EC2 instance**.

I used EC2 as the server where I could run my web application.

![EC2 Instance](/images/aws/day13/01-ec2-instance.png)

The basic architecture is:

```text
Internet
   ↓
EC2 Instance
   ↓
My Web Application
```

I selected an appropriate Amazon Machine Image and instance configuration for my project.

---

# 🔐 3. Configuring Security Groups

I configured the EC2 Security Group to allow the traffic required by my application.

For example:

```text
SSH
22

HTTP
80

HTTPS
443
```

I avoided opening unnecessary ports.

```text
Internet
   ↓
Security Group
   ↓
EC2
```

![EC2 Security Group](/images/aws/day13/02-security-group.png)

---

# 🗄️ 4. Creating an Amazon RDS Database

Next, I created a database using **Amazon RDS**.

RDS allows me to use a managed relational database without manually managing the underlying database server.

![RDS Database](/images/aws/day13/03-rds-database.png)

My architecture became:

```text
EC2
 ↓
Application
 ↓
RDS
 ↓
Database
```

---

# 🔗 5. Connecting EC2 with RDS

After creating the RDS database, I configured the application so that the backend could connect to the database.

The connection information included values such as:

```text
Database Host
Database Port
Database Name
Database Username
Database Password
```

I stored these values in environment configuration instead of hard-coding sensitive credentials into my source code.

The final connection looked like:

```text
Frontend
   ↓
Backend/API
   ↓
EC2
   ↓
RDS
   ↓
Database
```

---

# 🛠️ 6. Preparing the EC2 Server

After connecting to my EC2 instance, I prepared the server environment required by my application.

Depending on the application stack, this can include:

```text
Operating System
     ↓
Runtime
     ↓
Web Server
     ↓
Application
     ↓
Dependencies
```

I also checked that the required services were running correctly.

---

# 🐳 7. Using Docker

From **Day 8**, I learned Docker.

I applied that knowledge to my deployment project.

Instead of installing every dependency manually, I could package my application into Docker containers.

```text
Application
     ↓
Dockerfile
     ↓
Docker Image
     ↓
Docker Container
     ↓
EC2
```

For a multi-service application, the architecture can look like:

```text
EC2
│
├── Frontend Container
│
└── Backend Container
          ↓
         RDS
```

This makes the application environment more consistent.

---

# 🌐 8. Deploying the Frontend

I deployed the frontend application to the AWS environment.

The frontend communicates with the backend through the configured API endpoint.

```text
Browser
   ↓
Frontend
   ↓
Backend API
```

I also updated the frontend configuration so it would use the production backend URL instead of my local development URL.

For example:

```text
Development:
http://localhost:8000

Production:
https://api.example.com
```

---

# ⚙️ 9. Deploying the Backend

Next, I deployed my backend/API application to the EC2 server.

The backend is responsible for:

* API requests
* Authentication
* Business logic
* Database communication
* Sending responses to the frontend

The architecture is:

```text
Frontend
   ↓
API Request
   ↓
Backend
   ↓
RDS
   ↓
Database
```

I tested the API after deployment to make sure the backend was responding correctly.

---

# 🗃️ 10. Running Database Migrations

After connecting the backend to RDS, I prepared the required database tables.

The general process was:

```text
Application
    ↓
Database Configuration
    ↓
Migration
    ↓
RDS
    ↓
Tables Created
```

I then tested database operations such as:

```text
Create
Read
Update
Delete
```

---

# 🌍 11. Connecting My Domain

After my application was working on the EC2 server, I connected a domain name to the application.

The basic DNS workflow is:

```text
Domain
   ↓
DNS
   ↓
Server IP / Load Balancer
   ↓
Application
```

If using Route 53, I can manage DNS records through an AWS hosted zone.

![Route 53 Domain](/images/aws/day13/04-route53-domain.png)

---

# 🔒 12. Enabling HTTPS

I also learned that production websites should use **HTTPS** to encrypt communication between the browser and the application.

The basic flow is:

```text
User
 ↓
HTTPS
 ↓
Web Server
 ↓
Application
```

Instead of:

```text
http://example.com
```

the goal is:

```text
https://example.com
```

HTTPS helps protect data while it is being transmitted between the client and server.

---

# 🔐 13. SSL/TLS Certificate

To use HTTPS, I configured an SSL/TLS certificate for the domain.

The certificate allows the browser to establish an encrypted connection with the website.

The final flow is:

```text
Domain
   ↓
SSL/TLS Certificate
   ↓
HTTPS
   ↓
Web Application
```

![HTTPS Configuration](/images/aws/day13/05-https.png)

---

# 🔄 14. Testing the Complete Application

After deployment, I tested the complete application.

I checked:

### Frontend

```text
☑ Website loads
☑ Pages work
☑ Assets load
```

### Backend

```text
☑ API works
☑ Authentication works
☑ Requests return responses
```

### Database

```text
☑ Database connection works
☑ Data can be created
☑ Data can be retrieved
```

### Security

```text
☑ Required ports are open
☑ HTTPS works
☑ Credentials are protected
```

---

# 📊 15. Monitoring with CloudWatch

From **Day 10**, I learned about CloudWatch.

I used the same concept for my deployment project.

```text
EC2
 ↓
CloudWatch
 ↓
Metrics + Logs
 ↓
Monitor Application
```

I can use monitoring to help identify resource or application problems.

---

# 🔄 16. CI/CD

From **Day 11**, I learned about CI/CD.

I connected that concept to my final deployment workflow.

A simplified deployment pipeline is:

```text
Developer
    ↓
Git Push
    ↓
CI/CD
    ↓
Build
    ↓
Test
    ↓
Deploy
    ↓
AWS
    ↓
Live Application 🚀
```

This can reduce repetitive manual deployment work.

---

# 🔒 17. Applying AWS Security Best Practices

From **Day 12**, I applied some security concepts to my deployment.

My checklist was:

```text
☑ Use MFA
☑ Use least privilege
☑ Protect credentials
☑ Avoid unnecessary open ports
☑ Use HTTPS
☑ Protect the database
☑ Monitor resources
☑ Review permissions
```

I also made sure that the database was not unnecessarily exposed directly to the public internet.

---

# 🧩 Final AWS Architecture

After combining everything I learned, my final architecture looks like:

```text
                         USERS
                           │
                           ▼
                     DOMAIN / DNS
                           │
                           ▼
                      HTTPS / TLS
                           │
                           ▼
                    ┌─────────────┐
                    │     EC2     │
                    │             │
                    │  Frontend   │
                    │      +      │
                    │  Backend    │
                    └──────┬──────┘
                           │
                           ▼
                    ┌─────────────┐
                    │     RDS     │
                    │             │
                    │  Database   │
                    └─────────────┘

                    CloudWatch
                         ↓
                    Monitoring

                    CI/CD
                         ↓
                    Deployment
```

---

# 🚀 My Deployment Workflow

The complete workflow I practiced is:

```text
Local Development
       ↓
Git
       ↓
Build
       ↓
Docker
       ↓
EC2
       ↓
RDS
       ↓
Domain
       ↓
HTTPS
       ↓
CloudWatch
       ↓
Live Application 🚀
```

---

# 📚 What I Learned Today

Today I learned how different AWS concepts can work together to deploy a complete web application.

I practiced:

* Frontend deployment
* Backend/API deployment
* EC2
* Amazon RDS
* Database connection
* Security Groups
* Docker
* Domain configuration
* DNS
* HTTPS
* SSL/TLS
* CloudWatch
* CI/CD
* AWS security best practices

---

# 🎯 My Final AWS Project Goal

My goal was not only to learn individual AWS services but to understand how they work together in a real application.

```text
Frontend
    +
Backend
    +
Database
    +
EC2
    +
RDS
    +
Docker
    +
Domain
    +
HTTPS
    +
Monitoring
    +
CI/CD
        ↓
Complete Cloud Application 🚀
```

---

# 🏆 Day 13 Complete

Today was an important milestone in my AWS learning journey.

I took the concepts I learned throughout this series and connected them into a complete web application deployment workflow.

The main concept I learned today was:

```text
Build → Deploy → Secure → Monitor → Improve
```

**Learn → Practice → Build → Deploy → Monitor → Improve 🚀**

My AWS learning journey continues!
