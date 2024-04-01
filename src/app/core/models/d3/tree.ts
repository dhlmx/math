import * as d3 from 'd3';
import { Node } from '../../models/d3/node';
import { Link } from '../../models/d3/link';
import { ITree } from '../../interfaces/d3/itree';

export class Tree implements ITree {

  path: any = null;
  id: any = null;
  parentId: any = null;
  children: any = null;
  tree: any = null;
  separation = 0;
  sort: Function|undefined = undefined;
  label = '';
  title = '';
  link: any = null;
  linkTarget = '';
  width = 0;
  height = 0;
  margin = 0;
  marginTop = 0;
  marginRight = 0;
  marginBottom = 0;
  marginLeft = 0;
  radius = 0;
  r = 0;
  padding = 0;
  fill = '';
  fillOpacity = 0;
  stroke = '';
  strokeWidth = 0;
  strokeOpacity = 0;
  strokeLinejoin: any = null;
  strokeLinecap: any = null;
  halo = '';
  haloWidth = 0;
  curve = d3.curveBumpX;

  constructor(setup?: ITree) {
    if (setup) {
      this.path = setup.path;
      this.id = setup.id;
      this.parentId = setup.parentId;
      this.children = setup.children;
      this.tree = setup.tree;
      this.sort = setup.sort;
      this.label = setup.label;
      this.title = setup.title;
      this.link = setup.link;
      this.linkTarget = setup.linkTarget;
      this.width = setup.width;
      this.height = setup.height
      this.margin = setup.margin;
      this.marginTop = setup.marginTop;
      this.marginRight = setup.marginRight;
      this.marginBottom = setup.marginBottom;
      this.marginLeft = setup.marginLeft;
      this.radius = setup.radius;
      this.r = setup.r;
      this.padding = setup.padding;
      this.fill = setup.fill;
      this.fillOpacity = setup.fillOpacity;
      this.stroke = setup.stroke;
      this.strokeWidth = setup.strokeWidth;
      this.strokeOpacity = setup.strokeOpacity;
      this.strokeLinejoin = setup.strokeLinejoin;
      this.strokeLinecap = setup.strokeLinecap;
      this.halo = setup.halo;
      this.haloWidth = setup.haloWidth;
      this.curve = setup.curve;
    } else {
      this.tree = d3.tree;
      this.separation = this.tree === d3.tree ? 2 : 1; // Review
      this.linkTarget = '_blank';
      this.width = 640;
      this.height = 400;
      this.margin = 60;
      this.marginTop = this.margin;
      this.marginRight = this.margin;
      this.marginBottom = this.margin;
      this.marginLeft = this.margin;
      this.radius =  Math.min(this.width - this.marginLeft - this.marginRight, this.height - this.marginTop - this.marginBottom) / 2
      this.r = 3;
      this.padding = 1;
      this.fill = '#999';
      this.stroke = '#555';
      this.strokeWidth = 1.5;
      this.strokeOpacity = 0.4;
      this.halo = '#fff';
      this.haloWidth = 3;
      this.curve = d3.curveBumpX;
    }
  }
}


  // d3Color = d3.scaleOrdinal(d3.schemeCategory10);

  // d3Links = data.links.map(d => new Link(d.source, d.target));
  // d3Nodes = data.nodes.map(n => new Node(n.id));
  // d3Index = new Map(this.d3Nodes.map(n => [n.id, n]));

  // ticked = (): void => {
  //   this.link
  //     .attr("x1", (d: any) => d.source.x)
  //     .attr("y1", (d: any) => d.source.y)
  //     .attr("x2", (d: any) => d.target.x)
  //     .attr("y2", (d: any) => d.target.y);

  //   this.node
  //     .attr("cx", d => d.x)
  //     .attr("cy", d => d.y);
  // }

  // d3Simulation = d3.forceSimulation(this.d3Nodes)
  //   .force("link", d3.forceLink(this.d3Links).id(d => d.index ?? 0))
  //   .force("charge", d3.forceCenter(this.width / 2, this.height / 2))
  //   .on("tick", this.ticked);

  // svg = d3.create("svg")
  //   .attr("width", this.width)
  //   .attr("height", this.height)
  //   .attr("viewBox", [0, 0, this.width, this.height])
  //   .attr("style", "max-width: 100%; height: auto;");

  // // Add a line for each link, and a circle for each node.
  // link = this.svg.append("g")
  //   .attr("stroke", "#999")
  //   .attr("stroke-opacity", 0.6)
  //   .selectAll()
  //   .data(this.d3Links)
  //   .join("line")
  //   .attr("stroke-width", (d: any) => Math.sqrt(d.value));

  // node = this.svg.append("g")
  //   .attr("stroke", "#fff")
  //   .attr("stroke-width", 1.5)
  //   .selectAll()
  //   .data(this.nodes)
  //   .join("circle")
  //   .attr("r", 5)
  //   .attr("fill", (d: any) => this.d3Color(d.group));


