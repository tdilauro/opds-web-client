import * as React from "react";
import LaneBook from "./LaneBook";
import CollectionLink from "./CollectionLink";
import { LaneData, Navigate, PathFor } from "../interfaces";

export interface LaneProps {
  lane: LaneData;
  navigate?: Navigate;
  pathFor?: PathFor;
  collectionUrl?: string;
}

export default class Lane extends React.Component<LaneProps, any> {
  render(): JSX.Element {
    let laneBooksStyle = {
      display: "block",
      height: "260px",
      width: "100%",
      whiteSpace: "nowrap",
      overflowX: "scroll",
      overflowY: "hidden",
      padding: 0,
      margin: 0,
      listStyleType: "none"
    };

    return (
      <div className="lane">
        <h2 style={{ clear: "both", cursor: "pointer" }}>
          <CollectionLink
            className="laneTitle"
            text={this.props.lane.title}
            url={this.props.lane.url}
            navigate={this.props.navigate}
            pathFor={this.props.pathFor} />
        </h2>

        { this.props.lane.books &&
          <ul className="laneBooks" aria-label={"books in " + this.props.lane.title} style={laneBooksStyle}>
          { this.props.lane.books.map(book =>
            <li key={book.id} style={{ display: "inline-block" }}>
              <LaneBook
                book={book}
                navigate={this.props.navigate}
                collectionUrl={this.props.collectionUrl}
                pathFor={this.props.pathFor} />
            </li>
          ) }
          </ul>
        }
      </div>
    );
  }
}