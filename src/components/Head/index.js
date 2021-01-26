import Head from 'next/head'
import db from '../../../db.json'

function HeadPage() {
  return (
		<Head>
			<title>{db.title}</title>
			<meta property="og:title" content={db.title} key="title" />

			<meta property="og:image" content={db.cover_site} />
			<meta property="og:image:type" content="image/jpeg" />
			<meta property="og:image:width" content="800" /> 
			<meta property="og:image:height" content="600" />
		</Head>
  )
}

export default HeadPage