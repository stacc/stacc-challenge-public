# Budgeting and Financial Insights 💰

## Help us make the boring chore of saving money, fun! 💸

As a part of the _onboarding_ process in a bank, all potential customers must be screened by some system that assigns a **credit risk score** to each customer. The calculated score can then be used to set thresholds in the onboarding process, meaning that we can either _accept_ or _decline_ that customer automatically depending on the risk score that was generated. Depicted below is a simple implementation that demonstrates such scoring process:

> Definition: A **credit risk score** is a value that is used to quantify the risk of a potential customer based on information such as financial status, debt, age and other factors.

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

### Example Data

The datasets in the `/data` directory can be used to represent potential new customers in a fictional bank, these can be used for your code assignment in whatever format suits you best (csv/json)

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

## Creativity Is Encouraged! 🌟

While the general theme of this code assignment is _credit risk scoring_, we do not (admittedly) focus too heavily on how the problem itself is solved. This assignment is a simply a means for you to show us what you are capable of and perhaps what area you are the strongest in. There are multiple ways to approach this code assignment, depending on what type of area you feel most confident in (UX/Frontend, Backend or a combination of both!). Feel free to use the chance to explore some new technology, framework, method, etc.

## Assignment Approaches ✏️

Below is a list of _suggested_ approaches for the code assignment, feel free to explore them all and see if any one (or maybe even a combination) of them fits your skill set!

### a) UX/Design 🎨

We want you to sketch out a website where a user can apply to become a customer in our bank. The user should be able to input some relevant information about themselves (e.g income, name, social security number, current loans and financial status).
This information will be used to calculate a risk score that will determine if the user can become a customer, the sketch could then include pages that show that you are accepted or rejected as a customer.

1. You can expand upon this task however you want. (e.g sketch a back-office system where the bank employees can evaluate incoming applications)

Inspiration:

1. [Dribble.com](https://dribbble.com/search/customer-onboarding-finance)
2. [Behance.com](https://www.behance.net/?tracking_source=typeahead_search_direct&search=know+your+customer)
3. The onboarding form at any of nordic financial institutions.

### b) Frontend 🪄

For this system to work we are in need of a frontend where users can apply to become a customer. The user should be able to input some relevant information about themselves (e.g income, name, social security number and current loans). You should then use this information to calculate a risk score which the bank can use to evaluate if they want the user as a customer.

1. You can expand upon this task how you like.
   - create a frontend for a back-office system where bank employees can evaluate incoming applications

### c) Backend ⚙️

In this version you are responsible for creating a microservice that does the actual scoring, packaging it, and deploying it.

> [What is a microservice anyway?](https://www.youtube.com/watch?v=j3XufmvEMiM)

1. Your system must be packaged as a containerized application and be published to a public registry.

   1. [New to docker?](https://www.youtube.com/watch?v=Gjnup-PuquQ)
   2. [How to containerize?](https://www.youtube.com/watch?v=gAkwW2tuIqE)
   3. [Publishing to docker hub](https://docs.docker.com/docker-hub/)

2. Your system must expose a endpoint at the route `/api/score` that accepts a `POST` request with content-type `JSON`
   1. Your API must be documented using the [Swagger spec](https://swagger.io/specification/)
   2. The service should also expose the swagger API documentation as a static file or via a built in [swagger UI](https://github.com/swagger-api/swagger-ui)

### Other Suggestions

Here are other suggested tasks you could attempt should you find them interesting, not listed in any order.

1. Host your system / app somewhere on the internet.

2. Thoughtful logging

   1. support multiple log levels
   2. log in a thoughtful format
      1. There are standards and conventions, try to follow these.

3. Metrics

   1. expose performance metrics at `/metrics`
      1. There are common formats for metrics such that third party systems and parsers may interpret them. Feel free to use whatever standard you want.

4. Tests

   1. Performance testing

      1. Use whatever approach and tool you feel comfortable with.
         Suggestions: [k6.io](https://k6.io/), [Taurus](https://gettaurus.org/)

   2. Unit testing:
      1. Well written tests can often serve as sanity checks + documentation. Get used to verifying your system.

5. CI/CD pipeline from your repository to wherever the service is hosted

## How to deliver

[**See the readme on main**](https://github.com/stacc/stacc-challenge-public/blob/main/readme.md)
