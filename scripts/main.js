import * as THREE from './vendor/three.module.min.js';

const skillsData = [
  { name: "Red Team Operations", level: 95 },
  { name: "Active Directory Security", level: 94 },
  { name: "Web Pentesting", level: 92 },
  { name: "Cloud Security", level: 86 },
  { name: "Python Automation", level: 89 },
  { name: "PowerShell", level: 88 },
  { name: "Linux PrivEsc", level: 90 },
  { name: "Windows PrivEsc", level: 91 },
  { name: "Threat Emulation", level: 87 },
  { name: "Exploit Development", level: 82 },
  { name: "Incident Analysis", level: 84 },
  { name: "Technical Reporting", level: 93 },
];

const timelineData = [
  { year: "2018", detail: "Started cybersecurity learning path and CTF practice." },
  { year: "2019", detail: "Built first offensive security lab with Active Directory scenarios." },
  { year: "2020", detail: "Completed Security+ and began professional pentesting." },
  { year: "2021", detail: "Expanded into red team simulations and enterprise assessments." },
  { year: "2022", detail: "Focused on AD attack path analysis and Kerberos abuse research." },
  { year: "2023", detail: "Mentored junior analysts and improved reporting standards." },
  { year: "2024", detail: "Performed advanced adversary simulations for mature organizations." },
  { year: "2025", detail: "Built automation-first workflows and scalable security playbooks." },
  { year: "2026", detail: "Launching immersive portfolio and advanced research publications." },
];

