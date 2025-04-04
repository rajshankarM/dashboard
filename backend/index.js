const express = require("express");
const cors = require("cors");

const app = express();
app.use(express.json());
app.use(cors());

// let customers = [
//   {
//     customerId: "CUST1001",
//     name: "Alice Johnson",
//     monthlyIncome: 6200,
//     monthlyExpenses: 3500,
//     creditScore: 710,
//     outstandingLoans: 15000,
//     loanRepaymentHistory: [1, 0, 1, 1, 1, 1, 0, 1],
//     status: "Review",
//   },
//   {
//     customerId: "CUST1002",
//     name: "Bob Smith",
//     monthlyIncome: 4800,
//     monthlyExpenses: 2800,
//     creditScore: 640,
//     outstandingLoans: 20000,
//     loanRepaymentHistory: [1, 1, 1, 0, 0, 1, 0, 0],
//     status: "Approved",
//   },
// ];
let customers = [
  {
    customerId: "CUST1001",
    name: "Alice Johnson",
    monthlyIncome: 6200,
    monthlyExpenses: 3500,
    creditScore: 710,
    outstandingLoans: 15000,
    loanRepaymentHistory: [1, 0, 1, 1, 1, 1, 0, 1],
    status: "Review",
  },
  {
    customerId: "CUST1002",
    name: "Bob Smith",
    monthlyIncome: 4800,
    monthlyExpenses: 2800,
    creditScore: 640,
    outstandingLoans: 20000,
    loanRepaymentHistory: [1, 1, 1, 0, 0, 1, 0, 0],
    status: "Approved",
  },
  {
    customerId: "CUST1003",
    name: "Charlie Davis",
    monthlyIncome: 7500,
    monthlyExpenses: 4000,
    creditScore: 780,
    outstandingLoans: 10000,
    loanRepaymentHistory: [1, 1, 1, 1, 1, 1, 1, 1],
    status: "Approved",
  },
  {
    customerId: "CUST1004",
    name: "David White",
    monthlyIncome: 3500,
    monthlyExpenses: 2000,
    creditScore: 590,
    outstandingLoans: 25000,
    loanRepaymentHistory: [0, 0, 1, 0, 0, 1, 0, 0],
    status: "Review",
  },
  {
    customerId: "CUST1005",
    name: "Eleanor Adams",
    monthlyIncome: 9200,
    monthlyExpenses: 5000,
    creditScore: 800,
    outstandingLoans: 5000,
    loanRepaymentHistory: [1, 1, 1, 1, 1, 1, 1, 1],
    status: "Approved",
  },
  {
    customerId: "CUST1006",
    name: "Franklin Harris",
    monthlyIncome: 6700,
    monthlyExpenses: 3300,
    creditScore: 720,
    outstandingLoans: 12000,
    loanRepaymentHistory: [1, 1, 1, 0, 1, 1, 1, 1],
    status: "Approved",
  },
  {
    customerId: "CUST1007",
    name: "Grace Martinez",
    monthlyIncome: 4100,
    monthlyExpenses: 2500,
    creditScore: 600,
    outstandingLoans: 18000,
    loanRepaymentHistory: [0, 0, 1, 1, 0, 1, 0, 1],
    status: "Review",
  },
  {
    customerId: "CUST1008",
    name: "Henry Lewis",
    monthlyIncome: 5300,
    monthlyExpenses: 2900,
    creditScore: 680,
    outstandingLoans: 15000,
    loanRepaymentHistory: [1, 1, 0, 1, 1, 1, 1, 0],
    status: "Approved",
  },
  {
    customerId: "CUST1009",
    name: "Irene Clark",
    monthlyIncome: 8900,
    monthlyExpenses: 4800,
    creditScore: 770,
    outstandingLoans: 7000,
    loanRepaymentHistory: [1, 1, 1, 1, 1, 1, 1, 1],
    status: "Approved",
  },
  {
    customerId: "CUST1010",
    name: "James Walker",
    monthlyIncome: 3200,
    monthlyExpenses: 1900,
    creditScore: 560,
    outstandingLoans: 27000,
    loanRepaymentHistory: [0, 0, 0, 0, 1, 0, 1, 0],
    status: "Rejected",
  },
];

app.get("/customers", (req, res) => res.json(customers));

app.put("/customers/:id", (req, res) => {
  const { id } = req.params;
  const { status } = req.body;
  customers = customers.map((c) =>
    c.customerId === id ? { ...c, status } : c
  );
  res.json({ message: "Status updated" });
});

app.listen(5000, () => console.log("Backend running on port 5000"));
