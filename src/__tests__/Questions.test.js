import { fireEvent, render, screen } from '@testing-library/react';
import QuestionsAnswers from '../components/QuestionsAnswers';
import QAElement from '../components/QuestionsAnswers/QAElement';

test('renders proper title for new question modal', () => {
  render(<QuestionsAnswers selected={{
    "id": 42366,
    "campus": "hr-lax",
    "name": "Camo Onesie",
    "slogan": "Blend in to your crowd",
    "description": "The So Fatigues will wake you up and fit you in. This high energy camo will have you blending in to even the wildest surroundings.",
    "category": "Jackets",
    "default_price": "140.00",
    "created_at": "2021-08-13T14:39:39.968Z",
    "updated_at": "2021-08-13T14:39:39.968Z"
  }}/>);
  fireEvent.click(screen.getByText('More Questions'))
  const linkElement = screen.getByText('New Question About: Camo Onesie');
  expect(linkElement).toBeInTheDocument();
});

test('renders two answers by default, and more once See More Answers button is clicked', async () => {
  render(<QAElement element={{
    "question_id": 563092,
    "question_body": "Do these questions get reset periodically?",
    "question_date": "2021-12-29T00:00:00.000Z",
    "asker_name": "Migos Questioner",
    "question_helpfulness": 9,
    "reported": false,
    "answers": {
        "5269148": {
            "id": 5269148,
            "body": "Seems like it, but maybe not?",
            "date": "2021-12-29T00:00:00.000Z",
            "answerer_name": "Seller",
            "helpfulness": 3,
            "photos": []
        },
        "5269192": {
            "id": 5269192,
            "body": "yes",
            "date": "2021-12-30T00:00:00.000Z",
            "answerer_name": "Seller",
            "helpfulness": 0,
            "photos": []
        },
        "5269194": {
            "id": 5269194,
            "body": "test",
            "date": "2021-12-30T00:00:00.000Z",
            "answerer_name": "testing",
            "helpfulness": 0,
            "photos": []
        }
    }
}}/>)
  const answers = document.getElementsByClassName('answerBody')
  expect (answers).toHaveLength(2)
  await fireEvent.click(screen.getByText('See More Answers'))
  expect (answers.length).toBeGreaterThan(2)
})
