# ⚙️ Day 9 – AWS Lambda

**Date:** October 1, 2026
**Topic:** AWS Lambda

Today I started learning about **AWS Lambda**, a serverless computing service that allows me to run code without managing servers.

I learned what Lambda is, how functions work, how to create a Lambda function, test it, and understand some common use cases.

---

## ⚙️ What is AWS Lambda?

**AWS Lambda** is a serverless compute service that runs my code in response to events.

With Lambda, I don't need to create or manage a server manually. AWS manages the underlying infrastructure for me.

The basic idea is:

```text
Event
  ↓
AWS Lambda
  ↓
My Function
  ↓
Response
```

For example, a Lambda function can run when a file is uploaded to Amazon S3, an API request is received, or a scheduled event occurs.

---

## 🖥️ Traditional Server vs Lambda

### Traditional Server

```text
Create Server
     ↓
Install Software
     ↓
Configure Server
     ↓
Deploy Application
     ↓
Maintain Server
```

### AWS Lambda

```text
Write Function
     ↓
Deploy Function
     ↓
AWS Runs It
     ↓
AWS Manages Infrastructure
```

This makes Lambda useful for applications where I want to run small pieces of code without managing servers.

---

# 🚀 Creating My First Lambda Function

I practiced creating a Lambda function from the AWS Console.

### 1. Search for Lambda

I opened the AWS Management Console and searched for **Lambda**.

![Search Lambda](/images/aws/day9/01-search-lambda.png)

---

### 2. Open Lambda Dashboard

I opened the Lambda service and reached the Lambda dashboard.

![Lambda Dashboard](/images/aws/day9/02-lambda-dashboard.png)

---

### 3. Click Create Function

I clicked **Create function** to create my first Lambda function.

![Create Function](/images/aws/day9/03-create-function.png)

---

### 4. Choose Author from Scratch

I selected **Author from scratch**.

Then I entered a function name.

For example:

```text
my-first-lambda
```

![Author from Scratch](/images/aws/day9/04-author-from-scratch.png)

---

### 5. Select Runtime

I selected **Python** as the runtime for my first Lambda function.

![Select Runtime](/images/aws/day9/05-select-runtime.png)

Lambda supports multiple programming runtimes, depending on the available AWS Lambda runtime options.

---

### 6. Create the Function

After configuring the basic settings, I clicked **Create function**.

![Create Lambda Function](/images/aws/day9/06-create-function.png)

AWS then created my Lambda function.

---

# 🧑‍💻 My First Lambda Code

After creating the function, I opened the code editor.

I used a simple Python function:

```python
def lambda_handler(event, context):
    return {
        "statusCode": 200,
        "body": "Hello from AWS Lambda!"
    }
```

Here:

* `event` contains information passed to the function.
* `context` provides information about the Lambda execution environment.
* `statusCode` represents the response status.
* `body` contains the response message.

---

# 🧪 Testing My Lambda Function

After writing the code, I created a test event and executed the function.

![Test Lambda Function](/images/aws/day9/07-test-lambda.png)

When the function executed successfully, I received a response similar to:

```json
{
  "statusCode": 200,
  "body": "Hello from AWS Lambda!"
}
```

This helped me understand the basic Lambda execution process.

---

# ⚡ How AWS Lambda Works

The Lambda workflow can be understood like this:

```text
Event
  ↓
Lambda Function Triggered
  ↓
AWS Creates Execution Environment
  ↓
Code Runs
  ↓
Response
```

The event can come from different AWS services or applications.

---

# 🎯 Lambda Triggers

A Lambda function can be triggered by different events.

Some examples include:

* Amazon S3
* Amazon API Gateway
* Amazon EventBridge
* Amazon SQS
* Amazon SNS
* Scheduled events

For example:

```text
User Uploads File
        ↓
       S3
        ↓
     Lambda
        ↓
Process File
```

---

# 🌐 Lambda and API Gateway

One important use case I learned is connecting Lambda with **Amazon API Gateway**.

The basic architecture is:

```text
User
 ↓
API Gateway
 ↓
Lambda
 ↓
Application Logic
 ↓
Response
```

This can be used to create serverless APIs without running a traditional web server.

---

# 📦 Lambda and S3

Lambda can also work with Amazon S3.

For example:

```text
User Uploads Image
       ↓
      S3
       ↓
    Lambda
       ↓
Process Image
```

This can be useful for automatic file processing.

---

# 💰 Lambda Pricing Concept

One important thing I learned is that Lambda uses a **pay-for-use** model.

Instead of continuously running a server, Lambda charges are based on factors such as function requests and execution duration, subject to AWS pricing and the applicable free tier.

This makes the serverless model useful for workloads that don't need a server running continuously.

---

# 🔐 Lambda Permissions

Lambda functions often need permission to access other AWS services.

AWS uses **IAM roles and policies** to control what a Lambda function can access.

For example:

```text
Lambda
  ↓
IAM Role
  ↓
Permission
  ↓
S3 / DynamoDB / Other AWS Services
```

I learned that permissions should only provide the access required by the function.

---

# 🧠 Important Lambda Concepts

### Function

The code that Lambda executes.

### Runtime

The environment used to run the function, such as Python.

### Event

Information that triggers or is passed to the Lambda function.

### Trigger

The event source that causes a Lambda function to run.

### Execution Role

An IAM role that gives the Lambda function permission to access AWS resources.

---

# 🆚 EC2 vs Lambda

| EC2                         | Lambda                            |
| --------------------------- | --------------------------------- |
| Virtual server              | Serverless function               |
| I manage the server         | AWS manages infrastructure        |
| Can run continuously        | Runs when invoked                 |
| More server configuration   | Less infrastructure management    |
| Suitable for many workloads | Useful for event-driven workloads |

---

# 🌎 Real-World Lambda Examples

I learned that Lambda can be used for many different tasks:

```text
API Request
    ↓
  Lambda
    ↓
Process Request
```

```text
S3 File Upload
    ↓
  Lambda
    ↓
Process File
```

```text
Scheduled Event
    ↓
  Lambda
    ↓
Run Task
```

```text
Database/Event
    ↓
  Lambda
    ↓
Perform Action
```

---

# 📚 What I Learned Today

Today I learned:

* What AWS Lambda is
* What serverless computing means
* How to create a Lambda function
* Lambda runtimes
* Lambda handler
* Events and triggers
* Testing a Lambda function
* Lambda and API Gateway
* Lambda and S3
* IAM execution roles
* Basic Lambda pricing concepts
* Difference between EC2 and Lambda

---

# 🎯 My Next Step

My next goal is to create a practical serverless application using:

```text
API Gateway
      ↓
AWS Lambda
      ↓
Database
      ↓
Response
```

I want to understand how serverless applications work from development to deployment.

---

# 🚀 Day 9 Complete

Today I learned the basics of **AWS Lambda** and understood how I can run code without managing a traditional server.

The main concept I learned today was:

```text
Event → Lambda → Function → Response
```

**Learn → Practice → Build → Deploy → Improve 🚀**
