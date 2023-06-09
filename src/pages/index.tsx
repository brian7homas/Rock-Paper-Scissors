import * as React from "react"
import type { HeadFC, PageProps } from "gatsby"
import { Global, css } from '@emotion/react'


const IndexPage: React.FC<PageProps> = () => {
  return (
    <>
      <Global 
          styles={css`
            * {
              box-sizing:border-box;
              margin:0;
              padding:0;
            }
            .bg {
              background: rgb(31,55,86);
              background: radial-gradient(circle, rgba(31,55,86,1) 21%, rgba(29,47,80,1) 45%, rgba(20,21,57,1) 92%);
              height:100vh;
            }
          `}
        />
        <main className="bg">
          hello
        </main>
    </>
    
  )
}

export default IndexPage

export const Head: HeadFC = () => <title>👊 📄 ✂ </title>
