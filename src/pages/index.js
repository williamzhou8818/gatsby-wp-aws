import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"
// import { graphql } from 'gatsby';

import { graphql, StaticQuery } from 'gatsby';

// {data}
const IndexPage = () => {

  return (
      <Layout>
            <StaticQuery  query={graphql`
            {
              allWordpressPage {
                edges {
                  node {
                    id
                    title
                    content
                  }
                }
              }
            }
          `}  render={props => (
                <div>
                    {props.allWordpressPage.edges.map(page => (
                        <div key={page.node.id}> 
                          <h1>{page.node.title}</h1>
                          <div dangerouslySetInnerHTML={{__html: page.node.content}} />
                        </div>
                    ))}
                </div> 
              )}/>
      </Layout>
  )



    // console.log(data)
    // return (
    //   <div>{data.allWordpressPage.edges.map(profile => {
    //     console.log(profile)
    //     return (
    //       <div>
    //         <h3>title: {profile.node.title}</h3>
    //       </div>
    //     )
    //   })

    //     }
    //     </div>
    // )
}


// export const query = graphql`
// query{ 
     
//   allWordpressPage {
//     edges {
//       node {
//         title
//         content
//       }
//     }
//   }

// }

// `;

export default IndexPage
