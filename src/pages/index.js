import React from "react"
import { graphql } from "gatsby"

import "./index.css"

import Layout from "../components/layout"
import SEO from "../components/seo"

function IndexPage({ data }) {
  return (
    <Layout>
      <SEO />
      <h1>Support Coffee Beings</h1>
      <h3>
        A collection of virtual tip jars for coffee people in need.{" "}
        <b>Every dollar makes a difference.</b>
      </h3>
      <h3 style={{ marginBottom: 64 }}>
        If you would like to add a link to this list, send a message to{" "}
        <a
          href="https://www.instagram.com/morgandrinkscoffee/"
          target="_blank"
          rel="noopener noreferrer"
        >
          @morgandrinkscoffee on Instagram{" "}
        </a>
        with the store name and the link to your virtual donations/tip jar.
      </h3>

      <h2>Indices</h2>
      <h3>Links to many other places where you can provide support.</h3>
      <div className="grid">
        {data.index.edges.map(({ node }) => (
          <a
            className="link"
            key={node.data.Name}
            href={node.data.URL}
            target="_blank"
            rel="noopener noreferrer"
          >
            {node.data.Name}
          </a>
        ))}
      </div>

      <h2>Donate</h2>
      <h3>Send them a few dollars on their own website.</h3>
      <div className="grid">
        {data.donation.edges.map(({ node }) => (
          <a
            className="link donation"
            key={node.data.Name}
            href={node.data.URL}
            target="_blank"
            rel="noopener noreferrer"
          >
            {node.data.Name}
          </a>
        ))}
      </div>

      <h2>GoFundMe</h2>
      <h3>Lend a hand to their fundraising efforts.</h3>
      <div className="grid">
        {data.gofundme.edges.map(({ node }) => (
          <a
            className="link gofundme"
            key={node.data.Name}
            href={node.data.URL}
            target="_blank"
            rel="noopener noreferrer"
          >
            {node.data.Name}
          </a>
        ))}
      </div>

      <h2>Ko-Fi</h2>
      <h3>Buy them a coffee!</h3>
      <div className="grid">
        {data.kofi.edges.map(({ node }) => (
          <a
            className="link ko-fi"
            key={node.data.Name}
            href={node.data.URL}
            target="_blank"
            rel="noopener noreferrer"
          >
            {node.data.Name}
          </a>
        ))}
      </div>

      <h2>Merch</h2>
      <h3>Buy some swag to support them.</h3>
      <div className="grid">
        {data.merch.edges.map(({ node }) => (
          <a
            className="link merch"
            key={node.data.Name}
            href={node.data.URL}
            target="_blank"
            rel="noopener noreferrer"
          >
            {node.data.Name}
          </a>
        ))}
      </div>

      <h2>PayPal</h2>
      <h3>Send a few bucks their way on PayPal.</h3>
      <div className="grid">
        {data.paypal.edges.map(({ node }) => (
          <a
            className="link paypal"
            key={node.data.Name}
            href={node.data.URL}
            target="_blank"
            rel="noopener noreferrer"
          >
            {node.data.Name}
          </a>
        ))}
      </div>

      <h2>Venmo</h2>
      <h3>Send a few bucks their way on Venmo.</h3>
      <div className="grid">
        {data.venmo.edges.map(({ node }) => (
          <a
            className="link venmo"
            key={node.data.Name}
            href={node.data.URL}
            target="_blank"
            rel="noopener noreferrer"
          >
            {node.data.Name}
          </a>
        ))}
      </div>
    </Layout>
  )
}

export default IndexPage

export const query = graphql`
  fragment Details on AirtableConnection {
    edges {
      node {
        data {
          Name
          URL
        }
      }
    }
  }

  query AllTipJars {
    index: allAirtable(
      filter: { table: { eq: "Tip Jars" }, data: { Type: { eq: "Index" } } }
      sort: { order: ASC, fields: data___Name }
    ) {
      ...Details
    }

    venmo: allAirtable(
      filter: { table: { eq: "Tip Jars" }, data: { Type: { eq: "Venmo" } } }
      sort: { order: ASC, fields: data___Name }
    ) {
      ...Details
    }

    paypal: allAirtable(
      filter: { table: { eq: "Tip Jars" }, data: { Type: { eq: "PayPal" } } }
      sort: { order: ASC, fields: data___Name }
    ) {
      ...Details
    }

    merch: allAirtable(
      filter: { table: { eq: "Tip Jars" }, data: { Type: { eq: "Merch" } } }
      sort: { order: ASC, fields: data___Name }
    ) {
      ...Details
    }

    gofundme: allAirtable(
      filter: { table: { eq: "Tip Jars" }, data: { Type: { eq: "GoFundMe" } } }
      sort: { order: ASC, fields: data___Name }
    ) {
      ...Details
    }

    donation: allAirtable(
      filter: { table: { eq: "Tip Jars" }, data: { Type: { eq: "Donation" } } }
      sort: { order: ASC, fields: data___Name }
    ) {
      ...Details
    }

    kofi: allAirtable(
      filter: { table: { eq: "Tip Jars" }, data: { Type: { eq: "Ko-Fi" } } }
      sort: { order: ASC, fields: data___Name }
    ) {
      ...Details
    }
  }
`
