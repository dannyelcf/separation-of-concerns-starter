# Separation of Concerns - To-Do List

In this repository we are going to practice all the concepts we learned in the
module
[Separation of Concerns](https://github.com/HackYourFutureBelgium/separation-of-concerns).

To do that, we are going to develop this simple To-Do List:

![To-Do List](todoList.gif 'To-Do List')

The requirements are:

- [ ] A user can see all the items in their list.
- [ ] A user can add a new item to their list.
- [ ] A user can remove any item from their list.
- [ ] A user can mark an item as "done" or "not done".

## Setup

This project uses the Node.js version `18.10.0`. So verify if in your
development environment the Node.js version is the same:

```sh
node --version
```

If the version is different, using the command `nvm` install the required
version:

```sh
nvm install 18.10.0

nvm use 18.10.0
```

Afterwards, clone this repository in your computer and enter into the folder
`separation-of-concerns-starter`:

```sh
git clone https://github.com/dannyelcf/separation-of-concerns-starter.git

cd separation-of-concerns-starter
```

Install all the dependencies:

```sh
npm run install
```

Start the [Vite](https://vitejs.dev/guide/) dev server:

```sh
npm run dev
```

Open the <http://localhost:5173/> URL in your browser.

## Development

To develop on this repository, create a new branch named as your GitHub
username:

```sh
git checkout -b yourusername
```

Push it to the GitHub:

```sh
git push --set-upstream origin yourusername
```

> Note💡
>
> The first time we push, we need to write `--set-upstream origin` in the
> `git push` command. But other times we no longer need to do that. Just
> `git push` is enough.

Before push your code to the GitHub, run the script `check` in your computer:

```sh
npm run check
```

If everything is OK, then push them:

```sh
git push
```
