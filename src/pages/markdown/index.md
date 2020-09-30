---
path: "/markdown"
date: "2020-09-28"
title: "Markdown"
tags: ['Markdown']
excerpt: "Notes on Markdown"
---

Markdown is a way of writing plain text with ~_style_~. This Blog is made by converting Markdown files (`.md`) to HTML content (with a bit of [React](/react) sparkle)

Organization and emphasis increase readability, and the format is widely accepted.

It's the Rich Text Markup of choice for [Github](/github) [README](/readme) files. Examples here include 'Github Flavored Markdown' where noted.

Similar in principal, but much less daunting than [Org Mode](/org_mode)

# Headers
---
### Output:

# Header 1
## Header 2
### Header 3
###### Header 6

### Input:

```md
# Header 1
## Header 2
### Header 3
###### Header 6
```

# Line Break
---
### Output:
---

### Input
```md
---
```

# Code
---
## Fenced (Github Flavored Markdown)

### Output:

```python
def do_the_things(stuff: [str]):
    for x in stuff:
        print(x)
```

### Input:

    ```python
    def do_the_things(stuff: [str]):
        for x in stuff:
            print(x)
    ```

## Inline (Generic Markdown)

### Output:

`do_the_things(['one', 'two', 'three'])`

### Input:

```md
`do_the_things(['one', 'two', 'three'])`
```

# Bold and Italics
---
### Output:

*Italic Text*

**Bold Text**

~~Striked-Through Text~~

_Italic **And Bold** Text_

__Bold *And Italic* Text__

### Input:

```md
*Italic Text* or _Italic Text_

**Bold Text** or __Bold Text__

~~Striked-Through Text~~

_Italic **And Bold** Text_

__Bold *And Italic* Text__
```

# Quotes
---
### Output:

As Abraham Lincoln said:

> Don't believe what you read on the internet.
> That stuff can be dangerous.

### Input:

```md
As Abraham Lincoln said:

> Don't believe what you read on the internet.
> That stuff can be dangerous.
```

# Lists
---
### Output:
Ordered

1. First Order
1. Second Ordered
1. Still Ordered

Unordered

- Unordered Item
- Another Item
- A third Item

### Input:
*NOTE: Can use just "1." or incrementing numbers, or one "1." then "-"*
```md
1. First Order
1. Second Ordered
1. Still Ordered

Unordered

- Unordered Item
- Another Item
- A third Item
```

# Links
---

### Output:

[Displayed Text As Link to /markdown](/markdown)

### Input:

```md
[Displayed Text As Link to /markdown](/markdown)
```

# Tables (Github Flavored Only)

### Output:

| Column Name | Other Column | ID |
| ------------|--------------|--- |
| Text        | omgwtfbbq    | 1 |
| Number      | 1234         | 2 |


### Input:

```md
| Column Name | Other Column | ID |
| ------------|--------------|--- |
| Text        | omgwtfbbq    | 1 |
| Number      | 1234         | 2 |
```