/*
    // this.svg = (new Tree(treeData)).createSVG();

    // let graphXY = d3Plot.rectY({length: 10000}, d3Plot.binX({y: "count"}, {x: Math.random}));
    // this.render.appendChild(this.divD3, graphXY.plot());

    // console.info(this.d3Nodes, this.d3Index, this.d3Links);

    // // this.svg = d3.select('#d3')
    // this.node.append("title").text(d => d.id);

    // // Add a drag behavior.
    // // this.node.call(d3.drag().on("start", this.dragstarted).on("drag", this.dragged).on("end", this.dragended));


types = Array.from(new Set(this.suits.map(s => s.type)));
  gNodes: d3.SimulationNodeDatum[] = Array.from(new Set(this.suits.flatMap(l => [l.source, l.target] as d3.SimulationNodeDatum[])));
  links = this.suits.map(s => Object.create(s));
  color = d3.scaleOrdinal(this.types, d3.schemeCategory10);

    d3.create("svg")
      .attr("viewBox", [-this.width / 2, -this.height / 2, this.width, this.height])
      .attr("width", this.width)
      .attr("height", this.height)
      .attr("style", "max-width: 100%; height: auto; font: 12px sans-serif;");

    this.svg.append("defs").selectAll("marker")
      .data(this.types)
      .join("marker")
        .attr("id", (d: any) => `arrow-${d}`)
        .attr("viewBox", "0 -5 10 10")
        .attr("refX", 15)
        .attr("refY", -0.5)
        .attr("markerWidth", 6)
        .attr("markerHeight", 6)
        .attr("orient", "auto")
      .append("path")
        .attr("fill", this.color)
        .attr("d", "M0,-5L10,0L0,5");

    const link = this.svg.append("g")
      .attr("fill", "none")
      .attr("stroke-width", 1.5)
      .selectAll("path")
      .data(this.links)
      .join("path")
        .attr("stroke", (d: any) => this.color(d.type))
        .attr("marker-end", (d: any) => `url(${new URL(`#arrow-${d.type}`, location)})`);


  simulation = d3.forceSimulation(this.gNodes)
    .force('link', d3.forceLink(this.links).id(s => s.index ?? 0))
    .force('charge', d3.forceManyBody().strength(-400))
    .force('x', d3.forceX())
    .force('y', d3.forceY());

  // linkArc = (d: INode): string => {
  //   const r = Math.hypot(d.target.x - d.source.x, d.target.y - d.source.y);
  //   return `
  //     M${d.source.x},${d.source.y}
  //     A${r},${r} 0 0,1 ${d.target.x},${d.target.y}
  //   `;
  // }

  // drag = simulation => {

  //   function dragstarted(event, d) {
  //     if (!event.active) simulation.alphaTarget(0.3).restart();
  //     d.fx = d.x;
  //     d.fy = d.y;
  //   }

  //   function dragged(event, d) {
  //     d.fx = event.x;
  //     d.fy = event.y;
  //   }

  //   function dragended(event, d) {
  //     if (!event.active) simulation.alphaTarget(0);
  //     d.fx = null;
  //     d.fy = null;
  //   }

  //   return d3.drag()
  //       .on("start", dragstarted)
  //       .on("drag", dragged)
  //       .on("end", dragended);
  // }


    */

