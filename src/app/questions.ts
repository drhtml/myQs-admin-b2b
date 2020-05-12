export interface IQuestions {
  category: string;
  questions: QuestionArray;
  subcategory: string;
}
type QuestionArray = Array<
{
  difficulty: string,
  questionid: string,
  isEnabled: string,
  correctchoices: string,
  description: string,
  text: string,
  choices: string,
  category: string,
  subcategory: string,
  questionaddedtimestamp: string,
  username: string,
  tags: string
}
>;
