/* 
Problem Link: https://leetcode.com/problems/palindrome-number/

Given an integer x, return true if x is palindrome integer.
An integer is a palindrome when it reads the same backward as forward.
For example, 121 is a palindrome while 123 is not.
 
Example 1:

Input: x = 121
Output: true
Explanation: 121 reads as 121 from left to right and from right to left.
Example 2:

Input: x = -121
Output: false
Explanation: From left to right, it reads -121. From right to left, it becomes 121-. Therefore it is not a palindrome.
Example 3:

Input: x = 10
Output: false
Explanation: Reads 01 from right to left. Therefore it is not a palindrome.
 

Constraints:

-231 <= x <= 231 - 1
------------------------------------------------------------------------------------------
Solution:
*/
//Solution 1:

var isPalindrome = function(x) {
    var string =x.toString() ;
    var arr = string.split('');
    var count = arr.length-1;
    var flag= true;
    for(var i=0; i<=(arr.length+1)/2; i++) {
        
        if(arr[i]!=arr[count]) {
            flag=false;
            break;
        }
        count--;
    }
    if(flag) {
        return true;
    }else{
        return false;
    }
};


//Solution 2:

var isPalindrome = function (x) {
    if (x < 0 || (x % 10 == 0 && x != 0)) {
        return false;
    }
    var revertedNumber = 0;
    while (x > revertedNumber) {
        revertedNumber = revertedNumber * 10 + x % 10;
        x = Math.trunc(x / 10);
    }
    return x == revertedNumber || x == Math.trunc(revertedNumber / 10);
};











