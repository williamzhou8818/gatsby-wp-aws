import React from 'react';
import Layout from '../components/layout';


export default ({pageContext}) => {
    console.log(pageContext)
    return (
    <Layout>
        <h1 dangerouslySetInnerHTML={{__html: pageContext.node.title}} />
    </Layout>
    )
}