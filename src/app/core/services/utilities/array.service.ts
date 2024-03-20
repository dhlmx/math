export const hasSameElements = (serie: string[], elements: string[]): boolean => {
  let sameElements = serie.length === elements.length;

  if (sameElements) {
    elements.forEach(element => {
      if (!serie.includes(element)) {
        sameElements = false;
      }
    });
  }

  return sameElements;
},

someHasSameElements = (series: string[][], elements: string[]): boolean => {
  return series.some(serie => hasSameElements(serie, elements));
},

transformToMultipleArray = (elements: string[]): string[][] => {
  return elements.map(element => [element]);
};
