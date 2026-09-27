---

title: "Day 7: Route 53 & DNS"
date: "September 29, 2026"
category: "AWS"
description: "Today I practiced Amazon Route 53 and learned how DNS, hosted zones, and DNS records connect a domain name to an application or server."
------------------------------------------------------------------------------------------------------------------------------------------------------

# 🌍 Day 7: Route 53 & DNS

Today I continued my **AWS learning journey** by practicing **Amazon Route 53 and DNS**.

After learning about **EC2, VPC, and networking**, I wanted to understand how a domain name can be connected to a website or application.

---

# 🌐 What is DNS?

**DNS (Domain Name System)** converts domain names into information that computers use to find services on a network.

For example:

```text
example.com
     ↓
    DNS
     ↓
IP Address
     ↓
Web Server
```

Instead of remembering an IP address, I can use an easy-to-remember domain name such as:

```text
example.com
```

---

# ☁️ What is Amazon Route 53?

**Amazon Route 53** is an AWS service that provides DNS management and domain-related services.

I can use Route 53 to:

* 🌐 Manage DNS
* 📝 Create DNS records
* 🏠 Manage hosted zones
* 🔗 Connect domains to AWS resources
* ❤️ Configure DNS health checks and routing features

In simple words:

> **Route 53 helps me manage DNS and connect my domain name to my application or AWS resource.**

---

# 🚀 My Route 53 Practice

## 1. Search for Route 53

First, I opened the **AWS Management Console**.

I used the search bar and searched for:

```text
Route 53
```

Then I selected **Route 53** from the AWS services.

![Search Route 53](/images/aws/day7/01-search-route53.png)

---

## 2. Open Route 53 Dashboard

After opening Route 53, I reached the **Route 53 dashboard**.

From here, I could access DNS management, hosted zones, health checks, and other Route 53 features.

![Route 53 Dashboard](/images/aws/day7/02-route53-dashboard.png)

---

## 3. Open Hosted Zones

Next, I opened **Hosted zones**.

A hosted zone contains the DNS records for a domain.

For example:

```text
example.com
     │
     └── Hosted Zone
           │
           ├── A Record
           ├── CNAME Record
           └── MX Record
```

![Hosted Zones](/images/aws/day7/03-hosted-zones.png)

---

## 4. Create a Hosted Zone

I clicked **Create hosted zone** to configure DNS for my domain.

I entered my domain name, for example:

```text
example.com
```

Then I selected the appropriate hosted zone type.

For a website that needs to be publicly accessible through DNS, I would use a **Public hosted zone**.

![Create Hosted Zone](/images/aws/day7/04-create-hosted-zone.png)

---

## 5. Hosted Zone Created

After creating the hosted zone, Route 53 automatically provided DNS records such as:

* NS — Name Server
* SOA — Start of Authority

The hosted zone is where I can manage additional DNS records for my domain.

![Hosted Zone Records](/images/aws/day7/05-hosted-zone-records.png)

---

# 📝 Understanding DNS Records

Next, I learned about the different DNS records I can create.

## 6. Create an A Record

An **A record** maps a domain name to an IPv4 address.

For example:

```text
example.com
      ↓
203.0.113.10
```

I can create an A record when I want my domain to point to an IPv4 address.

![Create A Record](/images/aws/day7/06-create-a-record.png)

> The IP address above is only an example. I would use the actual destination required for my own website or application.

---

## 7. CNAME Record

I also learned about the **CNAME record**.

A CNAME record points one domain name to another domain name.

For example:

```text
www.example.com
        ↓
example.com
```

This is useful when I want a subdomain such as `www` to point to another domain name.

![CNAME Record](/images/aws/day7/07-cname-record.png)

---

## 8. AAAA Record

I also learned about the **AAAA record**.

An AAAA record maps a domain name to an **IPv6 address**.

The basic idea is:

```text
example.com
      ↓
IPv6 Address
```

This is different from an A record, which uses IPv4.

---

## 9. MX Record

I learned that **MX records** are used for email routing.

An MX record tells DNS which mail servers handle email for a domain.

For example:

```text
example.com
      ↓
MX Record
      ↓
Mail Server
```

I learned that DNS records are not only used for websites but can also support other services such as email.

---

# 🔗 Connecting a Domain to a Server

I learned the basic idea of connecting a domain name to a server.

For example, if my application is running on an EC2 server:

```text
🌐 User
   ↓
mydomain.com
   ↓
🔎 DNS
   ↓
☁️ Route 53
   ↓
📝 DNS Record
   ↓
🖥️ EC2
   ↓
💻 My Application
```

This helped me understand how a domain name can lead users to my application.

---

# ⚠️ Important: Nameservers

I also learned about **Name Servers (NS)**.

When a domain is registered through a different domain registrar, I may need to update the domain's **nameserver settings** to the nameservers provided by my Route 53 public hosted zone.

The basic flow is:

```text
Domain Registrar
       ↓
Route 53 Nameservers
       ↓
Route 53 Hosted Zone
       ↓
DNS Records
       ↓
My Application
```

This is an important step when the domain is registered outside Route 53.

---

# 🧠 DNS Resolution

I learned the basic idea of what happens when I enter a domain into a browser.

```text
👤 I enter:

mydomain.com

       ↓

🔎 DNS Lookup

       ↓

☁️ Route 53

       ↓

📝 DNS Record

       ↓

📍 Destination

       ↓

🖥️ My Application
```

The browser can then connect to the destination associated with the DNS response.

---

# 🔐 Route 53 and AWS Services

I also learned that Route 53 can work with different AWS resources and routing configurations.

For example:

```text
🌐 Domain
   ↓
☁️ Route 53
   ↓
┌───────────────┐
│               │
▼               ▼
🖥️ EC2       ⚖️ Load Balancer
│               │
▼               ▼
💻 App        💻 App
```

This showed me that DNS is an important part of deploying real-world applications.

---

# 🧠 What I Learned Today

Today I learned:

* 🌐 What DNS is
* ☁️ What Amazon Route 53 is
* 🏠 Hosted Zones
* 📝 DNS Records
* 🔗 A Records
* 🔗 AAAA Records
* 🔗 CNAME Records
* 📧 MX Records
* 🔑 Name Servers
* 🌍 Public DNS
* 🔗 How domains connect to applications
* 🖥️ How Route 53 can work with EC2

The easiest way I remember it is:

```text
🌐 Domain
    ↓
🔎 DNS
    ↓
☁️ Route 53
    ↓
📝 DNS Record
    ↓
🖥️ Application
```

---

# 🚀 Day 7 Complete!

Today I practiced **Amazon Route 53 and DNS** and understood how domain names can be connected to applications and AWS resources.

After learning **EC2 → VPC → Security Groups → Route 53**, I am getting a better understanding of how the different parts of a cloud application work together.

> **Learn → Practice → Connect → Deploy → Improve 🚀**

---