/*
  // onNodeSelect = (x: any): void => {
  // }


  // children = (data: IChild): IChild[] => {
  //   return data.children ?? [];
  // }


  // dragstarted = (event: any): void => {
  //   if (!event.active) {
  //     this.d3Simulation.alphaTarget(0.3).restart();
  //   }
  //   event.subject.fx = event.subject.x;
  //   event.subject.fy = event.subject.y;
  // }

  // dragged = (event: any): void =>  {
  //   event.subject.fx = event.x;
  //   event.subject.fy = event.y;
  // }

  // dragended = (event: any): void => {
  //   if (!event.active) {
  //     this.d3Simulation.alphaTarget(0);
  //   }
  //   event.subject.fx = null;
  //   event.subject.fy = null;
  // }



export class Tree extends BaseTree {

  data: Node[]|Link[];
  root: any;
  layout: ILayout = {} as ILayout;

  constructor(data: any, setup?: IBaseTree) {
    super(setup);
    this.data = data;
    this.init();
    this.initRoot();
    this.sortRoot();
    this.initLayout();
  }

  createSVG = (): SVGSVGElement|null => {
    const svg = d3.select('#d3').append('svg')
      .attr("viewBox", [-this.layout.dy * this.padding / 2, this.layout.x0 - this.layout.dx, this.width, this.height])
      .attr("width", this.width)
      .attr("height", this.height)
      .attr("style", "max-width: 100%; height: auto; height: intrinsic;")
      .attr("font-family", "sans-serif")
      .attr("font-size", 10);

    svg.append("g")
      .attr("fill", "none")
      .attr("stroke", this.stroke)
      .attr("stroke-opacity", this.strokeOpacity)
      .attr("stroke-linecap", this.strokeLinecap)
      .attr("stroke-linejoin", this.strokeLinejoin)
      .attr("stroke-width", this.strokeWidth)
      .selectAll("path")
      .data(this.root.links())
      .join("path");
      // .attr("d", d3.link(this.curve ?? d3.curveBumpX).x(d => d.y).y(d => d.x));

    const node = svg.append("g")
      .selectAll("a")
      .data(this.root.descendants())
      .join("a")
      .attr("xlink:href", this.link === null ? null : (d: any) => this.link(d.data, d))
      .attr("target", this.link == null ? null : this.linkTarget)
      .attr("transform", (d: any) => `translate(${d.y},${d.x})`);

    node.append("circle")
      .attr("fill", (d: any) => d.children ? this.stroke : this.fill)
      .attr("r", this.r);

    if (this.title !== null) {
      // node.append("title").text(d => title(d.data, d));
      node.append("title").text((d: any) => d.title)
    }

    if (this.label) {
      node.append("text")
      .attr("dy", "0.32em")
      .attr("x", (d: any) => d.children ? -6 : 6)
      .attr("text-anchor", (d: any) => d.children ? "end" : "start")
      .attr("paint-order", "stroke")
      .attr("stroke", this.halo)
      .attr("stroke-width", this.haloWidth)
      .text((d, i) => this.layout.label[i]);
    }

    return svg.node();
  }

  init = (): void => {
    this.id = Array.isArray(this.data) ? (d: Node) => d.id : null;
    this.parentId = Array.isArray(this.data) ? (d: any) => d.parentId : null; // REVIEW
    this.tree = d3.tree;
    this.linkTarget = '_blank';
    this.width = 640;
    this.r = 3;
    this.padding = 1;
    this.fill = '#999';
    this.stroke = '#555';
    this.strokeWidth = 1.5;
    this.strokeOpacity = 0.4;
    this.halo = '#fff';
    this.haloWidth = 3;
    this.curve = d3.curveBumpX;
  }

  initRoot = (): void => {
    if (this.path !== null) {
      this.root = d3.stratify().path(this.path)(this.data);
    } else if (this.id !== null || this.parentId !== null) {
      this.root = d3.stratify().id(this.id).parentId(this.parentId)(this.data);
    } else {
      this.root = d3.hierarchy(this.data, this.children ?? {});
    }
  }

  initLayout = (): void => {
    this.layout.descendants = this.root.descendants();
    this.layout.label = this.label === null ? null : this.layout.descendants.map((d: any) => d);
    this.layout.dx = 10;
    this.layout.dy = this.width / (this.root.height + this.padding);
    this.layout.x0 = Infinity;
    this.layout.x1 = -this.layout.x0;

    this.tree().nodeSize([this.layout.dx, this.layout.dy])(this.root);

    this.root.forEach((d: any) => {
      if (d.x > this.layout.x1) {
        this.layout.x1 = d.x;
      }

      if (d.x < this.layout.x0) {
        this.layout.x0 = d.x;
      }
    });

    if (this.height === undefined) {
      this.height = this.layout.x1 - this.layout.x0 + this.layout.dx * 2;
    }

    if (typeof this.curve !== "function") {
      throw new Error(`Unsupported curve`);
    }
  }

  sortRoot = (): void => {
    if (this.sort !== null) {
      this.root.sort(this.sort);
    }
  }

}
*/
