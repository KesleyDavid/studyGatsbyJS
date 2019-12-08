import React from "react"
import { StaticQuery, graphql } from "gatsby"

// import { Container } from './styles';

const Profile = () => (
  <StaticQuery
    query={graphql`
      query mySiteMetadata {
        site {
          siteMetadata {
            title
            position
            description
          }
        }
      }
    `}
    // render={data => (
    render={({
      site: {
        siteMetadata: { title, position, description },
      },
    }) => (
      <div className="Profile-wrapper">
        {/* <h1>{data.site.siteMetadata.title}</h1> */}
        <h1>{title}</h1>
        <h2>{position}</h2>
        <p>{description}</p>
      </div>
    )}
  />
)

export default Profile
