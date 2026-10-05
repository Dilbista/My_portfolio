Dil Bista — Developer Portfolio

A modern and responsive developer portfolio built with React 19 and Vite. The portfolio showcases my professional profile, technical skills, projects, experience, and other development work through a clean and interactive user interface.

The project is designed with a modern frontend architecture and uses GitHub Actions for CI/CD, allowing the application to be automatically validated and built whenever changes are pushed to the repository.

🚀 Live Portfolio

Portfolio: https://bistdil.com.np

Repository: "Dilbista/My_portfolio" (https://github.com/Dilbista/My_portfolio)

---

✨ Features

- Modern and responsive portfolio interface
- React 19 component-based architecture
- Fast development and production builds with Vite
- Responsive design for desktop, tablet, and mobile devices
- Developer profile and introduction
- Skills and technology showcase
- Project portfolio
- Professional experience section
- Contact section
- React Router based navigation
- Markdown content support
- React Icons integration
- Optimized production build
- GitHub Actions CI/CD workflow
- Linux/Apache deployment support

---

🛠️ Technology Stack

Frontend

- React 19
- JavaScript
- HTML5
- CSS3
- React Router
- React Icons
- React Markdown

Build Tool

- Vite

Code Quality

- Oxlint
- ESLint-style linting workflow through Oxlint

Version Control

- Git
- GitHub

CI/CD

- GitHub Actions

Deployment

- Apache2
- Linux
- Git-based deployment

---

📁 Project Structure

My_portfolio/
│
├── .github/
│   └── workflows/
│       └── CI/CD workflow files
│
├── public/
│   └── Public assets and files
│
├── src/
│   ├── Components
│   ├── Pages
│   ├── Assets
│   └── Application source code
│
├── .gitignore
├── .oxlintrc.json
├── index.html
├── package.json
├── package-lock.json
├── vite.config.js
├── wrangler.jsonc
└── README.md

The repository currently follows a React/Vite structure with "src", "public", Vite configuration, package management files, and a GitHub Actions workflow directory.

---

💻 Requirements

Before running the project, make sure the following are installed:

- Node.js
- npm
- Git

Check your installed versions:

node -v
npm -v
git --version

---

⚙️ Run Locally

1. Clone the repository

git clone https://github.com/Dilbista/My_portfolio.git

2. Enter the project directory

cd My_portfolio

3. Install dependencies

npm install

4. Start the development server

npm run dev

Vite will provide a local development URL in the terminal.

---

🔨 Available Commands

The project provides the following npm scripts:

npm run dev

Starts the Vite development server.

npm run build

Creates an optimized production build.

npm run preview

Previews the production build locally.

npm run lint

Runs Oxlint to check the project source code.

These scripts are defined in the project's "package.json".

---

🔄 CI/CD with GitHub Actions

This project uses GitHub Actions to automate the development workflow.

The CI/CD process is intended to ensure that changes pushed to the repository are checked and the production application can be successfully built before deployment.

CI/CD workflow

Developer
    │
    │ git push
    ▼
GitHub Repository
    │
    ▼
GitHub Actions
    │
    ├── Checkout source code
    │
    ├── Setup Node.js
    │
    ├── Install dependencies
    │
    ├── Run lint checks
    │
    └── Build application
    │
    ▼
Production-ready build
    │
    ▼
Deployment Server

This provides a more professional workflow than manually building and uploading the application after every change.

---

🌐 Apache Deployment

The application can be deployed on a Linux server using Apache2.

1. Update the server

sudo apt update
sudo apt upgrade -y

2. Install Apache

sudo apt install apache2 -y

3. Install Git

sudo apt install git -y

4. Navigate to Apache's web directory

cd /var/www/html

5. Remove the existing application

Only do this if the directory contains an old deployment that you no longer need:

sudo rm -rf ./*

6. Clone the repository

sudo git clone https://github.com/Dilbista/My_portfolio.git .

7. Build the React application

For production deployment, install Node.js/npm on the server and run:

npm install
npm run build

The production output will be generated in:

dist/

The contents of "dist/" should then be served by Apache.

---

🔁 Updating the Deployment

When new changes are pushed to GitHub, the server can be updated using:

cd /var/www/html

sudo git pull origin main

npm install

npm run build

For a fully automated deployment, GitHub Actions can be configured to build the application and deploy the generated files to the server.

---

🧪 Development Workflow

A typical development workflow for this project is:

# Create a feature branch
git checkout -b feature/update-portfolio

# Make changes
# Test locally

npm run lint
npm run build

# Commit changes
git add .
git commit -m "Update portfolio"

# Push branch
git push origin feature/update-portfolio

After reviewing the changes, merge the branch into "main".

The GitHub Actions pipeline can then validate and build the updated application.

---

📦 Production Build

To create a production build:

npm run build

Vite generates the optimized application inside:

dist/

The build should be tested before deployment:

npm run preview

---

🔐 Security Notes

- Do not commit passwords, API keys, private keys, or server credentials.
- Store sensitive deployment credentials in GitHub Actions Secrets.
- Keep ".gitignore" updated.
- Never place server passwords directly inside workflow files.
- Use SSH keys instead of exposing server credentials in the repository.

---

📌 Future Improvements

- Automated deployment from GitHub Actions to Apache
- Custom domain configuration
- HTTPS with Let's Encrypt
- Performance optimization
- SEO improvements
- Automated dependency/security checks
- Improved accessibility
- Portfolio analytics

---

👨‍💻 Author

Dil Bista

BCA Graduate | Backend Developer | React Developer | Laravel Developer

Interested in:

- Web Development
- Laravel
- React
- REST APIs
- DevOps & CI/CD
- Linux
- Cloud Deployment
- Software Engineering

---

📄 License

This project is maintained as a personal developer portfolio.
