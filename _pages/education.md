---
layout: page
permalink: /education/
title: Education
description: A brief description of my academic journey (so far). Forever in debt of all of my teachers.
nav: true
nav_order: 4
chart:
  plotly: true
---

- **Bachelor of Science (BSc. Engg.) \[2019 - 2024\]** <br>
  Department of Computer Science and Engineering (CSE) <br>
  Bangladesh University of Engineering and Technology (BUET), Dhaka, Bangladesh <br> 
  CGPA: **3.85/4.00** <br>
  CGPA in CSE subjects only: **3.91/4.00** <br>
  Dean's List for academic excellence

<p style="margin-top:0.8em;"></p>

- **Higher Secondary School Certificate (HSC) \[2016 - 2018\]** <br>
  Notre Dame College, Dhaka, Bangladesh <br>
  GPA: **5.00/5.00** <br>
  Merit position: **10**th in Dhaka board (obtained board scholarship)

<p style="margin-top:0.8em;"></p>

- **Secondary School Certificate (SSC) \[2016\]** <br>
  Ideal School and College, Dhaka, Bangladesh <br>
  GPA: **5.00/5.00** <br>
  Merit position: **26**th in Dhaka board (obtained board scholarship)


<p style="margin-top:3em;"></p>

My undergrad CGPA is a strictly increasing function of time (semesters). Maybe someday I will write that story. Just for fun, here is a graph that shows my CGPA at each semester, starting from 1-1 up to 4-2.

```plotly
{
  "data": [
    {
      "name": "Overall CGPA",
      "x": ["1-1", "2-1", "2-2", "3-1", "3-2", "4-1", "4-2"],
      "y": [3.55, 3.75, 3.77, 3.81, 3.81, 3.83, 3.85],
      "type": "scatter",
      "mode": "lines+markers",
      "hovertemplate": "After %{x}<br>Overall CGPA %{y:.3f}<extra></extra>"
    }
  ],
  "layout": {
    "legend": {"orientation": "h", "x": 0.02, "y": 1.15},
    "margin": {"t": 60, "r": 10, "b": 40, "l": 50},
    "xaxis": {"title": "Term"},
    "yaxis": {"title": "CGPA", "range": [3.5, 3.9], "tickformat": ".2f"}
  }
}

```
