## User Manual

Pythonpad is a intergrated programming environment for education, that can be embedded in web pages. 
It is a Vue.js component so you can easily use it in your Vue.js project, or you can use our simple helper module that allows you to use the Pythonpad component without actually using Vue.js API at all. 

Pythonpad is a ready-made JavaScript module that is designed to be used in web-based online programming classes with minimum efforts. Pythonpad works with a CodeMirror-based code editor, a JSON-based tiny file system with simple file browser UI, and a Brython-based Python code executer. It only requires you to prepare a skeleton code and optionally, a grading script. Users' code is saved in their local web browser with `localStorage` object by default, so you don't even have to worry about that. 

### Basic Usage

The easiest way to use Pythonpad is to simply load the required scripts and style sheets in your web page, and create a Pythonpad instance with the helper module available in the global scope, `Pythonpad`. 

```html
<!doctype html>
<html>
<head>
    <link rel="stylesheet" type="text/css" href="https://cdn.jsdelivr.net/npm/font-awesome@4.7.0/css/font-awesome.min.css">
    <script src="https://cdn.jsdelivr.net/npm/vue@2.6.11"></script>
    <script src="https://cdn.jsdelivr.net/gh/pythonpad/pythonpad.js@v0.1.37/lib/pythonpad.bundle.js"></script>
</head>
<body>
    <div id="pad"></div>
    <script>
        // Create a Pythonpad instance in the element with an id "pad". 
        Pythonpad('pad', {src: 'print("hello world from Pythonpad.js")'})
    </script>
</body>
</html>
```

`Pythonpad(target, data)` function requires two parameters. `target` should be either a target DOM element's id attribute in a string value, or an actual target DOM element object. `data` should be a JavaScript object with various information for initializing the Pythonpad. Here is an example. 

```javascript
{
    "id": "robot-zigzag",
    "title": "Zigzag with Robots",
    "src": "# Skeleton code\nfrom cs1robots import *\n# ...\n",
    "files": {
        ".grader.py": {
            "type": "text",
            "body": "# Grading script\nimport main\n# ....\n"
        }
    }
}
```

You can include following values in the `data` object:

**id**: A unique ID for this "project". When default `localStorage` based code saving and loading is used, this ID is used to distinguish the saved code for this project from others. 

**title**: A title to show in the header of the programming environment.

**src**: An initial code content for `main.py` file. 

**files**: A JavaScript object that includes all files and directories to be included in the initial state of the file system in this project, excluding `main.py` in the root directory.

### Use Sandbox to Create Exercise Projects

One easy way to generate this `data` object, is to use the [Sandbox](/docs/sandbox.html) project which is available on the menu at the top of this web page, or right below this paragraph in this manual page.

<iframe src="/pad.html?p=sandbox" class="u-pad-frame" frameborder="0"></iframe>

<a class="button" href="/pad.html?p=sandbox" target="_blank">Open in a New Window</a>

Unlike other example projects in this website, Sandbox has a **Download** button at the bottom of its programming environment. When you click the button, you can download the current state of your Sandbox project as a `sandbox.pypad.json` file. 

The downloaded `pypad.json` file is in a JSON format, and has `id`, `title`, `src`, and `files` value. And of course, you can directly use this object as a `data` object to feed your Pythonpad instance. Just edit `id` and `title` if you need to. 

### Grading Script

If you want to provide an auto-grading feature in your exercise project, create a file named `.grader.py` in the root directory of your project. 
As you have found out already, the **Run** button at the bottom of the Pythonpad programming environment runs the `main.py` file in the project. 
If there is `.grader.py` file in the root of the project, the **Grade** button will show up at the bottom of the programming environment. And of course, that button will run the `.grader.py` file in this environment. 

In the grading script, test if all required conditions are met in the project. You can access users' work with `open('main.py', 'r')` and `exec()`, or you can also run `import main` and test their functions if you would prefer to do so.

Here is an example project with a grading script. Be aware that all files with filenames that start with a dot (`.`) will be hidden in the file browser as default. To see the `.grader.py`, click the button **Files** at the bottom of the programming environment first, and then click the button <i class="fa fa-eye"></i> at the top of the file browser that showed up.

<iframe src="/pad.html?p=exercise-robot-zigzag" class="u-pad-frame" frameborder="0"></iframe>

<a class="button" href="/pad.html?p=exercise-robot-zigzag" target="_blank">
    Open in a new window
</a>

### Try it Out

Try embedding a customized Python programming environment in a static website with Pythonpad. Start with our skeleton code by clicking on the button below.

<div class="buttons">
    <a class="button" href="https://codepen.io/pythonpadco/pen/Vwaarey" target="_blank">
        <span class="icon">
            <i class="fa fa-codepen"></i>
        </span>
        <span>How to use Pythonpad</span>
    </a>
</div>

<div style="height: 5rem"> <!-- vspace -->