// Author: Shubham Bhagwansing Rajput
// JS

'use strict';

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', inputStdin => {
    inputString += inputStdin;
});

process.stdin.on('end', _ => {
    inputString = inputString.trim().split('\n').map(string => {
        return string.trim();
    });
    
    main();    
});

function readLine() {

/**
*   Return the second largest number in the array.
*   @param {Number[]} nums - An array of numbers.
*   @return {Number} The second largest number in the array.
**/
function getSecondLargest(nums) {
    let large=0, seclarge=0, smallestdiff=100, diff=0;

    
    for(let i=0;i<nums.length;i++)
    {
        if(nums[i]>large)
        large=nums[i];
    }
    
    for(let i=0;i<nums.length;i++)
    {
        diff=large-nums[i];
            
        if(smallestdiff>diff && diff!=0)
        {
            smallestdiff=diff;
            seclarge=nums[i];
        }
  
    }
    return seclarge;
}


function main() {
    const n = +(readLine());
    const nums = readLine().split(' ').map(Number);
    
    console.log(getSecondLargest(nums));
}
    return inputString[currentLine++];
}


/**
*   Return the second largest number in the array.
*   @param {Number[]} nums - An array of numbers.
*   @return {Number} The second largest number in the array.
**/
function getSecondLargest(nums) {
    let large=0, seclarge=0, smallestdiff=100, diff=0;
    
    for(let i=0;i<nums.length;i++)
    {
        if(nums[i]>large)
        large=nums[i];
    }
    
    for(let i=0;i<nums.length;i++)
    {

        diff=large-nums[i];
            
        if(smallestdiff>diff && diff!=0)
        {

            smallestdiff=diff;
            seclarge=nums[i];
        }
  
    }
    return seclarge;
}
