import Layout from '../components/MyLayout'
import ReactMarkdown from 'react-markdown'

export default function Index(props) {
  return (
    <Layout>
      <ReactMarkdown source={props.pageContent} />
    </Layout>
  );
}

Index.getInitialProps = async (context) => {
  const content = await import('../content/index.md')

  return {
    pageContent: content.default
  }
}
