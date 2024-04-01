import { ElementRef } from '@angular/core';
import * as d3 from 'd3';

export class Bar {

  hostElement: any;
  svg: any;
  g: any;

  width = 0;
  height = 0;
  margin = 0;
  padding = 0;

  x: d3.ScaleBand<string> = d3.scaleBand();
  y: d3.ScaleLinear<number, number, never> = d3.scaleLinear();

  constructor(width: number, height: number, margin: number, padding: number) {
    this.width = width;
    this.height = height;
    this.margin = margin;
    this.padding = padding;

    this.svg = d3.select('#svg').append('svg')
      .attr('width', this.width + this.margin * 2)
      .attr('height', this.height + this.margin * 2)
      .append('g')
      .attr('transform', `translate(${this.margin}, ${this.margin})`);
  }

  draw = (data: any[]): void => {
    // Create the X-axis band scale
    this.x.range([0, this.width]).domain(data.map(d => d.Framework)).padding(this.padding);

    // Create the Y-axis band scale
    this.y.range([this.height, 0]).domain([0, 200000]);

    // Draw the X-axis on the DOM
    this.svg.append('g')
      .attr('transform', 'translate(0,' + this.height + ')')
      .call(d3.axisBottom(this.x))
      .selectAll('text')
      .attr('transform', 'translate(-10,0)rotate(-45)')
      .style('text-anchor', 'end');

    // Draw the Y-axis on the DOM
    this.svg.append('g').call(d3.axisLeft(this.y));

    // Create and fill the bars
    this.svg.selectAll('bars')
      .data(data)
      .enter()
      .append('rect')
      .attr('x', (d: any) => this.x(d.Framework))
      .attr('y', (d: any) => this.y(d.Stars))
      .attr('width', this.x.bandwidth())
      .attr('height', (d: any) => this.height - this.y(d.Stars))
      .attr('fill', '#d04a35');
  }
}
