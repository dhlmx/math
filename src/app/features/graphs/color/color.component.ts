import { Component, ElementRef, OnInit, Renderer2, ViewChild } from '@angular/core';
import { GuestCodeEnum, GuestEnum } from '../../../core/enums/guest.enum';
import { Integer } from '../../../core/models/integer';
import { Apex } from '../../../core/models/apex';
import { Color } from '../../../core/models/color';
import { Edge } from '../../../core/models/edge';
import { Graph } from '../../../core/models/graph';
import { sortNumbers, sortWords, toReverse } from '../../../core/services/utilities/sort.service';
import { Series } from 'src/app/core/models/series';
import { expansion } from 'src/app/core/services/utilities/numeric';
import * as d3 from 'd3';
import { Tree } from 'src/app/core/models/d3/tree';
import * as d3Plot from '@observablehq/plot';
import { plot } from '@observablehq/plot';
import { ForceD3, IOptionsXY } from 'src/app/core/services/d3/d3.force';
import { Link } from 'src/app/core/models/d3/link';
import { Node } from 'src/app/core/models/d3/node';
import { RadialTree } from 'src/app/core/models/d3/radial';
import { Bar } from 'src/app/core/models/d3/bar';
import { ADELA, ADELA_COUPLE, ADELA_COUPLE_ID, ADELA_ID, ALONDRA, ALONDRA_COUPLE, ALONDRA_COUPLE_ID, ALONDRA_ID,
  ANABEL, ANABEL_COUPLE, ANABEL_COUPLE_ID, ANABEL_ID, BARBARA, BARBARA_COUPLE, BARBARA_COUPLE_ID, BARBARA_ID, BERTHA,
  BERTHA_COUPLE, BERTHA_COUPLE_ID, BERTHA_ID, CONDESA, CONDESA_ID, CONDE_MAYOR, CONDE_MAYOR_ID,
  CONDE_MENOR, CONDE_MENOR_ID, DUQUESA, DUQUESA_ID, EDGES, ENRIQUE, ENRIQUE_COUPLE, ENRIQUE_COUPLE_ID,
  ENRIQUE_ID, ESTEBAN, ESTEBAN_COUPLE, ESTEBAN_COUPLE_ID, ESTEBAN_ID, NODES, TECNOLOGIES_DATA, TREE_DATA, TIDY_TREE_DATA, FLARE_DATA, getColor
 } from '../../../core/constants/constants'
import { IChild } from 'src/app/core/interfaces/d3/ichild';
import { AppService } from 'src/app/core/services/utilities/app.service';

@Component({
  selector: 'app-color',
  templateUrl: './color.component.html',
  styleUrls: ['./color.component.scss']
})
export class ColorComponent implements OnInit {

  hostElement: any;
  svg: any;
  g: any;

  colors = d3.scaleOrdinal(d3.schemeCategory10);
  colorScale: any;

  width = 640;
  height = 400;
  margin = 50;
  padding = 2;

  x: d3.ScaleBand<string> = d3.scaleBand();
  y: d3.ScaleLinear<number, number, never> = d3.scaleLinear();

  xmax = 45;
  ymax = 200;
  hticks = 60;
  area: any;
  histogram: any;

  showLabel = 1;

  data = TECNOLOGIES_DATA;
  treeData: IChild = {} as IChild;
  // tidyTreeData = FLARE_DATA;
  tidyTreeData: any;
  bins: any[] = [];
  paths: any[] = [];

  bars: any;
  graph = new Graph();

  get edges(): any[] {
    return EDGES ;
  }

  get nodes(): any[] {
    return NODES;
  }

  options: IOptionsXY = { width: 800, height: 600 };
  forcesGraph = new ForceD3([], [], { width: 400, height: 320});

    constructor(
    public appService: AppService,
    private render: Renderer2,
    private elRef: ElementRef
  ) {
    this.hostElement = elRef.nativeElement;
    // this.bars = new Bar(650, 400, 50, 0.2);
  }

