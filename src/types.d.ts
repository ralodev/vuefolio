export interface EducationEntry {
  title: string
  institution: string
  url: string
  description: string
  startDate: string
  endDate: string
  courses: string[]
}

export interface AchievementEntry {
  title: string
  date: string
  url?: string
  awarder: string
  summary: string
}

export interface Education {
  title: string
  list: EducationEntry[]
}

export interface Achievements {
  title: string
  list: AchievementEntry[]
}

export interface About {
  title: string
  summary: string
  education: Education
  achievements: Achievements
}

export interface JobEntry {
  company: string
  position: string
  url: string
  startDate: string
  endDate: string
  highlights: string[]
  description: string
}

export interface ProjectEntry {
  name: string
  techstack: string[]
  image?: string
  description: string
  src: string
  url: string
}

export interface Contact {
  title: string
  description: string
  social: string
  email: string
  copy: string
  copied: string
  form: string
  name_label: string
  name_placeholder: string
  email_label: string
  email_placeholder: string
  message_label: string
  message_placeholder: string
  send: string
  sending: string
  restriction: string
}

export interface Experience {
  title: string
  description: string
  download_button: string
  present: string
  month: string
  year: string
  list: JobEntry[]
}

export interface Hero {
  title: string
  subtitle: string
  name: string
  url: string
  contact_button: string
  profiles: {
    linkedin: string
    github: string
    youtube: string
    twitter: string
    instagram: string
    facebook: string
  }
  home: string
}

export interface Projects {
  title: string
  source: string
  website: string
  main: ProjectEntry[]
  other: ProjectEntry[]
}
