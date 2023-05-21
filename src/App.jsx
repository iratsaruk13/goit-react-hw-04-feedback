import React, { Component } from "react";
import { Section } from "./components/Section/Section";
import { FeedBackOptions } from "./components/FeedbackOptions/FeedbackOptions";
import { Statistics } from "./components/Statistics/Statistics";
import { Notification } from "./components/Notification/Notification";

export class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  onStateUpdate = (options) => {
    this.setState((prevState) => ({
      [options]: prevState[options] + 1,
    }));
  };

  countTotalFeedback = () => {
    const { good, neutral, bad } = this.state;
    return good + neutral + bad;
  };

  countPositiveFeedbackPercentage = () => {
    const { good } = this.state;
    const total = this.countTotalFeedback();
    return good ? Math.round((good / total) * 100) : 0;
  };

  render() {
    const { good, neutral, bad } = this.state;
    const options = Object.keys(this.state);

    return (
      <Section title="Please leave feedback" shadow="true">
        <FeedBackOptions options={options} onStateUpdate={this.onStateUpdate} />
        <Section title="Statistics">
          {this.countTotalFeedback() === 0 ? (
            <Notification notification="There is no feedback"></Notification>
          ) : (
            <Statistics
              good={good}
              neutral={neutral}
              bad={bad}
              total={this.countTotalFeedback}
              positivePercentage={this.countPositiveFeedbackPercentage}
            ></Statistics>
          )}
        </Section>
      </Section>
    );
  }
}
