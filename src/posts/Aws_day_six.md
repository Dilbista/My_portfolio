---

title: "Day 6: Security Groups & Network ACLs"
date: "September 28, 2026"
category: "AWS"
description: "Today I learned about AWS Security Groups and Network ACLs and understood how they control network traffic and help secure AWS resources."
--------------------------------------------------------------------------------------------------------------------------------------------------------

# 🔥 Day 6: Security Groups & Network ACLs

Today I continued my **AWS learning journey** by learning about **Security Groups** and **Network ACLs (NACLs)**.

After learning about **VPC and networking basics**, I wanted to understand how AWS controls and protects network traffic.

---

## 🔐 What is a Security Group?

A **Security Group** acts like a virtual firewall for AWS resources such as EC2 instances.

It controls the traffic that is allowed to reach my instance.

In simple words:

> **Security Group → Controls network traffic to and from my AWS resource.**

For example, I can allow:

```text
SSH   → Port 22
HTTP  → Port 80
HTTPS → Port 443
```

---

## 📥 Inbound Rules

**Inbound rules** control traffic coming **into** my EC2 instance.

For example:

```text
Type    Port    Purpose

SSH     22      Remote server access
HTTP    80      Web traffic
HTTPS   443     Secure web traffic
```

If I want to access my EC2 server using SSH, I need an appropriate inbound rule for port **22**.

---

## 📤 Outbound Rules

**Outbound rules** control traffic going **out from** my EC2 instance.

For example, my server may need to communicate with:

* 🌐 Internet services
* 📦 Software repositories
* 🗄️ Databases
* 🔗 External APIs

I learned that outbound rules are also an important part of network security.

---

# 🛡️ What is a Network ACL?

A **Network ACL (NACL)** is another security layer in an AWS VPC.

Unlike a Security Group, a Network ACL works at the **subnet level**.

In simple words:

> **NACL → Controls traffic entering and leaving a subnet.**

A Network ACL can contain rules for:

* Inbound traffic
* Outbound traffic
* Allowing traffic
* Denying traffic

---

# 🔐 Security Group vs Network ACL

Today I learned the main differences between them.

| Feature         | Security Group                     | Network ACL                    |
| --------------- | ---------------------------------- | ------------------------------ |
| Works at        | Resource level                     | Subnet level                   |
| Traffic         | Inbound & outbound                 | Inbound & outbound             |
| Stateful        | Yes                                | No                             |
| Rules           | Allow rules                        | Allow and deny rules           |
| Applied to      | Resources such as EC2              | Subnets                        |
| Rule processing | All applicable rules are evaluated | Rules evaluated by rule number |

The easiest way I remember it is:

```text
Security Group
      ↓
Protects my EC2/resource

Network ACL
      ↓
Protects my subnet
```

---

# 🌐 How They Work Together

I learned that both Security Groups and Network ACLs can work together to provide multiple layers of network security.

```text
🌐 Internet
     ↓
🛡️ Network ACL
     ↓
🌍 Subnet
     ↓
🔐 Security Group
     ↓
🖥️ EC2 Instance
```

This helped me understand that AWS networking security can have multiple layers.

---

# 🧠 What I Learned Today

Today I learned:

* 🔐 What Security Groups are
* 📥 Inbound rules
* 📤 Outbound rules
* 🛡️ What Network ACLs are
* 🌐 Subnet-level security
* 🔄 Stateful vs stateless filtering
* ⚖️ Differences between Security Groups and NACLs
* 🔗 How both security layers can work together

The main thing I learned is:

> **Security Group → Resource-level security**

> **Network ACL → Subnet-level security**

---

# 🚀 Day 6 Complete!

Today I learned how **Security Groups and Network ACLs** help control network traffic in AWS.

Understanding these concepts is important for building applications that are not only functional but also properly secured.

> **Learn → Practice → Secure → Build → Deploy 🚀**

---
