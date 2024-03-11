function nearestChapter(chapt, page) {
        const entries = Object.entries(chapt);
        const closestEntry = entries.reduce(function (prev, [chapterName, currPage]) {
          const prevDistance = Math.abs(prev[1] - page);
          const currDistance = Math.abs(currPage - page);
      
          if (currDistance < prevDistance || (currDistance === prevDistance && currPage > prev[1])) {
            return [chapterName, currPage];
          } else {
            return prev;
          }
        });
      
        return closestEntry[0];
      }
      

export default nearestChapter;