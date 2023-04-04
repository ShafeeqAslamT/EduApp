import { NestedTreeControl } from '@angular/cdk/tree';
import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { MatTreeNestedDataSource } from '@angular/material/tree';

@Component({
  selector: 'app-catalogs',
  templateUrl: './catalogs.component.html',
  styleUrls: ['./catalogs.component.scss']
})
export class CatalogsComponent implements OnInit, AfterViewInit {
  treeControl = new NestedTreeControl<CatalogNode>(node => node.children);
  dataSource = new MatTreeNestedDataSource<CatalogNode>();
  selectedNode!: CatalogNode;

  constructor() {
    this.dataSource.data = TREE_DATA;
  }
  ngOnInit(): void {
    this.onSelectNode(TREE_DATA[0]);
  }
  hasChild = (_: number, node: CatalogNode) => !!node.children && node.children.length > 0;
  onSelectNode(node: CatalogNode) {
    // console.log(node);
    this.selectedNode = node;
    var data = [];
    if (node.children) {
      var ix = 1;
      for (let i of node.children) {
        data.push({ position: ix, name: i.name, weight: Math.random(), symbol: i.description! });
        ix++;
      }
    }
    this.dataSource_tbl = new MatTableDataSource<PeriodicElement>(data);
  }
  displayedColumns: string[] = ['position', 'name', 'weight', 'symbol'];
  dataSource_tbl = new MatTableDataSource<PeriodicElement>(ELEMENT_DATA);

  @ViewChild(MatPaginator) paginator!: MatPaginator;

  ngAfterViewInit() {
    this.dataSource_tbl.paginator = this.paginator;
  }
}
interface CatalogNode {
  name: string;
  description?: string;
  children?: CatalogNode[];
}
const TREE_DATA: CatalogNode[] = [
  {
    name: 'English Club',
    description: 'English Club',
    children: [
      {
        name: 'Grammar', description: 'Grammar', children: [
          {
            name: 'Nouns', description: 'Nouns', children: [
              { name: 'Common Nouns', description: 'Common Nouns' },
              { name: 'Proper Nouns', description: 'Proper Nouns' },
              { name: 'Collective Nouns', description: 'Collective Nouns' },
              { name: 'Compound Nouns', description: 'Compound Nouns' },
              { name: 'Abstract Nouns', description: 'Abstract Nouns' },
              { name: 'Concrete Nouns', description: 'Concrete Nouns' },
              { name: 'Singular Nouns', description: 'Singular Nouns' },
              { name: 'Plural Nouns', description: 'Plural Nouns' },
              { name: 'Countable Nouns', description: 'Countable Nouns' },
              { name: 'Uncountable Nouns', description: 'Uncountable Nouns' },
              { name: 'Mass Nouns', description: 'Mass Nouns' },
              { name: 'Compound Nouns', description: 'Compound Nouns' }
            ]
          },
          { name: 'Pronouns', description: 'Pronouns' },
          { name: 'Adjectives', description: 'Adjectives' },
          { name: 'Verbs', description: 'Verbs' },
          { name: 'Adverbs', description: 'Adverbs' },
          { name: 'Prepositions', description: 'Prepositions' },
          { name: 'Conjunctions', description: 'Conjunctions' },
          { name: 'Interjections', description: 'Interjections' },
        ]
      },
      { name: 'Vocabulary', description: 'Vocabulary' },
      { name: 'Reading', description: 'Reading' },
      { name: 'Writing', description: 'Writing' },
      { name: 'Listening', description: 'Listening' },
      { name: 'Speaking', description: 'Speaking' },
    ]
  }, {
    name: 'Math Club',
    description: 'Math Club',
    children: [
      { name: 'Algebra', description: 'Algebra' },
      { name: 'Geometry', description: 'Geometry' },
      { name: 'Trigonometry', description: 'Trigonometry' },
      { name: 'Calculus', description: 'Calculus' },
      { name: 'Statistics', description: 'Statistics' },
      { name: 'Probability', description: 'Probability' },
    ]
  }, {
    name: 'Science Club',
    description: 'Science Club',
    children: [
      { name: 'Biology', description: 'Biology' },
      { name: 'Chemistry', description: 'Chemistry' },
      { name: 'Physics', description: 'Physics' },
      { name: 'Astronomy', description: 'Astronomy' },
      { name: 'Geology', description: 'Geology' },
      { name: 'Oceanography', description: 'Oceanography' },
    ]
  }, {
    name: 'Art Club',
    description: 'Art Club',
    children: [
      { name: 'Drawing', description: 'Drawing' },
      { name: 'Painting', description: 'Painting' },
      { name: 'Sculpture', description: 'Sculpture' },
      { name: 'Photography', description: 'Photography' },
      { name: 'Architecture', description: 'Architecture' },
      { name: 'Music', description: 'Music' },
    ]
  }];
interface PeriodicElement {
  name: string;
  position: number;
  weight: number;
  symbol: string;
}
const ELEMENT_DATA: PeriodicElement[] = [
  { position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H' },
  { position: 2, name: 'Helium', weight: 4.0026, symbol: 'He' },
  { position: 3, name: 'Lithium', weight: 6.941, symbol: 'Li' },
  { position: 4, name: 'Beryllium', weight: 9.0122, symbol: 'Be' },
  { position: 5, name: 'Boron', weight: 10.811, symbol: 'B' },
  { position: 6, name: 'Carbon', weight: 12.0107, symbol: 'C' },
  { position: 7, name: 'Nitrogen', weight: 14.0067, symbol: 'N' },
  { position: 8, name: 'Oxygen', weight: 15.9994, symbol: 'O' },
  { position: 9, name: 'Fluorine', weight: 18.9984, symbol: 'F' },
  { position: 10, name: 'Neon', weight: 20.1797, symbol: 'Ne' },
  { position: 11, name: 'Sodium', weight: 22.9897, symbol: 'Na' },
  { position: 12, name: 'Magnesium', weight: 24.305, symbol: 'Mg' },
  { position: 13, name: 'Aluminum', weight: 26.9815, symbol: 'Al' },
  { position: 14, name: 'Silicon', weight: 28.0855, symbol: 'Si' },
  { position: 15, name: 'Phosphorus', weight: 30.9738, symbol: 'P' },
  { position: 16, name: 'Sulfur', weight: 32.065, symbol: 'S' },
  { position: 17, name: 'Chlorine', weight: 35.453, symbol: 'Cl' },
  { position: 18, name: 'Argon', weight: 39.948, symbol: 'Ar' },
  { position: 19, name: 'Potassium', weight: 39.0983, symbol: 'K' },
  { position: 20, name: 'Calcium', weight: 40.078, symbol: 'Ca' },
];
