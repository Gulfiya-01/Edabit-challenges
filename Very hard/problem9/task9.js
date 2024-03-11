function depth(arr) {
    return Array.isArray(arr) ? 1 + Math.max(0, ...arr.map(depth)) : 0;
 }

export default depth;