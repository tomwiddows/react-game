# Testing

## Code Validation

### HTML

For HTML validation, I used the the [HTML W3C Validator](https://validator.w3.org). The validator found no errors:

<img src="/assets/images/html-validation.png" height="300px">

### CSS

For HTML validation, I used the the [CSS Jigsaw Validator](https://jigsaw.w3.org/css-validator). The validator found no errors:

<img src="/assets/images/css-validation.png" height="300px">
![alt text](image.png)

### JS

FOr JavaScript validation, I used [JS Hint](https://jshint.com/):

<img src="/assets/images/js-validation.png" height="300px">

The feedback received states that the exponential operator (**) is only compatible with ES 7 and above. To prevent any working errors on older browser versions, I have altered my code to use the Math.pow() function instead.

### Lighthouse

The lighthouse test analysed the page load and discovered no issues:

<img src="/assets/images/lighthouse-test.png" height="300px">

### Responsiveness

I tested the game on my mobile device as well as multiple screen widths on my laptop and found one bug: On my mobile browser, the scrollIntoView function does not work. Furthermore, upon scrolling to view the whole canvas, the screen size sometimes adjusts slightly, which automatically triggers the canvas to clear due to the resizeCanvas() function. The game may still be played if the circle's previous position is remembered because the circle's centre point co-ordinates are still stored and the screen only changes size slightly, meaning the co-ordinates are very similar to before. After the empty canvas is clicked in the position that the circle was in previously, the game continues as normal. I could not find a way to fix this bug, as the canvas automatically clears upon resize.