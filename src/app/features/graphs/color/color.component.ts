import { Component, OnInit } from '@angular/core';
import { GuestCodeEnum, GuestEnum } from '../../../core/enums/guest.enum';
import { Integer } from '../../../core/models/integer';
import { Apex } from '../../../core/models/apex';
import { Color } from '../../../core/models/color';
import { Edge } from '../../../core/models/edge';
import { Graph } from '../../../core/models/graph';
import { sortNumbers, sortWords, toReverse } from '../../../core/services/utilities/sort.service';
import { Series } from 'src/app/core/models/series';
import { expansion } from 'src/app/core/services/utilities/numeric';

const ADELA = 'Adela',
  ADELA_ID = 'Ad',
  ADELA_COUPLE = '(Adela)',
  ADELA_COUPLE_ID = '(Ad)',
  ALONDRA = 'Alondra',
  ALONDRA_ID = 'Al',
  ALONDRA_COUPLE = '(Alondra)',
  ALONDRA_COUPLE_ID = '(Al)',
  ANABEL = 'Anabel',
  ANABEL_ID = 'An',
  ANABEL_COUPLE = '(Anabel)',
  ANABEL_COUPLE_ID = '(An)',
  BARBARA = 'Bárbara',
  BARBARA_ID = 'Ba',
  BARBARA_COUPLE = '(Bárbara)',
  BARBARA_COUPLE_ID = '(Ba)',
  BERTHA = 'Bertha',
  BERTHA_ID = 'Be',
  BERTHA_COUPLE = '(Bertha)',
  BERTHA_COUPLE_ID = '(Be)',
  CONDESA = 'Condesa',
  CONDESA_ID = 'Co',
  CONDE_MAYOR = 'Conde Mayor',
  CONDE_MAYOR_ID = 'CMay',
  CONDE_MENOR = 'Conde Menor',
  CONDE_MENOR_ID = 'CMen',
  DUQUESA = 'Duquesa',
  DUQUESA_ID = 'Duq',
  ENRIQUE = 'Enrique',
  ENRIQUE_ID = 'En',
  ENRIQUE_COUPLE = '(Enrique)',
  ENRIQUE_COUPLE_ID = '(En)',
  ESTEBAN = 'Esteban',
  ESTEBAN_ID = 'Es',
  ESTEBAN_COUPLE = '(Esteban)',
  ESTEBAN_COUPLE_ID = '(Es)',
  NODES = [
    {
      id: '1',
      label: 'Node A'
    },
    {
      id: '2',
      label: 'Node B'
    },
    {
      id: '3',
      label: 'Node C'
    },
    {
      id: '4',
      label: 'Node D'
    },
    {
      id: '5',
      label: 'Node E'
    },
    {
      id: '6',
      label: 'Node F'
    }
  ],
  EDGES = [
    {
      id: 'a',
      source: '1',
      target: '2'
    },
    {
      id: 'b',
      source: '1',
      target: '3'
    },
    {
      id: 'c',
      source: '3',
      target: '4'
    },
    {
      id: 'd',
      source: '3',
      target: '5'
    },
    {
      id: 'e',
      source: '4',
      target: '5'
    },
    {
      id: 'f',
      source: '2',
      target: '6'
    }
  ],
  CLUSTERS = [
    {
      id: 'cluster0',
      label: 'Cluster node',
      childNodeIds: ['2', '3']
    }
  ];


@Component({
  selector: 'app-color',
  templateUrl: './color.component.html',
  styleUrls: ['./color.component.scss']
})
export class ColorComponent implements OnInit {

  graph = new Graph();

  get edges(): any[] {
    return EDGES;
  }

  get nodes(): any[] {
    return NODES;
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
  }

  mapColorApex = (index: number): string[] => {
    return this.graph.colors[index].apexes.map(a => a.name);
  }

  onNodeSelect = (x: any): void => {

  }
}
