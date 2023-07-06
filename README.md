
# Merge Strings Alternately

You are given two strings **`word1`** and **`word2`**. Merge the strings by adding letters in alternating order, starting with word1. If a string is longer than the other, append the additional letters onto the end of the merged string.

Return the merged string.

##
### Running Tests

#### ***Example 1:***

*Input:* `word1 = "abc", word2 = "pqr"`

*Output:* `"apbqcr"`

*Explanation:* `The merged string will be merged  as so: a p b q c r`


#### ***Example 2:***

*Input:* `word1 = "ab", word2 = "pqrs"`

*Output:* `"apbqrs"`

*Explanation:* `As word2 is longer, "rs" is appended to the end.`

#### ***Example 3:***

*Input:* `word1 = "abcd", word2 = "pq"`

*Output:* `"apbqcd"`

*Explanation:* `As word1 is longer, "cd" is appended to the end.`