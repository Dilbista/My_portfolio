---

title: "Day 6: Security Groups & Network ACLs"
date: "September 28, 2026"
category: "AWS"
description: "Today I learned how AWS Security Groups and Network ACLs control network traffic and provide different layers of security for AWS resources and VPC subnets."
---------------------------------------------------------------------------------------------------------------------------------------------------------------------------

# 🔥 Day 6: Security Groups & Network ACLs

Today I continued my **AWS learning journey** by learning about **Security Groups** and **Network Access Control Lists (NACLs)**.

After learning the basics of **VPC, subnets, and networking**, the next important topic was understanding how AWS controls network traffic and protects resources from unwanted connections.

AWS provides different layers of network security. Two important components are:

* 🔐 **Security Groups**
* 🛡️ **Network ACLs (NACLs)**

Understanding the difference between these two is very important when deploying applications on AWS.

---

## 🔐 What is a Security Group?

A **Security Group (SG)** is a **virtual firewall** that controls network traffic for supported AWS resources, such as EC2 instances.

It determines which network connections are allowed to reach a resource and which connections the resource can make.

In simple words:

> **Security Group → Protects an AWS resource by controlling its network traffic.**

For example, if I have a web server running on an EC2 instance, I may need to allow:

```text
SSH     → Port 22
HTTP    → Port 80
HTTPS   → Port 443
```

Each port is used for a different purpose.

### Example

Suppose my EC2 instance is hosting a website.

I might configure:

```text
SSH   → 22  → For server administration
HTTP  → 80  → For normal web traffic
HTTPS → 443 → For secure web traffic
```

This means the Security Group can control which types of connections are allowed to the EC2 instance.

---

# 📥 Inbound Rules

**Inbound rules** control traffic coming **into** a resource.

For example, if I want to connect to my Linux EC2 instance using SSH, I need an appropriate inbound rule.

| Type  | Port | Purpose                      |
| ----- | ---: | ---------------------------- |
| SSH   |   22 | Remote server administration |
| HTTP  |   80 | Web traffic                  |
| HTTPS |  443 | Secure web traffic           |

For example:

```text
Internet
   ↓
Port 443
   ↓
Security Group
   ↓
EC2 Web Server
```

If the required traffic is not allowed by the Security Group, the connection will not reach the instance.

### 🔒 Important Security Practice

I should avoid allowing sensitive ports from everywhere unless there is a specific reason.

For example:

```text
SSH from:
0.0.0.0/0
```

means SSH is allowed from any IPv4 address.

For administration, restricting SSH access to a trusted IP address or using a more secure access method is generally preferable.

---

# 📤 Outbound Rules

**Outbound rules** control traffic going **out from** a resource.

An EC2 server may need to communicate with:

* 🌐 Internet services
* 📦 Software repositories
* 🗄️ Databases
* 🔗 External APIs
* ☁️ Other AWS services

For example:

```text
EC2 Instance
     ↓
Outbound Rule
     ↓
Internet / AWS Service
```

Outbound access is important because applications often need to download packages, communicate with APIs, access databases, or connect to other services.

---

# 🧠 Security Groups Are Stateful

One of the most important concepts I learned today is that **Security Groups are stateful**.

This means that when traffic is allowed in one direction, the response traffic is automatically allowed back for that established connection.

For example:

```text
Client
  ↓
HTTP Request
  ↓
Security Group
  ↓
EC2
  ↑
HTTP Response
  ↑
Automatically allowed
```

I do not need to create a separate inbound rule just to allow the response to an already permitted connection.

---

# 🛡️ What is a Network ACL?

A **Network Access Control List (NACL)** is another security layer provided by AWS VPC.

Unlike a Security Group, which is associated with a resource such as an EC2 network interface, a NACL is associated with a **subnet**.

In simple words:

> **NACL → Controls traffic entering and leaving a subnet.**

A NACL can contain rules for:

* 📥 Inbound traffic
* 📤 Outbound traffic
* ✅ Allowing traffic
* ❌ Denying traffic

Because it works at the subnet level, it can affect multiple resources inside that subnet.

---

# ⚙️ How Network ACL Rules Work

Network ACL rules are evaluated according to their **rule numbers**, starting with the lowest number.

For example:

```text
Rule 100 → Allow HTTP
Rule 110 → Allow HTTPS
Rule 120 → Deny specific traffic
Rule *   → Default rule
```

AWS evaluates the rules in order.

The first rule that matches the traffic determines whether the traffic is allowed or denied.

This is different from Security Groups, where there are no rule numbers used in this way.

---

# 🔄 NACLs Are Stateless

