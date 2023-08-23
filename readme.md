# Budgeting and savings 💰

## Help us make the boring chore of saving money, fun! 💸

Budgeting and saving must be one of the most boring things you could do, and most of us would probably find it much more fun to spend our hard earned cash! But saving your money and spending it wisely is probably the smart thing to do, especially now with costs and mortage rates rising.

Banks are not that great at incentivizing their customers either; does your banks savings solution make you really **pumped** to save? There is also the problem with the interest rate for deposits. The problem is that it is much lower than the loan interest rate, and rises at a much slower pace as well.

We therefore challenge you to help us and the banks to make this financial product more fun and incentivizing for the customer to save their money.
You can sketch up a fun interactive UI, design/code some nifty graphs that show when I can buy my dream motorcycle or create a backend system with the core functionality ready to build cool stuff on!

See the [inspiration section](#inspiration) to see real-life examples of how it might be done.

If you have any questions before, during or after the challenge, do not be afraid to reach out to us in our _[discord channel](https://discord.gg/s2RyPJvBqQ)_. Stacc employees have unique roles and you can message any of us!

### Example Data 📊

We have included some sample data in the `/data` folder. We have two datasets:

1. Accounts - Accounts for different people.
2. Transactions - Transactions that are connected to these accounts.

You are free to use the datasets (or not) however you like. Using them directly to create graphs? Using them as a starting point for your ideas and expanding on them? Putting them in a database and allowing users to create new entries? Create entirely new ones? We do not know, but look forward to seeing what you deliver!

**Accounts example**

```json
{
  "id": "acc123",
  "account_number": "********1234",
  "account_type": "Checking",
  "balance": 15000.25,
  "currency": "NOK",
  "owner": "Alice"
}
```

**Transactions example**

```json
{
  "id": "txn001",
  "date": "2023-08-15",
  "description": "Grocery Store",
  "amount": -75.5,
  "currency": "NOK",
  "account_id": "acc123"
}
```

---

## Creativity Is Encouraged! 🌟

While the general theme of this code assignment is _budgeting and savings_, we do not (admittedly) focus too heavily on how the problem itself is solved. This assignment is a simply a means for you to show us what you are capable of and perhaps what area you are the strongest in. There are multiple ways to approach this assignment, depending on what type of area you feel most confident in (UX/Frontend, Backend or a combination of both!). Feel free to use the chance to explore some new technology, framework, method, etc.

Also do not be afraid to be use AI tools like ChatGPT or similar. +points if you can show us unique usage of AI!

## Inspiration 💡

1. [Dribble.com](https://dribbble.com/search/savings)
2. [Behance.com](https://www.behance.net/?tracking_source=typeahead_search_direct&search=savings)
3. [Dreams](https://www.getdreams.com/no/)
4. The savings and budgeting functionality (Typically named "My economy") in a random bank

## Assignment Approaches ✏️

Below is a list of _suggested_ approaches for the code assignment, feel free to explore them all and see if any one (or maybe even a combination) of them fits your skill set!

### a) UX/Design 🎨

- [Gamification](https://www.interaction-design.org/literature/topics/gamification) is often an effective way to engange people in tedious tasks. Maybe look how to incorporate gamification elements in your design?
- Incorporating AI aspects might be worth exploring 🤖
- See how savings and budgeting might be brought out of the interface of the banks. This is called [embedded finance](https://plaid.com/resources/fintech/what-is-embedded-finance/) where financial products that have usually lived within the bank interface is brought into non-traditional interfaces.
- Often enough creating unique and new visualizations can be enough to engage users. See how you might "twist" how savings is usually represented

### b) Frontend 🪄

- Create a interface that allows the user to see how much they have saved, set savings goal and compare with other users in their demographic (age, gender, geography etc ...)
- Use graphs to represent the data you have
- Communicate with an API to do calculations, store/get data or something entirely else ...
- Integrate with external API's, maybe [OpenAI](https://platform.openai.com/docs/api-reference)

### c) Backend ⚙️

- Set up a system that can handle receiving savings goals from the frontend and giving them back when requested
- Use a database (Relational, non-relational etc...)
- Develop a reward system that rewards the user for hitting different milestones
- Use account data or transaction data to intelligently set saving goals or changes to savings

## Happy hacking 🎉

We hope that you find the challenge interesting and rewarding! As mentioned, do not be afraid to reach out to us!

Before you leave, please check out how to deliver below!

## How to deliver

[**See the readme on main**](https://github.com/stacc/stacc-challenge-public/blob/main/readme.md)
