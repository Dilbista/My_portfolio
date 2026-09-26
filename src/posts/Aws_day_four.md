---

title: "Day 4: AWS EC2 & RDS Practice"
date: "September 26, 2026"
category: "AWS"
description: "Today I practiced Amazon EC2 and RDS and learned how applications can run on EC2 while databases are managed with RDS."
-------------------------------------------------------------------------------------------------------------------------------------

# Day 4: AWS EC2 & RDS ☁️🗄️

Today I continued my **AWS learning journey** by practicing **Amazon EC2** and **Amazon RDS**.

I focused on creating an EC2 instance step by step and understanding how EC2 and RDS can be used together in a cloud application.

---

## ☁️ What is Amazon EC2?

**EC2 (Elastic Compute Cloud)** is an AWS service that provides virtual servers in the cloud.

In simple words:

> **EC2 is a virtual server that I can use to run websites, applications, and other services.**

I learned about:

* 🖥️ EC2 Instances
* 💿 AMI
* ⚙️ Instance Types
* 💾 EBS Storage
* 🔐 Security Groups
* 🌐 Public IP
* 🔑 Key Pairs

---

# 🚀 My EC2 Launch Process

## 1. Search for EC2

First, I opened the **AWS Management Console**.

I used the search bar and searched for:

```text
EC2
```

Then I selected **EC2 – Virtual Servers in the Cloud**.

![Search EC2](/images/01-search-ec2.png)

---

## 2. Open the EC2 Dashboard

After selecting EC2, I opened the **EC2 Dashboard**.

From the dashboard, I could manage my EC2 instances and other resources.

![EC2 Dashboard](/images/02-ec2-dashboard.png)

---

## 3. Click Launch Instance

From the EC2 dashboard, I clicked **Launch instance**.

This opened the page where I could configure my new EC2 server.

![Launch Instance](/images/02-ec2-dashboard.png)

---

## 4. Enter Instance Name

I entered a name for my EC2 instance.

For example:

```text
My-First-EC2
```

This helped me identify my server easily.

![Instance Name](/images/03-instance-name.png)

---

## 5. Select an AMI

Next, I selected an **AMI (Amazon Machine Image)**.

For my practice, I selected an **Amazon Linux** AMI.

An AMI contains the operating system and configuration needed to launch my EC2 server.

![Select AMI](/images/05-select-ami.png)

---

## 6. Select Instance Type

Next, I selected an **Instance Type**.

The instance type determines the resources available to my server, such as CPU and memory.

For my learning and practice, I selected a small instance type available in my AWS account.

![Instance Type](/images/06-instance-type.png)

---

## 7. Create or Select a Key Pair 🔑

Next, I configured a **Key Pair**.

I used the key pair to securely connect to my EC2 instance.

If I created a new key pair, I downloaded the private key and stored it safely.

![Key Pair](/images/07-key-pair.png)

> ⚠️ I should never share my private key or upload it to GitHub.

---

## 8. Configure Network Settings 🔐

Next, I checked the network settings.

I reviewed:

* VPC
* Subnet
* Public IP
* Security Group

For my practice server, I checked the required security group rules.

```text
SSH   → 22
HTTP  → 80
HTTPS → 443
```

![Network Settings](/images/08-network-security.png)

I learned that a **Security Group controls network traffic** to and from my EC2 instance.

---

## 9. Configure Storage 💾

Next, I checked the storage configuration.

EC2 uses **EBS (Elastic Block Store)** for block storage.

I reviewed the default root volume provided during the instance setup.

![Storage Configuration](/images/09-storage.png)

---

## 10. Review and Launch 🚀

Before launching my server, I reviewed all the settings:

* Instance name
* AMI
* Instance type
* Key pair
* Network settings
* Security group
* Storage

After checking everything, I clicked **Launch instance**.

![Launch Instance](/images/10-launch.png)

---

## 11. My EC2 Instance is Running 🎉

After launching the instance, I went to:

**EC2 → Instances**

I checked the instance status.

After a short time, my instance showed:

```text
Running
```

My EC2 virtual server was now running successfully.

![Running EC2 Instance](/images/10-running-instance)

---

# 🖥️ Connecting to My EC2 Server

After launching my instance, I learned how I can connect to it using SSH.

A basic SSH command looks like:

```bash
ssh -i "my-ec2-key.pem" ec2-user@PUBLIC-IP
```

The username depends on the AMI I selected.

For Amazon Linux, the username is commonly:

```text
ec2-user
```

I also learned that the **Public IPv4 address** can be used to connect to my EC2 server when the network and security configuration allow it.

---

# 🗄️ What is Amazon RDS?

After practicing EC2, I also learned about **Amazon RDS**.

**RDS (Relational Database Service)** is a managed database service provided by AWS.

In simple words:

> **RDS makes it easier to create and manage relational databases in the cloud.**

I learned about:

* 🗄️ Database Instances
* 🐬 MySQL
* 🐘 PostgreSQL
* 💾 Database Storage
* 🔐 Database Security
* 💿 Backups
* 🔗 Connecting applications to databases

---

# 🔗 EC2 + RDS

I learned how EC2 and RDS can work together in a real application.

```text
🌐 User
   ↓
☁️ EC2
   ↓
💻 My Application
   ↓
🗄️ Amazon RDS
   ↓
🐬 MySQL Database
```

In this setup:

**EC2 → Runs my application**

**RDS → Manages my relational database**

This helped me understand the difference between the **application/server layer** and the **database layer**.

---

# 🧠 What I Learned Today

Today I learned how to:

* Search for EC2 in AWS Console
* Open the EC2 Dashboard
* Launch an EC2 instance
* Select an AMI
* Select an instance type
* Configure a key pair
* Configure networking
* Configure security groups
* Configure EBS storage
* Launch and check my running instance
* Understand Amazon RDS
* Understand how EC2 and RDS can work together

This practical exercise helped me understand how cloud servers are created and prepared for running applications.

---

# 🚀 Day 4 Complete!

Today I practiced **Amazon EC2 and Amazon RDS** and learned how cloud compute and database services can work together.

> **Learn → Practice → Build → Deploy → Improve 🚀**

---
