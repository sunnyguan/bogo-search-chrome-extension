const questions_title_map = {
  "Two Sum": "two-sum",
  "Add Two Numbers": "add-two-numbers",
  "Longest Substring Without Repeating Characters":
    "longest-substring-without-repeating-characters",
  "Median of Two Sorted Arrays": "median-of-two-sorted-arrays",
  "Longest Palindromic Substring": "longest-palindromic-substring",
  "Zigzag Conversion": "zigzag-conversion",
  "Reverse Integer": "reverse-integer",
  "String to Integer (atoi)": "string-to-integer-atoi",
  "Palindrome Number": "palindrome-number",
  "Regular Expression Matching": "regular-expression-matching",
  "Container With Most Water": "container-with-most-water",
  "Integer to Roman": "integer-to-roman",
  "Roman to Integer": "roman-to-integer",
  "Longest Common Prefix": "longest-common-prefix",
  "3Sum": "3sum",
  "3Sum Closest": "3sum-closest",
  "Letter Combinations of a Phone Number":
    "letter-combinations-of-a-phone-number",
  "4Sum": "4sum",
  "Remove Nth Node From End of List": "remove-nth-node-from-end-of-list",
  "Valid Parentheses": "valid-parentheses",
  "Merge Two Sorted Lists": "merge-two-sorted-lists",
  "Generate Parentheses": "generate-parentheses",
  "Merge k Sorted Lists": "merge-k-sorted-lists",
  "Swap Nodes in Pairs": "swap-nodes-in-pairs",
  "Reverse Nodes in k-Group": "reverse-nodes-in-k-group",
  "Remove Duplicates from Sorted Array": "remove-duplicates-from-sorted-array",
  "Remove Element": "remove-element",
  "Find the Index of the First Occurrence in a String":
    "find-the-index-of-the-first-occurrence-in-a-string",
  "Divide Two Integers": "divide-two-integers",
  "Substring with Concatenation of All Words":
    "substring-with-concatenation-of-all-words",
  "Next Permutation": "next-permutation",
  "Longest Valid Parentheses": "longest-valid-parentheses",
  "Search in Rotated Sorted Array": "search-in-rotated-sorted-array",
  "Find First and Last Position of Element in Sorted Array":
    "find-first-and-last-position-of-element-in-sorted-array",
  "Search Insert Position": "search-insert-position",
  "Valid Sudoku": "valid-sudoku",
  "Sudoku Solver": "sudoku-solver",
  "Count and Say": "count-and-say",
  "Combination Sum": "combination-sum",
  "Combination Sum II": "combination-sum-ii",
  "First Missing Positive": "first-missing-positive",
  "Trapping Rain Water": "trapping-rain-water",
  "Multiply Strings": "multiply-strings",
  "Wildcard Matching": "wildcard-matching",
  "Jump Game II": "jump-game-ii",
  Permutations: "permutations",
  "Permutations II": "permutations-ii",
  "Rotate Image": "rotate-image",
  "Group Anagrams": "group-anagrams",
  "Pow(x, n)": "powx-n",
  "N-Queens": "n-queens",
  "N-Queens II": "n-queens-ii",
  "Maximum Subarray": "maximum-subarray",
  "Spiral Matrix": "spiral-matrix",
  "Jump Game": "jump-game",
  "Merge Intervals": "merge-intervals",
  "Insert Interval": "insert-interval",
  "Length of Last Word": "length-of-last-word",
  "Spiral Matrix II": "spiral-matrix-ii",
  "Permutation Sequence": "permutation-sequence",
  "Rotate List": "rotate-list",
  "Unique Paths": "unique-paths",
  "Unique Paths II": "unique-paths-ii",
  "Minimum Path Sum": "minimum-path-sum",
  "Valid Number": "valid-number",
  "Plus One": "plus-one",
  "Add Binary": "add-binary",
  "Text Justification": "text-justification",
  "Sqrt(x)": "sqrtx",
  "Climbing Stairs": "climbing-stairs",
  "Simplify Path": "simplify-path",
  "Edit Distance": "edit-distance",
  "Set Matrix Zeroes": "set-matrix-zeroes",
  "Search a 2D Matrix": "search-a-2d-matrix",
  "Sort Colors": "sort-colors",
  "Minimum Window Substring": "minimum-window-substring",
  Combinations: "combinations",
  Subsets: "subsets",
  "Word Search": "word-search",
  "Remove Duplicates from Sorted Array II":
    "remove-duplicates-from-sorted-array-ii",
  "Search in Rotated Sorted Array II": "search-in-rotated-sorted-array-ii",
  "Remove Duplicates from Sorted List II":
    "remove-duplicates-from-sorted-list-ii",
  "Remove Duplicates from Sorted List": "remove-duplicates-from-sorted-list",
  "Largest Rectangle in Histogram": "largest-rectangle-in-histogram",
  "Maximal Rectangle": "maximal-rectangle",
  "Partition List": "partition-list",
  "Scramble String": "scramble-string",
  "Merge Sorted Array": "merge-sorted-array",
  "Gray Code": "gray-code",
  "Subsets II": "subsets-ii",
  "Decode Ways": "decode-ways",
  "Reverse Linked List II": "reverse-linked-list-ii",
  "Restore IP Addresses": "restore-ip-addresses",
  "Binary Tree Inorder Traversal": "binary-tree-inorder-traversal",
  "Unique Binary Search Trees II": "unique-binary-search-trees-ii",
  "Unique Binary Search Trees": "unique-binary-search-trees",
  "Interleaving String": "interleaving-string",
  "Validate Binary Search Tree": "validate-binary-search-tree",
  "Recover Binary Search Tree": "recover-binary-search-tree",
  "Same Tree": "same-tree",
  "Symmetric Tree": "symmetric-tree",
  "Binary Tree Level Order Traversal": "binary-tree-level-order-traversal",
  "Binary Tree Zigzag Level Order Traversal":
    "binary-tree-zigzag-level-order-traversal",
  "Maximum Depth of Binary Tree": "maximum-depth-of-binary-tree",
  "Construct Binary Tree from Preorder and Inorder Traversal":
    "construct-binary-tree-from-preorder-and-inorder-traversal",
  "Construct Binary Tree from Inorder and Postorder Traversal":
    "construct-binary-tree-from-inorder-and-postorder-traversal",
  "Binary Tree Level Order Traversal II":
    "binary-tree-level-order-traversal-ii",
  "Convert Sorted Array to Binary Search Tree":
    "convert-sorted-array-to-binary-search-tree",
  "Convert Sorted List to Binary Search Tree":
    "convert-sorted-list-to-binary-search-tree",
  "Balanced Binary Tree": "balanced-binary-tree",
  "Minimum Depth of Binary Tree": "minimum-depth-of-binary-tree",
  "Path Sum": "path-sum",
  "Path Sum II": "path-sum-ii",
  "Flatten Binary Tree to Linked List": "flatten-binary-tree-to-linked-list",
  "Distinct Subsequences": "distinct-subsequences",
  "Populating Next Right Pointers in Each Node":
    "populating-next-right-pointers-in-each-node",
  "Populating Next Right Pointers in Each Node II":
    "populating-next-right-pointers-in-each-node-ii",
  "Pascal's Triangle": "pascals-triangle",
  "Pascal's Triangle II": "pascals-triangle-ii",
  Triangle: "triangle",
  "Best Time to Buy and Sell Stock": "best-time-to-buy-and-sell-stock",
  "Best Time to Buy and Sell Stock II": "best-time-to-buy-and-sell-stock-ii",
  "Best Time to Buy and Sell Stock III": "best-time-to-buy-and-sell-stock-iii",
  "Binary Tree Maximum Path Sum": "binary-tree-maximum-path-sum",
  "Valid Palindrome": "valid-palindrome",
  "Word Ladder II": "word-ladder-ii",
  "Word Ladder": "word-ladder",
  "Longest Consecutive Sequence": "longest-consecutive-sequence",
  "Sum Root to Leaf Numbers": "sum-root-to-leaf-numbers",
  "Surrounded Regions": "surrounded-regions",
  "Palindrome Partitioning": "palindrome-partitioning",
  "Palindrome Partitioning II": "palindrome-partitioning-ii",
  "Clone Graph": "clone-graph",
  "Gas Station": "gas-station",
  Candy: "candy",
  "Single Number": "single-number",
  "Single Number II": "single-number-ii",
  "Copy List with Random Pointer": "copy-list-with-random-pointer",
  "Word Break": "word-break",
  "Word Break II": "word-break-ii",
  "Linked List Cycle": "linked-list-cycle",
  "Linked List Cycle II": "linked-list-cycle-ii",
  "Reorder List": "reorder-list",
  "Binary Tree Preorder Traversal": "binary-tree-preorder-traversal",
  "Binary Tree Postorder Traversal": "binary-tree-postorder-traversal",
  "LRU Cache": "lru-cache",
  "Insertion Sort List": "insertion-sort-list",
  "Sort List": "sort-list",
  "Max Points on a Line": "max-points-on-a-line",
  "Evaluate Reverse Polish Notation": "evaluate-reverse-polish-notation",
  "Reverse Words in a String": "reverse-words-in-a-string",
  "Maximum Product Subarray": "maximum-product-subarray",
  "Find Minimum in Rotated Sorted Array":
    "find-minimum-in-rotated-sorted-array",
  "Find Minimum in Rotated Sorted Array II":
    "find-minimum-in-rotated-sorted-array-ii",
  "Min Stack": "min-stack",
  "Intersection of Two Linked Lists": "intersection-of-two-linked-lists",
  "Find Peak Element": "find-peak-element",
  "Maximum Gap": "maximum-gap",
  "Compare Version Numbers": "compare-version-numbers",
  "Fraction to Recurring Decimal": "fraction-to-recurring-decimal",
  "Two Sum II - Input Array Is Sorted": "two-sum-ii-input-array-is-sorted",
  "Excel Sheet Column Title": "excel-sheet-column-title",
  "Majority Element": "majority-element",
  "Excel Sheet Column Number": "excel-sheet-column-number",
  "Factorial Trailing Zeroes": "factorial-trailing-zeroes",
  "Binary Search Tree Iterator": "binary-search-tree-iterator",
  "Dungeon Game": "dungeon-game",
  "Combine Two Tables": "combine-two-tables",
  "Second Highest Salary": "second-highest-salary",
  "Nth Highest Salary": "nth-highest-salary",
  "Rank Scores": "rank-scores",
  "Largest Number": "largest-number",
  "Consecutive Numbers": "consecutive-numbers",
  "Employees Earning More Than Their Managers":
    "employees-earning-more-than-their-managers",
  "Duplicate Emails": "duplicate-emails",
  "Customers Who Never Order": "customers-who-never-order",
  "Department Highest Salary": "department-highest-salary",
  "Department Top Three Salaries": "department-top-three-salaries",
  "Repeated DNA Sequences": "repeated-dna-sequences",
  "Best Time to Buy and Sell Stock IV": "best-time-to-buy-and-sell-stock-iv",
  "Rotate Array": "rotate-array",
  "Reverse Bits": "reverse-bits",
  "Number of 1 Bits": "number-of-1-bits",
  "Word Frequency": "word-frequency",
  "Valid Phone Numbers": "valid-phone-numbers",
  "Transpose File": "transpose-file",
  "Tenth Line": "tenth-line",
  "Delete Duplicate Emails": "delete-duplicate-emails",
  "Rising Temperature": "rising-temperature",
  "House Robber": "house-robber",
  "Binary Tree Right Side View": "binary-tree-right-side-view",
  "Number of Islands": "number-of-islands",
  "Bitwise AND of Numbers Range": "bitwise-and-of-numbers-range",
  "Happy Number": "happy-number",
  "Remove Linked List Elements": "remove-linked-list-elements",
  "Count Primes": "count-primes",
  "Isomorphic Strings": "isomorphic-strings",
  "Reverse Linked List": "reverse-linked-list",
  "Course Schedule": "course-schedule",
  "Implement Trie (Prefix Tree)": "implement-trie-prefix-tree",
  "Minimum Size Subarray Sum": "minimum-size-subarray-sum",
  "Course Schedule II": "course-schedule-ii",
  "Design Add and Search Words Data Structure":
    "design-add-and-search-words-data-structure",
  "Word Search II": "word-search-ii",
  "House Robber II": "house-robber-ii",
  "Shortest Palindrome": "shortest-palindrome",
  "Kth Largest Element in an Array": "kth-largest-element-in-an-array",
  "Combination Sum III": "combination-sum-iii",
  "Contains Duplicate": "contains-duplicate",
  "The Skyline Problem": "the-skyline-problem",
  "Contains Duplicate II": "contains-duplicate-ii",
  "Contains Duplicate III": "contains-duplicate-iii",
  "Maximal Square": "maximal-square",
  "Count Complete Tree Nodes": "count-complete-tree-nodes",
  "Rectangle Area": "rectangle-area",
  "Basic Calculator": "basic-calculator",
  "Implement Stack using Queues": "implement-stack-using-queues",
  "Invert Binary Tree": "invert-binary-tree",
  "Basic Calculator II": "basic-calculator-ii",
  "Summary Ranges": "summary-ranges",
  "Majority Element II": "majority-element-ii",
  "Kth Smallest Element in a BST": "kth-smallest-element-in-a-bst",
  "Power of Two": "power-of-two",
  "Implement Queue using Stacks": "implement-queue-using-stacks",
  "Number of Digit One": "number-of-digit-one",
  "Palindrome Linked List": "palindrome-linked-list",
  "Lowest Common Ancestor of a Binary Search Tree":
    "lowest-common-ancestor-of-a-binary-search-tree",
  "Lowest Common Ancestor of a Binary Tree":
    "lowest-common-ancestor-of-a-binary-tree",
  "Delete Node in a Linked List": "delete-node-in-a-linked-list",
  "Product of Array Except Self": "product-of-array-except-self",
  "Sliding Window Maximum": "sliding-window-maximum",
  "Search a 2D Matrix II": "search-a-2d-matrix-ii",
  "Different Ways to Add Parentheses": "different-ways-to-add-parentheses",
  "Valid Anagram": "valid-anagram",
  "Binary Tree Paths": "binary-tree-paths",
  "Add Digits": "add-digits",
  "Single Number III": "single-number-iii",
  "Trips and Users": "trips-and-users",
  "Ugly Number": "ugly-number",
  "Ugly Number II": "ugly-number-ii",
  "Missing Number": "missing-number",
  "Integer to English Words": "integer-to-english-words",
  "H-Index": "h-index",
  "H-Index II": "h-index-ii",
  "First Bad Version": "first-bad-version",
  "Perfect Squares": "perfect-squares",
  "Expression Add Operators": "expression-add-operators",
  "Move Zeroes": "move-zeroes",
  "Peeking Iterator": "peeking-iterator",
  "Find the Duplicate Number": "find-the-duplicate-number",
  "Game of Life": "game-of-life",
  "Word Pattern": "word-pattern",
  "Nim Game": "nim-game",
  "Find Median from Data Stream": "find-median-from-data-stream",
  "Serialize and Deserialize Binary Tree":
    "serialize-and-deserialize-binary-tree",
  "Bulls and Cows": "bulls-and-cows",
  "Longest Increasing Subsequence": "longest-increasing-subsequence",
  "Remove Invalid Parentheses": "remove-invalid-parentheses",
  "Range Sum Query - Immutable": "range-sum-query-immutable",
  "Range Sum Query 2D - Immutable": "range-sum-query-2d-immutable",
  "Additive Number": "additive-number",
  "Range Sum Query - Mutable": "range-sum-query-mutable",
  "Best Time to Buy and Sell Stock with Cooldown":
    "best-time-to-buy-and-sell-stock-with-cooldown",
  "Minimum Height Trees": "minimum-height-trees",
  "Burst Balloons": "burst-balloons",
  "Super Ugly Number": "super-ugly-number",
  "Count of Smaller Numbers After Self": "count-of-smaller-numbers-after-self",
  "Remove Duplicate Letters": "remove-duplicate-letters",
  "Maximum Product of Word Lengths": "maximum-product-of-word-lengths",
  "Bulb Switcher": "bulb-switcher",
  "Create Maximum Number": "create-maximum-number",
  "Coin Change": "coin-change",
  "Wiggle Sort II": "wiggle-sort-ii",
  "Power of Three": "power-of-three",
  "Count of Range Sum": "count-of-range-sum",
  "Odd Even Linked List": "odd-even-linked-list",
  "Longest Increasing Path in a Matrix": "longest-increasing-path-in-a-matrix",
  "Patching Array": "patching-array",
  "Verify Preorder Serialization of a Binary Tree":
    "verify-preorder-serialization-of-a-binary-tree",
  "Reconstruct Itinerary": "reconstruct-itinerary",
  "Increasing Triplet Subsequence": "increasing-triplet-subsequence",
  "Self Crossing": "self-crossing",
  "Palindrome Pairs": "palindrome-pairs",
  "House Robber III": "house-robber-iii",
  "Counting Bits": "counting-bits",
  "Flatten Nested List Iterator": "flatten-nested-list-iterator",
  "Power of Four": "power-of-four",
  "Integer Break": "integer-break",
  "Reverse String": "reverse-string",
  "Reverse Vowels of a String": "reverse-vowels-of-a-string",
  "Top K Frequent Elements": "top-k-frequent-elements",
  "Intersection of Two Arrays": "intersection-of-two-arrays",
  "Intersection of Two Arrays II": "intersection-of-two-arrays-ii",
  "Data Stream as Disjoint Intervals": "data-stream-as-disjoint-intervals",
  "Russian Doll Envelopes": "russian-doll-envelopes",
  "Design Twitter": "design-twitter",
  "Count Numbers with Unique Digits": "count-numbers-with-unique-digits",
  "Max Sum of Rectangle No Larger Than K":
    "max-sum-of-rectangle-no-larger-than-k",
  "Water and Jug Problem": "water-and-jug-problem",
  "Valid Perfect Square": "valid-perfect-square",
  "Largest Divisible Subset": "largest-divisible-subset",
  "Sum of Two Integers": "sum-of-two-integers",
  "Super Pow": "super-pow",
  "Find K Pairs with Smallest Sums": "find-k-pairs-with-smallest-sums",
  "Guess Number Higher or Lower": "guess-number-higher-or-lower",
  "Guess Number Higher or Lower II": "guess-number-higher-or-lower-ii",
  "Wiggle Subsequence": "wiggle-subsequence",
  "Combination Sum IV": "combination-sum-iv",
  "Kth Smallest Element in a Sorted Matrix":
    "kth-smallest-element-in-a-sorted-matrix",
  "Insert Delete GetRandom O(1)": "insert-delete-getrandom-o1",
  "Insert Delete GetRandom O(1) - Duplicates allowed":
    "insert-delete-getrandom-o1-duplicates-allowed",
  "Linked List Random Node": "linked-list-random-node",
  "Ransom Note": "ransom-note",
  "Shuffle an Array": "shuffle-an-array",
  "Mini Parser": "mini-parser",
  "Lexicographical Numbers": "lexicographical-numbers",
  "First Unique Character in a String": "first-unique-character-in-a-string",
  "Longest Absolute File Path": "longest-absolute-file-path",
  "Find the Difference": "find-the-difference",
  "Elimination Game": "elimination-game",
  "Perfect Rectangle": "perfect-rectangle",
  "Is Subsequence": "is-subsequence",
  "UTF-8 Validation": "utf-8-validation",
  "Decode String": "decode-string",
  "Longest Substring with At Least K Repeating Characters":
    "longest-substring-with-at-least-k-repeating-characters",
  "Rotate Function": "rotate-function",
  "Integer Replacement": "integer-replacement",
  "Random Pick Index": "random-pick-index",
  "Evaluate Division": "evaluate-division",
  "Nth Digit": "nth-digit",
  "Binary Watch": "binary-watch",
  "Remove K Digits": "remove-k-digits",
  "Frog Jump": "frog-jump",
  "Sum of Left Leaves": "sum-of-left-leaves",
  "Convert a Number to Hexadecimal": "convert-a-number-to-hexadecimal",
  "Queue Reconstruction by Height": "queue-reconstruction-by-height",
  "Trapping Rain Water II": "trapping-rain-water-ii",
  "Longest Palindrome": "longest-palindrome",
  "Split Array Largest Sum": "split-array-largest-sum",
  "Fizz Buzz": "fizz-buzz",
  "Arithmetic Slices": "arithmetic-slices",
  "Third Maximum Number": "third-maximum-number",
  "Add Strings": "add-strings",
  "Partition Equal Subset Sum": "partition-equal-subset-sum",
  "Pacific Atlantic Water Flow": "pacific-atlantic-water-flow",
  "Battleships in a Board": "battleships-in-a-board",
  "Strong Password Checker": "strong-password-checker",
  "Maximum XOR of Two Numbers in an Array":
    "maximum-xor-of-two-numbers-in-an-array",
  "Reconstruct Original Digits from English":
    "reconstruct-original-digits-from-english",
  "Longest Repeating Character Replacement":
    "longest-repeating-character-replacement",
  "Construct Quad Tree": "construct-quad-tree",
  "N-ary Tree Level Order Traversal": "n-ary-tree-level-order-traversal",
  "Flatten a Multilevel Doubly Linked List":
    "flatten-a-multilevel-doubly-linked-list",
  "All O`one Data Structure": "all-oone-data-structure",
  "Minimum Genetic Mutation": "minimum-genetic-mutation",
  "Number of Segments in a String": "number-of-segments-in-a-string",
  "Non-overlapping Intervals": "non-overlapping-intervals",
  "Find Right Interval": "find-right-interval",
  "Path Sum III": "path-sum-iii",
  "Find All Anagrams in a String": "find-all-anagrams-in-a-string",
  "K-th Smallest in Lexicographical Order":
    "k-th-smallest-in-lexicographical-order",
  "Arranging Coins": "arranging-coins",
  "Find All Duplicates in an Array": "find-all-duplicates-in-an-array",
  "String Compression": "string-compression",
  "Add Two Numbers II": "add-two-numbers-ii",
  "Arithmetic Slices II - Subsequence": "arithmetic-slices-ii-subsequence",
  "Number of Boomerangs": "number-of-boomerangs",
  "Find All Numbers Disappeared in an Array":
    "find-all-numbers-disappeared-in-an-array",
  "Serialize and Deserialize BST": "serialize-and-deserialize-bst",
  "Delete Node in a BST": "delete-node-in-a-bst",
  "Sort Characters By Frequency": "sort-characters-by-frequency",
  "Minimum Number of Arrows to Burst Balloons":
    "minimum-number-of-arrows-to-burst-balloons",
  "Minimum Moves to Equal Array Elements":
    "minimum-moves-to-equal-array-elements",
  "4Sum II": "4sum-ii",
  "Assign Cookies": "assign-cookies",
  "132 Pattern": "132-pattern",
  "Circular Array Loop": "circular-array-loop",
  "Poor Pigs": "poor-pigs",
  "Repeated Substring Pattern": "repeated-substring-pattern",
  "LFU Cache": "lfu-cache",
  "Hamming Distance": "hamming-distance",
  "Minimum Moves to Equal Array Elements II":
    "minimum-moves-to-equal-array-elements-ii",
  "Island Perimeter": "island-perimeter",
  "Can I Win": "can-i-win",
  "Count The Repetitions": "count-the-repetitions",
  "Unique Substrings in Wraparound String":
    "unique-substrings-in-wraparound-string",
  "Validate IP Address": "validate-ip-address",
  "Implement Rand10() Using Rand7()": "implement-rand10-using-rand7",
  "Concatenated Words": "concatenated-words",
  "Matchsticks to Square": "matchsticks-to-square",
  "Ones and Zeroes": "ones-and-zeroes",
  Heaters: "heaters",
  "Number Complement": "number-complement",
  "Total Hamming Distance": "total-hamming-distance",
  "Generate Random Point in a Circle": "generate-random-point-in-a-circle",
  "Largest Palindrome Product": "largest-palindrome-product",
  "Sliding Window Median": "sliding-window-median",
  "Magical String": "magical-string",
  "License Key Formatting": "license-key-formatting",
  "Smallest Good Base": "smallest-good-base",
  "Max Consecutive Ones": "max-consecutive-ones",
  "Predict the Winner": "predict-the-winner",
  "Zuma Game": "zuma-game",
  "Increasing Subsequences": "increasing-subsequences",
  "Construct the Rectangle": "construct-the-rectangle",
  "Reverse Pairs": "reverse-pairs",
  "Target Sum": "target-sum",
  "Teemo Attacking": "teemo-attacking",
  "Next Greater Element I": "next-greater-element-i",
  "Random Point in Non-overlapping Rectangles":
    "random-point-in-non-overlapping-rectangles",
  "Diagonal Traverse": "diagonal-traverse",
  "Keyboard Row": "keyboard-row",
  "Find Mode in Binary Search Tree": "find-mode-in-binary-search-tree",
  IPO: "ipo",
  "Next Greater Element II": "next-greater-element-ii",
  "Base 7": "base-7",
  "Relative Ranks": "relative-ranks",
  "Perfect Number": "perfect-number",
  "Most Frequent Subtree Sum": "most-frequent-subtree-sum",
  "Fibonacci Number": "fibonacci-number",
  "Game Play Analysis I": "game-play-analysis-i",
  "Find Bottom Left Tree Value": "find-bottom-left-tree-value",
  "Freedom Trail": "freedom-trail",
  "Find Largest Value in Each Tree Row": "find-largest-value-in-each-tree-row",
  "Longest Palindromic Subsequence": "longest-palindromic-subsequence",
  "Super Washing Machines": "super-washing-machines",
  "Coin Change II": "coin-change-ii",
  "Random Flip Matrix": "random-flip-matrix",
  "Detect Capital": "detect-capital",
  "Longest Uncommon Subsequence I": "longest-uncommon-subsequence-i",
  "Longest Uncommon Subsequence II": "longest-uncommon-subsequence-ii",
  "Continuous Subarray Sum": "continuous-subarray-sum",
  "Longest Word in Dictionary through Deleting":
    "longest-word-in-dictionary-through-deleting",
  "Contiguous Array": "contiguous-array",
  "Beautiful Arrangement": "beautiful-arrangement",
  "Random Pick with Weight": "random-pick-with-weight",
  Minesweeper: "minesweeper",
  "Minimum Absolute Difference in BST": "minimum-absolute-difference-in-bst",
  "K-diff Pairs in an Array": "k-diff-pairs-in-an-array",
  "Encode and Decode TinyURL": "encode-and-decode-tinyurl",
  "Complex Number Multiplication": "complex-number-multiplication",
  "Convert BST to Greater Tree": "convert-bst-to-greater-tree",
  "Minimum Time Difference": "minimum-time-difference",
  "Single Element in a Sorted Array": "single-element-in-a-sorted-array",
  "Reverse String II": "reverse-string-ii",
  "01 Matrix": "01-matrix",
  "Diameter of Binary Tree": "diameter-of-binary-tree",
  "Remove Boxes": "remove-boxes",
  "Number of Provinces": "number-of-provinces",
  "Student Attendance Record I": "student-attendance-record-i",
  "Student Attendance Record II": "student-attendance-record-ii",
  "Optimal Division": "optimal-division",
  "Brick Wall": "brick-wall",
  "Next Greater Element III": "next-greater-element-iii",
  "Reverse Words in a String III": "reverse-words-in-a-string-iii",
  "Logical OR of Two Binary Grids Represented as Quad-Trees":
    "logical-or-of-two-binary-grids-represented-as-quad-trees",
  "Maximum Depth of N-ary Tree": "maximum-depth-of-n-ary-tree",
  "Subarray Sum Equals K": "subarray-sum-equals-k",
  "Array Partition": "array-partition",
  "Binary Tree Tilt": "binary-tree-tilt",
  "Find the Closest Palindrome": "find-the-closest-palindrome",
  "Array Nesting": "array-nesting",
  "Reshape the Matrix": "reshape-the-matrix",
  "Permutation in String": "permutation-in-string",
  "Subtree of Another Tree": "subtree-of-another-tree",
  "Distribute Candies": "distribute-candies",
  "Out of Boundary Paths": "out-of-boundary-paths",
  "Shortest Unsorted Continuous Subarray":
    "shortest-unsorted-continuous-subarray",
  "Delete Operation for Two Strings": "delete-operation-for-two-strings",
  "Find Customer Referee": "find-customer-referee",
  "Customer Placing the Largest Number of Orders":
    "customer-placing-the-largest-number-of-orders",
  "Erect the Fence": "erect-the-fence",
  "N-ary Tree Preorder Traversal": "n-ary-tree-preorder-traversal",
  "N-ary Tree Postorder Traversal": "n-ary-tree-postorder-traversal",
  "Tag Validator": "tag-validator",
  "Fraction Addition and Subtraction": "fraction-addition-and-subtraction",
  "Valid Square": "valid-square",
  "Longest Harmonious Subsequence": "longest-harmonious-subsequence",
  "Big Countries": "big-countries",
  "Classes More Than 5 Students": "classes-more-than-5-students",
  "Range Addition II": "range-addition-ii",
  "Minimum Index Sum of Two Lists": "minimum-index-sum-of-two-lists",
  "Non-negative Integers without Consecutive Ones":
    "non-negative-integers-without-consecutive-ones",
  "Human Traffic of Stadium": "human-traffic-of-stadium",
  "Can Place Flowers": "can-place-flowers",
  "Construct String from Binary Tree": "construct-string-from-binary-tree",
  "Sales Person": "sales-person",
  "Tree Node": "tree-node",
  "Find Duplicate File in System": "find-duplicate-file-in-system",
  "Valid Triangle Number": "valid-triangle-number",
  "Merge Two Binary Trees": "merge-two-binary-trees",
  "Not Boring Movies": "not-boring-movies",
  "Task Scheduler": "task-scheduler",
  "Design Circular Queue": "design-circular-queue",
  "Add One Row to Tree": "add-one-row-to-tree",
  "Exchange Seats": "exchange-seats",
  "Swap Salary": "swap-salary",
  "Maximum Product of Three Numbers": "maximum-product-of-three-numbers",
  "K Inverse Pairs Array": "k-inverse-pairs-array",
  "Course Schedule III": "course-schedule-iii",
  "Smallest Range Covering Elements from K Lists":
    "smallest-range-covering-elements-from-k-lists",
  "Sum of Square Numbers": "sum-of-square-numbers",
  "Exclusive Time of Functions": "exclusive-time-of-functions",
  "Average of Levels in Binary Tree": "average-of-levels-in-binary-tree",
  "Shopping Offers": "shopping-offers",
  "Decode Ways II": "decode-ways-ii",
  "Solve the Equation": "solve-the-equation",
  "Design Circular Deque": "design-circular-deque",
  "Maximum Average Subarray I": "maximum-average-subarray-i",
  "Set Mismatch": "set-mismatch",
  "Maximum Length of Pair Chain": "maximum-length-of-pair-chain",
  "Palindromic Substrings": "palindromic-substrings",
  "Replace Words": "replace-words",
  "Dota2 Senate": "dota2-senate",
  "2 Keys Keyboard": "2-keys-keyboard",
  "Find Duplicate Subtrees": "find-duplicate-subtrees",
  "Two Sum IV - Input is a BST": "two-sum-iv-input-is-a-bst",
  "Maximum Binary Tree": "maximum-binary-tree",
  "Print Binary Tree": "print-binary-tree",
  "Robot Return to Origin": "robot-return-to-origin",
  "Find K Closest Elements": "find-k-closest-elements",
  "Split Array into Consecutive Subsequences":
    "split-array-into-consecutive-subsequences",
  "Image Smoother": "image-smoother",
  "Maximum Width of Binary Tree": "maximum-width-of-binary-tree",
  "Strange Printer": "strange-printer",
  "Non-decreasing Array": "non-decreasing-array",
  "Beautiful Arrangement II": "beautiful-arrangement-ii",
  "Kth Smallest Number in Multiplication Table":
    "kth-smallest-number-in-multiplication-table",
  "Trim a Binary Search Tree": "trim-a-binary-search-tree",
  "Maximum Swap": "maximum-swap",
  "Second Minimum Node In a Binary Tree":
    "second-minimum-node-in-a-binary-tree",
  "Bulb Switcher II": "bulb-switcher-ii",
  "Number of Longest Increasing Subsequence":
    "number-of-longest-increasing-subsequence",
  "Longest Continuous Increasing Subsequence":
    "longest-continuous-increasing-subsequence",
  "Cut Off Trees for Golf Event": "cut-off-trees-for-golf-event",
  "Implement Magic Dictionary": "implement-magic-dictionary",
  "Map Sum Pairs": "map-sum-pairs",
  "Valid Parenthesis String": "valid-parenthesis-string",
  "24 Game": "24-game",
  "Valid Palindrome II": "valid-palindrome-ii",
  "Baseball Game": "baseball-game",
  "Redundant Connection": "redundant-connection",
  "Redundant Connection II": "redundant-connection-ii",
  "Repeated String Match": "repeated-string-match",
  "Longest Univalue Path": "longest-univalue-path",
  "Knight Probability in Chessboard": "knight-probability-in-chessboard",
  "Maximum Sum of 3 Non-Overlapping Subarrays":
    "maximum-sum-of-3-non-overlapping-subarrays",
  "Employee Importance": "employee-importance",
  "Stickers to Spell Word": "stickers-to-spell-word",
  "Top K Frequent Words": "top-k-frequent-words",
  "Binary Number with Alternating Bits": "binary-number-with-alternating-bits",
  "Max Area of Island": "max-area-of-island",
  "Count Binary Substrings": "count-binary-substrings",
  "Degree of an Array": "degree-of-an-array",
  "Partition to K Equal Sum Subsets": "partition-to-k-equal-sum-subsets",
  "Falling Squares": "falling-squares",
  "Search in a Binary Search Tree": "search-in-a-binary-search-tree",
  "Insert into a Binary Search Tree": "insert-into-a-binary-search-tree",
  "Kth Largest Element in a Stream": "kth-largest-element-in-a-stream",
  "Binary Search": "binary-search",
  "Design HashSet": "design-hashset",
  "Design HashMap": "design-hashmap",
  "Design Linked List": "design-linked-list",
  "To Lower Case": "to-lower-case",
  "Random Pick with Blacklist": "random-pick-with-blacklist",
  "Minimum ASCII Delete Sum for Two Strings":
    "minimum-ascii-delete-sum-for-two-strings",
  "Subarray Product Less Than K": "subarray-product-less-than-k",
  "Best Time to Buy and Sell Stock with Transaction Fee":
    "best-time-to-buy-and-sell-stock-with-transaction-fee",
  "Range Module": "range-module",
  "1-bit and 2-bit Characters": "1-bit-and-2-bit-characters",
  "Maximum Length of Repeated Subarray": "maximum-length-of-repeated-subarray",
  "Find K-th Smallest Pair Distance": "find-k-th-smallest-pair-distance",
  "Longest Word in Dictionary": "longest-word-in-dictionary",
  "Accounts Merge": "accounts-merge",
  "Remove Comments": "remove-comments",
  "Find Pivot Index": "find-pivot-index",
  "Split Linked List in Parts": "split-linked-list-in-parts",
  "Number of Atoms": "number-of-atoms",
  "Self Dividing Numbers": "self-dividing-numbers",
  "My Calendar I": "my-calendar-i",
  "Count Different Palindromic Subsequences":
    "count-different-palindromic-subsequences",
  "My Calendar II": "my-calendar-ii",
  "My Calendar III": "my-calendar-iii",
  "Flood Fill": "flood-fill",
  "Asteroid Collision": "asteroid-collision",
  "Parse Lisp Expression": "parse-lisp-expression",
  "Monotone Increasing Digits": "monotone-increasing-digits",
  "Daily Temperatures": "daily-temperatures",
  "Delete and Earn": "delete-and-earn",
  "Cherry Pickup": "cherry-pickup",
  "Network Delay Time": "network-delay-time",
  "Find Smallest Letter Greater Than Target":
    "find-smallest-letter-greater-than-target",
  "Prefix and Suffix Search": "prefix-and-suffix-search",
  "Min Cost Climbing Stairs": "min-cost-climbing-stairs",
  "Largest Number At Least Twice of Others":
    "largest-number-at-least-twice-of-others",
  "Shortest Completing Word": "shortest-completing-word",
  "Contain Virus": "contain-virus",
  "Open the Lock": "open-the-lock",
  "Cracking the Safe": "cracking-the-safe",
  "Reach a Number": "reach-a-number",
  "Pyramid Transition Matrix": "pyramid-transition-matrix",
  "Set Intersection Size At Least Two": "set-intersection-size-at-least-two",
  "Special Binary String": "special-binary-string",
  "Prime Number of Set Bits in Binary Representation":
    "prime-number-of-set-bits-in-binary-representation",
  "Partition Labels": "partition-labels",
  "Largest Plus Sign": "largest-plus-sign",
  "Couples Holding Hands": "couples-holding-hands",
  "Toeplitz Matrix": "toeplitz-matrix",
  "Reorganize String": "reorganize-string",
  "Max Chunks To Make Sorted II": "max-chunks-to-make-sorted-ii",
  "Max Chunks To Make Sorted": "max-chunks-to-make-sorted",
  "Basic Calculator IV": "basic-calculator-iv",
  "Jewels and Stones": "jewels-and-stones",
  "Sliding Puzzle": "sliding-puzzle",
  "Global and Local Inversions": "global-and-local-inversions",
  "Swap Adjacent in LR String": "swap-adjacent-in-lr-string",
  "Swim in Rising Water": "swim-in-rising-water",
  "K-th Symbol in Grammar": "k-th-symbol-in-grammar",
  "Reaching Points": "reaching-points",
  "Rabbits in Forest": "rabbits-in-forest",
  "Transform to Chessboard": "transform-to-chessboard",
  "Minimum Distance Between BST Nodes": "minimum-distance-between-bst-nodes",
  "Letter Case Permutation": "letter-case-permutation",
  "Is Graph Bipartite?": "is-graph-bipartite",
  "K-th Smallest Prime Fraction": "k-th-smallest-prime-fraction",
  "Cheapest Flights Within K Stops": "cheapest-flights-within-k-stops",
  "Rotated Digits": "rotated-digits",
  "Escape The Ghosts": "escape-the-ghosts",
  "Domino and Tromino Tiling": "domino-and-tromino-tiling",
  "Custom Sort String": "custom-sort-string",
  "Number of Matching Subsequences": "number-of-matching-subsequences",
  "Preimage Size of Factorial Zeroes Function":
    "preimage-size-of-factorial-zeroes-function",
  "Valid Tic-Tac-Toe State": "valid-tic-tac-toe-state",
  "Number of Subarrays with Bounded Maximum":
    "number-of-subarrays-with-bounded-maximum",
  "Rotate String": "rotate-string",
  "All Paths From Source to Target": "all-paths-from-source-to-target",
  "Smallest Rotation with Highest Score":
    "smallest-rotation-with-highest-score",
  "Champagne Tower": "champagne-tower",
  "Minimum Swaps To Make Sequences Increasing":
    "minimum-swaps-to-make-sequences-increasing",
  "Find Eventual Safe States": "find-eventual-safe-states",
  "Bricks Falling When Hit": "bricks-falling-when-hit",
  "Unique Morse Code Words": "unique-morse-code-words",
  "Split Array With Same Average": "split-array-with-same-average",
  "Number of Lines To Write String": "number-of-lines-to-write-string",
  "Max Increase to Keep City Skyline": "max-increase-to-keep-city-skyline",
  "Soup Servings": "soup-servings",
  "Expressive Words": "expressive-words",
  "Chalkboard XOR Game": "chalkboard-xor-game",
  "Subdomain Visit Count": "subdomain-visit-count",
  "Largest Triangle Area": "largest-triangle-area",
  "Largest Sum of Averages": "largest-sum-of-averages",
  "Binary Tree Pruning": "binary-tree-pruning",
  "Bus Routes": "bus-routes",
  "Ambiguous Coordinates": "ambiguous-coordinates",
  "Linked List Components": "linked-list-components",
  "Race Car": "race-car",
  "Most Common Word": "most-common-word",
  "Short Encoding of Words": "short-encoding-of-words",
  "Shortest Distance to a Character": "shortest-distance-to-a-character",
  "Card Flipping Game": "card-flipping-game",
  "Binary Trees With Factors": "binary-trees-with-factors",
  "Goat Latin": "goat-latin",
  "Friends Of Appropriate Ages": "friends-of-appropriate-ages",
  "Most Profit Assigning Work": "most-profit-assigning-work",
  "Making A Large Island": "making-a-large-island",
  "Count Unique Characters of All Substrings of a Given String":
    "count-unique-characters-of-all-substrings-of-a-given-string",
  "Consecutive Numbers Sum": "consecutive-numbers-sum",
  "Positions of Large Groups": "positions-of-large-groups",
  "Masking Personal Information": "masking-personal-information",
  "Flipping an Image": "flipping-an-image",
  "Find And Replace in String": "find-and-replace-in-string",
  "Sum of Distances in Tree": "sum-of-distances-in-tree",
  "Image Overlap": "image-overlap",
  "Rectangle Overlap": "rectangle-overlap",
  "New 21 Game": "new-21-game",
  "Push Dominoes": "push-dominoes",
  "Similar String Groups": "similar-string-groups",
  "Magic Squares In Grid": "magic-squares-in-grid",
  "Keys and Rooms": "keys-and-rooms",
  "Split Array into Fibonacci Sequence": "split-array-into-fibonacci-sequence",
  "Guess the Word": "guess-the-word",
  "Backspace String Compare": "backspace-string-compare",
  "Longest Mountain in Array": "longest-mountain-in-array",
  "Hand of Straights": "hand-of-straights",
  "Shortest Path Visiting All Nodes": "shortest-path-visiting-all-nodes",
  "Shifting Letters": "shifting-letters",
  "Maximize Distance to Closest Person": "maximize-distance-to-closest-person",
  "Rectangle Area II": "rectangle-area-ii",
  "Loud and Rich": "loud-and-rich",
  "Peak Index in a Mountain Array": "peak-index-in-a-mountain-array",
  "Car Fleet": "car-fleet",
  "K-Similar Strings": "k-similar-strings",
  "Exam Room": "exam-room",
  "Score of Parentheses": "score-of-parentheses",
  "Minimum Cost to Hire K Workers": "minimum-cost-to-hire-k-workers",
  "Mirror Reflection": "mirror-reflection",
  "Buddy Strings": "buddy-strings",
  "Lemonade Change": "lemonade-change",
  "Score After Flipping Matrix": "score-after-flipping-matrix",
  "Shortest Subarray with Sum at Least K":
    "shortest-subarray-with-sum-at-least-k",
  "All Nodes Distance K in Binary Tree": "all-nodes-distance-k-in-binary-tree",
  "Shortest Path to Get All Keys": "shortest-path-to-get-all-keys",
  "Smallest Subtree with all the Deepest Nodes":
    "smallest-subtree-with-all-the-deepest-nodes",
  "Prime Palindrome": "prime-palindrome",
  "Transpose Matrix": "transpose-matrix",
  "Binary Gap": "binary-gap",
  "Reordered Power of 2": "reordered-power-of-2",
  "Advantage Shuffle": "advantage-shuffle",
  "Minimum Number of Refueling Stops": "minimum-number-of-refueling-stops",
  "Leaf-Similar Trees": "leaf-similar-trees",
  "Length of Longest Fibonacci Subsequence":
    "length-of-longest-fibonacci-subsequence",
  "Walking Robot Simulation": "walking-robot-simulation",
  "Koko Eating Bananas": "koko-eating-bananas",
  "Middle of the Linked List": "middle-of-the-linked-list",
  "Stone Game": "stone-game",
  "Nth Magical Number": "nth-magical-number",
  "Profitable Schemes": "profitable-schemes",
  "Decoded String at Index": "decoded-string-at-index",
  "Boats to Save People": "boats-to-save-people",
  "Reachable Nodes In Subdivided Graph": "reachable-nodes-in-subdivided-graph",
  "Projection Area of 3D Shapes": "projection-area-of-3d-shapes",
  "Uncommon Words from Two Sentences": "uncommon-words-from-two-sentences",
  "Spiral Matrix III": "spiral-matrix-iii",
  "Possible Bipartition": "possible-bipartition",
  "Super Egg Drop": "super-egg-drop",
  "Fair Candy Swap": "fair-candy-swap",
  "Construct Binary Tree from Preorder and Postorder Traversal":
    "construct-binary-tree-from-preorder-and-postorder-traversal",
  "Find and Replace Pattern": "find-and-replace-pattern",
  "Sum of Subsequence Widths": "sum-of-subsequence-widths",
  "Surface Area of 3D Shapes": "surface-area-of-3d-shapes",
  "Groups of Special-Equivalent Strings":
    "groups-of-special-equivalent-strings",
  "All Possible Full Binary Trees": "all-possible-full-binary-trees",
  "Maximum Frequency Stack": "maximum-frequency-stack",
  "Monotonic Array": "monotonic-array",
  "Increasing Order Search Tree": "increasing-order-search-tree",
  "Bitwise ORs of Subarrays": "bitwise-ors-of-subarrays",
  "Orderly Queue": "orderly-queue",
  "RLE Iterator": "rle-iterator",
  "Online Stock Span": "online-stock-span",
  "Numbers At Most N Given Digit Set": "numbers-at-most-n-given-digit-set",
  "Valid Permutations for DI Sequence": "valid-permutations-for-di-sequence",
  "Fruit Into Baskets": "fruit-into-baskets",
  "Sort Array By Parity": "sort-array-by-parity",
  "Super Palindromes": "super-palindromes",
  "Sum of Subarray Minimums": "sum-of-subarray-minimums",
  "Smallest Range I": "smallest-range-i",
  "Snakes and Ladders": "snakes-and-ladders",
  "Smallest Range II": "smallest-range-ii",
  "Online Election": "online-election",
  "Sort an Array": "sort-an-array",
  "Cat and Mouse": "cat-and-mouse",
  "X of a Kind in a Deck of Cards": "x-of-a-kind-in-a-deck-of-cards",
  "Partition Array into Disjoint Intervals":
    "partition-array-into-disjoint-intervals",
  "Word Subsets": "word-subsets",
  "Reverse Only Letters": "reverse-only-letters",
  "Maximum Sum Circular Subarray": "maximum-sum-circular-subarray",
  "Complete Binary Tree Inserter": "complete-binary-tree-inserter",
  "Number of Music Playlists": "number-of-music-playlists",
  "Minimum Add to Make Parentheses Valid":
    "minimum-add-to-make-parentheses-valid",
  "Sort Array By Parity II": "sort-array-by-parity-ii",
  "3Sum With Multiplicity": "3sum-with-multiplicity",
  "Minimize Malware Spread": "minimize-malware-spread",
  "Long Pressed Name": "long-pressed-name",
  "Flip String to Monotone Increasing": "flip-string-to-monotone-increasing",
  "Three Equal Parts": "three-equal-parts",
  "Minimize Malware Spread II": "minimize-malware-spread-ii",
  "Unique Email Addresses": "unique-email-addresses",
  "Binary Subarrays With Sum": "binary-subarrays-with-sum",
  "Minimum Falling Path Sum": "minimum-falling-path-sum",
  "Beautiful Array": "beautiful-array",
  "Number of Recent Calls": "number-of-recent-calls",
  "Shortest Bridge": "shortest-bridge",
  "Knight Dialer": "knight-dialer",
  "Stamping The Sequence": "stamping-the-sequence",
  "Reorder Data in Log Files": "reorder-data-in-log-files",
  "Range Sum of BST": "range-sum-of-bst",
  "Minimum Area Rectangle": "minimum-area-rectangle",
  "Distinct Subsequences II": "distinct-subsequences-ii",
  "Valid Mountain Array": "valid-mountain-array",
  "DI String Match": "di-string-match",
  "Find the Shortest Superstring": "find-the-shortest-superstring",
  "Delete Columns to Make Sorted": "delete-columns-to-make-sorted",
  "Minimum Increment to Make Array Unique":
    "minimum-increment-to-make-array-unique",
  "Validate Stack Sequences": "validate-stack-sequences",
  "Most Stones Removed with Same Row or Column":
    "most-stones-removed-with-same-row-or-column",
  "Bag of Tokens": "bag-of-tokens",
  "Largest Time for Given Digits": "largest-time-for-given-digits",
  "Reveal Cards In Increasing Order": "reveal-cards-in-increasing-order",
  "Flip Equivalent Binary Trees": "flip-equivalent-binary-trees",
  "Largest Component Size by Common Factor":
    "largest-component-size-by-common-factor",
  "Verifying an Alien Dictionary": "verifying-an-alien-dictionary",
  "Array of Doubled Pairs": "array-of-doubled-pairs",
  "Delete Columns to Make Sorted II": "delete-columns-to-make-sorted-ii",
  "Tallest Billboard": "tallest-billboard",
  "Prison Cells After N Days": "prison-cells-after-n-days",
  "Check Completeness of a Binary Tree": "check-completeness-of-a-binary-tree",
  "Regions Cut By Slashes": "regions-cut-by-slashes",
  "Delete Columns to Make Sorted III": "delete-columns-to-make-sorted-iii",
  "N-Repeated Element in Size 2N Array": "n-repeated-element-in-size-2n-array",
  "Maximum Width Ramp": "maximum-width-ramp",
  "Minimum Area Rectangle II": "minimum-area-rectangle-ii",
  "Least Operators to Express Number": "least-operators-to-express-number",
  "Univalued Binary Tree": "univalued-binary-tree",
  "Vowel Spellchecker": "vowel-spellchecker",
  "Numbers With Same Consecutive Differences":
    "numbers-with-same-consecutive-differences",
  "Binary Tree Cameras": "binary-tree-cameras",
  "Pancake Sorting": "pancake-sorting",
  "Powerful Integers": "powerful-integers",
  "Flip Binary Tree To Match Preorder Traversal":
    "flip-binary-tree-to-match-preorder-traversal",
  "Equal Rational Numbers": "equal-rational-numbers",
  "K Closest Points to Origin": "k-closest-points-to-origin",
  "Subarray Sums Divisible by K": "subarray-sums-divisible-by-k",
  "Odd Even Jump": "odd-even-jump",
  "Largest Perimeter Triangle": "largest-perimeter-triangle",
  "Squares of a Sorted Array": "squares-of-a-sorted-array",
  "Longest Turbulent Subarray": "longest-turbulent-subarray",
  "Distribute Coins in Binary Tree": "distribute-coins-in-binary-tree",
  "Unique Paths III": "unique-paths-iii",
  "Time Based Key-Value Store": "time-based-key-value-store",
  "Triples with Bitwise AND Equal To Zero":
    "triples-with-bitwise-and-equal-to-zero",
  "Minimum Cost For Tickets": "minimum-cost-for-tickets",
  "String Without AAA or BBB": "string-without-aaa-or-bbb",
  "Sum of Even Numbers After Queries": "sum-of-even-numbers-after-queries",
  "Interval List Intersections": "interval-list-intersections",
  "Vertical Order Traversal of a Binary Tree":
    "vertical-order-traversal-of-a-binary-tree",
  "Smallest String Starting From Leaf": "smallest-string-starting-from-leaf",
  "Add to Array-Form of Integer": "add-to-array-form-of-integer",
  "Satisfiability of Equality Equations":
    "satisfiability-of-equality-equations",
  "Broken Calculator": "broken-calculator",
  "Subarrays with K Different Integers": "subarrays-with-k-different-integers",
  "Cousins in Binary Tree": "cousins-in-binary-tree",
  "Rotting Oranges": "rotting-oranges",
  "Minimum Number of K Consecutive Bit Flips":
    "minimum-number-of-k-consecutive-bit-flips",
  "Number of Squareful Arrays": "number-of-squareful-arrays",
  "Find the Town Judge": "find-the-town-judge",
  "Maximum Binary Tree II": "maximum-binary-tree-ii",
  "Available Captures for Rook": "available-captures-for-rook",
  "Minimum Cost to Merge Stones": "minimum-cost-to-merge-stones",
  "Grid Illumination": "grid-illumination",
  "Find Common Characters": "find-common-characters",
  "Check If Word Is Valid After Substitutions":
    "check-if-word-is-valid-after-substitutions",
  "Max Consecutive Ones III": "max-consecutive-ones-iii",
  "Maximize Sum Of Array After K Negations":
    "maximize-sum-of-array-after-k-negations",
  "Clumsy Factorial": "clumsy-factorial",
  "Minimum Domino Rotations For Equal Row":
    "minimum-domino-rotations-for-equal-row",
  "Construct Binary Search Tree from Preorder Traversal":
    "construct-binary-search-tree-from-preorder-traversal",
  "Complement of Base 10 Integer": "complement-of-base-10-integer",
  "Pairs of Songs With Total Durations Divisible by 60":
    "pairs-of-songs-with-total-durations-divisible-by-60",
  "Capacity To Ship Packages Within D Days":
    "capacity-to-ship-packages-within-d-days",
  "Numbers With Repeated Digits": "numbers-with-repeated-digits",
  "Partition Array Into Three Parts With Equal Sum":
    "partition-array-into-three-parts-with-equal-sum",
  "Best Sightseeing Pair": "best-sightseeing-pair",
  "Smallest Integer Divisible by K": "smallest-integer-divisible-by-k",
  "Binary String With Substrings Representing 1 To N":
    "binary-string-with-substrings-representing-1-to-n",
  "Convert to Base -2": "convert-to-base-2",
  "Binary Prefix Divisible By 5": "binary-prefix-divisible-by-5",
  "Next Greater Node In Linked List": "next-greater-node-in-linked-list",
  "Number of Enclaves": "number-of-enclaves",
  "Remove Outermost Parentheses": "remove-outermost-parentheses",
  "Sum of Root To Leaf Binary Numbers": "sum-of-root-to-leaf-binary-numbers",
  "Camelcase Matching": "camelcase-matching",
  "Video Stitching": "video-stitching",
  "Divisor Game": "divisor-game",
  "Maximum Difference Between Node and Ancestor":
    "maximum-difference-between-node-and-ancestor",
  "Longest Arithmetic Subsequence": "longest-arithmetic-subsequence",
  "Recover a Tree From Preorder Traversal":
    "recover-a-tree-from-preorder-traversal",
  "Two City Scheduling": "two-city-scheduling",
  "Matrix Cells in Distance Order": "matrix-cells-in-distance-order",
  "Maximum Sum of Two Non-Overlapping Subarrays":
    "maximum-sum-of-two-non-overlapping-subarrays",
  "Stream of Characters": "stream-of-characters",
  "Moving Stones Until Consecutive": "moving-stones-until-consecutive",
  "Coloring A Border": "coloring-a-border",
  "Uncrossed Lines": "uncrossed-lines",
  "Escape a Large Maze": "escape-a-large-maze",
  "Valid Boomerang": "valid-boomerang",
  "Binary Search Tree to Greater Sum Tree":
    "binary-search-tree-to-greater-sum-tree",
  "Minimum Score Triangulation of Polygon":
    "minimum-score-triangulation-of-polygon",
  "Moving Stones Until Consecutive II": "moving-stones-until-consecutive-ii",
  "Robot Bounded In Circle": "robot-bounded-in-circle",
  "Flower Planting With No Adjacent": "flower-planting-with-no-adjacent",
  "Partition Array for Maximum Sum": "partition-array-for-maximum-sum",
  "Longest Duplicate Substring": "longest-duplicate-substring",
  "Last Stone Weight": "last-stone-weight",
  "Remove All Adjacent Duplicates In String":
    "remove-all-adjacent-duplicates-in-string",
  "Longest String Chain": "longest-string-chain",
  "Last Stone Weight II": "last-stone-weight-ii",
  "Actors and Directors Who Cooperated At Least Three Times":
    "actors-and-directors-who-cooperated-at-least-three-times",
  "Height Checker": "height-checker",
  "Grumpy Bookstore Owner": "grumpy-bookstore-owner",
  "Previous Permutation With One Swap": "previous-permutation-with-one-swap",
  "Distant Barcodes": "distant-barcodes",
  "Greatest Common Divisor of Strings": "greatest-common-divisor-of-strings",
  "Flip Columns For Maximum Number of Equal Rows":
    "flip-columns-for-maximum-number-of-equal-rows",
  "Adding Two Negabinary Numbers": "adding-two-negabinary-numbers",
  "Number of Submatrices That Sum to Target":
    "number-of-submatrices-that-sum-to-target",
  "Occurrences After Bigram": "occurrences-after-bigram",
  "Letter Tile Possibilities": "letter-tile-possibilities",
  "Insufficient Nodes in Root to Leaf Paths":
    "insufficient-nodes-in-root-to-leaf-paths",
  "Smallest Subsequence of Distinct Characters":
    "smallest-subsequence-of-distinct-characters",
  "Sales Analysis III": "sales-analysis-iii",
  "Duplicate Zeros": "duplicate-zeros",
  "Largest Values From Labels": "largest-values-from-labels",
  "Shortest Path in Binary Matrix": "shortest-path-in-binary-matrix",
  "Shortest Common Supersequence ": "shortest-common-supersequence",
  "Statistics from a Large Sample": "statistics-from-a-large-sample",
  "Car Pooling": "car-pooling",
  "Find in Mountain Array": "find-in-mountain-array",
  "Brace Expansion II": "brace-expansion-ii",
  "Distribute Candies to People": "distribute-candies-to-people",
  "Path In Zigzag Labelled Binary Tree": "path-in-zigzag-labelled-binary-tree",
  "Filling Bookcase Shelves": "filling-bookcase-shelves",
  "Parsing A Boolean Expression": "parsing-a-boolean-expression",
  "Defanging an IP Address": "defanging-an-ip-address",
  "Corporate Flight Bookings": "corporate-flight-bookings",
  "Delete Nodes And Return Forest": "delete-nodes-and-return-forest",
  "Maximum Nesting Depth of Two Valid Parentheses Strings":
    "maximum-nesting-depth-of-two-valid-parentheses-strings",
  "Print in Order": "print-in-order",
  "Print FooBar Alternately": "print-foobar-alternately",
  "Print Zero Even Odd": "print-zero-even-odd",
  "Building H2O": "building-h2o",
  "Relative Sort Array": "relative-sort-array",
  "Lowest Common Ancestor of Deepest Leaves":
    "lowest-common-ancestor-of-deepest-leaves",
  "Longest Well-Performing Interval": "longest-well-performing-interval",
  "Smallest Sufficient Team": "smallest-sufficient-team",
  "Number of Equivalent Domino Pairs": "number-of-equivalent-domino-pairs",
  "Shortest Path with Alternating Colors":
    "shortest-path-with-alternating-colors",
  "Minimum Cost Tree From Leaf Values": "minimum-cost-tree-from-leaf-values",
  "Maximum of Absolute Value Expression":
    "maximum-of-absolute-value-expression",
  "N-th Tribonacci Number": "n-th-tribonacci-number",
  "Alphabet Board Path": "alphabet-board-path",
  "Largest 1-Bordered Square": "largest-1-bordered-square",
  "Stone Game II": "stone-game-ii",
  "User Activity for the Past 30 Days I":
    "user-activity-for-the-past-30-days-i",
  "Longest Common Subsequence": "longest-common-subsequence",
  "Decrease Elements To Make Array Zigzag":
    "decrease-elements-to-make-array-zigzag",
  "Binary Tree Coloring Game": "binary-tree-coloring-game",
  "Snapshot Array": "snapshot-array",
  "Longest Chunked Palindrome Decomposition":
    "longest-chunked-palindrome-decomposition",
  "Article Views I": "article-views-i",
  "Day of the Year": "day-of-the-year",
  "Number of Dice Rolls With Target Sum":
    "number-of-dice-rolls-with-target-sum",
  "Swap For Longest Repeated Character Substring":
    "swap-for-longest-repeated-character-substring",
  "Online Majority Element In Subarray": "online-majority-element-in-subarray",
  "Market Analysis I": "market-analysis-i",
  "Find Words That Can Be Formed by Characters":
    "find-words-that-can-be-formed-by-characters",
  "Maximum Level Sum of a Binary Tree": "maximum-level-sum-of-a-binary-tree",
  "As Far from Land as Possible": "as-far-from-land-as-possible",
  "Last Substring in Lexicographical Order":
    "last-substring-in-lexicographical-order",
  "Invalid Transactions": "invalid-transactions",
  "Compare Strings by Frequency of the Smallest Character":
    "compare-strings-by-frequency-of-the-smallest-character",
  "Remove Zero Sum Consecutive Nodes from Linked List":
    "remove-zero-sum-consecutive-nodes-from-linked-list",
  "Dinner Plate Stacks": "dinner-plate-stacks",
  "Prime Arrangements": "prime-arrangements",
  "Can Make Palindrome from Substring": "can-make-palindrome-from-substring",
  "Number of Valid Words for Each Puzzle":
    "number-of-valid-words-for-each-puzzle",
  "Reformat Department Table": "reformat-department-table",
  "Distance Between Bus Stops": "distance-between-bus-stops",
  "Day of the Week": "day-of-the-week",
  "Maximum Subarray Sum with One Deletion":
    "maximum-subarray-sum-with-one-deletion",
  "Make Array Strictly Increasing": "make-array-strictly-increasing",
  "Maximum Number of Balloons": "maximum-number-of-balloons",
  "Reverse Substrings Between Each Pair of Parentheses":
    "reverse-substrings-between-each-pair-of-parentheses",
  "K-Concatenation Maximum Sum": "k-concatenation-maximum-sum",
  "Critical Connections in a Network": "critical-connections-in-a-network",
  "Fizz Buzz Multithreaded": "fizz-buzz-multithreaded",
  "Minimum Absolute Difference": "minimum-absolute-difference",
  "Ugly Number III": "ugly-number-iii",
  "Smallest String With Swaps": "smallest-string-with-swaps",
  "Sort Items by Groups Respecting Dependencies":
    "sort-items-by-groups-respecting-dependencies",
  "Design Skiplist": "design-skiplist",
  "Unique Number of Occurrences": "unique-number-of-occurrences",
  "Get Equal Substrings Within Budget": "get-equal-substrings-within-budget",
  "Remove All Adjacent Duplicates in String II":
    "remove-all-adjacent-duplicates-in-string-ii",
  "Minimum Moves to Reach Target with Rotations":
    "minimum-moves-to-reach-target-with-rotations",
  "Minimum Cost to Move Chips to The Same Position":
    "minimum-cost-to-move-chips-to-the-same-position",
  "Longest Arithmetic Subsequence of Given Difference":
    "longest-arithmetic-subsequence-of-given-difference",
  "Path with Maximum Gold": "path-with-maximum-gold",
  "Count Vowels Permutation": "count-vowels-permutation",
  "Split a String in Balanced Strings": "split-a-string-in-balanced-strings",
  "Queens That Can Attack the King": "queens-that-can-attack-the-king",
  "Dice Roll Simulation": "dice-roll-simulation",
  "Maximum Equal Frequency": "maximum-equal-frequency",
  "The Dining Philosophers": "the-dining-philosophers",
  "Airplane Seat Assignment Probability":
    "airplane-seat-assignment-probability",
  "Check If It Is a Straight Line": "check-if-it-is-a-straight-line",
  "Remove Sub-Folders from the Filesystem":
    "remove-sub-folders-from-the-filesystem",
  "Replace the Substring for Balanced String":
    "replace-the-substring-for-balanced-string",
  "Maximum Profit in Job Scheduling": "maximum-profit-in-job-scheduling",
  "Find Positive Integer Solution for a Given Equation":
    "find-positive-integer-solution-for-a-given-equation",
  "Circular Permutation in Binary Representation":
    "circular-permutation-in-binary-representation",
  "Maximum Length of a Concatenated String with Unique Characters":
    "maximum-length-of-a-concatenated-string-with-unique-characters",
  "Tiling a Rectangle with the Fewest Squares":
    "tiling-a-rectangle-with-the-fewest-squares",
  "Minimum Swaps to Make Strings Equal": "minimum-swaps-to-make-strings-equal",
  "Count Number of Nice Subarrays": "count-number-of-nice-subarrays",
  "Minimum Remove to Make Valid Parentheses":
    "minimum-remove-to-make-valid-parentheses",
  "Check If It Is a Good Array": "check-if-it-is-a-good-array",
  "Cells with Odd Values in a Matrix": "cells-with-odd-values-in-a-matrix",
  "Reconstruct a 2-Row Binary Matrix": "reconstruct-a-2-row-binary-matrix",
  "Number of Closed Islands": "number-of-closed-islands",
  "Maximum Score Words Formed by Letters":
    "maximum-score-words-formed-by-letters",
  "Shift 2D Grid": "shift-2d-grid",
  "Find Elements in a Contaminated Binary Tree":
    "find-elements-in-a-contaminated-binary-tree",
  "Greatest Sum Divisible by Three": "greatest-sum-divisible-by-three",
  "Minimum Moves to Move a Box to Their Target Location":
    "minimum-moves-to-move-a-box-to-their-target-location",
  "Minimum Time Visiting All Points": "minimum-time-visiting-all-points",
  "Count Servers that Communicate": "count-servers-that-communicate",
  "Search Suggestions System": "search-suggestions-system",
  "Number of Ways to Stay in the Same Place After Some Steps":
    "number-of-ways-to-stay-in-the-same-place-after-some-steps",
  "Find Winner on a Tic Tac Toe Game": "find-winner-on-a-tic-tac-toe-game",
  "Number of Burgers with No Waste of Ingredients":
    "number-of-burgers-with-no-waste-of-ingredients",
  "Count Square Submatrices with All Ones":
    "count-square-submatrices-with-all-ones",
  "Palindrome Partitioning III": "palindrome-partitioning-iii",
  "Subtract the Product and Sum of Digits of an Integer":
    "subtract-the-product-and-sum-of-digits-of-an-integer",
  "Group the People Given the Group Size They Belong To":
    "group-the-people-given-the-group-size-they-belong-to",
  "Find the Smallest Divisor Given a Threshold":
    "find-the-smallest-divisor-given-a-threshold",
  "Minimum Number of Flips to Convert Binary Matrix to Zero Matrix":
    "minimum-number-of-flips-to-convert-binary-matrix-to-zero-matrix",
  "Iterator for Combination": "iterator-for-combination",
  "Element Appearing More Than 25% In Sorted Array":
    "element-appearing-more-than-25-in-sorted-array",
  "Remove Covered Intervals": "remove-covered-intervals",
  "Minimum Falling Path Sum II": "minimum-falling-path-sum-ii",
  "Convert Binary Number in a Linked List to Integer":
    "convert-binary-number-in-a-linked-list-to-integer",
  "Sequential Digits": "sequential-digits",
  "Maximum Side Length of a Square with Sum Less than or Equal to Threshold":
    "maximum-side-length-of-a-square-with-sum-less-than-or-equal-to-threshold",
  "Shortest Path in a Grid with Obstacles Elimination":
    "shortest-path-in-a-grid-with-obstacles-elimination",
  "Find Numbers with Even Number of Digits":
    "find-numbers-with-even-number-of-digits",
  "Divide Array in Sets of K Consecutive Numbers":
    "divide-array-in-sets-of-k-consecutive-numbers",
  "Maximum Number of Occurrences of a Substring":
    "maximum-number-of-occurrences-of-a-substring",
  "Maximum Candies You Can Get from Boxes":
    "maximum-candies-you-can-get-from-boxes",
  "Replace Elements with Greatest Element on Right Side":
    "replace-elements-with-greatest-element-on-right-side",
  "Sum of Mutated Array Closest to Target":
    "sum-of-mutated-array-closest-to-target",
  "Number of Paths with Max Score": "number-of-paths-with-max-score",
  "Deepest Leaves Sum": "deepest-leaves-sum",
  "Find N Unique Integers Sum up to Zero":
    "find-n-unique-integers-sum-up-to-zero",
  "All Elements in Two Binary Search Trees":
    "all-elements-in-two-binary-search-trees",
  "Jump Game III": "jump-game-iii",
  "Verbal Arithmetic Puzzle": "verbal-arithmetic-puzzle",
  "Decrypt String from Alphabet to Integer Mapping":
    "decrypt-string-from-alphabet-to-integer-mapping",
  "XOR Queries of a Subarray": "xor-queries-of-a-subarray",
  "Get Watched Videos by Your Friends": "get-watched-videos-by-your-friends",
  "Minimum Insertion Steps to Make a String Palindrome":
    "minimum-insertion-steps-to-make-a-string-palindrome",
  "Decompress Run-Length Encoded List": "decompress-run-length-encoded-list",
  "Matrix Block Sum": "matrix-block-sum",
  "Sum of Nodes with Even-Valued Grandparent":
    "sum-of-nodes-with-even-valued-grandparent",
  "Distinct Echo Substrings": "distinct-echo-substrings",
  "Convert Integer to the Sum of Two No-Zero Integers":
    "convert-integer-to-the-sum-of-two-no-zero-integers",
  "Minimum Flips to Make a OR b Equal to c":
    "minimum-flips-to-make-a-or-b-equal-to-c",
  "Number of Operations to Make Network Connected":
    "number-of-operations-to-make-network-connected",
  "Minimum Distance to Type a Word Using Two Fingers":
    "minimum-distance-to-type-a-word-using-two-fingers",
  "Maximum 69 Number": "maximum-69-number",
  "Print Words Vertically": "print-words-vertically",
  "Delete Leaves With a Given Value": "delete-leaves-with-a-given-value",
  "Minimum Number of Taps to Open to Water a Garden":
    "minimum-number-of-taps-to-open-to-water-a-garden",
  "Break a Palindrome": "break-a-palindrome",
  "Sort the Matrix Diagonally": "sort-the-matrix-diagonally",
  "Reverse Subarray To Maximize Array Value":
    "reverse-subarray-to-maximize-array-value",
  "Rank Transform of an Array": "rank-transform-of-an-array",
  "Remove Palindromic Subsequences": "remove-palindromic-subsequences",
  "Filter Restaurants by Vegan-Friendly, Price and Distance":
    "filter-restaurants-by-vegan-friendly-price-and-distance",
  "Find the City With the Smallest Number of Neighbors at a Threshold Distance":
    "find-the-city-with-the-smallest-number-of-neighbors-at-a-threshold-distance",
  "Minimum Difficulty of a Job Schedule":
    "minimum-difficulty-of-a-job-schedule",
  "The K Weakest Rows in a Matrix": "the-k-weakest-rows-in-a-matrix",
  "Reduce Array Size to The Half": "reduce-array-size-to-the-half",
  "Maximum Product of Splitted Binary Tree":
    "maximum-product-of-splitted-binary-tree",
  "Jump Game V": "jump-game-v",
  "Number of Steps to Reduce a Number to Zero":
    "number-of-steps-to-reduce-a-number-to-zero",
  "Number of Sub-arrays of Size K and Average Greater than or Equal to Threshold":
    "number-of-sub-arrays-of-size-k-and-average-greater-than-or-equal-to-threshold",
  "Angle Between Hands of a Clock": "angle-between-hands-of-a-clock",
  "Jump Game IV": "jump-game-iv",
  "Check If N and Its Double Exist": "check-if-n-and-its-double-exist",
  "Minimum Number of Steps to Make Two Strings Anagram":
    "minimum-number-of-steps-to-make-two-strings-anagram",
  "Tweet Counts Per Frequency": "tweet-counts-per-frequency",
  "Maximum Students Taking Exam": "maximum-students-taking-exam",
  "Count Negative Numbers in a Sorted Matrix":
    "count-negative-numbers-in-a-sorted-matrix",
  "Product of the Last K Numbers": "product-of-the-last-k-numbers",
  "Maximum Number of Events That Can Be Attended":
    "maximum-number-of-events-that-can-be-attended",
  "Construct Target Array With Multiple Sums":
    "construct-target-array-with-multiple-sums",
  "Sort Integers by The Number of 1 Bits":
    "sort-integers-by-the-number-of-1-bits",
  "Apply Discount Every n Orders": "apply-discount-every-n-orders",
  "Number of Substrings Containing All Three Characters":
    "number-of-substrings-containing-all-three-characters",
  "Count All Valid Pickup and Delivery Options":
    "count-all-valid-pickup-and-delivery-options",
  "Number of Days Between Two Dates": "number-of-days-between-two-dates",
  "Validate Binary Tree Nodes": "validate-binary-tree-nodes",
  "Closest Divisors": "closest-divisors",
  "Largest Multiple of Three": "largest-multiple-of-three",
  "How Many Numbers Are Smaller Than the Current Number":
    "how-many-numbers-are-smaller-than-the-current-number",
  "Rank Teams by Votes": "rank-teams-by-votes",
  "Linked List in Binary Tree": "linked-list-in-binary-tree",
  "Minimum Cost to Make at Least One Valid Path in a Grid":
    "minimum-cost-to-make-at-least-one-valid-path-in-a-grid",
  "Increasing Decreasing String": "increasing-decreasing-string",
  "Find the Longest Substring Containing Vowels in Even Counts":
    "find-the-longest-substring-containing-vowels-in-even-counts",
  "Longest ZigZag Path in a Binary Tree":
    "longest-zigzag-path-in-a-binary-tree",
  "Maximum Sum BST in Binary Tree": "maximum-sum-bst-in-binary-tree",
  "Generate a String With Characters That Have Odd Counts":
    "generate-a-string-with-characters-that-have-odd-counts",
  "Number of Times Binary String Is Prefix-Aligned":
    "number-of-times-binary-string-is-prefix-aligned",
  "Time Needed to Inform All Employees": "time-needed-to-inform-all-employees",
  "Frog Position After T Seconds": "frog-position-after-t-seconds",
  "Find a Corresponding Node of a Binary Tree in a Clone of That Tree":
    "find-a-corresponding-node-of-a-binary-tree-in-a-clone-of-that-tree",
  "Lucky Numbers in a Matrix": "lucky-numbers-in-a-matrix",
  "Design a Stack With Increment Operation":
    "design-a-stack-with-increment-operation",
  "Balance a Binary Search Tree": "balance-a-binary-search-tree",
  "Maximum Performance of a Team": "maximum-performance-of-a-team",
  "Find the Distance Value Between Two Arrays":
    "find-the-distance-value-between-two-arrays",
  "Cinema Seat Allocation": "cinema-seat-allocation",
  "Sort Integers by The Power Value": "sort-integers-by-the-power-value",
  "Pizza With 3n Slices": "pizza-with-3n-slices",
  "Create Target Array in the Given Order":
    "create-target-array-in-the-given-order",
  "Four Divisors": "four-divisors",
  "Check if There is a Valid Path in a Grid":
    "check-if-there-is-a-valid-path-in-a-grid",
  "Longest Happy Prefix": "longest-happy-prefix",
  "Capital Gain/Loss": "capital-gainloss",
  "Find Lucky Integer in an Array": "find-lucky-integer-in-an-array",
  "Count Number of Teams": "count-number-of-teams",
  "Design Underground System": "design-underground-system",
  "Find All Good Strings": "find-all-good-strings",
  "Count Largest Group": "count-largest-group",
  "Construct K Palindrome Strings": "construct-k-palindrome-strings",
  "Circle and Rectangle Overlapping": "circle-and-rectangle-overlapping",
  "Reducing Dishes": "reducing-dishes",
  "Minimum Subsequence in Non-Increasing Order":
    "minimum-subsequence-in-non-increasing-order",
  "Number of Steps to Reduce a Number in Binary Representation to One":
    "number-of-steps-to-reduce-a-number-in-binary-representation-to-one",
  "Longest Happy String": "longest-happy-string",
  "Stone Game III": "stone-game-iii",
  "Top Travellers": "top-travellers",
  "String Matching in an Array": "string-matching-in-an-array",
  "Queries on a Permutation With Key": "queries-on-a-permutation-with-key",
  "HTML Entity Parser": "html-entity-parser",
  "Number of Ways to Paint N \u00d7 3 Grid": "number-of-ways-to-paint-n-3-grid",
  "Minimum Value to Get Positive Step by Step Sum":
    "minimum-value-to-get-positive-step-by-step-sum",
  "Find the Minimum Number of Fibonacci Numbers Whose Sum Is K":
    "find-the-minimum-number-of-fibonacci-numbers-whose-sum-is-k",
  "The k-th Lexicographical String of All Happy Strings of Length n":
    "the-k-th-lexicographical-string-of-all-happy-strings-of-length-n",
  "Restore The Array": "restore-the-array",
  "Reformat The String": "reformat-the-string",
  "Display Table of Food Orders in a Restaurant":
    "display-table-of-food-orders-in-a-restaurant",
  "Minimum Number of Frogs Croaking": "minimum-number-of-frogs-croaking",
  "Build Array Where You Can Find The Maximum Exactly K Comparisons":
    "build-array-where-you-can-find-the-maximum-exactly-k-comparisons",
  "Maximum Score After Splitting a String":
    "maximum-score-after-splitting-a-string",
  "Maximum Points You Can Obtain from Cards":
    "maximum-points-you-can-obtain-from-cards",
  "Diagonal Traverse II": "diagonal-traverse-ii",
  "Constrained Subsequence Sum": "constrained-subsequence-sum",
  "Kids With the Greatest Number of Candies":
    "kids-with-the-greatest-number-of-candies",
  "Max Difference You Can Get From Changing an Integer":
    "max-difference-you-can-get-from-changing-an-integer",
  "Check If a String Can Break Another String":
    "check-if-a-string-can-break-another-string",
  "Number of Ways to Wear Different Hats to Each Other":
    "number-of-ways-to-wear-different-hats-to-each-other",
  "Destination City": "destination-city",
  "Check If All 1's Are at Least Length K Places Away":
    "check-if-all-1s-are-at-least-length-k-places-away",
  "Longest Continuous Subarray With Absolute Diff Less Than or Equal to Limit":
    "longest-continuous-subarray-with-absolute-diff-less-than-or-equal-to-limit",
  "Find the Kth Smallest Sum of a Matrix With Sorted Rows":
    "find-the-kth-smallest-sum-of-a-matrix-with-sorted-rows",
  "Build an Array With Stack Operations":
    "build-an-array-with-stack-operations",
  "Count Triplets That Can Form Two Arrays of Equal XOR":
    "count-triplets-that-can-form-two-arrays-of-equal-xor",
  "Minimum Time to Collect All Apples in a Tree":
    "minimum-time-to-collect-all-apples-in-a-tree",
  "Number of Ways of Cutting a Pizza": "number-of-ways-of-cutting-a-pizza",
  "Consecutive Characters": "consecutive-characters",
  "Simplified Fractions": "simplified-fractions",
  "Count Good Nodes in Binary Tree": "count-good-nodes-in-binary-tree",
  "Form Largest Integer With Digits That Add up to Target":
    "form-largest-integer-with-digits-that-add-up-to-target",
  "Number of Students Doing Homework at a Given Time":
    "number-of-students-doing-homework-at-a-given-time",
  "Rearrange Words in a Sentence": "rearrange-words-in-a-sentence",
  "People Whose List of Favorite Companies Is Not a Subset of Another List":
    "people-whose-list-of-favorite-companies-is-not-a-subset-of-another-list",
  "Maximum Number of Darts Inside of a Circular Dartboard":
    "maximum-number-of-darts-inside-of-a-circular-dartboard",
  "Check If a Word Occurs As a Prefix of Any Word in a Sentence":
    "check-if-a-word-occurs-as-a-prefix-of-any-word-in-a-sentence",
  "Maximum Number of Vowels in a Substring of Given Length":
    "maximum-number-of-vowels-in-a-substring-of-given-length",
  "Pseudo-Palindromic Paths in a Binary Tree":
    "pseudo-palindromic-paths-in-a-binary-tree",
  "Max Dot Product of Two Subsequences": "max-dot-product-of-two-subsequences",
  "Make Two Arrays Equal by Reversing Subarrays":
    "make-two-arrays-equal-by-reversing-subarrays",
  "Check If a String Contains All Binary Codes of Size K":
    "check-if-a-string-contains-all-binary-codes-of-size-k",
  "Course Schedule IV": "course-schedule-iv",
  "Cherry Pickup II": "cherry-pickup-ii",
  "Maximum Product of Two Elements in an Array":
    "maximum-product-of-two-elements-in-an-array",
  "Maximum Area of a Piece of Cake After Horizontal and Vertical Cuts":
    "maximum-area-of-a-piece-of-cake-after-horizontal-and-vertical-cuts",
  "Reorder Routes to Make All Paths Lead to the City Zero":
    "reorder-routes-to-make-all-paths-lead-to-the-city-zero",
  "Probability of a Two Boxes Having The Same Number of Distinct Balls":
    "probability-of-a-two-boxes-having-the-same-number-of-distinct-balls",
  "Shuffle the Array": "shuffle-the-array",
  "The k Strongest Values in an Array": "the-k-strongest-values-in-an-array",
  "Design Browser History": "design-browser-history",
  "Paint House III": "paint-house-iii",
  "Final Prices With a Special Discount in a Shop":
    "final-prices-with-a-special-discount-in-a-shop",
  "Subrectangle Queries": "subrectangle-queries",
  "Find Two Non-overlapping Sub-arrays Each With Target Sum":
    "find-two-non-overlapping-sub-arrays-each-with-target-sum",
  "Allocate Mailboxes": "allocate-mailboxes",
  "Running Sum of 1d Array": "running-sum-of-1d-array",
  "Least Number of Unique Integers after K Removals":
    "least-number-of-unique-integers-after-k-removals",
  "Minimum Number of Days to Make m Bouquets":
    "minimum-number-of-days-to-make-m-bouquets",
  "Kth Ancestor of a Tree Node": "kth-ancestor-of-a-tree-node",
  "Group Sold Products By The Date": "group-sold-products-by-the-date",
  "XOR Operation in an Array": "xor-operation-in-an-array",
  "Making File Names Unique": "making-file-names-unique",
  "Avoid Flood in The City": "avoid-flood-in-the-city",
  "Find Critical and Pseudo-Critical Edges in Minimum Spanning Tree":
    "find-critical-and-pseudo-critical-edges-in-minimum-spanning-tree",
  "Average Salary Excluding the Minimum and Maximum Salary":
    "average-salary-excluding-the-minimum-and-maximum-salary",
  "The kth Factor of n": "the-kth-factor-of-n",
  "Longest Subarray of 1's After Deleting One Element":
    "longest-subarray-of-1s-after-deleting-one-element",
  "Parallel Courses II": "parallel-courses-ii",
  "Path Crossing": "path-crossing",
  "Check If Array Pairs Are Divisible by k":
    "check-if-array-pairs-are-divisible-by-k",
  "Number of Subsequences That Satisfy the Given Sum Condition":
    "number-of-subsequences-that-satisfy-the-given-sum-condition",
  "Max Value of Equation": "max-value-of-equation",
  "Can Make Arithmetic Progression From Sequence":
    "can-make-arithmetic-progression-from-sequence",
  "Last Moment Before All Ants Fall Out of a Plank":
    "last-moment-before-all-ants-fall-out-of-a-plank",
  "Count Submatrices With All Ones": "count-submatrices-with-all-ones",
  "Minimum Possible Integer After at Most K Adjacent Swaps On Digits":
    "minimum-possible-integer-after-at-most-k-adjacent-swaps-on-digits",
  "Reformat Date": "reformat-date",
  "Range Sum of Sorted Subarray Sums": "range-sum-of-sorted-subarray-sums",
  "Minimum Difference Between Largest and Smallest Value in Three Moves":
    "minimum-difference-between-largest-and-smallest-value-in-three-moves",
  "Stone Game IV": "stone-game-iv",
  "Number of Good Pairs": "number-of-good-pairs",
  "Number of Substrings With Only 1s": "number-of-substrings-with-only-1s",
  "Path with Maximum Probability": "path-with-maximum-probability",
  "Best Position for a Service Centre": "best-position-for-a-service-centre",
  "Water Bottles": "water-bottles",
  "Number of Nodes in the Sub-Tree With the Same Label":
    "number-of-nodes-in-the-sub-tree-with-the-same-label",
  "Maximum Number of Non-Overlapping Substrings":
    "maximum-number-of-non-overlapping-substrings",
  "Find a Value of a Mysterious Function Closest to Target":
    "find-a-value-of-a-mysterious-function-closest-to-target",
  "Count Odd Numbers in an Interval Range":
    "count-odd-numbers-in-an-interval-range",
  "Number of Sub-arrays With Odd Sum": "number-of-sub-arrays-with-odd-sum",
  "Number of Good Ways to Split a String":
    "number-of-good-ways-to-split-a-string",
  "Minimum Number of Increments on Subarrays to Form a Target Array":
    "minimum-number-of-increments-on-subarrays-to-form-a-target-array",
  "Patients With a Condition": "patients-with-a-condition",
  "Shuffle String": "shuffle-string",
  "Minimum Suffix Flips": "minimum-suffix-flips",
  "Number of Good Leaf Nodes Pairs": "number-of-good-leaf-nodes-pairs",
  "String Compression II": "string-compression-ii",
  "Count Good Triplets": "count-good-triplets",
  "Find the Winner of an Array Game": "find-the-winner-of-an-array-game",
  "Minimum Swaps to Arrange a Binary Grid":
    "minimum-swaps-to-arrange-a-binary-grid",
  "Get the Maximum Score": "get-the-maximum-score",
  "Kth Missing Positive Number": "kth-missing-positive-number",
  "Can Convert String in K Moves": "can-convert-string-in-k-moves",
  "Minimum Insertions to Balance a Parentheses String":
    "minimum-insertions-to-balance-a-parentheses-string",
  "Find Longest Awesome Substring": "find-longest-awesome-substring",
  "Make The String Great": "make-the-string-great",
  "Find Kth Bit in Nth Binary String": "find-kth-bit-in-nth-binary-string",
  "Maximum Number of Non-Overlapping Subarrays With Sum Equals Target":
    "maximum-number-of-non-overlapping-subarrays-with-sum-equals-target",
  "Minimum Cost to Cut a Stick": "minimum-cost-to-cut-a-stick",
  "Three Consecutive Odds": "three-consecutive-odds",
  "Minimum Operations to Make Array Equal":
    "minimum-operations-to-make-array-equal",
  "Magnetic Force Between Two Balls": "magnetic-force-between-two-balls",
  "Minimum Number of Days to Eat N Oranges":
    "minimum-number-of-days-to-eat-n-oranges",
  "Thousand Separator": "thousand-separator",
  "Minimum Number of Vertices to Reach All Nodes":
    "minimum-number-of-vertices-to-reach-all-nodes",
  "Minimum Numbers of Function Calls to Make Target Array":
    "minimum-numbers-of-function-calls-to-make-target-array",
  "Detect Cycles in 2D Grid": "detect-cycles-in-2d-grid",
  "Most Visited Sector in  a Circular Track":
    "most-visited-sector-in-a-circular-track",
  "Maximum Number of Coins You Can Get": "maximum-number-of-coins-you-can-get",
  "Find Latest Group of Size M": "find-latest-group-of-size-m",
  "Stone Game V": "stone-game-v",
  "Detect Pattern of Length M Repeated K or More Times":
    "detect-pattern-of-length-m-repeated-k-or-more-times",
  "Maximum Length of Subarray With Positive Product":
    "maximum-length-of-subarray-with-positive-product",
  "Minimum Number of Days to Disconnect Island":
    "minimum-number-of-days-to-disconnect-island",
  "Number of Ways to Reorder Array to Get Same BST":
    "number-of-ways-to-reorder-array-to-get-same-bst",
  "Matrix Diagonal Sum": "matrix-diagonal-sum",
  "Number of Ways to Split a String": "number-of-ways-to-split-a-string",
  "Shortest Subarray to be Removed to Make Array Sorted":
    "shortest-subarray-to-be-removed-to-make-array-sorted",
  "Count All Possible Routes": "count-all-possible-routes",
  "Replace All ?'s to Avoid Consecutive Repeating Characters":
    "replace-all-s-to-avoid-consecutive-repeating-characters",
  "Number of Ways Where Square of Number Is Equal to Product of Two Numbers":
    "number-of-ways-where-square-of-number-is-equal-to-product-of-two-numbers",
  "Minimum Time to Make Rope Colorful": "minimum-time-to-make-rope-colorful",
  "Remove Max Number of Edges to Keep Graph Fully Traversable":
    "remove-max-number-of-edges-to-keep-graph-fully-traversable",
  "Customer Who Visited but Did Not Make Any Transactions":
    "customer-who-visited-but-did-not-make-any-transactions",
  "Special Positions in a Binary Matrix":
    "special-positions-in-a-binary-matrix",
  "Count Unhappy Friends": "count-unhappy-friends",
  "Min Cost to Connect All Points": "min-cost-to-connect-all-points",
  "Check If String Is Transformable With Substring Sort Operations":
    "check-if-string-is-transformable-with-substring-sort-operations",
  "Bank Account Summary II": "bank-account-summary-ii",
  "Sum of All Odd Length Subarrays": "sum-of-all-odd-length-subarrays",
  "Maximum Sum Obtained of Any Permutation":
    "maximum-sum-obtained-of-any-permutation",
  "Make Sum Divisible by P": "make-sum-divisible-by-p",
  "Strange Printer II": "strange-printer-ii",
  "Rearrange Spaces Between Words": "rearrange-spaces-between-words",
  "Split a String Into the Max Number of Unique Substrings":
    "split-a-string-into-the-max-number-of-unique-substrings",
  "Maximum Non Negative Product in a Matrix":
    "maximum-non-negative-product-in-a-matrix",
  "Minimum Cost to Connect Two Groups of Points":
    "minimum-cost-to-connect-two-groups-of-points",
  "Crawler Log Folder": "crawler-log-folder",
  "Maximum Profit of Operating a Centennial Wheel":
    "maximum-profit-of-operating-a-centennial-wheel",
  "Throne Inheritance": "throne-inheritance",
  "Maximum Number of Achievable Transfer Requests":
    "maximum-number-of-achievable-transfer-requests",
  "Design Parking System": "design-parking-system",
  "Alert Using Same Key-Card Three or More Times in a One Hour Period":
    "alert-using-same-key-card-three-or-more-times-in-a-one-hour-period",
  "Find Valid Matrix Given Row and Column Sums":
    "find-valid-matrix-given-row-and-column-sums",
  "Find Servers That Handled Most Number of Requests":
    "find-servers-that-handled-most-number-of-requests",
  "Special Array With X Elements Greater Than or Equal X":
    "special-array-with-x-elements-greater-than-or-equal-x",
  "Even Odd Tree": "even-odd-tree",
  "Maximum Number of Visible Points": "maximum-number-of-visible-points",
  "Minimum One Bit Operations to Make Integers Zero":
    "minimum-one-bit-operations-to-make-integers-zero",
  "Maximum Nesting Depth of the Parentheses":
    "maximum-nesting-depth-of-the-parentheses",
  "Maximal Network Rank": "maximal-network-rank",
  "Split Two Strings to Make Palindrome":
    "split-two-strings-to-make-palindrome",
  "Count Subtrees With Max Distance Between Cities":
    "count-subtrees-with-max-distance-between-cities",
  "Mean of Array After Removing Some Elements":
    "mean-of-array-after-removing-some-elements",
  "Coordinate With Maximum Network Quality":
    "coordinate-with-maximum-network-quality",
  "Number of Sets of K Non-Overlapping Line Segments":
    "number-of-sets-of-k-non-overlapping-line-segments",
  "Fancy Sequence": "fancy-sequence",
  "Largest Substring Between Two Equal Characters":
    "largest-substring-between-two-equal-characters",
  "Lexicographically Smallest String After Applying Operations":
    "lexicographically-smallest-string-after-applying-operations",
  "Best Team With No Conflicts": "best-team-with-no-conflicts",
  "Graph Connectivity With Threshold": "graph-connectivity-with-threshold",
  "Slowest Key": "slowest-key",
  "Arithmetic Subarrays": "arithmetic-subarrays",
  "Path With Minimum Effort": "path-with-minimum-effort",
  "Rank Transform of a Matrix": "rank-transform-of-a-matrix",
  "Sort Array by Increasing Frequency": "sort-array-by-increasing-frequency",
  "Widest Vertical Area Between Two Points Containing No Points":
    "widest-vertical-area-between-two-points-containing-no-points",
  "Count Substrings That Differ by One Character":
    "count-substrings-that-differ-by-one-character",
  "Number of Ways to Form a Target String Given a Dictionary":
    "number-of-ways-to-form-a-target-string-given-a-dictionary",
  "Check Array Formation Through Concatenation":
    "check-array-formation-through-concatenation",
  "Count Sorted Vowel Strings": "count-sorted-vowel-strings",
  "Furthest Building You Can Reach": "furthest-building-you-can-reach",
  "Kth Smallest Instructions": "kth-smallest-instructions",
  "Get Maximum in Generated Array": "get-maximum-in-generated-array",
  "Minimum Deletions to Make Character Frequencies Unique":
    "minimum-deletions-to-make-character-frequencies-unique",
  "Sell Diminishing-Valued Colored Balls":
    "sell-diminishing-valued-colored-balls",
  "Create Sorted Array through Instructions":
    "create-sorted-array-through-instructions",
  "Defuse the Bomb": "defuse-the-bomb",
  "Minimum Deletions to Make String Balanced":
    "minimum-deletions-to-make-string-balanced",
  "Minimum Jumps to Reach Home": "minimum-jumps-to-reach-home",
  "Distribute Repeating Integers": "distribute-repeating-integers",
  "Design an Ordered Stream": "design-an-ordered-stream",
  "Determine if Two Strings Are Close": "determine-if-two-strings-are-close",
  "Minimum Operations to Reduce X to Zero":
    "minimum-operations-to-reduce-x-to-zero",
  "Maximize Grid Happiness": "maximize-grid-happiness",
  "Check If Two String Arrays are Equivalent":
    "check-if-two-string-arrays-are-equivalent",
  "Smallest String With A Given Numeric Value":
    "smallest-string-with-a-given-numeric-value",
  "Ways to Make a Fair Array": "ways-to-make-a-fair-array",
  "Minimum Initial Energy to Finish Tasks":
    "minimum-initial-energy-to-finish-tasks",
  "Fix Names in a Table": "fix-names-in-a-table",
  "Maximum Repeating Substring": "maximum-repeating-substring",
  "Merge In Between Linked Lists": "merge-in-between-linked-lists",
  "Design Front Middle Back Queue": "design-front-middle-back-queue",
  "Minimum Number of Removals to Make Mountain Array":
    "minimum-number-of-removals-to-make-mountain-array",
  "Richest Customer Wealth": "richest-customer-wealth",
  "Find the Most Competitive Subsequence":
    "find-the-most-competitive-subsequence",
  "Minimum Moves to Make Array Complementary":
    "minimum-moves-to-make-array-complementary",
  "Minimize Deviation in Array": "minimize-deviation-in-array",
  "Goal Parser Interpretation": "goal-parser-interpretation",
  "Max Number of K-Sum Pairs": "max-number-of-k-sum-pairs",
  "Concatenation of Consecutive Binary Numbers":
    "concatenation-of-consecutive-binary-numbers",
  "Minimum Incompatibility": "minimum-incompatibility",
  "Count the Number of Consistent Strings":
    "count-the-number-of-consistent-strings",
  "Sum of Absolute Differences in a Sorted Array":
    "sum-of-absolute-differences-in-a-sorted-array",
  "Stone Game VI": "stone-game-vi",
  "Delivering Boxes from Storage to Ports":
    "delivering-boxes-from-storage-to-ports",
  "Count of Matches in Tournament": "count-of-matches-in-tournament",
  "Partitioning Into Minimum Number Of Deci-Binary Numbers":
    "partitioning-into-minimum-number-of-deci-binary-numbers",
  "Stone Game VII": "stone-game-vii",
  "Maximum Height by Stacking Cuboids ": "maximum-height-by-stacking-cuboids",
  "Daily Leads and Partners": "daily-leads-and-partners",
  "Reformat Phone Number": "reformat-phone-number",
  "Maximum Erasure Value": "maximum-erasure-value",
  "Jump Game VI": "jump-game-vi",
  "Checking Existence of Edge Length Limited Paths":
    "checking-existence-of-edge-length-limited-paths",
  "Number of Students Unable to Eat Lunch":
    "number-of-students-unable-to-eat-lunch",
  "Average Waiting Time": "average-waiting-time",
  "Maximum Binary String After Change": "maximum-binary-string-after-change",
  "Minimum Adjacent Swaps for K Consecutive Ones":
    "minimum-adjacent-swaps-for-k-consecutive-ones",
  "Determine if String Halves Are Alike":
    "determine-if-string-halves-are-alike",
  "Maximum Number of Eaten Apples": "maximum-number-of-eaten-apples",
  "Where Will the Ball Fall": "where-will-the-ball-fall",
  "Maximum XOR With an Element From Array":
    "maximum-xor-with-an-element-from-array",
  "Maximum Units on a Truck": "maximum-units-on-a-truck",
  "Count Good Meals": "count-good-meals",
  "Ways to Split Array Into Three Subarrays":
    "ways-to-split-array-into-three-subarrays",
  "Minimum Operations to Make a Subsequence":
    "minimum-operations-to-make-a-subsequence",
  "Calculate Money in Leetcode Bank": "calculate-money-in-leetcode-bank",
  "Maximum Score From Removing Substrings":
    "maximum-score-from-removing-substrings",
  "Construct the Lexicographically Largest Valid Sequence":
    "construct-the-lexicographically-largest-valid-sequence",
  "Number Of Ways To Reconstruct A Tree":
    "number-of-ways-to-reconstruct-a-tree",
  "Decode XORed Array": "decode-xored-array",
  "Swapping Nodes in a Linked List": "swapping-nodes-in-a-linked-list",
  "Minimize Hamming Distance After Swap Operations":
    "minimize-hamming-distance-after-swap-operations",
  "Find Minimum Time to Finish All Jobs":
    "find-minimum-time-to-finish-all-jobs",
  "Number Of Rectangles That Can Form The Largest Square":
    "number-of-rectangles-that-can-form-the-largest-square",
  "Tuple with Same Product": "tuple-with-same-product",
  "Largest Submatrix With Rearrangements":
    "largest-submatrix-with-rearrangements",
  "Cat and Mouse II": "cat-and-mouse-ii",
  "Find Followers Count": "find-followers-count",
  "Find the Highest Altitude": "find-the-highest-altitude",
  "Minimum Number of People to Teach": "minimum-number-of-people-to-teach",
  "Decode XORed Permutation": "decode-xored-permutation",
  "Count Ways to Make Array With Product":
    "count-ways-to-make-array-with-product",
  "Latest Time by Replacing Hidden Digits":
    "latest-time-by-replacing-hidden-digits",
  "Change Minimum Characters to Satisfy One of Three Conditions":
    "change-minimum-characters-to-satisfy-one-of-three-conditions",
  "Find Kth Largest XOR Coordinate Value":
    "find-kth-largest-xor-coordinate-value",
  "Building Boxes": "building-boxes",
  "Find Total Time Spent by Each Employee":
    "find-total-time-spent-by-each-employee",
  "Maximum Number of Balls in a Box": "maximum-number-of-balls-in-a-box",
  "Restore the Array From Adjacent Pairs":
    "restore-the-array-from-adjacent-pairs",
  "Can You Eat Your Favorite Candy on Your Favorite Day?":
    "can-you-eat-your-favorite-candy-on-your-favorite-day",
  "Palindrome Partitioning IV": "palindrome-partitioning-iv",
  "Sum of Unique Elements": "sum-of-unique-elements",
  "Maximum Absolute Sum of Any Subarray":
    "maximum-absolute-sum-of-any-subarray",
  "Minimum Length of String After Deleting Similar Ends":
    "minimum-length-of-string-after-deleting-similar-ends",
  "Maximum Number of Events That Can Be Attended II":
    "maximum-number-of-events-that-can-be-attended-ii",
  "Check if Array Is Sorted and Rotated":
    "check-if-array-is-sorted-and-rotated",
  "Maximum Score From Removing Stones": "maximum-score-from-removing-stones",
  "Largest Merge Of Two Strings": "largest-merge-of-two-strings",
  "Closest Subsequence Sum": "closest-subsequence-sum",
  "Recyclable and Low Fat Products": "recyclable-and-low-fat-products",
  "Minimum Changes To Make Alternating Binary String":
    "minimum-changes-to-make-alternating-binary-string",
  "Count Number of Homogenous Substrings":
    "count-number-of-homogenous-substrings",
  "Minimum Limit of Balls in a Bag": "minimum-limit-of-balls-in-a-bag",
  "Minimum Degree of a Connected Trio in a Graph":
    "minimum-degree-of-a-connected-trio-in-a-graph",
  "Longest Nice Substring": "longest-nice-substring",
  "Form Array by Concatenating Subarrays of Another Array":
    "form-array-by-concatenating-subarrays-of-another-array",
  "Map of Highest Peak": "map-of-highest-peak",
  "Tree of Coprimes": "tree-of-coprimes",
  "Merge Strings Alternately": "merge-strings-alternately",
  "Minimum Number of Operations to Move All Balls to Each Box":
    "minimum-number-of-operations-to-move-all-balls-to-each-box",
  "Maximum Score from Performing Multiplication Operations":
    "maximum-score-from-performing-multiplication-operations",
  "Maximize Palindrome Length From Subsequences":
    "maximize-palindrome-length-from-subsequences",
  "Count Items Matching a Rule": "count-items-matching-a-rule",
  "Closest Dessert Cost": "closest-dessert-cost",
  "Equal Sum Arrays With Minimum Number of Operations":
    "equal-sum-arrays-with-minimum-number-of-operations",
  "Car Fleet II": "car-fleet-ii",
  "Find Nearest Point That Has the Same X or Y Coordinate":
    "find-nearest-point-that-has-the-same-x-or-y-coordinate",
  "Check if Number is a Sum of Powers of Three":
    "check-if-number-is-a-sum-of-powers-of-three",
  "Sum of Beauty of All Substrings": "sum-of-beauty-of-all-substrings",
  "Count Pairs Of Nodes": "count-pairs-of-nodes",
  "Check if Binary String Has at Most One Segment of Ones":
    "check-if-binary-string-has-at-most-one-segment-of-ones",
  "Minimum Elements to Add to Form a Given Sum":
    "minimum-elements-to-add-to-form-a-given-sum",
  "Number of Restricted Paths From First to Last Node":
    "number-of-restricted-paths-from-first-to-last-node",
  "Make the XOR of All Segments Equal to Zero":
    "make-the-xor-of-all-segments-equal-to-zero",
  "Check if One String Swap Can Make Strings Equal":
    "check-if-one-string-swap-can-make-strings-equal",
  "Find Center of Star Graph": "find-center-of-star-graph",
  "Maximum Average Pass Ratio": "maximum-average-pass-ratio",
  "Maximum Score of a Good Subarray": "maximum-score-of-a-good-subarray",
  "Rearrange Products Table": "rearrange-products-table",
  "Second Largest Digit in a String": "second-largest-digit-in-a-string",
  "Design Authentication Manager": "design-authentication-manager",
  "Maximum Number of Consecutive Values You Can Make":
    "maximum-number-of-consecutive-values-you-can-make",
  "Maximize Score After N Operations": "maximize-score-after-n-operations",
  "Maximum Ascending Subarray Sum": "maximum-ascending-subarray-sum",
  "Number of Orders in the Backlog": "number-of-orders-in-the-backlog",
  "Maximum Value at a Given Index in a Bounded Array":
    "maximum-value-at-a-given-index-in-a-bounded-array",
  "Count Pairs With XOR in a Range": "count-pairs-with-xor-in-a-range",
  "Number of Different Integers in a String":
    "number-of-different-integers-in-a-string",
  "Minimum Number of Operations to Reinitialize a Permutation":
    "minimum-number-of-operations-to-reinitialize-a-permutation",
  "Evaluate the Bracket Pairs of a String":
    "evaluate-the-bracket-pairs-of-a-string",
  "Maximize Number of Nice Divisors": "maximize-number-of-nice-divisors",
  "Determine Color of a Chessboard Square":
    "determine-color-of-a-chessboard-square",
  "Sentence Similarity III": "sentence-similarity-iii",
  "Count Nice Pairs in an Array": "count-nice-pairs-in-an-array",
  "Maximum Number of Groups Getting Fresh Donuts":
    "maximum-number-of-groups-getting-fresh-donuts",
  "Truncate Sentence": "truncate-sentence",
  "Finding the Users Active Minutes": "finding-the-users-active-minutes",
  "Minimum Absolute Sum Difference": "minimum-absolute-sum-difference",
  "Number of Different Subsequences GCDs":
    "number-of-different-subsequences-gcds",
  "Sign of the Product of an Array": "sign-of-the-product-of-an-array",
  "Find the Winner of the Circular Game":
    "find-the-winner-of-the-circular-game",
  "Minimum Sideway Jumps": "minimum-sideway-jumps",
  "Finding MK Average": "finding-mk-average",
  "Minimum Operations to Make the Array Increasing":
    "minimum-operations-to-make-the-array-increasing",
  "Queries on Number of Points Inside a Circle":
    "queries-on-number-of-points-inside-a-circle",
  "Maximum XOR for Each Query": "maximum-xor-for-each-query",
  "Minimum Number of Operations to Make String Sorted":
    "minimum-number-of-operations-to-make-string-sorted",
  "Check if the Sentence Is Pangram": "check-if-the-sentence-is-pangram",
  "Maximum Ice Cream Bars": "maximum-ice-cream-bars",
  "Single-Threaded CPU": "single-threaded-cpu",
  "Find XOR Sum of All Pairs Bitwise AND":
    "find-xor-sum-of-all-pairs-bitwise-and",
  "Sum of Digits in Base K": "sum-of-digits-in-base-k",
  "Frequency of the Most Frequent Element":
    "frequency-of-the-most-frequent-element",
  "Longest Substring Of All Vowels in Order":
    "longest-substring-of-all-vowels-in-order",
  "Maximum Building Height": "maximum-building-height",
  "Replace All Digits with Characters": "replace-all-digits-with-characters",
  "Seat Reservation Manager": "seat-reservation-manager",
  "Maximum Element After Decreasing and Rearranging":
    "maximum-element-after-decreasing-and-rearranging",
  "Closest Room": "closest-room",
  "Minimum Distance to the Target Element":
    "minimum-distance-to-the-target-element",
  "Splitting a String Into Descending Consecutive Values":
    "splitting-a-string-into-descending-consecutive-values",
  "Minimum Adjacent Swaps to Reach the Kth Smallest Number":
    "minimum-adjacent-swaps-to-reach-the-kth-smallest-number",
  "Minimum Interval to Include Each Query":
    "minimum-interval-to-include-each-query",
  "Maximum Population Year": "maximum-population-year",
  "Maximum Distance Between a Pair of Values":
    "maximum-distance-between-a-pair-of-values",
  "Maximum Subarray Min-Product": "maximum-subarray-min-product",
  "Largest Color Value in a Directed Graph":
    "largest-color-value-in-a-directed-graph",
  "Sorting the Sentence": "sorting-the-sentence",
  "Incremental Memory Leak": "incremental-memory-leak",
  "Rotating the Box": "rotating-the-box",
  "Sum of Floored Pairs": "sum-of-floored-pairs",
  "Sum of All Subset XOR Totals": "sum-of-all-subset-xor-totals",
  "Minimum Number of Swaps to Make the Binary String Alternating":
    "minimum-number-of-swaps-to-make-the-binary-string-alternating",
  "Finding Pairs With a Certain Sum": "finding-pairs-with-a-certain-sum",
  "Number of Ways to Rearrange Sticks With K Sticks Visible":
    "number-of-ways-to-rearrange-sticks-with-k-sticks-visible",
  "Longer Contiguous Segments of Ones than Zeros":
    "longer-contiguous-segments-of-ones-than-zeros",
  "Minimum Speed to Arrive on Time": "minimum-speed-to-arrive-on-time",
  "Jump Game VII": "jump-game-vii",
  "Stone Game VIII": "stone-game-viii",
  "Calculate Special Bonus": "calculate-special-bonus",
  "Substrings of Size Three with Distinct Characters":
    "substrings-of-size-three-with-distinct-characters",
  "Minimize Maximum Pair Sum in Array": "minimize-maximum-pair-sum-in-array",
  "Get Biggest Three Rhombus Sums in a Grid":
    "get-biggest-three-rhombus-sums-in-a-grid",
  "Minimum XOR Sum of Two Arrays": "minimum-xor-sum-of-two-arrays",
  "Check if Word Equals Summation of Two Words":
    "check-if-word-equals-summation-of-two-words",
  "Maximum Value after Insertion": "maximum-value-after-insertion",
  "Process Tasks Using Servers": "process-tasks-using-servers",
  "Minimum Skips to Arrive at Meeting On Time":
    "minimum-skips-to-arrive-at-meeting-on-time",
  "Egg Drop With 2 Eggs and N Floors": "egg-drop-with-2-eggs-and-n-floors",
  "Determine Whether Matrix Can Be Obtained By Rotation":
    "determine-whether-matrix-can-be-obtained-by-rotation",
  "Reduction Operations to Make the Array Elements Equal":
    "reduction-operations-to-make-the-array-elements-equal",
  "Minimum Number of Flips to Make the Binary String Alternating":
    "minimum-number-of-flips-to-make-the-binary-string-alternating",
  "Minimum Space Wasted From Packaging": "minimum-space-wasted-from-packaging",
  "The Latest Login in 2020": "the-latest-login-in-2020",
  "Check if All the Integers in a Range Are Covered":
    "check-if-all-the-integers-in-a-range-are-covered",
  "Find the Student that Will Replace the Chalk":
    "find-the-student-that-will-replace-the-chalk",
  "Largest Magic Square": "largest-magic-square",
  "Minimum Cost to Change the Final Value of Expression":
    "minimum-cost-to-change-the-final-value-of-expression",
  "Redistribute Characters to Make All Strings Equal":
    "redistribute-characters-to-make-all-strings-equal",
  "Maximum Number of Removable Characters":
    "maximum-number-of-removable-characters",
  "Merge Triplets to Form Target Triplet":
    "merge-triplets-to-form-target-triplet",
  "The Earliest and Latest Rounds Where Players Compete":
    "the-earliest-and-latest-rounds-where-players-compete",
  "Find a Peak Element II": "find-a-peak-element-ii",
  "Largest Odd Number in String": "largest-odd-number-in-string",
  "The Number of Full Rounds You Have Played":
    "the-number-of-full-rounds-you-have-played",
  "Count Sub Islands": "count-sub-islands",
  "Minimum Absolute Difference Queries": "minimum-absolute-difference-queries",
  "Remove One Element to Make the Array Strictly Increasing":
    "remove-one-element-to-make-the-array-strictly-increasing",
  "Remove All Occurrences of a Substring":
    "remove-all-occurrences-of-a-substring",
  "Maximum Alternating Subsequence Sum": "maximum-alternating-subsequence-sum",
  "Design Movie Rental System": "design-movie-rental-system",
  "Maximum Product Difference Between Two Pairs":
    "maximum-product-difference-between-two-pairs",
  "Cyclically Rotating a Grid": "cyclically-rotating-a-grid",
  "Number of Wonderful Substrings": "number-of-wonderful-substrings",
  "Count Ways to Build Rooms in an Ant Colony":
    "count-ways-to-build-rooms-in-an-ant-colony",
  "Build Array from Permutation": "build-array-from-permutation",
  "Eliminate Maximum Number of Monsters":
    "eliminate-maximum-number-of-monsters",
  "Count Good Numbers": "count-good-numbers",
  "Longest Common Subpath": "longest-common-subpath",
  "Count Square Sum Triples": "count-square-sum-triples",
  "Nearest Exit from Entrance in Maze": "nearest-exit-from-entrance-in-maze",
  "Sum Game": "sum-game",
  "Minimum Cost to Reach Destination in Time":
    "minimum-cost-to-reach-destination-in-time",
  "Concatenation of Array": "concatenation-of-array",
  "Unique Length-3 Palindromic Subsequences":
    "unique-length-3-palindromic-subsequences",
  "Painting a Grid With Three Different Colors":
    "painting-a-grid-with-three-different-colors",
  "Merge BSTs to Create Single BST": "merge-bsts-to-create-single-bst",
  "Maximum Number of Words You Can Type":
    "maximum-number-of-words-you-can-type",
  "Add Minimum Number of Rungs": "add-minimum-number-of-rungs",
  "Maximum Number of Points with Cost": "maximum-number-of-points-with-cost",
  "Maximum Genetic Difference Query": "maximum-genetic-difference-query",
  "Check if All Characters Have Equal Number of Occurrences":
    "check-if-all-characters-have-equal-number-of-occurrences",
  "The Number of the Smallest Unoccupied Chair":
    "the-number-of-the-smallest-unoccupied-chair",
  "Describe the Painting": "describe-the-painting",
  "Number of Visible People in a Queue": "number-of-visible-people-in-a-queue",
  "Sum of Digits of String After Convert":
    "sum-of-digits-of-string-after-convert",
  "Largest Number After Mutating Substring":
    "largest-number-after-mutating-substring",
  "Maximum Compatibility Score Sum": "maximum-compatibility-score-sum",
  "Delete Duplicate Folders in System": "delete-duplicate-folders-in-system",
  "Three Divisors": "three-divisors",
  "Maximum Number of Weeks for Which You Can Work":
    "maximum-number-of-weeks-for-which-you-can-work",
  "Minimum Garden Perimeter to Collect Enough Apples":
    "minimum-garden-perimeter-to-collect-enough-apples",
  "Count Number of Special Subsequences":
    "count-number-of-special-subsequences",
  "Delete Characters to Make Fancy String":
    "delete-characters-to-make-fancy-string",
  "Check if Move is Legal": "check-if-move-is-legal",
  "Minimum Total Space Wasted With K Resizing Operations":
    "minimum-total-space-wasted-with-k-resizing-operations",
  "Maximum Product of the Length of Two Palindromic Substrings":
    "maximum-product-of-the-length-of-two-palindromic-substrings",
  "Check If String Is a Prefix of Array":
    "check-if-string-is-a-prefix-of-array",
  "Remove Stones to Minimize the Total": "remove-stones-to-minimize-the-total",
  "Minimum Number of Swaps to Make the String Balanced":
    "minimum-number-of-swaps-to-make-the-string-balanced",
  "Find the Longest Valid Obstacle Course at Each Position":
    "find-the-longest-valid-obstacle-course-at-each-position",
  "Employees With Missing Information": "employees-with-missing-information",
  "Number of Strings That Appear as Substrings in Word":
    "number-of-strings-that-appear-as-substrings-in-word",
  "Array With Elements Not Equal to Average of Neighbors":
    "array-with-elements-not-equal-to-average-of-neighbors",
  "Minimum Non-Zero Product of the Array Elements":
    "minimum-non-zero-product-of-the-array-elements",
  "Last Day Where You Can Still Cross": "last-day-where-you-can-still-cross",
  "Find if Path Exists in Graph": "find-if-path-exists-in-graph",
  "Minimum Time to Type Word Using Special Typewriter":
    "minimum-time-to-type-word-using-special-typewriter",
  "Maximum Matrix Sum": "maximum-matrix-sum",
  "Number of Ways to Arrive at Destination":
    "number-of-ways-to-arrive-at-destination",
  "Number of Ways to Separate Numbers": "number-of-ways-to-separate-numbers",
  "Find Greatest Common Divisor of Array":
    "find-greatest-common-divisor-of-array",
  "Find Unique Binary String": "find-unique-binary-string",
  "Minimize the Difference Between Target and Chosen Elements":
    "minimize-the-difference-between-target-and-chosen-elements",
  "Find Array Given Subset Sums": "find-array-given-subset-sums",
  "Minimum Difference Between Highest and Lowest of K Scores":
    "minimum-difference-between-highest-and-lowest-of-k-scores",
  "Find the Kth Largest Integer in the Array":
    "find-the-kth-largest-integer-in-the-array",
  "Minimum Number of Work Sessions to Finish the Tasks":
    "minimum-number-of-work-sessions-to-finish-the-tasks",
  "Number of Unique Good Subsequences": "number-of-unique-good-subsequences",
  "Find the Middle Index in Array": "find-the-middle-index-in-array",
  "Find All Groups of Farmland": "find-all-groups-of-farmland",
  "Operations on Tree": "operations-on-tree",
  "The Number of Good Subsets": "the-number-of-good-subsets",
  "Count Special Quadruplets": "count-special-quadruplets",
  "The Number of Weak Characters in the Game":
    "the-number-of-weak-characters-in-the-game",
  "First Day Where You Have Been in All the Rooms":
    "first-day-where-you-have-been-in-all-the-rooms",
  "GCD Sort of an Array": "gcd-sort-of-an-array",
  "Reverse Prefix of Word": "reverse-prefix-of-word",
  "Number of Pairs of Interchangeable Rectangles":
    "number-of-pairs-of-interchangeable-rectangles",
  "Maximum Product of the Length of Two Palindromic Subsequences":
    "maximum-product-of-the-length-of-two-palindromic-subsequences",
  "Smallest Missing Genetic Value in Each Subtree":
    "smallest-missing-genetic-value-in-each-subtree",
  "Count Number of Pairs With Absolute Difference K":
    "count-number-of-pairs-with-absolute-difference-k",
  "Find Original Array From Doubled Array":
    "find-original-array-from-doubled-array",
  "Maximum Earnings From Taxi": "maximum-earnings-from-taxi",
  "Minimum Number of Operations to Make Array Continuous":
    "minimum-number-of-operations-to-make-array-continuous",
  "Final Value of Variable After Performing Operations":
    "final-value-of-variable-after-performing-operations",
  "Sum of Beauty in the Array": "sum-of-beauty-in-the-array",
  "Detect Squares": "detect-squares",
  "Longest Subsequence Repeated k Times":
    "longest-subsequence-repeated-k-times",
  "Maximum Difference Between Increasing Elements":
    "maximum-difference-between-increasing-elements",
  "Grid Game": "grid-game",
  "Check if Word Can Be Placed In Crossword":
    "check-if-word-can-be-placed-in-crossword",
  "The Score of Students Solving Math Expression":
    "the-score-of-students-solving-math-expression",
  "Convert 1D Array Into 2D Array": "convert-1d-array-into-2d-array",
  "Number of Pairs of Strings With Concatenation Equal to Target":
    "number-of-pairs-of-strings-with-concatenation-equal-to-target",
  "Maximize the Confusion of an Exam": "maximize-the-confusion-of-an-exam",
  "Maximum Number of Ways to Partition an Array":
    "maximum-number-of-ways-to-partition-an-array",
  "Minimum Moves to Convert String": "minimum-moves-to-convert-string",
  "Find Missing Observations": "find-missing-observations",
  "Stone Game IX": "stone-game-ix",
  "Smallest K-Length Subsequence With Occurrences of a Letter":
    "smallest-k-length-subsequence-with-occurrences-of-a-letter",
  "Two Out of Three": "two-out-of-three",
  "Minimum Operations to Make a Uni-Value Grid":
    "minimum-operations-to-make-a-uni-value-grid",
  "Stock Price Fluctuation ": "stock-price-fluctuation",
  "Partition Array Into Two Arrays to Minimize Sum Difference":
    "partition-array-into-two-arrays-to-minimize-sum-difference",
  "Minimum Number of Moves to Seat Everyone":
    "minimum-number-of-moves-to-seat-everyone",
  "Remove Colored Pieces if Both Neighbors are the Same Color":
    "remove-colored-pieces-if-both-neighbors-are-the-same-color",
  "The Time When the Network Becomes Idle":
    "the-time-when-the-network-becomes-idle",
  "Kth Smallest Product of Two Sorted Arrays":
    "kth-smallest-product-of-two-sorted-arrays",
  "Check if Numbers Are Ascending in a Sentence":
    "check-if-numbers-are-ascending-in-a-sentence",
  "Simple Bank System": "simple-bank-system",
  "Count Number of Maximum Bitwise-OR Subsets":
    "count-number-of-maximum-bitwise-or-subsets",
  "Second Minimum Time to Reach Destination":
    "second-minimum-time-to-reach-destination",
  "Number of Valid Words in a Sentence": "number-of-valid-words-in-a-sentence",
  "Next Greater Numerically Balanced Number":
    "next-greater-numerically-balanced-number",
  "Count Nodes With the Highest Score": "count-nodes-with-the-highest-score",
  "Parallel Courses III": "parallel-courses-iii",
  "Kth Distinct String in an Array": "kth-distinct-string-in-an-array",
  "Two Best Non-Overlapping Events": "two-best-non-overlapping-events",
  "Plates Between Candles": "plates-between-candles",
  "Number of Valid Move Combinations On Chessboard":
    "number-of-valid-move-combinations-on-chessboard",
  "Smallest Index With Equal Value": "smallest-index-with-equal-value",
  "Find the Minimum and Maximum Number of Nodes Between Critical Points":
    "find-the-minimum-and-maximum-number-of-nodes-between-critical-points",
  "Minimum Operations to Convert Number":
    "minimum-operations-to-convert-number",
  "Check if an Original String Exists Given Two Encoded Strings":
    "check-if-an-original-string-exists-given-two-encoded-strings",
  "Count Vowel Substrings of a String": "count-vowel-substrings-of-a-string",
  "Vowels of All Substrings": "vowels-of-all-substrings",
  "Minimized Maximum of Products Distributed to Any Store":
    "minimized-maximum-of-products-distributed-to-any-store",
  "Maximum Path Quality of a Graph": "maximum-path-quality-of-a-graph",
  "Check Whether Two Strings are Almost Equivalent":
    "check-whether-two-strings-are-almost-equivalent",
  "Walking Robot Simulation II": "walking-robot-simulation-ii",
  "Most Beautiful Item for Each Query": "most-beautiful-item-for-each-query",
  "Maximum Number of Tasks You Can Assign":
    "maximum-number-of-tasks-you-can-assign",
  "Time Needed to Buy Tickets": "time-needed-to-buy-tickets",
  "Reverse Nodes in Even Length Groups": "reverse-nodes-in-even-length-groups",
  "Decode the Slanted Ciphertext": "decode-the-slanted-ciphertext",
  "Process Restricted Friend Requests": "process-restricted-friend-requests",
  "Two Furthest Houses With Different Colors":
    "two-furthest-houses-with-different-colors",
  "Watering Plants": "watering-plants",
  "Range Frequency Queries": "range-frequency-queries",
  "Sum of k-Mirror Numbers": "sum-of-k-mirror-numbers",
  "Count Common Words With One Occurrence":
    "count-common-words-with-one-occurrence",
  "Minimum Number of Buckets Required to Collect Rainwater from Houses":
    "minimum-number-of-buckets-required-to-collect-rainwater-from-houses",
  "Minimum Cost Homecoming of a Robot in a Grid":
    "minimum-cost-homecoming-of-a-robot-in-a-grid",
  "Count Fertile Pyramids in a Land": "count-fertile-pyramids-in-a-land",
  "Find Target Indices After Sorting Array":
    "find-target-indices-after-sorting-array",
  "K Radius Subarray Averages": "k-radius-subarray-averages",
  "Removing Minimum and Maximum From Array":
    "removing-minimum-and-maximum-from-array",
  "Find All People With Secret": "find-all-people-with-secret",
  "Finding 3-Digit Even Numbers": "finding-3-digit-even-numbers",
  "Delete the Middle Node of a Linked List":
    "delete-the-middle-node-of-a-linked-list",
  "Step-By-Step Directions From a Binary Tree Node to Another":
    "step-by-step-directions-from-a-binary-tree-node-to-another",
  "Valid Arrangement of Pairs": "valid-arrangement-of-pairs",
  "Find Subsequence of Length K With the Largest Sum":
    "find-subsequence-of-length-k-with-the-largest-sum",
  "Find Good Days to Rob the Bank": "find-good-days-to-rob-the-bank",
  "Detonate the Maximum Bombs": "detonate-the-maximum-bombs",
  "Sequentially Ordinal Rank Tracker": "sequentially-ordinal-rank-tracker",
  "Rings and Rods": "rings-and-rods",
  "Sum of Subarray Ranges": "sum-of-subarray-ranges",
  "Watering Plants II": "watering-plants-ii",
  "Maximum Fruits Harvested After at Most K Steps":
    "maximum-fruits-harvested-after-at-most-k-steps",
  "Find First Palindromic String in the Array":
    "find-first-palindromic-string-in-the-array",
  "Adding Spaces to a String": "adding-spaces-to-a-string",
  "Number of Smooth Descent Periods of a Stock":
    "number-of-smooth-descent-periods-of-a-stock",
  "Minimum Operations to Make the Array K-Increasing":
    "minimum-operations-to-make-the-array-k-increasing",
  "Maximum Number of Words Found in Sentences":
    "maximum-number-of-words-found-in-sentences",
  "Find All Possible Recipes from Given Supplies":
    "find-all-possible-recipes-from-given-supplies",
  "Check if a Parentheses String Can Be Valid":
    "check-if-a-parentheses-string-can-be-valid",
  "Abbreviating the Product of a Range": "abbreviating-the-product-of-a-range",
  "A Number After a Double Reversal": "a-number-after-a-double-reversal",
  "Execution of All Suffix Instructions Staying in a Grid":
    "execution-of-all-suffix-instructions-staying-in-a-grid",
  "Intervals Between Identical Elements":
    "intervals-between-identical-elements",
  "Recover the Original Array": "recover-the-original-array",
  "Check if All A's Appears Before All B's":
    "check-if-all-as-appears-before-all-bs",
  "Number of Laser Beams in a Bank": "number-of-laser-beams-in-a-bank",
  "Destroying Asteroids": "destroying-asteroids",
  "Maximum Employees to Be Invited to a Meeting":
    "maximum-employees-to-be-invited-to-a-meeting",
  "Capitalize the Title": "capitalize-the-title",
  "Maximum Twin Sum of a Linked List": "maximum-twin-sum-of-a-linked-list",
  "Longest Palindrome by Concatenating Two Letter Words":
    "longest-palindrome-by-concatenating-two-letter-words",
  "Stamping the Grid": "stamping-the-grid",
  "Check if Every Row and Column Contains All Numbers":
    "check-if-every-row-and-column-contains-all-numbers",
  "Minimum Swaps to Group All 1's Together II":
    "minimum-swaps-to-group-all-1s-together-ii",
  "Count Words Obtained After Adding a Letter":
    "count-words-obtained-after-adding-a-letter",
  "Earliest Possible Day of Full Bloom": "earliest-possible-day-of-full-bloom",
  "Divide a String Into Groups of Size k":
    "divide-a-string-into-groups-of-size-k",
  "Minimum Moves to Reach Target Score": "minimum-moves-to-reach-target-score",
  "Solving Questions With Brainpower": "solving-questions-with-brainpower",
  "Maximum Running Time of N Computers": "maximum-running-time-of-n-computers",
  "Minimum Cost of Buying Candies With Discount":
    "minimum-cost-of-buying-candies-with-discount",
  "Count the Hidden Sequences": "count-the-hidden-sequences",
  "K Highest Ranked Items Within a Price Range":
    "k-highest-ranked-items-within-a-price-range",
  "Number of Ways to Divide a Long Corridor":
    "number-of-ways-to-divide-a-long-corridor",
  "Count Elements With Strictly Smaller and Greater Elements ":
    "count-elements-with-strictly-smaller-and-greater-elements",
  "Rearrange Array Elements by Sign": "rearrange-array-elements-by-sign",
  "Find All Lonely Numbers in the Array":
    "find-all-lonely-numbers-in-the-array",
  "Maximum Good People Based on Statements":
    "maximum-good-people-based-on-statements",
  "Keep Multiplying Found Values by Two":
    "keep-multiplying-found-values-by-two",
  "All Divisions With the Highest Score of a Binary Array":
    "all-divisions-with-the-highest-score-of-a-binary-array",
  "Find Substring With Given Hash Value":
    "find-substring-with-given-hash-value",
  "Groups of Strings": "groups-of-strings",
  "Minimum Sum of Four Digit Number After Splitting Digits":
    "minimum-sum-of-four-digit-number-after-splitting-digits",
  "Partition Array According to Given Pivot":
    "partition-array-according-to-given-pivot",
  "Minimum Cost to Set Cooking Time": "minimum-cost-to-set-cooking-time",
  "Minimum Difference in Sums After Removal of Elements":
    "minimum-difference-in-sums-after-removal-of-elements",
  "Sort Even and Odd Indices Independently":
    "sort-even-and-odd-indices-independently",
  "Smallest Value of the Rearranged Number":
    "smallest-value-of-the-rearranged-number",
  "Design Bitset": "design-bitset",
  "Minimum Time to Remove All Cars Containing Illegal Goods":
    "minimum-time-to-remove-all-cars-containing-illegal-goods",
  "Count Operations to Obtain Zero": "count-operations-to-obtain-zero",
  "Minimum Operations to Make the Array Alternating":
    "minimum-operations-to-make-the-array-alternating",
  "Removing Minimum Number of Magic Beans":
    "removing-minimum-number-of-magic-beans",
  "Maximum AND Sum of Array": "maximum-and-sum-of-array",
  "Count Equal and Divisible Pairs in an Array":
    "count-equal-and-divisible-pairs-in-an-array",
  "Find Three Consecutive Integers That Sum to a Given Number":
    "find-three-consecutive-integers-that-sum-to-a-given-number",
  "Maximum Split of Positive Even Integers":
    "maximum-split-of-positive-even-integers",
  "Count Good Triplets in an Array": "count-good-triplets-in-an-array",
  "Count Integers With Even Digit Sum": "count-integers-with-even-digit-sum",
  "Merge Nodes in Between Zeros": "merge-nodes-in-between-zeros",
  "Construct String With Repeat Limit": "construct-string-with-repeat-limit",
  "Count Array Pairs Divisible by K": "count-array-pairs-divisible-by-k",
  "Counting Words With a Given Prefix": "counting-words-with-a-given-prefix",
  "Minimum Number of Steps to Make Two Strings Anagram II":
    "minimum-number-of-steps-to-make-two-strings-anagram-ii",
  "Minimum Time to Complete Trips": "minimum-time-to-complete-trips",
  "Minimum Time to Finish the Race": "minimum-time-to-finish-the-race",
  "Most Frequent Number Following Key In an Array":
    "most-frequent-number-following-key-in-an-array",
  "Sort the Jumbled Numbers": "sort-the-jumbled-numbers",
  "All Ancestors of a Node in a Directed Acyclic Graph":
    "all-ancestors-of-a-node-in-a-directed-acyclic-graph",
  "Minimum Number of Moves to Make Palindrome":
    "minimum-number-of-moves-to-make-palindrome",
  "Cells in a Range on an Excel Sheet": "cells-in-a-range-on-an-excel-sheet",
  "Append K Integers With Minimal Sum": "append-k-integers-with-minimal-sum",
  "Create Binary Tree From Descriptions":
    "create-binary-tree-from-descriptions",
  "Replace Non-Coprime Numbers in Array":
    "replace-non-coprime-numbers-in-array",
  "Find All K-Distant Indices in an Array":
    "find-all-k-distant-indices-in-an-array",
  "Count Artifacts That Can Be Extracted":
    "count-artifacts-that-can-be-extracted",
  "Maximize the Topmost Element After K Moves":
    "maximize-the-topmost-element-after-k-moves",
  "Minimum Weighted Subgraph With the Required Paths":
    "minimum-weighted-subgraph-with-the-required-paths",
  "Divide Array Into Equal Pairs": "divide-array-into-equal-pairs",
  "Maximize Number of Subsequences in a String":
    "maximize-number-of-subsequences-in-a-string",
  "Minimum Operations to Halve Array Sum":
    "minimum-operations-to-halve-array-sum",
  "Minimum White Tiles After Covering With Carpets":
    "minimum-white-tiles-after-covering-with-carpets",
  "Count Hills and Valleys in an Array": "count-hills-and-valleys-in-an-array",
  "Count Collisions on a Road": "count-collisions-on-a-road",
  "Maximum Points in an Archery Competition":
    "maximum-points-in-an-archery-competition",
  "Longest Substring of One Repeating Character":
    "longest-substring-of-one-repeating-character",
  "Find the Difference of Two Arrays": "find-the-difference-of-two-arrays",
  "Minimum Deletions to Make Array Beautiful":
    "minimum-deletions-to-make-array-beautiful",
  "Find Palindrome With Fixed Length": "find-palindrome-with-fixed-length",
  "Maximum Value of K Coins From Piles": "maximum-value-of-k-coins-from-piles",
  "Minimum Bit Flips to Convert Number": "minimum-bit-flips-to-convert-number",
  "Find Triangular Sum of an Array": "find-triangular-sum-of-an-array",
  "Number of Ways to Select Buildings": "number-of-ways-to-select-buildings",
  "Sum of Scores of Built Strings": "sum-of-scores-of-built-strings",
  "Minimum Number of Operations to Convert Time":
    "minimum-number-of-operations-to-convert-time",
  "Find Players With Zero or One Losses":
    "find-players-with-zero-or-one-losses",
  "Maximum Candies Allocated to K Children":
    "maximum-candies-allocated-to-k-children",
  "Encrypt and Decrypt Strings": "encrypt-and-decrypt-strings",
  "Largest Number After Digit Swaps by Parity":
    "largest-number-after-digit-swaps-by-parity",
  "Minimize Result by Adding Parentheses to Expression":
    "minimize-result-by-adding-parentheses-to-expression",
  "Maximum Product After K Increments": "maximum-product-after-k-increments",
  "Maximum Total Beauty of the Gardens": "maximum-total-beauty-of-the-gardens",
  "Add Two Integers": "add-two-integers",
  "Root Equals Sum of Children": "root-equals-sum-of-children",
  "Find Closest Number to Zero": "find-closest-number-to-zero",
  "Number of Ways to Buy Pens and Pencils":
    "number-of-ways-to-buy-pens-and-pencils",
  "Design an ATM Machine": "design-an-atm-machine",
  "Maximum Score of a Node Sequence": "maximum-score-of-a-node-sequence",
  "Calculate Digit Sum of a String": "calculate-digit-sum-of-a-string",
  "Minimum Rounds to Complete All Tasks":
    "minimum-rounds-to-complete-all-tasks",
  "Maximum Trailing Zeros in a Cornered Path":
    "maximum-trailing-zeros-in-a-cornered-path",
  "Longest Path With Different Adjacent Characters":
    "longest-path-with-different-adjacent-characters",
  "Intersection of Multiple Arrays": "intersection-of-multiple-arrays",
  "Count Lattice Points Inside a Circle":
    "count-lattice-points-inside-a-circle",
  "Count Number of Rectangles Containing Each Point":
    "count-number-of-rectangles-containing-each-point",
  "Number of Flowers in Full Bloom": "number-of-flowers-in-full-bloom",
  "Count Prefixes of a Given String": "count-prefixes-of-a-given-string",
  "Minimum Average Difference": "minimum-average-difference",
  "Count Unguarded Cells in the Grid": "count-unguarded-cells-in-the-grid",
  "Escape the Spreading Fire": "escape-the-spreading-fire",
  "Remove Digit From Number to Maximize Result":
    "remove-digit-from-number-to-maximize-result",
  "Minimum Consecutive Cards to Pick Up":
    "minimum-consecutive-cards-to-pick-up",
  "K Divisible Elements Subarrays": "k-divisible-elements-subarrays",
  "Total Appeal of A String": "total-appeal-of-a-string",
  "Largest 3-Same-Digit Number in String":
    "largest-3-same-digit-number-in-string",
  "Count Nodes Equal to Average of Subtree":
    "count-nodes-equal-to-average-of-subtree",
  "Count Number of Texts": "count-number-of-texts",
  " Check if There Is a Valid Parentheses String Path":
    "check-if-there-is-a-valid-parentheses-string-path",
  "Find the K-Beauty of a Number": "find-the-k-beauty-of-a-number",
  "Number of Ways to Split Array": "number-of-ways-to-split-array",
  "Maximum White Tiles Covered by a Carpet":
    "maximum-white-tiles-covered-by-a-carpet",
  "Substring With Largest Variance": "substring-with-largest-variance",
  "Find Resultant Array After Removing Anagrams":
    "find-resultant-array-after-removing-anagrams",
  "Maximum Consecutive Floors Without Special Floors":
    "maximum-consecutive-floors-without-special-floors",
  "Largest Combination With Bitwise AND Greater Than Zero":
    "largest-combination-with-bitwise-and-greater-than-zero",
  "Count Integers in Intervals": "count-integers-in-intervals",
  "Percentage of Letter in String": "percentage-of-letter-in-string",
  "Maximum Bags With Full Capacity of Rocks":
    "maximum-bags-with-full-capacity-of-rocks",
  "Minimum Lines to Represent a Line Chart":
    "minimum-lines-to-represent-a-line-chart",
  "Sum of Total Strength of Wizards": "sum-of-total-strength-of-wizards",
  "Check if Number Has Equal Digit Count and Digit Value":
    "check-if-number-has-equal-digit-count-and-digit-value",
  "Sender With Largest Word Count": "sender-with-largest-word-count",
  "Maximum Total Importance of Roads": "maximum-total-importance-of-roads",
  "Booking Concert Tickets in Groups": "booking-concert-tickets-in-groups",
  "Rearrange Characters to Make Target String":
    "rearrange-characters-to-make-target-string",
  "Apply Discount to Prices": "apply-discount-to-prices",
  "Steps to Make Array Non-decreasing": "steps-to-make-array-non-decreasing",
  "Minimum Obstacle Removal to Reach Corner":
    "minimum-obstacle-removal-to-reach-corner",
  "Min Max Game": "min-max-game",
  "Partition Array Such That Maximum Difference Is K":
    "partition-array-such-that-maximum-difference-is-k",
  "Replace Elements in an Array": "replace-elements-in-an-array",
  "Design a Text Editor": "design-a-text-editor",
  "Strong Password Checker II": "strong-password-checker-ii",
  "Successful Pairs of Spells and Potions":
    "successful-pairs-of-spells-and-potions",
  "Match Substring After Replacement": "match-substring-after-replacement",
  "Count Subarrays With Score Less Than K":
    "count-subarrays-with-score-less-than-k",
  "Calculate Amount Paid in Taxes": "calculate-amount-paid-in-taxes",
  "Minimum Path Cost in a Grid": "minimum-path-cost-in-a-grid",
  "Fair Distribution of Cookies": "fair-distribution-of-cookies",
  "Naming a Company": "naming-a-company",
  "Greatest English Letter in Upper and Lower Case":
    "greatest-english-letter-in-upper-and-lower-case",
  "Sum of Numbers With Units Digit K": "sum-of-numbers-with-units-digit-k",
  "Longest Binary Subsequence Less Than or Equal to K":
    "longest-binary-subsequence-less-than-or-equal-to-k",
  "Selling Pieces of Wood": "selling-pieces-of-wood",
  "Count Asterisks": "count-asterisks",
  "Count Unreachable Pairs of Nodes in an Undirected Graph":
    "count-unreachable-pairs-of-nodes-in-an-undirected-graph",
  "Maximum XOR After Operations ": "maximum-xor-after-operations",
  "Number of Distinct Roll Sequences": "number-of-distinct-roll-sequences",
  "Check if Matrix Is X-Matrix": "check-if-matrix-is-x-matrix",
  "Count Number of Ways to Place Houses":
    "count-number-of-ways-to-place-houses",
  "Maximum Score Of Spliced Array": "maximum-score-of-spliced-array",
  "Minimum Score After Removals on a Tree":
    "minimum-score-after-removals-on-a-tree",
  "Decode the Message": "decode-the-message",
  "Spiral Matrix IV": "spiral-matrix-iv",
  "Number of People Aware of a Secret": "number-of-people-aware-of-a-secret",
  "Number of Increasing Paths in a Grid":
    "number-of-increasing-paths-in-a-grid",
  "Evaluate Boolean Binary Tree": "evaluate-boolean-binary-tree",
  "The Latest Time to Catch a Bus": "the-latest-time-to-catch-a-bus",
  "Minimum Sum of Squared Difference": "minimum-sum-of-squared-difference",
  "Subarray With Elements Greater Than Varying Threshold":
    "subarray-with-elements-greater-than-varying-threshold",
  "Minimum Amount of Time to Fill Cups": "minimum-amount-of-time-to-fill-cups",
  "Smallest Number in Infinite Set": "smallest-number-in-infinite-set",
  "Move Pieces to Obtain a String": "move-pieces-to-obtain-a-string",
  "Count the Number of Ideal Arrays": "count-the-number-of-ideal-arrays",
  "Maximum Number of Pairs in Array": "maximum-number-of-pairs-in-array",
  "Max Sum of a Pair With Equal Sum of Digits":
    "max-sum-of-a-pair-with-equal-sum-of-digits",
  "Query Kth Smallest Trimmed Number": "query-kth-smallest-trimmed-number",
  "Minimum Deletions to Make Array Divisible":
    "minimum-deletions-to-make-array-divisible",
  "Best Poker Hand": "best-poker-hand",
  "Number of Zero-Filled Subarrays": "number-of-zero-filled-subarrays",
  "Design a Number Container System": "design-a-number-container-system",
  "Shortest Impossible Sequence of Rolls":
    "shortest-impossible-sequence-of-rolls",
  "First Letter to Appear Twice": "first-letter-to-appear-twice",
  "Equal Row and Column Pairs": "equal-row-and-column-pairs",
  "Design a Food Rating System": "design-a-food-rating-system",
  "Number of Excellent Pairs": "number-of-excellent-pairs",
  "Make Array Zero by Subtracting Equal Amounts":
    "make-array-zero-by-subtracting-equal-amounts",
  "Maximum Number of Groups Entering a Competition":
    "maximum-number-of-groups-entering-a-competition",
  "Find Closest Node to Given Two Nodes":
    "find-closest-node-to-given-two-nodes",
  "Longest Cycle in a Graph": "longest-cycle-in-a-graph",
  "Merge Similar Items": "merge-similar-items",
  "Count Number of Bad Pairs": "count-number-of-bad-pairs",
  "Task Scheduler II": "task-scheduler-ii",
  "Minimum Replacements to Sort the Array":
    "minimum-replacements-to-sort-the-array",
  "Number of Arithmetic Triplets": "number-of-arithmetic-triplets",
  "Reachable Nodes With Restrictions": "reachable-nodes-with-restrictions",
  "Check if There is a Valid Partition For The Array":
    "check-if-there-is-a-valid-partition-for-the-array",
  "Longest Ideal Subsequence": "longest-ideal-subsequence",
  "Largest Local Values in a Matrix": "largest-local-values-in-a-matrix",
  "Node With Highest Edge Score": "node-with-highest-edge-score",
  "Construct Smallest Number From DI String":
    "construct-smallest-number-from-di-string",
  "Count Special Integers": "count-special-integers",
  "Minimum Recolors to Get K Consecutive Black Blocks":
    "minimum-recolors-to-get-k-consecutive-black-blocks",
  "Time Needed to Rearrange a Binary String":
    "time-needed-to-rearrange-a-binary-string",
  "Shifting Letters II": "shifting-letters-ii",
  "Maximum Segment Sum After Removals": "maximum-segment-sum-after-removals",
  "Minimum Hours of Training to Win a Competition":
    "minimum-hours-of-training-to-win-a-competition",
  "Largest Palindromic Number": "largest-palindromic-number",
  "Amount of Time for Binary Tree to Be Infected":
    "amount-of-time-for-binary-tree-to-be-infected",
  "Find the K-Sum of an Array": "find-the-k-sum-of-an-array",
  "Longest Subsequence With Limited Sum":
    "longest-subsequence-with-limited-sum",
  "Removing Stars From a String": "removing-stars-from-a-string",
  "Minimum Amount of Time to Collect Garbage":
    "minimum-amount-of-time-to-collect-garbage",
  "Build a Matrix With Conditions": "build-a-matrix-with-conditions",
  "Find Subarrays With Equal Sum": "find-subarrays-with-equal-sum",
  "Strictly Palindromic Number": "strictly-palindromic-number",
  "Maximum Rows Covered by Columns": "maximum-rows-covered-by-columns",
  "Maximum Number of Robots Within Budget":
    "maximum-number-of-robots-within-budget",
  "Check Distances Between Same Letters":
    "check-distances-between-same-letters",
  "Number of Ways to Reach a Position After Exactly k Steps":
    "number-of-ways-to-reach-a-position-after-exactly-k-steps",
  "Longest Nice Subarray": "longest-nice-subarray",
  "Meeting Rooms III": "meeting-rooms-iii",
  "Most Frequent Even Element": "most-frequent-even-element",
  "Optimal Partition of String": "optimal-partition-of-string",
  "Divide Intervals Into Minimum Number of Groups":
    "divide-intervals-into-minimum-number-of-groups",
  "Longest Increasing Subsequence II": "longest-increasing-subsequence-ii",
  "Count Days Spent Together": "count-days-spent-together",
  "Maximum Matching of Players With Trainers":
    "maximum-matching-of-players-with-trainers",
  "Smallest Subarrays With Maximum Bitwise OR":
    "smallest-subarrays-with-maximum-bitwise-or",
  "Minimum Money Required Before Transactions":
    "minimum-money-required-before-transactions",
  "Smallest Even Multiple": "smallest-even-multiple",
  "Length of the Longest Alphabetical Continuous Substring":
    "length-of-the-longest-alphabetical-continuous-substring",
  "Reverse Odd Levels of Binary Tree": "reverse-odd-levels-of-binary-tree",
  "Sum of Prefix Scores of Strings": "sum-of-prefix-scores-of-strings",
  "Sort the People": "sort-the-people",
  "Longest Subarray With Maximum Bitwise AND":
    "longest-subarray-with-maximum-bitwise-and",
  "Find All Good Indices": "find-all-good-indices",
  "Number of Good Paths": "number-of-good-paths",
  "Remove Letter To Equalize Frequency": "remove-letter-to-equalize-frequency",
  "Longest Uploaded Prefix": "longest-uploaded-prefix",
  "Bitwise XOR of All Pairings": "bitwise-xor-of-all-pairings",
  "Number of Pairs Satisfying Inequality":
    "number-of-pairs-satisfying-inequality",
  "Number of Common Factors": "number-of-common-factors",
  "Maximum Sum of an Hourglass": "maximum-sum-of-an-hourglass",
  "Minimize XOR": "minimize-xor",
  "Maximum Deletions on a String": "maximum-deletions-on-a-string",
  "The Employee That Worked on the Longest Task":
    "the-employee-that-worked-on-the-longest-task",
  "Find The Original Array of Prefix Xor":
    "find-the-original-array-of-prefix-xor",
  "Using a Robot to Print the Lexicographically Smallest String":
    "using-a-robot-to-print-the-lexicographically-smallest-string",
  "Paths in Matrix Whose Sum Is Divisible by K":
    "paths-in-matrix-whose-sum-is-divisible-by-k",
  "Number of Valid Clock Times": "number-of-valid-clock-times",
  "Range Product Queries of Powers": "range-product-queries-of-powers",
  "Minimize Maximum of Array": "minimize-maximum-of-array",
  "Create Components With Same Value": "create-components-with-same-value",
  "Largest Positive Integer That Exists With Its Negative":
    "largest-positive-integer-that-exists-with-its-negative",
  "Count Number of Distinct Integers After Reverse Operations":
    "count-number-of-distinct-integers-after-reverse-operations",
  "Sum of Number and Its Reverse": "sum-of-number-and-its-reverse",
  "Count Subarrays With Fixed Bounds": "count-subarrays-with-fixed-bounds",
  "Determine if Two Events Have Conflict":
    "determine-if-two-events-have-conflict",
  "Number of Subarrays With GCD Equal to K":
    "number-of-subarrays-with-gcd-equal-to-k",
  "Minimum Cost to Make Array Equal": "minimum-cost-to-make-array-equal",
  "Minimum Number of Operations to Make Arrays Similar":
    "minimum-number-of-operations-to-make-arrays-similar",
};