A Network ACL is **stateless**.

This means that inbound and outbound traffic are evaluated separately.

For example, if an inbound connection is allowed, the response traffic must also be permitted by an appropriate outbound rule.

Conceptually:

```text
Client
  ↓
Inbound NACL Rule
  ↓
Subnet
  ↓
EC2
  ↓
Outbound NACL Rule
  ↓
Client
```

Both directions need to be considered.

This is one of the biggest differences between a Security Group and a NACL.

---

# 🔐 Security Group vs Network ACL

The main differences I learned are:

| Feature      | Security Group                           | Network ACL                        |
| ------------ | ---------------------------------------- | ---------------------------------- |
| Level        | Resource/network-interface level         | Subnet level                       |
| Controls     | Inbound & outbound traffic               | Inbound & outbound traffic         |
| Stateful     | ✅ Yes                                    | ❌ No                               |
| Rules        | Allow rules                              | Allow and deny rules               |
| Rule numbers | Not used for evaluation order            | Used for evaluation order          |
| Association  | Resources such as EC2 network interfaces | Subnets                            |
| Main purpose | Protect individual resources             | Add subnet-level traffic filtering |

### 🧠 Easy Way to Remember

```text
🔐 Security Group
        ↓
Protects the resource

🛡️ Network ACL
        ↓
Protects the subnet
```

---

# 🌐 How Security Groups and NACLs Work Together

Security Groups and Network ACLs are not alternatives. They can work together as different layers of network security.

A simplified traffic path can be visualized as:

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

For traffic to reach an EC2 instance, it must pass through the applicable network controls.

This provides a **layered approach to network security**.

---

# 💡 Real-World Example

Suppose I deploy a simple website on an EC2 instance.

My setup might look like this:

```text
                 🌐 Internet
                      │
                      ▼
              🛡️ Network ACL
                      │
                      ▼
                 🌍 Subnet
                      │
                      ▼
              🔐 Security Group
                      │
                      ▼
                🖥️ EC2 Server
                      │
                      ▼
                🌐 Web Application
```

I could configure the Security Group to allow:

```text
HTTP  → 80
HTTPS → 443
SSH   → 22
```

For production environments, SSH access should generally be restricted rather than opened to the entire internet.

The NACL could provide another layer of subnet-level filtering.

---

# 🔎 A Simple Comparison

Think about a building:

```text
🏢 Building
│
├── 🛡️ NACL
│      → Controls access to the building area
│
└── 🔐 Security Group
       → Controls access to a specific room/resource
```

This analogy helped me understand the difference:

> **NACL = subnet-level protection**

> **Security Group = resource-level protection**

---

# 🧠 What I Learned Today

Today I learned:

* 🔐 What Security Groups are
* 📥 How inbound rules work
* 📤 How outbound rules work
* 🛡️ What Network ACLs are
* 🌍 How NACLs work at the subnet level
* 🔄 Stateful vs stateless network filtering
* ⚖️ Differences between Security Groups and NACLs
* 🔢 How NACL rule numbers are evaluated
* 🔗 How Security Groups and NACLs work together
* 🔒 Basic network security best practices

The most important concepts I learned are:

```text
🔐 Security Group
→ Resource-level security
→ Stateful
→ Allow rules

🛡️ Network ACL
→ Subnet-level security
→ Stateless
→ Allow and deny rules
→ Rules evaluated by number
```

---

# 🚀 Practical Example

If I am running a web server on AWS, I can think about the traffic like this:

```text
                   🌐 User
                      │
                      │ HTTPS :443
                      ▼
              🛡️ Network ACL
                      │
                      ▼
                 🌍 Subnet
                      │
                      ▼
              🔐 Security Group
                      │
                      ▼
                🖥️ EC2 Server
                      │
                      ▼
                🌐 Web Application
```

This shows how multiple security controls can work together to protect an AWS environment.

---

# 🎯 Key Takeaway

The biggest lesson from today is that **AWS network security works in layers**.

A Security Group focuses on protecting resources, while a Network ACL provides filtering at the subnet level.

Understanding both is important before deploying real applications on AWS.

> **Security Group → Resource-level + Stateful**

> **Network ACL → Subnet-level + Stateless**

---

# 🚀 Day 6 Complete!

Today I learned how **Security Groups and Network ACLs** control network traffic in AWS and how they can be used together as layers of network security.

This knowledge will help me configure AWS infrastructure more securely as I continue learning about **EC2, VPC, databases, web servers, and application deployment**.

My AWS learning journey continues:

> **Learn → Practice → Secure → Build → Deploy 🚀**

---
