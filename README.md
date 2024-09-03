## Commands to run for testing on dev environment

### Setup Commands

Use `npm install` to download all of the dependencies needed to run the web app

Use `npm run dev` to start the application

## List of Goals

There are 3 main open-ended exercises for this workshop. Feel free to collaborate with eachother, and consult outside resources.

1. Prop drilling, context, and state management
2. Understanding effects
3. Abstracting logic to custom hooks

## Exercises

### 1) Prop drilling, context, and state management

The goal of the first exercise is to clean up the code such that we are not passing down `profileData` into all of our components. I recommend using **React Context** to accomplish this feat. Use the slides as guidance, but you will likely need to research the proper syntax to implement this. You can create new files and components, but do not delete any existing components. You _may_ add new hooks to the exisiting components.

Deliverable: After this step, `Profile`, `ProfileCard`, `ProfileCardContent`, and `ProfileCardHeader` should have **no props** passed into them. All functionality should remain the same.

### 2) Understanding useEffect

The goal of the first exercise is to identify some of the bad practices of `useEffect` in React code.

First, open the browser console by right clicking the window and clicking "inspect" or by using your device's shortcut, and then clicking "console" in the menu bar.

You will notice that when you click "change user" the app logs a few things to the console. It will log a debug statement, that is just for demonstration purposes. It will also print "rendering app" 2 times. If it does not render 2 times, let us know before progressing.

The goal of this exercise is to only have the app render a single time when changing users, such that "rendering app" only is printed to the console once.

It is important to note that the app is _not_ running in React strict mode.

You should only need to modify code in the `App.tsx` file. Hint: there are two changes you will need to make, use the slides to help you. One of them is more obvious than the other.

Deliverable: After this step, clicking the change user button should only print "rendering app" to the console twice, not four times.

## Sample Solution

Take a look at the `solution` branch to see what I did to complete these tasks
