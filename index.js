function freeWalk(steps){
    var moves = steps.split("");
    var steps = 0, max = 0, positive = "";
    moves.forEach(element => {

        if(steps == 0) positive = element;
        if(positive == element)
            steps ++;
        else
            steps --;
        if(steps > max) max = steps;
    });
    return max;
}

//Should return 3
console.log(freeWalk("AAACACA"));
//Should return 4
console.log(freeWalk("AAACACACCCACCCCC"));
