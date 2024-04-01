import * as d3 from 'd3';

const data = {
  name: "Eve",
  children: [
    {name: "Cain"},
    {name: "Seth", children: [{name: "Enos"}, {name: "Noam"}]},
    {name: "Abel"},
    {name: "Awan", children: [{name: "Enoch"}]},
    {name: "Azura"}
  ]
};

export class RadialTree {

  width = 640;
  height = 400;
  padding = 2;

  root = d3.hierarchy(data);
  treeMap = d3.treemap();
  nodes: any = null;
  svg: any = null;

  constructor() {
    let x = Array.isArray(this.root.children) ? this.root.children[1] : null;
    console.log(this.root);

    this.treeMap.size([this.width, this.height]);
    this.treeMap.padding(this.padding);

    // this.root.sum((d) => d.value)
    this.root.sort((a, b) => b.height - a.height);

    this.treeMap(this.root as d3.HierarchyNode<unknown>);

    this.nodes = this.root.descendants();

    console.log('nodes', this.nodes);

  }

  createSVG = (): void => {
    this.svg = d3.select('#d3').append('svg')
    //.attr("viewBox", [-this.nodes[0].dy * this.padding / 2, this.nodes[0].x0 - this.nodes[0].dx, this.width, this.height])
    .attr("width", this.width)
    .attr("height", this.height)
    .attr("style", "max-width: 100%; height: auto; height: intrinsic;")
    .attr("font-family", "sans-serif")
    .attr("font-size", 10);

    this.svg.append("g")
    .attr("fill", "none")
    // .attr("stroke", stroke)
    // .attr("stroke-opacity", strokeOpacity)
    // .attr("stroke-linecap", strokeLinecap)
    // .attr("stroke-linejoin", strokeLinejoin)
    // .attr("stroke-width", strokeWidth)
    .selectAll("path")
    .data(this.root.links())
    .join("path");
    // .attr("d", d3.link(d3.curveBumpX)
    //   .x(d => d.y)
    //   .y(d => d.x));
  }

}
