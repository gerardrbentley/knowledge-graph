---
path: "/windows"
date: "2020-09-24"
title: "Windows OS"
tags: ['Windows','OS','General']
excerpt: "Notes on Windows"
---

# WSL 2

[Windows Subsystem For Linux](https://docs.microsoft.com/en-us/windows/wsl/about):

Allows you to run a Linux distro **in** Windows; Useful for developing with Linux tools

## IP Address of Virutal Kernel

Running a server within WSL2, should host on `0.0.0.0`, which allows port forwarding to Windows. You'll need to target the Linux

``` shell
ip addr show eth0
# direct
ip addr show eth0 | grep -oP '(?<=inet\s)\d+(\.\d+){3}'
```

Example: Running a Gatsby blog development server:
- `gatsby develop --host 0.0.0.0 --port 8000`
- Browser: `http://100.200.300.47:8000`

(Where 100.200.300.47 is the result of running `ip addr show`)

## Graphical Applications

Will probably be fully supported soon. There is some way to get a graphical application like Emacs to go through XServer, but is wonky and breaks on network changes.

Involves vcxsrv, and [this github issue](https://github.com/microsoft/WSL/issues/4150#issuecomment-504209723)

## Docker with WSL2

Pretty seamless using [Docker Desktop](https://docs.docker.com/docker-for-windows/wsl/) on host Windows machine.  

# Windows Terminal

Launch terminal tabs / windows for Powershell, Linux, Remote, etc.