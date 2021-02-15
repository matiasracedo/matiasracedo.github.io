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


const ProjectCard = ({ repolink, link, title, children, bg }: ProjectCardProps) => {
  console.log(repolink)
  return (
  <div
    sx={{
      width: `100%`,
      boxShadow: `lg`,
      position: `relative`,
      textDecoration: `none`,
      borderRadius: `lg`,
      px: 4,
      py: 4,
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
        marginBottom: 2
      }}
    >
      {title}
    </div>
    <div sx={{ px: 3, py: 3, opacity: 0.85, marginBottom: 2, textShadow: `0 2px 10px rgba(0, 0, 0, 0.3)` }}>{children}</div>
    <div className={styles.icons} sx={{ opacity: 0.85, marginBottom: 2, textShadow: `0 2px 10px rgba(0, 0, 0, 0.3)` }}>
    <a
    href={repolink}
    target="_blank"
    rel="noreferrer noopener"
    >
      <img src={github} width='40' heigth='40' alt="github repository" className={styles.svg}/>
    </a>
    <a
    href={link}
    target="_blank"
    rel="noreferrer noopener"
    >
      <img src={website} width='40' heigth='40' alt="website" className={styles.svg}/>
    </a>
    </div>
  </div>
)}

export default ProjectCard
