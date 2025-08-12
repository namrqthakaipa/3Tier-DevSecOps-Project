# 🛡️ 3-Tier-DevSecOps-Pipeline 

<div align="center">

![DevSecOps Banner](https://img.shields.io/badge/DevSecOps-3--Tier--Pipeline-red?style=for-the-badge&logo=shield&logoColor=white)
![Node.js](https://img.shields.io/badge/Node.js-43853D?style=for-the-badge&logo=node.js&logoColor=white)
![MySQL](https://img.shields.io/badge/MySQL-4479A1?style=for-the-badge&logo=mysql&logoColor=white)
![Kubernetes](https://img.shields.io/badge/Kubernetes-326CE5?style=for-the-badge&logo=kubernetes&logoColor=white)
![AWS](https://img.shields.io/badge/AWS%20EKS-FF9900?style=for-the-badge&logo=amazon-aws&logoColor=white)

**🚀 End-to-End DevSecOps Pipeline with Multi-Layer Security Scanning & Automated EKS Deployment**

*Production-ready 3-tier application with integrated security at every stage*

</div>

---

## 🎯 Project Overview

**3-Tier-DevSecOps-Pipeline** is a complete enterprise-grade implementation showcasing security-first development practices. This project demonstrates how to build, secure, and deploy a full-stack application with automated vulnerability detection and zero-trust deployment strategies on AWS EKS.

### 🏗️ **3-Tier Architecture**
```
🌐 Frontend Layer    →    Node.js Express Application
⚙️ Backend Layer     →    RESTful API with Business Logic  
🗄️ Database Layer    →    MySQL with Encrypted Connections
```

---

## 🛠️ **Tech Stack**

<table>
<tr>
<td>

**Application Stack**
- Node.js 18 + Express.js
- MySQL 8.0 Database
- Docker Containerization
- Kubernetes Orchestration

</td>
<td>

**Security Tools** 🛡️
- **GitLeaks** - Secret Detection
- **SonarQube** - Code Analysis  
- **Trivy** - Vulnerability Scanning
- **AWS Secrets Manager**

</td>
<td>

**Infrastructure**
- AWS EKS Cluster
- Docker Registry (ECR)
- GitHub Actions CI/CD
- Terraform IaC

</td>
</tr>
</table>

---

## 🔒 **Security-First DevSecOps Pipeline**

```mermaid
graph LR
    A[👨‍💻 Code] --> B[🔍 GitLeaks]
    B --> C[📊 SonarQube] 
    C --> D[🐳 Docker Build]
    D --> E[🛡️ Trivy Scan]
    E --> F[☸️ EKS Deploy]
    
    style A fill:#e1f5fe
    style B fill:#fff3e0
    style C fill:#f3e5f5
    style D fill:#e8f5e8
    style E fill:#ffebee
    style F fill:#e0f2f1
```

### **🚨 Security Gates**
- **Pre-commit**: Secret detection with GitLeaks
- **Build-time**: Code quality analysis via SonarQube  
- **Container**: Vulnerability scanning using Trivy
- **Runtime**: Kubernetes security policies & network isolation

---

## 🚀 **Quick Start**

### **Prerequisites**
```bash
✅ AWS CLI configured
✅ Docker & kubectl installed  
✅ Node.js 18+
```

### **1️⃣ Setup & Run**
```bash
# Clone repository
git clone https://github.com/namrqthakaipa/3Tier-DevSecOps-Project.git
cd 3Tier-DevSecOps-Project

# Install dependencies
cd api && npm install
cd ../client && npm install

# Start api server
cd api
npm start

# Start react server
cd client
npm start

```

### **2️⃣ EKS Deployment**
```bash
# 🔧 Complete EKS cluster setup guide
📖 Refer: eks_setup.md
```

### **3️⃣ Deploy Pipeline**
```bash
# Trigger automated deployment
git push origin main
```
---

## 📊 **Key Features**

<div align="center">

| 🛡️ **Security** | 🚀 **Performance** | 📈 **Monitoring** |
|:---:|:---:|:---:|
| Zero secrets in code | < 200ms API response | Real-time dashboards |
| Automated vuln scanning | Zero-downtime deployments | CloudWatch integration |
| Network micro-segmentation | Auto-scaling pods | Alert notifications |

</div>

---


## 🤝 **Getting Started**

1. **⭐ Star this repo** 
2. **🍴 Fork** 
3. **📖 Follow** 
4. **🚀 Deploy** 

---

<div align="center">


**Connect with me:**

[![LinkedIn](https://img.shields.io/badge/LinkedIn-0077B5?style=flat&logo=linkedin&logoColor=white)](https://www.linkedin.com/in/namratha-kaipa-m/)

[![GitHub](https://img.shields.io/badge/GitHub-100000?style=flat&logo=github&logoColor=white)](https://github.com/namrqthakaipa)

---

*🔒 Securing applications, one pipeline at a time | Built by Namratha Kaipa - DevSecOps Engineer*

</div>
