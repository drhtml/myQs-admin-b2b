export interface IChallenges {
  enddate: string ;
  correct: string ;
  sponsoredby: string ;
  questions: QuestionsArray ;
  csseqno: string ;
  id: string ;
  startdate: string ;
  challengename: string ;
  points: number ;
  status: string ;
  timelimit: number ;
  }
type QuestionsArray = Array<
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
  tags: string,
}
>;
