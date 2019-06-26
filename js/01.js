
// d3.selectAll("p").style("color",function(){
//     return "hsl(" + Math.random() * 360 + ",100%,50%)";
// })

// d3.selectAll("p").style("color", function(d, i) {
//     console.log(d,i)
//     return i % 2 ? "#fff" : "#eee";
//
// });

// d3.selectAll("p")
//     .data([4, 8, 15, 16, 23, 42])// 绑定的数据会在其它引用中作为第一个参数引入
//     .style("font-size", function(d) { return d + "px"; });

// Update…
var p = d3.select("body")
    .selectAll("p")
    .data([4, 8, 15, 16, 23, 42])
    .text(function(d) { return d; });

// Enter…
p.enter().append("p")
    .text(function(d) { return d; });

// Exit…
p.exit().remove("p");

// d3.select("body").transition()
//     .style("background-color", "black");

