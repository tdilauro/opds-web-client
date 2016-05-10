import * as React from "react";
import BrowserLink from "./BrowserLink";
import { CollectionData, BookData, LinkData } from "../interfaces";

export interface BreadcrumbsProps extends React.Props<any> {
  links: LinkData[];
  linkToCurrent: boolean;
}

export interface DataForBreadcrumbsProps {
  history: LinkData[];
  hierarchy: LinkData[];
  collection: CollectionData;
  book: BookData;
}

export interface CreateBreadcrumbsProps {
  (data: DataForBreadcrumbsProps): BreadcrumbsProps;
}

export function defaultCreateBreadcrumbsProps(data: DataForBreadcrumbsProps): BreadcrumbsProps {
  let { history, hierarchy, collection, book } = data;

  return {
    links: !history || history.length === 0 ?
      [] :
      history.concat(
        collection ?
        [{
          url: collection.url,
          text: collection.title
        }] :
        []
      ),
    linkToCurrent: !!book
  };
}

export default class Breadcrumbs extends React.Component<BreadcrumbsProps, any> {
  render(): JSX.Element {
    let linkStyle = {
      fontSize: "1.2em",
      marginRight: "5px",
      cursor: "pointer"
    };

    let parentLinks = this.props.links.slice(0, -1);
    let currentLink = this.props.links.slice(-1)[0];

    return (
        <ol className="breadcrumb" style={{ fontSize: "1.2em", height: "40px" }} aria-label="breadcrumbs" role="navigation">
          { parentLinks && parentLinks.map(link =>
            <li key={link.url}>
              <BrowserLink
                collectionUrl={link.url}
                bookUrl={null}>
                { link.text }
              </BrowserLink>
            </li>
          ) }

          <li className="currentCollection">
            <strong>
              { this.props.linkToCurrent ?
                <BrowserLink
                  className="currentCollectionLink"
                  collectionUrl={currentLink.url}
                  bookUrl={null}>
                  {currentLink.text}
                </BrowserLink> :
                currentLink.text
              }
            </strong>
          </li>
        </ol>
    );
  }
}