  ngOnInit(): void {
    this.graph.apexes = [
      new Apex({ id: 8, alias: DUQUESA_ID, name: DUQUESA, blackList: [
        ADELA_COUPLE_ID, ALONDRA_COUPLE_ID, ANABEL_COUPLE_ID,
        BARBARA_COUPLE_ID, BERTHA_COUPLE_ID,
        ENRIQUE_COUPLE_ID, ESTEBAN_COUPLE_ID
      ] }),

      new Apex({ id: 1, alias: CONDESA_ID, name: CONDESA, blackList: [CONDE_MAYOR_ID, CONDE_MENOR_ID] }),
      new Apex({ id: 10, alias: ENRIQUE_ID, name: ENRIQUE, blackList: [ESTEBAN_ID] }),
      new Apex({ id: 9, alias: ENRIQUE_COUPLE_ID, name: ENRIQUE_COUPLE, blackList: [ESTEBAN_ID] }),
      new Apex({ id: 14, alias: ESTEBAN_ID, name: ESTEBAN, blackList: [ENRIQUE_ID] }),
      new Apex({ id: 11, alias: ESTEBAN_COUPLE_ID, name: ESTEBAN_COUPLE, blackList: [ENRIQUE_ID] }),

      new Apex({ id: 2, alias: CONDE_MAYOR_ID, name: CONDE_MAYOR, blackList: [CONDESA_ID, CONDE_MENOR_ID] }),
      new Apex({ id: 7, alias: ADELA_ID, name: ADELA, blackList: [CONDE_MENOR_ID] }),
      new Apex({ id: 5, alias: ADELA_COUPLE_ID, name: ADELA_COUPLE, blackList: [CONDE_MENOR_ID] }),
      new Apex({ id: 13, alias: ALONDRA_ID, name: ALONDRA, blackList: [CONDE_MENOR_ID, BARBARA_ID, ESTEBAN_ID] }),
      new Apex({ id: 16, alias: ALONDRA_COUPLE_ID, name: ALONDRA_COUPLE, blackList: [CONDE_MENOR_ID, BARBARA_ID, ESTEBAN_ID] }),
      new Apex({ id: 3, alias: ANABEL_ID, name: ANABEL, blackList: [CONDE_MENOR_ID, BERTHA_ID, ENRIQUE_ID] }),
      new Apex({ id: 17, alias: ANABEL_COUPLE_ID, name: ANABEL_COUPLE, blackList: [CONDE_MENOR_ID, BERTHA_ID, ENRIQUE_ID] }),

      new Apex({ id: 15, alias: CONDE_MENOR_ID, name: CONDE_MENOR, blackList: [CONDESA_ID, CONDE_MAYOR_ID] }),
      new Apex({ id: 4, alias: BARBARA_ID, name: BARBARA, blackList: [CONDE_MAYOR_ID, ADELA_ID] }),
      new Apex({ id: 12, alias: BARBARA_COUPLE_ID, name: BARBARA_COUPLE, blackList: [CONDE_MAYOR_ID, ADELA_ID] }),
      new Apex({ id: 18, alias: BERTHA_ID, name: BERTHA, blackList: [CONDE_MAYOR_ID, ADELA_ID] }),
      new Apex({ id: 6, alias: BERTHA_COUPLE_ID, name: BERTHA_COUPLE, blackList: [CONDE_MAYOR_ID, ADELA_ID] })
    ];

    // this.graph.apexes.sort((a, b) => sortNumbers(a.id, b.id));
    // console.info('apexes', this.graph.apexes.map(a => ({ alias: a.alias, name: a.name })));

    this.graph.apexes.forEach(apex => {
      this.graph.apexes.forEach(relativeApex => {
        if (apex.id !== relativeApex.id && apex.inBlackList(relativeApex.alias)) {
          this.graph.edges.push(new Edge({ start: apex, end: relativeApex }));
        }
      });
    });

    // this.graph.edges = this.graph.edges.sort((a, b) => sortWords(a.end.name, b.end.name));
    // this.graph.edges = this.graph.edges.sort((a, b) => sortWords(a.start.id, b.start.id));

    this.graph.apexes.forEach(apex => {
      let apexAdded = false;

      if (this.graph.colors.length > 0) {
        this.graph.colors.forEach(color => {
          if (!apexAdded && !color.inApexes(apex) && !color.inApexBlackList(apex) && !color.inSomeBlackList(apex)) {
            console.info(`new Apex in Color: ${color.id} ${color.name}`, apex.id, apex.alias);
            color.apexes.push(apex);
            apexAdded = true;
          }
        });

        if (!apexAdded) {
          console.info(`new Color: ${this.graph.colors.length + 1}`, apex.id, apex.alias);
          this.graph.colors.push(new Color({ id: this.graph.colors.length + 1, name: '', apexes: [apex] }));
        }
      } else {
        console.info('colors = 0', apex.id, apex.alias);
        this.graph.colors.push(new Color({ id: this.graph.colors.length + 1, name: '', apexes: [apex] }));
      }
    });

    this.graph.defineColor();

    console.info('graph', this.graph);

    /*
    IChild = {
    name: 'Eve',
    value: 15,
    type: 'black',
    level: 'yellow',
    */

    this.treeData = {
      name: 'Guests',
      value: 18,
      type: 'black',
      level: 'green',
      children: this.graph.colors.map(color => {
        return {
          name: `Table ${color.id}`,
          value: 12,
          type: 'black',
          level: getColor(color.name),
          children: color.apexes.map(apex => {
            return {
              name: apex.name,
              value: 6,
              type: 'gray',
              level: getColor(color.name)
            }
          })
        }
      })
    } as IChild;


    this.tidyTreeData = {
      name: 'Mesas',
      children: this.graph.colors.map(color => {
        return {
          name: `Mesa ${color.id}`,
          children: color.apexes.map(apex => {
            return {
              name: apex.name,
              value: apex.id
            }
          }),
          value: color.id
        }
      })
    };

    // this.bars.svg.node();

    // d3.select(this.hostElement).select('svg').remove();

    let viewBoxHeight = 100;
    let viewBoxWidth = 200;

    // this.svg = d3.select(this.hostElement).append('svg')
    //   .attr('width', '100%')
    //   .attr('height', '100%')
    //   .attr('viewBox', '0 0 ' + viewBoxWidth + ' ' + viewBoxHeight);



    // this.colorScale = d3.scaleOrdinal(d3.schemeCategory10);

    // this.g = this.svg.append("g").attr("transform", "translate(0,0)");

    // this.x = d3.scaleLinear()
      // .domain([0, this.xmax])
      // .range([30, 170]);

    // this.g.append('g')
    //   .attr('transform', 'translate(0,90)')
    //   .attr("stroke-width", 0.5)
    //   .call(d3.axisBottom(this.x).tickSize(0).tickFormat(<any>''));

    // this.g.append('g')
    //   .attr('transform', 'translate(0,90)')
    //   .style('font-size', '6')
    //   .style("stroke-dasharray", ("1,1"))
    //   .attr("stroke-width", 0.1)
    //   .call(d3.axisBottom(this.x).ticks(10).tickSize(-80));

    //   this.y = d3.scaleLinear()
    //     .domain([0, this.ymax])
    //     .range([90, 10]);
    //   this.g.append('g')
    //     .attr('transform', 'translate(30,0)')
    //     .attr("stroke-width", 0.5)
    //     .call(d3.axisLeft(this.y).tickSize(0).tickFormat(<any>''));
    //   this.g.append('g')
    //     .attr('transform', 'translate(30,0)')
    //     .style("stroke-dasharray", ("1,1"))
    //     .attr("stroke-width", 0.1)
    //     .call(d3.axisLeft(this.y).ticks(4).tickSize(-140))
    //     .style('font-size', '6');

    // if (this.showLabel === 1) {
    //   this.g.append('text')
    //   .attr('text-anchor', 'middle')
    //   .attr('transform', 'translate(10,50) rotate(-90)')
    //   .style('font-size', 8)
    //   .text('Frequency');
    // }

    // this.area = d3.area()
    //   .x((datum: any) => this.x(d3.mean([datum.x1, datum.x2])))
    //   .y0(this.y(0))
    //   .y1((datum: any) => this.y(datum.length));


    // this.histogram = d3.histogram()
    //   .value((datum) => datum)
    //   .domain([0, this.xmax])
    //   .thresholds(this.x.ticks(this.hticks));

    // this.data = [15,30,45,60,75];

    // this.bins = [];
    // this.data.forEach((row) => {
    //   this.bins.push(this.histogram(row))
    // });

    // this.paths = [];
    // this.bins.forEach((row, index) => {
    //   this.paths.push(this.g.append('path')
    //     .datum(row)
    //     .attr('fill', this.colorScale('' + index))
    //     .attr("stroke-width", 0.1)
    //     .attr('opacity', 0.5)
    //     .attr('d', (datum: any) => this.area(datum))
    //   );
    // });


    // this.bars.draw(TECNOLOGIES);
    // this.svg.nativeElement = this.bars.svg.node();
  }

  mapColorApex = (index: number): string[] => {
    return this.graph.colors[index].apexes.map(a => a.name);
  }

}
