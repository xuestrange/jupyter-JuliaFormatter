# JuliaFormatter for Jupyter Notebook

在 Jupyter Notebook 中使用 JuliaFormatter 格式化 Julia

代码很大程度上来自 https://github.com/drillan/jupyter-black 

仅做了部分修改



Format Julia with JuliaFormatter in Jupyter Notebook


## pre-requisites

```julia
]add JuliaFormatter
add JSON
```

## Features

- format selected cell：Ctrl-B
- format all cells：Ctrl-Shift-B


## Installation

```bash
jupyter nbextension install https://github.com/xuestrange/jupyter-JuliaFormatter/archive/main.zip --user
jupyter nbextension enable jupyter-JuliaFormatter-main/jupyter-JuliaFormatter
```
