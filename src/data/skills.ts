export interface Skill {
  id: string;
  name: string;
  description: string;
}

export interface SkillGroup {
  title: string;
  skills: Skill[];
}

export const coreSkills: SkillGroup[] = [
  {
    title: "Cloud Platforms",
    skills: [
      {
        id: "aws",
        name: "AWS (EC2, S3, ECS, Lambda, SQS, EKS, IAM, CloudWatch)",
        description: "Designed S3 backup and disaster recovery strategies using versioning and cross-region replication, reducing recovery time by 92%. Provisioned and maintained infrastructure on AWS using CloudFormation and Terraform, lowering provisioning effort by 40%. Triaged CloudWatch alerts to ensure timely incident resolution within SLAs."
      },
      {
        id: "azure",
        name: "Azure (AKS, Key Vaults, Pipelines, Azure Monitor)",
        description: "Managed enterprise workloads on Azure Kubernetes Service (AKS) and OpenShift, performing zero-downtime upgrades and capacity optimization to maintain 99.9% uptime. Provisioned and maintained Azure Key Vaults for secrets and credential management across platform migration lifecycles."
      },
      {
        id: "multicloud",
        name: "Multi-Cloud & Hybrid Architectures",
        description: "Architected secure AWS and Azure hybrid cloud environments with integrated identity management, secure networking, and workload portability, improving infrastructure resilience by 90% and enabling seamless cross-platform deployments."
      },
    ],
  },
  {
    title: "IaC & Automation",
    skills: [
      {
        id: "terraform",
        name: "Terraform & Pulumi",
        description: "Owned end-to-end infrastructure provisioning across development, staging, and production environments using Terraform. Used Pulumi for programmatic infrastructure definition to support cloud-native deployments with developer-friendly workflows."
      },
      {
        id: "iac-suite",
        name: "CloudFormation, Ansible & Policy-as-Code (OPA, Sentinel)",
        description: "Developed reusable AWS CloudFormation templates to standardize infrastructure provisioning, reducing setup time from days to hours. Enforced Policy-as-Code guardrails using OPA and Sentinel to ensure compliant deployments. Leveraged Ansible for configuration management and system automation."
      },
      {
        id: "gitops",
        name: "GitOps (ArgoCD, FluxCD)",
        description: "Implemented GitOps automation using ArgoCD and Python-based validation scripts, eliminating manual deployment steps and reducing configuration drift by 35% across Kubernetes environments. Used FluxCD for continuous delivery in multi-cluster environments."
      },
    ],
  },
  {
    title: "Containers & Orchestration",
    skills: [
      {
        id: "k8s",
        name: "Kubernetes (EKS, AKS, OpenShift)",
        description: "Managed enterprise workloads on AKS and OpenShift with zero-downtime upgrades, maintaining 99.9% uptime. Optimized workloads through CPU/memory right-sizing and autoscaling strategies, achieving a 15% reduction in infrastructure costs. Ran fault injection tests using LitmusChaos to validate SLO compliance."
      },
      {
        id: "docker-helm",
        name: "Docker, Helm & Kustomize",
        description: "Containerized applications and managed complex Kubernetes deployments using Helm charts and Kustomize overlays. Resolved Twistlock container security scan issues by fixing vulnerable dependencies and enforcing compliance policies in CI pipelines."
      },
    ],
  },
  {
    title: "CI / CD",
    skills: [
      {
        id: "gh-actions",
        name: "GitHub Actions & Jenkins",
        description: "Migrated CI/CD pipelines from Azure Pipelines to GitHub Actions, improving pipeline consistency and reducing build failures by 25%. Built and maintained automated testing and deployment workflows using Jenkins for legacy pipeline support."
      },
      {
        id: "gitlab-cicd",
        name: "GitLab CI/CD & Azure DevOps Pipelines",
        description: "Created end-to-end GitLab CI/CD pipelines with Helm-based deployment automation, reducing deployment failures by 45% and shortening release cycles from weekly to daily. Managed Azure DevOps pipelines for legacy enterprise systems."
      },
      {
        id: "spinnaker",
        name: "Spinnaker & AWS CodePipeline",
        description: "Leveraged Spinnaker for multi-cloud continuous delivery and canary deployments. Implemented AWS CodePipeline for frontend deployment automation, enabling faster and more consistent production releases."
      },
    ],
  },
  {
    title: "Observability & Reliability",
    skills: [
      {
        id: "prom-grafana",
        name: "Prometheus & Grafana",
        description: "Developed 20+ Grafana dashboards integrated with Prometheus to monitor latency, error rates, saturation, and service health, reducing MTTD by 25%. Tracked SLOs and error budgets to guide release decisions and prevent reliability regressions."
      },
      {
        id: "elk-splunk",
        name: "ELK/EFK Stack & Splunk",
        description: "Built centralized observability solutions integrating infrastructure metrics, logs, and alerts into unified dashboards, reducing incident response time by 87%. Used Splunk for enterprise log aggregation and alerting workflows."
      },
      {
        id: "tracing",
        name: "OpenTelemetry, Jaeger & Zipkin",
        description: "Instrumented distributed services with OpenTelemetry for end-to-end trace collection. Used Jaeger and Zipkin to analyze latency bottlenecks, trace request flows, and diagnose inter-service communication issues in microservice architectures."
      },
      {
        id: "chaos",
        name: "Chaos Engineering (LitmusChaos)",
        description: "Designed and executed 10+ chaos engineering experiments using LitmusChaos to validate fault tolerance, recovery workflows, and system resiliency under node, pod, and network failure scenarios."
      },
    ],
  },
  {
    title: "Security & Compliance (DevSecOps)",
    skills: [
      {
        id: "iam-secrets",
        name: "IAM, KMS, Vault & Secrets Management",
        description: "Enforced least-privilege IAM policies and managed secrets using HashiCorp Vault and Azure Key Vaults. Secured workloads with KMS-based encryption and integrated secrets management into CI/CD pipelines."
      },
      {
        id: "devsecops",
        name: "SAST/DAST (SonarQube, Checkmarx, OWASP ZAP)",
        description: "Integrated SAST and DAST tooling into CI pipelines to catch vulnerabilities early in the development lifecycle. Reviewed container security scans (Trivy, Aqua, Falco) and reduced false positives by 20%, improving signal quality for security teams."
      },
      {
        id: "compliance",
        name: "Zero Trust, SOC2, ISO 27001, NIST 800-53",
        description: "Designed and maintained secure cloud environments aligned with SOC2 standards and NIST 800-53 controls. Applied Zero Trust architecture principles to network segmentation and identity verification across multi-cloud environments."
      },
    ],
  },
  {
    title: "Programming & Scripting",
    skills: [
      {
        id: "languages",
        name: "Python, Bash, Shell & PowerShell",
        description: "Developed Python-based GitOps validation scripts and log processing pipelines. Automated day-to-day operational tasks using PowerShell scripts, improving team productivity by 85%. Wrote Bash/Shell scripts for environment setup, configuration, and CI automation."
      },
      {
        id: "linux-os",
        name: "Linux (Ubuntu, RHEL)",
        description: "Supported Linux-based lab and production environments through system setup, configuration validation, and shell scripting. Experienced with systemd, cron, networking tools, and package management across Ubuntu and RHEL distributions."
      },
    ],
  },
  {
    title: "Databases & Storage",
    skills: [
      {
        id: "relational-db",
        name: "PostgreSQL, MySQL & Azure SQL",
        description: "Optimized PostgreSQL performance through indexing, query tuning, and replication strategies, improving query response times by 91%. Designed database schemas for high-availability and scalability in production environments."
      },
      {
        id: "nosql-cache",
        name: "MongoDB, DynamoDB & Redis",
        description: "Designed and queried NoSQL data stores for flexible, high-throughput workloads. Implemented Redis caching layers to reduce database load and improve application response times."
      },
    ],
  },
  {
    title: "Methodologies & Practices",
    skills: [
      {
        id: "agile-sdlc",
        name: "Agile (Scrum), SDLC & TDD",
        description: "Introduced Agile-based release planning and cross-functional sprint workflows, accelerating feature delivery by 30%. Adopted Test-Driven Development practices for cloud applications, reducing post-deployment defects by 88%."
      },
      {
        id: "finops",
        name: "FinOps & Cost Optimization",
        description: "Optimized Kubernetes workloads through CPU/memory right-sizing, HPA tuning, and autoscaling strategies, achieving a 15% reduction in cloud infrastructure costs. Applied FinOps principles to identify and eliminate cloud resource waste across multi-cloud environments."
      },
      {
        id: "aiops",
        name: "AIOps & Intelligent Monitoring",
        description: "Applied AIOps techniques including semantic log drift detection and LLM-powered RCA generation to surface pre-incident signals. Correlated embeddings with key metrics (HTTP 5xx, error rates) to auto-cluster incidents and generate severity-classified summaries (P0–P2)."
      },
    ],
  },
];