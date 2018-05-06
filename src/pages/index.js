import React from 'react';
import Link from 'gatsby-link';
import get from 'lodash/get';
import Helmet from 'react-helmet';
import styled from 'styled-components';

import Post from '../components/Post';
import SearchBox from '../components/SearchBox';
import Bio from '../components/Bio';
import Years from '../components/Years';
import MessageForm from '../components/MessageForm';

class BlogIndex extends React.Component {
  render() {
    const siteTitle = get(this, 'props.data.site.siteMetadata.title');
    const posts = get(this, 'props.data.allMarkdownRemark.edges');

    return (
      <div>
        <Helmet title={siteTitle} />
        <Sidebar>
          {/* TODO: hide search box if JS is off */}
          <SearchBox />
          <Bio />
          <Years />
          <MessageForm />
        </Sidebar>
        <MainContentArea>
          {posts.map(post => <Post key={post.node.fields.slug} post={post} />)}
        </MainContentArea>
      </div>
    );
  }
}

const MainContentArea = styled.div`
  margin: 0;
  margin-right: 25%;
`;

const Sidebar = styled.div`
  float: right;
  overflow: hidden;
  width: 22%;
`;

export default BlogIndex;

export const pageQuery = graphql`
  query IndexQuery {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      edges {
        node {
          excerpt
          fields {
            slug
          }
          frontmatter {
            date(formatString: "DD MMMM, YYYY")
            title
          }
        }
      }
    }
  }
`;
