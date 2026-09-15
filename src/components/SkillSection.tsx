import { ExpandLess, ExpandMore } from '@mui/icons-material';
import styles from '../css/SkillSection.module.css';
import { useState } from 'react';

interface Entry {
  Title: string,
  DotPoints: string[],
}

interface Section {
  Heading: string;
  Entries: Entry[];
}

const SKILLS: Section[] = [
  {
    Heading: 'Experience',
    Entries: [{
      Title: 'Software Engineer - ROAVER (2026)',
      DotPoints: [
        "Independently built the majority of the frontend MVP for a pre-launch travel/activity platform under the CTO’s mentorship, contributing to key architectural and design decisions.",
        "Shipped 5 core pages (auth, saved content, creator posts, details view, search/filter) and extracted shared logic into reusable hooks and components used across the app."
      ]
    }]
  },
  {
    Heading: 'Education',
    Entries: [{
      Title: 'University of New South Wales (2025)',
      DotPoints: [
        "Bachelor of Computer Science with Distinction",
        "Relevant coursework including Software Engineering Fundamentals, Web Front-End Programming, Human Computer Interaction, and Database Systems."
      ]
    }]
  },
  {
    Heading: 'Skills',
    Entries: [
      {
        Title: 'Frontend Development',
        DotPoints: [
          "HTML/CSS",
            "JavaScript/TypeScript and React",
            "Material UI, Bootstrap, and Chakra UI",
            "Translating Figma to code - low/high fidelity prototyping to implementation",
            "Responsive and accessibility-focused UI development",
            "REST API integration and mock data layers",
            "UX informed design process - user flows, usability testing, accessibility-first decisions"
        ]
      },
      {
        Title: 'Tools and Collaboration',
        DotPoints: [
          "Git, Jira, AI assisted development - Claude Code",
          "Figma, Canva",
          "Familiar with SQL and PostgreSQL fundamentals"
        ]
      }
    ]
  },
];

export function SkillSection({
  sectionHeading,
  isVertical
}: {
  sectionHeading: string,
  isVertical: boolean
}) {
  const section = SKILLS.find((section) => section.Heading == sectionHeading);

  if (!section) return;

  return <>
    {isVertical
      ? <PortraitSkills section={section}/>
      : <LandscapeSkills section={section}/>
    }
  </>
}

function LandscapeSkills({ section }: { section: Section }) {
  return <>
    <h2 className={`${styles.skillHeader__text}`}>
      {section.Heading}
    </h2>
    <RenderInfo section={section}/>
  </>
}

function PortraitSkills({ section }: { section: Section }) {
  const [isOpen, setIsOpen] = useState(false);

  function handleOnClick() {
    console.log('clicked', isOpen)
    setIsOpen(!isOpen)
    console.log(isOpen)
  }

  return <>
    <button className={`${styles.btnAccordian} ${isOpen ? styles.btnAccordianOpen : '' }`} onClick={() => handleOnClick()}>
      <h2 className={`${styles.btnAccordian__text}`}>
        {section.Heading}
      </h2>
      {isOpen
        ? <ExpandLess className={styles.btnAccordian__icon}/>
        : <ExpandMore className={styles.btnAccordian__icon}/>
      }
    </button>
    { isOpen ? <RenderInfo section={section}/> : <></> }
  </>
}

function RenderInfo({ section }: { section: Section }) {
  return <>
    {section.Entries.map((entry, i) => {
      return <div key={`${entry}-${i}`}>
        <p className={styles.list__heading}>
          {entry.Title}
        </p>
        <ul className={styles.list}>
          {entry.DotPoints.map((string, i) => {
            return <li className={styles.list__text} key={`${entry.Title}-${i}`}>
              {string}
            </li>
          })}
        </ul>
      </div>
    })}
  </>
}