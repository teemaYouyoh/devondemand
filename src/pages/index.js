import React from "react"
import Layout from "../components/Layout/layout.js";
import MainDevelopment from "../components/MainDevelopment/mainDevelopment.js";
import MainProcess from "../components/MainProcess/mainProcess.js";
import MainShare from "../components/MainShare/mainShare.js";

export default function Home() {
  return (
    <Layout>
      <MainDevelopment />
      <MainProcess />
      <MainShare />
    </Layout>
  )
}