const projects = [
  {
    id: 1,
    title: "Operation Node-001",
    category: "red-team",
    impact: "Risk Reduction 61%",
    stack: ["Python", "PowerShell", "Bash", "Burp"],
    description: "Comprehensive security engagement number 1 featuring attack path analysis, remediation mapping, and measurable hardening outcomes for enterprise teams."
  },
  {
    id: 2,
    title: "Operation Node-002",
    category: "web",
    impact: "Risk Reduction 62%",
    stack: ["Python", "PowerShell", "Bash", "Burp"],
    description: "Comprehensive security engagement number 2 featuring attack path analysis, remediation mapping, and measurable hardening outcomes for enterprise teams."
  },
  {
    id: 3,
    title: "Operation Node-003",
    category: "cloud",
    impact: "Risk Reduction 63%",
    stack: ["Python", "PowerShell", "Bash", "Burp"],
    description: "Comprehensive security engagement number 3 featuring attack path analysis, remediation mapping, and measurable hardening outcomes for enterprise teams."
  },
  {
    id: 4,
    title: "Operation Node-004",
    category: "research",
    impact: "Risk Reduction 64%",
    stack: ["Python", "PowerShell", "Bash", "Burp"],
    description: "Comprehensive security engagement number 4 featuring attack path analysis, remediation mapping, and measurable hardening outcomes for enterprise teams."
  },
  {
    id: 5,
    title: "Operation Node-005",
    category: "red-team",
    impact: "Risk Reduction 65%",
    stack: ["Python", "PowerShell", "Bash", "Burp"],
    description: "Comprehensive security engagement number 5 featuring attack path analysis, remediation mapping, and measurable hardening outcomes for enterprise teams."
  },
  {
    id: 6,
    title: "Operation Node-006",
    category: "web",
    impact: "Risk Reduction 66%",
    stack: ["Python", "PowerShell", "Bash", "Burp"],
    description: "Comprehensive security engagement number 6 featuring attack path analysis, remediation mapping, and measurable hardening outcomes for enterprise teams."
  },
  {
    id: 7,
    title: "Operation Node-007",
    category: "cloud",
    impact: "Risk Reduction 67%",
    stack: ["Python", "PowerShell", "Bash", "Burp"],
    description: "Comprehensive security engagement number 7 featuring attack path analysis, remediation mapping, and measurable hardening outcomes for enterprise teams."
  },
  {
    id: 8,
    title: "Operation Node-008",
    category: "research",
    impact: "Risk Reduction 68%",
    stack: ["Python", "PowerShell", "Bash", "Burp"],
    description: "Comprehensive security engagement number 8 featuring attack path analysis, remediation mapping, and measurable hardening outcomes for enterprise teams."
  },
  {
    id: 9,
    title: "Operation Node-009",
    category: "red-team",
    impact: "Risk Reduction 69%",
    stack: ["Python", "PowerShell", "Bash", "Burp"],
    description: "Comprehensive security engagement number 9 featuring attack path analysis, remediation mapping, and measurable hardening outcomes for enterprise teams."
  },
  {
    id: 10,
    title: "Operation Node-010",
    category: "web",
    impact: "Risk Reduction 70%",
    stack: ["Python", "PowerShell", "Bash", "Burp"],
    description: "Comprehensive security engagement number 10 featuring attack path analysis, remediation mapping, and measurable hardening outcomes for enterprise teams."
  },
  {
    id: 11,
    title: "Operation Node-011",
    category: "cloud",
    impact: "Risk Reduction 71%",
    stack: ["Python", "PowerShell", "Bash", "Burp"],
    description: "Comprehensive security engagement number 11 featuring attack path analysis, remediation mapping, and measurable hardening outcomes for enterprise teams."
  },
  {
    id: 12,
    title: "Operation Node-012",
    category: "research",
    impact: "Risk Reduction 72%",
    stack: ["Python", "PowerShell", "Bash", "Burp"],
    description: "Comprehensive security engagement number 12 featuring attack path analysis, remediation mapping, and measurable hardening outcomes for enterprise teams."
  },
  {
    id: 13,
    title: "Operation Node-013",
    category: "red-team",
    impact: "Risk Reduction 73%",
    stack: ["Python", "PowerShell", "Bash", "Burp"],
    description: "Comprehensive security engagement number 13 featuring attack path analysis, remediation mapping, and measurable hardening outcomes for enterprise teams."
  },
  {
    id: 14,
    title: "Operation Node-014",
    category: "web",
    impact: "Risk Reduction 74%",
    stack: ["Python", "PowerShell", "Bash", "Burp"],
    description: "Comprehensive security engagement number 14 featuring attack path analysis, remediation mapping, and measurable hardening outcomes for enterprise teams."
  },
  {
    id: 15,
    title: "Operation Node-015",
    category: "cloud",
    impact: "Risk Reduction 75%",
    stack: ["Python", "PowerShell", "Bash", "Burp"],
    description: "Comprehensive security engagement number 15 featuring attack path analysis, remediation mapping, and measurable hardening outcomes for enterprise teams."
  },
  {
    id: 16,
    title: "Operation Node-016",
    category: "research",
    impact: "Risk Reduction 76%",
    stack: ["Python", "PowerShell", "Bash", "Burp"],
    description: "Comprehensive security engagement number 16 featuring attack path analysis, remediation mapping, and measurable hardening outcomes for enterprise teams."
  },
  {
    id: 17,
    title: "Operation Node-017",
    category: "red-team",
    impact: "Risk Reduction 77%",
    stack: ["Python", "PowerShell", "Bash", "Burp"],
    description: "Comprehensive security engagement number 17 featuring attack path analysis, remediation mapping, and measurable hardening outcomes for enterprise teams."
  },
  {
    id: 18,
    title: "Operation Node-018",
    category: "web",
    impact: "Risk Reduction 78%",
    stack: ["Python", "PowerShell", "Bash", "Burp"],
    description: "Comprehensive security engagement number 18 featuring attack path analysis, remediation mapping, and measurable hardening outcomes for enterprise teams."
  },
  {
    id: 19,
    title: "Operation Node-019",
    category: "cloud",
    impact: "Risk Reduction 79%",
    stack: ["Python", "PowerShell", "Bash", "Burp"],
    description: "Comprehensive security engagement number 19 featuring attack path analysis, remediation mapping, and measurable hardening outcomes for enterprise teams."
  },
  {
    id: 20,
    title: "Operation Node-020",
    category: "research",
    impact: "Risk Reduction 80%",
    stack: ["Python", "PowerShell", "Bash", "Burp"],
    description: "Comprehensive security engagement number 20 featuring attack path analysis, remediation mapping, and measurable hardening outcomes for enterprise teams."
  },
  {
    id: 21,
    title: "Operation Node-021",
    category: "red-team",
    impact: "Risk Reduction 81%",
    stack: ["Python", "PowerShell", "Bash", "Burp"],
    description: "Comprehensive security engagement number 21 featuring attack path analysis, remediation mapping, and measurable hardening outcomes for enterprise teams."
  },
  {
    id: 22,
    title: "Operation Node-022",
    category: "web",
    impact: "Risk Reduction 82%",
    stack: ["Python", "PowerShell", "Bash", "Burp"],
    description: "Comprehensive security engagement number 22 featuring attack path analysis, remediation mapping, and measurable hardening outcomes for enterprise teams."
  },
  {
    id: 23,
    title: "Operation Node-023",
    category: "cloud",
    impact: "Risk Reduction 83%",
    stack: ["Python", "PowerShell", "Bash", "Burp"],
    description: "Comprehensive security engagement number 23 featuring attack path analysis, remediation mapping, and measurable hardening outcomes for enterprise teams."
  },
  {
    id: 24,
    title: "Operation Node-024",
    category: "research",
    impact: "Risk Reduction 84%",
    stack: ["Python", "PowerShell", "Bash", "Burp"],
    description: "Comprehensive security engagement number 24 featuring attack path analysis, remediation mapping, and measurable hardening outcomes for enterprise teams."
  },
  {
    id: 25,
    title: "Operation Node-025",
    category: "red-team",
    impact: "Risk Reduction 85%",
    stack: ["Python", "PowerShell", "Bash", "Burp"],
    description: "Comprehensive security engagement number 25 featuring attack path analysis, remediation mapping, and measurable hardening outcomes for enterprise teams."
  },
  {
    id: 26,
    title: "Operation Node-026",
    category: "web",
    impact: "Risk Reduction 86%",
    stack: ["Python", "PowerShell", "Bash", "Burp"],
    description: "Comprehensive security engagement number 26 featuring attack path analysis, remediation mapping, and measurable hardening outcomes for enterprise teams."
  },
  {
    id: 27,
    title: "Operation Node-027",
    category: "cloud",
    impact: "Risk Reduction 87%",
    stack: ["Python", "PowerShell", "Bash", "Burp"],
    description: "Comprehensive security engagement number 27 featuring attack path analysis, remediation mapping, and measurable hardening outcomes for enterprise teams."
  },
  {
    id: 28,
    title: "Operation Node-028",
    category: "research",
    impact: "Risk Reduction 88%",
    stack: ["Python", "PowerShell", "Bash", "Burp"],
    description: "Comprehensive security engagement number 28 featuring attack path analysis, remediation mapping, and measurable hardening outcomes for enterprise teams."
  },
  {
    id: 29,
    title: "Operation Node-029",
    category: "red-team",
    impact: "Risk Reduction 89%",
    stack: ["Python", "PowerShell", "Bash", "Burp"],
    description: "Comprehensive security engagement number 29 featuring attack path analysis, remediation mapping, and measurable hardening outcomes for enterprise teams."
  },
  {
    id: 30,
    title: "Operation Node-030",
    category: "web",
    impact: "Risk Reduction 90%",
    stack: ["Python", "PowerShell", "Bash", "Burp"],
    description: "Comprehensive security engagement number 30 featuring attack path analysis, remediation mapping, and measurable hardening outcomes for enterprise teams."
  },
  {
    id: 31,
    title: "Operation Node-031",
    category: "cloud",
    impact: "Risk Reduction 91%",
    stack: ["Python", "PowerShell", "Bash", "Burp"],
    description: "Comprehensive security engagement number 31 featuring attack path analysis, remediation mapping, and measurable hardening outcomes for enterprise teams."
  },
  {
    id: 32,
    title: "Operation Node-032",
    category: "research",
    impact: "Risk Reduction 92%",
    stack: ["Python", "PowerShell", "Bash", "Burp"],
    description: "Comprehensive security engagement number 32 featuring attack path analysis, remediation mapping, and measurable hardening outcomes for enterprise teams."
  },
  {
    id: 33,
    title: "Operation Node-033",
    category: "red-team",
    impact: "Risk Reduction 93%",
    stack: ["Python", "PowerShell", "Bash", "Burp"],
    description: "Comprehensive security engagement number 33 featuring attack path analysis, remediation mapping, and measurable hardening outcomes for enterprise teams."
  },
  {
    id: 34,
    title: "Operation Node-034",
    category: "web",
    impact: "Risk Reduction 94%",
    stack: ["Python", "PowerShell", "Bash", "Burp"],
    description: "Comprehensive security engagement number 34 featuring attack path analysis, remediation mapping, and measurable hardening outcomes for enterprise teams."
  },
  {
    id: 35,
    title: "Operation Node-035",
    category: "cloud",
    impact: "Risk Reduction 60%",
    stack: ["Python", "PowerShell", "Bash", "Burp"],
    description: "Comprehensive security engagement number 35 featuring attack path analysis, remediation mapping, and measurable hardening outcomes for enterprise teams."
  },
  {
    id: 36,
    title: "Operation Node-036",
    category: "research",
    impact: "Risk Reduction 61%",
    stack: ["Python", "PowerShell", "Bash", "Burp"],
    description: "Comprehensive security engagement number 36 featuring attack path analysis, remediation mapping, and measurable hardening outcomes for enterprise teams."
  },
  {
    id: 37,
    title: "Operation Node-037",
    category: "red-team",
    impact: "Risk Reduction 62%",
    stack: ["Python", "PowerShell", "Bash", "Burp"],
    description: "Comprehensive security engagement number 37 featuring attack path analysis, remediation mapping, and measurable hardening outcomes for enterprise teams."
  },
  {
    id: 38,
    title: "Operation Node-038",
    category: "web",
    impact: "Risk Reduction 63%",
    stack: ["Python", "PowerShell", "Bash", "Burp"],
    description: "Comprehensive security engagement number 38 featuring attack path analysis, remediation mapping, and measurable hardening outcomes for enterprise teams."
  },
  {
    id: 39,
    title: "Operation Node-039",
    category: "cloud",
    impact: "Risk Reduction 64%",
    stack: ["Python", "PowerShell", "Bash", "Burp"],
    description: "Comprehensive security engagement number 39 featuring attack path analysis, remediation mapping, and measurable hardening outcomes for enterprise teams."
  },
  {
    id: 40,
    title: "Operation Node-040",
    category: "research",
    impact: "Risk Reduction 65%",
    stack: ["Python", "PowerShell", "Bash", "Burp"],
    description: "Comprehensive security engagement number 40 featuring attack path analysis, remediation mapping, and measurable hardening outcomes for enterprise teams."
  },
  {
    id: 41,
    title: "Operation Node-041",
    category: "red-team",
    impact: "Risk Reduction 66%",
    stack: ["Python", "PowerShell", "Bash", "Burp"],
    description: "Comprehensive security engagement number 41 featuring attack path analysis, remediation mapping, and measurable hardening outcomes for enterprise teams."
  },
  {
    id: 42,
    title: "Operation Node-042",
    category: "web",
    impact: "Risk Reduction 67%",
    stack: ["Python", "PowerShell", "Bash", "Burp"],
    description: "Comprehensive security engagement number 42 featuring attack path analysis, remediation mapping, and measurable hardening outcomes for enterprise teams."
  },
  {
    id: 43,
    title: "Operation Node-043",
    category: "cloud",
    impact: "Risk Reduction 68%",
    stack: ["Python", "PowerShell", "Bash", "Burp"],
    description: "Comprehensive security engagement number 43 featuring attack path analysis, remediation mapping, and measurable hardening outcomes for enterprise teams."
  },
  {
    id: 44,
    title: "Operation Node-044",
    category: "research",
    impact: "Risk Reduction 69%",
    stack: ["Python", "PowerShell", "Bash", "Burp"],
    description: "Comprehensive security engagement number 44 featuring attack path analysis, remediation mapping, and measurable hardening outcomes for enterprise teams."
  },
  {
    id: 45,
    title: "Operation Node-045",
    category: "red-team",
    impact: "Risk Reduction 70%",
    stack: ["Python", "PowerShell", "Bash", "Burp"],
    description: "Comprehensive security engagement number 45 featuring attack path analysis, remediation mapping, and measurable hardening outcomes for enterprise teams."
  },
  {
    id: 46,
    title: "Operation Node-046",
    category: "web",
    impact: "Risk Reduction 71%",
    stack: ["Python", "PowerShell", "Bash", "Burp"],
    description: "Comprehensive security engagement number 46 featuring attack path analysis, remediation mapping, and measurable hardening outcomes for enterprise teams."
  },
  {
    id: 47,
    title: "Operation Node-047",
    category: "cloud",
    impact: "Risk Reduction 72%",
    stack: ["Python", "PowerShell", "Bash", "Burp"],
    description: "Comprehensive security engagement number 47 featuring attack path analysis, remediation mapping, and measurable hardening outcomes for enterprise teams."
  },
  {
    id: 48,
    title: "Operation Node-048",
    category: "research",
    impact: "Risk Reduction 73%",
    stack: ["Python", "PowerShell", "Bash", "Burp"],
    description: "Comprehensive security engagement number 48 featuring attack path analysis, remediation mapping, and measurable hardening outcomes for enterprise teams."
  },
  {
    id: 49,
    title: "Operation Node-049",
    category: "red-team",
    impact: "Risk Reduction 74%",
    stack: ["Python", "PowerShell", "Bash", "Burp"],
    description: "Comprehensive security engagement number 49 featuring attack path analysis, remediation mapping, and measurable hardening outcomes for enterprise teams."
  },
  {
    id: 50,
    title: "Operation Node-050",
    category: "web",
    impact: "Risk Reduction 75%",
    stack: ["Python", "PowerShell", "Bash", "Burp"],
    description: "Comprehensive security engagement number 50 featuring attack path analysis, remediation mapping, and measurable hardening outcomes for enterprise teams."
  },
  {
    id: 51,
    title: "Operation Node-051",
    category: "cloud",
    impact: "Risk Reduction 76%",
    stack: ["Python", "PowerShell", "Bash", "Burp"],
    description: "Comprehensive security engagement number 51 featuring attack path analysis, remediation mapping, and measurable hardening outcomes for enterprise teams."
  },
  {
    id: 52,
    title: "Operation Node-052",
    category: "research",
    impact: "Risk Reduction 77%",
    stack: ["Python", "PowerShell", "Bash", "Burp"],
    description: "Comprehensive security engagement number 52 featuring attack path analysis, remediation mapping, and measurable hardening outcomes for enterprise teams."
  },
  {
    id: 53,
    title: "Operation Node-053",
    category: "red-team",
    impact: "Risk Reduction 78%",
    stack: ["Python", "PowerShell", "Bash", "Burp"],
    description: "Comprehensive security engagement number 53 featuring attack path analysis, remediation mapping, and measurable hardening outcomes for enterprise teams."
  },
  {
    id: 54,
    title: "Operation Node-054",
    category: "web",
    impact: "Risk Reduction 79%",
    stack: ["Python", "PowerShell", "Bash", "Burp"],
    description: "Comprehensive security engagement number 54 featuring attack path analysis, remediation mapping, and measurable hardening outcomes for enterprise teams."
  },
  {
    id: 55,
    title: "Operation Node-055",
    category: "cloud",
    impact: "Risk Reduction 80%",
    stack: ["Python", "PowerShell", "Bash", "Burp"],
    description: "Comprehensive security engagement number 55 featuring attack path analysis, remediation mapping, and measurable hardening outcomes for enterprise teams."
  },
  {
    id: 56,
    title: "Operation Node-056",
    category: "research",
    impact: "Risk Reduction 81%",
    stack: ["Python", "PowerShell", "Bash", "Burp"],
    description: "Comprehensive security engagement number 56 featuring attack path analysis, remediation mapping, and measurable hardening outcomes for enterprise teams."
  },
  {
    id: 57,
    title: "Operation Node-057",
    category: "red-team",
    impact: "Risk Reduction 82%",
    stack: ["Python", "PowerShell", "Bash", "Burp"],
    description: "Comprehensive security engagement number 57 featuring attack path analysis, remediation mapping, and measurable hardening outcomes for enterprise teams."
  },
  {
    id: 58,
    title: "Operation Node-058",
    category: "web",
    impact: "Risk Reduction 83%",
    stack: ["Python", "PowerShell", "Bash", "Burp"],
    description: "Comprehensive security engagement number 58 featuring attack path analysis, remediation mapping, and measurable hardening outcomes for enterprise teams."
  },
  {
    id: 59,
    title: "Operation Node-059",
    category: "cloud",
    impact: "Risk Reduction 84%",
    stack: ["Python", "PowerShell", "Bash", "Burp"],
    description: "Comprehensive security engagement number 59 featuring attack path analysis, remediation mapping, and measurable hardening outcomes for enterprise teams."
  },
  {
    id: 60,
    title: "Operation Node-060",
    category: "research",
    impact: "Risk Reduction 85%",
    stack: ["Python", "PowerShell", "Bash", "Burp"],
    description: "Comprehensive security engagement number 60 featuring attack path analysis, remediation mapping, and measurable hardening outcomes for enterprise teams."
  },
  {
    id: 61,
    title: "Operation Node-061",
    category: "red-team",
    impact: "Risk Reduction 86%",
    stack: ["Python", "PowerShell", "Bash", "Burp"],
    description: "Comprehensive security engagement number 61 featuring attack path analysis, remediation mapping, and measurable hardening outcomes for enterprise teams."
  },
  {
    id: 62,
    title: "Operation Node-062",
    category: "web",
    impact: "Risk Reduction 87%",
    stack: ["Python", "PowerShell", "Bash", "Burp"],
    description: "Comprehensive security engagement number 62 featuring attack path analysis, remediation mapping, and measurable hardening outcomes for enterprise teams."
  },
  {
    id: 63,
    title: "Operation Node-063",
    category: "cloud",
    impact: "Risk Reduction 88%",
    stack: ["Python", "PowerShell", "Bash", "Burp"],
    description: "Comprehensive security engagement number 63 featuring attack path analysis, remediation mapping, and measurable hardening outcomes for enterprise teams."
  },
  {
    id: 64,
    title: "Operation Node-064",
    category: "research",
    impact: "Risk Reduction 89%",
    stack: ["Python", "PowerShell", "Bash", "Burp"],
    description: "Comprehensive security engagement number 64 featuring attack path analysis, remediation mapping, and measurable hardening outcomes for enterprise teams."
  },
  {
    id: 65,
    title: "Operation Node-065",
    category: "red-team",
    impact: "Risk Reduction 90%",
    stack: ["Python", "PowerShell", "Bash", "Burp"],
    description: "Comprehensive security engagement number 65 featuring attack path analysis, remediation mapping, and measurable hardening outcomes for enterprise teams."
  },
  {
    id: 66,
    title: "Operation Node-066",
    category: "web",
    impact: "Risk Reduction 91%",
    stack: ["Python", "PowerShell", "Bash", "Burp"],
    description: "Comprehensive security engagement number 66 featuring attack path analysis, remediation mapping, and measurable hardening outcomes for enterprise teams."
  },
  {
    id: 67,
    title: "Operation Node-067",
    category: "cloud",
    impact: "Risk Reduction 92%",
    stack: ["Python", "PowerShell", "Bash", "Burp"],
    description: "Comprehensive security engagement number 67 featuring attack path analysis, remediation mapping, and measurable hardening outcomes for enterprise teams."
  },
  {
    id: 68,
    title: "Operation Node-068",
    category: "research",
    impact: "Risk Reduction 93%",
    stack: ["Python", "PowerShell", "Bash", "Burp"],
    description: "Comprehensive security engagement number 68 featuring attack path analysis, remediation mapping, and measurable hardening outcomes for enterprise teams."
  },
  {
    id: 69,
    title: "Operation Node-069",
    category: "red-team",
    impact: "Risk Reduction 94%",
    stack: ["Python", "PowerShell", "Bash", "Burp"],
    description: "Comprehensive security engagement number 69 featuring attack path analysis, remediation mapping, and measurable hardening outcomes for enterprise teams."
  },
  {
    id: 70,
    title: "Operation Node-070",
    category: "web",
    impact: "Risk Reduction 60%",
    stack: ["Python", "PowerShell", "Bash", "Burp"],
    description: "Comprehensive security engagement number 70 featuring attack path analysis, remediation mapping, and measurable hardening outcomes for enterprise teams."
  },
  {
    id: 71,
    title: "Operation Node-071",
    category: "cloud",
    impact: "Risk Reduction 61%",
    stack: ["Python", "PowerShell", "Bash", "Burp"],
    description: "Comprehensive security engagement number 71 featuring attack path analysis, remediation mapping, and measurable hardening outcomes for enterprise teams."
  },
  {
    id: 72,
    title: "Operation Node-072",
    category: "research",
    impact: "Risk Reduction 62%",
    stack: ["Python", "PowerShell", "Bash", "Burp"],
    description: "Comprehensive security engagement number 72 featuring attack path analysis, remediation mapping, and measurable hardening outcomes for enterprise teams."
  },
  {
    id: 73,
    title: "Operation Node-073",
    category: "red-team",
    impact: "Risk Reduction 63%",
    stack: ["Python", "PowerShell", "Bash", "Burp"],
    description: "Comprehensive security engagement number 73 featuring attack path analysis, remediation mapping, and measurable hardening outcomes for enterprise teams."
  },
  {
    id: 74,
    title: "Operation Node-074",
    category: "web",
    impact: "Risk Reduction 64%",
    stack: ["Python", "PowerShell", "Bash", "Burp"],
    description: "Comprehensive security engagement number 74 featuring attack path analysis, remediation mapping, and measurable hardening outcomes for enterprise teams."
  },
  {
    id: 75,
    title: "Operation Node-075",
    category: "cloud",
    impact: "Risk Reduction 65%",
    stack: ["Python", "PowerShell", "Bash", "Burp"],
    description: "Comprehensive security engagement number 75 featuring attack path analysis, remediation mapping, and measurable hardening outcomes for enterprise teams."
  },
  {
    id: 76,
    title: "Operation Node-076",
    category: "research",
    impact: "Risk Reduction 66%",
    stack: ["Python", "PowerShell", "Bash", "Burp"],
    description: "Comprehensive security engagement number 76 featuring attack path analysis, remediation mapping, and measurable hardening outcomes for enterprise teams."
  },
  {
    id: 77,
    title: "Operation Node-077",
    category: "red-team",
    impact: "Risk Reduction 67%",
    stack: ["Python", "PowerShell", "Bash", "Burp"],
    description: "Comprehensive security engagement number 77 featuring attack path analysis, remediation mapping, and measurable hardening outcomes for enterprise teams."
  },
  {
    id: 78,
    title: "Operation Node-078",
    category: "web",
    impact: "Risk Reduction 68%",
    stack: ["Python", "PowerShell", "Bash", "Burp"],
    description: "Comprehensive security engagement number 78 featuring attack path analysis, remediation mapping, and measurable hardening outcomes for enterprise teams."
  },
  {
    id: 79,
    title: "Operation Node-079",
    category: "cloud",
    impact: "Risk Reduction 69%",
    stack: ["Python", "PowerShell", "Bash", "Burp"],
    description: "Comprehensive security engagement number 79 featuring attack path analysis, remediation mapping, and measurable hardening outcomes for enterprise teams."
  },
  {
    id: 80,
    title: "Operation Node-080",
    category: "research",
    impact: "Risk Reduction 70%",
    stack: ["Python", "PowerShell", "Bash", "Burp"],
    description: "Comprehensive security engagement number 80 featuring attack path analysis, remediation mapping, and measurable hardening outcomes for enterprise teams."
  },
  {
    id: 81,
    title: "Operation Node-081",
    category: "red-team",
    impact: "Risk Reduction 71%",
    stack: ["Python", "PowerShell", "Bash", "Burp"],
    description: "Comprehensive security engagement number 81 featuring attack path analysis, remediation mapping, and measurable hardening outcomes for enterprise teams."
  },
  {
    id: 82,
    title: "Operation Node-082",
    category: "web",
    impact: "Risk Reduction 72%",
    stack: ["Python", "PowerShell", "Bash", "Burp"],
    description: "Comprehensive security engagement number 82 featuring attack path analysis, remediation mapping, and measurable hardening outcomes for enterprise teams."
  },
  {
    id: 83,
    title: "Operation Node-083",
    category: "cloud",
    impact: "Risk Reduction 73%",
    stack: ["Python", "PowerShell", "Bash", "Burp"],
    description: "Comprehensive security engagement number 83 featuring attack path analysis, remediation mapping, and measurable hardening outcomes for enterprise teams."
  },
  {
    id: 84,
    title: "Operation Node-084",
    category: "research",
    impact: "Risk Reduction 74%",
    stack: ["Python", "PowerShell", "Bash", "Burp"],
    description: "Comprehensive security engagement number 84 featuring attack path analysis, remediation mapping, and measurable hardening outcomes for enterprise teams."
  },
  {
    id: 85,
    title: "Operation Node-085",
    category: "red-team",
    impact: "Risk Reduction 75%",
    stack: ["Python", "PowerShell", "Bash", "Burp"],
    description: "Comprehensive security engagement number 85 featuring attack path analysis, remediation mapping, and measurable hardening outcomes for enterprise teams."
  },
  {
    id: 86,
    title: "Operation Node-086",
    category: "web",
    impact: "Risk Reduction 76%",
    stack: ["Python", "PowerShell", "Bash", "Burp"],
    description: "Comprehensive security engagement number 86 featuring attack path analysis, remediation mapping, and measurable hardening outcomes for enterprise teams."
  },
  {
    id: 87,
    title: "Operation Node-087",
    category: "cloud",
    impact: "Risk Reduction 77%",
    stack: ["Python", "PowerShell", "Bash", "Burp"],
    description: "Comprehensive security engagement number 87 featuring attack path analysis, remediation mapping, and measurable hardening outcomes for enterprise teams."
  },
  {
    id: 88,
    title: "Operation Node-088",
    category: "research",
    impact: "Risk Reduction 78%",
    stack: ["Python", "PowerShell", "Bash", "Burp"],
    description: "Comprehensive security engagement number 88 featuring attack path analysis, remediation mapping, and measurable hardening outcomes for enterprise teams."
  },
  {
    id: 89,
    title: "Operation Node-089",
    category: "red-team",
    impact: "Risk Reduction 79%",
    stack: ["Python", "PowerShell", "Bash", "Burp"],
    description: "Comprehensive security engagement number 89 featuring attack path analysis, remediation mapping, and measurable hardening outcomes for enterprise teams."
  },
  {
    id: 90,
    title: "Operation Node-090",
    category: "web",
    impact: "Risk Reduction 80%",
    stack: ["Python", "PowerShell", "Bash", "Burp"],
    description: "Comprehensive security engagement number 90 featuring attack path analysis, remediation mapping, and measurable hardening outcomes for enterprise teams."
  },
  {
    id: 91,
    title: "Operation Node-091",
    category: "cloud",
    impact: "Risk Reduction 81%",
    stack: ["Python", "PowerShell", "Bash", "Burp"],
    description: "Comprehensive security engagement number 91 featuring attack path analysis, remediation mapping, and measurable hardening outcomes for enterprise teams."
  },
  {
    id: 92,
    title: "Operation Node-092",
    category: "research",
    impact: "Risk Reduction 82%",
    stack: ["Python", "PowerShell", "Bash", "Burp"],
    description: "Comprehensive security engagement number 92 featuring attack path analysis, remediation mapping, and measurable hardening outcomes for enterprise teams."
  },
  {
    id: 93,
    title: "Operation Node-093",
    category: "red-team",
    impact: "Risk Reduction 83%",
    stack: ["Python", "PowerShell", "Bash", "Burp"],
    description: "Comprehensive security engagement number 93 featuring attack path analysis, remediation mapping, and measurable hardening outcomes for enterprise teams."
  },
  {
    id: 94,
    title: "Operation Node-094",
    category: "web",
    impact: "Risk Reduction 84%",
    stack: ["Python", "PowerShell", "Bash", "Burp"],
    description: "Comprehensive security engagement number 94 featuring attack path analysis, remediation mapping, and measurable hardening outcomes for enterprise teams."
  },
  {
    id: 95,
    title: "Operation Node-095",
    category: "cloud",
    impact: "Risk Reduction 85%",
    stack: ["Python", "PowerShell", "Bash", "Burp"],
    description: "Comprehensive security engagement number 95 featuring attack path analysis, remediation mapping, and measurable hardening outcomes for enterprise teams."
  },
  {
    id: 96,
    title: "Operation Node-096",
    category: "research",
    impact: "Risk Reduction 86%",
    stack: ["Python", "PowerShell", "Bash", "Burp"],
    description: "Comprehensive security engagement number 96 featuring attack path analysis, remediation mapping, and measurable hardening outcomes for enterprise teams."
  },
  {
    id: 97,
    title: "Operation Node-097",
    category: "red-team",
    impact: "Risk Reduction 87%",
    stack: ["Python", "PowerShell", "Bash", "Burp"],
    description: "Comprehensive security engagement number 97 featuring attack path analysis, remediation mapping, and measurable hardening outcomes for enterprise teams."
  },
  {
    id: 98,
    title: "Operation Node-098",
    category: "web",
    impact: "Risk Reduction 88%",
    stack: ["Python", "PowerShell", "Bash", "Burp"],
    description: "Comprehensive security engagement number 98 featuring attack path analysis, remediation mapping, and measurable hardening outcomes for enterprise teams."
  },
  {
    id: 99,
    title: "Operation Node-099",
    category: "cloud",
    impact: "Risk Reduction 89%",
    stack: ["Python", "PowerShell", "Bash", "Burp"],
    description: "Comprehensive security engagement number 99 featuring attack path analysis, remediation mapping, and measurable hardening outcomes for enterprise teams."
  },
  {
    id: 100,
    title: "Operation Node-100",
    category: "research",
    impact: "Risk Reduction 90%",
    stack: ["Python", "PowerShell", "Bash", "Burp"],
    description: "Comprehensive security engagement number 100 featuring attack path analysis, remediation mapping, and measurable hardening outcomes for enterprise teams."
  },
  {
    id: 101,
    title: "Operation Node-101",
    category: "red-team",
    impact: "Risk Reduction 91%",
    stack: ["Python", "PowerShell", "Bash", "Burp"],
    description: "Comprehensive security engagement number 101 featuring attack path analysis, remediation mapping, and measurable hardening outcomes for enterprise teams."
  },
  {
    id: 102,
    title: "Operation Node-102",
    category: "web",
    impact: "Risk Reduction 92%",
    stack: ["Python", "PowerShell", "Bash", "Burp"],
    description: "Comprehensive security engagement number 102 featuring attack path analysis, remediation mapping, and measurable hardening outcomes for enterprise teams."
  },
  {
    id: 103,
    title: "Operation Node-103",
    category: "cloud",
    impact: "Risk Reduction 93%",
    stack: ["Python", "PowerShell", "Bash", "Burp"],
    description: "Comprehensive security engagement number 103 featuring attack path analysis, remediation mapping, and measurable hardening outcomes for enterprise teams."
  },
  {
    id: 104,
    title: "Operation Node-104",
    category: "research",
    impact: "Risk Reduction 94%",
    stack: ["Python", "PowerShell", "Bash", "Burp"],
    description: "Comprehensive security engagement number 104 featuring attack path analysis, remediation mapping, and measurable hardening outcomes for enterprise teams."
  },
  {
    id: 105,
    title: "Operation Node-105",
    category: "red-team",
    impact: "Risk Reduction 60%",
    stack: ["Python", "PowerShell", "Bash", "Burp"],
    description: "Comprehensive security engagement number 105 featuring attack path analysis, remediation mapping, and measurable hardening outcomes for enterprise teams."
  },
  {
    id: 106,
    title: "Operation Node-106",
    category: "web",
    impact: "Risk Reduction 61%",
    stack: ["Python", "PowerShell", "Bash", "Burp"],
    description: "Comprehensive security engagement number 106 featuring attack path analysis, remediation mapping, and measurable hardening outcomes for enterprise teams."
  },
  {
    id: 107,
    title: "Operation Node-107",
    category: "cloud",
    impact: "Risk Reduction 62%",
    stack: ["Python", "PowerShell", "Bash", "Burp"],
    description: "Comprehensive security engagement number 107 featuring attack path analysis, remediation mapping, and measurable hardening outcomes for enterprise teams."
  },
  {
    id: 108,
    title: "Operation Node-108",
    category: "research",
    impact: "Risk Reduction 63%",
    stack: ["Python", "PowerShell", "Bash", "Burp"],
    description: "Comprehensive security engagement number 108 featuring attack path analysis, remediation mapping, and measurable hardening outcomes for enterprise teams."
  },
  {
    id: 109,
    title: "Operation Node-109",
    category: "red-team",
    impact: "Risk Reduction 64%",
    stack: ["Python", "PowerShell", "Bash", "Burp"],
    description: "Comprehensive security engagement number 109 featuring attack path analysis, remediation mapping, and measurable hardening outcomes for enterprise teams."
  },
  {
    id: 110,
    title: "Operation Node-110",
    category: "web",
    impact: "Risk Reduction 65%",
    stack: ["Python", "PowerShell", "Bash", "Burp"],
    description: "Comprehensive security engagement number 110 featuring attack path analysis, remediation mapping, and measurable hardening outcomes for enterprise teams."
  },
  {
    id: 111,
    title: "Operation Node-111",
    category: "cloud",
    impact: "Risk Reduction 66%",
    stack: ["Python", "PowerShell", "Bash", "Burp"],
    description: "Comprehensive security engagement number 111 featuring attack path analysis, remediation mapping, and measurable hardening outcomes for enterprise teams."
  },
  {
    id: 112,
    title: "Operation Node-112",
    category: "research",
    impact: "Risk Reduction 67%",
    stack: ["Python", "PowerShell", "Bash", "Burp"],
    description: "Comprehensive security engagement number 112 featuring attack path analysis, remediation mapping, and measurable hardening outcomes for enterprise teams."
  },
  {
    id: 113,
    title: "Operation Node-113",
    category: "red-team",
    impact: "Risk Reduction 68%",
    stack: ["Python", "PowerShell", "Bash", "Burp"],
    description: "Comprehensive security engagement number 113 featuring attack path analysis, remediation mapping, and measurable hardening outcomes for enterprise teams."
  },
  {
    id: 114,
    title: "Operation Node-114",
    category: "web",
    impact: "Risk Reduction 69%",
    stack: ["Python", "PowerShell", "Bash", "Burp"],
    description: "Comprehensive security engagement number 114 featuring attack path analysis, remediation mapping, and measurable hardening outcomes for enterprise teams."
  },
  {
    id: 115,
    title: "Operation Node-115",
    category: "cloud",
    impact: "Risk Reduction 70%",
    stack: ["Python", "PowerShell", "Bash", "Burp"],
    description: "Comprehensive security engagement number 115 featuring attack path analysis, remediation mapping, and measurable hardening outcomes for enterprise teams."
  },
  {
    id: 116,
    title: "Operation Node-116",
    category: "research",
    impact: "Risk Reduction 71%",
    stack: ["Python", "PowerShell", "Bash", "Burp"],
    description: "Comprehensive security engagement number 116 featuring attack path analysis, remediation mapping, and measurable hardening outcomes for enterprise teams."
  },
  {
    id: 117,
    title: "Operation Node-117",
    category: "red-team",
    impact: "Risk Reduction 72%",
    stack: ["Python", "PowerShell", "Bash", "Burp"],
    description: "Comprehensive security engagement number 117 featuring attack path analysis, remediation mapping, and measurable hardening outcomes for enterprise teams."
  },
  {
    id: 118,
    title: "Operation Node-118",
    category: "web",
    impact: "Risk Reduction 73%",
    stack: ["Python", "PowerShell", "Bash", "Burp"],
    description: "Comprehensive security engagement number 118 featuring attack path analysis, remediation mapping, and measurable hardening outcomes for enterprise teams."
  },
  {
    id: 119,
    title: "Operation Node-119",
    category: "cloud",
    impact: "Risk Reduction 74%",
    stack: ["Python", "PowerShell", "Bash", "Burp"],
    description: "Comprehensive security engagement number 119 featuring attack path analysis, remediation mapping, and measurable hardening outcomes for enterprise teams."
  },
  {
    id: 120,
    title: "Operation Node-120",
    category: "research",
    impact: "Risk Reduction 75%",
    stack: ["Python", "PowerShell", "Bash", "Burp"],
    description: "Comprehensive security engagement number 120 featuring attack path analysis, remediation mapping, and measurable hardening outcomes for enterprise teams."
  },
  {
    id: 121,
    title: "Operation Node-121",
    category: "red-team",
    impact: "Risk Reduction 76%",
    stack: ["Python", "PowerShell", "Bash", "Burp"],
    description: "Comprehensive security engagement number 121 featuring attack path analysis, remediation mapping, and measurable hardening outcomes for enterprise teams."
  },
  {
    id: 122,
    title: "Operation Node-122",
    category: "web",
    impact: "Risk Reduction 77%",
    stack: ["Python", "PowerShell", "Bash", "Burp"],
    description: "Comprehensive security engagement number 122 featuring attack path analysis, remediation mapping, and measurable hardening outcomes for enterprise teams."
  },
  {
    id: 123,
    title: "Operation Node-123",
    category: "cloud",
    impact: "Risk Reduction 78%",
    stack: ["Python", "PowerShell", "Bash", "Burp"],
    description: "Comprehensive security engagement number 123 featuring attack path analysis, remediation mapping, and measurable hardening outcomes for enterprise teams."
  },
  {
    id: 124,
    title: "Operation Node-124",
    category: "research",
    impact: "Risk Reduction 79%",
    stack: ["Python", "PowerShell", "Bash", "Burp"],
    description: "Comprehensive security engagement number 124 featuring attack path analysis, remediation mapping, and measurable hardening outcomes for enterprise teams."
  },
  {
    id: 125,
    title: "Operation Node-125",
    category: "red-team",
    impact: "Risk Reduction 80%",
    stack: ["Python", "PowerShell", "Bash", "Burp"],
    description: "Comprehensive security engagement number 125 featuring attack path analysis, remediation mapping, and measurable hardening outcomes for enterprise teams."
  },
  {
    id: 126,
    title: "Operation Node-126",
    category: "web",
    impact: "Risk Reduction 81%",
    stack: ["Python", "PowerShell", "Bash", "Burp"],
    description: "Comprehensive security engagement number 126 featuring attack path analysis, remediation mapping, and measurable hardening outcomes for enterprise teams."
  },
  {
    id: 127,
    title: "Operation Node-127",
    category: "cloud",
    impact: "Risk Reduction 82%",
    stack: ["Python", "PowerShell", "Bash", "Burp"],
    description: "Comprehensive security engagement number 127 featuring attack path analysis, remediation mapping, and measurable hardening outcomes for enterprise teams."
  },
  {
    id: 128,
    title: "Operation Node-128",
    category: "research",
    impact: "Risk Reduction 83%",
    stack: ["Python", "PowerShell", "Bash", "Burp"],
    description: "Comprehensive security engagement number 128 featuring attack path analysis, remediation mapping, and measurable hardening outcomes for enterprise teams."
  },
  {
    id: 129,
    title: "Operation Node-129",
    category: "red-team",
    impact: "Risk Reduction 84%",
    stack: ["Python", "PowerShell", "Bash", "Burp"],
    description: "Comprehensive security engagement number 129 featuring attack path analysis, remediation mapping, and measurable hardening outcomes for enterprise teams."
  },
  {
    id: 130,
    title: "Operation Node-130",
    category: "web",
    impact: "Risk Reduction 85%",
    stack: ["Python", "PowerShell", "Bash", "Burp"],
    description: "Comprehensive security engagement number 130 featuring attack path analysis, remediation mapping, and measurable hardening outcomes for enterprise teams."
  },
  {
    id: 131,
    title: "Operation Node-131",
    category: "cloud",
    impact: "Risk Reduction 86%",
    stack: ["Python", "PowerShell", "Bash", "Burp"],
    description: "Comprehensive security engagement number 131 featuring attack path analysis, remediation mapping, and measurable hardening outcomes for enterprise teams."
  },
  {
    id: 132,
    title: "Operation Node-132",
    category: "research",
    impact: "Risk Reduction 87%",
    stack: ["Python", "PowerShell", "Bash", "Burp"],
    description: "Comprehensive security engagement number 132 featuring attack path analysis, remediation mapping, and measurable hardening outcomes for enterprise teams."
  },
  {
    id: 133,
    title: "Operation Node-133",
    category: "red-team",
    impact: "Risk Reduction 88%",
    stack: ["Python", "PowerShell", "Bash", "Burp"],
    description: "Comprehensive security engagement number 133 featuring attack path analysis, remediation mapping, and measurable hardening outcomes for enterprise teams."
  },
  {
    id: 134,
    title: "Operation Node-134",
    category: "web",
    impact: "Risk Reduction 89%",
    stack: ["Python", "PowerShell", "Bash", "Burp"],
    description: "Comprehensive security engagement number 134 featuring attack path analysis, remediation mapping, and measurable hardening outcomes for enterprise teams."
  },
  {
    id: 135,
    title: "Operation Node-135",
    category: "cloud",
    impact: "Risk Reduction 90%",
    stack: ["Python", "PowerShell", "Bash", "Burp"],
    description: "Comprehensive security engagement number 135 featuring attack path analysis, remediation mapping, and measurable hardening outcomes for enterprise teams."
  },
  {
    id: 136,
    title: "Operation Node-136",
    category: "research",
    impact: "Risk Reduction 91%",
    stack: ["Python", "PowerShell", "Bash", "Burp"],
    description: "Comprehensive security engagement number 136 featuring attack path analysis, remediation mapping, and measurable hardening outcomes for enterprise teams."
  },
  {
    id: 137,
    title: "Operation Node-137",
    category: "red-team",
    impact: "Risk Reduction 92%",
    stack: ["Python", "PowerShell", "Bash", "Burp"],
    description: "Comprehensive security engagement number 137 featuring attack path analysis, remediation mapping, and measurable hardening outcomes for enterprise teams."
  },
  {
    id: 138,
    title: "Operation Node-138",
    category: "web",
    impact: "Risk Reduction 93%",
    stack: ["Python", "PowerShell", "Bash", "Burp"],
    description: "Comprehensive security engagement number 138 featuring attack path analysis, remediation mapping, and measurable hardening outcomes for enterprise teams."
  },
  {
    id: 139,
    title: "Operation Node-139",
    category: "cloud",
    impact: "Risk Reduction 94%",
    stack: ["Python", "PowerShell", "Bash", "Burp"],
    description: "Comprehensive security engagement number 139 featuring attack path analysis, remediation mapping, and measurable hardening outcomes for enterprise teams."
  },
  {
    id: 140,
    title: "Operation Node-140",
    category: "research",
    impact: "Risk Reduction 60%",
    stack: ["Python", "PowerShell", "Bash", "Burp"],
    description: "Comprehensive security engagement number 140 featuring attack path analysis, remediation mapping, and measurable hardening outcomes for enterprise teams."
  },
  {
    id: 141,
    title: "Operation Node-141",
    category: "red-team",
    impact: "Risk Reduction 61%",
    stack: ["Python", "PowerShell", "Bash", "Burp"],
    description: "Comprehensive security engagement number 141 featuring attack path analysis, remediation mapping, and measurable hardening outcomes for enterprise teams."
  },
  {
    id: 142,
    title: "Operation Node-142",
    category: "web",
    impact: "Risk Reduction 62%",
    stack: ["Python", "PowerShell", "Bash", "Burp"],
    description: "Comprehensive security engagement number 142 featuring attack path analysis, remediation mapping, and measurable hardening outcomes for enterprise teams."
  },
  {
    id: 143,
    title: "Operation Node-143",
    category: "cloud",
    impact: "Risk Reduction 63%",
    stack: ["Python", "PowerShell", "Bash", "Burp"],
    description: "Comprehensive security engagement number 143 featuring attack path analysis, remediation mapping, and measurable hardening outcomes for enterprise teams."
  },
  {
    id: 144,
    title: "Operation Node-144",
    category: "research",
    impact: "Risk Reduction 64%",
    stack: ["Python", "PowerShell", "Bash", "Burp"],
    description: "Comprehensive security engagement number 144 featuring attack path analysis, remediation mapping, and measurable hardening outcomes for enterprise teams."
  },
  {
    id: 145,
    title: "Operation Node-145",
    category: "red-team",
    impact: "Risk Reduction 65%",
    stack: ["Python", "PowerShell", "Bash", "Burp"],
    description: "Comprehensive security engagement number 145 featuring attack path analysis, remediation mapping, and measurable hardening outcomes for enterprise teams."
  },
  {
    id: 146,
    title: "Operation Node-146",
    category: "web",
    impact: "Risk Reduction 66%",
    stack: ["Python", "PowerShell", "Bash", "Burp"],
    description: "Comprehensive security engagement number 146 featuring attack path analysis, remediation mapping, and measurable hardening outcomes for enterprise teams."
  },
  {
    id: 147,
    title: "Operation Node-147",
    category: "cloud",
    impact: "Risk Reduction 67%",
    stack: ["Python", "PowerShell", "Bash", "Burp"],
    description: "Comprehensive security engagement number 147 featuring attack path analysis, remediation mapping, and measurable hardening outcomes for enterprise teams."
  },
  {
    id: 148,
    title: "Operation Node-148",
    category: "research",
    impact: "Risk Reduction 68%",
    stack: ["Python", "PowerShell", "Bash", "Burp"],
    description: "Comprehensive security engagement number 148 featuring attack path analysis, remediation mapping, and measurable hardening outcomes for enterprise teams."
  },
  {
    id: 149,
    title: "Operation Node-149",
    category: "red-team",
    impact: "Risk Reduction 69%",
    stack: ["Python", "PowerShell", "Bash", "Burp"],
    description: "Comprehensive security engagement number 149 featuring attack path analysis, remediation mapping, and measurable hardening outcomes for enterprise teams."
  },
  {
    id: 150,
    title: "Operation Node-150",
    category: "web",
    impact: "Risk Reduction 70%",
    stack: ["Python", "PowerShell", "Bash", "Burp"],
    description: "Comprehensive security engagement number 150 featuring attack path analysis, remediation mapping, and measurable hardening outcomes for enterprise teams."
  },
  {
    id: 151,
    title: "Operation Node-151",
    category: "cloud",
    impact: "Risk Reduction 71%",
    stack: ["Python", "PowerShell", "Bash", "Burp"],
    description: "Comprehensive security engagement number 151 featuring attack path analysis, remediation mapping, and measurable hardening outcomes for enterprise teams."
  },
  {
    id: 152,
    title: "Operation Node-152",
    category: "research",
    impact: "Risk Reduction 72%",
    stack: ["Python", "PowerShell", "Bash", "Burp"],
    description: "Comprehensive security engagement number 152 featuring attack path analysis, remediation mapping, and measurable hardening outcomes for enterprise teams."
  },
  {
    id: 153,
    title: "Operation Node-153",
    category: "red-team",
    impact: "Risk Reduction 73%",
    stack: ["Python", "PowerShell", "Bash", "Burp"],
    description: "Comprehensive security engagement number 153 featuring attack path analysis, remediation mapping, and measurable hardening outcomes for enterprise teams."
  },
  {
    id: 154,
    title: "Operation Node-154",
    category: "web",
    impact: "Risk Reduction 74%",
    stack: ["Python", "PowerShell", "Bash", "Burp"],
    description: "Comprehensive security engagement number 154 featuring attack path analysis, remediation mapping, and measurable hardening outcomes for enterprise teams."
  },
  {
    id: 155,
    title: "Operation Node-155",
    category: "cloud",
    impact: "Risk Reduction 75%",
    stack: ["Python", "PowerShell", "Bash", "Burp"],
    description: "Comprehensive security engagement number 155 featuring attack path analysis, remediation mapping, and measurable hardening outcomes for enterprise teams."
  },
  {
    id: 156,
    title: "Operation Node-156",
    category: "research",
    impact: "Risk Reduction 76%",
    stack: ["Python", "PowerShell", "Bash", "Burp"],
    description: "Comprehensive security engagement number 156 featuring attack path analysis, remediation mapping, and measurable hardening outcomes for enterprise teams."
  },
  {
    id: 157,
    title: "Operation Node-157",
    category: "red-team",
    impact: "Risk Reduction 77%",
    stack: ["Python", "PowerShell", "Bash", "Burp"],
    description: "Comprehensive security engagement number 157 featuring attack path analysis, remediation mapping, and measurable hardening outcomes for enterprise teams."
  },
  {
    id: 158,
    title: "Operation Node-158",
    category: "web",
    impact: "Risk Reduction 78%",
    stack: ["Python", "PowerShell", "Bash", "Burp"],
    description: "Comprehensive security engagement number 158 featuring attack path analysis, remediation mapping, and measurable hardening outcomes for enterprise teams."
  },
  {
    id: 159,
    title: "Operation Node-159",
    category: "cloud",
    impact: "Risk Reduction 79%",
    stack: ["Python", "PowerShell", "Bash", "Burp"],
    description: "Comprehensive security engagement number 159 featuring attack path analysis, remediation mapping, and measurable hardening outcomes for enterprise teams."
  },
  {
    id: 160,
    title: "Operation Node-160",
    category: "research",
    impact: "Risk Reduction 80%",
    stack: ["Python", "PowerShell", "Bash", "Burp"],
    description: "Comprehensive security engagement number 160 featuring attack path analysis, remediation mapping, and measurable hardening outcomes for enterprise teams."
  },
  {
    id: 161,
    title: "Operation Node-161",
    category: "red-team",
    impact: "Risk Reduction 81%",
    stack: ["Python", "PowerShell", "Bash", "Burp"],
    description: "Comprehensive security engagement number 161 featuring attack path analysis, remediation mapping, and measurable hardening outcomes for enterprise teams."
  },
  {
    id: 162,
    title: "Operation Node-162",
    category: "web",
    impact: "Risk Reduction 82%",
    stack: ["Python", "PowerShell", "Bash", "Burp"],
    description: "Comprehensive security engagement number 162 featuring attack path analysis, remediation mapping, and measurable hardening outcomes for enterprise teams."
  },
  {
    id: 163,
    title: "Operation Node-163",
    category: "cloud",
    impact: "Risk Reduction 83%",
    stack: ["Python", "PowerShell", "Bash", "Burp"],
    description: "Comprehensive security engagement number 163 featuring attack path analysis, remediation mapping, and measurable hardening outcomes for enterprise teams."
  },
  {
    id: 164,
    title: "Operation Node-164",
    category: "research",
    impact: "Risk Reduction 84%",
    stack: ["Python", "PowerShell", "Bash", "Burp"],
    description: "Comprehensive security engagement number 164 featuring attack path analysis, remediation mapping, and measurable hardening outcomes for enterprise teams."
  },
  {
    id: 165,
    title: "Operation Node-165",
    category: "red-team",
    impact: "Risk Reduction 85%",
    stack: ["Python", "PowerShell", "Bash", "Burp"],
    description: "Comprehensive security engagement number 165 featuring attack path analysis, remediation mapping, and measurable hardening outcomes for enterprise teams."
  },
  {
    id: 166,
    title: "Operation Node-166",
    category: "web",
    impact: "Risk Reduction 86%",
    stack: ["Python", "PowerShell", "Bash", "Burp"],
    description: "Comprehensive security engagement number 166 featuring attack path analysis, remediation mapping, and measurable hardening outcomes for enterprise teams."
  },
  {
    id: 167,
    title: "Operation Node-167",
    category: "cloud",
    impact: "Risk Reduction 87%",
    stack: ["Python", "PowerShell", "Bash", "Burp"],
    description: "Comprehensive security engagement number 167 featuring attack path analysis, remediation mapping, and measurable hardening outcomes for enterprise teams."
  },
  {
    id: 168,
    title: "Operation Node-168",
    category: "research",
    impact: "Risk Reduction 88%",
    stack: ["Python", "PowerShell", "Bash", "Burp"],
    description: "Comprehensive security engagement number 168 featuring attack path analysis, remediation mapping, and measurable hardening outcomes for enterprise teams."
  },
  {
    id: 169,
    title: "Operation Node-169",
    category: "red-team",
    impact: "Risk Reduction 89%",
    stack: ["Python", "PowerShell", "Bash", "Burp"],
    description: "Comprehensive security engagement number 169 featuring attack path analysis, remediation mapping, and measurable hardening outcomes for enterprise teams."
  },
  {
    id: 170,
    title: "Operation Node-170",
    category: "web",
    impact: "Risk Reduction 90%",
    stack: ["Python", "PowerShell", "Bash", "Burp"],
    description: "Comprehensive security engagement number 170 featuring attack path analysis, remediation mapping, and measurable hardening outcomes for enterprise teams."
  },
  {
    id: 171,
    title: "Operation Node-171",
    category: "cloud",
    impact: "Risk Reduction 91%",
    stack: ["Python", "PowerShell", "Bash", "Burp"],
    description: "Comprehensive security engagement number 171 featuring attack path analysis, remediation mapping, and measurable hardening outcomes for enterprise teams."
  },
  {
    id: 172,
    title: "Operation Node-172",
    category: "research",
    impact: "Risk Reduction 92%",
    stack: ["Python", "PowerShell", "Bash", "Burp"],
    description: "Comprehensive security engagement number 172 featuring attack path analysis, remediation mapping, and measurable hardening outcomes for enterprise teams."
  },
  {
    id: 173,
    title: "Operation Node-173",
    category: "red-team",
    impact: "Risk Reduction 93%",
    stack: ["Python", "PowerShell", "Bash", "Burp"],
    description: "Comprehensive security engagement number 173 featuring attack path analysis, remediation mapping, and measurable hardening outcomes for enterprise teams."
  },
  {
    id: 174,
    title: "Operation Node-174",
    category: "web",
    impact: "Risk Reduction 94%",
    stack: ["Python", "PowerShell", "Bash", "Burp"],
    description: "Comprehensive security engagement number 174 featuring attack path analysis, remediation mapping, and measurable hardening outcomes for enterprise teams."
  },
  {
    id: 175,
    title: "Operation Node-175",
    category: "cloud",
    impact: "Risk Reduction 60%",
    stack: ["Python", "PowerShell", "Bash", "Burp"],
    description: "Comprehensive security engagement number 175 featuring attack path analysis, remediation mapping, and measurable hardening outcomes for enterprise teams."
  },
  {
    id: 176,
    title: "Operation Node-176",
    category: "research",
    impact: "Risk Reduction 61%",
    stack: ["Python", "PowerShell", "Bash", "Burp"],
    description: "Comprehensive security engagement number 176 featuring attack path analysis, remediation mapping, and measurable hardening outcomes for enterprise teams."
  },
  {
    id: 177,
    title: "Operation Node-177",
    category: "red-team",
    impact: "Risk Reduction 62%",
    stack: ["Python", "PowerShell", "Bash", "Burp"],
    description: "Comprehensive security engagement number 177 featuring attack path analysis, remediation mapping, and measurable hardening outcomes for enterprise teams."
  },
  {
    id: 178,
    title: "Operation Node-178",
    category: "web",
    impact: "Risk Reduction 63%",
    stack: ["Python", "PowerShell", "Bash", "Burp"],
    description: "Comprehensive security engagement number 178 featuring attack path analysis, remediation mapping, and measurable hardening outcomes for enterprise teams."
  },
  {
    id: 179,
    title: "Operation Node-179",
    category: "cloud",
    impact: "Risk Reduction 64%",
    stack: ["Python", "PowerShell", "Bash", "Burp"],
    description: "Comprehensive security engagement number 179 featuring attack path analysis, remediation mapping, and measurable hardening outcomes for enterprise teams."
  },
  {
    id: 180,
    title: "Operation Node-180",
    category: "research",
    impact: "Risk Reduction 65%",
    stack: ["Python", "PowerShell", "Bash", "Burp"],
    description: "Comprehensive security engagement number 180 featuring attack path analysis, remediation mapping, and measurable hardening outcomes for enterprise teams."
  },
  {
    id: 181,
    title: "Operation Node-181",
    category: "red-team",
    impact: "Risk Reduction 66%",
    stack: ["Python", "PowerShell", "Bash", "Burp"],
    description: "Comprehensive security engagement number 181 featuring attack path analysis, remediation mapping, and measurable hardening outcomes for enterprise teams."
  },
  {
    id: 182,
    title: "Operation Node-182",
    category: "web",
    impact: "Risk Reduction 67%",
    stack: ["Python", "PowerShell", "Bash", "Burp"],
    description: "Comprehensive security engagement number 182 featuring attack path analysis, remediation mapping, and measurable hardening outcomes for enterprise teams."
  },
  {
    id: 183,
    title: "Operation Node-183",
    category: "cloud",
    impact: "Risk Reduction 68%",
    stack: ["Python", "PowerShell", "Bash", "Burp"],
    description: "Comprehensive security engagement number 183 featuring attack path analysis, remediation mapping, and measurable hardening outcomes for enterprise teams."
  },
  {
    id: 184,
    title: "Operation Node-184",
    category: "research",
    impact: "Risk Reduction 69%",
    stack: ["Python", "PowerShell", "Bash", "Burp"],
    description: "Comprehensive security engagement number 184 featuring attack path analysis, remediation mapping, and measurable hardening outcomes for enterprise teams."
  },
  {
    id: 185,
    title: "Operation Node-185",
    category: "red-team",
    impact: "Risk Reduction 70%",
    stack: ["Python", "PowerShell", "Bash", "Burp"],
    description: "Comprehensive security engagement number 185 featuring attack path analysis, remediation mapping, and measurable hardening outcomes for enterprise teams."
  },
  {
    id: 186,
    title: "Operation Node-186",
    category: "web",
    impact: "Risk Reduction 71%",
    stack: ["Python", "PowerShell", "Bash", "Burp"],
    description: "Comprehensive security engagement number 186 featuring attack path analysis, remediation mapping, and measurable hardening outcomes for enterprise teams."
  },
  {
    id: 187,
    title: "Operation Node-187",
    category: "cloud",
    impact: "Risk Reduction 72%",
    stack: ["Python", "PowerShell", "Bash", "Burp"],
    description: "Comprehensive security engagement number 187 featuring attack path analysis, remediation mapping, and measurable hardening outcomes for enterprise teams."
  },
  {
    id: 188,
    title: "Operation Node-188",
    category: "research",
    impact: "Risk Reduction 73%",
    stack: ["Python", "PowerShell", "Bash", "Burp"],
    description: "Comprehensive security engagement number 188 featuring attack path analysis, remediation mapping, and measurable hardening outcomes for enterprise teams."
  },
  {
    id: 189,
    title: "Operation Node-189",
    category: "red-team",
    impact: "Risk Reduction 74%",
    stack: ["Python", "PowerShell", "Bash", "Burp"],
    description: "Comprehensive security engagement number 189 featuring attack path analysis, remediation mapping, and measurable hardening outcomes for enterprise teams."
  },
  {
    id: 190,
    title: "Operation Node-190",
    category: "web",
    impact: "Risk Reduction 75%",
    stack: ["Python", "PowerShell", "Bash", "Burp"],
    description: "Comprehensive security engagement number 190 featuring attack path analysis, remediation mapping, and measurable hardening outcomes for enterprise teams."
  },
  {
    id: 191,
    title: "Operation Node-191",
    category: "cloud",
    impact: "Risk Reduction 76%",
    stack: ["Python", "PowerShell", "Bash", "Burp"],
    description: "Comprehensive security engagement number 191 featuring attack path analysis, remediation mapping, and measurable hardening outcomes for enterprise teams."
  },
  {
    id: 192,
    title: "Operation Node-192",
    category: "research",
    impact: "Risk Reduction 77%",
    stack: ["Python", "PowerShell", "Bash", "Burp"],
    description: "Comprehensive security engagement number 192 featuring attack path analysis, remediation mapping, and measurable hardening outcomes for enterprise teams."
  },
  {
    id: 193,
    title: "Operation Node-193",
    category: "red-team",
    impact: "Risk Reduction 78%",
    stack: ["Python", "PowerShell", "Bash", "Burp"],
    description: "Comprehensive security engagement number 193 featuring attack path analysis, remediation mapping, and measurable hardening outcomes for enterprise teams."
  },
  {
    id: 194,
    title: "Operation Node-194",
    category: "web",
    impact: "Risk Reduction 79%",
    stack: ["Python", "PowerShell", "Bash", "Burp"],
    description: "Comprehensive security engagement number 194 featuring attack path analysis, remediation mapping, and measurable hardening outcomes for enterprise teams."
  },
  {
    id: 195,
    title: "Operation Node-195",
    category: "cloud",
    impact: "Risk Reduction 80%",
    stack: ["Python", "PowerShell", "Bash", "Burp"],
    description: "Comprehensive security engagement number 195 featuring attack path analysis, remediation mapping, and measurable hardening outcomes for enterprise teams."
  },
  {
    id: 196,
    title: "Operation Node-196",
    category: "research",
    impact: "Risk Reduction 81%",
    stack: ["Python", "PowerShell", "Bash", "Burp"],
    description: "Comprehensive security engagement number 196 featuring attack path analysis, remediation mapping, and measurable hardening outcomes for enterprise teams."
  },
  {
    id: 197,
    title: "Operation Node-197",
    category: "red-team",
    impact: "Risk Reduction 82%",
    stack: ["Python", "PowerShell", "Bash", "Burp"],
    description: "Comprehensive security engagement number 197 featuring attack path analysis, remediation mapping, and measurable hardening outcomes for enterprise teams."
  },
  {
    id: 198,
    title: "Operation Node-198",
    category: "web",
    impact: "Risk Reduction 83%",
    stack: ["Python", "PowerShell", "Bash", "Burp"],
    description: "Comprehensive security engagement number 198 featuring attack path analysis, remediation mapping, and measurable hardening outcomes for enterprise teams."
  },
  {
    id: 199,
    title: "Operation Node-199",
    category: "cloud",
    impact: "Risk Reduction 84%",
    stack: ["Python", "PowerShell", "Bash", "Burp"],
    description: "Comprehensive security engagement number 199 featuring attack path analysis, remediation mapping, and measurable hardening outcomes for enterprise teams."
  },
  {
    id: 200,
    title: "Operation Node-200",
    category: "research",
    impact: "Risk Reduction 85%",
    stack: ["Python", "PowerShell", "Bash", "Burp"],
    description: "Comprehensive security engagement number 200 featuring attack path analysis, remediation mapping, and measurable hardening outcomes for enterprise teams."
  },
  {
    id: 201,
    title: "Operation Node-201",
    category: "red-team",
    impact: "Risk Reduction 86%",
    stack: ["Python", "PowerShell", "Bash", "Burp"],
    description: "Comprehensive security engagement number 201 featuring attack path analysis, remediation mapping, and measurable hardening outcomes for enterprise teams."
  },
  {
    id: 202,
    title: "Operation Node-202",
    category: "web",
    impact: "Risk Reduction 87%",
    stack: ["Python", "PowerShell", "Bash", "Burp"],
    description: "Comprehensive security engagement number 202 featuring attack path analysis, remediation mapping, and measurable hardening outcomes for enterprise teams."
  },
  {
    id: 203,
    title: "Operation Node-203",
    category: "cloud",
    impact: "Risk Reduction 88%",
    stack: ["Python", "PowerShell", "Bash", "Burp"],
    description: "Comprehensive security engagement number 203 featuring attack path analysis, remediation mapping, and measurable hardening outcomes for enterprise teams."
  },
  {
    id: 204,
    title: "Operation Node-204",
    category: "research",
    impact: "Risk Reduction 89%",
    stack: ["Python", "PowerShell", "Bash", "Burp"],
    description: "Comprehensive security engagement number 204 featuring attack path analysis, remediation mapping, and measurable hardening outcomes for enterprise teams."
  },
  {
    id: 205,
    title: "Operation Node-205",
    category: "red-team",
    impact: "Risk Reduction 90%",
    stack: ["Python", "PowerShell", "Bash", "Burp"],
    description: "Comprehensive security engagement number 205 featuring attack path analysis, remediation mapping, and measurable hardening outcomes for enterprise teams."
  },
  {
    id: 206,
    title: "Operation Node-206",
    category: "web",
    impact: "Risk Reduction 91%",
    stack: ["Python", "PowerShell", "Bash", "Burp"],
    description: "Comprehensive security engagement number 206 featuring attack path analysis, remediation mapping, and measurable hardening outcomes for enterprise teams."
  },
  {
    id: 207,
    title: "Operation Node-207",
    category: "cloud",
    impact: "Risk Reduction 92%",
    stack: ["Python", "PowerShell", "Bash", "Burp"],
    description: "Comprehensive security engagement number 207 featuring attack path analysis, remediation mapping, and measurable hardening outcomes for enterprise teams."
  },
  {
    id: 208,
    title: "Operation Node-208",
    category: "research",
    impact: "Risk Reduction 93%",
    stack: ["Python", "PowerShell", "Bash", "Burp"],
    description: "Comprehensive security engagement number 208 featuring attack path analysis, remediation mapping, and measurable hardening outcomes for enterprise teams."
  },
  {
    id: 209,
    title: "Operation Node-209",
    category: "red-team",
    impact: "Risk Reduction 94%",
    stack: ["Python", "PowerShell", "Bash", "Burp"],
    description: "Comprehensive security engagement number 209 featuring attack path analysis, remediation mapping, and measurable hardening outcomes for enterprise teams."
  },
  {
    id: 210,
    title: "Operation Node-210",
    category: "web",
    impact: "Risk Reduction 60%",
    stack: ["Python", "PowerShell", "Bash", "Burp"],
    description: "Comprehensive security engagement number 210 featuring attack path analysis, remediation mapping, and measurable hardening outcomes for enterprise teams."
  },
  {
    id: 211,
    title: "Operation Node-211",
    category: "cloud",
    impact: "Risk Reduction 61%",
    stack: ["Python", "PowerShell", "Bash", "Burp"],
    description: "Comprehensive security engagement number 211 featuring attack path analysis, remediation mapping, and measurable hardening outcomes for enterprise teams."
  },
  {
    id: 212,
    title: "Operation Node-212",
    category: "research",
    impact: "Risk Reduction 62%",
    stack: ["Python", "PowerShell", "Bash", "Burp"],
    description: "Comprehensive security engagement number 212 featuring attack path analysis, remediation mapping, and measurable hardening outcomes for enterprise teams."
  },
  {
    id: 213,
    title: "Operation Node-213",
    category: "red-team",
    impact: "Risk Reduction 63%",
    stack: ["Python", "PowerShell", "Bash", "Burp"],
    description: "Comprehensive security engagement number 213 featuring attack path analysis, remediation mapping, and measurable hardening outcomes for enterprise teams."
  },
  {
    id: 214,
    title: "Operation Node-214",
    category: "web",
    impact: "Risk Reduction 64%",
    stack: ["Python", "PowerShell", "Bash", "Burp"],
    description: "Comprehensive security engagement number 214 featuring attack path analysis, remediation mapping, and measurable hardening outcomes for enterprise teams."
  },
  {
    id: 215,
    title: "Operation Node-215",
    category: "cloud",
    impact: "Risk Reduction 65%",
    stack: ["Python", "PowerShell", "Bash", "Burp"],
    description: "Comprehensive security engagement number 215 featuring attack path analysis, remediation mapping, and measurable hardening outcomes for enterprise teams."
  },
  {
    id: 216,
    title: "Operation Node-216",
    category: "research",
    impact: "Risk Reduction 66%",
    stack: ["Python", "PowerShell", "Bash", "Burp"],
    description: "Comprehensive security engagement number 216 featuring attack path analysis, remediation mapping, and measurable hardening outcomes for enterprise teams."
  },
  {
    id: 217,
    title: "Operation Node-217",
    category: "red-team",
    impact: "Risk Reduction 67%",
    stack: ["Python", "PowerShell", "Bash", "Burp"],
    description: "Comprehensive security engagement number 217 featuring attack path analysis, remediation mapping, and measurable hardening outcomes for enterprise teams."
  },
  {
    id: 218,
    title: "Operation Node-218",
    category: "web",
    impact: "Risk Reduction 68%",
    stack: ["Python", "PowerShell", "Bash", "Burp"],
    description: "Comprehensive security engagement number 218 featuring attack path analysis, remediation mapping, and measurable hardening outcomes for enterprise teams."
  },
  {
    id: 219,
    title: "Operation Node-219",
    category: "cloud",
    impact: "Risk Reduction 69%",
    stack: ["Python", "PowerShell", "Bash", "Burp"],
    description: "Comprehensive security engagement number 219 featuring attack path analysis, remediation mapping, and measurable hardening outcomes for enterprise teams."
  },
  {
    id: 220,
    title: "Operation Node-220",
    category: "research",
    impact: "Risk Reduction 70%",
    stack: ["Python", "PowerShell", "Bash", "Burp"],
    description: "Comprehensive security engagement number 220 featuring attack path analysis, remediation mapping, and measurable hardening outcomes for enterprise teams."
  },
  {
    id: 221,
    title: "Operation Node-221",
    category: "red-team",
    impact: "Risk Reduction 71%",
    stack: ["Python", "PowerShell", "Bash", "Burp"],
    description: "Comprehensive security engagement number 221 featuring attack path analysis, remediation mapping, and measurable hardening outcomes for enterprise teams."
  },
  {
    id: 222,
    title: "Operation Node-222",
    category: "web",
    impact: "Risk Reduction 72%",
    stack: ["Python", "PowerShell", "Bash", "Burp"],
    description: "Comprehensive security engagement number 222 featuring attack path analysis, remediation mapping, and measurable hardening outcomes for enterprise teams."
  },
  {
    id: 223,
    title: "Operation Node-223",
    category: "cloud",
    impact: "Risk Reduction 73%",
    stack: ["Python", "PowerShell", "Bash", "Burp"],
    description: "Comprehensive security engagement number 223 featuring attack path analysis, remediation mapping, and measurable hardening outcomes for enterprise teams."
  },
  {
    id: 224,
    title: "Operation Node-224",
    category: "research",
    impact: "Risk Reduction 74%",
    stack: ["Python", "PowerShell", "Bash", "Burp"],
    description: "Comprehensive security engagement number 224 featuring attack path analysis, remediation mapping, and measurable hardening outcomes for enterprise teams."
  },
  {
    id: 225,
    title: "Operation Node-225",
    category: "red-team",
    impact: "Risk Reduction 75%",
    stack: ["Python", "PowerShell", "Bash", "Burp"],
    description: "Comprehensive security engagement number 225 featuring attack path analysis, remediation mapping, and measurable hardening outcomes for enterprise teams."
  },
  {
    id: 226,
    title: "Operation Node-226",
    category: "web",
    impact: "Risk Reduction 76%",
    stack: ["Python", "PowerShell", "Bash", "Burp"],
    description: "Comprehensive security engagement number 226 featuring attack path analysis, remediation mapping, and measurable hardening outcomes for enterprise teams."
  },
  {
    id: 227,
    title: "Operation Node-227",
    category: "cloud",
    impact: "Risk Reduction 77%",
    stack: ["Python", "PowerShell", "Bash", "Burp"],
    description: "Comprehensive security engagement number 227 featuring attack path analysis, remediation mapping, and measurable hardening outcomes for enterprise teams."
  },
  {
    id: 228,
    title: "Operation Node-228",
    category: "research",
    impact: "Risk Reduction 78%",
    stack: ["Python", "PowerShell", "Bash", "Burp"],
    description: "Comprehensive security engagement number 228 featuring attack path analysis, remediation mapping, and measurable hardening outcomes for enterprise teams."
  },
  {
    id: 229,
    title: "Operation Node-229",
    category: "red-team",
    impact: "Risk Reduction 79%",
    stack: ["Python", "PowerShell", "Bash", "Burp"],
    description: "Comprehensive security engagement number 229 featuring attack path analysis, remediation mapping, and measurable hardening outcomes for enterprise teams."
  },
  {
    id: 230,
    title: "Operation Node-230",
    category: "web",
    impact: "Risk Reduction 80%",
    stack: ["Python", "PowerShell", "Bash", "Burp"],
    description: "Comprehensive security engagement number 230 featuring attack path analysis, remediation mapping, and measurable hardening outcomes for enterprise teams."
  },
  {
    id: 231,
    title: "Operation Node-231",
    category: "cloud",
    impact: "Risk Reduction 81%",
    stack: ["Python", "PowerShell", "Bash", "Burp"],
    description: "Comprehensive security engagement number 231 featuring attack path analysis, remediation mapping, and measurable hardening outcomes for enterprise teams."
  },
  {
    id: 232,
    title: "Operation Node-232",
    category: "research",
    impact: "Risk Reduction 82%",
    stack: ["Python", "PowerShell", "Bash", "Burp"],
    description: "Comprehensive security engagement number 232 featuring attack path analysis, remediation mapping, and measurable hardening outcomes for enterprise teams."
  },
  {
    id: 233,
    title: "Operation Node-233",
    category: "red-team",
    impact: "Risk Reduction 83%",
    stack: ["Python", "PowerShell", "Bash", "Burp"],
    description: "Comprehensive security engagement number 233 featuring attack path analysis, remediation mapping, and measurable hardening outcomes for enterprise teams."
  },
  {
    id: 234,
    title: "Operation Node-234",
    category: "web",
    impact: "Risk Reduction 84%",
    stack: ["Python", "PowerShell", "Bash", "Burp"],
    description: "Comprehensive security engagement number 234 featuring attack path analysis, remediation mapping, and measurable hardening outcomes for enterprise teams."
  },
  {
    id: 235,
    title: "Operation Node-235",
    category: "cloud",
    impact: "Risk Reduction 85%",
    stack: ["Python", "PowerShell", "Bash", "Burp"],
    description: "Comprehensive security engagement number 235 featuring attack path analysis, remediation mapping, and measurable hardening outcomes for enterprise teams."
  },
  {
    id: 236,
    title: "Operation Node-236",
    category: "research",
    impact: "Risk Reduction 86%",
    stack: ["Python", "PowerShell", "Bash", "Burp"],
    description: "Comprehensive security engagement number 236 featuring attack path analysis, remediation mapping, and measurable hardening outcomes for enterprise teams."
  },
  {
    id: 237,
    title: "Operation Node-237",
    category: "red-team",
    impact: "Risk Reduction 87%",
    stack: ["Python", "PowerShell", "Bash", "Burp"],
    description: "Comprehensive security engagement number 237 featuring attack path analysis, remediation mapping, and measurable hardening outcomes for enterprise teams."
  },
  {
    id: 238,
    title: "Operation Node-238",
    category: "web",
    impact: "Risk Reduction 88%",
    stack: ["Python", "PowerShell", "Bash", "Burp"],
    description: "Comprehensive security engagement number 238 featuring attack path analysis, remediation mapping, and measurable hardening outcomes for enterprise teams."
  },
  {
    id: 239,
    title: "Operation Node-239",
    category: "cloud",
    impact: "Risk Reduction 89%",
    stack: ["Python", "PowerShell", "Bash", "Burp"],
    description: "Comprehensive security engagement number 239 featuring attack path analysis, remediation mapping, and measurable hardening outcomes for enterprise teams."
  },
  {
    id: 240,
    title: "Operation Node-240",
    category: "research",
    impact: "Risk Reduction 90%",
    stack: ["Python", "PowerShell", "Bash", "Burp"],
    description: "Comprehensive security engagement number 240 featuring attack path analysis, remediation mapping, and measurable hardening outcomes for enterprise teams."
  },
  {
    id: 241,
    title: "Operation Node-241",
    category: "red-team",
    impact: "Risk Reduction 91%",
    stack: ["Python", "PowerShell", "Bash", "Burp"],
    description: "Comprehensive security engagement number 241 featuring attack path analysis, remediation mapping, and measurable hardening outcomes for enterprise teams."
  },
  {
    id: 242,
    title: "Operation Node-242",
    category: "web",
    impact: "Risk Reduction 92%",
    stack: ["Python", "PowerShell", "Bash", "Burp"],
    description: "Comprehensive security engagement number 242 featuring attack path analysis, remediation mapping, and measurable hardening outcomes for enterprise teams."
  },
  {
    id: 243,
    title: "Operation Node-243",
    category: "cloud",
    impact: "Risk Reduction 93%",
    stack: ["Python", "PowerShell", "Bash", "Burp"],
    description: "Comprehensive security engagement number 243 featuring attack path analysis, remediation mapping, and measurable hardening outcomes for enterprise teams."
  },
  {
    id: 244,
    title: "Operation Node-244",
    category: "research",
    impact: "Risk Reduction 94%",
    stack: ["Python", "PowerShell", "Bash", "Burp"],
    description: "Comprehensive security engagement number 244 featuring attack path analysis, remediation mapping, and measurable hardening outcomes for enterprise teams."
  },
  {
    id: 245,
    title: "Operation Node-245",
    category: "red-team",
    impact: "Risk Reduction 60%",
    stack: ["Python", "PowerShell", "Bash", "Burp"],
    description: "Comprehensive security engagement number 245 featuring attack path analysis, remediation mapping, and measurable hardening outcomes for enterprise teams."
  },
  {
    id: 246,
    title: "Operation Node-246",
    category: "web",
    impact: "Risk Reduction 61%",
    stack: ["Python", "PowerShell", "Bash", "Burp"],
    description: "Comprehensive security engagement number 246 featuring attack path analysis, remediation mapping, and measurable hardening outcomes for enterprise teams."
  },
  {
    id: 247,
    title: "Operation Node-247",
    category: "cloud",
    impact: "Risk Reduction 62%",
    stack: ["Python", "PowerShell", "Bash", "Burp"],
    description: "Comprehensive security engagement number 247 featuring attack path analysis, remediation mapping, and measurable hardening outcomes for enterprise teams."
  },
  {
    id: 248,
    title: "Operation Node-248",
    category: "research",
    impact: "Risk Reduction 63%",
    stack: ["Python", "PowerShell", "Bash", "Burp"],
    description: "Comprehensive security engagement number 248 featuring attack path analysis, remediation mapping, and measurable hardening outcomes for enterprise teams."
  },
  {
    id: 249,
    title: "Operation Node-249",
    category: "red-team",
    impact: "Risk Reduction 64%",
    stack: ["Python", "PowerShell", "Bash", "Burp"],
    description: "Comprehensive security engagement number 249 featuring attack path analysis, remediation mapping, and measurable hardening outcomes for enterprise teams."
  },
  {
    id: 250,
    title: "Operation Node-250",
    category: "web",
    impact: "Risk Reduction 65%",
    stack: ["Python", "PowerShell", "Bash", "Burp"],
    description: "Comprehensive security engagement number 250 featuring attack path analysis, remediation mapping, and measurable hardening outcomes for enterprise teams."
  },
  {
    id: 251,
    title: "Operation Node-251",
    category: "cloud",
    impact: "Risk Reduction 66%",
    stack: ["Python", "PowerShell", "Bash", "Burp"],
    description: "Comprehensive security engagement number 251 featuring attack path analysis, remediation mapping, and measurable hardening outcomes for enterprise teams."
  },
  {
    id: 252,
    title: "Operation Node-252",
    category: "research",
    impact: "Risk Reduction 67%",
    stack: ["Python", "PowerShell", "Bash", "Burp"],
    description: "Comprehensive security engagement number 252 featuring attack path analysis, remediation mapping, and measurable hardening outcomes for enterprise teams."
  },
  {
    id: 253,
    title: "Operation Node-253",
    category: "red-team",
    impact: "Risk Reduction 68%",
    stack: ["Python", "PowerShell", "Bash", "Burp"],
    description: "Comprehensive security engagement number 253 featuring attack path analysis, remediation mapping, and measurable hardening outcomes for enterprise teams."
  },
  {
    id: 254,
    title: "Operation Node-254",
    category: "web",
    impact: "Risk Reduction 69%",
    stack: ["Python", "PowerShell", "Bash", "Burp"],
    description: "Comprehensive security engagement number 254 featuring attack path analysis, remediation mapping, and measurable hardening outcomes for enterprise teams."
  },
  {
    id: 255,
    title: "Operation Node-255",
    category: "cloud",
    impact: "Risk Reduction 70%",
    stack: ["Python", "PowerShell", "Bash", "Burp"],
    description: "Comprehensive security engagement number 255 featuring attack path analysis, remediation mapping, and measurable hardening outcomes for enterprise teams."
  },
  {
    id: 256,
    title: "Operation Node-256",
    category: "research",
    impact: "Risk Reduction 71%",
    stack: ["Python", "PowerShell", "Bash", "Burp"],
    description: "Comprehensive security engagement number 256 featuring attack path analysis, remediation mapping, and measurable hardening outcomes for enterprise teams."
  },
  {
    id: 257,
    title: "Operation Node-257",
    category: "red-team",
    impact: "Risk Reduction 72%",
    stack: ["Python", "PowerShell", "Bash", "Burp"],
    description: "Comprehensive security engagement number 257 featuring attack path analysis, remediation mapping, and measurable hardening outcomes for enterprise teams."
  },
  {
    id: 258,
    title: "Operation Node-258",
    category: "web",
    impact: "Risk Reduction 73%",
    stack: ["Python", "PowerShell", "Bash", "Burp"],
    description: "Comprehensive security engagement number 258 featuring attack path analysis, remediation mapping, and measurable hardening outcomes for enterprise teams."
  },
  {
    id: 259,
    title: "Operation Node-259",
    category: "cloud",
    impact: "Risk Reduction 74%",
    stack: ["Python", "PowerShell", "Bash", "Burp"],
    description: "Comprehensive security engagement number 259 featuring attack path analysis, remediation mapping, and measurable hardening outcomes for enterprise teams."
  },
  {
    id: 260,
    title: "Operation Node-260",
    category: "research",
    impact: "Risk Reduction 75%",
    stack: ["Python", "PowerShell", "Bash", "Burp"],
    description: "Comprehensive security engagement number 260 featuring attack path analysis, remediation mapping, and measurable hardening outcomes for enterprise teams."
  },
  {
    id: 261,
    title: "Operation Node-261",
    category: "red-team",
    impact: "Risk Reduction 76%",
    stack: ["Python", "PowerShell", "Bash", "Burp"],
    description: "Comprehensive security engagement number 261 featuring attack path analysis, remediation mapping, and measurable hardening outcomes for enterprise teams."
  },
  {
    id: 262,
    title: "Operation Node-262",
    category: "web",
    impact: "Risk Reduction 77%",
    stack: ["Python", "PowerShell", "Bash", "Burp"],
    description: "Comprehensive security engagement number 262 featuring attack path analysis, remediation mapping, and measurable hardening outcomes for enterprise teams."
  },
  {
    id: 263,
    title: "Operation Node-263",
    category: "cloud",
    impact: "Risk Reduction 78%",
    stack: ["Python", "PowerShell", "Bash", "Burp"],
    description: "Comprehensive security engagement number 263 featuring attack path analysis, remediation mapping, and measurable hardening outcomes for enterprise teams."
  },
  {
    id: 264,
    title: "Operation Node-264",
    category: "research",
    impact: "Risk Reduction 79%",
    stack: ["Python", "PowerShell", "Bash", "Burp"],
    description: "Comprehensive security engagement number 264 featuring attack path analysis, remediation mapping, and measurable hardening outcomes for enterprise teams."
  },
  {
    id: 265,
    title: "Operation Node-265",
    category: "red-team",
    impact: "Risk Reduction 80%",
    stack: ["Python", "PowerShell", "Bash", "Burp"],
    description: "Comprehensive security engagement number 265 featuring attack path analysis, remediation mapping, and measurable hardening outcomes for enterprise teams."
  },
  {
    id: 266,
    title: "Operation Node-266",
    category: "web",
    impact: "Risk Reduction 81%",
    stack: ["Python", "PowerShell", "Bash", "Burp"],
    description: "Comprehensive security engagement number 266 featuring attack path analysis, remediation mapping, and measurable hardening outcomes for enterprise teams."
  },
  {
    id: 267,
    title: "Operation Node-267",
    category: "cloud",
    impact: "Risk Reduction 82%",
    stack: ["Python", "PowerShell", "Bash", "Burp"],
    description: "Comprehensive security engagement number 267 featuring attack path analysis, remediation mapping, and measurable hardening outcomes for enterprise teams."
  },
  {
    id: 268,
    title: "Operation Node-268",
    category: "research",
    impact: "Risk Reduction 83%",
    stack: ["Python", "PowerShell", "Bash", "Burp"],
    description: "Comprehensive security engagement number 268 featuring attack path analysis, remediation mapping, and measurable hardening outcomes for enterprise teams."
  },
  {
    id: 269,
    title: "Operation Node-269",
    category: "red-team",
    impact: "Risk Reduction 84%",
    stack: ["Python", "PowerShell", "Bash", "Burp"],
    description: "Comprehensive security engagement number 269 featuring attack path analysis, remediation mapping, and measurable hardening outcomes for enterprise teams."
  },
  {
    id: 270,
    title: "Operation Node-270",
    category: "web",
    impact: "Risk Reduction 85%",
    stack: ["Python", "PowerShell", "Bash", "Burp"],
    description: "Comprehensive security engagement number 270 featuring attack path analysis, remediation mapping, and measurable hardening outcomes for enterprise teams."
  },
  {
    id: 271,
    title: "Operation Node-271",
    category: "cloud",
    impact: "Risk Reduction 86%",
    stack: ["Python", "PowerShell", "Bash", "Burp"],
    description: "Comprehensive security engagement number 271 featuring attack path analysis, remediation mapping, and measurable hardening outcomes for enterprise teams."
  },
  {
    id: 272,
    title: "Operation Node-272",
    category: "research",
    impact: "Risk Reduction 87%",
    stack: ["Python", "PowerShell", "Bash", "Burp"],
    description: "Comprehensive security engagement number 272 featuring attack path analysis, remediation mapping, and measurable hardening outcomes for enterprise teams."
  },
  {
    id: 273,
    title: "Operation Node-273",
    category: "red-team",
    impact: "Risk Reduction 88%",
    stack: ["Python", "PowerShell", "Bash", "Burp"],
    description: "Comprehensive security engagement number 273 featuring attack path analysis, remediation mapping, and measurable hardening outcomes for enterprise teams."
  },
  {
    id: 274,
    title: "Operation Node-274",
    category: "web",
    impact: "Risk Reduction 89%",
    stack: ["Python", "PowerShell", "Bash", "Burp"],
    description: "Comprehensive security engagement number 274 featuring attack path analysis, remediation mapping, and measurable hardening outcomes for enterprise teams."
  },
  {
    id: 275,
    title: "Operation Node-275",
    category: "cloud",
    impact: "Risk Reduction 90%",
    stack: ["Python", "PowerShell", "Bash", "Burp"],
    description: "Comprehensive security engagement number 275 featuring attack path analysis, remediation mapping, and measurable hardening outcomes for enterprise teams."
  },
  {
    id: 276,
    title: "Operation Node-276",
    category: "research",
    impact: "Risk Reduction 91%",
    stack: ["Python", "PowerShell", "Bash", "Burp"],
    description: "Comprehensive security engagement number 276 featuring attack path analysis, remediation mapping, and measurable hardening outcomes for enterprise teams."
  },
  {
    id: 277,
    title: "Operation Node-277",
    category: "red-team",
    impact: "Risk Reduction 92%",
    stack: ["Python", "PowerShell", "Bash", "Burp"],
    description: "Comprehensive security engagement number 277 featuring attack path analysis, remediation mapping, and measurable hardening outcomes for enterprise teams."
  },
  {
    id: 278,
    title: "Operation Node-278",
    category: "web",
    impact: "Risk Reduction 93%",
    stack: ["Python", "PowerShell", "Bash", "Burp"],
    description: "Comprehensive security engagement number 278 featuring attack path analysis, remediation mapping, and measurable hardening outcomes for enterprise teams."
  },
  {
    id: 279,
    title: "Operation Node-279",
    category: "cloud",
    impact: "Risk Reduction 94%",
    stack: ["Python", "PowerShell", "Bash", "Burp"],
    description: "Comprehensive security engagement number 279 featuring attack path analysis, remediation mapping, and measurable hardening outcomes for enterprise teams."
  },
  {
    id: 280,
    title: "Operation Node-280",
    category: "research",
    impact: "Risk Reduction 60%",
    stack: ["Python", "PowerShell", "Bash", "Burp"],
    description: "Comprehensive security engagement number 280 featuring attack path analysis, remediation mapping, and measurable hardening outcomes for enterprise teams."
  },
  {
    id: 281,
    title: "Operation Node-281",
    category: "red-team",
    impact: "Risk Reduction 61%",
    stack: ["Python", "PowerShell", "Bash", "Burp"],
    description: "Comprehensive security engagement number 281 featuring attack path analysis, remediation mapping, and measurable hardening outcomes for enterprise teams."
  },
  {
    id: 282,
    title: "Operation Node-282",
    category: "web",
    impact: "Risk Reduction 62%",
    stack: ["Python", "PowerShell", "Bash", "Burp"],
    description: "Comprehensive security engagement number 282 featuring attack path analysis, remediation mapping, and measurable hardening outcomes for enterprise teams."
  },
  {
    id: 283,
    title: "Operation Node-283",
    category: "cloud",
    impact: "Risk Reduction 63%",
    stack: ["Python", "PowerShell", "Bash", "Burp"],
    description: "Comprehensive security engagement number 283 featuring attack path analysis, remediation mapping, and measurable hardening outcomes for enterprise teams."
  },
  {
    id: 284,
    title: "Operation Node-284",
    category: "research",
    impact: "Risk Reduction 64%",
    stack: ["Python", "PowerShell", "Bash", "Burp"],
    description: "Comprehensive security engagement number 284 featuring attack path analysis, remediation mapping, and measurable hardening outcomes for enterprise teams."
  },
  {
    id: 285,
    title: "Operation Node-285",
    category: "red-team",
    impact: "Risk Reduction 65%",
    stack: ["Python", "PowerShell", "Bash", "Burp"],
    description: "Comprehensive security engagement number 285 featuring attack path analysis, remediation mapping, and measurable hardening outcomes for enterprise teams."
  },
  {
    id: 286,
    title: "Operation Node-286",
    category: "web",
    impact: "Risk Reduction 66%",
    stack: ["Python", "PowerShell", "Bash", "Burp"],
    description: "Comprehensive security engagement number 286 featuring attack path analysis, remediation mapping, and measurable hardening outcomes for enterprise teams."
  },
  {
    id: 287,
    title: "Operation Node-287",
    category: "cloud",
    impact: "Risk Reduction 67%",
    stack: ["Python", "PowerShell", "Bash", "Burp"],
    description: "Comprehensive security engagement number 287 featuring attack path analysis, remediation mapping, and measurable hardening outcomes for enterprise teams."
  },
  {
    id: 288,
    title: "Operation Node-288",
    category: "research",
    impact: "Risk Reduction 68%",
    stack: ["Python", "PowerShell", "Bash", "Burp"],
    description: "Comprehensive security engagement number 288 featuring attack path analysis, remediation mapping, and measurable hardening outcomes for enterprise teams."
  },
  {
    id: 289,
    title: "Operation Node-289",
    category: "red-team",
    impact: "Risk Reduction 69%",
    stack: ["Python", "PowerShell", "Bash", "Burp"],
    description: "Comprehensive security engagement number 289 featuring attack path analysis, remediation mapping, and measurable hardening outcomes for enterprise teams."
  },
  {
    id: 290,
    title: "Operation Node-290",
    category: "web",
    impact: "Risk Reduction 70%",
    stack: ["Python", "PowerShell", "Bash", "Burp"],
    description: "Comprehensive security engagement number 290 featuring attack path analysis, remediation mapping, and measurable hardening outcomes for enterprise teams."
  },
  {
    id: 291,
    title: "Operation Node-291",
    category: "cloud",
    impact: "Risk Reduction 71%",
    stack: ["Python", "PowerShell", "Bash", "Burp"],
    description: "Comprehensive security engagement number 291 featuring attack path analysis, remediation mapping, and measurable hardening outcomes for enterprise teams."
  },
  {
    id: 292,
    title: "Operation Node-292",
    category: "research",
    impact: "Risk Reduction 72%",
    stack: ["Python", "PowerShell", "Bash", "Burp"],
    description: "Comprehensive security engagement number 292 featuring attack path analysis, remediation mapping, and measurable hardening outcomes for enterprise teams."
  },
  {
    id: 293,
    title: "Operation Node-293",
    category: "red-team",
    impact: "Risk Reduction 73%",
    stack: ["Python", "PowerShell", "Bash", "Burp"],
    description: "Comprehensive security engagement number 293 featuring attack path analysis, remediation mapping, and measurable hardening outcomes for enterprise teams."
  },
  {
    id: 294,
    title: "Operation Node-294",
    category: "web",
    impact: "Risk Reduction 74%",
    stack: ["Python", "PowerShell", "Bash", "Burp"],
    description: "Comprehensive security engagement number 294 featuring attack path analysis, remediation mapping, and measurable hardening outcomes for enterprise teams."
  },
  {
    id: 295,
    title: "Operation Node-295",
    category: "cloud",
    impact: "Risk Reduction 75%",
    stack: ["Python", "PowerShell", "Bash", "Burp"],
    description: "Comprehensive security engagement number 295 featuring attack path analysis, remediation mapping, and measurable hardening outcomes for enterprise teams."
  },
  {
    id: 296,
    title: "Operation Node-296",
    category: "research",
    impact: "Risk Reduction 76%",
    stack: ["Python", "PowerShell", "Bash", "Burp"],
    description: "Comprehensive security engagement number 296 featuring attack path analysis, remediation mapping, and measurable hardening outcomes for enterprise teams."
  },
  {
    id: 297,
    title: "Operation Node-297",
    category: "red-team",
    impact: "Risk Reduction 77%",
    stack: ["Python", "PowerShell", "Bash", "Burp"],
    description: "Comprehensive security engagement number 297 featuring attack path analysis, remediation mapping, and measurable hardening outcomes for enterprise teams."
  },
  {
    id: 298,
    title: "Operation Node-298",
    category: "web",
    impact: "Risk Reduction 78%",
    stack: ["Python", "PowerShell", "Bash", "Burp"],
    description: "Comprehensive security engagement number 298 featuring attack path analysis, remediation mapping, and measurable hardening outcomes for enterprise teams."
  },
  {
    id: 299,
    title: "Operation Node-299",
    category: "cloud",
    impact: "Risk Reduction 79%",
    stack: ["Python", "PowerShell", "Bash", "Burp"],
    description: "Comprehensive security engagement number 299 featuring attack path analysis, remediation mapping, and measurable hardening outcomes for enterprise teams."
  },
  {
    id: 300,
    title: "Operation Node-300",
    category: "research",
    impact: "Risk Reduction 80%",
    stack: ["Python", "PowerShell", "Bash", "Burp"],
    description: "Comprehensive security engagement number 300 featuring attack path analysis, remediation mapping, and measurable hardening outcomes for enterprise teams."
  },
  {
    id: 301,
    title: "Operation Node-301",
    category: "red-team",
    impact: "Risk Reduction 81%",
    stack: ["Python", "PowerShell", "Bash", "Burp"],
    description: "Comprehensive security engagement number 301 featuring attack path analysis, remediation mapping, and measurable hardening outcomes for enterprise teams."
  },
  {
    id: 302,
    title: "Operation Node-302",
    category: "web",
    impact: "Risk Reduction 82%",
    stack: ["Python", "PowerShell", "Bash", "Burp"],
    description: "Comprehensive security engagement number 302 featuring attack path analysis, remediation mapping, and measurable hardening outcomes for enterprise teams."
  },
  {
    id: 303,
    title: "Operation Node-303",
    category: "cloud",
    impact: "Risk Reduction 83%",
    stack: ["Python", "PowerShell", "Bash", "Burp"],
    description: "Comprehensive security engagement number 303 featuring attack path analysis, remediation mapping, and measurable hardening outcomes for enterprise teams."
  },
  {
    id: 304,
    title: "Operation Node-304",
    category: "research",
    impact: "Risk Reduction 84%",
    stack: ["Python", "PowerShell", "Bash", "Burp"],
    description: "Comprehensive security engagement number 304 featuring attack path analysis, remediation mapping, and measurable hardening outcomes for enterprise teams."
  },
  {
    id: 305,
    title: "Operation Node-305",
    category: "red-team",
    impact: "Risk Reduction 85%",
    stack: ["Python", "PowerShell", "Bash", "Burp"],
    description: "Comprehensive security engagement number 305 featuring attack path analysis, remediation mapping, and measurable hardening outcomes for enterprise teams."
  },
  {
    id: 306,
    title: "Operation Node-306",
    category: "web",
    impact: "Risk Reduction 86%",
    stack: ["Python", "PowerShell", "Bash", "Burp"],
    description: "Comprehensive security engagement number 306 featuring attack path analysis, remediation mapping, and measurable hardening outcomes for enterprise teams."
  },
  {
    id: 307,
    title: "Operation Node-307",
    category: "cloud",
    impact: "Risk Reduction 87%",
    stack: ["Python", "PowerShell", "Bash", "Burp"],
    description: "Comprehensive security engagement number 307 featuring attack path analysis, remediation mapping, and measurable hardening outcomes for enterprise teams."
  },
  {
    id: 308,
    title: "Operation Node-308",
    category: "research",
    impact: "Risk Reduction 88%",
    stack: ["Python", "PowerShell", "Bash", "Burp"],
    description: "Comprehensive security engagement number 308 featuring attack path analysis, remediation mapping, and measurable hardening outcomes for enterprise teams."
  },
  {
    id: 309,
    title: "Operation Node-309",
    category: "red-team",
    impact: "Risk Reduction 89%",
    stack: ["Python", "PowerShell", "Bash", "Burp"],
    description: "Comprehensive security engagement number 309 featuring attack path analysis, remediation mapping, and measurable hardening outcomes for enterprise teams."
  },
  {
    id: 310,
    title: "Operation Node-310",
    category: "web",
    impact: "Risk Reduction 90%",
    stack: ["Python", "PowerShell", "Bash", "Burp"],
    description: "Comprehensive security engagement number 310 featuring attack path analysis, remediation mapping, and measurable hardening outcomes for enterprise teams."
  },
  {
    id: 311,
    title: "Operation Node-311",
    category: "cloud",
    impact: "Risk Reduction 91%",
    stack: ["Python", "PowerShell", "Bash", "Burp"],
    description: "Comprehensive security engagement number 311 featuring attack path analysis, remediation mapping, and measurable hardening outcomes for enterprise teams."
  },
  {
    id: 312,
    title: "Operation Node-312",
    category: "research",
    impact: "Risk Reduction 92%",
    stack: ["Python", "PowerShell", "Bash", "Burp"],
    description: "Comprehensive security engagement number 312 featuring attack path analysis, remediation mapping, and measurable hardening outcomes for enterprise teams."
  },
  {
    id: 313,
    title: "Operation Node-313",
    category: "red-team",
    impact: "Risk Reduction 93%",
    stack: ["Python", "PowerShell", "Bash", "Burp"],
    description: "Comprehensive security engagement number 313 featuring attack path analysis, remediation mapping, and measurable hardening outcomes for enterprise teams."
  },
  {
    id: 314,
    title: "Operation Node-314",
    category: "web",
    impact: "Risk Reduction 94%",
    stack: ["Python", "PowerShell", "Bash", "Burp"],
    description: "Comprehensive security engagement number 314 featuring attack path analysis, remediation mapping, and measurable hardening outcomes for enterprise teams."
  },
  {
    id: 315,
    title: "Operation Node-315",
    category: "cloud",
    impact: "Risk Reduction 60%",
    stack: ["Python", "PowerShell", "Bash", "Burp"],
    description: "Comprehensive security engagement number 315 featuring attack path analysis, remediation mapping, and measurable hardening outcomes for enterprise teams."
  },
  {
    id: 316,
    title: "Operation Node-316",
    category: "research",
    impact: "Risk Reduction 61%",
    stack: ["Python", "PowerShell", "Bash", "Burp"],
    description: "Comprehensive security engagement number 316 featuring attack path analysis, remediation mapping, and measurable hardening outcomes for enterprise teams."
  },
  {
    id: 317,
    title: "Operation Node-317",
    category: "red-team",
    impact: "Risk Reduction 62%",
    stack: ["Python", "PowerShell", "Bash", "Burp"],
    description: "Comprehensive security engagement number 317 featuring attack path analysis, remediation mapping, and measurable hardening outcomes for enterprise teams."
  },
  {
    id: 318,
    title: "Operation Node-318",
    category: "web",
    impact: "Risk Reduction 63%",
    stack: ["Python", "PowerShell", "Bash", "Burp"],
    description: "Comprehensive security engagement number 318 featuring attack path analysis, remediation mapping, and measurable hardening outcomes for enterprise teams."
  },
  {
    id: 319,
    title: "Operation Node-319",
    category: "cloud",
    impact: "Risk Reduction 64%",
    stack: ["Python", "PowerShell", "Bash", "Burp"],
    description: "Comprehensive security engagement number 319 featuring attack path analysis, remediation mapping, and measurable hardening outcomes for enterprise teams."
  },
  {
    id: 320,
    title: "Operation Node-320",
    category: "research",
    impact: "Risk Reduction 65%",
    stack: ["Python", "PowerShell", "Bash", "Burp"],
    description: "Comprehensive security engagement number 320 featuring attack path analysis, remediation mapping, and measurable hardening outcomes for enterprise teams."
  },
  {
    id: 321,
    title: "Operation Node-321",
    category: "red-team",
    impact: "Risk Reduction 66%",
    stack: ["Python", "PowerShell", "Bash", "Burp"],
    description: "Comprehensive security engagement number 321 featuring attack path analysis, remediation mapping, and measurable hardening outcomes for enterprise teams."
  },
  {
    id: 322,
    title: "Operation Node-322",
    category: "web",
    impact: "Risk Reduction 67%",
    stack: ["Python", "PowerShell", "Bash", "Burp"],
    description: "Comprehensive security engagement number 322 featuring attack path analysis, remediation mapping, and measurable hardening outcomes for enterprise teams."
  },
  {
    id: 323,
    title: "Operation Node-323",
    category: "cloud",
    impact: "Risk Reduction 68%",
    stack: ["Python", "PowerShell", "Bash", "Burp"],
    description: "Comprehensive security engagement number 323 featuring attack path analysis, remediation mapping, and measurable hardening outcomes for enterprise teams."
  },
  {
    id: 324,
    title: "Operation Node-324",
    category: "research",
    impact: "Risk Reduction 69%",
    stack: ["Python", "PowerShell", "Bash", "Burp"],
    description: "Comprehensive security engagement number 324 featuring attack path analysis, remediation mapping, and measurable hardening outcomes for enterprise teams."
  },
  {
    id: 325,
    title: "Operation Node-325",
    category: "red-team",
    impact: "Risk Reduction 70%",
    stack: ["Python", "PowerShell", "Bash", "Burp"],
    description: "Comprehensive security engagement number 325 featuring attack path analysis, remediation mapping, and measurable hardening outcomes for enterprise teams."
  },
  {
    id: 326,
    title: "Operation Node-326",
    category: "web",
    impact: "Risk Reduction 71%",
    stack: ["Python", "PowerShell", "Bash", "Burp"],
    description: "Comprehensive security engagement number 326 featuring attack path analysis, remediation mapping, and measurable hardening outcomes for enterprise teams."
  },
  {
    id: 327,
    title: "Operation Node-327",
    category: "cloud",
    impact: "Risk Reduction 72%",
    stack: ["Python", "PowerShell", "Bash", "Burp"],
    description: "Comprehensive security engagement number 327 featuring attack path analysis, remediation mapping, and measurable hardening outcomes for enterprise teams."
  },
  {
    id: 328,
    title: "Operation Node-328",
    category: "research",
    impact: "Risk Reduction 73%",
    stack: ["Python", "PowerShell", "Bash", "Burp"],
    description: "Comprehensive security engagement number 328 featuring attack path analysis, remediation mapping, and measurable hardening outcomes for enterprise teams."
  },
  {
    id: 329,
    title: "Operation Node-329",
    category: "red-team",
    impact: "Risk Reduction 74%",
    stack: ["Python", "PowerShell", "Bash", "Burp"],
    description: "Comprehensive security engagement number 329 featuring attack path analysis, remediation mapping, and measurable hardening outcomes for enterprise teams."
  },
  {
    id: 330,
    title: "Operation Node-330",
    category: "web",
    impact: "Risk Reduction 75%",
    stack: ["Python", "PowerShell", "Bash", "Burp"],
    description: "Comprehensive security engagement number 330 featuring attack path analysis, remediation mapping, and measurable hardening outcomes for enterprise teams."
  },
];

