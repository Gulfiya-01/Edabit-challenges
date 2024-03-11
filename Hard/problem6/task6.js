function mostExpensive(obj) {
    const values =	Object.values(obj);
    const keys = Object.keys(obj)
    const max=Math.max(...values);
    
    const index = values.indexOf(max)
    
    return `The most expensive one is the ${keys[index]}`
    
    }
export default mostExpensive;