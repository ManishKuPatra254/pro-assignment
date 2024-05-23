import * as React from "react"
import Layout from "../components/layout"
import Seo from "../components/seo"
// import * as styles from "../components/index.module.css"
import CustomNav from "./navbar"

const IndexPage = () => (
  <Layout>
    <div className="">
      <CustomNav />
    </div>
  </Layout>
)

export const Head = () =>
  <Seo title="Home" />

export default IndexPage
