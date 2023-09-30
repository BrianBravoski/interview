// Group he anagrams in the array to different arrays

var groupAnagrams = function (strs){

let ordered = strs.map((str) => 
str.split("").sort().join(""));

let map = {};


for(let i=0; i<strs.length; i++){
    if(!map[ordered[i]]){
        map[ordered[i]]=[strs[i]];
    }else {
        map[ordered[i]].push(strs[i]);
    }
}

return Object.values(map);

};


//Test Case 1

let input = [
    "eat", "tea", "tan", "ate", "nat", "bat"
];
let output = groupAnagrams(input);
console.log("Output: ",output);