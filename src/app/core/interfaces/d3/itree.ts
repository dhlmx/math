import { Link } from "../../models/d3/link";

export interface ITree {
  path: any; // as an alternative to id and parentId, returns an array identifier, imputing internal nodes
  id: any; // if tabular data, given a d in data, returns a unique identifier (string)
  parentId: any; // if tabular data, given a node d, returns its parent’s identifier
  children: any; // if hierarchical data, given a d in data, returns its children
  tree: any|d3.TreeLayout<Node>|d3.TreeLayout<d3.SimulationNodeDatum>|undefined; // layout algorithm (typically d3.tree or d3.cluster)
  separation: number;
  sort: Function|undefined; // how to sort nodes prior to layout (e.g., (a, b) => d3.descending(a.height, b.height))
  label: string; // given a node d, returns the display name
  title: string; // given a node d, returns its hover text
  link: any; // given a node d, its link (if any)
  linkTarget: string; // the target attribute for links (if any)
  width: number; // outer width, in pixels
  height: number; // outer height, in pixels
  margin: number;
  marginTop: number;
  marginRight: number;
  marginBottom: number;
  marginLeft: number;
  radius: number; // outer radius
  r: number; // radius of nodes
  padding: number; // horizontal padding for first and last column
  fill: string; // fill for nodes
  fillOpacity: number; // fill opacity for nodes
  stroke: string; // stroke for links
  strokeWidth: number; // stroke width for links
  strokeOpacity: number; // stroke opacity for links
  strokeLinejoin: any; // stroke line join for links
  strokeLinecap: any; // stroke line cap for links
  halo: string; // color of label halo
  haloWidth: number; // padding around the labels
  curve: d3.CurveFactory; // curve for the line
}
