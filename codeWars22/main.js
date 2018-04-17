find_the_ball=function(start,swaps){
    for(i in swaps){
        var p = swaps[i].indexOf(start);
        if(p>=0) start = !!p? swaps[i][0] : swaps[i][1];
    }
    return start;
}