const yearElement = document.getElementById('year');
yearElement.textContent = new Date().getFullYear();

const themeToggle = document.getElementById('themeToggle');
const menuToggle = document.getElementById('menuToggle');
const navLinks = document.getElementById('navLinks');
const root = document.documentElement;

menuToggle.addEventListener('click', () => {
  navLinks.classList.toggle('open');
});

document.querySelectorAll('.nav-links a').forEach((link) => {
  link.addEventListener('click', () => navLinks.classList.remove('open'));
});

themeToggle.addEventListener('click', () => {
  const nextTheme = root.getAttribute('data-theme') === 'light' ? 'dark' : 'light';
  if (nextTheme === 'dark') {
    root.removeAttribute('data-theme');
    themeToggle.textContent = '🌙';
  } else {
    root.setAttribute('data-theme', 'light');
    themeToggle.textContent = '☀️';
  }
  localStorage.setItem('theme', nextTheme);
});

const storedTheme = localStorage.getItem('theme');
if (storedTheme === 'light') {
  root.setAttribute('data-theme', 'light');
  themeToggle.textContent = '☀️';
}

const skillsGrid = document.getElementById('skillsGrid');
skillsData.forEach((skill) => {
  const card = document.createElement('article');
  card.className = 'skill-card reveal';
  card.innerHTML = `
    <div class="skill-head">
      <h3>${skill.name}</h3>
      <strong>${skill.level}%</strong>
    </div>
    <div class="skill-bar"><div class="skill-fill" data-level="${skill.level}"></div></div>
  `;
  skillsGrid.appendChild(card);
});

