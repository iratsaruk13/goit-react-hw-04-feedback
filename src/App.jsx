import React, { useState } from "react";
import { Section } from "./components/Section/Section";
import { FeedBackOptions } from "./components/FeedbackOptions/FeedbackOptions";
import { Statistics } from "./components/Statistics/Statistics";
import { Notification } from "./components/Notification/Notification";
import { Container } from "./App.styled";

export const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const onStateUpdate = (value) => {
    if (value === "good") setGood((prev) => prev + 1);
    if (value === "neutral") setNeutral((prev) => prev + 1);
    if (value === "bad") setBad((prev) => prev + 1);
  };

  const countTotalFeedback = () => {
    return good + neutral + bad;
  };

  const countPositiveFeedbackPercentage = () => {
    const total = countTotalFeedback();
    return good ? Math.round((good / total) * 100) : 0;
  };

  const options = Object.keys({ good, neutral, bad });

  return (
    <Container>
      <Section title="Please leave feedback" shadow="true">
        <FeedBackOptions options={options} onStateUpdate={onStateUpdate} />
        <Section title="Statistics">
          {countTotalFeedback() === 0 ? (
            <Notification notification="There is no feedback😿"></Notification>
          ) : (
            <Statistics
              good={good}
              neutral={neutral}
              bad={bad}
              total={countTotalFeedback}
              positivePercentage={countPositiveFeedbackPercentage}
            ></Statistics>
          )}
        </Section>
      </Section>
    </Container>
  );
};

// export class App extends Component {
//   state = {
//     good: 0,
//     neutral: 0,
//     bad: 0,
//   };

//   onStateUpdate = (options) => {
//     this.setState((prevState) => ({
//       [options]: prevState[options] + 1,
//     }));
//   };

//   countTotalFeedback = () => {
//     const { good, neutral, bad } = this.state;
//     return good + neutral + bad;
//   };

//   countPositiveFeedbackPercentage = () => {
//     const { good } = this.state;
//     const total = this.countTotalFeedback();
//     return good ? Math.round((good / total) * 100) : 0;
//   };

//   render() {
//     const { good, neutral, bad } = this.state;
//     const options = Object.keys(this.state);

//     return (
//       <Section title="Please leave feedback" shadow="true">
//         <FeedBackOptions options={options} onStateUpdate={this.onStateUpdate} />
//         <Section title="Statistics">
//           {this.countTotalFeedback() === 0 ? (
//             <Notification notification="There is no feedback"></Notification>
//           ) : (
//             <Statistics
//               good={good}
//               neutral={neutral}
//               bad={bad}
//               total={this.countTotalFeedback}
//               positivePercentage={this.countPositiveFeedbackPercentage}
//             ></Statistics>
//           )}
//         </Section>
//       </Section>
//     );
//   }
// }
