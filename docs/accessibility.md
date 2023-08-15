---
title: Accessibility
layout: support-page
permalink: /accessibility/
description: "Voluntary Product Accessibility Template (VPAT) outlining §508 accessibility information for GitHub.com, GitHub Enterprise, and GitHub Desktop."
redirect_from: "/508/"
data:
  Summary:
    product:
    criteria:
      - criterion: "Section clone from github"
        support: Supports with exceptions
        comments: 
      - criterion: "Section clone from github"
        support: Supports with exceptions
        comments: 
      - criterion: "Section clone from github"
        support: Not applicable
        comments:

  "Section 1194.41 Information, Documentation and Support":
    product:
    criteria:
      - criterion: "Section clone from github"
        support: Supports
        comments: "Please contact [GitHub Support](https://support.github.com/) with any such requests."
      - criterion: "(b) End-users shall have access to a description of the accessibility and compatibility features of products in alternate formats or alternate methods upon request, at no additional charge.  "
        support: Supports
        comments: "Documentation available at [government.github.com/accessibility](https://government.github.com/accessibility/)"
      - criterion: "Section clone from github"
        support: Supports
        comments: "Support provided via [web](https://help.github.com) and [email](https://github.com/contactus)"
---

<div class="col-md-8 mx-auto">
  <p>
    Please note, when using GitHub.com or GitHub Enterprise, there are four alternate ways to interact with stored content:
  </p>
  <ol class="ml-3 ml-lg-0">
    <li class="mb-2">Via the <a href="https://github.com">GitHub.com</a> or <a href="https://enterprise.github.com">GitHub Enterprise</a> web interface through a modern browser</li>
    <li class="mb-2">Via the <a href="https://desktop.github.com">GitHub Desktop</a> application</li>
    <li class="mb-2">Via the GitHub's open <a href="https://developer.github.com/v3/">application programming interface</a> (API) which provides information in a machine-readable format for integration with other applications</li>
    <li class="mb-2">Via the open source <a href="https://git-scm.com/">Git</a> command line (interactive, entirely text-based) interface</li>
  </ol>
  <p>
    Where support below is indicated below as "Supports with exceptions", such a qualification applies to the particular product being evaluated, however, interactions may be accomplished through alternate means such as via the Git command-line interface.
  </p>
  <p><em>
    For more information, please contact <a href="mailto:government@github.com">government@github.com</a>.
  </em></p>
</div>

{% for section in page.data %}
<div class="border-top mt-4 mt-md-6 pt-4 alt-h3 mb-3" markdown="1">
## {{ section[0] }}
</div>

  {% if section[1].product %}
  * Applicable product(s): {{ section[1].product }}*
  {% endif %}

  <table class="a11y-table">
    <thead>
      <tr class="text-left pb-4">
        <th>Criteria</th>
        <th>Level of Support</th>
        <th>Remarks and explanations</th>
      </tr>
    </thead>
    <tbody>
    {% for requirement in section[1].criteria %}
      <tr>
        <td class="criterion">
        {% if section[0] == "Summary" %}
        <a href="#{{ requirement.criterion | replace:" ","-" | replace:".","" | replace:",","" | downcase }}">{{ requirement.criterion }}</a>
        {% else %}
         {{ requirement.criterion }}
        {% endif %}
        </td>
        <td class="support {{ requirement.support | downcase | replace:" ","-" }}">
         {{ requirement.support }}
        </td>
  <td markdown="1" class="comments">
{{ requirement.comments }}
  </td>
      </tr>
    {% endfor %}
    </tbody>
  </table>
{% endfor %}

<div class="my-5">&nbsp;<div>
