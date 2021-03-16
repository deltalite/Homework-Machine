# Homework Machine
Did you ever wish you had something that could do your homework for you? If so, I hope you perservered, did it yourself and kept your academic integrity intact. But for those who still wish for a homework machine, that is what I plan on building in this project. Although we might see solid results for this project (since we'll using sophisticated models like transformers), I have a feeling high school and university students won't find this practical. That said, I hope this project will interest anyone testing it out (although it's not at that stage yet).

## Objective
The objective of this project is to train a model to answer questions given context (implicitly or explicitly). I plan to start off with learning how to do properly interact with a pre-trained model (albert) and tune it with the Stanford Question Answering Dataset (SQuAD). 

### Steps
0. Set up pre-trained ALBERT model and see how it works. Additional models can be added later.
1. Ingest `context` and `question` via string (Jupyter notebook)
2. Create logic to look up content on Wikipedia via `wikipedia` package based on question
3. Create a Node.js web application incorporating this same functionality
4. Integrate image uploads and OCRs for easier provision of `context` 

My personal objectives for this project are somewhat two-fold. I have the data science aspect of my project and the web development side:

#### Data Science Objectives
* Dabble in transfer learning (step 0)
* Look into ensemble learning methodology (step 0)
* Work with pretrained models (step 1)
* Learn techniques associated with search (step 2)

#### Web Development Objectives
* Learn node.js (my knowledge is pretty basic as is) (step 3)
* Set up a web application with APIs and routing (step 3)
* Deal with I/O of image files and OCRs (step 4)


