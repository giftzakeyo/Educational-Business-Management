# Electric Circuits - Simplified Student Guide

## What's This All About?

Think of electricity like **water flowing through pipes**:
- **Voltage (V)** = Water pressure 💧 (what pushes the water)
- **Current (I)** = Flow rate (how much water flows per second)
- **Resistance (R)** = Pipe width (narrow pipe = more resistance)

---

## ⚡ 1. Ohm's Law (The Golden Rule)

> **V = I × R**

| Symbol | Meaning | Unit | Like... |
|--------|---------|------|---------|
| V | Voltage (potential difference) | Volts (V) | Water pressure |
| I | Current | Amperes (A) | Flow rate |
| R | Resistance | Ohms (Ω) | Pipe narrowness |

**Memorize triangle:** V on top, I × R on bottom. Cover what you need!

**Example:** A 6V battery pushes 2A through a bulb. What's the resistance?

> R = V/I = 6/2 = **3 Ω** ✅

---

## 🔋 2. Internal Resistance - NEW for Grade 12!

### Every battery has "hidden resistance" inside it
- **Emf (ε):** The battery's "perfect" voltage (no load)
- **Terminal voltage (V):** What you actually measure when battery is working
- **Internal resistance (r):** Resistance inside the battery itself

### The Magic Formula:

> **ε = V + Ir**
> OR
> **ε = I(R + r)**

Where:
- ε = emf (volts)
- V = terminal voltage (volts)
- I = current (amps)
- r = internal resistance (ohms)

### Real-World Example:
A battery has ε = 12V and r = 0.5 Ω. When connected to a 5.5 Ω resistor:

```
ε = I(R + r)
12 = I(5.5 + 0.5)
12 = I(6)
I = 2 A ✅
```

### Key Insight: The MORE current you draw, the MORE voltage is "lost" inside the battery!
- Bulb dims when you start the car's starter motor (draws huge current)
- That's because Ir gets bigger, so terminal voltage drops

---

## 🔗 3. Series Circuits

```
    ┌──R₁───R₂───┐
    │            │
    └───── V ────┘
```

- **Current:** SAME everywhere (I₁ = I₂ = I₃)
- **Voltage:** Divides up (V_total = V₁ + V₂ + V₃)
- **Resistance:** Adds up (R_total = R₁ + R₂ + R₃)

**Check yourself:** If one bulb breaks in a series circuit → ALL go out 🕯️

---

## 🔗 4. Parallel Circuits

```
    ┌────R₁────┐
    │          │
    ├────R₂────┤
    │          │
    └──── V ───┘
```

- **Voltage:** SAME across each branch (V₁ = V₂ = V₃ = V_total)
- **Current:** Divides up (I_total = I₁ + I₂ + I₃)
- **Resistance:** 1/R_total = 1/R₁ + 1/R₂ + 1/R₃

**Check yourself:** If one bulb breaks in parallel → others stay ON 💡

---

## ⚡ 5. Power and Energy

| Formula | When to use |
|---------|-------------|
| P = VI | When you know voltage and current |
| P = I²R | When you know current and resistance |
| P = V²/R | When you know voltage and resistance |

### Energy:
> **E = P × t** (Energy = Power × time)

**Cost of electricity:**
- Energy in kWh
- Cost = kWh × price per kWh
- In SA: ~R2.00 per kWh (varies by municipality)

---

## 🧪 6. The V vs I Graph (IEB Favourite!)

```
Voltage (V)
    ↑
ε───●──────────
    | ↘         slope = -r
    |  ↘
    |   ↘
    |    ↘
    └──────────→ Current (I)
```

- **y-intercept = emf (ε)** — voltage when NO current flows
- **gradient = -r** — negative slope is the internal resistance
- **x-intercept** = short circuit current (ε/r)

This graph appears in **almost every IEB Paper 1**! Know it cold!

---

## ✅ Quick Checklist for IEB Exam

- [ ] Can I write Ohm's Law from memory?
- [ ] Do I know ε = I(R + r) backwards?
- [ ] Can I calculate total resistance in series-parallel?
- [ ] Do I know why bulbs dim when you add more?
- [ ] Can I read the V vs I graph?
- [ ] Can I calculate kWh and cost?

---

## 🎯 Memory Tricks

- **"Emf is Empty"** — measure emf with NO load (open circuit)
- **"Terminal is Tired"** — terminal voltage drops when current flows
- **"Series Same Current"** — SSC
- **"Parallel Same Voltage"** — PSV
