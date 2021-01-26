import Head from 'next/head'
import db from '../../../db.json'

function HeadPage() {
  return (
		<Head>
			<title>{db.title}</title>
			<link rel="shortcut icon" href={db.favicon} />

			<meta name="viewport" content="initial-scale=1.0, width=device-width" />
			<meta property="og:locale" content="pt_BR" />
			<meta charSet="utf-8" />
			<meta property="og:site_name" content={db.title} />
			<meta property="og:title" content={db.title} key="ogtitle" />
			<meta property="og:description" content={db.description} key="ogdesc" />

			<meta property="og:image" content="../../../public/static/cover.jpg" key="ogimage" />
			<meta property="og:image:type" content="image/jpeg" />
			<meta property="og:image:width" content="800" /> 
			<meta property="og:image:height" content="600" />

			<meta property="og:type" content="website"></meta>
		</Head>
  )
}

export default HeadPage