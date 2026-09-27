# 🔒 Day 12 – AWS Security & Best Practices

**Date:** October 4, 2026
**Topic:** AWS Security & Best Practices

Today I learned about **AWS security** and some important best practices for protecting AWS resources, applications, and data.

I focused on **IAM, least privilege, MFA, security groups, encryption, monitoring, and secure access**.

---

# 🔐 What is AWS Security?

AWS security is the process of protecting my cloud resources, applications, accounts, and data from unauthorized access and security risks.

A simple security approach is:

```text
Identity
   ↓
Authentication
   ↓
Authorization
   ↓
Network Security
   ↓
Data Protection
   ↓
Monitoring
```

---

# 👤 IAM – Identity and Access Management

**AWS IAM** helps me control who can access AWS resources and what actions they are allowed to perform.

IAM includes important concepts such as:

* Users
* Groups
* Roles
* Policies
* Permissions

A simple example:

```text
IAM User
   ↓
IAM Policy
   ↓
Permission
   ↓
AWS Resource
```

---

# 🔑 Users, Groups and Roles

### IAM User

An IAM user represents an identity that can have AWS permissions.

### IAM Group

A group allows permissions to be managed for multiple IAM users.

### IAM Role

A role provides permissions that can be assumed by trusted identities or AWS services.

For example:

```text
EC2
 ↓
IAM Role
 ↓
Permission
 ↓
S3
```

This can allow an EC2 application to access S3 without putting long-term access keys inside the application.

---

# 🛡️ Principle of Least Privilege

One of the most important security concepts I learned today is **least privilege**.

It means giving an identity only the permissions it actually needs.

For example, if an application only needs to read objects from a specific S3 location, I should avoid giving it unnecessary permissions such as deleting all objects.

```text
Too Many Permissions
        ↓
   Higher Risk

Required Permissions
        ↓
    Lower Risk
```

---

# 🔐 Multi-Factor Authentication

I also learned about **MFA (Multi-Factor Authentication)**.

MFA adds an additional authentication factor to help protect an account.

The basic idea is:

```text
Password
   +
MFA
   ↓
Additional Account Protection
```

Using MFA is especially important for accounts with significant privileges.

---

# 👑 Protecting the Root User

The AWS account root user has extensive privileges.

I learned that I should avoid using the root user for normal daily AWS tasks.

Instead, I should use appropriate IAM identities and roles for regular operations.

For the root user, important security practices include:

* Enable MFA
* Avoid using it for everyday tasks
* Keep credentials secure
* Use it only when root-level actions are required

---

# 🌐 Security Groups

I previously learned about **Security Groups** on Day 6.

A Security Group acts as a virtual firewall for supported AWS resources such as EC2.

For example:

```text
Internet
   ↓
Security Group
   ↓
EC2
```

I can control inbound and outbound traffic using rules.

Common application ports include:

```text
22  → SSH
80  → HTTP
443 → HTTPS
```

I should avoid opening unnecessary ports to the internet.

---

# 🚧 Network ACLs

A **Network Access Control List (NACL)** provides another layer of network traffic control at the subnet level.

A simplified architecture is:

```text
Internet
   ↓
NACL
   ↓
Subnet
   ↓
Security Group
   ↓
EC2
```

Security Groups and NACLs can work together to provide layered network controls.

---

# 🔒 HTTPS and Encryption

I also learned why encryption is important.

### Data in Transit

Data moving between systems can be protected using encryption such as **HTTPS/TLS**.

```text
User
 ↓
HTTPS
 ↓
Application
```

### Data at Rest

Data stored in services such as databases and storage systems can also be encrypted.

```text
Application
 ↓
Encrypted Storage
 ↓
Data
```

Encryption helps protect sensitive information if unauthorized access occurs.

---

# 🗝️ AWS Secrets and Credentials

I learned that sensitive information such as passwords, API keys, and access credentials should not be hard-coded into application source code.

Instead of:

```text
password = "my-secret-password"
```

I should use appropriate secret or configuration management mechanisms.

For AWS workloads, services such as **AWS Secrets Manager** and **AWS Systems Manager Parameter Store** can be used depending on the requirement.

---

# 📦 S3 Security

Amazon S3 can store important application data, so I learned some basic S3 security practices.

