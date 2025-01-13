class Solution(object):
    def longestCommonPrefix(self, strs):
        """
        :type strs: List[str]
        :rtype: str
        """
        if not strs:
            return ""

        # Start with the first string as the initial prefix
        prefix = strs[0]

        # Compare the prefix with each string
        for s in strs[1:]:
            # Compare character by character
            i = 0
            while i < len(prefix) and i < len(s) and prefix[i] == s[i]:
                i += 1
            
            # Reduce prefix to the common part
            prefix = prefix[:i]

            # If the prefix becomes empty, return an empty string
            if not prefix:
                return ""

        return prefix