const projectsGrid = document.getElementById('projectsGrid');
const filterButtons = document.querySelectorAll('.filter');
let activeCategory = 'all';

function createProjectCard(project) {
  const card = document.createElement('article');
  card.className = 'card project-card reveal';
  const stackBadges = project.stack.map((item) => `<span>${item}</span>`).join('');
  card.innerHTML = `
    <div class="project-meta">
      <span class="badge">${project.category}</span>
      <span class="badge">${project.impact}</span>
    </div>
    <h3>${project.title}</h3>
    <p>${project.description}</p>
    <div class="stack">${stackBadges}</div>
    <button class="btn btn-ghost" type="button">View Details</button>
  `;
  return card;
}

function renderProjects() {
  projectsGrid.innerHTML = '';
  const list = activeCategory === 'all' ? projects : projects.filter((p) => p.category === activeCategory);
  list.slice(0, 72).forEach((project) => {
    projectsGrid.appendChild(createProjectCard(project));
  });
  applyReveal();
}

filterButtons.forEach((button) => {
  button.addEventListener('click', () => {
    filterButtons.forEach((item) => item.classList.remove('active'));
    button.classList.add('active');
    activeCategory = button.dataset.filter;
    renderProjects();
  });
});

renderProjects();

const timelineTrack = document.getElementById('timelineTrack');
timelineData.forEach((event) => {
  const item = document.createElement('article');
  item.className = 'card timeline-item reveal';
  item.innerHTML = `<span class="year">${event.year}</span><h3>Milestone</h3><p>${event.detail}</p>`;
  timelineTrack.appendChild(item);
});

