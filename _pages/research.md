---
layout: page
title: Research
permalink: /research/
description: A list of some of my research works.
nav: true
nav_order: 2
---

<!-- minimal HTML only for type-to-filter -->



<p style="margin-top:3em;"></p>


## Completed Works

---

### Words Speak Louder Than Code: Investigating Cognitive Heuristics in LLM-Based Code Vulnerability Detection
***arXiv preprint, 2026.***

<p style="margin-top:1em;"></p>

![Cognitive manipulation methodology](/assets/img/fig_cognitive_methodology.png){:.img-fluid .rounded .shadow-sm width="900"} <br>
_Fig: Controlled framework for triggering cognitive heuristics in LLM-based vulnerability detection_

<p style="margin-top:1em;"></p>

| ![Cognitive trigger example](/assets/img/fig_cognitive_trigger.png){: width="400"} | ![Susceptibility tiers](/assets/img/fig_susceptibility_tier_vertical.png){: width="230"} | ![Volume-knob effect](/assets/img/fig_volume_knob.png){: width="190"} |
|:--:|:--:|:--:|
| Halo effect flipping a verdict on the same code | Model susceptibility across heuristics | The volume-knob effect on recall and FPR |

<p style="margin-top:2em;"></p>

In this work we have discovered that when we ask an LLM whether a code is vulnerable or safe, its response is significantly influenced by who wrote the code, how the task is framed, and what a previous verdict was -- signals that have nothing to do with the actual security of the code. This is a form of cognitive bias, the same kind of mental shortcut that skews human judgment under uncertainty, now showing up in how models make security decisions. For instance, if the code is attributed to a well-known, high-prestige author, the model tends to call it safe; but when the exact same code is attributed to a less-reputed author, the model calls it vulnerable. This is known as the halo effect. Similarly, describing the consequence of missing a bug versus the benefit of catching one can flip a model's verdict on identical code, which we call the framing effect, and simply showing the model a prior result, such as a passed security check, can anchor its judgment regardless of what the code actually contains, which we call the anchoring effect. Our experiments show that framing effect has the most influence on a model's security verdicts, followed by anchoring and halo. To highlight the practical impact, we demonstrate a proof-of-concept black-box cognitive attack that can suppress up to 97% of previously detected vulnerabilities.

