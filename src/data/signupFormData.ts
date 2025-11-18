export interface SignupFormStep {
  step: number;
  label: string;
}

export const signupSteps: SignupFormStep[] = [
  {step: 1, label: 'Basic'},
  {step: 2, label: 'Details'},
  {step: 3, label: 'Experience'},
  {step: 4, label: 'Discovery'},
  {step: 5, label: 'Timeline'},
];

export interface InstallationOption {
  value: string;
  label: string;
}

export const installationOptions: InstallationOption[] = [
  {value: '0', label: '0'},
  {value: '1-4', label: '1-4'},
  {value: '5-10', label: '5-10'},
  {value: '11-50', label: '11-50'},
  {value: '51-100', label: '51-100'},
  {value: '100+', label: '100+'},
];

export interface DeploymentType {
  value: string;
  label: string;
}

export const deploymentTypes: DeploymentType[] = [
  {value: 'docker', label: 'Docker'},
  {value: 'kubernetes', label: 'Kubernetes'},
  {value: 'airGapped', label: 'Air-gapped'},
  {value: 'onPremise', label: 'On-Premises'},
];

export interface RoleOption {
  value: string;
  label: string;
}

export const roleOptions: RoleOption[] = [
  {value: 'founder', label: 'Founder / Co-Founder'},
  {value: 'executive', label: 'Executive (C-Level / VP)'},
  {value: 'director', label: 'Director / Head of Department'},
  {value: 'senior', label: 'Senior (5+ years experience)'},
  {value: 'mid', label: 'Mid-Level (2-5 years experience)'},
  {value: 'junior', label: 'Junior / Entry Level'},
  {value: 'intern', label: 'Intern / Student'},
];

export interface ExpertiseOption {
  value: string;
  label: string;
}

export const expertiseOptions: ExpertiseOption[] = [
  {value: 'software-engineer', label: 'Software Engineer / Developer'},
  {value: 'product-manager', label: 'Product Manager'},
  {value: 'marketing-growth', label: 'Marketing / Growth'},
  {value: 'sales-bd', label: 'Sales / Business Development'},
  {value: 'data-scientist', label: 'Data Scientist / Analyst'},
  {value: 'operations-admin', label: 'Operations / Admin'},
];

export interface CompanySizeOption {
  value: string;
  label: string;
}

export const companySizeOptions: CompanySizeOption[] = [
  {value: '2000+', label: '2,000+ employees'},
  {value: '501-2000', label: '501-2,000 employees'},
  {value: '201-500', label: '201-500 employees'},
  {value: '51-200', label: '51-200 employees'},
  {value: '11-50', label: '11-50 employees'},
  {value: '2-10', label: '2-10 employees'},
  {value: 'solo', label: 'Just me / Solo'},
];

export interface DiscoveryOption {
  value: string;
  label: string;
}

export const discoveryOptions: DiscoveryOption[] = [
  {value: 'google', label: 'Google'},
  {value: 'reddit', label: 'Reddit'},
  {value: 'hackernews', label: 'Hacker News'},
  {value: 'linkedin', label: 'LinkedIn'},
  {value: 'twitter', label: 'Twitter'},
  {
    value: 'recommendation',
    label: 'Recommendation (friend, co-worker, community)',
  },
  {value: 'llms', label: 'LLMs (ChatGPT, Claude, etc.)'},
  {value: 'offline-events', label: 'Offline Events / Meetups'},
  {value: 'other', label: 'Other'},
];

export interface TimelineOption {
  value: string;
  label: string;
  description: string;
}

export const timelineOptions: TimelineOption[] = [
  {value: 'asap', label: 'ASAP', description: 'Ready to start immediately'},
  {
    value: 'next-weeks',
    label: 'In the next weeks',
    description: 'Planning to start soon',
  },
  {
    value: '1-3-months',
    label: 'In 1-3 months',
    description: 'Getting ready for implementation',
  },
  {
    value: 'exploring',
    label: 'Not sure yet, just exploring',
    description: 'Learning about Distr',
  },
];

export interface FeatureHighlight {
  icon: string;
  title: string;
  description: string;
}

export const featureHighlights: FeatureHighlight[] = [
  {
    icon: 'bi-check-lg',
    title: 'Centralized Management',
    description:
      'View & manage all deployments, artifacts, connected agents, self-managed & BYOC customers.',
  },
  {
    icon: 'bi-check-lg',
    title: 'Deployment Automation',
    description:
      'Helm and Docker agents manage deployments, collect logs and metrics, and remote troubleshooting.',
  },
  {
    icon: 'bi-check-lg',
    title: 'White-label customer portal',
    description:
      'Let your customers control their deployments or download your artifacts.',
  },
  {
    icon: 'bi-check-lg',
    title: 'Container registry',
    description:
      'Distribute OCI-compatible artifacts (Docker images, Helm charts, Terraform modules) with built-in granular access control and analytics.',
  },
  {
    icon: 'bi-check-lg',
    title: 'License Management',
    description:
      'Distribute specific versions of your application to specific customers.',
  },
  {
    icon: 'bi-check-lg',
    title: 'API & SDK',
    description:
      'Programmatically integrate external systems or embed Distr into your own application.',
  },
];
