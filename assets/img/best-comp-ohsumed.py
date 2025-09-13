import matplotlib.pyplot as plt
import numpy as np

# --- You can change the bar width here ---
bar_width = 0.4  # Example: 0.8 is wider, 0.4 is narrower

# Data
f1_model_A = np.array([63.50, 61.53, 56.71, 55.47])
f1_model_B = np.array([72.34, 65.44, 64.07, 60.98])

# Calculate averages
avg_A = np.mean(f1_model_A)
avg_B = np.mean(f1_model_B)

averages = [avg_A, avg_B]
labels = ["Baseline (avg)", "Inceptive (avg)"]
colors = ['#6699CC', '#00308F']  # Shades of blue

# Plot
plt.figure(figsize=(4, 5)) 
# Use the 'width' parameter to control the bar width
bars = plt.bar(labels, averages, color=colors, edgecolor='black', linewidth=1, width=bar_width)

# Add value labels on top of each bar
for bar in bars:
    yval = bar.get_height()
    plt.text(bar.get_x() + bar.get_width()/2.0, yval, f'{yval:.2f}', 
             va='bottom', ha='center', fontsize=10) # va='bottom' puts text above bar

# Axis and formatting
plt.ylabel("F1 score", fontsize=12)
# Adjusted ylim to give more space for the text on top of the bars
plt.ylim(56, 68) 
plt.grid(axis='y', linestyle='--', alpha=0.7)
plt.tight_layout()

# Save as PDF
plt.savefig("ohsumed-comp.png", format="pdf")
plt.show()