---
layout: page
title: Research
permalink: /research/
description: A list of some of my research works.
---

<!-- minimal HTML only for type-to-filter -->
My current research interests span across `Computer security`, `Adversarial ML`, `Natural language processing`, and `Trustworthy AI`.
Type in the box below to filter.


<input id="research-search" class="form-control list-search" type="search" placeholder="Type to filter: topic, title, venue, year, supervisor…" />



---

<!-- tiny filter script: scans text; no extra deps -->
<script>
(function () {
  const box = document.getElementById('research-search');
  if (!box) return;
  const items = Array.from(document.querySelectorAll('h3, h4, h5, p, li, strong, em'));
  function hay() {
    return (items.map(n => n.textContent).join(' ') || '').toLowerCase();
  }
  let cache = hay();
  function filter() {
    const q = box.value.trim().toLowerCase();
    if (!q) { document.body.classList.remove('filtering'); [...document.querySelectorAll('section, article, div')]; }
    const blocks = Array.from(document.querySelectorAll('h3, h4, h5')).map(h => h.closest('section, article, div'));
    blocks.forEach(b => {
      const txt = (b.textContent || '').toLowerCase();
      b.style.display = (!q || txt.includes(q)) ? '' : 'none';
    });
  }
  box.addEventListener('input', filter);
})();
</script>


---


## Completed

### 5GPT: 5G Vulnerability Detection by Combining Zero-Shot Capabilities of GPT-4 With Domain-Aware Strategies Through Prompt Engineering
![5GPT](rhino.png ){:.img-fluid .rounded .shadow-sm width="220"}  
*IEEE Transactions on Information Forensics and Security.*  
Out-of-the-box GPT-4 flags issues but also hallucinates and misses deep protocol flaws. We teach GPT-4 to think like a telecom-security expert—what properties must hold, how they fail, and how hazards escalate—yielding a scalable black-box framework that finds known and **new** threats.

**Supervisor(s):** [Dr. Md Shohrab Hossain (BUET)](https://cse.buet.ac.bd/faculty/faculty_detail/mshohrabhossain), [Dr. Ying-Dar Lin](https://speed.cs.nycu.edu.tw/~ydlin/), [Dr. Ren-Hung Hwang](https://rhhwang.csie.io/English/index.html)

[PDF](5GPT_final.pdf){:.btn .btn-sm .btn-outline-secondary} [SLIDES](5GPT_presentation.pdf){:.btn .btn-sm .btn-outline-secondary}

---

### Inceptive Transformers
![Inceptive]( /assets/img/research_inceptive.png ){:.img-fluid .rounded .shadow-sm width="220"}  
*Accepted for presentation in EMNLP 2025.*  
A plug-in inception-style multi-scale extractor for **any** encoder model. Improves eight PLM baselines across five tasks for both short/long texts in English and Bangla.

**Supervisor(s):** [Dr. M Saifur Rahman (BUET)](https://cse.buet.ac.bd/faculty/faculty_detail/mrahman), [Dr. Rifat Shahriyar](https://cse.buet.ac.bd/faculty/faculty_detail/rifat)

[PDF](5GPT_final.pdf){:.btn .btn-sm .btn-outline-secondary} [Code](https://github.com/asif-shahriar11/inceptive-transformer){:.btn .btn-sm .btn-outline-secondary} 

---


## Ongoing

### 5G Vulnerability Testing using Retrieval-Augmented Generation
![5G RAG](rhino.png ){:.img-fluid .rounded .shadow-sm width="220"}  
*Ongoing work.*  
In 5GPT, we showed that LLMs can identify vulnerabilities from complex specifications, but they may hallucinate and miss cross-section issues. We propose a fully automated **RAG** framework that grounds outputs and retrieves context to capture cross-section dependencies. So far we generated **800** test cases for 5G mobility-management procedures in **< 3 hours**.

**Supervisor(s):** [Dr. Md Shohrab Hossain (BUET)](https://cse.buet.ac.bd/faculty/faculty_detail/mshohrabhossain), [Dr. Syed Rafiul Hussain (Penn State)](https://syed-rafiul-hussain.github.io/)

[ABS](#){:.btn .btn-sm .btn-outline-secondary} [PDF](#){:.btn .btn-sm .btn-outline-secondary} [CODE](#){:.btn .btn-sm .btn-outline-secondary} [SLIDES](#){:.btn .btn-sm .btn-outline-secondary}

---

### Cross-modal Deception: There is More than what Meets the Eyes
*Ongoing work.*  
We introduce attacks that deceive both users and VLMs: a hidden instruction compromises the model while a benign-looking image keeps the human unaware. If successful, implications are significant for real-world multimodal systems.

**Supervisor(s):** [Dr. Rizwan Parvez (QCRI)](https://elmi.hbku.edu.qa/en/persons/md-rizwan-parvez)


---

### Secured Multi-agent Systems
*Ongoing.*  
Agentic frameworks can browse the web, shop, and run OS commands—**what about security**? We study decision-making under adversarial conditions (e.g., “best deal” links that are phishing) and design defenses/policies for safe tool use.

**Supervisor(s):** [Dr. Rizwan Parvez (QCRI)](https://elmi.hbku.edu.qa/en/persons/md-rizwan-parvez)

