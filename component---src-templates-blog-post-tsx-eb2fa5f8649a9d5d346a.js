"use strict";(self.webpackChunkgatsby_starter_blog=self.webpackChunkgatsby_starter_blog||[]).push([[7],{4001:function(e,t,n){var l=n(7294),r=n(1883);t.Z=e=>{var t;let{description:n,title:a,children:i}=e;const{site:o}=(0,r.useStaticQuery)("3603346352"),c=n||o.siteMetadata.description,{name:m}=o.siteMetadata.author,s=m+" "+(null===(t=o.siteMetadata)||void 0===t?void 0:t.title);return l.createElement(l.Fragment,null,l.createElement("title",null,a+" | "+s),l.createElement("meta",{name:"description",content:c}),l.createElement("meta",{property:"og:title",content:a}),l.createElement("meta",{property:"og:description",content:c}),l.createElement("meta",{property:"og:type",content:"website"}),i)}},4068:function(e,t,n){n.r(t),n.d(t,{Head:function(){return o}});var l=n(7294),r=n(1883),a=n(5436),i=n(4001);const o=e=>{let{data:{markdownRemark:t}}=e;return l.createElement(i.Z,{title:t.frontmatter.title,description:t.frontmatter.description||t.excerpt})};t.default=e=>{var t;let{data:{previous:n,next:i,site:o,markdownRemark:c},location:m}=e;const s=(null===(t=o.siteMetadata)||void 0===t?void 0:t.title)||"Title";return l.createElement(a.Z,{location:m,title:s},l.createElement("article",{className:"blog-post",itemScope:!0,itemType:"http://schema.org/Article"},l.createElement("header",null,l.createElement("h1",{itemProp:"headline"},c.frontmatter.title),l.createElement("p",null,c.frontmatter.date)),l.createElement("section",{dangerouslySetInnerHTML:{__html:c.html},itemProp:"articleBody"}),l.createElement("hr",null),l.createElement("footer",null)),l.createElement("nav",{className:"blog-post-nav"},l.createElement("ul",{style:{display:"flex",flexWrap:"wrap",justifyContent:"space-between",listStyle:"none",padding:0}},l.createElement("li",null,n&&l.createElement(r.Link,{to:n.fields.slug,rel:"prev"},"← ",n.frontmatter.title)),l.createElement("li",null,i&&l.createElement(r.Link,{to:i.fields.slug,rel:"next"},i.frontmatter.title," →")))))}}}]);
//# sourceMappingURL=component---src-templates-blog-post-tsx-eb2fa5f8649a9d5d346a.js.map