const counters = document.querySelectorAll('[data-counter]');
let counterStarted = false;

function runCounters() {
  if (counterStarted) return;
  counterStarted = true;
  counters.forEach((counter) => {
    const target = Number(counter.dataset.counter);
    const duration = 1400;
    const step = Math.max(1, Math.floor(target / 40));
    let current = 0;
    const timer = setInterval(() => {
      current += step;
      if (current >= target) {
        current = target;
        clearInterval(timer);
      }
      counter.textContent = String(current);
    }, duration / (target / step));
  });
}

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      if (entry.target.id === 'heroStats' || entry.target.closest('#heroStats')) {
        runCounters();
      }
      if (entry.target.classList.contains('skill-card')) {
        const fill = entry.target.querySelector('.skill-fill');
        if (fill) fill.style.width = `${fill.dataset.level}%`;
      }
    }
  });
}, { threshold: 0.2 });

function applyReveal() {
  document.querySelectorAll('.reveal').forEach((node) => observer.observe(node));
}
applyReveal();

const form = document.getElementById('contactForm');
const formMessage = document.getElementById('formMessage');
form.addEventListener('submit', (event) => {
  event.preventDefault();
  const formData = new FormData(form);
  const name = String(formData.get('name') || '').trim();
  const email = String(formData.get('email') || '').trim();
  const message = String(formData.get('message') || '').trim();

  if (name.length < 2) {
    formMessage.textContent = 'Please provide a valid name.';
    formMessage.style.color = 'var(--danger)';
    return;
  }

  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    formMessage.textContent = 'Please provide a valid email address.';
    formMessage.style.color = 'var(--danger)';
    return;
  }

  if (message.length < 15) {
    formMessage.textContent = 'Message should be at least 15 characters.';
    formMessage.style.color = 'var(--danger)';
    return;
  }

  formMessage.textContent = 'Message validated successfully. Integrate your backend endpoint to send it.';
  formMessage.style.color = 'var(--success)';
  form.reset();
});

