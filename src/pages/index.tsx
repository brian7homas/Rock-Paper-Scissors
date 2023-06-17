import * as React from "react"
import type { HeadFC, PageProps } from "gatsby"
import { Global, css } from '@emotion/react'
import Board from "../components/Board"
import Footer from "../components/Footer"
import Layout from "../components/Layout"

const IndexPage: React.FC<PageProps> = () => {
  return (
    <Layout>
      <Global
        styles={css`
          @font-face {
            font-family: 'Barlow Semi Condensed';
            src: url('https://fonts.google.com/specimen/Barlow+Semi+Condensed') format('truetype');
          }
          @font-face {
            font-family: 'Fjalla One';
            src: url('https://fonts.google.com/specimen/Fjalla+One') format('truetype');
          }
            * {
              box-sizing:border-box;
              margin:0;
              padding:0;
            }
            
          `}
      />
      <Board />
      <Footer />
    </Layout>

  )
}

export default IndexPage

export const Head: HeadFC = () => <title>👊 📄 ✂ </title>
