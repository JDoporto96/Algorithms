//Find the smallest substirng in S that contains all the characters in the string T. 
//T is a string of unique characters.

function getSmallestSubstring(s, t) {
    if (t.length > s.length) {
        return false;
    }

    const cnt = {};
    let res = [];
    let len = t.length;
    let min = Infinity;

    for (let char of t) {
      cnt[char] = (cnt[char] || 0) + 1;
    }
    for (let r = 0, l = 0; r < s.length; r++) {
      if (cnt[s[r]] > 0) len--;
      cnt[s[r]]--;
      while (!len) {
        if (r - l < min) {
          min = r - l;
          res = [l, r];
        }
        if (cnt[s[l]] >= 0) len++;
        cnt[s[l]]++;
        l++;
      }
    }
    return s.slice(res[0], res[1] + 1);
  };

console.log(getSmallestSubstring("this is a test string for any purpose asr", "asr"))