function initThreeScene() {
  const canvas = document.getElementById('heroCanvas');
  const renderer = new THREE.WebGLRenderer({ canvas, antialias: true, alpha: true });
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
  renderer.setSize(window.innerWidth, window.innerHeight);

  const scene = new THREE.Scene();
  const camera = new THREE.PerspectiveCamera(60, window.innerWidth / window.innerHeight, 0.1, 1000);
  camera.position.set(0, 0, 7);

  const ambient = new THREE.AmbientLight(0xffffff, 0.55);
  scene.add(ambient);

  const pointA = new THREE.PointLight(0x22d3ee, 1.4, 50);
  pointA.position.set(4, 3, 4);
  scene.add(pointA);

  const pointB = new THREE.PointLight(0x8b5cf6, 1.2, 50);
  pointB.position.set(-4, -2, 3);
  scene.add(pointB);

  const knotGeometry = new THREE.TorusKnotGeometry(1.2, 0.35, 240, 32);
  const knotMaterial = new THREE.MeshStandardMaterial({
    color: 0x22d3ee,
    metalness: 0.35,
    roughness: 0.2,
    emissive: 0x13223a,
  });
  const knot = new THREE.Mesh(knotGeometry, knotMaterial);
  scene.add(knot);

  const ringGeometry = new THREE.TorusGeometry(2.2, 0.025, 16, 220);
  const ringMaterial = new THREE.MeshBasicMaterial({ color: 0x8b5cf6 });
  const ring = new THREE.Mesh(ringGeometry, ringMaterial);
  ring.rotation.x = Math.PI / 3;
  scene.add(ring);

  const particlesCount = 2400;
  const positions = new Float32Array(particlesCount * 3);
  for (let i = 0; i < particlesCount; i += 1) {
    const i3 = i * 3;
    positions[i3] = (Math.random() - 0.5) * 40;
    positions[i3 + 1] = (Math.random() - 0.5) * 40;
    positions[i3 + 2] = (Math.random() - 0.5) * 40;
  }

  const particlesGeometry = new THREE.BufferGeometry();
  particlesGeometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
  const particlesMaterial = new THREE.PointsMaterial({
    color: 0xffffff,
    size: 0.03,
    transparent: true,
    opacity: 0.85,
  });
  const particles = new THREE.Points(particlesGeometry, particlesMaterial);
  scene.add(particles);

  const mouse = { x: 0, y: 0 };
  window.addEventListener('mousemove', (event) => {
    mouse.x = (event.clientX / window.innerWidth) * 2 - 1;
    mouse.y = -(event.clientY / window.innerHeight) * 2 + 1;
  });

  const clock = new THREE.Clock();
  function animate() {
    const elapsed = clock.getElapsedTime();
    knot.rotation.x = elapsed * 0.35 + mouse.y * 0.3;
    knot.rotation.y = elapsed * 0.45 + mouse.x * 0.4;
    ring.rotation.z = elapsed * 0.24;
    ring.rotation.y = elapsed * 0.2;
    particles.rotation.y = elapsed * 0.03;
    particles.rotation.x = elapsed * 0.02;

    pointA.position.x = Math.sin(elapsed * 0.9) * 6;
    pointA.position.z = Math.cos(elapsed * 0.7) * 5;
    pointB.position.y = Math.cos(elapsed * 0.8) * 4;

    renderer.render(scene, camera);
    requestAnimationFrame(animate);
  }
  animate();

  window.addEventListener('resize', () => {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
  });
}

initThreeScene();

window.addEventListener('scroll', () => {
  const scrollY = window.scrollY;
  const hero = document.getElementById('hero');
  hero.style.setProperty('--scroll-shift', `${scrollY * 0.02}px`);
});
