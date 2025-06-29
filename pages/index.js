import { useState } from "react";

export default function Home() {
  const [selectedPlan, setSelectedPlan] = useState(null);

  const plans = [
    { title: "One-Time", price: "$49" },
    { title: "Weekly", price: "$149/mo" },
    { title: "Monthly", price: "$399/mo" }
  ];

  return (
    <main style={{ padding: 40, display: "flex", flexDirection: "column", alignItems: "center" }}>
      <h1>Landscaping Service Plans</h1>
      <div style={{ display: "flex", gap: 20, marginTop: 20 }}>
        {plans.map((plan) => (
          <div
            key={plan.title}
            onClick={() => setSelectedPlan(plan)}
            style={{
              padding: 20,
              border: selectedPlan === plan ? "2px solid green" : "1px solid gray",
              borderRadius: 8,
              cursor: "pointer"
            }}
          >
            <h2>{plan.title}</h2>
            <p>{plan.price}</p>
          </div>
        ))}
      </div>
      {selectedPlan && (
        <p style={{ marginTop: 20, fontSize: 18 }}>
          You selected: {selectedPlan.title} Plan
        </p>
      )}
    </main>
  );
}
