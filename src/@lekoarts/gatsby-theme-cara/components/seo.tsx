import React from "react"
import { Helmet } from "react-helmet"
import { withPrefix } from "gatsby"
import useSiteMetadata from "../hooks/use-site-metadata"

type Props = {
  title?: string
  description?: string
  pathname?: string
  image?: string
  children?: React.ReactNode
}

const SEO = ({ title = ``, description = ``, pathname = ``, image = ``, children = null }: Props) => {
  const site = useSiteMetadata()

  const {
    siteTitle,
    siteTitleAlt: defaultTitle,
    siteUrl,
    siteDescription: defaultDescription,
    siteLanguage,
    siteImage: defaultImage,
    author,
  } = site

  const seo = {
    title: title || defaultTitle,
    description: description || defaultDescription,
    url: `${siteUrl}${pathname || ``}`,
    image: `${siteUrl}${image || defaultImage}`,
  }
  return (
    <Helmet title={title} defaultTitle={defaultTitle} defaultDescription={description} defaultImage={"https://ibb.co/kqy6mBF"} titleTemplate={`%s | ${siteTitle}`}>
      <html lang={siteLanguage} />
      <meta name="description" content={seo.description} />
      <meta name="image" content={seo.image} />
      <meta name='keywords' content="web developer, web development, Matías Racedo, JavaScript, portfolio, software developer, React developer, Henry" />
      <meta property="og:title" content={seo.title} />
      <meta property="og:url" content={seo.url} />
      <meta property="og:description" content={seo.description} />
      <meta property="og:image" content="https://ibb.co/kqy6mBF" />
      <meta property="og:type" content="website" />
      <meta property="og:image:alt" content={seo.description} />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={seo.title} />
      <meta name="twitter:url" content={seo.url} />
      <meta name="twitter:description" content={seo.description} />
      <meta name="twitter:image" content="https://ibb.co/kqy6mBF" />
      <meta name="twitter:image:alt" content={seo.description} />
      <meta name="twitter:creator" content={author} />
      <link rel="icon" type="image/png" sizes="32x32" href={withPrefix(`/favicon.png`)} />
      <link rel="icon" type="image/png" sizes="16x16" href={withPrefix(`/favicon.png`)} />
      <link rel="apple-touch-icon" sizes="180x180" href={withPrefix(`/favicon.png`)} />
      {children}
    </Helmet>
  )
}

export default SEO
