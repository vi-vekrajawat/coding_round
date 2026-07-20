var longestValidParentheses = function(s) {
    let left = 0, right = 0, maxLength = 0;
    for (let i = 0; i < s.length; i++) {
        if (s[i] === '(') left++; else right++;
        if (left === right) maxLength = Math.max(maxLength, 2 * right);
        else if (right > left) { left = 0; right = 0; }
    }
    left = 0; right = 0;
    for (let i = s.length - 1; i >= 0; i--) {
        if (s[i] === '(') left++; else right++;
        if (left === right) maxLength = Math.max(maxLength, 2 * left);
        else if (left > right) { left = 0; right = 0; }
    }
    return maxLength;
};

// Test examples
console.log("Example 1:", longestValidParentheses("(()"));    // Output: 2
console.log("Example 2:", longestValidParentheses(")()())")); // Output: 4
console.log("Example 3:", longestValidParentheses(""));       // Output: 0
