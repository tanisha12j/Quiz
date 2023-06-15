const data =[
    { id:1 ,
      question:"Cin and cout is used in ?",
      answers :[
        {
          text: "C++",
          correct: true,
        },
        {
          text: "JAVA",
          correct: false,
        },
        {
          text: "Python",
          correct: false,
        },
        {
          text: "Javascript",
          correct: false,
        },
      ],},
      { id:2,
        question:"Which one of the following is an application of Stack Data Structure?",
        answers :[
          {
            text: "Managing function call",
            correct: false,
          },
          {
            text: "Stack span problem",
            correct: false,
          },
          {
            text: "ARITHMETIC EXPRESSION VALUE",
            correct: false,
          },
          {
            text: "ALL OF THE ABOVE",
            correct: true,
          },
        ],},
        { id:3 ,
          question:"Which of the following sorting algorithms can be used to sort a random linked list with minimum time complexity?",
          answers :[
            {
              text: "Insertion sort",
              correct: false,
            },
            {
              text: "Quick Sort",
              correct: false,
            },
            {
              text: "Heap Sort",
              correct: false,
            },
            {
              text: "Merge Sort",
              correct: true,
            },
          ],},
          { id:4 ,
            question:"Which of the following standard algorithms is not Dynamic Programming based.",
            answers :[
              {
                text: "Bellman–Ford Algorithm for single source shortest path",
                correct: false,
              },
              {
                text: "0-1 Knapsack problem",
                correct: false,
              },
              {
                text: "Prim's Minimum Spanning Tree",
                correct: true,
              },
              {
                text: "Floyd Warshall Algorithm for all pairs shortest paths",
                correct: false,
              },
            ],},{ id:5,
              question:"Time complexity of binary search is ",
              answers :[
                {
                  text: "O(n)",
                  correct: false,
                },
                {
                  text: "O(logn)",
                  correct: true,
                },
                {
                  text: "O(nlogn)",
                  correct: false,
                },
                {
                  text: "None of above",
                  correct: false,
                },
              ],},{ id:6 ,
                question:"Main memory of a computer system is?",
                
                answers :[
                  {
                    text: "Unrestricted",
                    correct: false,
                  },
                  {
                    text: "Restricted",
                    correct: false,
                  },
                  {
                    text: "Non Volatile",
                    correct: false,
                  },
                  {
                    text: "Volatile",
                    correct: true,
                  },
                ],},{ id:7 ,
                  question:"Thread is ?",
                  answers :[
                    {
                      text: "I/O process",
                      correct: false,
                    },
                    {
                      text: "Multi-process",
                      correct: false,
                    },
                    {
                      text: "Light-weight process",
                      correct: true,
                    },
                    {
                      text: "Heavy-weight process",
                      correct: false,
                    },
                  ],},{ id:8 ,
                    question:"Time complexit of merge sort is?",
                    answers :[
                      {
                        text: "O(logn)",
                        correct: false,
                      },
                      {
                        text: "O(nlog)",
                        correct: true,
                      },
                      {
                        text: "O(n)",
                        correct: false,
                      },
                      {
                        text: "O(n2)",
                        correct: false,
                      },
                    ],},{ id: 9,
                      question:"FIFO scheduling is a type of:",
                      answers :[
                        {
                          text: "Premtive",
                          correct: true,
                        },
                        {
                          text: "Non-Preemtive",
                          correct: false,
                        },
                        {
                          text: "Deciding",
                          correct: false,
                        },
                        {
                          text: "ALL OF THE ABOVE",
                          correct: false,
                        },
                      ],},{ id:10,
                        question:" A systematic procedure for moving the CPU to new process is known as-?",
                        answers :[
                          {
                            text: "Starvation",
                            correct: false,
                          },
                          {
                            text: "Context-Switching",
                            correct: true,
                          },
                          {
                            text: "deadlock",
                            correct: false,
                          },
                          {
                            text: "Synchronization",
                            correct: false,
                          },
                        ],},{ id: 11 ,
                          question:"Which of the following page replacement algorithms suffers from Belady’s anomaly?",
                          answers :[
                            {
                              text: "FIFO",
                              correct: true,
                            },
                            {
                              text: "LRU",
                              correct: false,
                            },
                            {
                              text: "Optimal page replacement",
                              correct: false,
                            },
                            {
                              text: "Both FIFO and LRU",
                              correct: false,
                            },
                          ],},{ id: 12 ,
                            question:"A process which is copied from main memory to secondary memory on the basis of requirement is known as -",
                            answers :[
                              {
                                text: "Demand Paging",
                                correct: true,
                              },
                              {
                                text: "Paging",
                                correct: false,
                              },
                              {
                                text: "Segmentation",
                                correct: false,
                              },
                              {
                                text: "Fragmentation",
                                correct: false,
                              },
                            ],},{ id: 13 ,
                              question:"Which of the following page replacement algorithms suffers from Belady’s anomaly?",
                              answers :[
                                {
                                  text: "FIFO",
                                  correct: false,
                                },
                                {
                                  text: "LRU",
                                  correct: true,
                                },
                                {
                                  text: "Optimal page replacement",
                                  correct: false,
                                },
                                {
                                  text: "Both FIFO and LRU",
                                  correct: false,
                                },
                              ],},{ id: 14,
                                question:"Which of the following are CPU scheduling algorithms?",
                                answers :[
                                  {
                                    text: "Priority scheduling",
                                    correct: false,
                                  },
                                  {
                                    text: "Round robbin",
                                    correct: false,
                                  },
                                  {
                                    text: "Shortest job first",
                                    correct: false,
                                  },
                                  {
                                    text: "ALL OF THE ABOVE",
                                    correct: true,
                                  },
                                ],},{ id:15 ,
                                  question:"Which is not backtracking algo?",
                                  answers :[
                                    {
                                      text: "Tower of hanoi",
                                      correct: true,
                                    },
                                    {
                                      text: "N-Queen Problem",
                                      correct: false,
                                    },
                                    {
                                      text: "Knigth tour problem",
                                      correct: false,
                                    },
                                    {
                                      text: "M-colouring problem",
                                      correct: false,
                                    },
                                  ],},
  ];

  export default data;
