import React from 'react';
import BlockContent from "@sanity/block-content-to-react";
import Link from '../Link';

const serializers = {
  types: {
    block: (props) => {
      const { style = "normal" } = props.node;

      if (/^h\d/.test(style)) {
        const level = style.replace(/[^\d]/g, "");
        return React.createElement(
          style,
          { className: `heading-${level}` },
          props.children
        );
      }

      if (style === "blockquote") {
        return <blockquote>- {props.children}</blockquote>;
      }

      // Fall back to default handling
      return BlockContent.defaultSerializers.types.block(props);
    },
    code: (props) =>
      console.log("code block", props) || (
        <pre data-language={props.node.language}>
          <code>{props.node.code}</code>
        </pre>
      )
  },
  list: (props) =>
    console.log("list", props) ||
    (props.type === "bullet" ? (
      <ul>{props.children}</ul>
    ) : (
      <ol>{props.children}</ol>
    )),
  listItem: (props) =>
    console.log("list", props) ||
    (props.type === "bullet" ? (
      <li>{props.children}</li>
    ) : (
      <li>{props.children}</li>
    )),
  marks: {
    strong: (props) =>
      console.log("strong", props) || <strong>{props.children}</strong>,
    em: (props) => console.log("em", props) || <em>{props.children}</em>,
    code: (props) => console.log("code", props) || <code>{props.children}</code>,
    link: (props) =>
      props.mark.href.includes('www.') ? (
        <a
          href={props.mark.href}
          rel="noopener noreferrer"
        >{props.children}</a>
      ) : (
        <Link to={props.mark.href}>{props.children}</Link>
      )
    ,
  }
};

export default serializers;
