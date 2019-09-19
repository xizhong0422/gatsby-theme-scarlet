import React, { useState } from "react"
import {
  StyledProjectItem,
  ProjectLink,
  ProjectImage,
  ProjectContent,
  ProjectTitle,
  ProjectBadge,
} from "./styles"

const ProjectItem = ({ link, image, alt, name, badge }) => {
  const [active, setActive] = useState(false)
  const handleClick = e => {
    e.preventDefault()
    setActive(!active)
  }
  return (
    <StyledProjectItem active={active}>
      <ProjectLink href={link} onClick={handleClick}>
        <ProjectImage src={image} alt={alt} />
        <ProjectContent>
          <ProjectTitle>{name}</ProjectTitle>
          <ProjectBadge>{badge}</ProjectBadge>
        </ProjectContent>
      </ProjectLink>
    </StyledProjectItem>
  )
}

export default ProjectItem
