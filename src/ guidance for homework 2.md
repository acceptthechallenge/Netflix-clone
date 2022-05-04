Model answers / guidance for homework 2

As always, be generous with half point for partially correct answers.  Typically you should remove half a mark for any mistake, unless egregious or totally off base.  Usually, each bolded word in the question corresponds to one point (or one equal portion of the points allocated to the question in the margin.)

1. a) They just need to name anything that the classifier could be used for.  Examples include: college admissions, identifying students who need extra help, targeted advertising for a software system which helps students in math, career counseling, etc etc...

1. b) They just need to name any ethical issue for this classifier. Examples include: privacy violations regarding their grades (possibly relating to FERPA regulations), the use of the sex attribute in the classifier could lead to gender discrimination in the model, potential abuse of the predictions made by the system such as using it for hiring decisions in a non-transparent way, hyper-parameter tuning based on test set performance could inflate expectations on the model's performance, etc etc...

1. c) Example answer: A decision tree classifier is a tree-structured model which aims to predict a class label.  Each node in the tree corresponds to a query on one of the attributes' values, and the leaves of the tree made a prediction on the class.  In this case, the class label is whether the student's math grade is above or below average, and the tree is trained on a dataset to predict this label.

1. d) Example answer: Entropy is a measure of information or uncertainty.  For decision trees, a difference in entropy is used to calculate how informative each attribute is in order to choose the best attribute to split on next.

Question 2: For the entropy questions, if they use the wrong base for the entropy only take half a point off, once, in the first instance that the mistake is made.
As stated in the question, out of 20 instances, 11 are aboveAverage and 9 are belowAverage.  So p1 is 11/20, p2 is 9/20, entropy is -11/20 * log2(11/20) - 9/20 * log2(9/20) = 0.993.

2. a) Out of 11 female students, 6 are aboveAverage and 5 are belowAverage. So p1 is 6/11 and p2 is 5/11. Students need to calculate p2 only.

2. b) Entropy is -6/11 * log2(6/11) - 5/11 * log2(5/11) = 0.994.

2. c) Out of 9 male students, 5 are aboveAverage and 4 are belowAverage.  So p1 is 5/9 and p2 is 4/9. Entropy is -5/9 * log2(5/9) - 4/9 * log2(4/9) = 0.991

2. d) p(male) = 9/20

2. e) IG = 0.993 - (11/20 * 0.994 + 9/20 * 0.991) = 0.00035  (This is a small number. The exact answer they get may vary depending on the number of decimal places they specified above and how they did rounding, which is totally fine even if they don't get this exact number.  As always, give consistency points if there are mistakes in the previous questions.)


3) Any tree is allowed, as long as it is indeed a tree and doesn't have anything that doesn't make sense (e.g. testing the same categorical attribute down the same path, loops in the tree, putting the class as an attribute in the tree, something else that is nonsensical) - half marks off for anything that doens't make sense.

Award one mark for the design of the tree, and one mark for the explanation, which just has to be logical (e.g. "{I thought that study time was the most important attribute so I put it at the root. It seems that family support is probably the next most important, so down both branches I split on that next.")


4. a) Example answer: A linear discriminant function is a linear function which is used for classification.  The attributes are weighted and summed up, and the total is compared to a threshold in order to determine the prediction of the class label.  It corresponds to a decision boundary that is a line in the instance space. (They don't need to mention both the linear decision boundary and the explanation of the sum to get full marks, either part is good enough on its own)

4. b) Yes. A horizontal straight line at around y = 11 can almost perfectly separate the two classes except for one data point, and the points at which data points from each class overlap (which we must always make one error on).  (I might accept "No" as the answer, since "appropriate" is subjective, but only if it is very well argued, e.g. if they argue that the one mistake made by the linear classifier is unsatisfactory and could be fixed by a non-linear model.)

4. c) One point each for method, objective function, intuition.  Note, look at lesson 4, the answer does not need any more detail than is in the slides, which are quite vague.

Example answer: 
Method = support vector machine (SVM)
Objective function = the margin
Intuition = the margin is the width of a "tube" centered around the linear decision boundary which touches the nearest data points of each class

Logistic regression is also a correct answer. 
Objective function: log probability of the class labels (log-likelihood)
Intuition: The objective function aims to give high probability to the correct class labels