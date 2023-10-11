See https://jupyterlite.readthedocs.io/en/stable/howto/extensions/server.html

You want these versions:

```
jupyterlite==0.1.3
jupyterlab==3.5.3
```

To build:

```
# install package in development mode
python -m pip install -e .

# link your development version of the extension
jupyter labextension develop . --overwrite

# rebuild the source after making changes
jlpm run build
```

Build the demo site:

```
conda activate jupyterlite_nbconvert
cd demo
pip install -r requirements.txt
jupyter lite build --force
```

and serve it:

```
cd demo/_output
python -m http.server
```

Build the extension and then the demo site, a common way to iterate:

```
jlpm run build && (cd demo && jupyter lite build --force)
```
