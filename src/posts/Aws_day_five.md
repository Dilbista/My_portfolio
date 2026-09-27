---

title: "Day 5: VPC & Networking Basics"
date: "September 27, 2026"
category: "AWS"
description: "Today I learned the basics of Amazon VPC and AWS networking, including VPCs, subnets, route tables, internet gateways, and security groups."
----------------------------------------------------------------------------------------------------------------------------------------------------------

# 🌐 Day 5: VPC & Networking Basics

Today I continued my **AWS learning journey** by learning about **Amazon VPC and networking basics**.

After learning about EC2 yesterday, I wanted to understand how EC2 instances communicate with the internet and with other AWS resources.

---

## 🌐 What is Amazon VPC?

**VPC (Virtual Private Cloud)** is a logically isolated network that I can create in AWS.

In simple words:

> **VPC is my own private network inside AWS where I can control how my resources communicate.**

A VPC allows me to configure things such as:

* 🌐 IP address ranges
* 📦 Subnets
* 🛣️ Route tables
* 🚪 Internet gateways
* 🔐 Security groups
* 🛡️ Network ACLs

---

# 🏠 VPC Structure

I learned that a VPC contains different networking components.

```text
☁️ AWS Cloud
    │
    ▼
🌐 VPC
    │
    ├── 🌍 Public Subnet
    │      └── 🖥️ EC2
    │
    └── 🔒 Private Subnet
           └── 🗄️ Database
```

This helped me understand how AWS resources can be organized inside a network.

---

# 📦 What is a Subnet?

A **subnet** is a smaller network inside a VPC.

I learned that subnets can be used to separate resources based on their purpose.

For example:

### 🌍 Public Subnet

A public subnet can contain resources that need direct internet connectivity, such as a web server.

### 🔒 Private Subnet

A private subnet can contain resources that should not be directly accessible from the public internet, such as a database.

A simple example:

```text
VPC
│
├── Public Subnet
│      └── EC2 Web Server
│
└── Private Subnet
       └── Database
```

---

# 🚪 Internet Gateway

I also learned about the **Internet Gateway (IGW)**.

An Internet Gateway allows communication between resources in a VPC and the internet when the appropriate routing and security rules are configured.

For example:

```text
🌐 Internet
     ↓
🚪 Internet Gateway
     ↓
🌐 VPC
     ↓
📦 Public Subnet
     ↓
🖥️ EC2
```

So I understood that simply having a public IP does not by itself make an instance reachable; the VPC routing and security configuration also need to allow the traffic.

---

# 🛣️ Route Table

A **Route Table** contains rules that determine where network traffic should go.

For example:

```text
Destination        Target

10.0.0.0/16        local
0.0.0.0/0          Internet Gateway
```

I learned that:

* `10.0.0.0/16` can represent traffic inside my VPC.
* `0.0.0.0/0` represents other IPv4 destinations.
* The route table decides where that traffic should be sent.

---

# 🔐 Security Group

I also reviewed **Security Groups** from my EC2 practice.

A Security Group works like a virtual firewall for my AWS resources.

For example:

```text
SSH
Port: 22

HTTP
Port: 80

HTTPS
Port: 443
```

I learned that I should only allow the ports and sources that my application actually needs.

---

# 🛡️ Network ACL

I also learned about **Network ACL (NACL)**.

A Network ACL is another layer of network traffic control for a subnet.

The basic difference I learned is:

```text
Security Group
→ Controls traffic for resources such as EC2

Network ACL
→ Controls traffic at the subnet level
```

This gave me a better understanding of how AWS provides multiple layers of network security.

---

# 🔗 How Everything Works Together

Today I started understanding how the different networking components connect together.

```text
                    🌐 Internet
                         │
                         ▼
                 🚪 Internet Gateway
                         │
                         ▼
                    🌐 VPC
                         │
              ┌──────────┴──────────┐
              ▼                     ▼
        🌍 Public Subnet       🔒 Private Subnet
              │                     │
              ▼                     ▼
          🖥️ EC2                 🗄️ Database
              │
              ▼
        🔐 Security Group
```

This helped me understand the basic networking architecture behind many AWS applications.

---

# 🧠 What I Learned Today

Today I learned about:

* 🌐 VPC
* 📦 Subnets
* 🚪 Internet Gateway
* 🛣️ Route Tables
* 🔐 Security Groups
* 🛡️ Network ACLs
* 🌍 Public and Private Networks
* 🔗 Basic AWS networking

The most important thing I understood today is:

> **VPC → My AWS network**

> **Subnet → A smaller network inside the VPC**

> **Route Table → Controls where traffic goes**

> **Internet Gateway → Connects a VPC to the internet**

> **Security Group → Controls traffic to resources**

---

# 🚀 Day 5 Complete!

Today I learned the basics of **VPC and AWS networking**.

After learning EC2 yesterday, understanding VPC helped me see how AWS resources communicate securely inside the cloud.

> **Learn → Practice → Build → Deploy → Improve 🚀**

---
