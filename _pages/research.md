---
layout: page
title: Research
permalink: /research/
description: A list of some of my research works.
nav: true
nav_order: 2
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


<p style="margin-top:2em;"></p>


## Completed Works

---

### 5GPT: 5G Vulnerability Detection by Combining Zero-Shot Capabilities of GPT-4 With Domain-Aware Strategies Through Prompt Engineering
*IEEE Transactions on Information Forensics and Security.*  
![5GPT](/assets/img/rhino.png){:.img-fluid .rounded .shadow-sm width="220"}  

Can LLMs like GPT-4 analyze complex cellular protocol specifications to identify security vulnerabilities? We discovered that out-of-the-box GPT-4 has impressive capabilities in flagging ogical inconsistencies and procedural flaws, but it also hallucinates, provides false positives, and struggles to detect deep protocol issues. To remedy this, we teach GPT-4 to think like a telecom-security expert-— what properties must hold, how they fail, and how hazards indicators are exploited by adversaries. The result? A scalable, powerful, efficient black-box framework that can uncover subtle, protocol-level attack vectors that would otherwise slip through the cracks.

**Supervisor(s):** [Dr. Md Shohrab Hossain (BUET)](https://cse.buet.ac.bd/faculty/faculty_detail/mshohrabhossain), [Dr. Ying-Dar Lin](https://speed.cs.nycu.edu.tw/~ydlin/), [Dr. Ren-Hung Hwang](https://rhhwang.csie.io/English/index.html)


<details class="mb-2 research-details">
  <summary class="btn btn-sm btn-outline-secondary">
    <span class="toggle-label">Read more</span>
  </summary>
  <div class="mt-2" markdown="1">

LLMs like GPT-4 have been used extensively in code-level security testing. Natural language is difficult; it is unstructured and inherently ambiguous. To assess GPT-4's capabilities in this domain, we first adopt a zero-shot approach that relies solely on the specification text without any external guidance. On surface level, the results are impressive: GPT-4 is highly effective in detecting high-level logical inconsistencies, weak validation checks, misconfigurations, and ambiguous protocol rules. Examples include improper handling of de-registration request with switch-off indication, inaccurate updating of 5G-GUTI, ambiguous guidelines for SNPN-specific attempt counters, and so on. Althogether GPT-4 identified 25 potential vulnerabilities, of which 12 are new. We tested eight of them and found four true-positives, the remaining four were false-positives. So, on its own GPT-4 is prone to hallucination. Further, GPT-4 is unable to identify advanced, low-level security flaws such as cryptographic weaknesses, exploitable timing and race condition attacks, network layer exploits (including downgrade attacks), and particularly attacks that involve multiple states or entities. 

To uncover deeper, protocol-level attack vectors with greater precision, GPT-4 needs cdomain-specific contextual understanding. For this we introduce a novel domain-aware strategy, where we explicitly teach GPT-4 about security properties and hazard indicators from related works using few-shot learning. We further employ chain-of-thought
prompting to guide the model through structured reasoning steps to identify violations or exploitations that may lead to vulnerabilities. Using the domain-aware approach, we have identified 24 potential vulnerabilities, including 15 new. These include sophisticated vulnerabilities like multi-state and cross-procedure attacks, cryptographic and integrity violations, message spoofing, injection, privacy and identity exposure, and resource management exploits. We tested SIX of these vulnerabilities and confirmed FIVE.

We also compared our findings against a white-box model, Mobile-LLaMA, and found that GPT-4 is more capable of finding both logical flaws and real-world exploits.

  </div>
</details>




[PDF](/assets/pdf/5GPT_final.pdf){:.btn .btn-sm .btn-outline-secondary}
[SLIDES](/assets/pdf/5GPT_presentation.pdf){:.btn .btn-sm .btn-outline-secondary}


---

### Inceptive Transformers
![Inceptive]( /assets/img/rhino.png){:.img-fluid .rounded .shadow-sm width="220"}  
*Accepted for presentation in EMNLP 2025.*  
A plug-in inception-style multi-scale extractor for **any** encoder model. Improves eight PLM baselines across five tasks for both short/long texts in English and Bangla.

**Supervisor(s):** [Dr. M Saifur Rahman (BUET)](https://cse.buet.ac.bd/faculty/faculty_detail/mrahman), [Dr. Rifat Shahriyar](https://cse.buet.ac.bd/faculty/faculty_detail/rifat)

[PDF](5GPT_final.pdf){:.btn .btn-sm .btn-outline-secondary} [Code](https://github.com/asif-shahriar11/inceptive-transformer){:.btn .btn-sm .btn-outline-secondary} 

---

<p style="margin-top:2em;"></p>


## Ongoing Works
---

### 5G Vulnerability Testing using Retrieval-Augmented Generation
![5G RAG](rhino.png ){:.img-fluid .rounded .shadow-sm width="220"}  
*Ongoing work.*  

In 5GPT, we showed that LLMs are capable of identifying vulnerailities from complex natural language documents like 5G specifications. However, we also showed that LLMs have a tendency to 'hallucinate', where they suggest some false-positives. Furthermore, it is difficult for LLMs to capture cross-section vulnerabilities. To address these issues, we propose a novel, fully automated end-to-end framework that utilizes a Retrieval-Augmented Generation (RAG) pipeline to ground LLM outputs in verified, domain-specific data to minimize hallucinations. We also introduce a robust context retrieval mechanism to overcome the cross-section dependency challenges. Using this framework, we have so far generated **800** test-cases for essential 5G mobility management procedures in **under 3 hours**.

**Supervisor(s):** [Dr. Md Shohrab Hossain (BUET)](https://cse.buet.ac.bd/faculty/faculty_detail/mshohrabhossain), [Dr. Syed Rafiul Hussain (Penn State)](https://syed-rafiul-hussain.github.io/)


---

### Cross-modal Deception: There is More than what Meets the Eyes
*Ongoing work.*  
LLMs and VLMs are vulnerable to jailbreak attacks, we know that. In these attacks, the user attempts a number of techniques to elicit harmful responses that the model would generally not produce. In this work we aim to introduce a novel class of attacks that deceive both the user and the VLM. The model is compromised by a hidden instruction, while the human user, who may be interacting with the model through a completely benign-looking image, is an unwitting participant in the attack. If successful, the implications of this attack could be huge.

**Supervisor(s):** [Dr. Rizwan Parvez (QCRI)](https://elmi.hbku.edu.qa/en/persons/md-rizwan-parvez)


---

### Secured Multi-agent Systems
*Ongoing.*  
After the revolution of LLMs, we now see the rise of agentic frameworks that can browse the web, perform grocery shopping from amazon, run OS commands, and what not. _**But what about security?**_ What if the _cheapest deal_ is being offered at a _phishing website?_ That's what we aim to found out.

**Supervisor(s):** [Dr. Rizwan Parvez (QCRI)](https://elmi.hbku.edu.qa/en/persons/md-rizwan-parvez)






<script>
  // Toggle "Read more" <-> "Show less" on all research details blocks
  (function () {
    document.querySelectorAll('.research-details').forEach(function (d) {
      const label = d.querySelector('.toggle-label');
      function update() { label.textContent = d.open ? 'Show less' : 'Read more'; }
      d.addEventListener('toggle', update);
      update(); // init
    });
  })();
</script>