Important points include:

* Keep buckets private unless public access is intentionally required
* Use appropriate IAM permissions
* Avoid unnecessary public access
* Enable encryption where appropriate
* Review bucket policies carefully

A simple approach is:

```text
Application
    ↓
IAM Permission
    ↓
Private S3 Bucket
    ↓
Protected Data
```

---

# 📊 CloudWatch Monitoring

From **Day 10**, I learned about Amazon CloudWatch.

Today I connected monitoring with security.

CloudWatch can help me monitor AWS resources and applications through metrics and logs.

```text
AWS Resource
     ↓
CloudWatch
     ↓
Metrics + Logs
     ↓
Monitoring
     ↓
Investigation
```

Monitoring can help identify unusual activity and application problems.

---

# 🚨 AWS CloudTrail

I also learned about **AWS CloudTrail**.

CloudTrail records information about API activity in an AWS account.

A simple workflow is:

```text
AWS API Activity
      ↓
   CloudTrail
      ↓
     Event
      ↓
Audit / Investigation
```

CloudTrail can be useful when I need to understand who performed an action, what action occurred, and when it happened.

---

# 🧱 Defense in Depth

Another important concept I learned is **defense in depth**.

Instead of depending on a single security control, I can use multiple layers.

```text
        IAM
         ↓
       MFA
         ↓
   Security Group
         ↓
       NACL
         ↓
     Encryption
         ↓
     Monitoring
```

If one layer is misconfigured, other controls can provide additional protection.

---

# 🔄 Regular Security Review

AWS security is not something I configure only once.

I should regularly review:

* IAM permissions
* Security Group rules
* NACL rules
* S3 access
* Encryption settings
* Logs
* Credentials
* Unused resources
* Account activity

Regular reviews can help identify unnecessary access and configuration problems.

---

# 🧠 Important AWS Security Best Practices

Today I created a simple checklist for myself:

### ✅ Use MFA

Protect important accounts with multi-factor authentication.

### ✅ Use Least Privilege

Give only the permissions that are required.

### ✅ Protect Credentials

Never expose passwords, access keys, or secrets in source code.

### ✅ Secure Network Access

Allow only the ports and traffic that are actually required.

### ✅ Use Encryption

Protect sensitive data in transit and at rest where appropriate.

### ✅ Monitor Activity

Use services such as CloudWatch and CloudTrail for monitoring and auditing.

### ✅ Keep Resources Private

Do not make resources publicly accessible unless there is a specific requirement.

### ✅ Review Permissions

Regularly check permissions and remove unnecessary access.

---

# 📊 AWS Security Layers

The security concepts I learned can be organized like this:

```text
┌─────────────────────────────┐
│        AWS Account          │
├─────────────────────────────┤
│ IAM + MFA                   │
├─────────────────────────────┤
│ IAM Roles + Policies        │
├─────────────────────────────┤
│ Security Groups + NACLs     │
├─────────────────────────────┤
│ Encryption + Secrets        │
├─────────────────────────────┤
│ CloudTrail + CloudWatch     │
└─────────────────────────────┘
```

---

# 📚 What I Learned Today

Today I learned:

* AWS security fundamentals
* IAM users, groups, roles, and policies
* Principle of least privilege
* MFA
* Root user protection
* Security Groups
* Network ACLs
* HTTPS and encryption
* S3 security
* Secrets management
* CloudWatch monitoring
* AWS CloudTrail
* Defense in depth
* Regular security reviews

---

# 🎯 My Security Checklist

Before deploying an application, I want to ask myself:

```text
☐ Is MFA enabled?
☐ Are permissions limited?
☐ Are unnecessary ports closed?
☐ Are secrets protected?
☐ Is sensitive data encrypted?
☐ Is unnecessary public access disabled?
☐ Is monitoring configured?
☐ Is AWS activity being audited?
☐ Have unused permissions been removed?
```

---

# 🚀 Day 12 Complete

Today I learned that AWS security is not just one service. It is a combination of **identity management, access control, network security, encryption, monitoring, and regular security reviews**.

The main concept I learned today was:

```text
Secure → Monitor → Review → Improve
```

**Learn → Secure → Monitor → Improve → Deploy Safely 🔒🚀**
