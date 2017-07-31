interface HeatmapData {
  x: number;
  y: number;
}

interface State {
  heatmapDataOrdered: HeatmapData[];
  heatmapDataPlain: HeatmapData[];
  heatmapDataTricky: HeatmapData[];
  heatmapDataPure: HeatmapData[];
}

const AppController = {
  RUNS: 100,
  SIZE: 10,
  MAX: 45000,
  getOrdered: (n: number): number[] => Array.from(new Array(n).keys()),
  getPermutationPlain: (n: number): number[] => {
    const standard = Array.from(new Array(n).keys());
    const result = [];
    for (let i = 0; i < n; i++) {
      result.push(...standard.splice(Math.random() * (n - i), 1));
    }
    return result;
  },

  getPermutationTricky: (n: number): number[] => {
    const result = Array.from(new Array(n).keys());
    result.sort(() => Math.random() - 0.5);
    return result;
  },

  getRandomNumbersPure: (n: number): number[] => {
    const result = Array.from(new Array(n).keys());
    return result.map(() => Math.floor(Math.random() * n));
  },

  getHeatmapData: (size: number, runs: number, getPermutation: Function): HeatmapData[] => {
    const result = new Array();
    for (let i = 0; i < runs; i++) {
      const permutation = getPermutation(size * size);
      permutation.forEach((value: number, index: number) => {
        for (let j = value; j--; ) {
          result.push({
            x: Math.floor(index / size) * 10,
            y: (index % size) * 10,
          });
        }
      });
    }
    return result;
  },

  getState: (): State => {
    const getHeatmapData = (getPermutation: Function): HeatmapData[] => AppController.getHeatmapData(
      AppController.SIZE,
      AppController.RUNS,
      getPermutation
    );
    return {
      heatmapDataOrdered: getHeatmapData(AppController.getOrdered),
      heatmapDataPlain: getHeatmapData(AppController.getPermutationPlain),
      heatmapDataTricky: getHeatmapData(AppController.getPermutationTricky),
      heatmapDataPure: getHeatmapData(AppController.getRandomNumbersPure),
    };
  },
};

export default AppController;