function generateSyntheticData(numObjects, numRankings) {
    const rankedLists = [];
    for (let i = 0; i < numRankings; i++) {
        const list = [];
        for (let j = 0; j < numObjects; j++) {
            list.push({
                id: j,
                score: Math.random()
            });
        }
        list.sort((a, b) => b.score - a.score);
        rankedLists.push(list);
    }
    return rankedLists;
}

function thresholdAlgorithm(lists, k) {
    const scores = new Map();
    const seen = new Set();
    let threshold;
    let currentTopK;
    
    while (true) {
        threshold = 0;
        
        // Process next items and update threshold
        for (let i = 0; i < lists.length; i++) {
            const currentPos = Math.min(seen.size, lists[i].length - 1);
            if (currentPos >= 0) {
                threshold += lists[i][currentPos].score;
                
                // Add unseen items to scores
                if (!seen.has(lists[i][currentPos].id)) {
                    seen.add(lists[i][currentPos].id);
                    let totalScore = 0;
                    for (const list of lists) {
                        const item = list.find(x => x.id === lists[i][currentPos].id);
                        totalScore += item.score;
                    }
                    scores.set(lists[i][currentPos].id, totalScore);
                }
            }
        }
        
        // Get current top-k
        currentTopK = Array.from(scores.entries())
            .sort((a, b) => b[1] - a[1])
            .slice(0, k);
            
        // Check stopping condition
        if (currentTopK.length === k && 
            (currentTopK[k-1][1] >= threshold || seen.size === lists[0].length)) {
            return currentTopK;
        }
        
        // Safety check to prevent infinite loop
        if (seen.size === lists[0].length) {
            return currentTopK.slice(0, k);
        }
    }
}