//{ Driver Code Starts
// Initial Template for javascript

'use strict';

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', inputStdin => { inputString += inputStdin; });

process.stdin.on('end', _ => {
    inputString =
        inputString.trim().split('\n').map(string => { return string.trim(); });

    main();
});

function readLine() { return inputString[currentLine++]; }

function main() {
    let t = parseInt(readLine());
    let i = 0;
    for (; i < t; i++) {
        let R = parseInt(readLine());
        let C = parseInt(readLine());
        let matrix = new Array(R);
        for (let j = 0; j < R; j++) {
            let row = readLine().trim().split(" ").map((x) => parseInt(x));
            matrix[j] = new Array(C);
            for (let y = 0; y < C; y++) {
                matrix[j][y] = row[y];
            }
        }
        let obj = new Solution();
        let res = obj.median(matrix);
        console.log(res);

        console.log("~");
    }
}
// } Driver Code Ends


// User function Template for javascript
/**
 * @param {number[][]} matrix
 * @param {number} R
 * @param {number} C
 * @returns {number}
 */

class Solution {
    // Function to find median of the matrix.
    median(mat) {
        // your code here
        let arr = mat[0];
        for(let i=1;i<mat.length;i++){
            const arr2 = mat[i];
            if(arr[arr.length-1] < arr2[0]){
                arr = [...arr,...arr2];
            }else if(arr[0] >  arr2[arr2.length-1]){
                arr = [...arr2,...arr];
            }else{
                arr = this.mergeSortedArray(arr,arr2);
            }
        }
        const len = Math.floor(arr.length/2);
        return arr[len];
    }
    
    mergeSortedArray(arr1,arr2){
        let i=0,j=0,m=arr1.length,n=arr2.length;
        const result = [];
        while(i<m && j<n){
            if(arr1[i] < arr2[j]){
                result.push(arr1[i++])
            }else{
                result.push(arr2[j++])
            }
        }
        while(i<m){
            result.push(arr1[i++])
        }
        
        while(j<n){
            result.push(arr2[j++])
        }
        return result;
    }
}