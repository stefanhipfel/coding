
a = [-2,-3,4,-1,-2,1,5,2]

t = a.reduce(function(a, b, i, v){
 if(i === v.length) {
  return Math.max(Math.max(a + b, b), a)
}
 return Math.max(a + b, b)
}, 0)

console.log(t)
