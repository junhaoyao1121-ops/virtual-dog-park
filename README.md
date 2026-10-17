# Virtual Dog Park
A dog encyclopedia and virtual pet website built for a first-year programming lab.

## Features

- Learn about Beagle, Golden Retriever, and Poodle with original local SVG illustrations.
- Adopt one virtual dog and give it a name.
- Feed and play to increase happiness.
- Advance days to see the dog grow from Puppy to Young Dog to Adult Dog.
- Save one dog's progress in the browser and use Start Over to begin again.

## Run locally

1. Open the `virtual-dog-park` folder in VS Code.
2. Install the Live Server extension if it is not installed.
3. Right-click `index.html` and choose **Open with Live Server**.
4. Use the browser tab opened by Live Server to try the website.

## Rules and saved progress

- A new dog starts on Day 1 as a Puppy with 50 happiness.
- Feed and Play each add 10 happiness, up to 100.
- Next Day adds one day and subtracts 5 happiness, down to 0.
- Day 2–3 is Young Dog; Day 4 onward is Adult Dog.
- Progress is saved in this browser's `localStorage` under `virtualDogParkPetV1`. It is not saved to a GitHub account or shared across browsers.
- Start Over asks for confirmation before deleting the saved dog.
- The three SVG dog illustrations were created for this project; they are illustrations, not real dog photos.

## Manual test checklist

- Check that all three breeds and their illustrations appear.
- Try an empty name, a name with spaces, and a valid name.
- Check that Feed and Play stop at 100 happiness.
- Use Next Day to check Day 2 and Day 4 growth and the 0 happiness limit.
- Refresh after adopting and using each care button to check saved progress.
- Try Cancel and OK in Start Over, then refresh.
- Narrow the browser window and check that the page remains usable.