# github-doc-gen

Github documentation generator is a automation tool for github repository to create and update
documentation whenever you add a file in your repository.

When you will add something in your repository <b>UPDATE_DOC.py</b> will be executed by the <b>run_doc_updater_script.yml</b> and new content file will be visible to your <b>DOCUMENTATION.md</b> file by default.


## Usage

1. Place the <b>UPDATE_DOC.py</b> and <b>UPDATE_DOC_DATE.py</b> in the root of the repository.

2. Create an github workflow and put the source code of run_update_doc_script.yml.

3. Open <b>UPDATE_DOC_DATE.py</b> and modify according to your need.

you are done.

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

5. go to settings -> Action -> General and sroll down. In the workflow permission section, select Read and write permissions and click save.

Go to the root of the repository and see the changes. 

If you cant see any changes it means your action did not run. Make sure your branch name and

in the yml file, in the 6th line, indicated branch name is same.
