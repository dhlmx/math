import { Component, OnInit } from '@angular/core';
import { Combination } from 'src/app/core/models/combination';
import { CombinationByGroup } from 'src/app/core/models/combination-by-group';
import { CombinationsGroup } from 'src/app/core/models/combinations-group';
import { CombinationsGroups } from 'src/app/core/models/combinationsGroups';
import { Variation } from 'src/app/core/models/variation';
import { AppService } from 'src/app/core/services/utilities/app.service';

@Component({
  selector: 'app-combinations',
  templateUrl: './combinations.component.html',
  styleUrls: ['./combinations.component.scss']
})
export class CombinationsComponent implements OnInit {

  // Matemáticas naturales
  wordsOfThreeFromFourChars = new Variation();
  combinationOfThreeFromTenDigits = new Variation();
  variationOfPlates = new Variation();
  combinationOfPresidenAndVicepresidentFromFourPersons = new Combination();
  combinationOfFiveChairs = new Combination();
  combinationsOfThreeDigits = new Combination();
  selectionOfTwoFromFourPersons = new Combination();
  permutationsOfFourDigits = new Combination();

  // Algebra Superior
  variationOfTwoOfFourChars = new Combination();
  combinationOfTwoOfFourChars = new Combination();
  variationOfThreeOfFourChars = new Combination();

  combinationOfTwoOfTenVapors = new Combination();
  combinationOfThreeOfFourHotels = new Combination();
  combinationOfFourFromSixChairs = new Combination();
  combinationOfSixFromNineDigits = new Combination();

  groupsOfOneAndFourFromTwelveBooks = new CombinationByGroup();
  groupsOfFiveFromElevenBooks = new CombinationByGroup();

  combinationOfElevenFromFourteenMens = new Combination();

  groupsOfFiveFromFiveteenMens = new CombinationByGroup();

  combinationOfBritishesAndAmericans = new CombinationsGroup();
  combinationOfBritishesAndAmericansII = new CombinationsGroups();

  constructor(public appService: AppService) {
  }

  /*

  permutationOfTwoOfFourChars = new Permutation(['A', 'B', 'C', 'D'], 2, true);

  permutationOfTwoOfOctalDigits = new Permutation(['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H'], 2, true);

  permutationOfSixOfOctalDigits = new Permutation(['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H'], 6, true);

  permutationOfSixOfSixChars = new Permutation(['A', 'B', 'C', 'D', 'E', 'F'], 6, true);

  permutationOfOneOfSevenChars = new Permutation(['A', 'B', 'C', 'D', 'E', 'F', 'G'], 1, true);

  permutationOfThreeOfFiveChars = new Permutation(['A', 'B', 'C', 'D', 'E'], 3, true);

  permutationOfThreeOfTwelveChars = new Permutation(['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L'], 3, true);

  permutationOfThreeOfNineChars = new Permutation(['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I'], 3, true);

  permutationOfThreeOfSixChars = new Permutation(['A', 'B', 'C', 'D', 'E', 'F'], 3, true);

  permutationOfThreeOfThreeChars = new Permutation(['A', 'B', 'C'], 3, true);

  permutationOfFourOfTwelveChars = new Permutation(['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L'], 4, false);

  permutationOfOneAndFours = new Permutation(['11', '12', '13', '41', '42'], 3, true);

  permutationsOfTwelveChars = new PermutationsGroup(
    [3, 3, 3, 3],
    ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L'],
    true
  );

  */

