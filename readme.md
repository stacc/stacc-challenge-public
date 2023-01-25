# Credit risk scoring

## Description

**We are building a bank and want to attract the best customers!**

As part of the *onboarding* process all potential customers must be *screened* via a credit *risk scoring system*.
> Risk scoring in this context is a system that is used to assign some risk to a potential customer based on their financial data.

The calculated score can then be used to set thresholds in our onboarding process that either accept or decline potential customers.

Here is a very simple and naive implementation that you can use as inspiration:

```javascript
function calculateCreditRiskScore() {
  let score = 0;
  if (person_income * 5 > loan_amount) score += 1;
  if (loan_status === 1) score += 6;
  if (loanPercentIncome > 55) score += 2;
  if (personEmpLength > 20) score -= 1;
  return score;
}

const customerCreditRiskScore = calculateCreditRiskScore();

if (customerCreditRiskScore > 4) return "declined";
return "accepted";
```

We have provided you with a dataset in the data directory, use whichever format suits you best(json/csv).

### Data snippet

```json
{
        "person_age": "22",
        "person_income": "59000",
        "person_home_ownership": "RENT",
        "person_emp_length": "123.0",
        "loan_intent": "PERSONAL",
        "loan_grade": "D",
        "loan_amnt": "35000",
        "loan_int_rate": "16.02",
        "loan_status": "1",
        "loan_percent_income": "0.59",
        "cb_person_default_on_file": "Y",
        "cb_person_cred_hist_length": "3"
    }
```
---

## Approaches
There are multiple ways to attack this assignment, all depending on what area you specialize in(UX/Design, Frontend, Backend, or maybe a combination?).

We are not very stringent on requirements so feel free to take the assignment in whatever direction you want.
While the subject is *credit risk scoring*, we do (admittedly) not focus too heavily on how the problem itself is solved. This assignment is a simply a means for you to show us what you are capable of and perhaps what area you are the strongest in.
Feel free to use the chance to explore some new technology, framework, method, etc. **Creativity is encourged!🌞**

### Requirements: UX/Design
We want you to sketch out a website where a user can apply to become a customer in our bank. The user should be able to input some relevant information about themselves (e.g income, name, social security number, current loans and financial status).
This information will be used to calculate a risk score that will determine if the user can become a customer, the sketch could then include pages that show that you are accepted or rejected as a customer.

1. You can expand upon this task however you want. (e.g sketch a back-office system where the bank employees can evaluate incoming applications)

Inspiration:
1. https://dribbble.com/search/customer-onboarding-finance
2. https://www.behance.net/?tracking_source=typeahead_search_direct&search=know+your+customer
3. The onboarding form at any of nordic financial institutions :)

### Requirements: Frontend
For this system to work we are in need of a frontend where users can apply to become a customer. The user should be able to input some relevant information about themselves (e.g income, name, social security number and current loans). You should then use this information to calculate a risk score which the bank can use to evaluate if they want the user as a customer.

1. You can expand upon this task how you like.
    - create a frontend for a back-office system where bank employees can evaluate incoming applications

### Requirements: Backend

In this version you are responsible for creating a microservice that does the actual scoring, packaging it, and deploying it.

> [What is a microservice anyway?](https://www.youtube.com/watch?v=j3XufmvEMiM)

1. Your system must be packaged as a containerized application and be published to a public registry.
   1. [New to docker?](https://www.youtube.com/watch?v=Gjnup-PuquQ)
   2. [How to containerize?](https://www.youtube.com/watch?v=gAkwW2tuIqE)
   3. [Publishing to docker hub](https://docs.docker.com/docker-hub/)

2. Your system must expose a endpoint at the route ``` /api/score ``` that accepts a ``` POST ``` request with content-type ``` JSON ```
   1. Your API must be documented using the [Swagger spec](https://swagger.io/specification/)
   2. The service should also expose the swagger API documentation as a static file or via a built in [swagger UI](https://github.com/swagger-api/swagger-ui)

#### Improvements 🤓
These are not listed in any particular order. Do with these at you please, but they are highly relevant and will knock our 🧦 off.

1. Host your system somewhere on the internet.

2. Thoughtful logging
   1. support multiple log levels
   2. log in a thoughtful format
      1. There are standards and conventions, try to follow these.

3. Metrics
   1. expose performance metrics at  ``` /metrics ```
      1. There are common formats for metrics such that third party systems and parsers may interpret them. Feel free to use whatever standard you want.

4. Tests
   1. Performance testing
      1. Use whatever approach and tool you feel comfortable with.
      Suggestions: https://k6.io/, https://gettaurus.org/

   2. Unit testing:
      1. Well written tests can often serve as sanity checks + documentation. Get used to verifying your system.

5. CI/CD pipeline from your repository to wherever the service is hosted

## How to deliver

[**See the readme on main**](https://github.com/stacc/stacc-challenge-public/blob/main/readme.md)
