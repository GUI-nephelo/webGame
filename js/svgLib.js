function makeSVG(tag, attrs){
    var el= document.createElementNS('http://www.w3.org/2000/svg', tag);
    for (var k in attrs) 
        el.setAttribute(k, attrs[k]);
    return el;
}         
$.fn.transform = function(parm){
    p="";
    for(var i in parm){
        p+=i+"("+parm[i].join()+") "
    }
    $(this).attr("transform",p)
}
