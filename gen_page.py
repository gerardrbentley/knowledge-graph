import argparse
import os
from datetime import datetime


def gen_frontmatter(path, title):
    return f"""---
path: "/{path}"
date: "{datetime.now().strftime("%Y-%m-%d")}"
title: "{title}"
tags: ['{title}']
excerpt: "Notes on {title}"
---

{title} is a very interesting topic!
    """


def main():
    parser = argparse.ArgumentParser(description='Get name for new page')
    parser.add_argument('name', metavar='N', type=str,
                        help='Name of folder and metadata link for new blog page')

    args = parser.parse_args()
    if not args.name:
        print(f"WARNING: No name provided")
        exit()

    lower_title = args.name.lower().replace(" ", "_")
    dirname = os.path.join('src', 'pages', lower_title)
    filename = os.path.join(dirname, 'index.md')
    if os.path.isdir(dirname) and os.path.isfile(filename):
        print(f'Already exists at {filename}')
        exit()

    os.makedirs(dirname)
    with open(filename, 'w') as file:
        frontmatter = gen_frontmatter(lower_title, args.name)
        file.write(frontmatter)


if __name__ == "__main__":
    main()
