// const path = require('path');

// const { baseUrl } = require('./gatsby-config').plugins.find(
//   plugin =>
//     typeof plugin === 'object' && plugin.resolve === 'gatsby-source-wordpress'
// ).options;

// const localLink = permalink =>
//   permalink.replace(/https?:\/\//, '').replace(baseUrl, '');

// console.log('running node api');

// exports.createPages = ({ graphql, boundActionCreators }) => {
//   const { createPage } = boundActionCreators;
//   console.log('in createPages');

//   return new Promise((resolve, reject) => {
//     console.log('about to call graphql');
//     resolve(
//       graphql(`
//         {
//           allWordpressPost {
//             edges {
//               node {
//                 link
//                 id
//                 wordpress_id
//               }
//             }
//           }
//         }
//       `).then(result => {
//         console.log('got query result:', result);
//         if (result.errors) {
//           reject(result.errors);
//         }

//         result.data.allWordpressPost.edges.forEach(({ node: post }) => {
//           console.log(
//             'creating page at',
//             localLink(post.link),
//             'with component',
//             path.resolve(`src/templates/post.js`)
//           );
//           createPage({
//             path: localLink(post.link),
//             component: path.resolve(`src/templates/post.js`),
//             context: post
//           });
//         });
//       })
//     );
//   });
// };
