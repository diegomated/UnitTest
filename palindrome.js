
function isPalindrome(text){
    return text.toLowerCase()==text.split('').reverse().join('').toLowerCase();
}

function isAnagram(text1, text2){
    return text1.split('').sort().join('').toLowerCase() === text2.split('').sort().join('').toLowerCase();
}

module.exports = {isPalindrome, isAnagram};

