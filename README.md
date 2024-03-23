![github-doc-gen~2](https://github.com/mursalatul/github-doc-gen/assets/79168756/68b11f2d-644e-49e1-8d45-1e118b7cf602)
# github-doc-gen

GitHub documentation generator is an automation tool for GitHub repositories that creates and updates documentation whenever you add a file to your repository.

When you add something to your repository, `UPDATE_DOC.py` will be executed by `run_update_doc_script.yml`, and the new content file will be automatically visible in your `DOCUMENTATION.md` file by default.


## Usage

1. Place the `<b>UPDATE_DOC.py</b>` and `<b>UPDATE_DOC_DATE.py</b>` files in the root of the repository.

2. Create a GitHub workflow and place the source code of `run_update_doc_script.yml` within it.

3. Dont forget to modify `UPDATE_DOC_DATE.py` according to your needs.

you are done ✅

## Create github workflow

1. go to Action

2. click  set up a workflow yourself

3. in  the place of main.yml, type run_update_doc_script.yml

4. in the box place the following yml code.
```
name: Update Documentation

on:
  push:
    branches:
      - master  # Update this branch name if needed

jobs:
  update_docs:
    runs-on: ubuntu-latest

    steps:
    - name: Checkout repository
      uses: actions/checkout@v2

    - name: Set up Python
      uses: actions/setup-python@v3
      with:
        python-version: 3.12.1

    # - name: Install dependencies
    #   run: |
    #     python -m pip install --upgrade pip
    #     pip install -r REQUIREMENTS.txt

    - name: Run UPDATE_DOC.py
      run: python UPDATE_DOC.py

    - name: Commit and push changes
      run: |
        git config --local user.email "action@github.com"
        git config --local user.name "GitHub Action"
        git add .
        git commit -m "auto update documentation & api"
        git push
```
5. go to `settings` -> `Action` -> `General` and sroll down. In the workflow permission section, select `Read and write permissions` and click save.
<hr>

Go to the Action section. If everything is ok you can something like this,

![image](https://github.com/mursalatul/github-doc-gen/assets/79168756/62e8f4d8-46d4-4427-986f-337e2e19715f)


$${\color{red}If \space you \space can't \space see \space any \space changes, \space it \space means \space your \space action \space did \space not \space run. \space Make \space sure \space your \space branch \space name \space matches \space the \space one \space indicated \space in \space the \space YAML \space file, \space specifically \space on \space the \space 6th \space line.}$$

## UPDATE_DOC_DATA.py Properties

Modify the following attributes according to your need.

- **title** : title of the documentation. Default = "Documentation"
- **sub_title** : create the sub title for the documentation. Default = "Content"
- **text** : this is the intro text, it will be showen under the title.
- **show_file** : if this is true, files in the repository will be showen in the documentation. Default = True
- **show_folder** : if this is true, folders in the repository will be showen in the documentation. Default = True
- **ignore** : this is a list of folders/files which wont be added to documentation. Default = ['.github', '.git', 'UPDATE_DOC.py', 'UPDATE_DOC_DATA.py', 'LICENSE', 'virtual_env', '__pycache__', 'DOCUMENTATION.md', 'README.md', 'run_doc_gen_script.yml']
- **path** : path of your github repository. Default = "https://github.com/mursalatul/github-doc-gen/"


### Topics

- Python
- Python Automation
- GitHub Repository Automation
- GitHub Actions

[![Topics](https://img.shields.io/badge/Topics-Python%20%7C%20Automation%20%7C%20GitHub-brightgreen)](https://github.com/mursalatul/github-doc-gen/)
