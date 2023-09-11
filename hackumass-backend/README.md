# hackumass-backend

# Course

### Get all courses

Get /api/course/all

### Get course

Get /api/course/<codeName>

### Create course

Post /api/course

Body: { fullName, codeName, major, description }

### Update course

Put /api/course

Body: { fullName, codeName, major, description }

### Delete course

Delete /api/course

Body: { codeName }

# Review

### Get reviews by course

Get /api/review?course=<course_id>

### Get review

Get /api/review/<review_id>

### Create review

Post /api/review

Body: {title, content, course, user, difficultyRating, timeSpentRating, funRating, recommendRating}

recommendRating: front page, scale 0-5, 5 is very much recommended
difficultyRating: back page, scale 0-5, 5 is very difficult
timeSpent: back page, scale 0-5, 5 is spending a lot of time per week
funRating: back page, scale 0-5, 5 is very fun

### Update rating

Put /api/review/rating

Body: {id, difficultyRating, timeSpentRating, funRating, recommendRating}

### Update review

Put /api/review

Body: {id, title, content}

### Delete review

Delete /api/review

Body: {id}

# Question

### Get questions by course

Get /api/question?course=<course_id>

### Get question

Get /api/question/<question_id>

### Create question

Post /api/question

Body: {title, content, course, user}

### Update question

Put /api/question

Body: {id, title, content}

### Delete question

Delete /api/question

Body: {id}

# Answer

### Get answers by question

Get /api/answer?question=<questio_id>

### Get answer

Get /api/answer/<answer_id>

### Create answer

Post /api/answer

Body: {title, content, question, user}

### Update answer

Put /api/answer

Body: {id, title, content}

### Delete answer

Delete /api/answer

Body: {id}