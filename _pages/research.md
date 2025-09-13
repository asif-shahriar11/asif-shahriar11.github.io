---
layout: page
title: Research
permalink: /research/
description: A list of some of my research works.
nav: true
nav_order: 2
---

<!-- minimal HTML only for type-to-filter -->
My current research interests include: <br>

- 💻 `Computer security`, `AI for security`, `Security for AI` <br>
- ⚔️ `Adversarial ML`,  `Trustworthy Generative AI`,  `Secured Agentic Frameworks` <br>
- 📖 `Natural language processing`, `Large Language Models`, `Retrieval-Augmented Generation` <br>



<input id="research-search" class="form-control list-search" type="search" placeholder="Type to filter: topic, title, venue, year, supervisor…" />




<p style="margin-top:3em;"></p>


## Completed Works

---

### 5GPT: 5G Vulnerability Detection by Combining Zero-Shot Capabilities of GPT-4 With Domain-Aware Strategies Through Prompt Engineering
***IEEE Transactions on Information Forensics and Security, 2025.***  

<p style="margin-top:1em;"></p>

![Zero-shot approach](/assets/img/zero-shot-image.png){:.img-fluid .rounded .shadow-sm width="800"} <br>
_Fig: Zero-shot approach_

<p style="margin-top:1em;"></p>

![Domain-aware approach](/assets/img/domain-aware-image.png){:.img-fluid .rounded .shadow-sm width="900"} <br>
_Fig: Domain-aware approach_

<p style="margin-top:1em;"></p>

Can LLMs like GPT-4 analyze complex cellular protocol specifications to identify security vulnerabilities? We discovered that out-of-the-box GPT-4 has impressive capabilities in flagging ogical inconsistencies and procedural flaws, but it also hallucinates, provides false positives, and struggles to detect deep protocol issues. To remedy this, we teach GPT-4 to think like a telecom-security expert-- what properties must hold, how they fail, and how hazards indicators are exploited by adversaries. The result? A scalable, powerful, efficient black-box framework that can uncover subtle, protocol-level attack vectors that would otherwise slip through the cracks.

