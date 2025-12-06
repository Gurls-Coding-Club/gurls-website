---
title: "Markdown Styling Guide"
description: "A comprehensive guide showing all available markdown styling options for blog posts"
author: "G:URL*s Team"
date: 2025-01-20
tags: ["guide", "markdown", "styling"]
---

# Main Heading (H1)

This is a paragraph with **bold text** and *italic text*. You can also use `inline code` to highlight technical terms or commands.

## Secondary Heading (H2)

Here's a link to [our homepage](/) and an [external link](https://example.com) that opens in a new tab.

### Tertiary Heading (H3)

You can combine **_bold and italic_** text for extra emphasis.

#### Fourth Level Heading (H4)

Here's how to use different markdown features effectively.

##### Fifth Level Heading (H5)

Even smaller headings are styled consistently.

###### Sixth Level Heading (H6)

The smallest heading level.

---

## Lists

### Unordered List

- First item with important information
- Second item with more details
- Third item with additional context
  - Nested item one
  - Nested item two
- Fourth item back at the top level

### Ordered List

1. First step in the process
2. Second step to follow
3. Third step with details
   1. Nested step 3.1
   2. Nested step 3.2
4. Final step to complete

## Code Examples

### Inline Code

Use `npm install` to install dependencies. Press <kbd>Cmd</kbd>+<kbd>S</kbd> to save.

### Code Blocks

```javascript
// JavaScript example
const greeting = "Hello, G:URL*s!";

function welcomeUser(name) {
  console.log(`${greeting} Welcome, ${name}!`);
  return true;
}

welcomeUser("Developer");
```

```python
# Python example
def calculate_sum(a, b):
    """Calculate the sum of two numbers"""
    return a + b

result = calculate_sum(5, 3)
print(f"The result is: {result}")
```

```html
<!-- HTML example -->
<!DOCTYPE html>
<html lang="en">
  <head>
    <title>G:URL*s</title>
  </head>
  <body>
    <h1>Welcome!</h1>
  </body>
</html>
```

## Blockquotes

> This is a blockquote with important information.
> It can span multiple lines and will be styled beautifully.
>
> You can even have multiple paragraphs in a blockquote.

> "The best way to predict the future is to invent it."
>
> <cite>— Alan Kay</cite>

## Tables

| Feature | Description | Status |
|---------|-------------|--------|
| Markdown Support | Full markdown rendering | ✅ Active |
| Code Highlighting | Syntax highlighting for code | ✅ Active |
| Responsive Design | Mobile-friendly layout | ✅ Active |
| Accessibility | WCAG AA compliant | ✅ Active |

## Images

![Example image description](/images/placeholder.jpg)

## Text Formatting

You can use ==highlighted text== to draw attention (if your markdown processor supports it).

You can also use ~~strikethrough~~ for deleted content.

Abbreviations like <abbr title="HyperText Markup Language">HTML</abbr> can have tooltips.

## Horizontal Rule

The following is a horizontal rule:

---

And we continue after the divider.

## Mixed Content Example

Here's a realistic blog section combining multiple elements:

### Getting Started with JavaScript

JavaScript is the **programming language of the web**. Here's what you need to know:

**Key Concepts:**

1. **Variables** - Store data using `let`, `const`, or `var`
2. **Functions** - Reusable blocks of code
3. **Objects** - Collections of key-value pairs

> **Pro Tip:** Always use `const` by default, and only use `let` when you need to reassign a variable.

Try this simple example:

```javascript
const message = "Hello, World!";
console.log(message);
```

For more information, check out [MDN Web Docs](https://developer.mozilla.org/en-US/docs/Web/JavaScript).

**Remember:** Practice makes perfect! Join our [upcoming workshops](/events) to learn more.

---

## Accessibility Features

All styling includes:

- Proper heading hierarchy
- Sufficient color contrast (WCAG AA)
- Focus states for keyboard navigation
- Semantic HTML elements
- Screen reader friendly markup

## Conclusion

This guide demonstrates all the markdown elements styled with the G:URL*s brand design. Write your blog posts using standard markdown syntax and they'll automatically look great!
