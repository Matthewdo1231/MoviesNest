export function mergeSearchResult(series,movies){
    const result = [];
    for (let i = 0; i < Math.max(series.length, movies.length); i++) {
     if (i < series.length) result.push(series[i]);
     if (i < movies.length) result.push(movies[i]);
    }
    return result
}