  ngOnInit(): void {
    this.appService.process.start('Loading...');

    // Matemáticas naturales
    this.wordsOfThreeFromFourChars = new Variation([
      ['a', 'b'], ['a', 'b'], ['a', 'b']
    ]);

    this.combinationOfThreeFromTenDigits = new Variation([
      ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'],
      ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'],
      ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9']
    ]);

    this.variationOfPlates = new Variation([
      ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'Ñ', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'],
      ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'Ñ', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'],
      // ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'Ñ', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'],
      // ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0'],
      ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0']
    ]);

    this.combinationOfPresidenAndVicepresidentFromFourPersons = new Combination(
      { elements: ['A', 'B', 'C', 'D'], length: 2, excludeArrangements: false }
    );

    this.combinationOfFiveChairs = new Combination(
      { elements: ['S1', 'S2', 'S3', 'S4', 'S5'], length: 5, excludeArrangements: false }
    );

    this.combinationsOfThreeDigits = new Combination(
      { elements: ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'], length: 3, excludeArrangements: false }
    );

    this.selectionOfTwoFromFourPersons = new Combination(
      { elements: ['A', 'B', 'C', 'D'], length: 2, excludeArrangements: true }
    );

    this.permutationsOfFourDigits = new Combination(
      { elements: ['1', '2', '3', '4'], length: 4, excludeArrangements: false }
    );

    // Algebra Superior
    this.variationOfTwoOfFourChars = new Combination(
      { elements: ['a', 'b', 'c', 'd'], length: 2, excludeArrangements: false }
    );

    this.combinationOfTwoOfFourChars = new Combination(
      { elements: ['a', 'b', 'c', 'd'], length: 2, excludeArrangements: true }
    );

    this.variationOfThreeOfFourChars = new Combination(
      { elements: ['a', 'b', 'c', 'd'], length: 3, excludeArrangements: false }
    );

    this.combinationOfTwoOfTenVapors = new Combination(
      { elements: ['V01', 'V02', 'V03', 'V04', 'V05', 'V06', 'V07', 'V08', 'V09', 'V10'], length: 2, excludeArrangements: false }
    );

    this.combinationOfThreeOfFourHotels = new Combination(
      { elements: ['H01', 'H02', 'H03', 'H04'], length: 4, excludeArrangements: true }
    );

    this.combinationOfFourFromSixChairs = new Combination(
      { elements: ['S01', 'S02', 'S03', 'S04', 'S05', 'S06'], length: 4, excludeArrangements: false }
    );

    this.combinationOfSixFromNineDigits = new Combination(
      { elements: ['1', '2', '3', '4', '5', '6', '7', '8', '9'], length: 6, excludeArrangements: false }
    );

    this.groupsOfOneAndFourFromTwelveBooks = new CombinationByGroup({
      elements: ['B01', 'B02', 'B03', 'B04', 'B05', 'B06', 'B07', 'B08', 'B09', 'B10', 'B11', 'B12'],
      groups: [1, 4],
      excludeArrangements: true
    });

    this.groupsOfFiveFromElevenBooks = new CombinationByGroup({
      elements: ['B01', 'B02', 'B03', 'B04', 'B05', 'B06', 'B07', 'B08', 'B09', 'B10', 'B11'],
      groups: [5],
      excludeArrangements: true
    });

    this.combinationOfElevenFromFourteenMens = new Combination({
      elements: ['H01', 'H02', 'H03', 'H04', 'H05', 'H06', 'H07', 'H08', 'H09', 'H10', 'H11', 'H12', 'H13', 'H14'],
      length: 3,
      excludeArrangements: true
    });

    this.groupsOfFiveFromFiveteenMens = new CombinationByGroup({
      elements: ['S01', 'S02', 'S03', 'S04', 'S05', 'S06', 'S07', 'S08', 'S09', 'S10', 'S11', 'S12', 'S13', 'S14', 'S15'],
      groups: [5, 5, 5],
      excludeArrangements: true
    });

    this.combinationOfBritishesAndAmericans = new CombinationsGroup([
      { elements: ['BR1', 'BR2', 'BR3', 'BR4', 'BR5', 'BR6', 'BR7'], length: 4, excludeArrangements: true },
      { elements: ['US1', 'US2', 'US3', 'US4'], length: 2, excludeArrangements: true }
    ]);

    this.combinationOfBritishesAndAmericansII = new CombinationsGroups([
      [
        { elements: ['US1', 'US2', 'US3', 'US4'], length: 2, excludeArrangements: true },
        { elements: ['BR1', 'BR2', 'BR3', 'BR4', 'BR5', 'BR6', 'BR7'], length: 4, excludeArrangements: true }
      ],
      [
        { elements: ['US1', 'US2', 'US3', 'US4'], length: 3, excludeArrangements: true },
        { elements: ['BR1', 'BR2', 'BR3', 'BR4', 'BR5', 'BR6', 'BR7'], length: 3, excludeArrangements: true }
      ],
      [
        { elements: ['US1', 'US2', 'US3', 'US4'], length: 4, excludeArrangements: true },
        { elements: ['BR1', 'BR2', 'BR3', 'BR4', 'BR5', 'BR6', 'BR7'], length: 2, excludeArrangements: true }
      ]
    ]);

    this.appService.process.stop();
  }
}