**Supervisor(s):** [Dr. Z. Berkay Celik (Purdue)](https://beerkay.github.io/), [Dr. Gang Wang (UIUC)](https://gangw.cs.illinois.edu/index.html)

<div class="d-flex flex-wrap gap-2 my-2" role="group" aria-label="cognitive heuristics links">
  <a class="btn btn-outline-secondary readmore-btn"
     data-target="#more-cognitive-heuristics"
     href="javascript:void(0)">Read more</a>
  <a class="btn btn-outline-secondary" href="/assets/pdf/cognitive-heuristics-arxiv.pdf" target="_blank" rel="noopener">PDF</a>
  <a class="btn btn-outline-secondary" href="https://github.com/purseclab/cognitive-heuristics-vuln-detect" target="_blank" rel="noopener">Code</a>
</div>

<div id="more-cognitive-heuristics" class="mt-2 d-none" markdown="1">
Large language models are no longer just coding assistants; they are being deployed as automated vulnerability detectors in real-world systems. Anthropic's Claude Opus recently discovered dozens of zero-day vulnerabilities in Mozilla Firefox, GitHub's Copilot Autofix reviews pull requests and triages security alerts in CI/CD pipelines, and AppSec platforms like ZeroPath use LLMs to find and fix vulnerabilities. As these models take on the role of automated security gatekeepers, the reliability of their security verdicts becomes critical.

Decades of psychology research have shown that humans often rely on cognitive heuristics, or mental shortcuts, to make judgments under uncertainty. Since LLMs are trained on massive corpora of human-generated text, they inherit these same patterns in question answering, evaluation, and general reasoning. Prior work on LLM-driven vulnerability detection has focused almost entirely on the code itself. But LLM-based scanners in deployment do not see code in isolation; they routinely receive non-code context such as author identity, task directives, documentation strings, commit messages, and static analysis results alongside the code under review. This context can read as either reassuring or alarming to the model, and if a vulnerability detector is biased by these signals, it can reach different verdicts on identical code depending on who wrote it, how the task is phrased, or what the prior verdict was, none of which should matter in a security analysis.

In this work, we present the first systematic investigation of cognitive heuristics in LLM-based vulnerability detection. We design a controlled framework that holds the code fixed and varies only the surrounding context, evaluating three heuristics, halo, framing, and anchoring, across eight LLMs and three programming languages. Beyond documenting these biases, we ask whether they can be exploited adversarially: we build a proof-of-concept attack that forges commit metadata and fabricated prior scan results to suppress detection in a simulated CI/CD scanner, and we test whether prompt-based defenses can stop it.
</div>



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
***EMNLP 2025 main conference**.*

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
  <a class="btn btn-outline-secondary" href="/assets/pdf/Inceptive_Transformers_EMNLP.pdf" target="_blank" rel="noopener">PDF</a>
  <a class="btn btn-outline-secondary" href="https://github.com/asif-shahriar11/inceptive-transformer" target="_blank" rel="noopener">Code</a>
</div>

<div id="more-inceptive" class="mt-2 d-none" markdown="1">
Encoder models are designed to aggregate all token embeddings into a single representation, called the \[CLS\] token, which is later used for downstream tasks like classification. Although it is convenient, the over-reliance on a single representative token can make encoder models insufficient in capturing fine-grained contextual nuances or localized cues critical for tasks like emotion recognition or irony detection \[left figure\]. This issue is even more pronounced in multi-label tasks, which require token-level attention rather than a single sequence-level summary.

In this work we propose _**Inceptive Transformers**_ -- a lightweight and modular architecture that augments a transformer baseline by stacking an inception-style 1-D convolution module on top. Instead of using \[CLS\]-based pooling, we feed the final hidden states from the baseline transformer (e.g. RoBERTa or BioBERT) to a multi-scale feature extraction module. This inception module employs parallel 1-D convolutional filters with varying kernel sizes that are designed to recognize local features, such as key phrases or word combinations that are indicative of specific classifications. The goal of the inception module is to incorporate local features without sacrificing global context, which is achieved by using a residual connection to concatenate the original transformer's hidden states with the multi-scale features. These enriched features are then processed by a self-attention mechanism, which dynamically assigns weights to tokens based on their task-specific contribution, thus allowing the model to effectively prioritize relevant tokens. 

Our experiments demonstrate that Inceptive Transformers consistently outperform both general-purpose baselines (like RoBERTa and DeBERTa v3) and domain-specific ones (like BERTweet and BioBERT). On five different tasks (Bangla and English emotion recognition, irony detection, disease identification, and anti-vaccine concern classification), we observed performance gains from **1%** to as high as **14%** in accuracy and F1-score, with less than 10% inference-time overhead.
<!-- (keep your full extra text here) -->
</div>






---

### A Survey on Agentic Security: Applications, Threats and Defenses
*arXiv preprint, 2025.*


<!-- If you prefer per-image width control, 
     replace any image above with e.g.:
     ![Alt](/assets/img/flowchart.png){:.img-fluid .rounded .shadow-sm width="420"} -->

<p style="margin-top:2em;"></p>

In this work we present the first holistic survey of the **agentic security** landscape, structuring the field around three interdependent pillars: **Applications, Threats, and Defenses.** We provide a comprehensive taxonomy of over 150 papers, explaining how agents are used, the vulnerabilities they possess, and the countermeasures designed to protect them. A detailed cross-cutting analysis shows emerging trends in agent architecture while revealing critical research gaps in model and modality coverage.

**Supervisor(s):** [Dr. Rizwan Parvez (QCRI)](https://elmi.hbku.edu.qa/en/persons/md-rizwan-parvez)

<div class="d-flex flex-wrap gap-2 my-2" role="group" aria-label="Agentic security links">
  <a class="btn btn-outline-secondary readmore-btn"
     data-target="#more-agentic-security"
     href="javascript:void(0)">Read more</a>
  <a class="btn btn-outline-secondary" href="/assets/pdf/Agentic_security_survey_arXiv.pdf" target="_blank" rel="noopener">PDF</a>
</div>

<div id="more-agentic-security" class="mt-2 d-none" markdown="1">
The rapid shift from passive LLMs to autonomous LLM-agents marks a new paradigm in cybersecurity. While these agents can act as powerful tools for both offensive and defensive operations, the very agentic context introduces a new class of inherent security risks. Existing surveys provide valuable insights into specific aspects like security threats, trustworthiness, enterprise governance and core LLM safety, but they fail to capture the complete picture, leaving practitioners and researchers without a unified framework for understanding how agent capabilities, vulnerabilities, and defenses interconnect.

In this work we present the first holistic survey of the agentic security landscape, structured to answer three key questions a security researcher would ask: *“What can agents do for my security?”* (Applications), *“How can they be attacked?”* (Threats), and *“How do I stop them?”* (Defenses). To this end, we define three pillars of taxonomy:
- **Applications.** Using LLM-agents in downstream cybersecurity tasks, including red teaming (autonomous vulnerability discovery), blue teaming (defending against threats), and domain-specific security (cloud, web). <br>
- **Threats.** Security vulnerabilities inherent to agentic systems that attackers can exploit. <br>
- **Defenses.** Techniques and countermeasures used to harden agentic systems against the threats.
  
By uniquely bridging these three pillars, we provide a complete picture of the current state of the art, transforming a scattered collection of individual research efforts into an actionable body of knowledge. Additionally, we identify key trends and critical gaps in existing literature— for example, the migration from monolithic to planner-executor and multi-agent architectures, almost exclusive focus on single commercial LLM (GPT), uneven threat and modality coverage (RAG poisoning under-defended, few works on images), and benchmark fragmentation.
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

### Repository-Level Vulnerability Auditing using LLM Agents
*Ongoing work.*  
<p style="margin-top:1em;"></p>

Benchmarks like SWE-bench primarily test an agent’s ability to correct an existing, well-documented issue within a codebase (reactive bug-fixing). We investigate the more critical and complex task of proactive security auditing: the ability to review incoming code changes (e.g., a pull request) and identify subtle, hidden security vulnerabilities before they are merged into the main branch. This is fundamentally different and challenging because not only is it inherently ambiguous, but also requires long-context and compositional reasoning capabilities.


---

### Cross-modal Deception: There is More than what Meets the Eyes
*Ongoing work.*  
<p style="margin-top:1em;"></p>

In traditiional jailbreak attacks, user is the adversary while LLM is the victim. The user attempts a number of techniques to elicit harmful responses that the model would generally not produce. In this work we aim to introduce a novel class of attacks that deceive both the user and the VLM. The model is compromised by a hidden instructions, while the human user, who may be interacting with the model through a completely benign-looking image, is an unwitting participant in the attack. If successful, the implications of this attack could be huge.

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


