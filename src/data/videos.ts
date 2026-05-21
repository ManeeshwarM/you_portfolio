export type Video = {
  id: string | number
  title: string
  image?: string
  thumbnail: string
  duration?: string
  views?: number
  uploadedAt?: string
  channel?: { name: string; handle: string; avatar: string }
  tags?: string[]
  description?: string
  sources?: { mp4?: string }
  sponsored?: boolean
  github?: string
  appUrl?: string
  highlights?: string[]
  category?: string
  date?: string
}


export const videos: Video[] = [
  {
    id: 'polyglot-compiler',
    title: 'Polyglot Compiler Workbench (C/Java/Python/JS)',
    thumbnail:
      'https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=1200&auto=format&fit=crop',
    sources: { mp4: "https://firebasestorage.googleapis.com/v0/b/portfolio-84f15.firebasestorage.app/o/Compiler_Workbench_Video_Generation.mp4?alt=media&token=8da0d33f-51b4-4a89-8073-45b30beb0ba1" },

    duration: '6:45',
    views: 15200,
    uploadedAt: '2025-05-20',
    category: 'Tools',
    channel: { name: 'Maneeshwar Marpu', handle: 'maneesh', avatar: 'https://i.pravatar.cc/100?img=11' },
    tags: ['compiler', 'python', 'streamlit'],
    appUrl: 'https://compliter.streamlit.app/',
    description:
      'I built an interactive, step-by-step compiler workbench designed to make the complex process of compilation approachable and visually engaging. Using Streamlit, I crafted a single, intuitive interface where users can write code and watch it transform, stage by stage, from raw text into an executable program — all in real-time.\nThis workbench is a polyglot platform, supporting MiniLang (a custom language I designed), as well as Python, JavaScript, and C. Its strength lies in deep visualization of the entire compilation pipeline.\n - Lexing: Break code into tokens and watch them appear live.\n -Parsing: See an AST generated in ASCII, JSON, and as a Graphviz-rendered tree.\n -Semantic Analysis: Validate correctness (for MiniLang) before moving forward.\nIR Generation: Explore Three-Address Code (TAC) or bytecode output.\n-CFG Visualization: Understand program flow with clear control-flow graphs.\n -Execution & Debugging: Run programs directly inside the workbench and step through code line by line with an interactive debugger.',
    highlights: [
      "Built with Streamlit and integrated Ace Editor for code editing and syntax highlighting",
      "Visualized ASTs and CFGs using Graphviz for a clear, interactive learning experience",
      "Enabled cross-language execution for C and Java via clang/javac with IR/bytecode output",
      "Included step-by-step debugger for Python, JS, and MiniLang",
      "Performance profiling per stage with rich error annotations for better debugging",
      "Designed a clean, tabbed UI for Tokens, AST, IR, CFG, Run, and Debug views"
    ],
    github: 'https://github.com/ManeeshwarM/compiler-workbench/tree/main/compliter',
  },
  {
    id: 'project-mgmt',
    title: 'Project Management System (Django + AWS)',
    thumbnail:
      'https://firebasestorage.googleapis.com/v0/b/portfolio-84f15.firebasestorage.app/o/mac-management.png?alt=media&token=71be2320-1e51-473a-bf42-aa3c090daeb1',
    sources: { mp4: "https://firebasestorage.googleapis.com/v0/b/portfolio-84f15.firebasestorage.app/o/Project_Management_App_Video_Generated.mp4?alt=media&token=0d8969d5-5bd2-46b9-9d22-196547d194e8" },
    duration: '8:33',
    views: 9800,
    uploadedAt: '2025-06-10',
    category: 'web app',
    channel: { name: 'Maneeshwar Marpu', handle: 'maneesh', avatar: 'https://i.pravatar.cc/100?img=11' },
    tags: ['django', 'aws', 'pandas'],
    description:
      'AgileFlow is your projects command center, a streamlined dashboard for tracking and managing every detail. It gives you a crystal-clear view of key metrics, from the total number of registered companies to the active tasks keeping your team busy. The clean, visual interface makes it easy to monitor project progress at a glance, with a dedicated space to create new tasks and assign them to your team. A powerful cost calculator is built in, helping you predict and manage project budgets to avoid surprises. This system isnt just about tracking; it is about providing the insights and tools you need to guide every project from start to successful finish. It enhances collaboration by centralizing communication and task assignments. Ultimately, AgileFlow is designed to make project management more efficient and less stressful for everyone involved\n This entire project is built on the robust Django framework, leveraging its "batteries-included" approach to accelerate development. The backend is a powerful mix of Python and technologies like Celery for handling asynchronous tasks and a PostgreSQL database for reliable data storage. For serving static and media files, the project utilizes Amazon S3, and for deployment, it runs on AWS, using services like EC2 and Elastic Beanstalk to ensure scalability and high availability.',
    highlights: [
      "Built with Django + PostgreSQL for a robust, scalable backend",
      "Implemented Celery for asynchronous task handling and background processing",
      "Deployed on AWS using EC2 and Elastic Beanstalk with S3 for static/media storage",
      "Interactive dashboard with real-time metrics, task creation, and cost calculator",
      "Centralized collaboration with task assignment and progress tracking"
    ],
    github: 'https://github.com/ManeeshwarM/Project-management-system',
  },
  {
    id: 'loan-app',
    title: 'Loan Application Tracking (Spring Boot + MySQL)',
    thumbnail:
      'https://firebasestorage.googleapis.com/v0/b/portfolio-84f15.firebasestorage.app/o/loan.png?alt=media&token=ec636a43-7161-43d9-b229-75e64e1271d7',
    sources: { mp4: "https://firebasestorage.googleapis.com/v0/b/portfolio-84f15.firebasestorage.app/o/laon_app_sprin.mp4?alt=media&token=64d6fe69-f084-4f0e-a69d-5a78d57c086c" },
    duration: '7:12',
    views: 11300,
    uploadedAt: '2025-07-05',
    category: 'web app',
    channel: { name: 'Maneeshwar Marpu', handle: 'maneesh', avatar: 'https://i.pravatar.cc/100?img=11' },
    tags: ['springboot', 'mysql', 'jsp'],
    description:
      'This is the control center for a sophisticated Loan Application Tracking System, an all-in-one platform for both applicants and managers. It allows users to apply for various loans online and easily manage their repayments through EMIs. On the other side, managers gain a comprehensive overview, with the power to review, approve, and monitor every applications status from a centralized dashboard. The entire system is built on the robust Spring Boot framework for the backend, providing a secure and scalable foundation, while the front-end is crafted with JSP, ensuring a smooth and intuitive user experience for all. This platform streamlines the entire loan lifecycle, making it efficient and transparent.',
    highlights: [
      "Developed with Spring Boot for a secure, scalable backend architecture",
      "Built a JSP-based front-end for a smooth, user-friendly experience",
      "Enabled users to apply for loans online and manage repayments via EMIs",
      "Created manager dashboard to review, approve, and monitor applications",
      "Streamlined the entire loan lifecycle for efficiency and transparency"
    ],

    github: 'https://github.com/ManeeshwarM/sdpproj3',
  },
  {
    id: 'motorola-sre',
    title: 'Motorola Solutions — SRE & Cloud Automation',
    thumbnail: 'https://firebasestorage.googleapis.com/v0/b/portfolio-84f15.firebasestorage.app/o/Gemini_Generated_Image_cja4wucja4wucja4.png?alt=media&token=a5c4be89-f628-4e59-8ab0-004943333bc5',
    sources: { mp4: "https://firebasestorage.googleapis.com/v0/b/portfolio-84f15.firebasestorage.app/o/Generating_Video_From_Project_Description.mp4?alt=media&token=dc8890f9-7137-4758-9e24-8f603c7ecf40" },
    duration: '9:20',
    views: 8700,
    uploadedAt: '2025-08-01',
    category: 'DevOps',
    channel: { name: 'Maneeshwar Marpu', handle: 'maneesh', avatar: 'https://i.pravatar.cc/100?img=11' },
    tags: ['aws', 'kubernetes', 'sre'],
    description:
      'This project, a key part of my internship, focuses on building a secure and scalable system for storing body cam videos in the cloud. My primary contribution involved the critical infrastructure and automation aspects of the project. I utilized GitHub Actions to implement a robust CI/CD pipeline, automating the deployment of code to the GitHub repository. Furthermore, I leveraged GitHub Actions to orchestrate and automate various tasks within Amazon Web Services (AWS), ensuring a seamless and efficient workflow for managing the video archives. This experience allowed me to develop expertise in cloud deployment, continuous integration, and infrastructure automation.',
    highlights: [
      "Built a secure and scalable cloud-based system for storing body cam videos",
      "Implemented CI/CD pipelines using GitHub Actions for automated deployments",
      "Automated AWS tasks including provisioning, configuration, and video archive management",
      "Focused on infrastructure reliability and seamless workflow orchestration",
      "Gained hands-on expertise in cloud deployment, CI/CD, and infrastructure automation"
    ],

  },


  {
    id: 'you-portfolio',
    title: 'You-Portfolio (React + TypeScript)',
    thumbnail:
      'https://firebasestorage.googleapis.com/v0/b/portfolio-84f15.firebasestorage.app/o/youtube.png?alt=media&token=69eefe35-efc6-47b0-8b48-b906544feb0e',
    sources: { mp4: "https://firebasestorage.googleapis.com/v0/b/portfolio-84f15.firebasestorage.app/o/YouTube_to_Developer_Portfolio_Video.mp4?alt=media&token=2dde732d-044a-4e2f-94c6-7de55b5c625a" },
    duration: '6:40',
    views: 6100,
    uploadedAt: '2025-09-15',
    category: 'web app',
    channel: { name: 'Maneeshwar Marpu', handle: 'maneesh', avatar: 'https://i.pravatar.cc/100?img=12' },
    tags: ['react', 'typescript', 'frontend', 'video'],
    description:
      'You-Portfolio is a unique, YouTube-inspired portfolio platform that transforms the way projects are showcased. Instead of traditional static cards, this app presents each project as a video-like card with thumbnails, durations, and meta-data, creating a more interactive and engaging experience for visitors. Users can browse projects in a responsive grid, click into a detailed "watch" page for each project, and explore descriptions, tags, GitHub links, and related work. Built with React, TypeScript, and Tailwind CSS, the interface is highly responsive and optimized for performance, offering a smooth, immersive browsing experience.The design is a testament to modern front-end engineering, leveraging React component-based architecture for a modular and scalable codebase. TypeScript ensures robust type safety throughout the application, minimizing errors and enhancing developer productivity. Tailwind CSS was instrumental in achieving the clean, minimalist, and highly responsive layout, allowing for rapid UI development. The "watch" page elevates the user journey by presenting project details in a dedicated, distraction-free environment, making it easy to dive deep into the technical specifications and live demos. This innovative approach redefines the standard portfolio, making it a memorable and compelling way to present work to potential employers and collaborators.',
    highlights: [
      "YouTube-inspired UI for project discovery and navigation",
      "Responsive video-style project cards with duration and meta-data",
      "Dedicated 'watch' pages for each project with detailed descriptions",
      "Built with React + TypeScript for type safety and maintainability",
      "Optimized with lazy loading, responsive grid layout, and smooth animations"
    ],
    github: 'https://github.com/ManeeshwarM/you_portfolio',
  },
  {
    id: 'construction-ai',
    title: 'Construction Material Quality Inspection AI',
    thumbnail:
      'https://firebasestorage.googleapis.com/v0/b/portfolio-84f15.firebasestorage.app/o/cnst.png?alt=media&token=80d5b321-23c5-4cf0-bf6a-08686cf86e66',
    sources: { mp4: "https://firebasestorage.googleapis.com/v0/b/portfolio-84f15.firebasestorage.app/o/AI_Generates_Construction_Inspection_Video.mp4?alt=media&token=cf3f86f2-b0a6-4866-9c91-414d0c7b72d2" }
    ,
    duration: '9:10',
    views: 4800,
    uploadedAt: '2025-04-08',
    category: 'Data Science',
    channel: { name: 'Maneeshwar Marpu', handle: 'maneesh', avatar: 'https://i.pravatar.cc/100?img=11' },
    tags: ['ai', 'image-classification', 'data-science'],
    description:
      'This project introduces an AI-based system designed to revolutionize construction material quality control. The core of the system is a machine learning model trained to inspect and classify various materials, including bricks, cement, and steel, with unparalleled accuracy. By leveraging advanced computer vision techniques, the system can automatically detect and categorize a wide range of defects, such as cracks in concrete, rust on steel, or inconsistencies in brick composition. This automated approach ensures rigorous quality assurance, minimizing human error, accelerating the inspection process, and ultimately enhancing the safety and durability of construction projects.',
    highlights: [
      "Developed a machine learning model for automated material inspection and classification",
      "Used computer vision to detect defects like cracks, rust, and composition inconsistencies",
      "Reduced human error and accelerated quality inspection processes",
      "Enhanced construction safety and durability through rigorous, automated QA",
      "Delivered a scalable solution adaptable to multiple construction materials (bricks, cement, steel)"
    ],
    github: 'https://github.com/ManeeshwarM/construction_quality_by_ai',
  },
  {
    id: 'excel-ai-assistant',
    title: 'AI-Powered Excel Assistant',
    thumbnail: "https://firebasestorage.googleapis.com/v0/b/portfolio-84f15.firebasestorage.app/o/ChatGPT%20Image%20Jan%2027%2C%202026%2C%2003_58_16%20PM.png?alt=media&token=021e300b-b63a-466e-bae6-35480c369d89",
    sources: { mp4: "https://firebasestorage.googleapis.com/v0/b/portfolio-84f15.firebasestorage.app/o/Chatbot_Performs_Excel_Operations_Video.mp4?alt=media&token=7f5dc52e-04d8-4aef-9d26-8225487cc49c" }

    // thumbnail:
    , duration: '11:30',
    views: 9200,
    uploadedAt: '2025-03-28',
    category: 'AI Engineering',
    channel: { name: 'Maneeshwar Marpu', handle: 'maneesh', avatar: 'https://i.pravatar.cc/100?img=11' },
    tags: ['llm', 'rag', 'excel', 'faiss', 'fastapi', 'ai-systems'],
    description:
      'Built a ChatGPT-style AI assistant embedded directly inside Microsoft Excel that understands spreadsheets, PDFs, and user intent. The system dynamically analyzes Excel workbooks without relying on hard-coded ranges, allowing it to adapt to changing data structures. It supports persistent, file-level chat history so context is preserved across sessions. Responses are streamed token-by-token to provide an interactive, real-time experience similar to ChatGPT. The assistant can automatically generate formulas, create charts, modify sheets programmatically, and perform regression-based predictions with confidence scores. Document understanding is powered by local embeddings and FAISS-based retrieval to ensure accurate context grounding. Robust fallback logic and error handling were implemented to handle LLM failures gracefully. The entire system is designed to be portable across machines, cloud-optional, and production-ready.',
    highlights: [
      'Dynamic Excel workbook understanding (no hard-coded ranges)',
      'PDF ingestion with local embeddings + FAISS',
      'Streaming LLM responses with structured + human-readable output',
      'Regression-based predictions with confidence scores',
      'Portable, cloud-optional architecture with fallback logic'
    ],
    github: 'https://github.com/ManeeshwarM/ai-excel-assistant',
  },

  {
    id: 'sre-log-drift',
    title: 'AI-Powered Log Drift Detection for SRE',
    thumbnail:
      'https://firebasestorage.googleapis.com/v0/b/portfolio-84f15.firebasestorage.app/o/ChatGPT%20Image%20Jan%2029%2C%202026%2C%2011_16_04%20AM.png?alt=media&token=0967295c-cee9-4886-bc27-2ff9c307723d',
    sources: { mp4: "https://firebasestorage.googleapis.com/v0/b/portfolio-84f15.firebasestorage.app/o/ai-sre.mp4?alt=media&token=035df313-048c-455d-b213-adc2e052af9f" },
    duration: '9:45',
    views: 7800,
    uploadedAt: '2025-04-12',
    category: 'DevOps',
    channel: { name: 'Maneeshwar Marpu', handle: 'maneesh', avatar: 'https://i.pravatar.cc/100?img=11' },
    tags: ['sre', 'aiops', 'grafana', 'loki', 'embeddings', 'observability'],
    description:
      'Developed an AI-driven SRE system focused on detecting semantic drift in application logs as an early pre-incident signal. The platform continuously ingests real application logs through Grafana Loki and converts them into vector embeddings for semantic analysis. By monitoring changes in log behavior over time, the system identifies abnormal drift patterns before failures surface. Drift signals are correlated with error rates and HTTP 5xx metrics to improve confidence and reduce false positives. Related anomalies are automatically clustered into incidents for clearer analysis. An LLM generates concise incident summaries and assigns severity levels (P0/P1/P2) to guide response prioritization. The system is fully local and cloud-free, mirroring modern AIOps platforms while maintaining strong SRE guardrails.',
    highlights: [
      'Semantic log drift detection before incidents occur',
      'Grafana Loki log ingestion and embedding pipeline',
      'Incident clustering with severity classification',
      'Correlation with error rates and HTTP 5xx signals',
      'Fully local, cloud-free AIOps design'
    ],
    // github: 'https://github.com/ManeeshwarM/ai-log-drift-sre',
  },

  {
    id: 'k8s-ai-sre',
    title: 'AI-Powered Kubernetes SRE Incident Response',
    thumbnail: 'https://firebasestorage.googleapis.com/v0/b/portfolio-84f15.firebasestorage.app/o/ChatGPT%20Image%20Jan%2027%2C%202026%2C%2004_16_18%20PM.png?alt=media&token=68e72c53-1026-4407-971f-469f1dec5db9',
    sources: { mp4: "https://firebasestorage.googleapis.com/v0/b/portfolio-84f15.firebasestorage.app/o/AI_Powered_Kubernetes_Incident_Response.mp4?alt=media&token=832b1255-1810-45b8-9c6b-a193a55cd2f0" }
    ,
    duration: '12:05',
    views: 8400,
    uploadedAt: '2025-05-06',
    category: 'DevOps',
    channel: { name: 'Maneeshwar Marpu', handle: 'maneesh', avatar: 'https://i.pravatar.cc/100?img=11' },
    tags: ['kubernetes', 'sre', 'llm', 'ollama', 'platform-engineering'],
    description:
      'Built a production-grade, AI-assisted SRE incident response platform for Kubernetes environments. The system continuously monitors Kubernetes workloads and intentionally failure-prone services to detect real operational incidents. It collects native Kubernetes signals including pod logs, events, and deployment state for holistic diagnosis. A local LLM (Llama 3 via Ollama) performs automated root-cause analysis and generates structured incident reports. Incidents are classified by severity to guide response urgency. Deterministic guardrails ensure outputs remain valid, safe, and machine-executable. For high-severity incidents, the platform can trigger guarded auto-remediation actions such as rolling restarts. The design mirrors real-world SRE workflows, balancing AI reasoning with operational safety and reproducibility.',
    highlights: [
      'Real Kubernetes incident detection using native signals',
      'LLM-based root cause analysis with structured JSON output',
      'Severity classification and guarded auto-remediation',
      'Local LLM (Ollama + Llama 3), zero cloud cost',
      'Interview-defensible SRE architecture'
    ],
    github: 'https://github.com/ManeeshwarM/ai-k8s-troubleshooter',
  },


  {
    id: 'zero-trust-security',
    title: 'Zero Trust Security Architecture',
    thumbnail:
      'https://images.unsplash.com/photo-1614064641938-3bbee52942c7?q=80&w=1200&auto=format&fit=crop',
    sources: { mp4: 'https://firebasestorage.googleapis.com/v0/b/portfolio-84f15.firebasestorage.app/o/zero_trust_multi_cloud_framework_presentationmp_.mp4?alt=media&token=117d72c3-fcc3-40c5-a22c-70b06e8743fb' },
    duration: '10:30',
    views: 7100,
    uploadedAt: '2026-05-11',
    category: 'DevSecOps',
    channel: { name: 'Maneeshwar Marpu', handle: 'maneesh', avatar: 'https://i.pravatar.cc/100?img=11' },
    tags: ['zero-trust', 'iam', 'opa', 'vault', 'security', 'devsecops'],
    description:
      'Designed and implemented a Zero Trust security framework across a multi-cloud environment. The architecture enforces least-privilege IAM policies, mutual TLS between services, and continuous workload identity verification. Network micro-segmentation is applied at the pod and namespace level using network policies and a service mesh. Policy-as-Code enforcement is handled by OPA and Sentinel, ensuring every deployment is validated against security guardrails before it reaches production. HashiCorp Vault manages dynamic secrets, eliminating static credentials from all pipelines. The design is aligned with NIST 800-53 controls and SOC2 requirements, making it audit-ready out of the box.',
    highlights: [
      'Least-privilege IAM with continuous workload identity verification',
      'Network micro-segmentation using service mesh and Kubernetes NetworkPolicies',
      'Policy-as-Code enforcement via OPA and Sentinel at CI/CD gate',
      'Dynamic secrets management with HashiCorp Vault (zero static credentials)',
      'Aligned with NIST 800-53 and SOC2 compliance controls',
      'mTLS enforced across all inter-service communication',
    ],
    github: 'https://github.com/ManeeshwarM/zero_trust_security',

  },

  {
    id: 'unified-observability-stack',
    title: 'Unified Observability Stack',
    thumbnail:
      'https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1200&auto=format&fit=crop',
    sources: { mp4: 'https://firebasestorage.googleapis.com/v0/b/portfolio-84f15.firebasestorage.app/o/unified_obs.mp4?alt=media&token=7c4060b5-15e0-494b-9781-66c25d89fd99' },
    duration: '11:15',
    views: 8300,
    uploadedAt: '2026-05-11',
    category: 'DevOps',
    channel: { name: 'Maneeshwar Marpu', handle: 'maneesh', avatar: 'https://i.pravatar.cc/100?img=11' },
    tags: ['prometheus', 'grafana', 'opentelemetry', 'jaeger', 'elk', 'sre'],
    description:
      'Built a production-ready, full-spectrum observability platform that unifies metrics, logs, and distributed traces into a single correlated pipeline. Prometheus scrapes infrastructure and application metrics and feeds custom SLO dashboards in Grafana. OpenTelemetry instruments all services for distributed tracing, with Jaeger providing end-to-end span visualization across microservices. The ELK stack centralizes structured and unstructured logs, enabling fast full-text search and root-cause correlation. Alerting is automated via Alertmanager with severity-based routing to PagerDuty and Slack. The platform reduced Mean Time to Detect (MTTD) by 25% and incident response time by 87% by surfacing correlated signals across all three telemetry pillars simultaneously.',
    highlights: [
      '20+ Grafana dashboards tracking SLOs, error budgets, and service health',
      'Distributed tracing with OpenTelemetry SDK + Jaeger for cross-service visibility',
      'Centralized log aggregation and full-text search via ELK Stack',
      'Automated alert routing with severity-based escalation (PagerDuty / Slack)',
      'Unified correlation of metrics, logs, and traces for fast RCA',
      'Reduced MTTD by 25% and incident response time by 87%',
    ],
    github: 'https://github.com/ManeeshwarM/unified_obs_stack',
  },

  {
    id: 'multi-cloud-cicd',
    title: 'Multi-Cloud CI/CD Pipeline',
    thumbnail:
      'https://images.unsplash.com/photo-1667372393119-3d4c48d07fc9?q=80&w=1200&auto=format&fit=crop',
    sources: { mp4: 'https://firebasestorage.googleapis.com/v0/b/portfolio-84f15.firebasestorage.app/o/f_f_a_d_a_eb_eb_cmp_.mp4?alt=media&token=86f86b6e-5887-41a3-b89e-08ac23dced65' },
    duration: '9:55',
    views: 9600,
    uploadedAt: '2026-04-16',
    category: 'DevOps',
    channel: { name: 'Maneeshwar Marpu', handle: 'maneesh', avatar: 'https://i.pravatar.cc/100?img=11' },
    tags: ['cicd', 'argocd', 'helm', 'aws', 'azure', 'gitops'],
    description:
      'Architected an end-to-end multi-cloud CI/CD platform supporting continuous delivery across AWS and Azure environments. GitLab CI/CD handles build, lint, and SAST/DAST security scanning before any artifact is promoted. ArgoCD drives GitOps-based deployment, ensuring the cluster state is always reconciled with the Git source of truth, eliminating configuration drift. Helm charts manage environment-specific configurations across dev, staging, and production with promotion gates between each stage. The pipeline supports blue-green and canary release strategies for zero-downtime rollouts. Deployment failures dropped 45% and release cadence shifted from weekly to daily, with full audit trail and rollback capability at every stage.',
    highlights: [
      'GitOps delivery via ArgoCD — Git as single source of truth',
      'SAST/DAST security scanning integrated at CI gate',
      'Helm-based environment promotion across dev, staging, and production',
      'Blue-green and canary release strategies for zero-downtime rollouts',
      'Deployment failures reduced by 45%; release cadence shifted weekly → daily',
      'Multi-cloud support across AWS (EKS) and Azure (AKS)',
    ],
    github: 'https://github.com/ManeeshwarM/multi-cloud-cd',
  },

  {
    id: 'self-healing-microservices',
    title: 'Self-Healing Microservices Platform',
    thumbnail:
      'https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=1200&auto=format&fit=crop',
    sources: { mp4: 'https://firebasestorage.googleapis.com/v0/b/portfolio-84f15.firebasestorage.app/o/self_heal_kub.mp4?alt=media&token=b74f6fc8-d9e8-4f81-b7de-1bd67d1d34b7' },
    duration: '10:45',
    views: 7500,
    uploadedAt: '2026-05-11',
    category: 'DevOps',
    channel: { name: 'Maneeshwar Marpu', handle: 'maneesh', avatar: 'https://i.pravatar.cc/100?img=11' },
    tags: ['kubernetes', 'chaos-engineering', 'prometheus', 'ansible', 'sre'],
    description:
      'Engineered a Kubernetes-native self-healing platform that detects, responds to, and recovers from infrastructure and application failures without human intervention. LitmusChaos drives fault injection across 10+ scenarios including pod kills, node drains, network latency injection, and CPU throttling. Prometheus monitors recovery signals and triggers Alertmanager rules when SLOs breach thresholds. Custom Kubernetes operators and Ansible remediation playbooks execute safe, idempotent recovery actions such as rolling restarts, replica scaling, and traffic rerouting. Every remediation action is gated by deterministic safety checks to prevent cascading failures. The platform validated system resilience and reduced manual on-call interventions significantly across staging and production environments.',
    highlights: [
      '10+ chaos scenarios: pod kills, node drains, network latency, CPU throttling',
      'Prometheus + Alertmanager SLO breach detection with automated triggers',
      'Custom Kubernetes operators for safe, idempotent auto-remediation',
      'Ansible playbooks for rolling restarts, scaling, and traffic rerouting',
      'Deterministic safety gates to prevent cascading failure loops',
      'Reduced manual on-call interventions across production environments',
    ],
    github: 'https://github.com/ManeeshwarM/self_healing_microservices',
  },

  {
    id: 'compliance-as-code',
    title: 'Compliance as Code (SOC2 / NIST)',
    thumbnail:
      'https://images.unsplash.com/photo-1450101499163-c8848c66ca85?q=80&w=1200&auto=format&fit=crop',
    sources: { mp4: 'https://firebasestorage.googleapis.com/v0/b/portfolio-84f15.firebasestorage.app/o/generate_me_a_video_of_Automat.mp4?alt=media&token=74c60933-4904-471f-8313-0ff4bb130917' },
    duration: '8:40',
    views: 6200,
    uploadedAt: '2026-04-16',
    category: 'DevSecOps',
    channel: { name: 'Maneeshwar Marpu', handle: 'maneesh', avatar: 'https://i.pravatar.cc/100?img=11' },
    tags: ['opa', 'sentinel', 'soc2', 'nist', 'terraform', 'devsecops'],
    description:
      'Automated cloud compliance enforcement using Policy-as-Code tools to continuously validate infrastructure against SOC2 and NIST 800-53 controls. OPA policies are embedded directly in the CI/CD pipeline, blocking any non-compliant Terraform plan before it reaches apply. HashiCorp Sentinel enforces workspace-level governance across Terraform Cloud runs. AWS Config Rules continuously audit live resource configurations and trigger SNS-based alerts on drift. The system auto-generates audit-ready compliance reports in structured JSON and PDF formats, mapping each control to specific infrastructure resources. This approach eliminates manual compliance reviews and ensures every environment is provably compliant at deploy time, not just at audit time.',
    highlights: [
      'OPA policies block non-compliant Terraform plans at CI gate',
      'HashiCorp Sentinel enforces workspace-level governance',
      'AWS Config Rules for continuous live resource compliance auditing',
      'Auto-generated audit-ready reports mapped to SOC2 and NIST 800-53 controls',
      'Eliminates manual compliance reviews — compliance proven at deploy time',
      'Covers IAM, encryption, network, logging, and access control domains',
    ],
    github: 'https://github.com/ManeeshwarM/compilance_as_code',
  },

  {
    id: 'infra-cost-intelligence',
    title: 'Infrastructure Cost Intelligence (FinOps)',
    thumbnail:
      'https://images.unsplash.com/photo-1579621970563-ebec7560ff3e?q=80&w=1200&auto=format&fit=crop',
    sources: { mp4: 'https://firebasestorage.googleapis.com/v0/b/portfolio-84f15.firebasestorage.app/o/finops.mp4?alt=media&token=37051fdb-232d-4a2e-862e-efd7623aafff' },
    duration: '9:00',
    views: 5900,
    uploadedAt: '2026-04-16',
    category: 'DevOps',
    channel: { name: 'Maneeshwar Marpu', handle: 'maneesh', avatar: 'https://i.pravatar.cc/100?img=11' },
    tags: ['finops', 'aws', 'azure', 'terraform', 'cost-optimization', 'python'],
    description:
      'Built a FinOps intelligence platform that aggregates and analyzes cloud spend across AWS and Azure, giving engineering teams full cost visibility mapped to their infrastructure code. Python-based scrapers pull billing data from AWS Cost Explorer and Azure Cost Management APIs. The data is normalized and matched against Terraform state files to attribute costs to specific IaC resources, teams, and environments. A Grafana dashboard surfaces idle resources, over-provisioned instances, and right-sizing recommendations. HPA tuning guidance is generated per workload based on historical utilization patterns. The platform identified and eliminated 15%+ in unnecessary cloud spend by surfacing actionable recommendations and integrating cost gates into CI/CD pipelines.',
    highlights: [
      'Multi-cloud spend aggregation from AWS Cost Explorer and Azure Cost Management',
      'Cost attribution mapped to Terraform resources, teams, and environments',
      'Grafana dashboard surfacing idle resources and right-sizing recommendations',
      'HPA tuning guidance generated from historical utilization patterns',
      '15%+ cloud cost reduction achieved through automated optimization',
      'Cost gates integrated into CI/CD to flag expensive infrastructure changes pre-deploy',
    ],
    github: 'https://github.com/ManeeshwarM/infra_cost_intelligence',
  },

]