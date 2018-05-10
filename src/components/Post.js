import React from 'react';
import styled, { injectGlobal } from 'styled-components';
import cheerio from 'cheerio';

import { Card } from './primitives';

const cloudinary = src =>
  'http://res.cloudinary.com/ksmithbaylor/image/fetch/f_auto,fl_progressive,q_auto/' +
  src.split('?')[0];

class Post extends React.Component {
  constructor(props) {
    super(props);
    this.cachedContent = null;
    this.modifiedContent = this.modifiedContent.bind(this);
  }

  modifiedContent() {
    if (this.cachedContent) {
      return this.cachedContent;
    }

    const $ = cheerio.load(this.props.post.node.content);
    $('img').each(function(i, elem) {
      const $image = $(this);
      const src = $image.attr('src');
      const imgTag = `<img data-src="${cloudinary(src)}" />`;
      const $strippedImage = $(
        `${imgTag}<noscript>${imgTag.replace('data-src', 'src')}</noscript>`
      );
      $image.replaceWith($strippedImage);
    });

    this.cachedContent = $.html();
    return this.cachedContent;
  }

  render() {
    const { title, date } = this.props.post.node;
    const content = this.modifiedContent();

    return (
      <Card
        topBarContents={
          <React.Fragment>
            <Title dangerouslySetInnerHTML={{ __html: title }} />
            <Date>{date}</Date>
          </React.Fragment>
        }
        bodyStyles={{ marginTop: '-1rem', padding: '1rem' }}
      >
        <Content dangerouslySetInnerHTML={{ __html: content }} />
        <Footer>
          <CommentBadge count={0} />
        </Footer>
      </Card>
    );
  }
}

const Title = styled.h2`
  font-size: 20px;
  font-weight: 400;
  display: inline-block;
  margin: 0;
  float: left;
  clear: both;
`;

const Date = styled.span`
  opacity: 0.5;
  font-size: 14px;
  font-family: Arial, Helvetica, sans-serif;
  font-weight: 700;
  float: right;
  display: inline-block;
  margin: 0;
  margin-top: 5px;
`;

const Content = styled.article`
  color: rgb(102, 102, 102);
  border-bottom: 1px dashed #9b6745;
  font-family: sans-serif;
  font-size: 18px;
  font-weight: 400;
  line-height: 1.6em;

  img {
    max-width: 100%;
    height: auto;
    display: block;
    margin: 0.5rem auto;
  }

  iframe {
    display: block;
    margin: 0.5rem auto;
  }
`;

const Footer = styled.div`
  width: 100%;
  padding-top: 1rem;
  text-align: right;
`;

const CommentBadge = styled.span`
  background-color: #6eb267;
  text-transform: uppercase;
  font-size: 11px;
  font-family: sans-serif;
  border-radius: 3px;
  padding: 4px 6px;
  color: white;
  font-weight: 700;
  cursor: pointer;

  &::after {
    content: '${props => commentsText(props.count)}';
  }
`;

function commentsText(n) {
  switch (n) {
    case 0:
      return 'add a comment';
    case 1:
      return '1 comment';
    default:
      return n + ' comments';
  }
}

export default Post;
