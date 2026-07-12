export type FocusIconName =
  | "Brain"
  | "Droplets"
  | "Mountain"
  | "Ship"
  | "Flame"
  | "Leaf"
  | "Waves"
  | "Zap"
  | "CircleDot"
  | "Lightbulb";

export interface FocusPageData {
  slug: string;
  number: string;
  title: string;
  shortTitle: string;
  iconName: FocusIconName;
  eyebrow: string;
  heroDescription: string;
  overview: string;
  overviewBullets: string[];
  keyServices: { title: string; description: string }[];
  technologies: { title: string; description: string }[];
  industries: string[];
  benefits: { title: string; description: string }[];
  whyChoose: string[];
  relatedServices: { slug: string; title: string }[];
  metaTitle: string;
  metaDescription: string;
}

export const focusPages: FocusPageData[] = [
  {
    slug: "ai-agentic-intelligence",
    number: "01",
    title: "AI & Agentic Intelligence Service",
    shortTitle: "AI & Agentic Intelligence",
    iconName: "Brain",
    eyebrow: "Intelligent Operations",
    heroDescription:
      "Deploying autonomous agents, machine learning models, and intelligent decision-support systems to transform industrial operations across the energy value chain.",
    overview:
      "Gastec Group delivers end-to-end artificial intelligence and agentic intelligence solutions purpose-built for energy, mining, and infrastructure operations. Our multidisciplinary AI practice combines deep domain expertise in oil & gas, minerals processing, and industrial automation with cutting-edge capabilities in autonomous agents, predictive analytics, digital twins, and computer vision. We help organizations transition from reactive operations to proactive, AI-driven decision-making — reducing downtime, optimizing throughput, and unlocking new value from existing assets.",
    overviewBullets: [
      "Autonomous agent frameworks for industrial process optimization",
      "Predictive maintenance powered by real-time sensor analytics",
      "Digital twin implementations for asset lifecycle management",
      "Computer vision systems for safety, quality, and environmental monitoring",
      "Intelligent decision-support platforms for executive and operational teams",
    ],
    keyServices: [
      {
        title: "Agentic AI Systems",
        description:
          "Design and deployment of autonomous multi-agent systems that coordinate across plant operations, supply chains, and field services — enabling real-time adaptive decision-making without human intervention.",
      },
      {
        title: "Predictive Analytics & Forecasting",
        description:
          "Advanced machine learning models for production forecasting, demand prediction, equipment failure prediction, and reservoir performance optimization using historical and real-time data streams.",
      },
      {
        title: "Digital Twin Engineering",
        description:
          "High-fidelity virtual replicas of physical assets, processes, and systems that enable scenario simulation, performance optimization, and predictive maintenance planning.",
      },
      {
        title: "Computer Vision & Industrial Monitoring",
        description:
          "AI-powered visual inspection systems for pipeline integrity, flare monitoring, personnel safety, environmental compliance, and production quality control across remote and harsh environments.",
      },
      {
        title: "Natural Language Processing & Knowledge Systems",
        description:
          "Intelligent document processing, regulatory compliance automation, and domain-specific large language model implementations for engineering, legal, and operational workflows.",
      },
      {
        title: "MLOps & AI Infrastructure",
        description:
          "End-to-end machine learning operations including model training pipelines, deployment automation, monitoring, drift detection, and governance frameworks for enterprise-scale AI.",
      },
    ],
    technologies: [
      {
        title: "Autonomous Agent Frameworks",
        description:
          "Multi-agent orchestration platforms using ReAct, Plan-and-Execute, and hierarchical agent architectures for complex industrial workflows.",
      },
      {
        title: "Edge AI & IoT Integration",
        description:
          "Lightweight inference engines deployed on edge devices for real-time processing at remote wellheads, offshore platforms, and mining sites.",
      },
      {
        title: "Transformer & Foundation Models",
        description:
          "Fine-tuned large language models and vision transformers adapted for energy sector applications, technical documentation, and operational intelligence.",
      },
      {
        title: "Real-Time Stream Processing",
        description:
          "Event-driven architectures using Apache Kafka, Flink, and custom streaming pipelines for sub-second anomaly detection and response.",
      },
    ],
    industries: [
      "Oil & Gas Upstream",
      "Mining & Minerals Processing",
      "Power Generation",
      "Pipeline Operations",
      "Environmental Monitoring",
      "Manufacturing",
    ],
    benefits: [
      {
        title: "30–50% Reduction in Unplanned Downtime",
        description:
          "Predictive maintenance models identify equipment degradation weeks before failure, enabling planned interventions that avoid costly emergency shutdowns.",
      },
      {
        title: "Real-Time Operational Visibility",
        description:
          "Unified AI dashboards provide operators and executives with live performance metrics, anomaly alerts, and recommended actions across all assets.",
      },
      {
        title: "Scalable Autonomous Operations",
        description:
          "Agentic systems handle routine decisions autonomously, freeing human experts to focus on strategic initiatives and complex problem-solving.",
      },
      {
        title: "Accelerated Time-to-Insight",
        description:
          "Automated data pipelines and pre-trained models reduce the cycle from raw sensor data to actionable intelligence from months to minutes.",
      },
    ],
    whyChoose: [
      "Deep domain expertise in energy and industrial AI — not generic technology consulting",
      "Proven track record deploying AI in harsh, remote, and mission-critical environments",
      "End-to-end capability from data engineering to model deployment and ongoing MLOps",
      "Strategic partnerships with leading AI hardware and cloud platform providers",
      "Commitment to responsible AI with built-in governance, explainability, and audit trails",
    ],
    relatedServices: [
      { slug: "oil-gas-exploration-production", title: "Oil & Gas Exploration and Production" },
      { slug: "pipelines-gas-infrastructure", title: "Energy Pipelines & Gas Infrastructure" },
      { slug: "mining-critical-minerals", title: "Mining & Critical Minerals" },
    ],
    metaTitle: "AI & Agentic Intelligence Service | Gastec Group",
    metaDescription:
      "Gastec delivers autonomous AI agents, predictive analytics, digital twins, and computer vision solutions for energy, mining, and industrial operations.",
  },
  {
    slug: "oil-gas-exploration-production",
    number: "02",
    title: "Oil & Gas Exploration and Production Service",
    shortTitle: "Oil & Gas E&P",
    iconName: "Droplets",
    eyebrow: "Upstream Excellence",
    heroDescription:
      "Comprehensive exploration, reservoir engineering, drilling, and production optimization services that maximize asset value across the upstream oil and gas lifecycle.",
    overview:
      "Gastec Group provides integrated upstream oil and gas services spanning exploration, appraisal, development, and production optimization. Our engineering teams combine advanced subsurface modeling with decades of field experience to unlock reserves, optimize recovery factors, and extend productive asset life. From seismic interpretation and reservoir simulation to drilling engineering and artificial lift optimization, we deliver measurable results across conventional and unconventional plays worldwide.",
    overviewBullets: [
      "Full-cycle exploration and appraisal support from Basin screening to prospect generation",
      "Advanced reservoir characterization using integrated petrophysical and geomechanical models",
      "Drilling engineering optimization for complex well architectures and extended-reach targets",
      "Production enhancement through artificial lift design, stimulation, and well intervention",
      "Field development planning with economic optimization and facilities integration",
    ],
    keyServices: [
      {
        title: "Exploration & Basin Analysis",
        description:
          "Multi-disciplinary basin evaluation integrating seismic data, geochemical analysis, and petroleum system modeling to identify high-value exploration targets and reduce geological risk.",
      },
      {
        title: "Reservoir Engineering & Simulation",
        description:
          "Full-field reservoir modeling using compositional and dual-porosity simulation to forecast production, optimize well placement, and evaluate enhanced oil recovery strategies.",
      },
      {
        title: "Drilling Engineering",
        description:
          "Well design, trajectory planning, and drilling optimization for vertical, directional, horizontal, and multilateral wells — including managed pressure drilling and casing design.",
      },
      {
        title: "Production Optimization",
        description:
          "Artificial lift selection and design, well performance analysis, water and gas management, and production chemistry solutions to maximize recovery from existing wells.",
      },
      {
        title: "Subsurface Data Analytics",
        description:
          "AI-enhanced petrophysical interpretation, seismic attribute analysis, and production data analytics to accelerate subsurface understanding and reduce interpretation uncertainty.",
      },
      {
        title: "Field Development Planning",
        description:
          "Integrated development planning incorporating reservoir simulation, facilities engineering, surface logistics, and economic modeling to generate optimized field development scenarios.",
      },
    ],
    technologies: [
      {
        title: "Advanced Seismic Processing",
        description:
          "State-of-the-art seismic imaging, AVO analysis, and time-lapse monitoring for reservoir characterization and monitoring.",
      },
      {
        title: "Integrated Reservoir Modeling",
        description:
          "Coupled surface-subsurface modeling platforms that link reservoir behavior to surface processing and transportation constraints.",
      },
      {
        title: "Managed Pressure Drilling",
        description:
          "Real-time pressure management systems for drilling through depleted zones, high-pressure formations, and narrow margin windows.",
      },
      {
        title: "Production Monitoring & Optimization",
        description:
          "IoT-enabled well monitoring with automated inflow performance analysis and real-time artificial lift optimization.",
      },
    ],
    industries: [
      "Onshore Oil & Gas",
      "Offshore Oil & Gas",
      "Unconventional Resources",
      "Deepwater Operations",
      "Heavy Oil & Oil Sands",
      "Gas Storage",
    ],
    benefits: [
      {
        title: "Enhanced Recovery Factors",
        description:
          "Our integrated approach has helped clients achieve 15–25% improvements in ultimate recovery through optimized development planning and EOR implementation.",
      },
      {
        title: "Drilling Efficiency Gains",
        description:
          "Advanced well planning and real-time drilling optimization reduce well construction time by 20–35% while maintaining stringent safety standards.",
      },
      {
        title: "Accelerated Time-to-First-Oil",
        description:
          "Streamlined subsurface workflows and rapid scenario evaluation compress the exploration-to-production cycle, improving project NPV and IRR.",
      },
      {
        title: "Reduced Exploration Risk",
        description:
          "Multi-disciplinary risk assessment and probabilistic resource estimation provide investors and operators with confidence in investment decisions.",
      },
    ],
    whyChoose: [
      "Multidisciplinary team spanning geosciences, petroleum engineering, and data science",
      "Experience across conventional, unconventional, and deepwater plays globally",
      "Proven methodologies that balance technical optimization with economic viability",
      "Strong safety record with zero lost-time incidents across all field operations",
      "Flexible engagement models from standalone consulting to integrated project delivery",
    ],
    relatedServices: [
      { slug: "offshore-marine", title: "Offshore and Marine" },
      { slug: "natural-gas", title: "Natural Gas, LNG, CNG and LPG" },
      { slug: "ai-agentic-intelligence", title: "AI & Agentic Intelligence Service" },
    ],
    metaTitle: "Oil & Gas Exploration and Production Service | Gastec Group",
    metaDescription:
      "Gastec provides integrated upstream oil and gas services including exploration, reservoir engineering, drilling, and production optimization worldwide.",
  },
  {
    slug: "mining-critical-minerals",
    number: "03",
    title: "Mining & Critical Minerals",
    shortTitle: "Mining & Critical Minerals",
    iconName: "Mountain",
    eyebrow: "Resource Development",
    heroDescription:
      "End-to-end mining services from mineral exploration and feasibility studies to sustainable mine development and critical minerals supply chain optimization.",
    overview:
      "Gastec Group supports the global mining industry with integrated services spanning mineral exploration, feasibility assessment, mine development, and environmental stewardship. As demand for critical minerals — lithium, cobalt, rare earth elements, copper, and nickel — accelerates the energy transition, we help mining companies and governments unlock resource potential while adhering to the highest standards of environmental management and community engagement. Our teams combine geological expertise with engineering excellence and digital innovation to deliver projects on time, on budget, and in compliance with international standards.",
    overviewBullets: [
      "Mineral exploration programs from prospect generation through resource definition",
      "Bankable feasibility studies compliant with JORC, NI 43-101, and SAMREC standards",
      "Mine planning and design for open-pit, underground, and hybrid operations",
      "Processing plant design and metallurgical optimization",
      "Critical minerals supply chain advisory and offtake structuring",
    ],
    keyServices: [
      {
        title: "Mineral Exploration & Resource Definition",
        description:
          "Greenfield and brownfield exploration programs integrating geochemistry, geophysics, and drilling to define and upgrade mineral resources with geological confidence.",
      },
      {
        title: "Feasibility Studies & Technical Due Diligence",
        description:
          "Pre-feasibility and bankable feasibility studies covering geology, mining, processing, infrastructure, environmental, and economic assessment for investment decision-making.",
      },
      {
        title: "Mine Design & Planning",
        description:
          "Optimized mine design incorporating pit optimization, stope design, sequencing, and scheduling using industry-standard software to maximize NPV while managing geotechnical and operational risk.",
      },
      {
        title: "Metallurgical Process Design",
        description:
          "Comminution, flotation, leaching, and separation circuit design with laboratory and pilot-scale test work to develop robust process flowsheets for complex ore bodies.",
      },
      {
        title: "Critical Minerals Strategy",
        description:
          "Advisory services for governments and mining companies on critical minerals inventory, supply chain mapping, processing technology selection, and offtake agreement structuring.",
      },
      {
        title: "Mine Closure & Environmental Remediation",
        description:
          "Closure planning, post-mining land use design, water treatment, and environmental remediation programs aligned with IFC Performance Standards and Equator Principles.",
      },
    ],
    technologies: [
      {
        title: "Geospatial & Remote Sensing",
        description:
          "Satellite imagery, LiDAR, and drone-based survey technologies for exploration targeting, grade control, and environmental monitoring.",
      },
      {
        title: "Mine Simulation & Digital Twins",
        description:
          "Virtual mine replicas for production optimization, equipment scheduling, safety training, and scenario planning.",
      },
      {
        title: "Automated Drilling & Blasting",
        description:
          "Precision drilling and blasting systems that optimize fragmentation, reduce vibration, and improve downstream processing efficiency.",
      },
      {
        title: "Water & Tailings Management",
        description:
          "Advanced tailings characterization, paste thickening, and water recycling technologies for sustainable mine water management.",
      },
    ],
    industries: [
      "Gold & Precious Metals",
      "Base Metals",
      "Lithium & Battery Minerals",
      "Rare Earth Elements",
      "Industrial Minerals",
      "Coal & Energy Minerals",
    ],
    benefits: [
      {
        title: "De-Risked Investment Decisions",
        description:
          "Rigorous feasibility studies with probabilistic economic analysis provide clear visibility into project risk and return profiles for investors and lenders.",
      },
      {
        title: "Optimized Resource Extraction",
        description:
          "Advanced mine planning and processing design maximize metallurgical recovery and minimize waste, improving project economics and resource utilization.",
      },
      {
        title: "Regulatory & ESG Compliance",
        description:
          "Deep expertise in international environmental and social standards ensures projects meet regulatory requirements and gain social license to operate.",
      },
      {
        title: "Critical Minerals Market Access",
        description:
          "Strategic advisory on offtake agreements, processing partnerships, and supply chain positioning for critical minerals producers entering global markets.",
      },
    ],
    whyChoose: [
      "Integrated geological, engineering, and environmental capabilities under one roof",
      "Experience across precious metals, base metals, battery minerals, and rare earths",
      "Compliance with international reporting standards (JORC, NI 43-101, SAMREC)",
      "Strong relationships with mining financiers, off-takers, and government agencies",
      "Commitment to sustainable mining practices and community benefit-sharing",
    ],
    relatedServices: [
      { slug: "water-environment", title: "Water & Environment" },
      { slug: "ai-agentic-intelligence", title: "AI & Agentic Intelligence Service" },
      { slug: "power-transmission", title: "Power and Transmission" },
    ],
    metaTitle: "Mining & Critical Minerals Service | Gastec Group",
    metaDescription:
      "Gastec provides integrated mining services including mineral exploration, feasibility studies, mine development, and critical minerals supply chain advisory.",
  },
  {
    slug: "offshore-marine",
    number: "04",
    title: "Offshore and Marine",
    shortTitle: "Offshore & Marine",
    iconName: "Ship",
    eyebrow: "Maritime Engineering",
    heroDescription:
      "Specialized offshore platform engineering, subsea systems design, marine logistics, and asset integrity management for deepwater and harsh-environment operations.",
    overview:
      "Gastec Group delivers comprehensive offshore and marine engineering services to operators, contractors, and government entities across the global energy sector. From concept selection and detailed design for fixed and floating platforms to subsea pipeline engineering, marine spread planning, and life-of-field asset integrity management, our teams bring deep technical expertise to the most challenging offshore environments. We support the full offshore lifecycle — from early-phase feasibility through decommissioning — with a relentless focus on safety, reliability, and cost optimization.",
    overviewBullets: [
      "Concept selection and feasibility studies for fixed, floating, and subsea production systems",
      "Detailed structural, piping, and topsides engineering for offshore platforms",
      "Subsea pipeline and riser design, installation engineering, and integrity assessment",
      "Marine logistics, vessel spreads, and offshore construction support",
      "Life-of-field asset integrity management and decommissioning planning",
    ],
    keyServices: [
      {
        title: "Offshore Platform Design",
        description:
          "Concept, FEED, and detailed design for jackets, topsides, FPSOs, semi-submersibles, and SPAR platforms — optimized for specific metocean conditions, reservoir characteristics, and regulatory frameworks.",
      },
      {
        title: "Subsea Engineering",
        description:
          "Subsea production system design, flowline and riser engineering, seabed layout optimization, and subsea tieback studies for marginal field development and deepwater applications.",
      },
      {
        title: "Marine Operations & Logistics",
        description:
          "Vessel selection, marine spread design, heavy-lift planning, and offshore construction sequencing for installation campaigns, hook-up, and commissioning.",
      },
      {
        title: "Asset Integrity Management",
        description:
          "Risk-based inspection planning, structural health monitoring, corrosion management, and remaining life assessment for offshore structures and subsea infrastructure.",
      },
      {
        title: "Offshore Wind & Renewables",
        description:
          "Foundation design, cable route engineering, and installation planning for offshore wind farms, leveraging transferable expertise from oil and gas offshore engineering.",
      },
      {
        title: "Decommissioning & Removal",
        description:
          "Decommissioning planning, well plugging and abandonment, structure removal engineering, and environmental site clearance in compliance with OSPAR and local regulatory requirements.",
      },
    ],
    technologies: [
      {
        title: "Computational Fluid Dynamics",
        description:
          "Advanced CFD modeling for wave-structure interaction, marine spread analysis, and subsea flow assurance.",
      },
      {
        title: "Structural Finite Element Analysis",
        description:
          "Non-linear FEA for fatigue assessment, seismic analysis, and extreme load evaluation of offshore structures.",
      },
      {
        title: "ROV & AUV Inspection Systems",
        description:
          "Remotely operated and autonomous underwater vehicle platforms for subsea inspection, survey, and intervention.",
      },
      {
        title: "Digital Twin for Offshore Assets",
        description:
          "Real-time structural monitoring and predictive maintenance platforms for offshore platforms and subsea systems.",
      },
    ],
    industries: [
      "Deepwater Oil & Gas",
      "Shallow Water Platforms",
      "Offshore Wind Energy",
      "Subsea Mining",
      "Naval & Defense",
      "Port & Harbor Infrastructure",
    ],
    benefits: [
      {
        title: "Reduced Offshore CAPEX",
        description:
          "Optimized concept selection and detailed engineering have delivered 10–20% CAPEX reductions on major offshore projects through weight optimization and constructability improvements.",
      },
      {
        title: "Extended Asset Life",
        description:
          "Proactive integrity management programs extend the productive life of aging offshore assets by 10–15 years while maintaining safety and regulatory compliance.",
      },
      {
        title: "Operational Safety Excellence",
        description:
          "Zero lost-time incidents across all offshore projects, underpinned by rigorous HSE management systems and a culture of safety leadership.",
      },
      {
        title: "Faster Project Execution",
        description:
          "Integrated engineering and marine operations planning reduces installation campaign durations and accelerates time to first production.",
      },
    ],
    whyChoose: [
      "Multidisciplinary offshore engineering team with deepwater and harsh-environment experience",
      "Proven track record on major EPCI projects across Africa, Asia, and the Americas",
      "Integrated capability from subsurface through topsides to marine operations",
      "Strong safety culture with industry-leading HSE performance metrics",
      "Technology partnerships with leading offshore equipment and service providers",
    ],
    relatedServices: [
      { slug: "oil-gas-exploration-production", title: "Oil & Gas Exploration and Production" },
      { slug: "natural-gas", title: "Natural Gas, LNG, CNG and LPG" },
      { slug: "pipelines-gas-infrastructure", title: "Energy Pipelines & Gas Infrastructure" },
    ],
    metaTitle: "Offshore and Marine Engineering Service | Gastec Group",
    metaDescription:
      "Gastec delivers offshore platform design, subsea engineering, marine operations, and asset integrity management for deepwater and harsh-environment projects.",
  },
  {
    slug: "natural-gas",
    number: "05",
    title: "Natural Gas, LNG, CNG and LPG",
    shortTitle: "Natural Gas & LNG",
    iconName: "Flame",
    eyebrow: "Gas Value Chain",
    heroDescription:
      "Integrated natural gas solutions spanning processing, liquefaction, compressed natural gas, and distribution — powering the global transition to cleaner energy.",
    overview:
      "Gastec Group provides comprehensive engineering and advisory services across the entire natural gas value chain. From gas processing and treatment to LNG, CNG, and LPG production, we help clients monetize gas resources efficiently and sustainably. Our expertise covers everything from small-scale and modular LNG solutions to large-scale liquefaction terminals, including dual-fuel engine retrofits, gas-to-liquid plants, and fertilizer production facilities. As natural gas plays an increasingly critical role in the global energy transition, we deliver the technical excellence and project delivery capability that operators and investors demand.",
    overviewBullets: [
      "Gas processing plant design including dehydration, NGL recovery, and sulfur removal",
      "LNG liquefaction and regasification terminal engineering",
      "Mini and modular LNG plant development for distributed gas monetization",
      "CNG and LPG processing, storage, and distribution system design",
      "Dual-fuel engine retrofit programs for marine and power generation applications",
    ],
    keyServices: [
      {
        title: "Gas Processing & Treatment",
        description:
          "Process design for gas dehydration, sweetening, NGL extraction, and sulfur recovery — engineered for specific gas compositions, throughput requirements, and product specifications.",
      },
      {
        title: "LNG Liquefaction & Regasification",
        description:
          "Full-scope engineering for LNG projects from pre-FEED through commissioning, including liquefaction train design, storage, loading facilities, and regasification terminals.",
      },
      {
        title: "Mini & Modular LNG",
        description:
          "Containerized and skid-mounted LNG solutions for stranded gas monetization, remote power generation, and industrial fuel supply — designed for rapid deployment and minimal site preparation.",
      },
      {
        title: "CNG & LPG Infrastructure",
        description:
          "Design and engineering of CNG compression stations, LPG fractionation plants, storage facilities, and distribution networks for domestic, commercial, and transport fuel applications.",
      },
      {
        title: "Gas-to-Liquid & Fertilizer Plants",
        description:
          "FEED and detailed design for GTL conversion facilities, methanol plants, and ammonia/fertilizer production complexes — integrating gas processing with chemical synthesis.",
      },
      {
        title: "Dual-Fuel Retrofit Programs",
        description:
          "Engineering and project management for converting diesel engines and turbines to dual-fuel (gas/diesel) operation in power plants, marine vessels, and industrial facilities.",
      },
    ],
    technologies: [
      {
        title: "Mixed Refrigerant Cycle (MRC)",
        description:
          "Optimized liquefaction processes using C3MR, DMRC, and AP-C3MR configurations for various project scales and gas compositions.",
      },
      {
        title: "Modular Construction",
        description:
          "Factory-fabricated, modular plant designs that reduce site construction time, improve quality, and enable deployment in remote locations.",
      },
      {
        title: "Gas Composition Analytics",
        description:
          "Real-time gas chromatography and process simulation tools for continuous optimization of gas treatment and product yield.",
      },
      {
        title: "Cryogenic Engineering",
        description:
          "Specialized materials, insulation systems, and cold-box designs for handling LNG, LPG, and other cryogenic fluids safely and efficiently.",
      },
    ],
    industries: [
      "LNG Export & Import",
      "Domestic Gas Distribution",
      "Industrial Gas Supply",
      "Marine Fuel (LNG/CNG)",
      "Power Generation",
      "Fertilizer & Chemicals",
    ],
    benefits: [
      {
        title: "Accelerated Gas Monetization",
        description:
          "Modular and small-scale LNG solutions enable rapid deployment, allowing operators to bring stranded gas resources to market in 12–18 months.",
      },
      {
        title: "Optimized Plant Economics",
        description:
          "Advanced process simulation and thermal integration reduce specific energy consumption by 10–15%, improving plant operating margins.",
      },
      {
        title: "Fuel Cost Reduction",
        description:
          "Dual-fuel retrofit programs deliver 20–40% fuel cost savings by transitioning from diesel to natural gas in power generation and marine applications.",
      },
      {
        title: "Emissions Reduction",
        description:
          "Gas-for-diesel substitution reduces CO₂ emissions by 25–35% and virtually eliminates SOx and particulate emissions, supporting decarbonization goals.",
      },
    ],
    whyChoose: [
      "Comprehensive gas value chain expertise from wellhead to market",
      "Experience with both mega-scale and small/modular LNG project configurations",
      "Strong partnerships with leading LNG technology licensors and EPC contractors",
      "Proven project delivery track record across Africa, Asia, and the Middle East",
      "Integrated commercial advisory including gas pricing, offtake, and financing support",
    ],
    relatedServices: [
      { slug: "pipelines-gas-infrastructure", title: "Energy Pipelines & Gas Infrastructure" },
      { slug: "alternative-fuels", title: "Alternative Fuels (SAF & Chemical Trading)" },
      { slug: "offshore-marine", title: "Offshore and Marine" },
    ],
    metaTitle: "Natural Gas, LNG, CNG and LPG Services | Gastec Group",
    metaDescription:
      "Gastec provides integrated natural gas solutions including LNG, CNG, LPG processing, mini-LNG plants, and dual-fuel retrofit programs worldwide.",
  },
  {
    slug: "alternative-fuels",
    number: "06",
    title: "Alternative Fuels (SAF & Chemical Trading)",
    shortTitle: "Alternative Fuels",
    iconName: "Leaf",
    eyebrow: "Energy Transition",
    heroDescription:
      "Sustainable aviation fuel, hydrogen, biofuels, and global chemical trading solutions accelerating the transition to a low-carbon energy future.",
    overview:
      "Gastec Group is at the forefront of the global energy transition, providing engineering, commercial advisory, and project development services for alternative fuels and sustainable chemical supply chains. Our Alternative Fuels practice covers sustainable aviation fuel (SAF) production, green and blue hydrogen projects, advanced biofuel facilities, and international chemical trading operations. We help energy companies, airlines, and industrial clients navigate the rapidly evolving landscape of decarbonized fuels — from technology selection and feasibility assessment through plant design, commissioning, and market access.",
    overviewBullets: [
      "SAF production facility design using HEFA, Fischer-Tropsch, and alcohol-to-jet pathways",
      "Hydrogen production project development including electrolysis and SMR with CCS",
      "Advanced biofuel plant engineering for renewable diesel and sustainable marine fuels",
      "Chemical trading advisory including market analysis, logistics, and offtake structuring",
      "Carbon credit strategy and lifecycle emissions assessment for alternative fuel projects",
    ],
    keyServices: [
      {
        title: "Sustainable Aviation Fuel (SAF)",
        description:
          "End-to-end project development for SAF production facilities — from feedstock assessment and technology selection through plant design, construction support, and ASTM certification pathways.",
      },
      {
        title: "Hydrogen Project Development",
        description:
          "Green and blue hydrogen project feasibility, electrolyzer selection, balance-of-plant design, storage systems, and pipeline injection studies for industrial and mobility applications.",
      },
      {
        title: "Biofuel & Renewable Diesel",
        description:
          "Process design and engineering for hydrotreated vegetable oil (HVO), Fischer-Tropsch, and catalytic conversion biofuel facilities using diverse waste and residue feedstocks.",
      },
      {
        title: "Chemical Trading & Supply Chain",
        description:
          "Market intelligence, sourcing, logistics coordination, and contract structuring for international chemical and petrochemical trading operations across emerging and established markets.",
      },
      {
        title: "Carbon & Lifecycle Assessment",
        description:
          "Well-to-wake lifecycle emissions analysis, carbon intensity scoring, and carbon credit optimization for alternative fuel projects seeking regulatory compliance and market premiums.",
      },
      {
        title: "Energy Transition Advisory",
        description:
          "Strategic advisory for energy companies transitioning portfolios — including asset repurposing, technology roadmaps, investment analysis, and regulatory navigation for low-carbon fuels.",
      },
    ],
    technologies: [
      {
        title: "Electrolysis & Hydrogen Systems",
        description:
          "PEM, alkaline, and solid oxide electrolyzer technologies for green hydrogen production integrated with renewable energy sources.",
      },
      {
        title: "Fischer-Tropsch Synthesis",
        description:
          "Gas-to-liquids and biomass-to-liquids Fischer-Tropsch processes for producing synthetic fuels, waxes, and chemical feedstocks.",
      },
      {
        title: "Catalytic Conversion",
        description:
          "Advanced catalytic processes for converting waste plastics, municipal solid waste, and biomass into drop-in liquid fuels.",
      },
      {
        title: "Carbon Capture & Storage",
        description:
          "Post-combustion, pre-combustion, and oxy-fuel capture technologies paired with geological storage or utilization pathways.",
      },
    ],
    industries: [
      "Aviation & Airlines",
      "Marine & Shipping",
      "Chemical Manufacturing",
      "Industrial Decarbonization",
      "Agriculture & Forestry",
      "Waste Management",
    ],
    benefits: [
      {
        title: "Regulatory Compliance",
        description:
          "SAF and alternative fuel projects designed to meet EU ReFuelEU, US LCFS, CORSIA, and other emerging mandates for low-carbon fuel adoption.",
      },
      {
        title: "Market Premium Capture",
        description:
          "Certified sustainable fuels command 2–5x price premiums over conventional fuels — our lifecycle assessment expertise ensures clients capture maximum value.",
      },
      {
        title: "Portfolio Decarbonization",
        description:
          "Strategic integration of alternative fuels into existing refining and energy portfolios, leveraging existing assets and infrastructure to minimize incremental CAPEX.",
      },
      {
        title: "Investment-Ready Project Packages",
        description:
          "Bankable feasibility studies and investor-ready documentation that accelerate project financing and FID decision timelines.",
      },
    ],
    whyChoose: [
      "Integrated engineering and commercial capability across the alternative fuels value chain",
      "Deep knowledge of SAF certification pathways and regulatory compliance requirements",
      "Global chemical trading network with established relationships across key markets",
      "Experience integrating alternative fuel projects with existing energy infrastructure",
      "Commitment to measurable, science-based decarbonization outcomes",
    ],
    relatedServices: [
      { slug: "natural-gas", title: "Natural Gas, LNG, CNG and LPG" },
      { slug: "water-environment", title: "Water & Environment" },
      { slug: "power-transmission", title: "Power and Transmission" },
    ],
    metaTitle: "Alternative Fuels & Chemical Trading | Gastec Group",
    metaDescription:
      "Gastec delivers SAF, hydrogen, biofuel project development and chemical trading advisory for the global energy transition.",
  },
  {
    slug: "water-environment",
    number: "07",
    title: "Water & Environment",
    shortTitle: "Water & Environment",
    iconName: "Waves",
    eyebrow: "Environmental Solutions",
    heroDescription:
      "Comprehensive water treatment, wastewater management, environmental impact assessment, and sustainability solutions for energy, mining, and industrial operations.",
    overview:
      "Gastec Group provides integrated water and environmental services to energy, mining, and industrial clients worldwide. From potable water treatment and industrial wastewater processing to environmental and social impact assessments (ESIA) and sustainability program design, our teams deliver solutions that protect water resources, ensure regulatory compliance, and support long-term operational sustainability. In an era of increasing water stress and environmental scrutiny, we help clients manage their most critical environmental obligations with technical excellence and regulatory expertise.",
    overviewBullets: [
      "Water treatment system design for potable, process, and irrigation applications",
      "Industrial wastewater treatment and zero-liquid-discharge (ZLD) system engineering",
      "Environmental and Social Impact Assessment (ESIA) studies and regulatory permitting",
      "Sustainability strategy development and ESG reporting support",
      "Environmental monitoring, remediation, and closure planning",
    ],
    keyServices: [
      {
        title: "Water Treatment & Purification",
        description:
          "Design and engineering of conventional and advanced water treatment systems including filtration, reverse osmosis, UV disinfection, and desalination for industrial, municipal, and agricultural applications.",
      },
      {
        title: "Wastewater Treatment & ZLD",
        description:
          "Industrial wastewater treatment plant design incorporating primary, secondary, and tertiary treatment stages — with zero-liquid-discharge options for water-scarce environments.",
      },
      {
        title: "Environmental Impact Assessment",
        description:
          "Comprehensive ESIA studies including baseline surveys, impact prediction, mitigation design, public consultation, and regulatory submission for projects in sensitive environments.",
      },
      {
        title: "Sustainability & ESG Advisory",
        description:
          "Corporate sustainability strategy development, materiality assessment, ESG reporting framework alignment (GRI, SASB, TCFD), and sustainability-linked financing support.",
      },
      {
        title: "Environmental Remediation",
        description:
          "Site investigation, risk assessment, and remediation design for contaminated land and groundwater — including soil vapor extraction, bioremediation, and pump-and-treat systems.",
      },
      {
        title: "Water Resource Management",
        description:
          "Integrated water resource planning including hydrogeological assessment, watershed management, water balance modeling, and stakeholder engagement for sustainable water allocation.",
      },
    ],
    technologies: [
      {
        title: "Membrane Filtration Systems",
        description:
          "MF, UF, NF, and RO membrane technologies for water purification, desalination, and industrial process water treatment.",
      },
      {
        title: "Advanced Oxidation Processes",
        description:
          "UV/H₂O₂, ozone, and Fenton-based AOP systems for treating recalcitrant organic pollutants in industrial wastewater.",
      },
      {
        title: "Constructed Wetlands",
        description:
          "Nature-based treatment solutions using engineered wetland systems for passive wastewater treatment and polishing.",
      },
      {
        title: "Real-Time Environmental Monitoring",
        description:
          "IoT-enabled water quality monitoring networks with automated alerting and compliance reporting dashboards.",
      },
    ],
    industries: [
      "Oil & Gas Operations",
      "Mining & Minerals Processing",
      "Power Generation",
      "Municipal Water Supply",
      "Agriculture & Irrigation",
      "Industrial Manufacturing",
    ],
    benefits: [
      {
        title: "Regulatory Compliance Assurance",
        description:
          "Our ESIA and permitting expertise ensures projects meet local and international environmental regulations, avoiding costly delays and penalties.",
      },
      {
        title: "Water Cost Reduction",
        description:
          "Advanced treatment and recycling systems reduce freshwater consumption by 40–70%, lowering operational costs in water-stressed regions.",
      },
      {
        title: "Environmental Risk Mitigation",
        description:
          "Proactive environmental management programs identify and address potential liabilities before they escalate into operational disruptions.",
      },
      {
        title: "Enhanced Social License",
        description:
          "Transparent environmental management and community engagement programs build stakeholder trust and support long-term operational continuity.",
      },
    ],
    whyChoose: [
      "Multidisciplinary team spanning hydrology, chemistry, ecology, and environmental engineering",
      "Proven track record delivering ESIA studies for major energy and mining projects",
      "Expertise in both conventional and advanced water treatment technologies",
      "Deep knowledge of international environmental standards (IFC, Equator Principles, World Bank)",
      "Commitment to science-based environmental management and measurable sustainability outcomes",
    ],
    relatedServices: [
      { slug: "mining-critical-minerals", title: "Mining & Critical Minerals" },
      { slug: "alternative-fuels", title: "Alternative Fuels (SAF & Chemical Trading)" },
      { slug: "power-transmission", title: "Power and Transmission" },
    ],
    metaTitle: "Water & Environment Services | Gastec Group",
    metaDescription:
      "Gastec provides water treatment, wastewater management, ESIA, and sustainability solutions for energy, mining, and industrial operations worldwide.",
  },
  {
    slug: "power-transmission",
    number: "08",
    title: "Power and Transmission",
    shortTitle: "Power & Transmission",
    iconName: "Zap",
    eyebrow: "Energy Infrastructure",
    heroDescription:
      "Renewable and hybrid power systems, captive power plants, hydroelectric development, and high-voltage transmission infrastructure for industrial and utility applications.",
    overview:
      "Gastec Group delivers comprehensive power generation and transmission engineering services across the energy spectrum — from solar PV and hybrid renewable systems to captive gas turbine plants, hydroelectric facilities, and high-voltage transmission networks. We serve industrial clients, utilities, and independent power producers with integrated solutions that balance reliability, cost-efficiency, and sustainability. As grids evolve toward higher renewable penetration and distributed generation, our teams provide the engineering depth and project delivery capability needed to navigate this transformation successfully.",
    overviewBullets: [
      "Solar PV, wind, and hybrid renewable power system design and engineering",
      "Captive and distributed power plant design for industrial facilities",
      "Hydroelectric and dam engineering for medium and large-scale projects",
      "High-voltage transmission line and substation design",
      "Grid integration studies and power system analysis",
    ],
    keyServices: [
      {
        title: "Renewable Power Systems",
        description:
          "Engineering design for utility-scale and distributed solar PV, wind, and hybrid renewable energy systems including battery energy storage integration and grid connection.",
      },
      {
        title: "Captive Power Plants",
        description:
          "Gas turbine, reciprocating engine, and combined-cycle power plant design for industrial facilities requiring reliable, cost-optimized on-site generation.",
      },
      {
        title: "Hydroelectric & Dam Engineering",
        description:
          "Feasibility studies, hydraulic design, turbine selection, and powerhouse engineering for run-of-river and storage-type hydroelectric projects.",
      },
      {
        title: "Transmission & Distribution",
        description:
          "High-voltage transmission line routing, tower design, substation engineering, and distribution network planning for utility and industrial applications.",
      },
      {
        title: "Waste-to-Power & CHP",
        description:
          "Engineering for waste-to-energy plants, biomass power stations, and combined heat and power (CHP) systems that recover energy from waste streams.",
      },
      {
        title: "Grid Integration & Power Studies",
        description:
          "Load flow analysis,短路 studies, transient stability assessment, and grid code compliance studies for power plant interconnection and network planning.",
      },
    ],
    technologies: [
      {
        title: "Battery Energy Storage Systems",
        description:
          "Lithium-ion, flow battery, and hybrid storage configurations for renewable energy firming, peak shaving, and grid stability services.",
      },
      {
        title: "Power System Simulation",
        description:
          "Advanced power system modeling using PSS/E, DIgSILENT PowerFactory, and ETAP for planning, design, and operational analysis.",
      },
      {
        title: "Smart Grid Technologies",
        description:
          "Advanced metering infrastructure, distribution automation, and demand response systems for modern grid operations.",
      },
      {
        title: "Microgrid Design",
        description:
          "Islanded and grid-connected microgrid systems for remote communities, industrial parks, and critical infrastructure facilities.",
      },
    ],
    industries: [
      "Utility Power Generation",
      "Mining & Heavy Industry",
      "Oil & Gas Operations",
      "Manufacturing",
      "Telecommunications",
      "Remote Communities",
    ],
    benefits: [
      {
        title: "Lower Levelized Cost of Energy",
        description:
          "Optimized power system design reduces LCOE by 15–25% through technology selection, layout optimization, and efficient grid integration.",
      },
      {
        title: "Enhanced Power Reliability",
        description:
          "Redundant and resilient power system designs achieve 99.5%+ availability for critical industrial operations and utility supply.",
      },
      {
        title: "Renewable Energy Integration",
        description:
          "Seamless integration of renewable generation with existing power infrastructure, enabling progressive decarbonization without compromising reliability.",
      },
      {
        title: "Reduced Transmission Losses",
        description:
          "Optimized voltage level selection, conductor sizing, and reactive power compensation minimize technical losses across transmission and distribution networks.",
      },
    ],
    whyChoose: [
      "Full-spectrum power engineering capability from generation through transmission to distribution",
      "Experience with both conventional and renewable power technologies across diverse environments",
      "Strong utility and IPP relationships enabling efficient grid connection and PPA negotiation",
      "Proven project delivery track record in challenging locations with limited infrastructure",
      "Integrated approach combining power engineering with environmental and commercial advisory",
    ],
    relatedServices: [
      { slug: "pipelines-gas-infrastructure", title: "Energy Pipelines & Gas Infrastructure" },
      { slug: "alternative-fuels", title: "Alternative Fuels (SAF & Chemical Trading)" },
      { slug: "water-environment", title: "Water & Environment" },
    ],
    metaTitle: "Power and Transmission Services | Gastec Group",
    metaDescription:
      "Gastec provides renewable power systems, captive power plants, hydroelectric engineering, and high-voltage transmission infrastructure worldwide.",
  },
  {
    slug: "pipelines-gas-infrastructure",
    number: "09",
    title: "Energy Pipelines & Gas Infrastructure",
    shortTitle: "Pipelines & Gas Infrastructure",
    iconName: "CircleDot",
    eyebrow: "Pipeline Networks",
    heroDescription:
      "Pipeline engineering, gas distribution networks, SCADA systems, and integrity management solutions connecting energy resources to markets safely and efficiently.",
    overview:
      "Gastec Group delivers specialized pipeline and gas infrastructure engineering services that form the backbone of energy transportation systems worldwide. From conceptual routing and hydraulic design through construction supervision and life-of-field integrity management, our pipeline engineers bring deep expertise to onshore and offshore pipeline projects carrying oil, gas, water, and slurry. We also design gas distribution networks, pressure regulation stations, SCADA and telemetry systems, and storage facilities — ensuring energy reaches end users safely, reliably, and in compliance with international pipeline standards.",
    overviewBullets: [
      "Pipeline route selection, survey, and feasibility study execution",
      "Hydraulic design and pipeline sizing for oil, gas, and multi-product systems",
      "Pipeline construction engineering and welding procedure specification",
      "SCADA system design, telemetry, and remote pipeline monitoring",
      "Integrity management including in-line inspection, corrosion assessment, and repair engineering",
    ],
    keyServices: [
      {
        title: "Pipeline Design & Engineering",
        description:
          "Concept, FEED, and detailed design for onshore and offshore pipelines including material selection, wall thickness calculation, thermal design, and cathodic protection systems.",
      },
      {
        title: "Gas Distribution Networks",
        description:
          "Design and engineering of medium and low-pressure gas distribution networks for residential, commercial, and industrial customers — including metering, pressure regulation, and safety systems.",
      },
      {
        title: "SCADA & Telemetry Systems",
        description:
          "Supervisory control and data acquisition system design, PLC programming, communication network engineering, and control room configuration for pipeline and facility operations.",
      },
      {
        title: "Pipeline Integrity Management",
        description:
          "Risk-based integrity assessment programs incorporating in-line inspection data analysis, corrosion growth modeling, remaining life calculation, and repair/assessment scheduling.",
      },
      {
        title: "Storage & Distribution Facilities",
        description:
          "Design of underground gas storage facilities, LNG peak-shaving plants, propane-air systems, and pressure reduction stations for gas distribution networks.",
      },
      {
        title: "Construction Supervision & QA/QC",
        description:
          "On-site construction management, welding quality assurance, hydrostatic testing supervision, and commissioning support for pipeline and facility construction projects.",
      },
    ],
    technologies: [
      {
        title: "In-Line Inspection (ILI)",
        description:
          "Magnetic flux leakage, ultrasonic, and caliper pig technologies for pipeline defect detection, wall thickness measurement, and geometric profiling.",
      },
      {
        title: "Leak Detection Systems",
        description:
          "Mass balance, acoustic emission, fiber-optic distributed sensing, and real-time transient modeling for pipeline leak detection and localization.",
      },
      {
        title: "Cathodic Protection",
        description:
          "Impressed current and sacrificial anode cathodic protection systems for buried and submerged pipeline corrosion prevention.",
      },
      {
        title: "Pipeline Simulation",
        description:
          "Steady-state and transient hydraulic modeling using SPS, Synergi Pipeline Simulator, and custom simulation tools for pipeline design and operations optimization.",
      },
    ],
    industries: [
      "Oil & Gas Transmission",
      "Gas Distribution & Retail",
      "Water & Wastewater",
      "Mining Slurry Transport",
      "Hydrogen Pipeline Systems",
      "District Cooling",
    ],
    benefits: [
      {
        title: "Safe & Reliable Operations",
        description:
          "Engineered pipeline systems with redundant safety features and integrity management programs achieving industry-leading safety and reliability metrics.",
      },
      {
        title: "Optimized Capital Investment",
        description:
          "Hydraulic optimization and route selection reduce pipeline CAPEX by 10–20% while meeting throughput and pressure requirements throughout the design life.",
      },
      {
        title: "Extended Pipeline Life",
        description:
          "Proactive integrity management programs extend pipeline service life by 15–25 years beyond original design specifications through targeted repair and rehabilitation.",
      },
      {
        title: "Real-Time Operational Visibility",
        description:
          "SCADA and telemetry systems provide operators with complete pipeline visibility, enabling rapid response to operational anomalies and market demand changes.",
      },
    ],
    whyChoose: [
      "Specialized pipeline engineering team with onshore and offshore experience globally",
      "Proven track record on major trunk pipeline and distribution network projects",
      "Integrated capability from design through construction to life-of-field integrity management",
      "Strong relationships with pipeline technology vendors and ILI service providers",
      "Compliance with ASME B31.4/B31.8, ISO 13623, and all major international pipeline standards",
    ],
    relatedServices: [
      { slug: "natural-gas", title: "Natural Gas, LNG, CNG and LPG" },
      { slug: "offshore-marine", title: "Offshore and Marine" },
      { slug: "power-transmission", title: "Power and Transmission" },
    ],
    metaTitle: "Energy Pipelines & Gas Infrastructure | Gastec Group",
    metaDescription:
      "Gastec provides pipeline design, SCADA systems, integrity management, and gas infrastructure engineering for energy transportation systems worldwide.",
  },
  {
    slug: "integrated-urban-rural-multimodal",
    number: "10",
    title: "Integrated Urban–Rural Multi-Modal System",
    shortTitle: "Urban–Rural Systems",
    iconName: "Lightbulb",
    eyebrow: "Future Mobility",
    heroDescription:
      "Developing integrated urban–rural transport systems that improve mobility, strengthen supply chains, and support sustainable regional economic growth.",
    overview:
      "Gastec Group pioneers integrated multimodal transportation systems that bridge urban and rural connectivity gaps across developing and emerging economies. Our Integrated Urban–Rural Multi-Modal System practice combines engineering expertise in electric vehicle retrofits, autonomous monorail systems, CNG vehicle conversions, and electric marine propulsion to create seamless, sustainable mobility networks. We work with governments, urban planners, and transport authorities to design future-ready mobility ecosystems that reduce emissions, lower logistics costs, and connect communities to economic opportunity.",
    overviewBullets: [
      "Electric vehicle powertrain retrofit programs for existing vehicle fleets",
      "Autonomous monorail and guided transit system design and engineering",
      "CNG vehicle conversion programs for public and commercial transport fleets",
      "Electric boat and marine propulsion system design for inland and coastal waterways",
      "Integrated mobility network planning connecting urban centers to rural supply chains",
    ],
    keyServices: [
      {
        title: "EV Powertrain Retrofit",
        description:
          "Engineering and conversion programs for retrofitting existing diesel and petrol vehicles with electric powertrains — including battery pack design, motor selection, charging infrastructure, and fleet management integration.",
      },
      {
        title: "Autonomous Monorail Systems",
        description:
          "Design and feasibility of elevated and at-grade autonomous monorail transit systems for urban corridors, industrial zones, and airport connectivity — offering high-capacity, low-emission public transport.",
      },
      {
        title: "CNG Vehicle Conversion",
        description:
          "Certified conversion of commercial vehicles, buses, and passenger cars to compressed natural gas operation — including CNG storage, filling station design, and safety system engineering.",
      },
      {
        title: "Electric Marine Propulsion",
        description:
          "Battery-electric and hybrid propulsion system design for ferries, cargo vessels, and inland waterway boats — including charging infrastructure and port electrification.",
      },
      {
        title: "Mobility Network Planning",
        description:
          "Multi-modal transport network design integrating road, rail, waterway, and air links to optimize passenger and freight connectivity between urban and rural areas.",
      },
      {
        title: "Smart Transport Infrastructure",
        description:
          "Intelligent transport systems including traffic management, automated fare collection, fleet telematics, and passenger information systems for modern mobility networks.",
      },
    ],
    technologies: [
      {
        title: "Battery & Charging Systems",
        description:
          "Advanced battery pack engineering, fast-charging infrastructure, and wireless charging technologies for electric vehicle and marine applications.",
      },
      {
        title: "Autonomous Navigation",
        description:
          "Guideway automation, obstacle detection, and autonomous vehicle control systems for monorail and guided transit applications.",
      },
      {
        title: "Fleet Management Platforms",
        description:
          "IoT-enabled fleet monitoring, predictive maintenance, route optimization, and energy management systems for multi-modal transport operations.",
      },
      {
        title: "CNG Conversion Technology",
        description:
          "Sequential injection, port injection, and bi-fuel CNG conversion systems for spark-ignition and compression-ignition engines.",
      },
    ],
    industries: [
      "Urban Public Transport",
      "Rural & Regional Connectivity",
      "Maritime & Inland Waterways",
      "Logistics & Freight",
      "Airport Ground Transport",
      "Industrial Campus Mobility",
    ],
    benefits: [
      {
        title: "Reduced Transport Emissions",
        description:
          "EV retrofits and electric marine propulsion reduce transport-sector CO₂ emissions by 40–70%, supporting national climate commitments and air quality improvement.",
      },
      {
        title: "Lower Logistics Costs",
        description:
          "Integrated multimodal networks reduce freight costs by 15–30% through modal optimization, route efficiency, and reduced empty-running.",
      },
      {
        title: "Improved Rural Accessibility",
        description:
          "Connected transport systems bring reliable, affordable mobility to underserved rural communities, stimulating economic development and social inclusion.",
      },
      {
        title: "Extended Vehicle Fleet Life",
        description:
          "Powertrain retrofit programs extend the productive life of existing vehicle fleets by 8–12 years while achieving near-zero tailpipe emissions.",
      },
    ],
    whyChoose: [
      "Pioneering approach combining transport engineering with energy transition technologies",
      "Experience in both urban megacities and challenging rural environments",
      "Integrated capability spanning vehicle engineering, infrastructure, and network planning",
      "Strong relationships with vehicle OEMs, battery suppliers, and transit system integrators",
      "Commitment to sustainable, inclusive mobility solutions that serve all communities",
    ],
    relatedServices: [
      { slug: "alternative-fuels", title: "Alternative Fuels (SAF & Chemical Trading)" },
      { slug: "power-transmission", title: "Power and Transmission" },
      { slug: "ai-agentic-intelligence", title: "AI & Agentic Intelligence Service" },
    ],
    metaTitle: "Integrated Urban–Rural Multi-Modal System | Gastec Group",
    metaDescription:
      "Gastec develops integrated transport systems including EV retrofits, autonomous monorails, CNG conversions, and electric marine propulsion for sustainable mobility.",
  },
];

export function getFocusPageBySlug(slug: string): FocusPageData | undefined {
  return focusPages.find((page) => page.slug === slug);
}
