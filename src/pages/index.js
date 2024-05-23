import * as React from "react"
import Layout from "../components/layout"
import Seo from "../components/seo"
// import * as styles from "../components/index.module.css"
import CustomNav from "./navbar"
import Herosection from "./herosection"

const IndexPage = () => (
  <Layout>
    <div className="">
      <CustomNav />
      <Herosection />
    </div>
  </Layout>
)

export const Head = () =>
  <Seo title="Home" />

export default IndexPage