**Supervisor(s):** [Dr. Md Shohrab Hossain (BUET)](https://cse.buet.ac.bd/faculty/faculty_detail/mshohrabhossain), [Dr. Ying-Dar Lin](https://speed.cs.nycu.edu.tw/~ydlin/), [Dr. Ren-Hung Hwang](https://rhhwang.csie.io/English/index.html)



<!-- Buttons with gaps (no Bootstrap JS required) -->
<div class="d-flex flex-wrap gap-2 my-2" role="group" aria-label="5gpt links">
  <a class="btn btn-outline-secondary readmore-btn"
     data-target="#more-5gpt"
     href="javascript:void(0)">Read more</a>
  <a class="btn btn-outline-secondary" href="/assets/pdf/5GPT_final.pdf" target="_blank" rel="noopener">PDF</a>
  <a class="btn btn-outline-secondary" href="/assets/pdf/5GPT_presentation.pdf" target="_blank" rel="noopener">Slides</a>
</div>

<!-- Hidden content block -->
<div id="more-5gpt" class="mt-2 d-none" markdown="1">
LLMs like GPT-4 have been used extensively in code-level security testing. Natural language is difficult; it is unstructured and inherently ambiguous. To assess GPT-4's capabilities in this domain, we first adopt a zero-shot approach that relies solely on the specification text without any external guidance. On surface level, the results are impressive: GPT-4 is highly effective in detecting high-level logical inconsistencies, weak validation checks, misconfigurations, and ambiguous protocol rules. Examples include improper handling of de-registration request with switch-off indication, inaccurate updating of 5G-GUTI, ambiguous guidelines for SNPN-specific attempt counters, and so on. Althogether GPT-4 identified 25 potential vulnerabilities, of which 12 are new. We tested eight of them and found four true-positives, the remaining four were false-positives. So, on its own GPT-4 is prone to hallucination. Further, GPT-4 is unable to identify advanced, low-level security flaws such as cryptographic weaknesses, exploitable timing and race condition attacks, network layer exploits (including downgrade attacks), and particularly attacks that involve multiple states or entities. 

To uncover deeper, protocol-level attack vectors with greater precision, GPT-4 needs domain-specific contextual understanding. For this we introduce a novel domain-aware strategy, where we explicitly teach GPT-4 about security properties and hazard indicators from related works using few-shot learning. We further employ chain-of-thought prompting to guide the model through structured reasoning steps to identify violations or exploitations that may lead to vulnerabilities. Using the domain-aware approach, we have identified 24 potential vulnerabilities, including 15 new. These include sophisticated vulnerabilities like multi-state and cross-procedure attacks, cryptographic and integrity violations, message spoofing, injection, privacy and identity exposure, and resource management exploits. We tested SIX of these vulnerabilities and confirmed FIVE.

We also compared our findings against a white-box model, Mobile-LLaMA, and found that GPT-4 is more capable of finding both logical flaws and real-world exploits.

</div>



---

### Inceptive Transformers: Enhancing Contextual Representations through Multi-Scale Feature Learning Across Domains and Languages
*Accepted for presentation in **EMNLP 2025**.*

<p style="margin-top:1em;"></p>

<!-- Image gallery (multiple images, responsive). 
     Option A: no fixed widths, all scale to container -->
![Inceptive transformers workflow](/assets/img/inceptive_transformer_flowchart.png){:.img-fluid .rounded .shadow-sm width="900"} <br>
_Fig: End-to-end workflow of Inceptive Transformer models_


<p style="margin-top:1em;"></p>

| ![Attention maps](/assets/img/inceptive_intro.png){: width="350"} | ![Irony comparison](/assets/img/irony-comp.png){: width="200"} | ![OHSUMED comparison](/assets/img/ohsumed-comp.png){: width="200"} |
|:--:|:--:|:--:|
| Attention visualization | Performance comparison (irony detection) | Performance comparison (OHSUMED disease identification) |


<!-- If you prefer per-image width control, 
     replace any image above with e.g.:
     ![Alt](/assets/img/flowchart.png){:.img-fluid .rounded .shadow-sm width="420"} -->

<p style="margin-top:2em;"></p>

A modular, lightweight, plug-and-play architecture for enhancing the contextual representations of _**any**_ encoder model. Improves **EIGHT** PLM baselines across **FIVE** tasks for both short/long texts in English and Bangla.

**Supervisor(s):** [Dr. M Saifur Rahman (BUET)](https://cse.buet.ac.bd/faculty/faculty_detail/mrahman), [Dr. Rifat Shahriyar (BUET)](https://cse.buet.ac.bd/faculty/faculty_detail/rifat)

<div class="d-flex flex-wrap gap-2 my-2" role="group" aria-label="Inceptive links">
  <a class="btn btn-outline-secondary readmore-btn"
     data-target="#more-inceptive"
     href="javascript:void(0)">Read more</a>
  <a class="btn btn-outline-secondary" href="/assets/pdf/5GPT_final.pdf" target="_blank" rel="noopener">PDF</a>
  <a class="btn btn-outline-secondary" href="https://github.com/asif-shahriar11/inceptive-transformer" target="_blank" rel="noopener">Code</a>
</div>

<div id="more-inceptive" class="mt-2 d-none" markdown="1">
Encoder models are designed to aggregate all token embeddings into a single representation, called the \[CLS\] token, which is later used for downstream tasks like classification. Although it is convenient, the over-reliance on a single representative token can make encoder models insufficient in capturing fine-grained contextual nuances or localized cues critical for tasks like emotion recognition or irony detection \[left figure\]. This issue is even more pronounced in multi-label tasks, which require token-level attention rather than a single sequence-level summary.

In this work we propose _**Inceptive Transformers**_ -- a lightweight and modular architecture that augments a transformer baseline by stacking an inception-style 1-D convolution module on top. Instead of using \[CLS\]-based pooling, we feed the final hidden states from the baseline transformer (e.g. RoBERTa or BioBERT) to a multi-scale feature extraction module. This inception module employs parallel 1-D convolutional filters with varying kernel sizes that are designed to recognize local features, such as key phrases or word combinations that are indicative of specific classifications. The goal of the inception module is to incorporate local features without sacrificing global context, which is achieved by using a residual connection to concatenate the original transformer's hidden states with the multi-scale features. These enriched features are then processed by a self-attention mechanism, which dynamically assigns weights to tokens based on their task-specific contribution, thus allowing the model to effectively prioritize relevant tokens. 

Our experiments demonstrate that Inceptive Transformers consistently outperform both general-purpose baselines (like RoBERTa and DeBERTa v3) and domain-specific ones (like BERTweet and BioBERT). On five different tasks (Bangla and English emotion recognition, irony detection, disease identification, and anti-vaccine concern classification), we observed performance gains from **1%** to as high as **14%** in accuracy and F1-score, with less than 10% inference-time overhead.
<!-- (keep your full extra text here) -->
</div>



<p style="margin-top:3em;"></p>


## Ongoing Works
---

### 5G Vulnerability Testing using Retrieval-Augmented Generation
*Ongoing work.*  

![5G-RAG](/assets/img/5GRAG-flow-chart.png){:.img-fluid .rounded .shadow-sm width="800"} <br>
_Fig: End-to-end workflow_

<p style="margin-top:1em;"></p>

![Context retrieval](/assets/img/5GRAG-context-retrieval.png){:.img-fluid .rounded .shadow-sm width="800"} <br>
_Fig: Context retrieval method_

<p style="margin-top:3em;"></p>

In 5GPT, we showed that LLMs are capable of identifying vulnerailities from complex natural language documents like 5G specifications. However, we also showed that LLMs have a tendency to 'hallucinate', where they suggest some false-positives. Furthermore, it is difficult for LLMs to capture cross-section vulnerabilities. To address these issues, we propose a novel, fully automated end-to-end framework that utilizes a Retrieval-Augmented Generation (RAG) pipeline to ground LLM outputs in verified, domain-specific data to minimize hallucinations. We also introduce a robust context retrieval mechanism to overcome the cross-section dependency challenges. Using this framework, we have so far generated **800** test-cases for essential 5G mobility management procedures in **under 3 hours**.

**Supervisor(s):** [Dr. Md Shohrab Hossain (BUET)](https://cse.buet.ac.bd/faculty/faculty_detail/mshohrabhossain), [Dr. Syed Rafiul Hussain (Penn State)](https://syed-rafiul-hussain.github.io/)


---

### Cross-modal Deception: There is More than what Meets the Eyes
*Ongoing work.*  
<p style="margin-top:1em;"></p>

In traditiional jailbreak attacks, user is the adversary while LLM is the victim. The user attempts a number of techniques to elicit harmful responses that the model would generally not produce. In this work we aim to introduce a novel class of attacks that deceive both the user and the VLM. The model is compromised by a hidden instructions, while the human user, who may be interacting with the model through a completely benign-looking image, is an unwitting participant in the attack. If successful, the implications of this attack could be huge.

**Supervisor(s):** [Dr. Rizwan Parvez (QCRI)](https://elmi.hbku.edu.qa/en/persons/md-rizwan-parvez)


---

### Secured Multi-agent Systems
*Ongoing work.*  
<p style="margin-top:1em;"></p>

After the revolution of LLMs, we now see the rise of agentic frameworks that can browse the web, perform grocery shopping from amazon, run OS commands, and what not. _**But what about security?**_ What if the _cheapest deal_ is being offered at a _phishing website?_ That's what we aim to find out.

**Supervisor(s):** [Dr. Rizwan Parvez (QCRI)](https://elmi.hbku.edu.qa/en/persons/md-rizwan-parvez)







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



<script>
  // Read more / Show less toggler without Bootstrap JS
  (function () {
    document.querySelectorAll('.readmore-btn').forEach(function (btn) {
      const sel = btn.getAttribute('data-target');
      const box = document.querySelector(sel);
      if (!box) return;

      function isHidden(el) { return el.classList.contains('d-none'); }
      function show(el) { el.classList.remove('d-none'); }
      function hide(el) { el.classList.add('d-none'); }

      btn.addEventListener('click', function () {
        if (isHidden(box)) {
          show(box);
          btn.textContent = 'Show less';
        } else {
          hide(box);
          btn.textContent = 'Read more';
        }
      });
    });
  })();
</script>


