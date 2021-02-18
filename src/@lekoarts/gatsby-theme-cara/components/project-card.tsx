/** @jsx jsx */
import React from "react"
import { jsx } from "theme-ui"
import github from '../../../../static/github.svg'
import website from '../../../../static/link.svg'
import styles from './project-card.module.scss'

type ProjectCardProps = {
  repolink: string
  link: string
  title: string
  children: React.ReactNode
  bg: string
}


const ProjectCard = ({ link, title, children, bg }: ProjectCardProps) => {
  return (
  <div
    sx={{
      width: `100%`,
      boxShadow: `lg`,
      position: `relative`,
      borderRadius: `lg`,
      px: 4,
      py: 3.5,
      color: `white`,
      background: bg || `none`,
      transition: `all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275) !important`,
      "&:hover": {
        color: `white !important`,
        transform: `translateY(-5px)`,
        boxShadow: `xl`,
      },
    }}
  >
    <div
      className={styles.title}
      sx={{
        textTransform: `uppercase`,
        letterSpacing: `wide`,
        pt: 4,
        fontSize: [4, 5],
        fontWeight: `medium`,
        lineHeight: 1,
        marginBottom: 1.5
      }}
    >
      {title}
    </div>
    <div sx={{ px: 3, py: 3, opacity: 0.85, marginBottom: 1.5, textShadow: `0 2px 10px rgba(0, 0, 0, 0.3)` }}>{children}</div>
    <div className={styles.icons} sx={{ opacity: 0.85, marginBottom: 2, textShadow: `0 2px 10px rgba(0, 0, 0, 0.3)` }}>
    <a
    href={link.split(', ')[1]}
    target="_blank"
    rel="noreferrer noopener"
    >
      <img src={github} width='40' heigth='40' alt="github repository" className={styles.svg}/>
    </a>
    <a
    href={link.split(', ')[0]}
    target="_blank"
    rel="noreferrer noopener"
    >
      <img src={website} width='40' heigth='40' alt="website" className={styles.svg}/>
    </a>
    </div>
  </div>
)}

export default ProjectCard
