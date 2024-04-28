export enum Meta {
    initial='initial',
    loading = 'loading',
    error = 'error',
    success = 'success'
}
// const maxProfit = function (prices) {
//     let delta;
//     let maxProfit = 0;
//     for (let i = 0; i < prices.length; i++){
//         for (let j = i + 1; j < prices.length; j++){
//             delta = prices[j] - prices[i];
//             if (delta > 0)
//                 maxProfit = Math.max(maxProfit, delta);
//         }
//
//
//     }
//     return maxProfit;
//
// };
//
// console.log(maxProfit( [7, 1, 5, 3, 6, 4]))
